/* @license v8.15.20,8.15.21,1 2022-05-19 16:54:54 */!function e(t,n,r){function a(i,s){if(!n[i]){if(!t[i]){var u="function"==typeof require&&require;if(!s&&u)return u(i,!0);if(o)return o(i,!0);throw new Error("Cannot find module '"+i+"'")}var l=n[i]={exports:{}};t[i][0].call(l.exports,function(e){var n=t[i][1][e];return a(n?n:e)},l,l.exports,e,t,n,r)}return n[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)a(r[i]);return a}({1:[function(e,t,n){"use strict";function r(e){var t=/AliApp|Yunos|cyclone/i.test(e),n=/iPhone|iPad|iPod/i.test(e),r=/Android/i.test(e),a=/Windows Phone/i.test(e)||/IEMobile/i.test(e)||/WPDesktop/i.test(e),o=/BlackBerry/i.test(e),i=/Opera Mini/i.test(e);return t||n||r||a||o||i}function a(e,t){return e&&e.getAttribute?e.getAttribute(t)||"":""}function o(e){return s=s||document.getElementsByTagName("head")[0],u&&!e?u:s?u=s.getElementsByTagName("meta"):[]}function i(e,t){var n;if(document.querySelector){var r=document.querySelector('meta[name="'+e+'"]');n=a(r,t||"content")}else for(var i=o(),s=i.length,u=0;s>u;u++){var l=i[u];a(l,"name")===e&&(n=a(l,t||"content"))}return n||""}var s,u,l=e("@ali/grey-publish").util;n.isUseNewAplusJs=function(){var e=window.navigator.userAgent.toLocaleLowerCase(),t=/qq\//.test(e),n=/micromessenger/.test(e),r=/(taobao\.com)|(tmall\.com)/.test(location.hostname),a=["www.taobao.com/","www.dingtalk.com/"].indexOf(location.hostname+location.pathname)>-1,o=["creator.guanghe.taobao.com","h5.m.goofish.com","dt-pre.alicdn.com","account.yuekeyun.com","dengta.taopiaopiao.com","127.0.0.1","localhost","aplus.ju.taobao.com","myseller.taobao.com","qn.taobao.com"].indexOf(location.hostname)>-1,i=/\.wapa\./.test(location.hostname)||/^pre-/.test(location.hostname);return(t||n)&&r||a||o||i},n.addScript=function(e,t){var n=e,r=/^http(s)?:/;n=r.test(e)?n.replace(r,location.protocol):location.protocol+(/^\/\//.test(n)?"":"//")+n,l.addScript(n,function(){"function"==typeof t&&t()})},n.tryToGetAttribute=a,n.getMetaTags=o,n.getMetaCnt=i,n.indexof=function(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1};var c=function(e,t){return e+="",e.length<t&&(e="0"+e),e};n.getDateMin=function(){var e=new Date,t="";return t+=e.getFullYear(),t+=c(e.getMonth()+1,2),t+=c(e.getDate(),2),t+=c(e.getHours(),2),t+=c(e.getMinutes(),2)},n.isMobile=r;var g=function(){var e;try{e=document.getElementById("beacon-aplus")||document.getElementById("tb-beacon-aplus")}catch(t){}return e};n.getCurrentNode=g,n.loopAddScript=function(e,t){try{if(t&&t instanceof Array){var n=0,r=function(a){a&&l.addScript(e+"/"+a,function(){r(t[++n])})};r(t[n])}}catch(a){}};var p=function(e,t,n){var r=window,a=r.goldlog_queue||(r.goldlog_queue=[]),o=e;"object"==typeof t&&t.message&&(o=o+"_"+t.message),n&&n.msg&&(o+="_"+n.msg),a.push({action:"goldlog._aplus_cplugin_m.do_tracker_jserror",arguments:[{ratio:window.goldlog&&window.goldlog.aplusDebug?1:.01,message:o,error:JSON.stringify(t),filename:e}]})};n.catchException=p,n.getCdnpath=function(){var e="//g.alicdn.com",t="//g-assets.daily.taobao.net",n="//assets.alicdn.com/g",r="//s.alicdn.com/@g/",a="//u.alicdn.com",o="//laz-g-cdn.alicdn.com",i=(document,g()),s=e,u=[n,r,t,a,o],l=new RegExp(a);if(i)for(var c=0;c<u.length;c++){var f=new RegExp(u[c]);if(f.test(i.src)){s=u[c],l.test(i.src)&&(s=n);break}}if(s===o){var v=window.navigator?window.navigator.language:"";p("getCdnpath",{lang:v},{msg:"laz_g_cdn"})}return s},n.aplusVersions={V_O:"aplus_o.js",V_2:"aplus_v2.js",V_W:"aplus_wap.js",V_S:"aplus_std.js",V_I:"aplus_int.js",V_U:"aplus_u.js"}},{"@ali/grey-publish":2}],2:[function(e,t,n){"use strict";n.grey=e("./src/grey"),n.util=e("./src/util")},{"./src/grey":3,"./src/util":4}],3:[function(e,t,n){"use strict";function r(e,t){return e+Math.floor(Math.random()*(t-e+1))}function a(e){var t=!1;try{var n=e.bingo_chars||"0aAbBc1CdDeE2fFgGh3HiIjJ4kKlLm5MnNoO6pPqQr7RsStT8uUvVw9WxXyY+zZ",a=h.getCookie(e.bingo_cookiename||"cna")||"";if(a){var o=a.charAt(0),i=n.indexOf(o)/n.length;t=i<=e.ratio/e.base}else t=r(1,e.base)<=e.ratio}catch(s){t=r(1,e.base)<=e.ratio}return t}function o(e,t){var n;for(n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function i(e,t){return function(n){return e(o(t,n||{}))}}function s(e,t){var n=document;if(t){var r=n.getElementsByTagName("script")[0],a=n.createElement("script");e&&e.nonce&&a.setAttribute("nonce",e.nonce),a.appendChild(n.createTextNode(t)),r.parentNode.insertBefore(a,r)}}function u(e,t){if(e&&e.length>0)for(var n=new RegExp("^"+t),r=0;r<e.length;r++){var a=e[r];n.test(a)&&_.remove(a)}}function l(e,t,n){try{_.remove(e);var r=_.get(t);if(r){var a=JSON.parse(r)||[];u(a,n)}}catch(o){}try{Object&&Object.keys&&u(Object.keys(localStorage),n)}catch(i){}}function c(e,t,n){try{if(!d){var r=function(r){r.key===e&&r.newValue&&l(e,t,n)};if(window.addEventListener)return window.addEventListener("storage",r,!1),!1;window.attachEvent("storage",r)}d=!0}catch(a){}}function g(e){var t;try{var n=_.get(e.LS_KEY_CLUSTER);if(n){var r=JSON.parse(n);t=_.get(r[0])}}catch(a){}return t}function p(e,t){h.addScript(t.url,e.callback,function(){t.oldCode&&(s(e,t.oldCode),h.isFunction(e.callback)&&e.callback.call(this,{from:"oldCode"}))})}function f(e,t){var n,r="cors",a=t.code,o=t.key,i=a?a.split("\n").length:0;i>=t.size&&(s(e,a),l(o,e.LS_KEY_CLUSTER,e.LS_PREFIX),_.set(e.LS_KEY_CLUSTER,JSON.stringify([o])),_.set(o,a),n=!0),i<t.size&&t.oldCode&&(r="oldCode",s(e,t.oldCode),n=!0),n||p(e,t),c(o,e.LS_KEY_CLUSTER,e.LS_PREFIX),h.isFunction(e.callback)&&e.callback.call(this,{from:r})}function v(e,t,n){var r=window,a=r.XDomainRequest,o=r.XMLHttpRequest&&"withCredentials"in new r.XMLHttpRequest,i=t.after;if(!t.isDebug&&_.test()&&(o||a)){var u=g(t),l=t.LS_KEY+h.hash(e),v=_.get(l),d="local";v?(c(l,t.LS_KEY_CLUSTER,t.LS_PREFIX),s(t,v),h.isFunction(i)&&i.call(this,{from:d})):h.requestJS(e,navigator.userAgent,function(r){f(t,{key:l,code:r,oldCode:u,size:n,url:e})},function(){p(t,{url:e,oldCode:u})})}else h.addScript(e,i)}var d,h=e("./util"),_={set:function(e,t){try{return localStorage.setItem(e,t),!0}catch(n){return!1}},get:function(e){return localStorage.getItem(e)},test:function(){var e="grey_test_key";try{return localStorage.setItem(e,1),localStorage.removeItem(e),!0}catch(t){return!1}},remove:function(e){localStorage.removeItem(e)}},m={base:1e4},b={_config:m};b.load=function(e){e=o({LS_KEY_CLUSTER:"",LS_KEY:"",isLoadDevVersion:"",dev:"",stable:"",grey:"",base:m.base,bingo:"",nonce:""},e);var t,n={},r=0,s="function"==typeof e.bingo?e.bingo:a;e.ratio>=e.base||s(e)?(t=e.grey,n.type="grey",r=e.greySize):(t=e.stable,n.type="stable",r=e.stableSize);try{h.isFunction(e.isLoadDevVersion)&&e.isLoadDevVersion()&&(t=e.dev,n.type="dev",r=e.devSize)}catch(u){}return n.url=t,h.isFunction(e.before)?e.before(n,function(t){v(t,e,r)}):v(t,e,r),h.isFunction(e.after)&&(e.after=i(e.after,n)),this},b.config=function(e){return o(m,e||{}),this},t.exports=b},{"./util":4}],4:[function(e,t,n){"use strict";var r=function(e){return"function"==typeof e};n.isFunction=r;var a=function(e,t,n){var a=document,o=a.getElementsByTagName("script")[0],i=a.getElementsByTagName("head")[0],s=a.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onerror=function(){r(n)&&n()},o?o.parentNode.insertBefore(s,o):i&&i.appendChild(s),r(t)&&t.call(this,{from:"script"})};n.addScript=a,n.getCookie=function(e){var t=document,n=t.cookie.match(new RegExp("(?:^|;)\\s*"+e+"=([^;]+)"));return n?n[1]:""};var o={base:1e4,timeout:1e4},i=function(e,t,n){fetch(e).then(function(e){return/application\/json/.test(e.headers.get("content-type"))?e.json():e.text()}).then(function(e){t(e)})["catch"](function(e){n(e)})},s=function(e,t,n){var r,a="GET",i=function(){r.responseText?t(r.responseText):n()},s=window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest;s?(r=new XMLHttpRequest,r.open(a,e,!0)):(r=new XDomainRequest,r.open(a,e)),r.timeout=o.timeout,r.onload=i,r.onerror=n,r.ontimeout=n,r.send()},u=function(e,t,n){window.fetch?i(e,t,n):s(e,t,n)};n.request=u,n.requestJS=function(e,t,n,r){return/blitz/i.test(t)?void r():void u(e,n,r)},n.hash=function(e){var t,n,r=1315423911;for(t=e.length-1;t>=0;t--)n=e.charCodeAt(t),r^=(r<<5)+n+(r>>2);return(2147483647&r).toString(16)}},{}],5:[function(e,t,n){"use strict";!function(){try{for(var t,n=window,r="g_aplus_grey_launched",a=document.getElementsByTagName("script"),o=0;o<a.length;o++)/mlog\/aplus\.js/.test(a[o].getAttribute("src"))&&(t=!0);if(t||n[r])return;n[r]=1;var i=e("./for_aplus_fns"),s=e("@ali/grey-publish").util,u=e("@ali/grey-publish").grey,l=e("../grey/util"),c=e("./utilPlugins"),g=l.isUseNewAplusJs(),p=function(){var e=n.goldlog||(n.goldlog={}),t=!0;try{var r=n.location.href.match(/aplusDebug=(true|false)/);r&&r.length>0&&n.localStorage.setItem("aplusDebug",r[1]),t="true"===n.localStorage.getItem("aplusDebug"),e.aplusDebug=t}catch(a){}var o={"aplus_o.js":{stable_version:{value:"8.15.20"},grey_version:{value:"8.15.21"},dev_version:{}},"aplus_std.js":{stable_version:{value:"8.15.20"},grey_version:{value:"8.15.21"},dev_version:{}},"aplus_wap.js":{stable_version:{value:"8.15.20"},grey_version:{value:"8.15.21"},dev_version:{}},"aplus_int.js":{stable_version:{value:"8.15.20"},grey_version:{value:"8.15.21"},dev_version:{}},"aplus_u.js":{stable_version:{value:"8.15.20"},grey_version:{value:"8.15.21"},dev_version:{}}},s=g?"APLUS_CORE":"APLUS_S_CORE",p=s+"_0.21.59_20220519165453_",f=n.location.protocol;0!==f.indexOf("http")&&(f="https:");var v=g?"//d.alicdn.com":l.getCdnpath();e.getCdnPath=l.getCdnpath;var d=f+v+"/alilog",h=i.getAplusBuVersion(),_=h.v,m=h.BU,b="1.9.7",y="1.9.11",w=1e4,S=1e4,j=g?w:S,E=[],C=function(){var e="";if(E&&E.length>0)for(var t=l.getDateMin(),n=0;n<E.length;n++){var r=E[n].key+"";t>=r&&(e=Math.floor(1e4*E[n].value))}return e},L=function(e){var r,a=t?[]:c.getFrontPlugins({version:e,fn:_,BU:m,isDebug:t,isUseNewAplusJs:g}),o=g?[["aplus",e,l.isMobile(n.navigator.userAgent)?"aplus_wap.js":"aplus_pc.js"].join("/")]:[["s",e,_].join("/")],i=t?[]:c.getPlugins({version:e,fn:_,BU:m,isUseNewAplusJs:g}),s=0;try{var u=[].concat(a,o,i);r=d+"/??"+u.join(",")+"?v=20220519165453",s=u.length}catch(p){r=d+"/??"+o.join(","),s=o.length}return{size:s,url:r}},A=C();A&&!j&&(j=A),e.aplus_cplugin_ver="0.7.11",e.record||(e.record=function(e,t,r,a){(n.goldlog_queue||(n.goldlog_queue=[])).push({action:"goldlog.record",arguments:[e,t,r,a]})});var k=o[_]||{},V=k.stable_version||{},U=k.grey_version||{},x=k.dev_version||{},B=g?b:V.value||"8.5.9",N=g?y:U.value||B,P=x.value||N,T=L(P),M=L(B),R=L(N),O=l.getCurrentNode(),q=O?O.getAttribute("cspx"):"",D={LS_KEY_CLUSTER:"APLUS_LS_KEY",LS_KEY:p,LS_PREFIX:s,isDebug:t,isLoadDevVersion:!1,dev:T.url,devSize:T.size,stable:M.url,stableSize:M.size,grey:R.url,greySize:R.size,ratio:j,nonce:q,before:function(n,r){switch(n.type){case"grey":e.lver=P;break;case"stable":e.lver=B;break;case"dev":e.lver=P}if(t){var a={version:e.lver,fn:_,BU:m,isDebug:t,isUseNewAplusJs:g};l.loopAddScript(d,c.getFrontPlugins(a))}if("function"==typeof r){var o=L(e.lver),i=o.url;r(i)}}};t&&(D.after=function(){var t=0,r=function(){if(!(t>=100)){t++;var a=e._$||{};n.setTimeout(function(){"complete"===a.status?l.loopAddScript(d,c.getPlugins({version:e.lver,fn:_,BU:m,isUseNewAplusJs:g})):r()},100)}};r()}),u.load(D)},f=i.getNewCdnpathByMeta();f?s.addScript(f,function(){},function(){p()}):p()}catch(v){}}()},{"../grey/util":1,"./for_aplus_fns":6,"./utilPlugins":9,"@ali/grey-publish":2}],6:[function(e,t,n){"use strict";var r,a=e("./util"),o=a.aplusVersions,i=[o.V_O,o.V_S,o.V_I,o.V_W,o.V_U],s=function(){for(var e,t,n=[{version:o.V_O,domains:[/^https?:\/\/(.*\.)?youku\.com/i,/^https?:\/\/(.*\.)?tudou\.com/i,/^https?:\/\/(.*\.)?soku\.com/i,/^https?:\/\/(.*\.)?laifeng\.com/i],BU:"YT"}],r=0;r<n.length;r++)for(var a=n[r].domains,i=n[r].version,s=0;s<a.length;s++)if(location.href.match(a[s]))return{v:i,BU:n[r].BU};return{v:t,BU:e}},u=function(){r||(r=a.getMetaCnt("aplus-version"));var e=r;return e&&(e+=".js"),a.indexof(i,e)>-1?e:null};n.getNewCdnpathByMeta=function(){r||(r=a.getMetaCnt("aplus-version"));var e=r;if(/^\d+$/.test(e))t="//d.alicdn.com/alilog/mlog/aplus/"+e+".js";else{var t,n=e.split("@");2===n.length&&(t="//d.alicdn.com/alilog/mlog/aplus.js?id="+n[1])}return t};var l=function(){try{for(var e=document,t=e.getElementsByTagName("script"),n=0;n<t.length;n++){var r=t[n].getAttribute("src");if(/alilog\/mlog\/aplus_\w+\.js/.test(r)||/alicdn\.com\/js\/aplus_\w+\.js/.test(r))return r}return""}catch(a){return""}},c=function(){var e="";try{var t=(document,a.getCurrentNode());if(t&&(e=t.getAttribute("src")),e||(e=l()),e){var n=e.match(/aplus_\w+\.js/);"object"==typeof n&&n.length>0&&(e=n[0])}}catch(r){e=""}finally{return e}};n.getAplusBuVersion=function(){var e,t;try{e=o.V_S;var n=c();n&&(e=n);var r=s();r&&r.v&&(e=r.v),t=r.BU;var a=u();a&&(e=a),e===o.V_2&&(e=o.V_S)}catch(i){e=e===o.V_O?o.V_W:o.V_S}finally{return{v:e,BU:t}}}},{"./util":8}],7:[function(e,t,n){"use strict";function r(){var e="",t=/Umeng4Aplus|UT4Aplus/i.test(v);return t&&(e="aplus4native.js"),e}function a(e){return d&&!g.WindVane&&e.fn!==f.V_O}function o(e){return(h||d&&!g.WindVane)&&e.fn===f.V_O}function i(e,t){var n=e.trackerCfg||{},r=n.points||[];if(r.length>0)for(var a=new RegExp(t),o=0;o<r.length;o++)if(a.test(r[o].trackerType))return!0;return!1}function s(e){return i(e,"exposure")||!!p.getMetaCnt("aplus-auto-exp")}function u(e){return i(e,"click")||!!p.getMetaCnt("aplus-auto-clk")}function l(){return!!p.getMetaCnt("aplus-vt-cfg")}var c=document,g=window,p=e("./util"),f=p.aplusVersions,v=g.navigator.userAgent,d=/WindVane/i.test(v),h=/AliBaichuan/i.test(v),_=function(){return/_a_ig_v=@aplus/.test(location.search)},m=function(e){return e.fn!==f.V_O&&e.fn!==f.V_U},b=function(){try{var e=g.localStorage,t="aplus_track_debug_id",n=new RegExp("[?|&]"+t+"=(\\w*)"),r=location.href.match(n);if(r&&r.length>0)e.setItem(t,r[1]);else{var a=c.referrer||"",o=a.match(n);if(o&&o.length>0)e.setItem(t,o[1]);else{var i=g.name||"",s=i.match(n);s&&s.length>0&&e.setItem(t,s[1])}}var u=e.getItem(t)||"";return u&&u.length>50?!0:!1}catch(l){return!1}},y=function(){try{return!!/lazada/.test(location.host)}catch(e){return!1}},w=function(e){try{if("function"==typeof g.WebSocket){var t=/alibaba-inc|aliway|alibabacorp\.com/.test(location.hostname),n=p.getMetaCnt("aplus-channel"),r="GET"===n||"POST"===n,a=/tppnext\.alibaba-inc.com/.test(location.hostname);if(r&&a)return!1;var o=/aplus_ws=true/.test(location.search)||"WS"===n||"WS-ONLY"===n,i=location.host,s=/tmall|taobao\.com/g.test(i),u=/Qianniu\/\d/.test(v),l=t||o||s&&!p.isMobile(v)&&!u&&e.fn!==f.V_W;return l&&(goldlog.aplusChannel="WS"),l}return!1}catch(c){return!1}};n.getFrontPlugins=function(e){var t=e.isUseNewAplusJs,n=t?"aplus/":"s/",i=e.version,c=n+i+"/plugin",g="s/"+e.version+"/plugin",p=goldlog.aplus_cplugin_ver,f=r(e.isDebug);return[{enable:!t&&a(e),path:[c,t?"aplus_windvane3.js":"aplus_windvane2.js"].join("/")},{enable:o(e)&&!t,path:[g,"aplus_bcbridge.js"].join("/")},{enable:!t&&!!f,path:t?[c,"aplus4native.js"].join("/"):["aplus_cplugin",p,f].join("/")},{enable:l(),path:[c,"aplus_webvt.js"].join("/")},{enable:!t,path:[c,"aplus_client.js"].join("/")},{enable:!t,path:["aplus_cplugin",p,"toolkit.js"].join("/")},{enable:!t,path:["aplus_cplugin",p,"monitor.js"].join("/")},{enable:!t&&b(),path:["aplus_cplugin",p,"track_deb.js"].join("/")},{enable:y(),path:["aplus_plugin_lazada","lazadalog.js"].join("/")},{enable:!t&&w(e),path:[c,"aplus_ws.js"].join("/")},{enable:s(e)&&!t,path:[c,"aplus_ae.js"].join("/")},{enable:u(e)&&!t,path:[c,"aplus_ac.js"].join("/")}]},n.getPlugins=function(e){var t=e.isUseNewAplusJs,n=t?"aplus/":"s/",r=n+e.version+"/plugin";return[{enable:_(e),path:"aplus_plugin_guide/index.js"},{enable:m(e),path:[r,"aplus_spmact.js"].join("/")}]}},{"./util":8}],8:[function(e,t,n){t.exports=e(1)},{"@ali/grey-publish":2}],9:[function(e,t,n){"use strict";var r=e("./plugins"),a=e("./util"),o=(document,a.getCurrentNode()),i=function(e){var t=[];try{if(o){var n=o.getAttribute(e||t);t=n.split(",")}}catch(r){t=[]}finally{return t}},s=function(e){var t=[];if(e)for(var n=0;n<e.length;n++){var r=e[n].enable,a=e[n].path;r===!0?t.push(a):"function"==typeof r&&r()&&t.push(a)}return t};n.getPlugins=function(e){var t=r.getPlugins(e);return[].concat(s(t),i("plugins"))},n.getFrontPlugins=function(e){var t=r.getFrontPlugins(e);return[].concat(s(t),i("frontPlugins"))},n.getTrackerCfg=r.getTrackerCfg},{"./plugins":7,"./util":8}]},{},[5]);