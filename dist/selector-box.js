!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SelectorBox=t():e.SelectorBox=t()}(self,(function(){return(()=>{"use strict";var e={982:(e,t,n)=>{n.r(t),n.d(t,{init:()=>B});var r="value",o="selector_hided",i="selector_expand-list";function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(n,e);var t=c(n);function n(e){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(r=t.call(this))._tagName=e;var o=r.createElement();return r._element=o||null,r}return n}(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"createElement",value:function(){return null!=this._tagName&&document.createElement(this._tagName)}},{key:"addClass",value:function(e){this._element.classList.add(e)}},{key:"toggleClass",value:function(e){this._element.classList.toggle(e)}},{key:"removeClass",value:function(e){this._element.classList.remove(e)}},{key:"removeAllClass",value:function(){this._element.className="",this._element.removeAttribute("class")}},{key:"addChild",value:function(e){var t=e.render();this._element.appendChild(t)}},{key:"addChildFirst",value:function(e){var t=e.render();this._element.insertBefore(t,this._element.firstChild)}},{key:"removeChild",value:function(e){var t=e.render();this._element.removeChild(t)}},{key:"removeChildren",value:function(){this._element.innerHTML=""}},{key:"addAttribute",value:function(e,t){this._element.setAttribute(e,t)}},{key:"getAttribute",value:function(e){var t=this._element.getAttribute(e);return null!==t&&t}},{key:"removeAttribute",value:function(e){this._element.removeAttribute(e)}},{key:"text",value:function(e){this._element.innerText=e}},{key:"render",value:function(){return this._element}}])&&a(t.prototype,n),r&&a(t,r),e}());function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;e.removeChildren();var i,a,s=n.length,l=[];for(a=0;a<s;++a)(i=new f(t)).addAttribute(o,n[a].key),i.text(n[a].value),l[a]=i,e.addChild(i);return l}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const v=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._hostElement=t,this._reference=n,this._navigatorText=r,this._searchBoxText=o;var i=this.getSelectBox();this._selectBox=i.selectBoxParent,this._selectBoxChildren=i.selectBoxChildren;var a=this.getSelectList();this._selectList=a.selectListParent,this._selectListChildren=a.selectListChildren,this._navigator=this.getNavigator(),this._container=this.getContainer();var s=this.getSearchBox();this._searchBoxContainer=s.searchBoxContainer,this._searchBox=s.searchBoxInput}var t,n,r;return t=e,(n=[{key:"getSelectBox",value:function(){var e=new f("select"),t=A(e,"option",this._reference);return e.addClass(o),{selectBoxParent:e,selectBoxChildren:t}}},{key:"getSelectList",value:function(){var e=new f("ul"),t=A(e,"li",this._reference,"data-key");return e.addClass("selector_select-list"),e.addClass(o),{selectListParent:e,selectListChildren:t}}},{key:"getNavigator",value:function(){var e=new f("div");return e.addClass("selector_navigator"),e.text(this._navigatorText),e}},{key:"getContainer",value:function(){var e=new f("div");return e.addClass("selector_container"),e}},{key:"getSearchBox",value:function(){var e=new f("li"),t=new f("input");return e.addClass("selector_search-box-container"),t.addAttribute("placeholder",this._searchBoxText),e.addChild(t),{searchBoxContainer:e,searchBoxInput:t}}},{key:"renderToHost",value:function(){if(void 0===this._selectBox)throw Error("Could not render elements to host: (selectBox) is undefined");if(void 0===this._selectList)throw Error("Could not render elements to host: (selectList) is undefined");if(void 0===this._navigator)throw Error("Could not render elements to host: (navigator) is undefined");if(void 0===this._container)throw Error("Could not render elements to host: (container) is undefined");return this._container.addChild(this._selectBox),this._container.addChild(this._navigator),this._selectList.addChildFirst(this._searchBoxContainer),this._container.addChild(this._selectList),this._hostElement.innerHTML="",this._hostElement.appendChild(this._container.render()),!0}}])&&p(t.prototype,n),r&&p(t,r),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const C=function(){function e(t,n,r,o,i,a){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),void 0===t)throw Error("Could not provide events. navigator is undefined.");if(void 0===n)throw Error("Could not provide events. searchBox is undefined.");if(void 0===r)throw Error("Could not provide events. selectList is undefined.");if(void 0===o)throw Error("Could not provide events. selectBox is undefined.");this._navigator=t,this._searchBox=n,this._selectList=r,this._selectBox=o,this._searchBoxContainer=i,this._reference=a,this.navigatorClickHandler=this.navigatorClickHandler.bind(this),this.searchBoxChangeHandler=this.searchBoxChangeHandler.bind(this),this.selectListClickHandler=this.selectListClickHandler.bind(this),this.addEventListeners(),this._lastSelected=null}var t,n,r;return t=e,(n=[{key:"addEventListeners",value:function(){this._navigator.render().addEventListener("click",this.navigatorClickHandler),this._searchBox.render().addEventListener("keyup",this.searchBoxChangeHandler),this._selectList.render().addEventListener("click",this.selectListClickHandler)}},{key:"navigatorClickHandler",value:function(){this._navigator.toggleClass(i),this._selectList.toggleClass(o),this._selectList.render().scrollTo(0,0)}},{key:"searchBoxChangeHandler",value:function(e){var t=e.target.value,n=[];this._reference.find((function(e){if(-1==e.value.indexOf(t))return!1;n.push(e)})),A(this._selectList,"li",n,"data-key"),this._selectList.addChildFirst(this._searchBoxContainer),this._searchBox.render().focus()}},{key:"selectListClickHandler",value:function(e){var t=e.target,n=t.getAttribute("data-key");return null!==n&&(null!==this._lastSelected&&(this._lastSelected.className="",this._lastSelected.removeAttribute("class")),this._selectBox.render().value=n,""!==this._selectBox.render().value&&(this._navigator.text(t.innerText),t.className="selector_selected-item",this._selectList.toggleClass(o),this._navigator.toggleClass(i),void(this._lastSelected=t)))}}])&&b(t.prototype,n),r&&b(t,r),e}();var g=n(379),m=n.n(g),y=n(788),x={insert:"head",singleton:!1};m()(y.Z,x);y.Z.locals;function B(e){!function(e){if(void 0===e)throw Error("You should pass an Option object to init function call.");if("object"!==h(e))throw Error("Unvalid Option object passed to init function call.");if(void 0===e.el)throw Error("Option object should contain a (el) property.");if(void 0===e.ref)throw Error("Option object should contain a (ref) property. ref is reference array of key values that should be rendered in the DOM.");if(!Array.isArray(e.ref))throw Error("(ref) property in options should be an array of key-value objects")}(e);var t=function(e){var t=document.getElementById(e);if(null===t)throw Error("Unable to find any element with '".concat(e,"' id."));return t}(e.el),n=e.ref,r=void 0!==e.navTxt?e.navTxt:"Select an item...",o=void 0!==e.searchTxt?e.searchTxt:"Search in the list...",i=new v(t,n,r,o);i.renderToHost();new C(i._navigator,i._searchBox,i._selectList,i._selectBox,i._searchBoxContainer,n)}},788:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(15),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,".selector_container,\n.selector_container * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n/* Selector Container */\n.selector_container {\n    display: flex;\n    flex-direction: column;\n    width: 300px;\n}\n\n/* Selector Navigator */\n.selector_navigator {\n    border-bottom: 2px solid rgba(0, 0, 0, 0.1);\n    padding: 15px 30px;\n    text-align: center;\n    display: inline-block;\n    cursor: pointer;\n    position: relative;\n    width: 300px;\n}\n\n.selector_navigator::after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 10px solid #555;\n    right: 5px;\n    top: 50%;\n    transform: translateY(-50%) rotate(0deg);\n    transition: 0.3s transfrom;\n}\n\n.selector_navigator.selector_expand-list::after {\n    transform: translateY(-50%) rotate(180deg) !important;\n}\n\n/* Selector Select List */\n.selector_select-list {\n    width: 100%;\n    padding: 5px 0;\n    margin-top: 10px !important;\n    box-shadow: 0px 0px 7px rgba(0,0,0,0.2);\n    list-style: none;\n    text-align: right;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px;\n    transition: 0.5s opacity;\n    overflow-y: scroll;\n    height: 300px;\n    opacity: 1;\n    visibility: visible;\n    margin-top: 20px;\n}\n\n.selector_select-list > li {\n    padding: 10px;\n    cursor: pointer;\n}\n\n.selector_select-list > li:hover,\n.selector_select-list > li.active {\n    background-color: rgba(0,0,0,0.1);\n}\n\n/* Selector Search Box Container */\n.selector_search-box-container {\n    margin-bottom: 10px;\n    padding-bottom: 20px;\n    border-bottom: 1px solid rgba(0,0,0,0.1);\n}\n\n.selector_search-box-container > input {\n    display: block;\n    width: 100%;\n    direction: rtl;\n    outline: none;\n    padding: 10px 10px;\n    border: 1px solid rgba(0,0,0,0.1);\n    box-sizing: border-box;\n    border-radius: 0.3rem;\n}\n\n.selector_search-box-container:hover {\n    background-color: #fff !important;\n    cursor: default;\n}\n\n/* Selector Hided */\n.selector_hided {\n    visibility: hidden;\n    opacity: 0;\n    height: 0;\n    background-color: white;\n}\n\n/* Selector Selected Item */\n.selector_selected-item {\n    background-color: rgba(0,0,0,0.1);\n}","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;;IAEI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA,uBAAuB;AACvB;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA,uBAAuB;AACvB;IACI,2CAA2C;IAC3C,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,kCAAkC;IAClC,mCAAmC;IACnC,2BAA2B;IAC3B,UAAU;IACV,QAAQ;IACR,wCAAwC;IACxC,0BAA0B;AAC9B;;AAEA;IACI,qDAAqD;AACzD;;AAEA,yBAAyB;AACzB;IACI,WAAW;IACX,cAAc;IACd,2BAA2B;IAC3B,uCAAuC;IACvC,gBAAgB;IAChB,iBAAiB;IACjB,+BAA+B;IAC/B,8BAA8B;IAC9B,wBAAwB;IACxB,kBAAkB;IAClB,aAAa;IACb,UAAU;IACV,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;;IAEI,iCAAiC;AACrC;;AAEA,kCAAkC;AAClC;IACI,mBAAmB;IACnB,oBAAoB;IACpB,wCAAwC;AAC5C;;AAEA;IACI,cAAc;IACd,WAAW;IACX,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB,iCAAiC;IACjC,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,iCAAiC;IACjC,eAAe;AACnB;;AAEA,mBAAmB;AACnB;IACI,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,uBAAuB;AAC3B;;AAEA,2BAA2B;AAC3B;IACI,iCAAiC;AACrC",sourcesContent:[".selector_container,\n.selector_container * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n/* Selector Container */\n.selector_container {\n    display: flex;\n    flex-direction: column;\n    width: 300px;\n}\n\n/* Selector Navigator */\n.selector_navigator {\n    border-bottom: 2px solid rgba(0, 0, 0, 0.1);\n    padding: 15px 30px;\n    text-align: center;\n    display: inline-block;\n    cursor: pointer;\n    position: relative;\n    width: 300px;\n}\n\n.selector_navigator::after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 10px solid #555;\n    right: 5px;\n    top: 50%;\n    transform: translateY(-50%) rotate(0deg);\n    transition: 0.3s transfrom;\n}\n\n.selector_navigator.selector_expand-list::after {\n    transform: translateY(-50%) rotate(180deg) !important;\n}\n\n/* Selector Select List */\n.selector_select-list {\n    width: 100%;\n    padding: 5px 0;\n    margin-top: 10px !important;\n    box-shadow: 0px 0px 7px rgba(0,0,0,0.2);\n    list-style: none;\n    text-align: right;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px;\n    transition: 0.5s opacity;\n    overflow-y: scroll;\n    height: 300px;\n    opacity: 1;\n    visibility: visible;\n    margin-top: 20px;\n}\n\n.selector_select-list > li {\n    padding: 10px;\n    cursor: pointer;\n}\n\n.selector_select-list > li:hover,\n.selector_select-list > li.active {\n    background-color: rgba(0,0,0,0.1);\n}\n\n/* Selector Search Box Container */\n.selector_search-box-container {\n    margin-bottom: 10px;\n    padding-bottom: 20px;\n    border-bottom: 1px solid rgba(0,0,0,0.1);\n}\n\n.selector_search-box-container > input {\n    display: block;\n    width: 100%;\n    direction: rtl;\n    outline: none;\n    padding: 10px 10px;\n    border: 1px solid rgba(0,0,0,0.1);\n    box-sizing: border-box;\n    border-radius: 0.3rem;\n}\n\n.selector_search-box-container:hover {\n    background-color: #fff !important;\n    cursor: default;\n}\n\n/* Selector Hided */\n.selector_hided {\n    visibility: hidden;\n    opacity: 0;\n    height: 0;\n    background-color: white;\n}\n\n/* Selector Selected Item */\n.selector_selected-item {\n    background-color: rgba(0,0,0,0.1);\n}"],sourceRoot:""}]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},15:e=>{function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n=t(e,4),r=n[1],o=n[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),s="/*# ".concat(a," */"),l=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[r].concat(l).concat([s]).join("\n")}return[r].join("\n")}},379:(e,t,n)=>{var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],l=t.base?i[0]+t.base:i[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=s(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:v(f,t),references:1}),r.push(d)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function h(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var A=null,p=0;function v(e,t){var n,r,o;if(t.singleton){var i=p++;n=A||(A=c(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=c(t),r=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);a[o].references--}for(var i=l(e,t),c=0;c<n.length;c++){var d=s(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(982)})()}));