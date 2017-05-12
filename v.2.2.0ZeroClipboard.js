!function(a,b){"use strict";var M,O,P,c=a,d=c.document,e=c.navigator,f=c.setTimeout,g=c.clearTimeout,h=c.setInterval,i=c.clearInterval,j=c.getComputedStyle,k=c.encodeURIComponent,l=c.ActiveXObject,m=c.Error,n=c.Number.parseInt||c.parseInt,o=c.Number.parseFloat||c.parseFloat,p=c.Number.isNaN||c.isNaN,q=c.Date.now,r=c.Object.keys,s=c.Object.defineProperty,t=c.Object.prototype.hasOwnProperty,u=c.Array.prototype.slice,v=function(){var a=function(a){return a};if("function"==typeof c.wrap&&"function"==typeof c.unwrap)try{var b=d.createElement("div"),e=c.unwrap(b);1===b.nodeType&&e&&1===e.nodeType&&(a=c.unwrap)}catch(a){}return a}(),w=function(a){return u.call(a,0)},x=function(){var a,c,d,e,g,h=w(arguments),i=h[0]||{};for(a=1,c=h.length;a<c;a++)if(null!=(d=h[a]))for(e in d)t.call(d,e)&&(i[e],g=d[e],i!==g&&g!==b&&(i[e]=g));return i},y=function(a){var b,c,d,e;if("object"!=typeof a||null==a||"number"==typeof a.nodeType)b=a;else if("number"==typeof a.length)for(b=[],c=0,d=a.length;c<d;c++)t.call(a,c)&&(b[c]=y(a[c]));else{b={};for(e in a)t.call(a,e)&&(b[e]=y(a[e]))}return b},z=function(a,b){for(var c={},d=0,e=b.length;d<e;d++)b[d]in a&&(c[b[d]]=a[b[d]]);return c},A=function(a,b){var c={};for(var d in a)-1===b.indexOf(d)&&(c[d]=a[d]);return c},B=function(a){if(a)for(var b in a)t.call(a,b)&&delete a[b];return a},C=function(a,b){if(a&&1===a.nodeType&&a.ownerDocument&&b&&(1===b.nodeType&&b.ownerDocument&&b.ownerDocument===a.ownerDocument||9===b.nodeType&&!b.ownerDocument&&b===a.ownerDocument))do{if(a===b)return!0;a=a.parentNode}while(a);return!1},D=function(a){var b;return"string"==typeof a&&a&&(b=a.split("#")[0].split("?")[0],b=a.slice(0,a.lastIndexOf("/")+1)),b},E=function(a){var b,c;return"string"==typeof a&&a&&(c=a.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),c&&c[1]?b=c[1]:(c=a.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/))&&c[1]&&(b=c[1])),b},F=function(){var a,b;try{throw new m}catch(a){b=a}return b&&(a=b.sourceURL||b.fileName||E(b.stack)),a},G=function(){var a,c,e;if(d.currentScript&&(a=d.currentScript.src))return a;if(c=d.getElementsByTagName("script"),1===c.length)return c[0].src||b;if("readyState"in c[0])for(e=c.length;e--;)if("interactive"===c[e].readyState&&(a=c[e].src))return a;return"loading"===d.readyState&&(a=c[c.length-1].src)?a:(a=F())?a:b},H=function(){var a,c,e,f=d.getElementsByTagName("script");for(a=f.length;a--;){if(!(e=f[a].src)){c=null;break}if(e=D(e),null==c)c=e;else if(c!==e){c=null;break}}return c||b},I=function(){return(D(G())||H()||"")+"ZeroClipboard.swf"},J=function(){return null==a.opener&&(!!a.top&&a!=a.top||!!a.parent&&a!=a.parent)}(),K={bridge:null,version:"0.0.0",pluginType:"unknown",disabled:null,outdated:null,sandboxed:null,unavailable:null,degraded:null,deactivated:null,overdue:null,ready:null},L="11.0.0",N={},Q={},R=null,S=0,T=0,U={ready:"Flash communication is established",error:{"flash-disabled":"Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.","flash-outdated":"Flash is too outdated to support ZeroClipboard","flash-sandboxed":"Attempting to run Flash in a sandboxed iframe, which is impossible","flash-unavailable":"Flash is unable to communicate bidirectionally with JavaScript","flash-degraded":"Flash is unable to preserve data fidelity when communicating with JavaScript","flash-deactivated":"Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.","flash-overdue":"Flash communication was established but NOT within the acceptable time limit","version-mismatch":"ZeroClipboard JS version number does not match ZeroClipboard SWF version number","clipboard-error":"At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard","config-mismatch":"ZeroClipboard configuration does not match Flash's reality","swf-not-found":"The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity"}},V=["flash-unavailable","flash-degraded","flash-overdue","version-mismatch","config-mismatch","clipboard-error"],W=["flash-disabled","flash-outdated","flash-sandboxed","flash-unavailable","flash-degraded","flash-deactivated","flash-overdue"],X=new RegExp("^flash-("+W.map(function(a){return a.replace(/^flash-/,"")}).join("|")+")$"),Y=new RegExp("^flash-("+W.slice(1).map(function(a){return a.replace(/^flash-/,"")}).join("|")+")$"),Z={swfPath:I(),trustedDomains:a.location.host?[a.location.host]:[],cacheBust:!0,forceEnhancedClipboard:!1,flashLoadTimeout:3e4,autoActivate:!0,bubbleEvents:!0,containerId:"global-zeroclipboard-html-bridge",containerClass:"global-zeroclipboard-container",swfObjectId:"global-zeroclipboard-flash-bridge",hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",forceHandCursor:!1,title:null,zIndex:999999999},$=function(a){if("object"==typeof a&&null!==a)for(var b in a)if(t.call(a,b))if(/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(b))Z[b]=a[b];else if(null==K.bridge)if("containerId"===b||"swfObjectId"===b){if(!na(a[b]))throw new Error("The specified `"+b+"` value is not valid as an HTML4 Element ID");Z[b]=a[b]}else Z[b]=a[b];if("string"!=typeof a||!a)return y(Z);if(t.call(Z,a))return Z[a]},_=function(){return Ta(),{browser:z(e,["userAgent","platform","appName"]),flash:A(K,["bridge"]),zeroclipboard:{version:Va.version,config:Va.config()}}},aa=function(){return!!(K.disabled||K.outdated||K.sandboxed||K.unavailable||K.degraded||K.deactivated)},ba=function(a,c){var d,e,f,g={};if("string"==typeof a&&a)f=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&void 0===c)for(d in a)t.call(a,d)&&"string"==typeof d&&d&&"function"==typeof a[d]&&Va.on(d,a[d]);if(f&&f.length){for(d=0,e=f.length;d<e;d++)a=f[d].replace(/^on/,""),g[a]=!0,N[a]||(N[a]=[]),N[a].push(c);if(g.ready&&K.ready&&Va.emit({type:"ready"}),g.error){for(d=0,e=W.length;d<e;d++)if(!0===K[W[d].replace(/^flash-/,"")]){Va.emit({type:"error",name:W[d]});break}M!==b&&Va.version!==M&&Va.emit({type:"error",name:"version-mismatch",jsVersion:Va.version,swfVersion:M})}}return Va},ca=function(a,b){var c,d,e,f,g;if(0===arguments.length)f=r(N);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&void 0===b)for(c in a)t.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&Va.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;c<d;c++)if(a=f[c].toLowerCase().replace(/^on/,""),(g=N[a])&&g.length)if(b)for(e=g.indexOf(b);-1!==e;)g.splice(e,1),e=g.indexOf(b,e);else g.length=0;return Va},da=function(a){return"string"==typeof a&&a?y(N[a])||null:y(N)},ea=function(a){var b,c,d;if((a=oa(a))&&!va(a))return"ready"===a.type&&!0===K.overdue?Va.emit({type:"error",name:"flash-overdue"}):(b=x({},a),ta.call(this,b),"copy"===a.type&&(d=Da(Q),c=d.data,R=d.formatMap),c)},fa=function(){var a=K.sandboxed;if(Ta(),"boolean"!=typeof K.ready&&(K.ready=!1),K.sandboxed!==a&&!0===K.sandboxed)K.ready=!1,Va.emit({type:"error",name:"flash-sandboxed"});else if(!Va.isFlashUnusable()&&null===K.bridge){var b=Z.flashLoadTimeout;"number"==typeof b&&b>=0&&(S=f(function(){"boolean"!=typeof K.deactivated&&(K.deactivated=!0),!0===K.deactivated&&Va.emit({type:"error",name:"flash-deactivated"})},b)),K.overdue=!1,Ba()}},ga=function(){Va.clearData(),Va.blur(),Va.emit("destroy"),Ca(),Va.off()},ha=function(a,b){var c;if("object"==typeof a&&a&&void 0===b)c=a,Va.clearData();else{if("string"!=typeof a||!a)return;c={},c[a]=b}for(var d in c)"string"==typeof d&&d&&t.call(c,d)&&"string"==typeof c[d]&&c[d]&&(Q[d]=c[d])},ia=function(a){void 0===a?(B(Q),R=null):"string"==typeof a&&t.call(Q,a)&&delete Q[a]},ja=function(a){return void 0===a?y(Q):"string"==typeof a&&t.call(Q,a)?Q[a]:void 0},ka=function(a){if(a&&1===a.nodeType){O&&(La(O,Z.activeClass),O!==a&&La(O,Z.hoverClass)),O=a,Ka(a,Z.hoverClass);var b=a.getAttribute("title")||Z.title;if("string"==typeof b&&b){var c=Aa(K.bridge);c&&c.setAttribute("title",b)}var d=!0===Z.forceHandCursor||"pointer"===Ma(a,"cursor");Ra(d),Qa()}},la=function(){var a=Aa(K.bridge);a&&(a.removeAttribute("title"),a.style.left="0px",a.style.top="-9999px",a.style.width="1px",a.style.height="1px"),O&&(La(O,Z.hoverClass),La(O,Z.activeClass),O=null)},ma=function(){return O||null},na=function(a){return"string"==typeof a&&a&&/^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(a)},oa=function(a){var b;if("string"==typeof a&&a?(b=a,a={}):"object"==typeof a&&a&&"string"==typeof a.type&&a.type&&(b=a.type),b){b=b.toLowerCase(),!a.target&&(/^(copy|aftercopy|_click)$/.test(b)||"error"===b&&"clipboard-error"===a.name)&&(a.target=P),x(a,{type:b,target:a.target||O||null,relatedTarget:a.relatedTarget||null,currentTarget:K&&K.bridge||null,timeStamp:a.timeStamp||q()||null});var c=U[a.type];return"error"===a.type&&a.name&&c&&(c=c[a.name]),c&&(a.message=c),"ready"===a.type&&x(a,{target:null,version:K.version}),"error"===a.type&&(X.test(a.name)&&x(a,{target:null,minimumVersion:L}),Y.test(a.name)&&x(a,{version:K.version})),"copy"===a.type&&(a.clipboardData={setData:Va.setData,clearData:Va.clearData}),"aftercopy"===a.type&&(a=Ea(a,R)),a.target&&!a.relatedTarget&&(a.relatedTarget=pa(a.target)),qa(a)}},pa=function(a){var b=a&&a.getAttribute&&a.getAttribute("data-clipboard-target");return b?d.getElementById(b):null},qa=function(a){if(a&&/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type)){var e=a.target,f="_mouseover"===a.type&&a.relatedTarget?a.relatedTarget:b,g="_mouseout"===a.type&&a.relatedTarget?a.relatedTarget:b,h=Na(e),i=c.screenLeft||c.screenX||0,j=c.screenTop||c.screenY||0,k=d.body.scrollLeft+d.documentElement.scrollLeft,l=d.body.scrollTop+d.documentElement.scrollTop,m=h.left+("number"==typeof a._stageX?a._stageX:0),n=h.top+("number"==typeof a._stageY?a._stageY:0),o=m-k,p=n-l,q=i+o,r=j+p,s="number"==typeof a.movementX?a.movementX:0,t="number"==typeof a.movementY?a.movementY:0;delete a._stageX,delete a._stageY,x(a,{srcElement:e,fromElement:f,toElement:g,screenX:q,screenY:r,pageX:m,pageY:n,clientX:o,clientY:p,x:o,y:p,movementX:s,movementY:t,offsetX:0,offsetY:0,layerX:0,layerY:0})}return a},ra=function(a){return!/^(?:(?:before)?copy|destroy)$/.test(a&&"string"==typeof a.type&&a.type||"")},sa=function(a,b,c,d){d?f(function(){a.apply(b,c)},0):a.apply(b,c)},ta=function(a){if("object"==typeof a&&a&&a.type){var b=ra(a),d=N["*"]||[],e=N[a.type]||[],f=d.concat(e);if(f&&f.length){var g,h,i,j,k,l=this;for(g=0,h=f.length;g<h;g++)i=f[g],j=l,"string"==typeof i&&"function"==typeof c[i]&&(i=c[i]),"object"==typeof i&&i&&"function"==typeof i.handleEvent&&(j=i,i=i.handleEvent),"function"==typeof i&&(k=x({},a),sa(i,j,[k],b))}return this}},ua=function(a){var b=null;return(!1===J||a&&"error"===a.type&&a.name&&-1!==V.indexOf(a.name))&&(b=!1),b},va=function(a){var b=a.target||O||null,c="swf"===a._source;switch(delete a._source,a.type){case"error":var d="flash-sandboxed"===a.name||ua(a);"boolean"==typeof d&&(K.sandboxed=d),-1!==W.indexOf(a.name)?x(K,{disabled:"flash-disabled"===a.name,outdated:"flash-outdated"===a.name,unavailable:"flash-unavailable"===a.name,degraded:"flash-degraded"===a.name,deactivated:"flash-deactivated"===a.name,overdue:"flash-overdue"===a.name,ready:!1}):"version-mismatch"===a.name&&(M=a.swfVersion,x(K,{disabled:!1,outdated:!1,unavailable:!1,degraded:!1,deactivated:!1,overdue:!1,ready:!1})),Pa();break;case"ready":M=a.swfVersion;var e=!0===K.deactivated;x(K,{disabled:!1,outdated:!1,sandboxed:!1,unavailable:!1,degraded:!1,deactivated:!1,overdue:e,ready:!e}),Pa();break;case"beforecopy":P=b;break;case"copy":var f,g,h=a.relatedTarget;!Q["text/html"]&&!Q["text/plain"]&&h&&(g=h.value||h.outerHTML||h.innerHTML)&&(f=h.value||h.textContent||h.innerText)?(a.clipboardData.clearData(),a.clipboardData.setData("text/plain",f),g!==f&&a.clipboardData.setData("text/html",g)):!Q["text/plain"]&&a.target&&(f=a.target.getAttribute("data-clipboard-text"))&&(a.clipboardData.clearData(),a.clipboardData.setData("text/plain",f));break;case"aftercopy":wa(a),Va.clearData(),b&&b!==Ja()&&b.focus&&b.focus();break;case"_mouseover":Va.focus(b),!0===Z.bubbleEvents&&c&&(b&&b!==a.relatedTarget&&!C(a.relatedTarget,b)&&xa(x({},a,{type:"mouseenter",bubbles:!1,cancelable:!1})),xa(x({},a,{type:"mouseover"})));break;case"_mouseout":Va.blur(),!0===Z.bubbleEvents&&c&&(b&&b!==a.relatedTarget&&!C(a.relatedTarget,b)&&xa(x({},a,{type:"mouseleave",bubbles:!1,cancelable:!1})),xa(x({},a,{type:"mouseout"})));break;case"_mousedown":Ka(b,Z.activeClass),!0===Z.bubbleEvents&&c&&xa(x({},a,{type:a.type.slice(1)}));break;case"_mouseup":La(b,Z.activeClass),!0===Z.bubbleEvents&&c&&xa(x({},a,{type:a.type.slice(1)}));break;case"_click":P=null,!0===Z.bubbleEvents&&c&&xa(x({},a,{type:a.type.slice(1)}));break;case"_mousemove":!0===Z.bubbleEvents&&c&&xa(x({},a,{type:a.type.slice(1)}))}if(/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type))return!0},wa=function(a){if(a.errors&&a.errors.length>0){var b=y(a);x(b,{type:"error",name:"clipboard-error"}),delete b.success,f(function(){Va.emit(b)},0)}},xa=function(a){if(a&&"string"==typeof a.type&&a){var b,e=a.target||null,f=e&&e.ownerDocument||d,g={view:f.defaultView||c,canBubble:!0,cancelable:!0,detail:"click"===a.type?1:0,button:"number"==typeof a.which?a.which-1:"number"==typeof a.button?a.button:f.createEvent?0:1},h=x(g,a);e&&f.createEvent&&e.dispatchEvent&&(h=[h.type,h.canBubble,h.cancelable,h.view,h.detail,h.screenX,h.screenY,h.clientX,h.clientY,h.ctrlKey,h.altKey,h.shiftKey,h.metaKey,h.button,h.relatedTarget],b=f.createEvent("MouseEvents"),b.initMouseEvent&&(b.initMouseEvent.apply(b,h),b._source="js",e.dispatchEvent(b)))}},ya=function(){var a=Z.flashLoadTimeout;if("number"==typeof a&&a>=0){var b=Math.min(1e3,a/10),c=Z.swfObjectId+"_fallbackContent";T=h(function(){var a=d.getElementById(c);Oa(a)&&(Pa(),K.deactivated=null,Va.emit({type:"error",name:"swf-not-found"}))},b)}},za=function(){var a=d.createElement("div");return a.id=Z.containerId,a.className=Z.containerClass,a.style.position="absolute",a.style.left="0px",a.style.top="-9999px",a.style.width="1px",a.style.height="1px",a.style.zIndex=""+Sa(Z.zIndex),a},Aa=function(a){for(var b=a&&a.parentNode;b&&"OBJECT"===b.nodeName&&b.parentNode;)b=b.parentNode;return b||null},Ba=function(){var a,b=K.bridge,e=Aa(b);if(!b){var f=Ia(c.location.host,Z),g="never"===f?"none":"all",h=Ga(x({jsVersion:Va.version},Z)),i=Z.swfPath+Fa(Z.swfPath,Z);e=za();var j=d.createElement("div");e.appendChild(j),d.body.appendChild(e);var k=d.createElement("div"),l="activex"===K.pluginType;k.innerHTML='<object id="'+Z.swfObjectId+'" name="'+Z.swfObjectId+'" width="100%" height="100%" '+(l?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'type="application/x-shockwave-flash" data="'+i+'"')+">"+(l?'<param name="movie" value="'+i+'"/>':"")+'<param name="allowScriptAccess" value="'+f+'"/><param name="allowNetworking" value="'+g+'"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="'+h+'"/><div id="'+Z.swfObjectId+'_fallbackContent">&nbsp;</div></object>',b=k.firstChild,k=null,v(b).ZeroClipboard=Va,e.replaceChild(b,j),ya()}return b||(b=d[Z.swfObjectId],b&&(a=b.length)&&(b=b[a-1]),!b&&e&&(b=e.firstChild)),K.bridge=b||null,b},Ca=function(){var a=K.bridge;if(a){var c=Aa(a);c&&("activex"===K.pluginType&&"readyState"in a?(a.style.display="none",function b(){if(4===a.readyState){for(var d in a)"function"==typeof a[d]&&(a[d]=null);a.parentNode&&a.parentNode.removeChild(a),c.parentNode&&c.parentNode.removeChild(c)}else f(b,10)}()):(a.parentNode&&a.parentNode.removeChild(a),c.parentNode&&c.parentNode.removeChild(c))),Pa(),K.ready=null,K.bridge=null,K.deactivated=null,M=b}},Da=function(a){var b={},c={};if("object"==typeof a&&a){for(var d in a)if(d&&t.call(a,d)&&"string"==typeof a[d]&&a[d])switch(d.toLowerCase()){case"text/plain":case"text":case"air:text":case"flash:text":b.text=a[d],c.text=d;break;case"text/html":case"html":case"air:html":case"flash:html":b.html=a[d],c.html=d;break;case"application/rtf":case"text/rtf":case"rtf":case"richtext":case"air:rtf":case"flash:rtf":b.rtf=a[d],c.rtf=d}return{data:b,formatMap:c}}},Ea=function(a,b){if("object"!=typeof a||!a||"object"!=typeof b||!b)return a;var c={};for(var d in a)if(t.call(a,d))if("errors"===d){c[d]=a[d]?a[d].slice():[];for(var e=0,f=c[d].length;e<f;e++)c[d][e].format=b[c[d][e].format]}else if("success"!==d&&"data"!==d)c[d]=a[d];else{c[d]={};var g=a[d];for(var h in g)h&&t.call(g,h)&&t.call(b,h)&&(c[d][b[h]]=g[h])}return c},Fa=function(a,b){return null==b||b&&!0===b.cacheBust?(-1===a.indexOf("?")?"?":"&")+"noCache="+q():""},Ga=function(a){var b,d,e,f,g="",h=[];if(a.trustedDomains&&("string"==typeof a.trustedDomains?f=[a.trustedDomains]:"object"==typeof a.trustedDomains&&"length"in a.trustedDomains&&(f=a.trustedDomains)),f&&f.length)for(b=0,d=f.length;b<d;b++)if(t.call(f,b)&&f[b]&&"string"==typeof f[b]){if(!(e=Ha(f[b])))continue;if("*"===e){h.length=0,h.push(e);break}h.push.apply(h,[e,"//"+e,c.location.protocol+"//"+e])}return h.length&&(g+="trustedOrigins="+k(h.join(","))),!0===a.forceEnhancedClipboard&&(g+=(g?"&":"")+"forceEnhancedClipboard=true"),"string"==typeof a.swfObjectId&&a.swfObjectId&&(g+=(g?"&":"")+"swfObjectId="+k(a.swfObjectId)),"string"==typeof a.jsVersion&&a.jsVersion&&(g+=(g?"&":"")+"jsVersion="+k(a.jsVersion)),g},Ha=function(a){if(null==a||""===a)return null;if(""===(a=a.replace(/^\s+|\s+$/g,"")))return null;var b=a.indexOf("//");a=-1===b?a:a.slice(b+2);var c=a.indexOf("/");return a=-1===c?a:-1===b||0===c?null:a.slice(0,c),a&&".swf"===a.slice(-4).toLowerCase()?null:a||null},Ia=function(){var a=function(a){var b,c,d,e=[];if("string"==typeof a&&(a=[a]),"object"!=typeof a||!a||"number"!=typeof a.length)return e;for(b=0,c=a.length;b<c;b++)if(t.call(a,b)&&(d=Ha(a[b]))){if("*"===d){e.length=0,e.push("*");break}-1===e.indexOf(d)&&e.push(d)}return e};return function(b,c){var d=Ha(c.swfPath);null===d&&(d=b);var e=a(c.trustedDomains),f=e.length;if(f>0){if(1===f&&"*"===e[0])return"always";if(-1!==e.indexOf(b))return 1===f&&b===d?"sameDomain":"always"}return"never"}}(),Ja=function(){try{return d.activeElement}catch(a){return null}},Ka=function(a,b){var c,d,e,f=[];if("string"==typeof b&&b&&(f=b.split(/\s+/)),a&&1===a.nodeType&&f.length>0)if(a.classList)for(c=0,d=f.length;c<d;c++)a.classList.add(f[c]);else if(a.hasOwnProperty("className")){for(e=" "+a.className+" ",c=0,d=f.length;c<d;c++)-1===e.indexOf(" "+f[c]+" ")&&(e+=f[c]+" ");a.className=e.replace(/^\s+|\s+$/g,"")}return a},La=function(a,b){var c,d,e,f=[];if("string"==typeof b&&b&&(f=b.split(/\s+/)),a&&1===a.nodeType&&f.length>0)if(a.classList&&a.classList.length>0)for(c=0,d=f.length;c<d;c++)a.classList.remove(f[c]);else if(a.className){for(e=(" "+a.className+" ").replace(/[\r\n\t]/g," "),c=0,d=f.length;c<d;c++)e=e.replace(" "+f[c]+" "," ");a.className=e.replace(/^\s+|\s+$/g,"")}return a},Ma=function(a,b){var c=j(a,null).getPropertyValue(b);return"cursor"!==b||c&&"auto"!==c||"A"!==a.nodeName?c:"pointer"},Na=function(a){var b={left:0,top:0,width:0,height:0};if(a.getBoundingClientRect){var e=a.getBoundingClientRect(),f=c.pageXOffset,g=c.pageYOffset,h=d.documentElement.clientLeft||0,i=d.documentElement.clientTop||0,j=0,k=0;if("relative"===Ma(d.body,"position")){var l=d.body.getBoundingClientRect(),m=d.documentElement.getBoundingClientRect();j=l.left-m.left||0,k=l.top-m.top||0}b.left=e.left+f-h-j,b.top=e.top+g-i-k,b.width="width"in e?e.width:e.right-e.left,b.height="height"in e?e.height:e.bottom-e.top}return b},Oa=function(a){if(!a)return!1;var b=j(a,null),c=o(b.height)>0,d=o(b.width)>0,e=o(b.top)>=0,f=o(b.left)>=0,g=c&&d&&e&&f,h=g?null:Na(a);return"none"!==b.display&&"collapse"!==b.visibility&&(g||!!h&&(c||h.height>0)&&(d||h.width>0)&&(e||h.top>=0)&&(f||h.left>=0))},Pa=function(){g(S),S=0,i(T),T=0},Qa=function(){var a;if(O&&(a=Aa(K.bridge))){var b=Na(O);x(a.style,{width:b.width+"px",height:b.height+"px",top:b.top+"px",left:b.left+"px",zIndex:""+Sa(Z.zIndex)})}},Ra=function(a){!0===K.ready&&(K.bridge&&"function"==typeof K.bridge.setHandCursor?K.bridge.setHandCursor(a):K.ready=!1)},Sa=function(a){if(/^(?:auto|inherit)$/.test(a))return a;var b;return"number"!=typeof a||p(a)?"string"==typeof a&&(b=Sa(n(a,10))):b=a,"number"==typeof b?b:"auto"},Ta=function(b){var c,d,e,f=K.sandboxed,g=null;if(b=!0===b,!1===J)g=!1;else{try{d=a.frameElement||null}catch(a){e={name:a.name,message:a.message}}if(d&&1===d.nodeType&&"IFRAME"===d.nodeName)try{g=d.hasAttribute("sandbox")}catch(a){g=null}else{try{c=document.domain||null}catch(a){c=null}(null===c||e&&"SecurityError"===e.name&&/(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(e.message.toLowerCase()))&&(g=!0)}}return K.sandboxed=g,f===g||b||Ua(l),g},Ua=function(a){function j(a){var b=a.match(/[\d]+/g);return b.length=3,b.join(".")}function k(a){return!!a&&(a=a.toLowerCase())&&(/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(a)||"chrome.plugin"===a.slice(-13))}function l(a){a&&(f=!0,a.version&&(i=j(a.version)),!i&&a.description&&(i=j(a.description)),a.filename&&(h=k(a.filename)))}var b,c,d,f=!1,g=!1,h=!1,i="";if(e.plugins&&e.plugins.length)b=e.plugins["Shockwave Flash"],l(b),e.plugins["Shockwave Flash 2.0"]&&(f=!0,i="2.0.0.11");else if(e.mimeTypes&&e.mimeTypes.length)d=e.mimeTypes["application/x-shockwave-flash"],b=d&&d.enabledPlugin,l(b);else if(void 0!==a){g=!0;try{c=new a("ShockwaveFlash.ShockwaveFlash.7"),f=!0,i=j(c.GetVariable("$version"))}catch(b){try{c=new a("ShockwaveFlash.ShockwaveFlash.6"),f=!0,i="6.0.21"}catch(b){try{c=new a("ShockwaveFlash.ShockwaveFlash"),f=!0,i=j(c.GetVariable("$version"))}catch(a){g=!1}}}}K.disabled=!0!==f,K.outdated=i&&o(i)<o(L),K.version=i||"0.0.0",K.pluginType=h?"pepper":g?"activex":f?"netscape":"unknown"};Ua(l),Ta(!0);var Va=function(){if(!(this instanceof Va))return new Va;"function"==typeof Va._createClient&&Va._createClient.apply(this,w(arguments))};s(Va,"version",{value:"2.2.0",writable:!1,configurable:!0,enumerable:!0}),Va.config=function(){return $.apply(this,w(arguments))},Va.state=function(){return _.apply(this,w(arguments))},Va.isFlashUnusable=function(){return aa.apply(this,w(arguments))},Va.on=function(){return ba.apply(this,w(arguments))},Va.off=function(){return ca.apply(this,w(arguments))},Va.handlers=function(){return da.apply(this,w(arguments))},Va.emit=function(){return ea.apply(this,w(arguments))},Va.create=function(){return fa.apply(this,w(arguments))},Va.destroy=function(){return ga.apply(this,w(arguments))},Va.setData=function(){return ha.apply(this,w(arguments))},Va.clearData=function(){return ia.apply(this,w(arguments))},Va.getData=function(){return ja.apply(this,w(arguments))},Va.focus=Va.activate=function(){return ka.apply(this,w(arguments))},Va.blur=Va.deactivate=function(){return la.apply(this,w(arguments))},Va.activeElement=function(){return ma.apply(this,w(arguments))};var Wa=0,Xa={},Ya=0,Za={},$a={};x(Z,{autoActivate:!0});var _a=function(a){var b=this;b.id=""+Wa++,Xa[b.id]={instance:b,elements:[],handlers:{}},a&&b.clip(a),Va.on("*",function(a){return b.emit(a)}),Va.on("destroy",function(){b.destroy()}),Va.create()},ab=function(a,c){var d,e,f,g={},h=Xa[this.id],i=h&&h.handlers;if(!h)throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");if("string"==typeof a&&a)f=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&void 0===c)for(d in a)t.call(a,d)&&"string"==typeof d&&d&&"function"==typeof a[d]&&this.on(d,a[d]);if(f&&f.length){for(d=0,e=f.length;d<e;d++)a=f[d].replace(/^on/,""),g[a]=!0,i[a]||(i[a]=[]),i[a].push(c);if(g.ready&&K.ready&&this.emit({type:"ready",client:this}),g.error){for(d=0,e=W.length;d<e;d++)if(K[W[d].replace(/^flash-/,"")]){this.emit({type:"error",name:W[d],client:this});break}M!==b&&Va.version!==M&&this.emit({type:"error",name:"version-mismatch",jsVersion:Va.version,swfVersion:M})}}return this},bb=function(a,b){var c,d,e,f,g,h=Xa[this.id],i=h&&h.handlers;if(!i)return this;if(0===arguments.length)f=r(i);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&void 0===b)for(c in a)t.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;c<d;c++)if(a=f[c].toLowerCase().replace(/^on/,""),(g=i[a])&&g.length)if(b)for(e=g.indexOf(b);-1!==e;)g.splice(e,1),e=g.indexOf(b,e);else g.length=0;return this},cb=function(a){var b=null,c=Xa[this.id]&&Xa[this.id].handlers;return c&&(b="string"==typeof a&&a?c[a]?c[a].slice(0):[]:y(c)),b},db=function(a){if(ib.call(this,a)){"object"==typeof a&&a&&"string"==typeof a.type&&a.type&&(a=x({},a));var b=x({},oa(a),{client:this});jb.call(this,b)}return this},eb=function(a){if(!Xa[this.id])throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");a=kb(a);for(var b=0;b<a.length;b++)if(t.call(a,b)&&a[b]&&1===a[b].nodeType){a[b].zcClippingId?-1===Za[a[b].zcClippingId].indexOf(this.id)&&Za[a[b].zcClippingId].push(this.id):(a[b].zcClippingId="zcClippingId_"+Ya++,Za[a[b].zcClippingId]=[this.id],!0===Z.autoActivate&&lb(a[b]));var c=Xa[this.id]&&Xa[this.id].elements;-1===c.indexOf(a[b])&&c.push(a[b])}return this},fb=function(a){var b=Xa[this.id];if(!b)return this;var d,c=b.elements;a=void 0===a?c.slice(0):kb(a);for(var e=a.length;e--;)if(t.call(a,e)&&a[e]&&1===a[e].nodeType){for(d=0;-1!==(d=c.indexOf(a[e],d));)c.splice(d,1);var f=Za[a[e].zcClippingId];if(f){for(d=0;-1!==(d=f.indexOf(this.id,d));)f.splice(d,1);0===f.length&&(!0===Z.autoActivate&&mb(a[e]),delete a[e].zcClippingId)}}return this},gb=function(){var a=Xa[this.id];return a&&a.elements?a.elements.slice(0):[]},hb=function(){Xa[this.id]&&(this.unclip(),this.off(),delete Xa[this.id])},ib=function(a){if(!a||!a.type)return!1;if(a.client&&a.client!==this)return!1;var b=Xa[this.id],c=b&&b.elements,d=!!c&&c.length>0,e=!a.target||d&&-1!==c.indexOf(a.target),f=a.relatedTarget&&d&&-1!==c.indexOf(a.relatedTarget),g=a.client&&a.client===this;return!(!b||!(e||f||g))},jb=function(a){var b=Xa[this.id];if("object"==typeof a&&a&&a.type&&b){var d=ra(a),e=b&&b.handlers["*"]||[],f=b&&b.handlers[a.type]||[],g=e.concat(f);if(g&&g.length){var h,i,j,k,l,m=this;for(h=0,i=g.length;h<i;h++)j=g[h],k=m,"string"==typeof j&&"function"==typeof c[j]&&(j=c[j]),"object"==typeof j&&j&&"function"==typeof j.handleEvent&&(k=j,j=j.handleEvent),"function"==typeof j&&(l=x({},a),sa(j,k,[l],d))}}},kb=function(a){return"string"==typeof a&&(a=[]),"number"!=typeof a.length?[a]:a},lb=function(a){if(a&&1===a.nodeType){var b=function(a){(a||(a=c.event))&&("js"!==a._source&&(a.stopImmediatePropagation(),a.preventDefault()),delete a._source)},d=function(d){(d||(d=c.event))&&(b(d),Va.focus(a))};a.addEventListener("mouseover",d,!1),a.addEventListener("mouseout",b,!1),a.addEventListener("mouseenter",b,!1),a.addEventListener("mouseleave",b,!1),a.addEventListener("mousemove",b,!1),$a[a.zcClippingId]={mouseover:d,mouseout:b,mouseenter:b,mouseleave:b,mousemove:b}}},mb=function(a){if(a&&1===a.nodeType){var b=$a[a.zcClippingId];if("object"==typeof b&&b){for(var c,d,e=["move","leave","enter","out","over"],f=0,g=e.length;f<g;f++)c="mouse"+e[f],"function"==typeof(d=b[c])&&a.removeEventListener(c,d,!1);delete $a[a.zcClippingId]}}};Va._createClient=function(){_a.apply(this,w(arguments))},Va.prototype.on=function(){return ab.apply(this,w(arguments))},Va.prototype.off=function(){return bb.apply(this,w(arguments))},Va.prototype.handlers=function(){return cb.apply(this,w(arguments))},Va.prototype.emit=function(){return db.apply(this,w(arguments))},Va.prototype.clip=function(){return eb.apply(this,w(arguments))},Va.prototype.unclip=function(){return fb.apply(this,w(arguments))},Va.prototype.elements=function(){return gb.apply(this,w(arguments))},Va.prototype.destroy=function(){return hb.apply(this,w(arguments))},Va.prototype.setText=function(a){if(!Xa[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Va.setData("text/plain",a),this},Va.prototype.setHtml=function(a){if(!Xa[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Va.setData("text/html",a),this},Va.prototype.setRichText=function(a){if(!Xa[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Va.setData("application/rtf",a),this},Va.prototype.setData=function(){if(!Xa[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Va.setData.apply(this,w(arguments)),this},Va.prototype.clearData=function(){if(!Xa[this.id])throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");return Va.clearData.apply(this,w(arguments)),this},Va.prototype.getData=function(){if(!Xa[this.id])throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");return Va.getData.apply(this,w(arguments))},"function"==typeof define&&define.amd?define(function(){return Va}):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports?module.exports=Va:a.ZeroClipboard=Va}(function(){return this||window}());