webpackJsonp([1],{"+BTi":function(t,e){},"+Rdb":function(t,e){},"/I4U":function(t,e){},"/jMY":function(t,e){},0:function(t,e){},1:function(t,e){},"2rGO":function(t,e){},"3f40":function(t,e){},"4qOc":function(t,e){},"5ZWt":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("el-col",{attrs:{xs:24,sm:24,md:{span:16,offset:4},lg:{span:14,offset:5},xl:{span:12,offset:6}}},[n("el-container",{attrs:{id:"bk"}},[n("el-header",[n("img",{staticClass:"logo",attrs:{src:"static/logo.png"}}),t._v(" "),n("div",{staticClass:"slogan"},[t._v("提供私人富文本信息加密存储与回取服务")])]),t._v(" "),n("el-main",[n("div",{staticClass:"main"},[n("quill-editor",{ref:"editor",staticClass:"editor",attrs:{id:"editor",options:t.editorOption,disabled:t.step>1},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("div",{staticClass:"tip"},[n("div",{staticStyle:{"font-weight":"bold",padding:"10px 0px"}},[t._v("使用说明：")]),t._v(" "),n("ul",[n("li",[t._v("网站会给你一个访问链接，可用于向第三方应用提供内容 ")]),t._v(" "),n("li",[t._v("网站只存储加密后的信息，请自行记住密码，自行解密")]),t._v(" "),n("li",[t._v("或者把下载的内容粘贴在这里帮你解密")]),t._v(" "),n("li",[t._v("加密算法采用标准AES")]),t._v(" "),n("li",[t._v("信息大小限制为5M，超过无法上传")]),t._v(" "),n("li",[t._v("信息免费保留24小时或免费下载2次，超限删除")]),t._v(" "),n("li",[t._v("如果需要更多的保留时间和下载次数请联系QQ：642128162")])])]),t._v(" "),t.bShowCaptcha?n("div",{staticClass:"captchaview",attrs:{title:"人机验证"}},[n("img",{staticStyle:{width:"144px",height:"144px",margin:"0 auto"},attrs:{src:t.qrCode,alt:"QR Code"}}),t._v(" "),t.timeCounter?n("p",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.timeCounter))]):t._e(),t._v(" "),n("p",{staticStyle:{color:"#333","font-size":"14px","text-align":"center",padding:"10px"}},[t._v("\n                            为避免资源滥用，请用微信扫码证明您是真实用户, 如果您用手机使用本网站，请截图后再用微信扫码")])]):n("div",{staticClass:"tool"},[n("el-input",{staticClass:"input",attrs:{placeholder:"请输入密码",placeholderStyle:"color:#999;"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("el-button",{staticClass:"btn",attrs:{type:"primary",size:"small"},on:{click:t.onEncryp}},[t._v("加密存储")]),t._v(" "),n("el-button",{staticClass:"btn",attrs:{type:"primary",size:"small"},on:{click:t.onDecryp}},[t._v("解密")])],1)],1)]),t._v(" "),n("el-footer",{staticClass:"footer"},[n("el-link",{attrs:{type:"primary",href:"https://beian.miit.gov.cn/"}},[t._v("蜀ICP备2021013463号-2")])],1)],1),t._v(" "),t.bUploadDlg?n("div",{staticClass:"uploadprogress"},[n("div",{staticClass:"uploadcenter"},[100===t.uploadProgress?n("block",[100===t.uploadProgress?n("el-progress",{staticClass:"progressCircle",attrs:{type:"circle","stroke-width":12,width:200,percentage:t.uploadProgress,status:"success"}}):t._e(),t._v(" "),n("p",{staticClass:"uploadtip"},[t._v("请记住你的下载链接: "),n("span",{staticStyle:{color:"#F56C6C"}},[t._v(t._s(t.downloadUrl))])]),t._v(" "),n("div",{staticClass:"toolbar"},[n("el-button",{staticClass:"uploadbtn",attrs:{type:"success",size:"small"},on:{click:t.onCopyUrl}},[t._v("复制链接")]),t._v(" "),n("el-button",{staticClass:"uploadbtn",attrs:{type:"success",size:"small"},on:{click:t.onUploadOK}},[t._v("确定")])],1)],1):n("block",[n("el-progress",{staticClass:"progressCircle",attrs:{type:"circle","stroke-width":12,width:200,percentage:t.uploadProgress}}),t._v(" "),n("div",{staticClass:"uploadtip"},[t._v("上传速度: "+t._s(t.uploadSpeed))]),t._v(" "),n("el-button",{staticClass:"uploadbtn",attrs:{type:"danger",size:"small"},on:{click:t.onCancleUpload}},[t._v("取消上传")])],1)],1)]):t._e()],1)],1)},o=[],a={render:s,staticRenderFns:o};e.a=a},"8jhb":function(t,e){},BNJR:function(t,e){},Dte2:function(t,e){},FGQs:function(t,e,n){"use strict";(function(t){function s(e){return t.from(e).length}var o=n("Xxa5"),a=n.n(o),r=n("//Fk"),i=n.n(r),c=n("exGp"),u=n.n(c),l=n("rQBB"),d=null;e.a={name:"bk",components:{},data:function(){return{bUploadDlg:!1,downloadUrl:"",content:"",password:"",bShowCaptcha:!1,authCode:"",qrCode:"",timeCounter:0}},methods:{onEncryp:function(){var t=this;return u()(a.a.mark(function e(){var n,o,r,c,u,p,f;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(p=function(t){return new i.a(function(e){return setTimeout(e,t)})},t.password){e.next=4;break}return t.$msgbox({title:"错误",message:"请输入加密密码"}),e.abrupt("return");case 4:if(0!==(n=s(t.content))){e.next=8;break}return t.$msgbox({title:"请先输入留言"}),e.abrupt("return");case 8:if(!(n>5242880)){e.next=11;break}return t.$msgbox({title:"留言大小超过5M，请减少内容"}),e.abrupt("return");case 11:return console.log("开始加密"),o=l.Encrypted(t.password,t.content),r=l.SHA1(o),c=t.$loading({lock:!0,text:"开始请求人机验证",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),e.next=17,l.requestAuth(r);case 17:if(u=e.sent,c.close(),u){e.next=22;break}return t.$msgbox({title:"提示",message:"请求人机验证失败，请稍后重试"}),e.abrupt("return");case 22:t.authCode=u.md5,t.qrCode=u.qrcode,t.bShowCaptcha=!0,n=60,t.timeCounter=n,f=0;case 28:if(!(f<n)){e.next=40;break}return e.next=31,p(1e3);case 31:return e.next=33,l.waitAuth(t.authCode);case 33:if(!(u=e.sent)){e.next=36;break}return e.abrupt("break",40);case 36:t.timeCounter--;case 37:f++,e.next=28;break;case 40:if(t.bShowCaptcha=!1,t.timeCounter=0,t.qrCode="",u){e.next=46;break}return t.$msgbox({title:"提示",message:"人机验证失败或超时，请稍后重试"}),e.abrupt("return");case 46:return console.log("授权结果：",u),l.InitCos(u.data.credentials),console.log("上传"),e.next=51,l.upload(r,o,function(){console.log("上传taskID:",taskId),d=taskId,t.bUploadDlg=!0},function(){t.uploadProgress=parseInt(1e4*info.percent)/100,t.uploadSpeed=parseInt(info.speed/1024/1024*100)/100,console.log("progress:",info)});case 51:if(!(u=e.sent)){e.next=61;break}return c=t.$loading({lock:!0,text:"正在提交...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),e.next=56,l.submit(r);case 56:u=e.sent,c.close(),u?(t.$msgbox({title:"提示",message:"上传成功"}),console.log("提交结果：",u)):(t.bUploadDlg=!1,t.$msgbox({title:"提示",message:"上传失败，请稍后重试"})),e.next=62;break;case 61:t.$msgbox({title:"提示",message:"上传失败，请稍后重试"});case 62:case"end":return e.stop()}},e,t)}))()},onDecryp:function(){if(!this.content)return void this.$msgbox({title:"错误",message:"请先粘贴下载的加密信息"});if(!this.password)return void this.$msgbox({title:"错误",message:"请输入解密密码"});var t=Decrypted(this.password,this.content);this.content=t}}}}).call(e,n("EuP9").Buffer)},GXEp:function(t,e){},"IUI+":function(t,e){},M93x:function(t,e,n){"use strict";function s(t){n("/jMY")}var o=n("xJD8"),a=n("Xcpg"),r=n("VU/8"),i=s,c=r(o.a,a.a,!1,i,null,null);e.a=c.exports},NHnr:function(t,e,n){"use strict";function s(){var t=document.documentElement.clientWidth||document.body.clientWidth,e=document.getElementsByTagName("html")[0];e.style.fontSize=t/10+"px",parseInt(e.style.fontSize)>100?e.style.fontSize="100px":parseInt(e.style.fontSize)<24&&(e.style.fontSize="24px"),console.log("html fontsize:",e.style.fontSize)}Object.defineProperty(e,"__esModule",{value:!0});var o=n("cwe7"),a=(n.n(o),n("+BTi")),r=(n.n(a),n("2X9z")),i=n.n(r),c=n("/I4U"),u=(n.n(c),n("yg6k")),l=n.n(u),d=n("oq7i"),p=(n.n(d),n("+TD8")),f=n.n(p),g=n("2rGO"),m=(n.n(g),n("nu7/")),v=n.n(m),h=n("IUI+"),y=(n.n(h),n("h2ff")),b=n.n(y),w=n("uKbn"),x=(n.n(w),n("GegP")),S=n.n(x),_=n("jZDA"),k=(n.n(_),n("91Nw")),C=n.n(k),T=n("d7TW"),q=(n.n(T),n("ajQY")),I=n.n(q),z=n("+Rdb"),D=(n.n(z),n("Mezo")),E=n.n(D),U=n("qunJ"),$=(n.n(U),n("vqwl")),R=n.n($),A=n("isgN"),J=(n.n(A),n("tLa+")),O=n.n(J),M=n("Dte2"),N=(n.n(M),n("q4le")),B=n.n(N),X=n("isE6"),H=(n.n(X),n("LR6y")),K=n.n(H),P=n("GXEp"),j=(n.n(P),n("mtrD")),G=n.n(j),F=n("BNJR"),Q=(n.n(F),n("fDPO")),Y=n.n(Q),W=n("8jhb"),Z=(n.n(W),n("RDoK")),L=n.n(Z),V=n("Zki6"),tt=(n.n(V),n("0kY3")),et=n.n(tt),nt=n("X+ky"),st=(n.n(nt),n("HJMx")),ot=n.n(st),at=n("Yq4J"),rt=(n.n(at),n("qubY")),it=n.n(rt),ct=n("/5sW"),ut=n("M93x"),lt=n("YaEn"),dt=n("G0J2"),pt=n.n(dt),ft=n("3f40"),gt=(n.n(ft),n("4qOc")),mt=(n.n(gt),n("tvR6"));n.n(mt);ct.default.use(it.a),ct.default.use(ot.a),ct.default.use(et.a),ct.default.use(L.a),ct.default.use(Y.a),ct.default.use(G.a),ct.default.use(K.a),ct.default.use(B.a),ct.default.use(O.a),ct.default.use(R.a),ct.default.use(E.a),ct.default.use(I.a),ct.default.use(C.a),ct.default.use(S.a),ct.default.use(b.a),ct.default.use(v.a.directive),ct.default.prototype.$loading=v.a.service,ct.default.prototype.$msgbox=f.a,ct.default.prototype.$alert=f.a.alert,ct.default.prototype.$confirm=f.a.confirm,ct.default.prototype.$prompt=f.a.prompt,ct.default.prototype.$notify=l.a,ct.default.prototype.$message=i.a,window.baseUrl="http://myfile.link",ct.default.use(pt.a,{theme:"snow"}),window.onresize=s,s(),console.log("NODE_ENV:%s baseUrl:%s","production",window.baseUrl),ct.default.config.productionTip=!1,new ct.default({el:"#app",router:lt.a,render:function(t){return t(ut.a)}})},"X+ky":function(t,e){},Xcpg:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a={render:s,staticRenderFns:o};e.a=a},YaEn:function(t,e,n){"use strict";var s=n("/5sW"),o=n("/ocq"),a=n("wUZA");s.default.use(o.a),e.a=new o.a({routes:[{path:"/",name:"Home",component:a.a}]})},Yq4J:function(t,e){},Zki6:function(t,e){},b2y5:function(t,e){},cwe7:function(t,e){},d7TW:function(t,e){},isE6:function(t,e){},isgN:function(t,e){},jZDA:function(t,e){},oq7i:function(t,e){},qunJ:function(t,e){},rQBB:function(t,e,n){"use strict";function s(t,e,n,s){return new x.a(function(o,a){var r=q+"/getpassword?id="+t+"&code="+e+"&date="+n+"&text="+s;console.log("url:",r);var i=new XMLHttpRequest;i.open("get",r),i.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var t=JSON.parse(this.response);if(!t||0==t.code)return console.log("获取官方密码错误：",t.message),void o("验证码错误");t=t.data;var e=t.credentials;e||(console.error("credentials invalid:\n"+b()(t,null,2)),o(null)),I=new _({getAuthorization:function(n,s){s({TmpSecretId:e.tmpSecretId,TmpSecretKey:e.tmpSecretKey,SecurityToken:e.sessionToken,StartTime:t.startTime,ExpiredTime:t.expiredTime})}}),o(t.password)}},i.send()})}function o(t){var e=q+"/requestAuth?id="+t;return new x.a(function(t,n){var s=new XMLHttpRequest;s.open("get",e),s.send(),s.onreadystatechange=function(){if(4===this.readyState)if(200===this.status){var e=JSON.parse(this.response);t(0==e.code?e.data:null)}else console.log("getcaptcha err:",this.response),t(null)}})}function a(t){var e=q+"/captcharesult?token="+t;return new x.a(function(t,n){var s=new XMLHttpRequest;s.open("get",e),s.send(),s.onreadystatechange=function(){if(4===this.readyState)if(200===this.status){var e=JSON.parse(this.response);t(0==e.code&&1==e.result?e.data:null)}else console.log("captcharesult err:",this.response),t(null)}})}function r(t){I||(I=new _({getAuthorization:function(e,n){n({TmpSecretId:t.tmpSecretId,TmpSecretKey:t.tmpSecretKey,SecurityToken:t.sessionToken,StartTime:data.startTime,ExpiredTime:data.expiredTime})}}))}function i(){var t=q+"/sts?memoID=12121";I=new _({getAuthorization:function(e,n){var s=new XMLHttpRequest;s.open("get",t),s.send(),s.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var t=JSON.parse(this.response),e=t.credentials;if(!e)return void console.error("credentials invalid");n({TmpSecretId:e.tmpSecretId,TmpSecretKey:e.tmpSecretKey,SecurityToken:e.sessionToken,StartTime:t.startTime,ExpiredTime:t.expiredTime})}}}}),I.putObject({Bucket:"myfile-1308181812",Region:"ap-guangzhou",Key:"12121.txt",Body:"this is test",SliceSize:5242880,onTaskReady:function(t){console.log("上传taskID:",t)},onFileFinish:function(t,e,n){console.log(n.Key+"上传"+(t?"失败":"完成"))}},function(t,e){console.log(t||e)})}function c(){return I}function u(t,e,n,s){return new x.a(function(o){I.putObject({Bucket:"myfilelink-1308181812",Region:"ap-guangzhou",Key:t+".txt",Body:e,SliceSize:5242880,onTaskReady:n,onProgress:s},function(){var t=h()(m.a.mark(function t(e,n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("上传结果:",e||n),o(e?!1:n);case 2:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}())})}function l(t){var e=q+"/submit?id="+t;return new x.a(function(t){var n=new XMLHttpRequest;n.open("get",e),n.send(),n.onreadystatechange=function(){if(4===this.readyState){if(200===this.status){var e=JSON.parse(this.response);t(0==e.code?null:e)}t(null)}}})}function d(t,e){return S.AES.encrypt(e,t).toString()}function p(t,e){return S.AES.decrypt(e,t).toString(S.enc.Utf8)}function f(t){return S.SHA1(t).toString()}Object.defineProperty(e,"__esModule",{value:!0}),e.queryVerify=s,e.requestAuth=o,e.waitAuth=a,e.InitCos=r,e.testCos=i,e.GetCosInstance=c,e.upload=u,e.submit=l,e.Encrypted=d,e.Decrypted=p,e.SHA1=f;var g=n("Xxa5"),m=n.n(g),v=n("exGp"),h=n.n(v),y=n("mvHQ"),b=n.n(y),w=n("//Fk"),x=n.n(w),S=(n("nFqq"),n("Av7u")),_=n("6qJD"),k=window.location.protocol,C=window.location.hostname,T=window.location.port,q=k+"//"+C+(T?":"+T:"");console.log("_host:",q);var I=null},tvR6:function(t,e){},uKbn:function(t,e){},wUZA:function(t,e,n){"use strict";function s(t){n("b2y5")}var o=n("FGQs"),a=n("5ZWt"),r=n("VU/8"),i=s,c=r(o.a,a.a,!1,i,null,null);e.a=c.exports},xJD8:function(t,e,n){"use strict";e.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.570e28d5f7e11eca8ddb.js.map