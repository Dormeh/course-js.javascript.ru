!function(e){function t(t){for(var n,r,i=t[0],s=t[1],a=0,d=[];a<i.length;a++)r=i[a],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);d.length;)d.shift()()}var n={},o={0:0};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=function(e){return r.p+""+({1:"categories-index-js",2:"dashboard-index-js",3:"error404-index-js",4:"products-edit-index-js",5:"products-list-index-js",6:"sales-index-js"}[e]||e)+"-"+e+".js"}(e);var u=new Error;s=function(t){a.onerror=a.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,n[1](u)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/course-js.javascript.ru/",r.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var u=s;r(r.s=2)}([function(e,t,n){var o={"./categories/index.js":[6,1],"./dashboard/index.js":[5,2],"./error404/index.js":[3,3],"./products/edit/index.js":[7,4],"./products/list/index.js":[4,5],"./sales/index.js":[8,6]};function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id=0,e.exports=r},,function(e,t,n){"use strict";n.r(t);class o{constructor(){this.routes=[],this.initEventListeners()}initEventListeners(){document.addEventListener("click",e=>{const t=e.target.closest("a");if(!t)return;const n=t.getAttribute("href");n&&n.startsWith("/")&&(e.preventDefault(),this.navigate(n))})}static instance(){return this._instance||(this._instance=new o),this._instance}async route(){let e,t=decodeURI(window.location.pathname).replace(/^\/|\/$/,"");for(let n of this.routes)if(e=t.match(n.pattern),e){this.page=await this.changePage(n.path,e);break}e||(this.page=await this.changePage(this.notFoundPagePath)),document.dispatchEvent(new CustomEvent("route",{detail:{page:this.page}}))}async changePage(e,t){return this.page&&this.page.destroy&&this.page.destroy(),await async function(e,t){const o=document.querySelector("main");o.classList.add("is-loading");const{default:r}=await n(0)("./".concat(e,"/index.js")),i=new r(t),s=await i.render();o.classList.remove("is-loading");const a=document.querySelector("#content");return a.innerHTML="",a.append(s),i}(e,t)}navigate(e){history.pushState(null,null,e),this.route()}addRoute(e,t){return this.routes.push({pattern:e,path:t}),this}setNotFoundPagePath(e){return this.notFoundPagePath=e,this}listen(){window.addEventListener("popstate",()=>this.route()),this.route()}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class i{removeTooltip(){this.element&&(this.element.remove(),this.element=null,document.removeEventListener("pointermove",this.onMouseMove))}constructor(){if(r(this,"element",void 0),r(this,"onMouseOver",e=>{const t=e.target.closest("[data-tooltip]");t&&(this.render(t.dataset.tooltip),this.moveTooltip(e),document.addEventListener("pointermove",this.onMouseMove))}),r(this,"onMouseMove",e=>{this.moveTooltip(e)}),r(this,"onMouseOut",()=>{this.removeTooltip()}),i.instance)return i.instance;i.instance=this}initEventListeners(){document.addEventListener("pointerover",this.onMouseOver),document.addEventListener("pointerout",this.onMouseOut)}initialize(){this.initEventListeners()}render(e){this.element=document.createElement("div"),this.element.className="tooltip",this.element.innerHTML=e,document.body.append(this.element)}moveTooltip(e){const t=e.clientX+10,n=e.clientY+10;this.element.style.left=t+"px",this.element.style.top=n+"px"}destroy(){document.removeEventListener("pointerover",this.onMouseOver),document.removeEventListener("pointerout",this.onMouseOut),this.removeTooltip()}}r(i,"instance",void 0);(new i).initialize();o.instance().addRoute(/^$/,"dashboard").addRoute(/^products$/,"products/list").addRoute(/^products\/add$/,"products/edit").addRoute(/^products\/([\w()-]+)$/,"products/edit").addRoute(/^sales$/,"sales").addRoute(/^categories$/,"categories").addRoute(/^404\/?$/,"error404").setNotFoundPagePath("error404").listen();document.body.querySelector(".sidebar__toggler").addEventListener("click",e=>{e.preventDefault(),document.body.classList.toggle("is-collapsed-sidebar")})}]);
//# sourceMappingURL=app.bundle.js.map