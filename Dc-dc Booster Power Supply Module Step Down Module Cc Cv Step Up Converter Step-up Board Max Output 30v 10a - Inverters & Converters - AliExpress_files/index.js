(function(d,m,p,r,e,n,a){if(d.__sec_entry_loaded||m.__no_sec_entry){return}d.__sec_entry_loaded=true;var t=d.__baxia_entry_config__||{};var i=m.head;if(!i){return}var c=m.currentScript;var o=r.userAgent;var s=a("%58%75%65%58%69");var l=s.toLowerCase();if(o.indexOf(s)>=0||e.host.indexOf(l)>=0||top!==self&&m.referrer.indexOf(l)>=0){return}function h(e){var r=m.createElement("script");r.crossOrigin="";r.referrerPolicy="unsafe-url";r.src=e;if(t.sync&&m.readyState==="loading"&&c&&!c.async){m.write(r.outerHTML);return i.lastChild}return i.appendChild(r)}var f="//g.alicdn.com";var u=self.goldlog;if(u&&u.getCdnPath){f=u.getCdnPath()}if(c&&c.src.indexOf("https://laz-g-cdn.alicdn.com")==0){f="//laz-g-cdn.alicdn.com"}var v=f+"/secdev/";var y=o.match(/Chrome\/(\d*)/);if(y){y=+y[1]}if(!m._sufei_data2){var _="3.9.10";var g=h(v+"sufei_data/"+_+"/index.js");g.async=m.cookie.indexOf("isg=")<0;g.id="aplus-sufei"}function b(e,r){var a=[];for(var t in e){a.push(t+"="+n(e[t]))}(new Image).src=r+a.join("&")}d.nsrprtrt=1e-4;var k=0;var j=["taobao","alibaba.com","alipay.com","tmall.com","lazada","aliexpress","1688.com","alimama.com","tb.cn","xiami.com","amap.com","cainiao.com","aliyun.com","etao.com","fliggy.com","liangxinyao.com","damai.cn","daraz","tmall.hk","jiyoujia.com","taopiaopiao.com","alitrip.com","fliggy.hk","alihealth.cn","alitrip.hk","ele.me","gaode","mp.dfkhgj.com","mp.bcvbw.com","m.dfkhgj.com","pailitao.com","youku.com","jiaoyimao","sm.cn","dingtalk.com","alibaba-inc","guoguo-app","kaola","alicdn","soku"];for(var x=0;x<j.length;x++){if(~e.host.indexOf(j[x])){k=1;break}}if(k){var w=["1.0.78","e",88];var C=["1.0.85","f",94];var S=0;var L=w;if(e.host=="sycm.taobao.com"||e.host=="liveplatform.taobao.com"){d.nslog=.01;S=1e4}if((p()*1e4|0)<S){L=C}if(!L){return}var M=v;var O=true;if(e.hostname.indexOf("buyertrade.taobao.com")>-1||/refund2\.taobao\.com$|refund2\.tmall\.com$/.test(e.hostname)&&e.pathname==="/dispute/apply.htm"){if(!O){M=M.replace("/secdev/","??xlly/spl/index.js,secdev/")}else{M=M.replace("/secdev/","??xlly/spl/index.js,xlly/spl/rp.js,secdev/")}}else if(O){M=M.replace("/secdev/","??xlly/spl/rp.js,secdev/")}var E=M+"nsv/"+L[0]+"/";var I=E+"ns_"+L[1]+"_"+L[2]+"_3_f.js?v=1";var T=E+"ns_"+L[1]+"_"+L[2]+"_3_n.js?v=1";function A(){var e="function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D";if("WebkitAppearance"in m.documentElement.style){if(escape(r.javaEnabled.toString())===e){return true}}return false}var D=o.match(/Edge\/([\d]*)/);var H=o.match(/Safari\/([\d]*)/);var P=o.match(/Firefox\/([\d]*)/);var R=o.match(/MSIE|Trident/);if(D){h(I)}else if(y){h(I)}else if(H||P||R){h(T)}else{if(A()){h(I)}else{h(T)}}}else{h(f+"/xlly/spl/rp.js")}function W(){var e=d.atob;if(!e){return}var r=0;var a="";function t(){if(++r==3){clearInterval(l)}c()}var n;var i=p()*1e8|0;function c(){var e=n.getUA({MaxMTLog:500,MTInterval:3});e=i+"|"+e;var r={token:e,cna:a,ext:7};b(r,"https://fourier.taobao.com/ts?")}var o=+localStorage._xlly;if(!o&&/xlly=1/.test(m.cookie)){o=+new Date;localStorage._xlly=o}if(o){var s=new Date-o;if(s>1e3*3600*24){s=0;delete localStorage._xlly}if(s<1e3*60*20){var l=setInterval(t,1e3*60);if(d.addEventListener){d.addEventListener("unload",c)}var f=m.cookie.match(/cna=([^;]+)/);if(f){a=f[1]}var u=h(e("aHR0cHM6Ly9nLmFsaWNkbi5jb20vQVdTQy9BV1NDL2F3c2MuanM="));var v=unescape("%75%61%62");u.onload=function(){d.AWSC&&AWSC.use(v,function(e,r){if(e==="loaded"){n=r}})}}}}try{W()}catch(e){}try{d.etrprtrt=.01;var z=0;for(var x=0;x<j.length;x++){if(e.host&&~e.host.indexOf(j[x])){z=1;break}}if(z){if(p()<.01){function B(r){try{r=(r||"url").split("?")[0].substr(0,128);if(d.__awsc_et__){if(p()<.1){b({},"https://acjs.aliyun.com/error?v=entry_hk2&e=loaded&tm=0"+"&u="+r)}}else{var a=+new Date;var t=setInterval(function(){var e=+new Date-a;if(d.__awsc_et__||e>2e3){b({},"https://acjs.aliyun.com/error?v=entry_hk2&e=wait&tm="+e+"&u="+r);clearInterval(t)}},50)}}catch(e){b({},"https://acjs.aliyun.com/error?v=entry_hk2_error&e="+n(e.message)+"&stack="+n(e.stack))}}function X(e,r,a){switch(a.length){case 0:return r();case 1:return r(a[0]);case 2:return r(a[0],a[1]);default:return r(a[0],a[2],a[3])}}function q(e,r){switch(r.length){case 0:return new e;case 1:return new e(r[0]);case 2:return new e(r[0],r[1]);default:return new e(r[0],r[2],r[3])}}function F(e,t,n){return function(){var r=arguments;var a;try{a=t.call(this,r,e)}catch(e){a=r}if(a){if(a===-1){return}r=a}if(n){return q(e,r)}return"apply"in e?e.apply(this,r):X(this,e,r)}}function N(e,r,a){if(!e){return false}var t=e[r];if(!t){return false}e[r]=F(t,a,false);return true}function U(e,r,a){if(!e){return false}var t=e[r];if(!t){return false}e[r]=F(t,a,true);return true}function $(e,r,a){var t=Object.getOwnPropertyDescriptor;if(!t){return false}var n=t(e,r);if(!n||!n.set){return false}n.set=F(n.set,a,false);if(!self.addEventListener){n.get=function(e){return function(){return e.call(this)}}(n.get)}Object.defineProperty(e,r,n);return true}try{var Q="__entry_url";function V(e){var r=N(e,"open",function(e){var r=e[1];this[Q]=r});var a=N(e,"send",function(e){var r=this[Q];B(r)});return r&&a}function G(){U(self,"XMLHttpRequest",function(){B("")})}function J(){var a=/XMLHTTP/i;U(self,"ActiveXObject",function(e){var r=e[0];if(r&&a.test(r)){B("")}})}var K=self["XMLHttpRequest"];if(K){var Y=K.prototype;if(Y&&V(Y)){}else{G()}}J()}catch(e){b({},"https://acjs.aliyun.com/error?v=entry_hk_error&e="+n(e.message)+"&stack="+n(e.stack))}try{function Z(){var e=self["HTMLScriptElement"];if(!e){return false}var r=e.prototype;N(r,"setAttribute",function(e){var r=e[0],a=e[1];if(/^src$/i.test(r)){ae(a)}});return $(r,"src",function(e){var r=e[0];ae(r)})}function ee(e){var r=self["Element"];if(r){N(r.prototype,e,re)}}function re(e){var r=e[0];if(r&&r.tagName==="SCRIPT"){ae(r.src)}}function ae(e){e+="";if(/callback=/.test(e)){B(e)}}if(!Z()){ee("insertBefore");ee("appendChild")}}catch(e){b({},"https://acjs.aliyun.com/error?v=entry_hk_error&e="+n(e.message)+"&stack="+n(e.stack))}}var te="1.61.1";var ne="1.62.1";var ie=1;var ce=te;if(p()<ie){ce=ne}if(!ce){return}var oe=f+"/AWSC/et/"+ce+"/";var se=oe+"et_f.js";var le=oe+"et_n.js";if(D){h(se)}else if(y){h(se)}else if(H||P||R){h(le)}else{if(A()){h(se)}else{h(le)}}}}catch(e){}if(p()<.01){if(!m.querySelector('meta[name="referrer"]')){var fe=m.createElement("meta");fe.name="referrer";fe.content="unsafe-url";i.appendChild(fe)}}})(window,document,Math.random,navigator,location,encodeURIComponent,decodeURIComponent);