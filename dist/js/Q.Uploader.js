//devin87@qq.com
//build:2016/10/12 13:57:36
!function(e,t){"use strict";function r(e){switch(e){case H:return"准备中";case N:return"上传中";case O:return"已完成";case P:return"已跳过";case z:return"已取消";case q:return"已失败"}return e}function i(){var t=e.XMLHttpRequest;t&&(new t).upload&&e.FormData&&(x=!0);var r=document.createElement("input");r.type="file",b=!!r.files,E=x}function a(e,t){var r=e.lastIndexOf(t);return-1!=r?e.slice(r):""}function n(e){if(e){for(var t=e.split(","),r={},i=0,a=t.length;a>i;i++)r[t[i]]=!0;return r}}function s(e,t){e.attachEvent?e.attachEvent("onload",t):e.addEventListener("load",t,!1)}function o(e,t,r){if(t&&!(0>=t)){var i,a=Date.now();if(r>=t)return i=a-e.startTime,i?e.avgSpeed=Math.min(Math.round(1e3*t/i),t):e.speed||(e.avgSpeed=e.speed=t),e.time=i||0,void(e.endTime=a);i=a-e.lastTime,200>i||(e.speed=Math.min(Math.round(1e3*(r-e.loaded)/i),e.total),e.lastTime=a)}}function u(e){var t=this;t.guid=e.guid||"uploader"+ ++I,t.url=e.url,t.dataType=e.dataType||"json",t.data=e.data,t.target=e.target,t.html5=x&&!!l(e.html5,!0),t.multiple=b&&t.html5&&!!l(e.multiple,!0),t.clickTrigger=E&&!!l(e.clickTrigger,!0),t.workerThread=t.html5?e.workerThread||1:1,t.workerIdle=t.workerThread,t.auto=e.auto!==!1,t.upName=e.upName||"upfile",t.allows=n(e.allows),t.disallows=n(e.disallows),t.chunkSize=e.chunkSize||2097152,t.isSlice=!!e.isSlice,t.isQueryState=!!l(e.isQueryState,t.isSlice),t.isMd5=!!l(e.isMd5,t.isSlice),t.isUploadAfterHash=e.isUploadAfterHash!==!1,t.container=e.container||document.body,e.getPos&&(t.getPos=e.getPos);var r=e.UI||{};r.init&&(t.init=r.init),r.draw&&(t.draw=r.draw),r.update&&(t.update=r.update),r.over&&(t.over=r.over),t.fns=e.on||{},t.ops=e,t.list=[],t.map={},t.index=0,t.started=!1,t._init()}var l=Q.def,d=Q.fire,p=Q.extend,c=Q.getFirst,f=Q.getLast,h=JSON.parse,m=Q.createEle,v=Q.parseHTML,g=Q.setOpacity,_=Q.getOffset,y=Q.md5File,w=Q.event,T=w.add,k=w.trigger,S=w.stop,x=!1,b=!1,E=!1,I=0,L=0,M=0,H=0,N=1,O=2,P=-1,z=-2,q=-3;u.prototype={constructor:u,_init:function(){var e=this;if(!e._inited){e._inited=!0;var r=e.guid,i=e.target,a=e.container,n=m("div","upload-input "+r);if(a.appendChild(n),e.boxInput=n,!e.html5){var o="upload_iframe_"+r,u='<iframe class="u-iframe" name="'+o+'"></iframe><form class="u-form" action="" method="post" enctype="multipart/form-data" target="'+o+'"></form>',l=m("div","upload-html4 "+r,u);a.appendChild(l);var d=c(l),p=f(l);e.iframe=d,e.form=p,s(d,function(){if(0==e.workerIdle){var r;try{r=d.contentWindow.document.body.innerHTML}catch(i){}e.complete(t,O,r)}})}return e.clickTrigger?T(i,"click",function(t){e.fire("select",t)!==!1&&(e.resetInput(),k(e.inputFile,"click"))}):(T(n,"click",function(t){e.fire("select",t)===!1&&S(t)}),g(n,0),e.resetInput()),e.fire("init"),e.run("init")}},resetInput:function(){var e=this,t=e.boxInput;t.innerHTML='<input type="file" name="'+e.upName+'" style="'+(e.clickTrigger?"visibility: hidden;":"font-size:100px;")+'"'+(e.multiple?' multiple="multiple"':"")+">";var r=c(t);return T(r,"change",function(t){e.add(this),e.html5||e.resetInput()}),e.inputFile=r,e.updatePos()},updatePos:function(e){var t=this;if(t.clickTrigger)return t;var r=t.getPos||_,i=t.boxInput,a=c(i),n=t.target,s=n.offsetWidth,o=n.offsetHeight,u=0==s?{left:-1e4,top:-1e4}:r(n);return i.style.width=a.style.width=s+"px",i.style.height=a.style.height=o+"px",i.style.left=u.left+"px",i.style.top=u.top+"px",e&&(i.style.zIndex=++M),t},fire:function(e,t,r){if(!r)return d(this.fns[e],this,t);var i=this.fns[e+"Async"];return i?d(i,this,t,r):void r(d(this.fns[e],this,t))},run:function(e,t){var r=this[e];return r&&d(r,this,t),this},addTask:function(e,t){if(e||t){var r,i;t?(r=t.name||t.fileName,i=t.size||t.fileSize):(r=a(e.value,"\\").slice(1)||e.value,i=-1);var n=this,s=a(r,".").toLowerCase(),o=n.disallows&&n.disallows[s]||n.allows&&!n.allows[s],u={id:++L,name:r,ext:s,size:i,input:e,file:t,state:o?P:H};return o&&(u.disabled=!0),n.fire("add",u,function(e){e===!1||u.disabled||(u.index=n.list.length,n.list.push(u),n.map[u.id]=u,n.run("draw",u),n.auto&&n.start())}),u}},add:function(e){var r=this;if("INPUT"==e.tagName){var i=e.files;if(i)for(var a=0,n=i.length;n>a;a++)r.addTask(e,i[a]);else r.addTask(e)}else r.addTask(t,e)},addList:function(e){for(var t=0,r=e.length;r>t;t++)this.add(e[t])},get:function(e){return e!=t?this.map[e]:void 0},cancel:function(e,t){var r=this,i=r.get(e);if(i){var a=i.state;if(a!=H&&a!=N)return r;if(a==N){var n=i.xhr;if(n)return n.abort(),r;r.iframe.contentWindow.location="about:blank"}return t?r:r.complete(i,z)}},remove:function(e){var t=this.get(e);t&&(t.state==N&&this.cancel(e),t.deleted=!0,this.fire("remove",t))},start:function(){var e=this,t=e.workerIdle,r=e.list,i=e.index,a=r.length;if(e.started||(e.started=!0),0>=a||i>=a||0>=t)return e;var n=r[i];return e.index++,e.upload(n)},upload:function(e){var t=this;return!e||e.state!=H||e.skip?t.start():(e.url=t.url,t.workerIdle--,t.fire("upload",e,function(r){return r===!1?t.complete(e,P):void(t.html5&&e.file?t._upload_html5_ready(e):e.input?t._upload_html4(e):t.complete(e,P))}),t)},queryState:function(e,t){var r=this,i=r.url,a=new XMLHttpRequest;return e.queryUrl=i+(-1==i.indexOf("?")?"?":"&")+"action=query&hash="+(e.hash||e.name),r.fire("sliceQuery",e),a.open("GET",e.queryUrl),a.onreadystatechange=function(){if(4==a.readyState){var i,n;if(a.status>=200&&a.status<400)if(i=a.responseText,"ok"===i?n={ret:1}:i&&(n=h(i)),n&&"number"!=typeof n||(n={ret:0,start:n}),e.response=i,e.json=n,1==n.ret)e.queryOK=!0,r.cancel(e.id,!0).complete(e,O);else{var s=+n.start||0;s!=Math.floor(s)&&(s=0),e.sliceStart=s}d(t,r,a)}},a.onerror=function(){d(t,r,a)},a.send(null),r},_upload_html5_ready:function(e){var t=this,r=function(){e.state!=O&&(t.isSlice?t._upload_slice(e):t._upload_html5(e))},i=function(r){t.fire("hash",e,function(){e.hash&&t.isQueryState&&e.state!=O?t.queryState(e,r):r()})},a=function(r){if(t.isMd5&&y){var a=t.fns.hashProgress;y(e.file,function(t,a){e.hash=t,e.timeHash=a,i(r)},function(r){d(a,t,e,r)})}else i(r)};return t.isUploadAfterHash?a(r):(r(),a()),t},_process_params:function(e,t){this.data&&Object.forEach(this.data,t),e.data&&Object.forEach(e.data,t)},_upload_html5:function(e){var t=this,r=new XMLHttpRequest;e.xhr=r,r.upload.addEventListener("progress",function(r){t.progress(e,r.total,r.loaded)},!1),r.addEventListener("load",function(r){t.complete(e,O,r.target.responseText)},!1),r.addEventListener("error",function(){t.complete(e,q)},!1),r.addEventListener("abort",function(){t.complete(e,z)},!1);var i=new FormData;t._process_params(e,function(e,t){i.append(e,t)}),i.append("fileName",e.name),i.append(t.upName,e.blob||e.file,e.name),r.open("POST",e.url),t.fire("send",e,function(a){return a===!1?t.complete(e,P):(r.send(i),void t._afterSend(e))})},_upload_html4:function(e){var t=this,r=t.form,i=e.input;return i._uploaded?t.complete(e,O):(i._uploaded=!0,i.name=t.upName,r.innerHTML="",r.appendChild(i),r.action=e.url,t._process_params(e,function(e,t){r.appendChild(v('<input type="hidden" name="'+e+'" value="'+t+'">'))}),void t.fire("send",e,function(i){return i===!1?t.complete(e,P):(r.submit(),void t._afterSend(e))}))},_afterSend:function(e){e.lastTime=e.startTime=Date.now(),e.state=N,this._lastTask=e,this.progress(e)},progress:function(e,t,r){t||(t=e.size),(!r||0>r)&&(r=0);var i=e.state||H;r>t&&(r=t),r>0&&i==H&&(e.state=i=N);var a=i==O;a&&(t=r=e.size),o(e,t,r),e.total=t,e.loaded=r,this.fire("progress",e),this.run("update",e)},_process_response:function(e,t){e.response=t,t&&"json"==this.dataType&&(e.json=h(t))},complete:function(e,r,i){var a=this;return e||1!=a.workerThread||(e=a._lastTask),e&&(r!=t&&(e.state=r),e.state!=N&&r!=O||(e.state=O,a.progress(e,e.size,e.size)),i!==t&&a._process_response(e,i)),r==z&&a.fire("cancel",e),a.fire("complete",e),a.run("over",e).run("update",e),a.workerIdle++,a.started&&a.start(),a}},u.extend=function(e,t){p(u.prototype,e,t)},i(),p(u,{support:{html5:x,multiple:b},READY:H,PROCESSING:N,COMPLETE:O,SKIP:P,CANCEL:z,ERROR:q,getStatusText:r}),Q.Uploader=u}(window);