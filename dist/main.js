(()=>{"use strict";var e,t,n,r,o,a,i,d,c,l,s,u,p,m,v={919:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,"body {\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    font-family: 'Courier New', Courier, monospace;\n\n    display: grid;\n    grid-template-columns: 20vw auto;\n}\n\n#sidebar {\n    width: 20vw;\n    border: 1px solid black;\n\n    display: grid;\n}\n\n#main {\n    grid-column-start: 2;\n    border: 1px solid black;\n\n    display: flex;\n    flex-direction: column;\n    padding-left: 200px;\n    padding-right: 200px;\n}\n\n#header {\n    margin-bottom: 20px;\n    grid-row-start: 1;\n    display: inline;\n}\n\n/* todo formatting */\n\n.todo {\n    display: flex;\n    border: 1px solid black;\n    border-radius: 5px;\n    margin-top: 20px;\n    padding: 20px;\n\n}\n\n.taskName {\n    flex-grow: 1;\n}\n\nlabel {\n    display: block;\n}\n\ninput,\ntextarea,\nselect {\n    margin-bottom: 10px;\n    width: 300px;\n}\n",""]);const d=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],l=r.base?c[0]+r.base:c[0],s=a[l]||0,u="".concat(l," ").concat(s);a[l]=s+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var v=o(m,r);r.byIndex=d,t.splice(d,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=n(a[i]);t[d].references--}for(var c=r(e,o),l=0;l<a.length;l++){var s=n(a[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},f={};function y(e){var t=f[e];if(void 0!==t)return t.exports;var n=f[e]={id:e,exports:{}};return v[e](n,n.exports,y),n.exports}y.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return y.d(t,{a:t}),t},y.d=(e,t)=>{for(var n in t)y.o(t,n)&&!y.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},y.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),y.nc=void 0,e=y(72),t=y.n(e),n=y(825),r=y.n(n),o=y(659),a=y.n(o),i=y(56),d=y.n(i),c=y(540),l=y.n(c),s=y(113),u=y.n(s),p=y(919),(m={}).styleTagTransform=u(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),t()(p.A,m),p.A&&p.A.locals&&p.A.locals,function(){const e=document.querySelector("#taskList"),t=function(){let e=[];return{array:e,addTask:(t,n,r,o,a="incomplete")=>{e.push({title:t,description:n,date:r,priority:o,status:a})},removeTask:t=>{e.splice(t,1)},editTask:(t,n,r,o,a)=>{const i={title:t,description:n,date:r,priority:o};e.splice(a,1,i)}}}(),n=()=>{for(;e.firstChild;)e.removeChild(e.firstChild)},r=n=>{let r=document.createElement("div");r.classList.add("todo");let a=document.createElement("div");a.classList.add("taskName"),a.textContent=n.title;let i=document.createElement("div");i.classList.add("buttons");const d=(e=>{const n=document.createElement("button");return n.classList.add("editButton"),n.textContent="edit",n.addEventListener("click",(function(){(e=>{const n=document.querySelector("#editTitle"),r=document.querySelector("#editDescription"),a=document.querySelector("#editDueDate"),i=document.querySelector("#editPriority"),d=document.getElementById("editDialog");n.value=e.title,r.value=e.description,a.value=e.date,i.value=e.priority,d.showModal(),document.querySelector("#editCancel").addEventListener("click",(()=>{d.close(),document.querySelector("form").reset()})),document.querySelector("#update").addEventListener("click",(e=>{e.preventDefault(),n.validity.valid&&r.validity.valid&&a.validity.valid&&(t.editTask(n.value,r.value,a.value,i.value),o(),document.querySelector("form").reset(),d.close())}))})(e)})),n})(n),c=(e=>{const n=document.createElement("button");return n.classList.add("deleteButton"),n.textContent="delete",n.addEventListener("click",(function(){(e=>{let n=t.array.indexOf(e);t.removeTask(n),o()})(e)})),n})(n);i.appendChild(d),i.appendChild(c),r.appendChild(a),r.appendChild(i),e.appendChild(r),console.log("added")},o=()=>{n(),t.array.forEach((function(e){r(e)}))};return{setupModal:()=>{const e=document.getElementById("cancel"),n=document.getElementById("addTask"),r=document.getElementById("taskDialog");e.addEventListener("click",(()=>{r.close(),document.querySelector("form").reset()})),n.addEventListener("click",(e=>{e.preventDefault(),title.validity.valid&&description.validity.valid&&dueDate.validity.valid&&(t.addTask(title.value,description.value,dueDate.value,priority.value),o(),document.querySelector("form").reset(),r.close())}))},clearList:n,update:o,renderMain:()=>{const e=document.querySelector("#title"),n=document.querySelector("#description"),r=document.querySelector("#dueDate"),a=document.querySelector("#priority"),i=document.getElementById("newTask"),d=document.getElementById("cancel"),c=document.getElementById("addTask"),l=document.getElementById("newTaskDialog");l.returnValue="task",i.addEventListener("click",(()=>{l.showModal()})),d.addEventListener("click",(()=>{l.close(),document.querySelector("form").reset()})),c.addEventListener("click",(i=>{i.preventDefault(),e.validity.valid&&n.validity.valid&&r.validity.valid&&(t.addTask(e.value,n.value,r.value,a.value),o(),document.querySelector("form").reset(),l.close())}))}}}().renderMain()})();