(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+H2Z":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t,e){return t.filter((function(t){var n=t.path;return e.some((function(t){return t===n}))}))}},"+bwb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MODIFIER_SEPARATOR="_",e.ELEMENT_SEPARATOR="__",e.TO_PAGE_MODIFIER="to-page",e.HEAD_MODIFIER="head",e.CLASSNAME_SEPARATOR=" ",e.NAVIGATION_LINK_CLASSNAME="gatsby-dnmcl-nav-link",e.NAVIGATION_CLASSNAME="gatsby-dnmcl-nav",e.NAVIGATION_LIST_CLASSNAME="gatsby-dnmcl-nav-list",e.NAVIGATION_LIST_ITEM_CLASSNAME=""+e.NAVIGATION_LIST_CLASSNAME+e.ELEMENT_SEPARATOR+"item",e.NAVIGATION_LINK_TO_PAGE_CLASSNAME=""+e.NAVIGATION_LINK_CLASSNAME+e.MODIFIER_SEPARATOR+e.TO_PAGE_MODIFIER,e.HEAD_NAVIGATION_LINK_CLASSNAME=""+e.NAVIGATION_LINK_CLASSNAME+e.MODIFIER_SEPARATOR+e.HEAD_MODIFIER,e.TARGET_CLASSNAME="target",e.ACTIVE_CLASSNAME="active"},"6E27":function(t,e,n){"use strict";n("91GP"),n("xfY5"),n("h/M4"),n("XfO3"),n("HEwt"),n("Vd3H"),Object.defineProperty(e,"__esModule",{value:!0});var r=n("q1tI"),a=n("vI21"),o=n("+bwb");e.default=function(t){var e=t.childrenSiteNavigation,n=t.rootPath,i=void 0===n?"/":n,l=t.children;return r.createElement("ul",{className:o.NAVIGATION_LIST_CLASSNAME},Array.from(e).sort((function(t,e){var n=t.order,r=void 0===n?Number.MAX_SAFE_INTEGER:n,a=e.order;return r-(void 0===a?Number.MAX_SAFE_INTEGER:a)})).map((function(t){var e=t.path,n=t.title,o=t.fields;return r.createElement(a.default,Object.assign({key:"item"+e},{path:e,title:n,isToPage:!(o&&o.isRoot)}),e===i&&l)})))}},"9uHW":function(t,e,n){"use strict";n("91GP"),n("pIFo"),Object.defineProperty(e,"__esModule",{value:!0});var r=n("q1tI"),a=n("+bwb"),o=n("o2LC"),i=n("+H2Z"),l=n("b8SX"),u=n("kEOQ"),s=n("cBGW");e.default=function(t){var e=t.navigation,n=t.root,c=t.target.replace(n,""),f=o.default(c,n),d=i.default(e,f),A=l.default(d),m=A.reduce((function(t,e,n){var a=t[0],o=t[1],i=e.path,l=e.title,c=e.childrenSiteNavigation;return[r.createElement(r.Fragment,null,n>=A.length-1&&r.createElement(u.default,{to:i,isHead:!0},l),r.createElement(s.default,Object.assign({},{key:"nav-list"+n,rootPath:o,childrenSiteNavigation:c,children:a}))),i]}),[null])[0];return r.createElement("nav",{className:a.NAVIGATION_CLASSNAME},m)}},A5XH:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=null,a=null;e.default=function(t){r?t(r):a?a=a.then((function(e){return t(e),e})):"undefined"!=typeof window&&(a=window.fetch("/site-navigation.json").then((function(t){return t.json()})).then((function(e){return r=e,t(e),e})))}},CFr8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("A5XH");e.loadNavigation=r.default;var a=n("Rrhz");e.Navigation=a.default},Rrhz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("wQK8");e.default=r.default},TUX7:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return m}));var r=n("q1tI"),a=n.n(r),o=n("VXBa"),i=n("vOnD");function l(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(["\n  main {\n    text-align: center;\n  }\n\n  .logo-loader {\n    margin-top: 3rem;\n    max-width: 10rem;\n    opacity: .7;\n  }\n\n  .gatsby-dnmcl-nav {\n    text-align: center;\n    padding: 2rem;\n  }\n\n  .gatsby-dnmcl-nav-link {\n    text-decoration: none;\n\n    &_head {\n      display: none;\n    }\n  }\n\n  .gatsby-dnmcl-nav-list {\n    list-style: none;\n    display: inline-block;\n    font-size: 3.2rem;\n\n    &__item {\n      text-align: left;\n      margin-bottom: 3rem;\n    }\n  }\n"]);return l=function(){return t},t}var u=Object(i.a)(l()),s=n("y7Z0"),c=function(t){var e=t.children;return a.a.createElement(s.a,null,e)},f=n("pKg5"),d=n("lm4O"),A=function(t){var e=t.title,n=t.targetPath;return a.a.createElement(c,null,a.a.createElement(u,null),a.a.createElement("h1",null,e),a.a.createElement(f.a,{root:n,target:n,Loader:d.a}))},m=(e.default=function(t){var e=t.data.markdownRemark,n=e.fields.slug,r=e.frontmatter.title;return a.a.createElement(o.a,{pageTitle:r},a.a.createElement(A,{title:r,targetPath:n}))},"2548758515")},YMTj:function(t,e,n){"use strict";n("91GP"),Object.defineProperty(e,"__esModule",{value:!0});var r=n("q1tI"),a=n("+ZDr"),o=n("+bwb"),i=n("s0Fj");e.default=function(t){var e=t.to,n=t.isTarget,l=t.isToPage,u=t.isHead,s=t.children,c=i.default(o.NAVIGATION_LINK_CLASSNAME,[{flag:n,className:o.TARGET_CLASSNAME},{flag:l,className:o.NAVIGATION_LINK_TO_PAGE_CLASSNAME},{flag:u,className:o.HEAD_NAVIGATION_LINK_CLASSNAME}]);return r.createElement(a.default,Object.assign({},{to:e,className:c,activeClassName:o.ACTIVE_CLASSNAME}),s)}},aHtx:function(t,e,n){"use strict";n("91GP"),Object.defineProperty(e,"__esModule",{value:!0});var r=n("q1tI"),a=n("kEOQ"),o=n("+bwb");e.default=function(t){var e=t.path,n=t.title,i=t.isToPage,l=t.children;return r.createElement("li",{className:o.NAVIGATION_LIST_ITEM_CLASSNAME},r.createElement(a.default,Object.assign({},{to:e,isToPage:i,isTarget:!!l}),n),l)}},b8SX:function(t,e,n){"use strict";n("KKXr"),n("XfO3"),n("HEwt"),n("Vd3H"),Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t){return Array.from(t).sort((function(t,e){var n=t.path,r=e.path,a=n.split("/").length;return r.split("/").length-a}))}},cBGW:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("6E27");e.default=r.default},eSou:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9uHW");e.default=r.default},"h/M4":function(t,e,n){var r=n("XKFU");r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},kEOQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("YMTj");e.default=r.default},lm4O:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("q1tI"),a=n.n(r),o=n("vOnD"),i=n("D4mo"),l=Object(o.c)(i.a).withConfig({displayName:"LogoLoaderstyles__StyledLogoIcon",componentId:"sc-1eedlib-0"})(["width:3.5rem;height:3.5rem;& .logo-left{animation:logo-left 2.3s infinite ease;}& .logo-bottom-left{animation:logo-bottom 2.3s infinite ease;}& .logo-bottom-right{animation:logo-bottom 2.3s infinite ease;}& .logo-right{animation:logo-right 2.3s infinite ease;}@keyframes logo-left{0%{transform:translateY(0);}15%{transform:translateY(-5px);}30%{transform:translateY(0);}45%{transform:translateY(-3px);}60%{transform:translateY(0);}100%{transform:translateY(0);}}@keyframes logo-bottom{0%{transform:translateY(0);}10%{transform:translateY(0);}25%{transform:translateY(-5px);}40%{transform:translateY(0);}55%{transform:translateY(-3px);}70%{transform:translateY(0);}100%{transform:translateY(0);}}@keyframes logo-right{0%{transform:translateY(0);}20%{transform:translateY(0);}35%{transform:translateY(-5px);}50%{transform:translateY(0);}65%{transform:translateY(-3px);}80%{transform:translateY(0);}100%{transform:translateY(0);}}"]),u=function(t){return a.a.createElement(l,t)}},o2LC:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n("f3/d"),n("a1Th"),n("Btvt"),n("XfO3"),n("HEwt"),n("rGqo"),n("rE2o"),n("ioFf"),n("KKXr"),Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t,e){return t.split("/").slice(0,-2).reduce((function(t,e){return[].concat(r(t),[""+t.slice(-1)[0]+e+"/"])}),[e])}},pKg5:function(t,e,n){"use strict";var r=n("CFr8");n.d(e,"a",(function(){return r.Navigation}))},s0Fj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("+bwb");e.default=function(t,e){var n=[t];return e.forEach((function(t){var e=t.flag,r=t.className;e&&n.push(r)})),n.join(r.CLASSNAME_SEPARATOR)}},vI21:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("aHtx");e.default=r.default},wQK8:function(t,e,n){"use strict";n("91GP"),Object.defineProperty(e,"__esModule",{value:!0});var r=n("q1tI"),a=n("A5XH"),o=n("eSou"),i=function(t){var e,n;function i(e){var n;return(n=t.call(this,e)||this).state={navigation:null},n.setNavigation=n.setNavigation.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)),n}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var l=i.prototype;return l.setNavigation=function(t){this.setState({navigation:t})},l.componentWillMount=function(){var t=this;a.default((function(e){return t.setNavigation(e)}))},l.render=function(){var t=this.state.navigation,e=this.props,n=e.root,a=e.target,i=e.Loader;return t?r.createElement(o.default,Object.assign({},{root:n,target:a,navigation:t})):i?r.createElement(i,null):r.createElement("span",null,"Navigation is not loaded")},i}(r.Component);e.default=i},y7Z0:function(t,e,n){"use strict";var r=n("vOnD"),a=n("wOL0"),o=r.c.main.withConfig({displayName:"Mainstyles__StyledMain",componentId:"tx2wks-0"})(["color:",";padding:0 3rem;box-sizing:border-box;overflow:auto;width:100%;& h1{text-align:center;}& a{color:#1578d0;}"],a.a);e.a=o}}]);
//# sourceMappingURL=component---src-templates-section-page-component-tsx-f98cf5959021cbed5656.js.map