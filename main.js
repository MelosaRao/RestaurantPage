(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(601),o=t.n(r),a=t(314),c=t.n(a)()(o());c.push([e.id,"#content{\n    width:max(70%,500px);\n    text-align: center;\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 18px;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    padding: 0;\n    margin: 0;\n    color: white;\n    background-color: grey;\n}\n\nimg{\n    width: 100%;\n    height: auto;\n}\n.divgrids{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto auto auto;\n}\n\n.divgrids h1{\n    grid-column: 1/3;\n}\n\nfigcaption{\n    font-size: 18px;\n}\n\nbutton{\n    background-color: #fa7d35;\n    padding: 10px 35px;\n    border-radius: 10px;\n    border: 0cm;\n    font-weight: bold;\n    color: white;\n    font-size: 18px;\n    margin: 20px;\n}\n\nbutton:hover{\n    background-color: #114cee;\n}\n\nnav{\n    background-color: bisque;\n    width: 100vw;\n    text-align: center;\n}",""]);const i=c},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);r&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=r.base?d[0]+r.base:d[0],p=a[s]||0,u="".concat(s," ").concat(p);a[s]=p+1;var l=t(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)n[l].references++,n[l].updater(f);else{var m=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var d=r(e,o),s=0;s<a.length;s++){var p=t(a[s]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=d}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),c=t.n(a),i=t(659),d=t.n(i),s=t(56),p=t.n(s),u=t(540),l=t.n(u),f=t(113),m=t.n(f),h=t(208),g={};g.styleTagTransform=m(),g.setAttributes=p(),g.insert=d().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=l(),o()(h.A,g),h.A&&h.A.locals&&h.A.locals;const v=t.p+"ae88a0704b6edbb258b4.jpg",b=t.p+"d8d645c7e2d028a21b35.jpg",y=t.p+"0df0b6cd39a1b5956f4d.jpg",x=t.p+"7a7b4e1c4c7b99e09107.jpg",C=t.p+"6288a70973c480be1e85.jpg",w=document.querySelector("#content"),E=document.querySelector("#home"),T=document.querySelector("#menu"),S=document.querySelector("#contact");function M(){w.innerHTML="";const e=document.createElement("h1");e.textContent="V's Kitchen Restaurent and Food Delivery";const n=new Image;n.src=v;const t=document.createElement("p");t.textContent="We use the best ingredients and offer a wide variety of Indian food to suit the occation.",w.appendChild(e),w.appendChild(t),w.appendChild(n)}M(),E.addEventListener("click",M),T.addEventListener("click",(()=>{w.innerHTML="",w.appendChild(function(e,n,t,r){const o=document.createElement("div");o.classList.add("menugrid");const a=document.createElement("h1");a.innerText="Menu";const c=new Image;c.src=e;const i=new Image;i.src=n;const d=new Image;d.src=t;const s=new Image;s.src=r;const p=document.createElement("div");p.classList.add("divgrids");const u=document.createElement("figure");u.appendChild(c);const l=document.createElement("figcaption");l.innerText="Butter Chicken - $20",u.appendChild(l);const f=document.createElement("figure");f.appendChild(d);const m=document.createElement("figcaption");m.innerText="Palak Panner - $15",f.appendChild(m);const h=document.createElement("figure");h.appendChild(s);const g=document.createElement("figcaption");g.innerText="Pulov - $15",h.appendChild(g);const v=document.createElement("figure");v.appendChild(i);const b=document.createElement("figcaption");return b.innerText="Kheer - $15",v.appendChild(b),p.appendChild(a),p.appendChild(u),p.appendChild(f),p.appendChild(h),p.appendChild(v),o.appendChild(p),o}(b,y,x,C))})),S.addEventListener("click",(()=>{w.innerHTML="",w.appendChild(function(){const e=document.createElement("div"),n=document.createElement("h1");n.innerText="Contact Us",e.appendChild(n);const t=document.createElement("p");t.textContent="Phone Number : +1223456789";const r=document.createElement("p");r.innerHTML="41 Broad Street";const o=document.createElement("p");return o.textContent="           MA United States",e.appendChild(t),e.appendChild(r),e.appendChild(o),e}())}))})();