!function(n){var e={};function t(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(i,o,function(e){return n[e]}.bind(null,o));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=2)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var o=(a=i,p=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(p),"/*# ".concat(s," */")),r=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[t].concat(r).concat([o]).join("\n")}var a,p,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var p=0;p<n.length;p++){var s=[].concat(n[p]);i&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";t.r(e);t(3)},function(n,e,t){var i=t(4),o=t(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);n.exports=o.locals||{}},function(n,e,t){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function p(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},i=[],o=0;o<n.length;o++){var r=n[o],s=e.base?r[0]+e.base:r[0],d=t[s]||0,c="".concat(s," ").concat(d);t[s]=d+1;var h=p(c),l={css:r[1],media:r[2],sourceMap:r[3]};-1!==h?(a[h].references++,a[h].updater(l)):a.push({identifier:c,updater:m(l,e),references:1}),i.push(c)}return i}function d(n){var e=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var o=t.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(n){e.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,h=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function l(n,e,t,i){var o=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=h(e,o);else{var r=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function u(n,e,t){var i=t.css,o=t.media,r=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var x=null,f=0;function m(n,e){var t,i,o;if(e.singleton){var r=f++;t=x||(x=d(e)),i=l.bind(null,t,r,!1),o=l.bind(null,t,r,!0)}else t=d(e),i=u.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var o=p(t[i]);a[o].references--}for(var r=s(n,e),d=0;d<t.length;d++){var c=p(t[d]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}t=r}}}},function(n,e,t){var i=t(0),o=t(6),r=t(7),a=t(8),p=t(16),s=t(17),d=t(22),c=t(23),h=t(25),l=t(27),u=t(32),x=t(35),f=t(36),m=t(42),g=t(43),b=t(50),w=t(60),_=t(63),v=t(66);(e=i(!1)).i(o),e.i(r),e.i(a),e.i(p),e.i(s),e.i(d),e.i(c),e.i(h),e.i(l),e.i(u),e.i(x),e.i(f),e.i(m),e.i(g),e.i(b),e.i(w),e.i(_),e.i(v),e.push([n.i,"*{box-sizing:border-box}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".page {\n    /* max-width: 1600px; */\n    /* выше установили ограничение по максимальной ширине */\n    /* margin: 0 auto; */\n    /* выше для экранов больше 1600px отцентрировали весь контент */\n    font-family: 'Helvetica Neue', Arial, sans-serif;\n}\n",""]),n.exports=e},function(n,e,t){var i=t(0),o=t(9),r=t(10),a=t(11),p=t(12),s=t(13),d=t(15);(e=i(!1)).i(o),e.i(r),e.i(a),e.i(p),e.i(s),e.i(d),e.push([n.i,".header {\n    display: flex;\n    position: relative;\n    height: 100vh;\n    min-height: 600px;\n    max-height: 756px;\n    background-color:#F2F2F2;\n    padding: 0 120px 0 120px;\n    overflow: hidden;\n}\n\n@media screen and (max-width: 400px) {\n    .header {\n        padding: 0 20px 0 20px;\n    }\n}\n\n@media screen and (min-width: 401px) and (max-width: 1280px) {\n    .header {\n        padding: 0 64px 0 64px;\n    }\n}\n",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".header__logo {\n    position: absolute;\n    top: 30px;\n    left: 120px;\n    background-size: contain;\n    z-index: 2;\n}\n\n@media screen and (max-width: 400px){\n    .header__logo {\n        left: 20px;\n    }\n}\n\n@media screen and (min-width: 401px) and (max-width: 1280px){\n    .header__logo {\n        left: 64px;\n    }\n}\n",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".header__title {\n    text-align: left;\n    align-self: center;\n    width: 730px;\n    font-size: 102px;\n    line-height: 96px;\n    font-weight: bold;\n    z-index: 3;\n}\n\n@media screen and (max-width: 400px){\n    .header__title {\n        font-size: 55px;\n    }\n}\n\n@media screen and (min-width: 401px) and (max-width: 768px){\n    .header__title {\n        font-size: 62px;\n    }\n}\n",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".header__subtitle {\n    position: absolute;\n    left:120px;\n    bottom:30px;\n    width: 388px;\n    font-size: 18px;\n    font-style: normal;\n    line-height: 25px;\n    z-index: 3;\n}\n\n@media screen and (max-width: 400px){\n    .header__subtitle {\n        left: 20px;\n    }\n}\n\n@media screen and (min-width: 401px) and (max-width: 1280px){\n    .header__subtitle {\n        left: 64px;\n    }\n}\n",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".header__link {\n    color: black;\n    text-decoration: none;\n    color: #2E7FEC\n}",""]),n.exports=e},function(n,e,t){var i=t(0),o=t(1),r=t(14);e=i(!1);var a=o(r);e.push([n.i,".header__main-illustration {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    width: 765px;\n    height: 608px;\n    background-image: url("+a+");\n    background-size: cover;\n    background-repeat: no-repeat;\n    z-index: 2;\n}\n\n@media screen and (max-width: 765px) {\n    .header__main-illustration {\n        width: 100%;\n        background-size: 100%;\n        background-position-y: bottom;\n    }\n}",""]),n.exports=e},function(n,e,t){n.exports=t.p+"./image/two_again.png"},function(n,e,t){(e=t(0)(!1)).push([n.i,".header__square-pic {\n    height: 568px;\n    width: 568px;\n    position: absolute;\n    top: 64px;\n    right: 0px;\n    background-color: #2E7FEC;\n    z-index: 1;\n    animation: square-pic_rotate 20s linear infinite;\n}\n\n/* Анимация квадрата*/\n@keyframes square-pic_rotate {\n    from {\n        transform: rotate(-15deg);\n    }\n    to {\n        transform: rotate(345deg);\n    }\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".description {\n    padding-top: 100px;\n}\n",""]),n.exports=e},function(n,e,t){var i=t(0),o=t(18),r=t(19),a=t(20),p=t(21);(e=i(!1)).i(o),e.i(r),e.i(a),e.i(p),e.push([n.i,".two-columns {\n    display: flex;\n    margin: auto;\n    justify-content: space-between;\n    max-width: 80%;\n}\n\n@media screen and (max-width: 400px){\n    .two-columns{\n        flex-direction: column;\n    }\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".two-columns__brief {\n    max-width:  175px;\n    font-size: 18px;\n    line-height: 1.2;\n    color: #2E7FEC;\n}\n\n@media screen and (max-width: 400px){\n    .two-columns__brief{\n        margin-bottom: 20px;\n    }\n}\n\n@media screen and (min-width: 401px) and (max-width: 768px){\n    .two-columns__brief {\n        margin-right: 20px;\n    }\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".two-columns__main-text {\n    max-width: 80%;\n    font-size: 24px;\n    line-height: 34px;\n    display: grid;\n    grid-template-rows: auto-fit 1fr 1fr 1fr;\n    grid-gap: 30px;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".two-columns__paragraph {\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n\n@media screen and (max-width: 400px) {\n    .two-columns__paragraph {\n        font-size: 18px;\n        line-height: 1.2;\n    }\n}\n\n@media screen and (min-width: 401px) and (max-width: 768px){\n    .two-columns__paragraph {\n        font-size: 18px;\n        line-height: 1.2;\n    }\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".two-columns__span-bold {\n    font-weight: bold;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".technics {\n    padding-top: 100px;\n}",""]),n.exports=e},function(n,e,t){var i=t(0),o=t(24);(e=i(!1)).i(o),e.push([n.i,".section-title {\n    margin: auto;\n    width: 100%;\n    text-align: center;\n    font-size: 60px;\n    line-height: 1.15;\n    font-weight: bold;\n}\n\n@media screen and (max-width: 400px) {\n    .section-title {\n        font-size: 40px;\n    }\n}\n\n@media screen and (min-width: 401px) and (max-width: 768px) {\n    .section-title {\n        font-size: 50px;\n    }\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".section-title_white {\n    color: white;\n}",""]),n.exports=e},function(n,e,t){var i=t(0),o=t(26);(e=i(!1)).i(o),e.push([n.i,".section-subtitle {\n    width: 100%;\n    margin: auto;\n    margin-top: 20px;\n    font-size: 24px;\n    text-align: center;\n    line-height: 34px;\n    font-weight: normal;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".section-subtitle_white {\n    color: white;\n}",""]),n.exports=e},function(n,e,t){var i=t(0),o=t(28),r=t(29),a=t(30),p=t(31);(e=i(!1)).i(o),e.i(r),e.i(a),e.i(p),e.push([n.i,".cards {\n    max-width: 1280px;\n    margin: auto;\n    margin-bottom: 100px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-column-gap: 100px;\n}\n\n@media screen and (max-width: 400px) {\n    .cards {\n        grid-gap: 20px;\n    }\n}\n\n@media screen and (min-width: 401px) and (max-width: 768px) {\n    .cards {\n        grid-gap: 40px;\n    }\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".cards__item {\n    margin: auto;\n    width: 240px;\n    margin-top: 60px;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".cards__image {\n    width: 160px;\n    height: 100%;\n    border-radius: 80px;\n    overflow: hidden;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".cards__title {\n    font-size: 24px;\n    line-height: 1.15;\n    font-weight: bold;\n    margin-top: 43px;\n    text-align: center;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".cards__description {\n    margin-top: 16px;\n    font-size: 18px;\n    line-height: 23px;\n    font-weight: normal;\n    text-align: center;\n}",""]),n.exports=e},function(n,e,t){var i=t(0),o=t(33),r=t(34);(e=i(!1)).i(o),e.i(r),e.push([n.i,".video {\n    margin-top: 100px;\n    position: relative;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".video__iframes {\n    max-width: 1050px;\n    margin: auto;\n    margin-top: 50px;\n    display: flex;\n    justify-content: space-between;\n}\n\n@media screen and (max-width: 1110px) {\n    .video__iframes {\n        flex-direction: column;\n    }\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".video__iframes-item {\n    border: 0px;\n    width: 515px;\n    height: 316px;\n}\n\n@media screen and (max-width: 520px) {\n    .video__iframes-item {\n        width: 100%;\n    }\n}\n\n@media screen and (max-width: 1110px) {\n    .video__iframes-item {\n        margin: 0 auto 20px auto;\n    }\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".oakley {\n    margin-top: -60px;\n    padding-top: 160px;\n    background-color:#F2F2F2;\n}",""]),n.exports=e},function(n,e,t){var i=t(0),o=t(37),r=t(39),a=t(40),p=t(41);(e=i(!1)).i(o),e.i(r),e.i(a),e.i(p),e.push([n.i,".feinman {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    height: 890px;\n    align-items: center;\n    background-color: #f2f2f2;\n    padding: 20px;\n}\n\n@media screen and (max-width: 768px) {\n    .feinman {\n        height: 700px;\n    }\n}",""]),n.exports=e},function(n,e,t){var i=t(0),o=t(1),r=t(38);e=i(!1);var a=o(r);e.push([n.i,".feinman__background {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url("+a+") left bottom no-repeat;\n    background-size: 867px 637px;\n}\n\n@media screen and (max-width: 1250px) {\n    .feinman__background {\n        opacity: .8;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .feinman__background {\n        background-position-x: center;\n    }\n}",""]),n.exports=e},function(n,e,t){n.exports=t.p+"./image/feinman.png"},function(n,e,t){(e=t(0)(!1)).push([n.i,".feinman__title {\n    position: absolute;\n    margin: auto;\n    text-align: center;\n    top: 80px;\n    width: 648px; \n    font-size: 120px;\n    line-height: 1.15;\n    font-weight: bold;\n    z-index: 2;\n}\n\n@media screen and (max-width: 400px) {\n    .feinman__title {\n        font-size: 55px;\n        width: 350px;\n    }\n}\n\n@media screen and (min-width: 401px) and (max-width: 768px) {\n    .feinman__title {\n        font-size: 62px;\n        width: 450px;\n    }\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".feinman__subtitle {\n    position: absolute;\n    text-align: center;\n    margin: auto;\n    top: 50%;\n    font-size: 36px;\n    z-index: 2;\n}\n",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".feinman__link {\n    position: absolute;\n    top: 50%;\n    right: 48px;\n    font-size: 36px;\n    line-height: 51px;\n    z-index: 2;\n    color: black;\n    text-decoration: none;\n}\n\n@media screen and (max-width: 1100px) {\n    .feinman__link {\n        top: 60%;\n    }\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".digits {\n    margin: auto;\n    margin-bottom: 0px;\n    padding: 100px 90px 0 90px;\n}\n\n@media screen and (max-width: 400px) {\n    .digits {\n        padding: 20px;\n    }\n}\n\n@media screen and (min-width: 401px) and (max-width: 768px) {\n    .digits {\n        padding: 40px;\n    }\n}",""]),n.exports=e},function(n,e,t){var i=t(0),o=t(44),r=t(45),a=t(46),p=t(48);(e=i(!1)).i(o),e.i(r),e.i(a),e.i(p),e.push([n.i,".table {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n    max-width: 1100px;\n    margin: auto;\n    margin-bottom: 100px;\n}\n",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".table__cell {\n    margin-top: 60px;\n    padding: 0 20px 20px 20px;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".table__cell-white {\n    width: 200px;\n    margin-top: 80px;\n    color: white;\n}",""]),n.exports=e},function(n,e,t){var i=t(0),o=t(47);(e=i(!1)).i(o),e.push([n.i,".table__heading {\n    font-size: 24px;\n    line-height: 1.15;\n    font-weight: bold;\n    margin: 24px 0 24px 0;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".table__heading_white {\n    color: white;\n}",""]),n.exports=e},function(n,e,t){var i=t(0),o=t(49);(e=i(!1)).i(o),e.push([n.i,".table__text {\n    margin-top: 20px;\n    font-size: 18px;\n    line-height: 1.2;\n}\n",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".table__text_white {\n    color: white;\n}",""]),n.exports=e},function(n,e,t){var i=t(0),o=t(51),r=t(52),a=t(53),p=t(54),s=t(55),d=t(56),c=t(57),h=t(58),l=t(59);(e=i(!1)).i(o),e.i(r),e.i(a),e.i(p),e.i(s),e.i(d),e.i(c),e.i(h),e.i(l),e.push([n.i,".khan {\n    background-color:#F2F2F2;\n    padding-top: 105px;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".khan__container {\n    margin: auto;\n    width: 80%;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".khan__author {\n    font-size: 30px;\n    line-height: 42px;\n    font-weight: normal;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".khan__title {\n    font-size: 60px;\n    line-height: 1.15;\n    font-weight: bold;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".khan__quote {\n    width: 790px;\n    margin-top: 50px;\n    margin-bottom: 36px;\n    font-size: 24px;\n    line-height: 34px;\n    font-weight: normal;\n}\n\n@media screen and (max-width: 878px) {\n    .khan__quote {\n        width: 100%;\n    }\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".khan__quote-author {\n    margin-bottom: 10px;\n    font-size: 24px;\n    line-height: 1.15;\n    font-weight: bold;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".khan__quote-author-subline {\n    margin-bottom: 68px;\n    font-size: 24px;\n    line-height: 1.15;\n    font-weight: normal;\n}\n",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".khan__book-container {\n    display:flex;\n}\n\n@media screen and (max-width: 1078px) {\n    .khan__book-container {\n        flex-direction: column-reverse;\n    }\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".khan__book-pic {\n    width: 620px;\n    height: 608px;\n    margin-right: 20px;\n    object-fit: cover;\n    object-position: top;\n}\n\n@media screen and (max-width: 554px) {\n    .khan__book-pic {\n        height: 400px;\n    }\n}\n\n@media screen and (max-width: 783px) {\n    .khan__book-pic {\n        width: 100%;\n    }\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".khan__buy-link {\n    font-size: 30px;\n    line-height: 42px;\n    font-weight: normal;\n    color: #2E7FEC;\n    text-decoration: none;\n}",""]),n.exports=e},function(n,e,t){var i=t(0),o=t(61);(e=i(!1)).i(o),e.push([n.i,".kaufman {\n    position: relative;\n    background-color: black;\n    color: white;\n    overflow: hidden;\n    z-index: -2;\n    padding: 90px;\n}\n\n@media screen and (max-width: 400px) {\n    .kaufman {\n        padding: 20px;\n    }\n}\n\n@media screen and (min-width: 401px) and (max-width: 768px) {\n    .kaufman {\n        padding: 40px;\n    }\n}\n\n",""]),n.exports=e},function(n,e,t){var i=t(0),o=t(1),r=t(62);e=i(!1);var a=o(r);e.push([n.i,".kaufman__triangle {\n    position: absolute;\n    right: -210px;\n    top: 0px;\n    width: 877px;\n    height: 877px;\n    background-image: url("+a+");\n    background-size: cover;\n    background-repeat: no-repeat;\n    z-index: -1;\n    animation: triangle-pic_rotate 20s linear infinite;\n}\n\n/* Анимация треугольника*/\n@keyframes triangle-pic_rotate {\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n}",""]),n.exports=e},function(n,e,t){n.exports=t.p+"./image/triangle.svg"},function(n,e,t){var i=t(0),o=t(64),r=t(65);(e=i(!1)).i(o),e.i(r),e.push([n.i,".resources {\n    padding: 100px 20px 217px 20px;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".resources__logo-zone {\n    /* display: flex;\n    justify-content: center; */\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    row-gap: 20px;\n    text-align: center;\n    max-width: 1100px;\n    margin: auto;\n    margin-top: 80px;  \n}\n",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".resources__logo {\n    width: 270px;\n    height: 38px;\n    background-size: cover;\n    text-align: center;\n}",""]),n.exports=e},function(n,e,t){var i=t(0),o=t(67),r=t(68),a=t(69),p=t(70),s=t(71),d=t(72),c=t(73),h=t(74),l=t(75),u=t(76);(e=i(!1)).i(o),e.i(r),e.i(a),e.i(p),e.i(s),e.i(d),e.i(c),e.i(h),e.i(l),e.i(u),e.push([n.i,".footer {\n    position: relative;\n    background-color: black;\n    color: white;\n    min-height: 350px;\n    padding-top: 60px;\n    padding-bottom: 40px;\n    font-size: 18px;\n}\n\n@media screen and (max-width: 768px) {\n    .footer {\n        font-size: 16px;\n    }\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".footer__columns {\n    display: flex;\n    margin: auto;\n    justify-content: space-between;\n    width: 90%;\n}\n\n@media screen and (max-width: 471px) {\n    .footer__columns {\n        flex-direction: column;\n    }\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".footer__copyright {\n    position: relative;\n    display: flex;\n    flex-basis: 711px;\n}\n\n@media screen and (max-width: 768px) {\n    .footer__copyright {\n        flex-basis: initial;\n    }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1090px) {\n    .footer__copyright {\n        flex-basis: 450px;\n    }\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".footer__logo {\n    height: 35px;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".footer__author {\n    width: 90%;\n    line-height: 25px;\n    margin: 83px auto 0 auto;\n}\n\n@media screen and (max-width: 471px) {\n    .footer__author {\n        margin: 20px auto 0 auto;\n    }\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".footer__info {\n    display: flex;\n    flex-direction: column;\n    line-height: 30px;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".footer__column-heading {\n    font-weight: bold;\n    margin-bottom: 20px;\n}\n\n@media screen and (max-width: 471px) {\n    .footer__column-heading {\n        margin-top: 20px;\n    }\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".footer__navigation {\n    display: flex;\n    flex-direction: column;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".footer__link {\n    color: white;\n    text-decoration: none;\n} ",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".footer__social {\n    display: flex;\n    flex-direction: column;\n    line-height: 30px;\n}",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".footer__social-icon {\n    width: 16px;\n    height: 16px;\n}",""]),n.exports=e}]);