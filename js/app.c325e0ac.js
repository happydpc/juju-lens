(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r=n("967e"),a=n.n(r),o=(n("a481"),n("96cf"),n("fa84")),c=n.n(o),u=(n("573e"),n("7d6e"),n("e54f"),n("62f2"),n("7e6d"),n("2b0e")),s=n("1f91"),i=n("42d2"),l=n("b05d"),p=n("18d6");u["a"].use(l["a"],{config:{dark:"auto"},lang:s["a"],iconSet:i["a"],plugins:{LocalStorage:p["a"]}});var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},d=[],b=n("60a3"),w=function(e,t,n,r){var a,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(a=e[u])&&(c=(o<3?a(c):o>3?a(t,n,c):a(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c};let h=class extends b["c"]{created(){const e=this.$q.localStorage.getItem("darkMode");null==e||"boolean"!=typeof e&&"auto"!=e||this.$q.dark.set(e)}};h=w([b["a"]],h);var m=h,g=m,x=n("2877"),v=Object(x["a"])(g,f,d,!1,null,null,null),k=v.exports,y=n("4bde"),j=n("2f62");const O={debugWindow:{visible:!1,maximized:!1}};var P=O;const W={};var q=W;const V={};var $=V;const z={toggleDebugWindow(e){e.debugWindow.visible=!e.debugWindow.visible},toggleDebugWindowMaximized(e){e.debugWindow.maximized=!e.debugWindow.maximized}};var S=z;const D={namespaced:!0,actions:q,getters:$,mutations:S,state:P};var R=D,E=Object(y["store"])((function({Vue:e}){e.use(j["a"]);const t=new j["a"].Store({modules:{floatingWindows:R},strict:!1});return t})),I=n("8c4f");const J=[{path:"/",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"713b")),children:[{path:"",name:"home",component:()=>n.e(6).then(n.bind(null,"8b24"))},{path:"/welcome",name:"welcome",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"35a8"))}]}];J.push({path:"*",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))});var M=J,_=n("fe09"),B=Object(y["route"])((function({Vue:e}){e.use(I["a"]);const t=new I["a"]({scrollBehavior:()=>({x:0,y:0}),routes:M,mode:"hash",base:""});return t.beforeEach((e,t,n)=>{const r="seen-juju-lens-before";if(_["a"].getItem(r)||"welcome"==e.name)n();else{n({name:"welcome",query:Object.assign({welcomePageTo:e.fullPath},e.query)});try{_["a"].set(r,"true")}catch(a){console.error(a)}}}),t})),C=function(){return L.apply(this,arguments)};function L(){return L=c()(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof E){e.next=6;break}return e.next=3,E({Vue:u["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=E;case 7:if(t=e.t0,"function"!==typeof B){e.next=14;break}return e.next=11,B({Vue:u["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=B;case 15:return n=e.t1,t.$router=n,r={router:n,store:t,render:function(e){return e(k)}},r.el="#q-app",e.abrupt("return",{app:r,store:t,router:n});case 20:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}var Q=n("bc3a"),T=n.n(Q),A=Object(y["boot"])(({Vue:e})=>{e.prototype.$axios=T.a});function F(){return G.apply(this,arguments)}function G(){return G=c()(a.a.mark((function e(){var t,n,r,o,c,s,i,l,p;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,n=t.app,r=t.store,o=t.router,c=!0,s=function(e){c=!1,window.location.href=e},i=window.location.href.replace(window.location.origin,""),l=[A],p=0;case 11:if(!(!0===c&&p<l.length)){e.next=29;break}if("function"===typeof l[p]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[p]({app:n,router:o,store:r,Vue:u["a"],ssrContext:null,redirect:s,urlPath:i});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:p++,e.next=11;break;case 29:if(!1!==c){e.next=31;break}return e.abrupt("return");case 31:new u["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),G.apply(this,arguments)}F()},"7e6d":function(e,t,n){}},[[0,2,0]]]);