(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"546f":function(e,t,i){"use strict";var o=i("ed30"),a=i.n(o);a.a},"6d2c":function(e,t,i){"use strict";var o=i("9fca"),a=i.n(o);a.a},"713b":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-layout",{class:{"router-transitioning":e.routerTransitionInProgress},attrs:{view:"hHh lpr lFf"}},[o("q-header",{staticClass:"bg-primary text-white",attrs:{elevated:""}},[o("q-toolbar",[o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"xs on-left",attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(t){e.showTaskbar=!e.showTaskbar}}}),o("router-link",{staticClass:"wrapper-link on-left",attrs:{to:{name:"home"}}},[o("q-toolbar-title",[o("q-avatar",{staticClass:"on-left"},[o("img",{attrs:{src:i("9b19")}})]),e._v("\n          Juju Lens\n        ")],1)],1),o("div",{staticClass:"gt-xs"},[o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-xs",attrs:{flat:"",icon:"cloud",label:"Clouds"}}),o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-xs",attrs:{flat:"",icon:"share",label:"Models"}}),o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-xs",attrs:{flat:"",icon:"person",label:"Admin"}})],1),o("q-space"),o("dark-mode-toggle"),o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"xs on-right",attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(t){e.showMenuDrawer=!e.showMenuDrawer}}})],1)],1),o("q-drawer",{attrs:{mini:"","mini-to-overlay":"",bordered:"","show-if-above":"",breakpoint:599,width:60},model:{value:e.showTaskbar,callback:function(t){e.showTaskbar=t},expression:"showTaskbar"}},[o("q-scroll-area",{staticClass:"fit"},[o("q-list",{attrs:{padding:""}},[o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"inbox"}})],1)],1),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"star"}})],1)],1),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"send"}})],1)],1),o("q-separator"),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"drafts"}})],1)],1),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(){return e.$store.commit("floatingWindows/toggleDebugWindow")}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"fas fa-bug"}})],1)],1)],1)],1)],1),o("q-drawer",{attrs:{side:"right",width:200},model:{value:e.showMenuDrawer,callback:function(t){e.showMenuDrawer=t},expression:"showMenuDrawer"}},[o("q-scroll-area",{staticClass:"fit"},[o("q-list",{staticClass:"menu-list",attrs:{padding:""}},[o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"cloud"}})],1),o("q-item-section",[e._v("\n            Clouds\n          ")])],1),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"share"}})],1),o("q-item-section",[e._v("\n            Models\n          ")])],1),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"person"}})],1),o("q-item-section",[e._v("\n            Admin\n          ")])],1)],1)],1)],1),o("q-page-container",[o("q-page",[o("div",[o("debug-window"),o("transition",{attrs:{name:"router-slide-down",mode:"out-in"},on:{"before-leave":function(t){e.routerTransitionInProgress=!0},"after-enter":function(t){e.routerTransitionInProgress=!1}}},[o("router-view")],1)],1)])],1)],1)},a=[],r=i("850a"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{name:"window-transition"}},[e.visible?i("div",{staticClass:"floating-window",style:e.floatingWindowStyle},[i("q-card",{staticClass:"fit"},[i("q-bar",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.prevent",value:e.moveWindow,expression:"moveWindow",modifiers:{mouse:!0,prevent:!0}}],staticClass:"cursor-pointer"},[i("div",{staticClass:"text-weight-bold ellipsis"},[e._v(e._s(e.title))]),i("q-space"),e.showMinimize?i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-window-minimize"},on:{click:function(t){return e.$emit("minimize")}}}):e._e(),!e.maximized&&e.showMaximize?i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-window-maximize"},on:{click:function(t){return e.$emit("maximize")}}}):e._e(),e.maximized&&e.showMaximize?i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-window-restore"},on:{click:function(t){return e.$emit("restore")}}}):e._e(),e.showClose?i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-window-close"},on:{click:function(t){return e.$emit("close")}}}):e._e()],1),i("div",[e._t("default")],2),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.up.down.prevent",value:e.resizeWindowTop,expression:"resizeWindowTop",modifiers:{mouse:!0,up:!0,down:!0,prevent:!0}}],staticStyle:{position:"absolute",left:"0",right:"0",top:"0",cursor:"ns-resize",height:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.up.down.prevent",value:e.resizeWindowBottom,expression:"resizeWindowBottom",modifiers:{mouse:!0,up:!0,down:!0,prevent:!0}}],staticStyle:{position:"absolute",bottom:"0",right:"0",left:"0",cursor:"ns-resize",height:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.left.right.prevent",value:e.resizeWindowRight,expression:"resizeWindowRight",modifiers:{mouse:!0,left:!0,right:!0,prevent:!0}}],staticStyle:{position:"absolute",bottom:"0",right:"0",top:"0",cursor:"ew-resize",width:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.left.right.prevent",value:e.resizeWindowLeft,expression:"resizeWindowLeft",modifiers:{mouse:!0,left:!0,right:!0,prevent:!0}}],staticStyle:{position:"absolute",bottom:"0",right:"left",top:"0",cursor:"ew-resize",width:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.prevent",value:e.resizeWindowTopLeft,expression:"resizeWindowTopLeft",modifiers:{mouse:!0,prevent:!0}}],staticStyle:{position:"absolute",top:"0",left:"0",cursor:"nw-resize",width:"0.7em",height:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.prevent",value:e.resizeWindowTopRight,expression:"resizeWindowTopRight",modifiers:{mouse:!0,prevent:!0}}],staticStyle:{position:"absolute",top:"0",right:"0",cursor:"sw-resize",width:"0.7em",height:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.prevent",value:e.resizeWindowBottomLeft,expression:"resizeWindowBottomLeft",modifiers:{mouse:!0,prevent:!0}}],staticStyle:{position:"absolute",bottom:"0",left:"0",cursor:"sw-resize",width:"0.7em",height:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.prevent",value:e.resizeWindowBottomRight,expression:"resizeWindowBottomRight",modifiers:{mouse:!0,prevent:!0}}],staticStyle:{position:"absolute",bottom:"0",right:"0",cursor:"nw-resize",width:"0.7em",height:"0.7em"}})],1)],1):e._e()])},n=[],l=i("60a3"),c=function(e,t,i,o){var a,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let d=class extends l["c"]{constructor(){super(...arguments),this.transitionDuration=.2,this.transitioning=!1,this.top=50,this.left=50,this.right=50,this.bottom=50}get floatingWindowStyle(){const e=this.transitioning?`transition: all ${this.transitionDuration}s;`:"";return this.maximized?e+"margin: 0; transform: none; right: 0; bottom: 0; left: 0; top: 0;":e+`left: ${this.left}px; top: ${this.top}px; right: ${this.right}px; bottom: ${this.bottom}px;`}onMaximizedChange(){this.transitioning=!0,setTimeout(()=>this.transitioning=!1,1e3*this.transitionDuration)}moveWindow(e){if(!this.maximized){const t=this.left+e.delta.x,i=this.top+e.delta.y;t>=0&&(this.left=t,this.right-=e.delta.x),i>=0&&(this.top=i,this.bottom-=e.delta.y)}}resizeWindowTop(e){if(!this.maximized){const t=this.top+e.delta.y;this.top=t>=0?t:0}}resizeWindowBottom(e){this.maximized||(this.bottom=this.bottom-e.delta.y)}resizeWindowRight(e){this.maximized||(this.right=this.right-e.delta.x)}resizeWindowLeft(e){if(!this.maximized){const t=this.left+e.delta.x;this.left=t>=0?t:0}}resizeWindowTopLeft(e){this.resizeWindowTop(e),this.resizeWindowLeft(e)}resizeWindowTopRight(e){this.resizeWindowRight(e),this.resizeWindowTop(e)}resizeWindowBottomLeft(e){this.resizeWindowBottom(e),this.resizeWindowLeft(e)}resizeWindowBottomRight(e){this.resizeWindowBottom(e),this.resizeWindowRight(e)}};c([Object(l["b"])({type:String,default:""})],d.prototype,"title",void 0),c([Object(l["b"])(Boolean)],d.prototype,"maximized",void 0),c([Object(l["b"])({type:Boolean,default:!0})],d.prototype,"visible",void 0),c([Object(l["b"])({type:Boolean,default:!0})],d.prototype,"showMinimize",void 0),c([Object(l["b"])({type:Boolean,default:!0})],d.prototype,"showMaximize",void 0),c([Object(l["b"])({type:Boolean,default:!0})],d.prototype,"showClose",void 0),c([Object(l["d"])("maximized")],d.prototype,"onMaximizedChange",null),d=c([l["a"]],d);var u=d,m=u,p=(i("6d2c"),i("2877")),g=i("eebe"),w=i.n(g),h=i("f09f"),v=i("d847"),M=i("2c91"),f=i("9c40"),b=i("75c3"),z=i("714f"),D=Object(p["a"])(m,s,n,!1,null,null,null),x=D.exports;w()(D,"components",{QCard:h["a"],QBar:v["a"],QSpace:M["a"],QBtn:f["a"]}),w()(D,"directives",{TouchPan:b["a"],Ripple:z["a"]});var j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("floating-window",{attrs:{title:"Debug Window",visible:e.showDebugWindow,maximized:e.debugWindowMaximized,showClose:!1},on:{maximize:e.toggleDebugWindowMaximized,restore:e.toggleDebugWindowMaximized,minimize:e.toggleDebugWindow}},[i("p",[e._v("Hello World")])])],1)},T=[],N=function(e,t,i,o){var a,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let L=class extends l["c"]{get showDebugWindow(){return this.$store.state.floatingWindows.debugWindow.visible}get debugWindowMaximized(){return this.$store.state.floatingWindows.debugWindow.maximized}toggleDebugWindow(){this.$store.commit("floatingWindows/toggleDebugWindow")}toggleDebugWindowMaximized(){this.$store.commit("floatingWindows/toggleDebugWindowMaximized")}};L=N([Object(l["a"])({components:{FloatingWindow:x}})],L);var I=L,O=I,k=Object(p["a"])(O,j,T,!1,null,null,null),y=k.exports,C=function(e,t,i,o){var a,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let W=class extends l["c"]{constructor(){super(...arguments),this.showTaskbar=!1,this.taskbarMini=!0,this.showMenuDrawer=!1,this.routerTransitionInProgress=!1}};W=C([Object(l["a"])({components:{DarkModeToggle:r["a"],FloatingWindow:x,DebugWindow:y}})],W);var q=W,Q=q,S=(i("546f"),i("4d5a")),A=i("e359"),E=i("65c6"),P=i("6ac5"),R=i("cb32"),B=i("9404"),_=i("4983"),$=i("1c1c"),Y=i("66e5"),Z=i("4074"),H=i("0016"),G=i("eb85"),U=i("09e3"),J=i("9989"),F=Object(p["a"])(Q,o,a,!1,null,null,null);t["default"]=F.exports;w()(F,"components",{QLayout:S["a"],QHeader:A["a"],QToolbar:E["a"],QBtn:f["a"],QToolbarTitle:P["a"],QAvatar:R["a"],QSpace:M["a"],QDrawer:B["a"],QScrollArea:_["a"],QList:$["a"],QItem:Y["a"],QItemSection:Z["a"],QIcon:H["a"],QSeparator:G["a"],QPageContainer:U["a"],QPage:J["a"]}),w()(F,"directives",{Ripple:z["a"]})},"850a":function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{round:"",dense:"",color:"secondary",icon:e.btnIcon},on:{click:e.updateDarkMode}},[i("q-tooltip",[e._v(e._s(e.btnTooltip))])],1)},a=[],r=i("60a3"),s=function(e,t,i,o){var a,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let n=class extends r["c"]{setDarkMode(e){this.$q.dark.set(e);try{this.$q.localStorage.set("darkMode",e)}catch(t){console.error(t)}}updateDarkMode(){const e=this.$q.dark.mode;"auto"===e?this.setDarkMode(!0):!1===e?this.setDarkMode("auto"):this.setDarkMode(!1)}get btnIcon(){const e=this.$q.dark.mode;return"auto"===e?"brightness_4":!1===e?"brightness_5":"brightness_3"}get btnTooltip(){const e=this.$q.dark.mode;return"auto"===e?"Auto Dark Mode":!1===e?"Light Mode":"Dark Mode"}};n=s([r["a"]],n);var l=n,c=l,d=i("2877"),u=i("eebe"),m=i.n(u),p=i("9c40"),g=i("05c0"),w=i("714f"),h=Object(d["a"])(c,o,a,!1,null,null,null);t["a"]=h.exports;m()(h,"components",{QBtn:p["a"],QTooltip:g["a"]}),m()(h,"directives",{Ripple:w["a"]})},"9b19":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE5OC40MjQiIHZpZXdCb3g9IjAgMCAxOTguNDI0IDE5OC40MjQiIHdpZHRoPSIxOTguNDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9Ijk5LjIxMTk5OCIgY3k9Ijk5LjIxMTk5OCIgZmlsbD0iI2U5NTQyMCIgcj0iOTkuMjExOTk4Ii8+PGcgZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDEuNjY5OTk4IDE2Ljk2NTk5NikiPjxjaXJjbGUgY3g9IjYzLjIxMjAwMiIgY3k9Ijc2LjU3NTk5NiIgcj0iNi4xNDIiLz48cGF0aCBkPSJtNjguODgxIDY1LjIzN2gtMTEuMzM4di00NS4zNTRjMC0xMC45NCA4LjkwMi0xOS44NDIgMTkuODQyLTE5Ljg0MiAxMC45NDEgMCAxOS44NDIgOC45MDIgMTkuODQyIDE5Ljg0MnYxMS4zMzlsLTExLjMzOC0uMDAxdi0xMS4zMzhjMC0yLjI3Mi0uODg1LTQuNDA4LTIuNDkxLTYuMDE0LTEuNjA2LTEuNjA0LTMuNzQxLTIuNDkxLTYuMDEzLTIuNDkxLTQuNjg5IDAtOC41MDQgMy44MTYtOC41MDQgOC41MDV6Ii8+PHBhdGggZD0ibTEwNS43MyA4NS4wNzljLTEwLjk0IDAtMTkuODQyLTguOS0xOS44NDItMTkuODQydi0yOC4zNDVoMTEuMzM4djI4LjM0NWMwIDQuNjkgMy44MTQgOC41MDUgOC41MDQgOC41MDVzOC41LTMuODE0IDguNS04LjUwNXYtMjguMzQ1aDExLjM0djI4LjM0NWMwIDUuMy0yLjA2IDEwLjI4My01LjgxIDE0LjAzMS0zLjc0IDMuNzQ5LTguNzMgNS44MTEtMTQuMDMgNS44MTF6Ii8+PGNpcmNsZSBjeD0iNi41MTkiIGN5PSIxNDQuNjAwMDEiIHI9IjYuMTQyIi8+PHBhdGggZD0ibTEyLjE4OCAxMzMuMjdoLTExLjMzOHYtNjIuMzYyYzAtMTAuOTQxIDguOTAxLTE5Ljg0MiAxOS44NDMtMTkuODQyIDEwLjk0MSAwIDE5Ljg0MiA4LjkwMSAxOS44NDIgMTkuODQydjExLjMzOWgtMTEuMzM5di0xMS4zMzljMC0yLjI3Mi0uODg0LTQuNDA4LTIuNDkxLTYuMDE0LTEuNjA2LTEuNjA0LTMuNzQyLTIuNDkxLTYuMDEzLTIuNDkxLTQuNjg5IDAtOC41MDQgMy44MTYtOC41MDQgOC41MDV6Ii8+PHBhdGggZD0ibTQ5LjAzOSAxMzYuMWMtMTAuOTQxIDAtMTkuODQzLTguOS0xOS44NDMtMTkuODR2LTI4LjM0NmgxMS4zMzl2MjguMzQ2YzAgNC42OSAzLjgxNSA4LjUgOC41MDQgOC41czguNTA0LTMuODEgOC41MDQtOC41di0yOC4zNDZoMTEuMzM4djI4LjM0NmMwIDUuMy0yLjA2NCAxMC4yOC01LjgxMiAxNC4wM3MtOC43MzEgNS44MS0xNC4wMyA1LjgxeiIvPjwvZz48L2c+PC9zdmc+"},"9fca":function(e,t,i){},ed30:function(e,t,i){}}]);