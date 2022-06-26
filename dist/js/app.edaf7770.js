(function(){"use strict";var e={8242:function(e,n,t){var r=t(9242),o=t(3392),u=t(678);const i=[{path:"/",redirect:"/parentPage_props"},{path:"/homePage",name:"homePage",component:Promise.resolve().then(t.bind(t,3392))},{path:"/parentPage_props",name:"parentPage_props",component:t.e(519).then(t.bind(t,2519))},{path:"/parentPage_emit",name:"parentPage_emit",component:t.e(809).then(t.bind(t,3809))}],a=(0,u.p7)({history:(0,u.r5)(),routes:i});var c=a;const f=(0,r.ri)(o["default"]);f.use(c),f.mount("#app")},3392:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(3396);const o=(0,r._)("h1",null,"vue 组件通信方法 简单demo (之后会添加其它方法……)",-1),u=(0,r.Uk)("父组件传参给子组件——props"),i=(0,r._)("br",null,null,-1),a=(0,r.Uk)("子组件传参给父组件——emit");function c(e,n,t,c,f,s){const l=(0,r.up)("router-link"),p=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[o,(0,r.Wm)(l,{to:{name:"parentPage_props"}},{default:(0,r.w5)((()=>[u])),_:1}),i,(0,r.Wm)(l,{to:{name:"parentPage_emit"}},{default:(0,r.w5)((()=>[a])),_:1}),(0,r.Wm)(p)],64)}var f={name:"App",components:{}},s=t(89);const l=(0,s.Z)(f,[["render",c]]);var p=l}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={exports:{}};return e[r](u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,u){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],u=e[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&u||i>=u)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,u<i&&(i=u));if(a){e.splice(s--,1);var f=o();void 0!==f&&(n=f)}}return n}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[r,o,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{519:"d3c87c5b",809:"2290ca34"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{519:"0efad6fb",809:"4d6ff9b9"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue_pass_message:";t.l=function(r,o,u,i){if(e[r])e[r].push(o);else{var a,c;if(void 0!==u)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+u){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+u),a.src=r),e[r]=[o];var p=function(n,t){a.onerror=a.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var u=function(u){if(o.onerror=o.onload=null,"load"===u.type)t();else{var i=u&&("load"===u.type?"missing":u.type),a=u&&u.target&&u.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=u,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===e||u===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],u=o.getAttribute("data-href");if(u===e||u===n)return o}},r=function(r){return new Promise((function(o,u){var i=t.miniCssF(r),a=t.p+i;if(n(i,a))return o();e(r,a,o,u)}))},o={143:0};t.f.miniCss=function(e,n){var t={519:1,809:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=u);var i=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,u,i=r[0],a=r[1],c=r[2],f=0;if(i.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var s=c(t)}for(n&&n(r);f<i.length;f++)u=i[f],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(s)},r=self["webpackChunkvue_pass_message"]=self["webpackChunkvue_pass_message"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(8242)}));r=t.O(r)})();
//# sourceMappingURL=app.edaf7770.js.map