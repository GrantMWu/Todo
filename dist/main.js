(()=>{"use strict";var e={919:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,"body {\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    font-family: 'Courier New', Courier, monospace;\n\n    display: grid;\n    grid-template-columns: 20vw auto;\n}\n\n#sidebar {\n    width: 20vw;\n    border: 1px solid black;\n\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n\n    padding-top: 50px;\n    \n}\n\n#newProject {\n    width: 50%;\n    align-self: center;\n}\n\nli {\n    list-style-type: none;\n}\n\n#feed-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n\n#main {\n    grid-column-start: 2;\n    border: 1px solid black;\n\n    display: flex;\n    flex-direction: column;\n    padding-left: 200px;\n    padding-right: 200px;\n}\n\n#header {\n    margin-bottom: 20px;\n    grid-row-start: 1;\n    display: inline;\n}\n\n/* todo formatting */\n\n.todo {\n    display: flex;\n    border: 1px solid black;\n    border-radius: 5px;\n    margin-top: 20px;\n    padding: 20px;\n\n}\n\n.taskName {\n    flex-grow: 1;\n}\n\nlabel {\n    display: block;\n}\n\ninput,\ntextarea,\nselect {\n    margin-bottom: 10px;\n    width: 300px;\n}\n\n.project {\n    display: flex;\n}\n",""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],s=a[l]||0,u="".concat(l," ").concat(s);a[l]=s+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var v=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var d=r(e,o),l=0;l<a.length;l++){var s=n(a[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=d}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(e){let t=function(){const e=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))};return{getData:t=>{let n;return localStorage.getItem(t)?n=JSON.parse(localStorage.getItem(t)):(n=[],e(t,n)),n},saveData:e,deleteData:e=>{localStorage.removeItem(e)}}}(),n=t.getData(e);return{array:n,addTask:r=>{n.push(r),t.saveData(e,n)},removeTask:r=>{n.splice(r,1),t.saveData(e,n)},editTask:(r,o)=>{n.splice(o,1,r),t.saveData(e,n)},deleteProject:()=>{t.deleteData(project)},title:e}}var t=n(72),r=n.n(t),o=n(825),a=n.n(o),i=n(659),c=n.n(i),d=n(56),l=n.n(d),s=n(540),u=n.n(s),p=n(113),m=n.n(p),v=n(919),f={};f.styleTagTransform=m(),f.setAttributes=l(),f.insert=c().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u(),r()(v.A,f),v.A&&v.A.locals&&v.A.locals;let y=function(){const t=document.querySelector("#taskList"),n=document.querySelector("#projectList");let r;const o=e("projects"),a=(e,t,n)=>{i(e),n.array.forEach((function(r){t(r,e,t,n)}))},i=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},c=()=>{const e=document.createElement("button");return e.classList.add("deleteButton"),e.innerHTML='<i class="fa fa-trash-o" aria-hidden="true"></i>',e},d=(e,t,n,r)=>{let o=r.array.indexOf(e);r.removeTask(o),a(t,n,r)},l=e=>{let n=document.createElement("div");n.classList.add("todo");let o=document.createElement("div");o.classList.add("taskName"),o.textContent=e.title;let i=document.createElement("div");i.classList.add("todoButtons");const s=(()=>{const e=document.createElement("button");return e.classList.add("editButton"),e.innerHTML="<i class='fa fa-edit'></i>",e})();s.addEventListener("click",(function(){(e=>{const n=document.querySelector("#editTitle"),o=document.querySelector("#editDescription"),i=document.querySelector("#editDueDate"),c=document.querySelector("#editPriority"),d=document.getElementById("editDialog");n.value=e.title,o.value=e.description,i.value=e.date,c.value=e.priority;let s=r.array.indexOf(e);d.showModal(),document.querySelector("#editCancel").addEventListener("click",(()=>{d.close(),document.querySelector("form").reset()})),document.querySelector("#update").addEventListener("click",(e=>{if(e.preventDefault(),n.validity.valid&&o.validity.valid&&i.validity.valid){let e={title:n.value,description:o.value,date:i.value,priority:c.value};r.editTask(e,s),a(t,l,r),document.querySelector("form").reset(),d.close()}}))})(e)}));const u=c();u.addEventListener("click",(function(){d(e,t,l,r)})),i.appendChild(s),i.appendChild(u),n.appendChild(o),n.appendChild(i),t.appendChild(n)},s=(e,t,n,o)=>{let a=document.createElement("li");a.classList.add("project");let i=document.createElement("div");i.textContent=e,i.addEventListener("click",(function(){u(e)}));let l=document.createElement("div");l.classList.add("projectButtons");const s=c();s.addEventListener("click",(function(){d(e,t,n,o),localStorage.removeItem(e),r.title==e&&u("today")})),l.appendChild(s),a.appendChild(i),a.appendChild(l),document.querySelector("#projectList").appendChild(a)},u=n=>{r=e(n),document.getElementById("project").textContent=n;const o=document.querySelector("#title"),i=document.querySelector("#description"),c=document.querySelector("#dueDate"),d=document.querySelector("#priority"),s=document.getElementById("newTask"),u=document.getElementById("cancel"),p=document.getElementById("addTask"),m=document.getElementById("newTaskDialog");s.addEventListener("click",(()=>{m.showModal()})),u.addEventListener("click",(()=>{m.close(),document.querySelector("form").reset()})),p.addEventListener("click",(e=>{e.preventDefault(),o.validity.valid&&i.validity.valid&&c.validity.valid&&(newTask={title:o.value,description:i.value,date:c.value,priority:d.value},r.addTask(newTask),a(t,l,r),document.querySelector("form").reset(),m.close())})),a(t,l,r)};return{clearList:i,update:a,renderMain:u,renderSide:()=>{const e=document.querySelector("#projectDialog"),t=document.querySelector("#projectCancel"),r=document.querySelector("#addProject"),i=document.querySelector("#newProject"),c=document.querySelector("#projectTitle"),d=document.querySelector("#projectDescription");i.addEventListener("click",(()=>{e.showModal()})),t.addEventListener("click",(()=>{e.close(),document.querySelector("form").reset()})),r.addEventListener("click",(t=>{t.preventDefault(),c.validity.valid&&d.validity.valid&&(o.addTask(c.value),console.log(o.array),a(n,s,o),document.querySelector("form").reset(),e.close())})),a(n,s,o)}}}();y.renderMain("today"),y.renderSide()})()})();