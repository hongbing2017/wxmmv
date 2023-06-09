# 用小程序替代验证码实现人机验证


通常一个网站会使用图片验证码来验证用户是一个真实人类，防止机器人刷服务，薅羊毛，消耗资源。
    
但随着AI识别能力提高，简单的图片验证码已经被破解，过于复杂的验证码又会让真实用户很难使用。

但是，用户用微信扫码并唤醒小程序这个行为是很难伪造的，因此可以用这个行为来检测用户的真实性。

原理很简单：小程序给网站按需提供一次性的二维码，用户微信扫码唤醒本小程序，本小程序向网站后台发送通知，网站后台授权前端继续提供服务。

除了扫码这个行为，本验证方案不需要用户做任何操作，也无须用户提供任何身份信息。

而网站需要做的就是在本小程序注册自己的服务，并提供一个回调网址。

人机验证小程序作为基础工具提供免费服务，小程序和后端代码都在此开源。

在线演示：https://myfile.link/mmv/index
实际应用案例：https://myfile.link

# 如何在自己的网站中使用


假设你已经拥有一个网站，并需要验证码服务，只需要三步就可拥有一个人机验证系统。

## 1 登记网站

请用微信扫码扫码或者搜索人机验证小程序。

![二维码](./qr.png)

打开小程序后，登记自己的网站，也就是提供一个回调url，这个回调url用于接受小程序后台通知网站已经扫码某个二维码。

登记会立时生效，同时你会得到一个skey，用于你的网站后台向程序后台申请二维码。

## 2 调用API申请二维码并在前端展示

每当你需要向用户展示一个验证码时，在你的网站后台用以下API申请一个二维码

API：https://myfile.link/getcaptcha?skey=xxxx (把xxx替换成你自己的skey)

调用结果：
```JS
{
    code:0,
    data:{
        qrcode, //二维码图像，格式为："data:image/png;base64,xxxxxx"
        captcha //此二维码的扫码值
    }
}
```

收到二维码后，你首先计算qrcode的MD45值，然后和captcha一起保存在一个列表里，等待验证，比如：

```js
let md5 = MD5(qrcode)
var captchaList = []
captchaList.push({
    md5,
    scene,
    state:0        //=0表示还未验证，=1表示验证通过
    t: Date.now()  //时间戳,用来控制此验证码的有效时间，超时可以要求刷新二维码重新验证
})
```

接下来和你使用传统图片验证码一样，把qrcode和md5一起发到前端显示。

```html
 <img id="{{md5}}" src="{{qrcode}}"></img>
```

前端收到二维码显示的同时，就可以周期性的询问后台是否得到验证

```js
let  bVerify = false
let t = setInterval(() => {
//周期性的询问后台二维码是否得到验证,这里用二维码的md5作为操作凭据
$.ajax("/captchaResult?token=" + md5, {
        method: "get",
    }).done(function (res) {
        if (res && res.code == 0) {
          clearInterval(t)
          bVerify =true
        }
      });
    }, 1000)
```

后台收到请求后会检查二维码验证状态响应前端
```js
app.get("/captchaResult", async (req, res) => {
  const {token}=req.query //验证二维码的MD5
  let timestamp= Date.now()
  captchaList.some((item,index)=>{
    if(item.md5 ==  token){
      if(item.state==1){
        res.json({//通知前端验证成功
          code:0,
          result:1
        })
        captchaList.splice(index,1)
      }else{      
        res.json({
          code:0,
          result:0
        })
      }    
    }else{
      if(item.t+600000>timestamp){//超时10分钟删除 
        captchaList.splice(index,1)
      }
    }
  })
});
```
前端收到验证结果就可以进行下一步操作了，操作时还是要带上二维码的md5供后台验证
```js
$.ajax("/dosomething?token=" + md5, {
        method: "get",
}).done(function (res) {
        
});
```
实际上你可以省略前一步询问直接调用业务访问，只是需要添加后台通知验证失败时的处理逻辑，比如等待一会儿重新提交操作。

## 处理回调

如果用户拿微信扫了二维码，他接下来什么都不需要做，微信会调起人机验证小程序，小程序会自动按网站注册的回调url发出通知

假设你注册的回调url为：https://mywebsite.com/captcha，

那么你的网站会收到类似这样的通知：https://mywebsite.com/captcha?code=123

其中code就是之前申请二维码时得到的captcha，根据这个captcha你可以在captchaList里找到指定二维码，改变它的验证状态

```js
app.get("/captcha", async (req, res) => {
  const {code}=req.query 
  captchaList.some((item,index)=>{
    if(item.scene ==  code){
        item.state = 1 //设置此二维码验证状态为通过
        return true
    }
  })
});
```

请确保你的网站后台正确响应这个回调并返回200，否则小程序后台会按5秒间隔最多通知三次。

## 容错处理

**如果网站申请二维码失败怎么办？**

二维码可以按需不限数量的申请。

尽管申请失败这种情况会很少发生，但却不能保证不会发生。

人机验证的目的是防止机器人大规模薅羊毛或攻击，并不是网站提供服务所必须。

所以，一旦偶发这种情况，这边建议你直接放行用户，也可以预先申请一定数量的二维码，人机验证小程序允许用户至多预先申请500个。


**二维码可以重复使用吗**

我想是可以的，假设你网站申请了500个二维码循环使用，这500个都被人知道了也不能伪造请求，因为它还是需要用手机微信扫码才能让后台认证这个二维码的状态，而扫码这个行为是很难伪造的。

但是要防止不同用户同时用一个二维码的情况，但正如前面所言，人机验证目的是防止大规模机器人，并不需要人人精确验证，所以特殊情况放行也可以接受。

**如果用户很久都没扫怎么办？**

这是一个使用逻辑问题，与验证码本身无关。

可以考虑网站后台设置二维码的有效期，如果超时二维码就作废，移出验证列表，避免列表越来越大。

同时前端也可设置相同的时间间隔，如果超时就要求刷新二维码，手动通知后台启用新的二维码。


