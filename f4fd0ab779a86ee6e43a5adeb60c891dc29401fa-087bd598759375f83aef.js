(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+H2Z":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(n,t){return n.filter((function(n){var e=n.path;return t.some((function(n){return n===e}))}))}},"+bwb":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MODIFIER_SEPARATOR="_",t.ELEMENT_SEPARATOR="__",t.TO_PAGE_MODIFIER="to-page",t.HEAD_MODIFIER="head",t.CLASSNAME_SEPARATOR=" ",t.NAVIGATION_LINK_CLASSNAME="gatsby-dnmcl-nav-link",t.NAVIGATION_CLASSNAME="gatsby-dnmcl-nav",t.NAVIGATION_LIST_CLASSNAME="gatsby-dnmcl-nav-list",t.NAVIGATION_LIST_ITEM_CLASSNAME=""+t.NAVIGATION_LIST_CLASSNAME+t.ELEMENT_SEPARATOR+"item",t.NAVIGATION_LINK_TO_PAGE_CLASSNAME=""+t.NAVIGATION_LINK_CLASSNAME+t.MODIFIER_SEPARATOR+t.TO_PAGE_MODIFIER,t.HEAD_NAVIGATION_LINK_CLASSNAME=""+t.NAVIGATION_LINK_CLASSNAME+t.MODIFIER_SEPARATOR+t.HEAD_MODIFIER,t.TARGET_CLASSNAME="target",t.ACTIVE_CLASSNAME="active"},"6E27":function(n,t,e){"use strict";e("91GP"),e("xfY5"),e("h/M4"),e("XfO3"),e("HEwt"),e("Vd3H"),Object.defineProperty(t,"__esModule",{value:!0});var r=e("q1tI"),a=e("vI21"),o=e("+bwb");t.default=function(n){var t=n.childrenSiteNavigation,e=n.rootPath,i=void 0===e?"/":e,l=n.children;return r.createElement("ul",{className:o.NAVIGATION_LIST_CLASSNAME},Array.from(t).sort((function(n,t){var e=n.order,r=void 0===e?Number.MAX_SAFE_INTEGER:e,a=t.order;return r-(void 0===a?Number.MAX_SAFE_INTEGER:a)})).map((function(n){var t=n.path,e=n.title,o=n.fields;return r.createElement(a.default,Object.assign({key:"item"+t},{path:t,title:e,isToPage:!(o&&o.isRoot)}),t===i&&l)})))}},"9uHW":function(n,t,e){"use strict";e("91GP"),e("pIFo"),Object.defineProperty(t,"__esModule",{value:!0});var r=e("q1tI"),a=e("+bwb"),o=e("o2LC"),i=e("+H2Z"),l=e("b8SX"),c=e("kEOQ"),s=e("cBGW");t.default=function(n){var t=n.navigation,e=n.root,u=n.target.replace(e,""),f=o.default(u,e),d=i.default(t,f),m=l.default(d),g=m.reduce((function(n,t,e){var a=n[0],o=n[1],i=t.path,l=t.title,u=t.childrenSiteNavigation;return[r.createElement(r.Fragment,null,e>=m.length-1&&r.createElement(c.default,{to:i,isHead:!0},l),r.createElement(s.default,Object.assign({},{key:"nav-list"+e,rootPath:o,childrenSiteNavigation:u,children:a}))),i]}),[null])[0];return r.createElement("nav",{className:a.NAVIGATION_CLASSNAME},g)}},A5XH:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=null,a=null;t.default=function(n){r?n(r):a?a=a.then((function(t){return n(t),t})):"undefined"!=typeof window&&(a=window.fetch("/site-navigation.json").then((function(n){return n.json()})).then((function(t){return r=t,n(t),t})))}},CFr8:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("A5XH");t.loadNavigation=r.default;var a=e("Rrhz");t.Navigation=a.default},K8Sh:function(n,t,e){"use strict";e.d(t,"a",(function(){return d}));var r=e("q1tI"),a=e.n(r),o=e("vOnD"),i=e("y7Z0"),l=e("wOL0");function c(){var n=u(["\n  margin-left: 30rem;\n"]);return c=function(){return n},n}function s(){var n=u(["\nmargin-left: 20rem;\n"]);return s=function(){return n},n}function u(n,t){return t||(t=n.slice(0)),n.raw=t,n}var f=Object(o.c)(i.a).withConfig({displayName:"MainWithNavigationstyles__StyledMainWithNavigation",componentId:"sc-17tp6wp-0"})(["margin-left:3rem;"," ",""],l.h.tablet(s()),l.h.desktop(c())),d=function(n){var t=n.children;return a.a.createElement(f,null,t)}},Rrhz:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("wQK8");t.default=r.default},YMTj:function(n,t,e){"use strict";e("91GP"),Object.defineProperty(t,"__esModule",{value:!0});var r=e("q1tI"),a=e("+ZDr"),o=e("+bwb"),i=e("s0Fj");t.default=function(n){var t=n.to,e=n.isTarget,l=n.isToPage,c=n.isHead,s=n.children,u=i.default(o.NAVIGATION_LINK_CLASSNAME,[{flag:e,className:o.TARGET_CLASSNAME},{flag:l,className:o.NAVIGATION_LINK_TO_PAGE_CLASSNAME},{flag:c,className:o.HEAD_NAVIGATION_LINK_CLASSNAME}]);return r.createElement(a.default,Object.assign({},{to:t,className:u,activeClassName:o.ACTIVE_CLASSNAME}),s)}},aHtx:function(n,t,e){"use strict";e("91GP"),Object.defineProperty(t,"__esModule",{value:!0});var r=e("q1tI"),a=e("kEOQ"),o=e("+bwb");t.default=function(n){var t=n.path,e=n.title,i=n.isToPage,l=n.children;return r.createElement("li",{className:o.NAVIGATION_LIST_ITEM_CLASSNAME},r.createElement(a.default,Object.assign({},{to:t,isToPage:i,isTarget:!!l}),e),l)}},b8SX:function(n,t,e){"use strict";e("KKXr"),e("XfO3"),e("HEwt"),e("Vd3H"),Object.defineProperty(t,"__esModule",{value:!0});t.default=function(n){return Array.from(n).sort((function(n,t){var e=n.path,r=t.path,a=e.split("/").length;return r.split("/").length-a}))}},cBGW:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("6E27");t.default=r.default},eSou:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("9uHW");t.default=r.default},"h/M4":function(n,t,e){var r=e("XKFU");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},kEOQ:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("YMTj");t.default=r.default},lm4O:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var r=e("q1tI"),a=e.n(r),o=e("JXqn"),i=e("2wkr"),l=e("vOnD");function c(){var n=function(n,t){t||(t=n.slice(0));return n.raw=t,n}(["\n.logo-loader {\n  .logo-left {\n    animation: logo-left 2.3s infinite ease;\n  }\n\n  .logo-bottom-left {\n    animation: logo-bottom 2.3s infinite ease;\n  }\n\n  .logo-bottom-right {\n    animation: logo-bottom 2.3s infinite ease;\n  }\n\n  .logo-right {\n    animation: logo-right 2.3s infinite ease;\n  }\n}\n\n@keyframes logo-left {\n  0% {\n    transform: translateY(0);\n  }\n\n  15% {\n    transform: translateY(-3px);\n  }\n\n  30% {\n    transform: translateY(0);\n  }\n\n  45% {\n    transform: translateY(-1px);\n  }\n\n  60% {\n    transform: translateY(0);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\n@keyframes logo-bottom {\n  0% {\n    transform: translateY(0);\n  }\n\n  10% {\n    transform: translateY(0);\n  }\n\n  25% {\n    transform: translateY(-3px);\n  }\n\n  40% {\n    transform: translateY(0);\n  }\n\n  55% {\n    transform: translateY(-1px);\n  }\n\n  70% {\n    transform: translateY(0);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\n@keyframes logo-right {\n  0% {\n    transform: translateY(0);\n  }\n\n  20% {\n    transform: translateY(0);\n  }\n\n  35% {\n    transform: translateY(-3px);\n  }\n\n  50% {\n    transform: translateY(0);\n  }\n\n  65% {\n    transform: translateY(-1px);\n  }\n\n  80% {\n    transform: translateY(0);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n"]);return c=function(){return n},n}var s=l.c.svg.attrs((function(){return{viewBox:"0 0 35 35",className:"logo-loader"}})).withConfig({displayName:"LogoLoaderstyles__StyledLogo",componentId:"sc-1eedlib-0"})(["width:100%;max-width:30rem;overflow:visible;"]),u=Object(l.a)(c()),f=function(){return a.a.createElement(s,null,a.a.createElement(u,null),a.a.createElement(o.a,null),a.a.createElement(i.a,null))}},o2LC:function(n,t,e){"use strict";function r(n){return function(n){if(Array.isArray(n))return a(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return a(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}e("f3/d"),e("a1Th"),e("Btvt"),e("XfO3"),e("HEwt"),e("rGqo"),e("rE2o"),e("ioFf"),e("KKXr"),Object.defineProperty(t,"__esModule",{value:!0});t.default=function(n,t){return n.split("/").slice(0,-2).reduce((function(n,t){return[].concat(r(n),[""+n.slice(-1)[0]+t+"/"])}),[t])}},ojNS:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var r=e("vOnD"),a=e("wOL0");function o(){var n=c(["\n    .gatsby-dnmcl-nav {\n      white-space: normal;\n    }\n  "]);return o=function(){return n},n}function i(){var n=c(["\n    .gatsby-dnmcl-nav {\n      white-space: nowrap;\n    }\n  "]);return i=function(){return n},n}function l(){var n=c(["\n  .logo-loader {\n    margin-top: 3rem;\n    max-width: 10rem;\n    opacity: .7;\n  }\n\n  .gatsby-dnmcl-nav-link {\n    text-decoration: none;\n    display: flex;\n    padding: 0 0 1rem 1rem;\n    color: ",";\n    font-weight: bold;\n\n    &_to-page {\n      padding: 0;\n      color: ",';\n      font-weight: normal;\n\n      &:before {\n        content: "\\00A7";\n        margin-right: 1rem;\n      }\n    }\n\n    &_head {\n      box-sizing: border-box;\n      font-style: italic;\n      font-weight: bold;\n      color: ',";\n      font-size: 1.8rem;\n      display: flex;\n      align-items: center;\n      margin-bottom: 3rem;\n\n      &:before, &:after {\n        content: '';\n        width: 100%;\n        background-color: currentColor;\n        height: 2px;\n      }\n\n      &:before {\n        margin-right: 1rem;\n      }\n\n      &:after {\n        margin-left: 1rem;\n      }\n    }\n  \n    &.target {\n      color: ",";\n      display: block;\n      padding-bottom: 1rem;\n    }\n\n    &.active {\n      color: ",";\n    }\n  }  \n\n  .gatsby-dnmcl-nav-list {\n    list-style: none;\n    padding: 0 0 1rem 1rem;\n  }\n\n  ","\n\n  ","\n"],["\n  .logo-loader {\n    margin-top: 3rem;\n    max-width: 10rem;\n    opacity: .7;\n  }\n\n  .gatsby-dnmcl-nav-link {\n    text-decoration: none;\n    display: flex;\n    padding: 0 0 1rem 1rem;\n    color: ",";\n    font-weight: bold;\n\n    &_to-page {\n      padding: 0;\n      color: ",';\n      font-weight: normal;\n\n      &:before {\n        content: "\\\\00A7";\n        margin-right: 1rem;\n      }\n    }\n\n    &_head {\n      box-sizing: border-box;\n      font-style: italic;\n      font-weight: bold;\n      color: ',";\n      font-size: 1.8rem;\n      display: flex;\n      align-items: center;\n      margin-bottom: 3rem;\n\n      &:before, &:after {\n        content: '';\n        width: 100%;\n        background-color: currentColor;\n        height: 2px;\n      }\n\n      &:before {\n        margin-right: 1rem;\n      }\n\n      &:after {\n        margin-left: 1rem;\n      }\n    }\n  \n    &.target {\n      color: ",";\n      display: block;\n      padding-bottom: 1rem;\n    }\n\n    &.active {\n      color: ",";\n    }\n  }  \n\n  .gatsby-dnmcl-nav-list {\n    list-style: none;\n    padding: 0 0 1rem 1rem;\n  }\n\n  ","\n\n  ","\n"]);return l=function(){return n},n}function c(n,t){return t||(t=n.slice(0)),n.raw=t,n}var s=Object(r.a)(l(),a.g,a.f,a.g,a.d,a.d,a.h.tablet(i()),a.h.desktop(o()))},pKg5:function(n,t,e){"use strict";var r=e("CFr8");e.d(t,"a",(function(){return r.Navigation}))},s0Fj:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("+bwb");t.default=function(n,t){var e=[n];return t.forEach((function(n){var t=n.flag,r=n.className;t&&e.push(r)})),e.join(r.CLASSNAME_SEPARATOR)}},vI21:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("aHtx");t.default=r.default},wQK8:function(n,t,e){"use strict";function r(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}e("a1Th"),e("Btvt"),e("I5cv"),e("91GP"),Object.defineProperty(t,"__esModule",{value:!0});var a=e("q1tI"),o=e("A5XH"),i=e("eSou"),l=function(n){var t,e;e=n,(t=c).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var l;l=c;function c(t){var e;return(e=n.call(this,t)||this).state={navigation:null},e.setNavigation=e.setNavigation.bind(r(e)),e}var s=c.prototype;return s.setNavigation=function(n){this.setState({navigation:n})},s.componentWillMount=function(){var n=this;o.default((function(t){return n.setNavigation(t)}))},s.render=function(){var n=this.state.navigation,t=this.props,e=t.root,r=t.target,o=t.Loader;return n?a.createElement(i.default,Object.assign({},{root:e,target:r,navigation:n})):o?a.createElement(o,null):a.createElement("span",null,"Navigation is not loaded")},c}(a.Component);t.default=l},xR0Q:function(n,t,e){"use strict";e.d(t,"a",(function(){return j}));var r=e("q1tI"),a=e.n(r),o=e("H5nY"),i=function(n){return window.addEventListener("scroll",n),function(){!function(n){window.removeEventListener("scroll",n)}(n)}},l=function(n,t,e,a){var o=function(){!function(n,t,e,r){n.current&&(n.current.getBoundingClientRect().top<=0&&!t?e(!0):pageYOffset<r&&t&&e(!1))}(n,t,e,a)};Object(r.useEffect)((function(){o(),i(o)}))},c=e("vOnD"),s=e("wOL0"),u=function(n){return"calc(100vh - "+n.top+"px)"};function f(){var n=m(["\n    width: 30rem;\n    position: absolute;\n\n    &:before, &:after {\n      display: none;\n    }\n\n    &.active {\n      width: 30rem;\n      & .gatsby-dnmcl-nav-link_head {\n        margin-right: 0;\n        margin-left: 0;\n      }\n\n      &>.gatsby-dnmcl-nav {\n        text-align: left;\n\n        &>.gatsby-dnmcl-nav-list {\n          display: block;\n        }\n      }\n    }\n  "]);return f=function(){return n},n}function d(){var n=m(["\n    width: 20rem;\n    height: auto;\n    padding: 2rem;\n    background-color: #fff;\n  "]);return d=function(){return n},n}function m(n,t){return t||(t=n.slice(0)),n.raw=t,n}var g=c.c.aside.withConfig({displayName:"Asidestyles__StyledAside",componentId:"sc-19cjqpa-0"})(["width:3rem;box-sizing:border-box;overflow:hidden;position:absolute;top:initial;z-index:100;transition:0.3s;height:5rem;max-height:",";&.sticky{position:fixed;top:0;max-height:auto;}&.active{width:100%;background-color:#fff;min-height:",";max-height:none;height:100%;& .gatsby-dnmcl-nav-link_head{margin-right:5rem;margin-left:5rem;}& > .gatsby-dnmcl-nav{text-align:center;& > .gatsby-dnmcl-nav-list{display:inline-block;}}}"," ",""],u,u,s.h.tablet(d()),s.h.desktop(f())),p=e("d710"),v=e("4yRK"),b=e("ZN3/");function h(){var n=y(["\n    display: none;\n  "]);return h=function(){return n},n}function A(){var n=y(["\n    display: block;\n  "]);return A=function(){return n},n}function y(n,t){return t||(t=n.slice(0)),n.raw=t,n}var _=c.c.div.withConfig({displayName:"Arrowstyles__StyledArrow",componentId:"sc-1ozt31n-0"})(["display:none;position:absolute;top:25%;font-size:5rem;color:#c788fe;right:0;margin-right:2rem;animation:arrow 2.5s infinite;"," "," &.hidden{display:none;}@keyframes arrow{from{margin-right:2rem;opacity:0;}60%{margin-right:2rem;opacity:0;}70%{opacity:1;}to{margin-right:0;opacity:0;}}"],s.h.tablet(A()),s.h.desktop(h())),N=function(n){var t=n.isActive,e=Object(v.a)("",[{flag:t,className:p.d}]);return a.a.createElement(_,{className:e},"⇨")};function E(){var n=function(n,t){t||(t=n.slice(0));return n.raw=t,n}(["\n    display: none;\n  "]);return E=function(){return n},n}var O=c.c.button.withConfig({displayName:"CloseButtonstyles__StyledCloseButton",componentId:"sc-7b0hty-0"})(["position:absolute;top:0;left:100%;transform:translateX(-100%);margin:2.75rem 0 0 -4rem;background:none;border:none;outline:none;animation:button 0.5s ease-out;&:before,&:after{content:'';width:3.5rem;height:1rem;display:block;position:absolute;top:0;left:0;background-color:",";border-radius:3px;}&:before{transform:rotate(45deg);}&:after{transform:rotate(-45deg);}"," &.hidden{display:none;}@keyframes button{from{opacity:0;transform:scale(0) translateX(-100%);}50%{opacity:0;transform:scale(0.5) translateX(-100%);}to{opacity:1;transform:scale(1) translateX(-100%);}}"],s.c,s.h.desktop(E())),I=function(n){var t,e=n.isActive,r=n.onClickCallback,o=Object(v.a)("close-button",[{flag:!e,className:p.d}]),i=(t=r,function(n){n.stopPropagation(),t()});return a.a.createElement(O,{className:o,onClick:i})};function w(){var n=M(["\n    display: none;\n  "]);return w=function(){return n},n}function S(){var n=M(["\n    background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff);\n    &:after {\n      display: none;\n    }\n  "]);return S=function(){return n},n}function M(n,t){return t||(t=n.slice(0)),n.raw=t,n}var T=c.c.div.withConfig({displayName:"Maskstyles__StyledMask",componentId:"sc-176bxt6-0"})(["display:none;position:absolute;width:100%;height:100%;top:0;left:0;display:block;background:linear-gradient(90deg,",",#fff);opacity:1;transition:opacity 0.3s;&.hidden{opacity:0;}&:after{content:'';display:block;width:2.5rem;height:2.5rem;border:solid ","30;border-width:4px 4px 0 0;transform:rotate(45deg) translate(-30%,-40%);top:50%;position:relative;left:-1rem;}"," "," &.hidden{display:none;}"],s.b,s.g,s.h.tablet(S()),s.h.desktop(w())),k=function(n){var t=n.isActive,e=Object(v.a)("",[{flag:t,className:p.d}]);return a.a.createElement(T,{className:e})},j=function(n){var t=n.children,e=Object(r.useState)(!1),i=e[0],c=e[1],s=Object(r.useState)(!1),u=s[0],f=s[1],d=Object(r.useContext)(b.a).top,m=Object(r.createRef)();l(m,u,f,d),Object(o.a)(m,(function(){return c(!1)}));var h=Object(v.a)("",[{flag:i,className:p.a},{flag:u,className:p.e}]);return a.a.createElement(g,{ref:m,isSticky:u,top:d,className:h,onClick:function(){return c(!0)}},a.a.createElement(k,{isActive:i}),a.a.createElement(N,{isActive:i}),a.a.createElement(I,{isActive:i,onClickCallback:function(){return c(!1)}}),t)}},y7Z0:function(n,t,e){"use strict";var r=e("vOnD"),a=e("wOL0"),o=r.c.main.withConfig({displayName:"Mainstyles__StyledMain",componentId:"tx2wks-0"})(["color:",";padding:0 3rem;box-sizing:border-box;overflow:auto;width:100%;& h1{text-align:center;}& a{color:#1578d0;}"],a.a);t.a=o}}]);
//# sourceMappingURL=f4fd0ab779a86ee6e43a5adeb60c891dc29401fa-087bd598759375f83aef.js.map