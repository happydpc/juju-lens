(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(e,a,t){e.exports=t("2f39")},"2f39":function(e,a,t){"use strict";t.r(a);var d=t("967e"),n=t.n(d),i=(t("a481"),t("96cf"),t("fa84")),r=t.n(i),o=(t("573e"),t("7d6e"),t("e54f"),t("62f2"),t("7e6d"),t("2b0e")),c=t("1f91"),s=t("42d2"),l=t("b05d"),f=t("436b"),u=t("18d6"),b=t("2a19");o["a"].use(l["a"],{config:{dark:"auto",notify:{position:"top-right"}},lang:c["a"],iconSet:s["a"],plugins:{Dialog:f["a"],LocalStorage:u["a"],Notify:b["a"]}});var p=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},m=[],h=t("60a3"),C=function(e,a,t,d){var n,i=arguments.length,r=i<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,t):d;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,a,t,d);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(r=(i<3?n(r):i>3?n(a,t,r):n(a,t))||r);return i>3&&r&&Object.defineProperty(a,t,r),r};let g=class extends h["d"]{created(){const e=this.$q.localStorage.getItem("darkMode");null==e||"boolean"!=typeof e&&"auto"!=e||this.$q.dark.set(e)}};g=C([h["a"]],g);var v=g,I=v,x=t("2877"),y=Object(x["a"])(I,p,m,!1,null,null,null),w=y.exports,S=t("4bde"),A=t("2f62");const P={debugWindow:{visible:!1,maximized:!1}};var k=P;const j={};var N=j;const z={};var W=z;const q={toggleDebugWindow(e){e.debugWindow.visible=!e.debugWindow.visible},toggleDebugWindowMaximized(e){e.debugWindow.maximized=!e.debugWindow.maximized}};var D=q;const U={namespaced:!0,actions:N,getters:W,mutations:D,state:k};var K=U,O=t("fb60"),L=t("b2da");const B={someAction(){}};var R=B,M=t("cf2e");const T={namespaced:!0,actions:L["b"],getters:R,mutations:M["a"],state:O["b"]};var G=T,J=Object(S["store"])((function({Vue:e}){e.use(A["a"]);const a=new A["a"].Store({modules:{app:K,juju:G},strict:!1});return a})),V=t("8c4f");const Y=[{path:"/",component:()=>Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"713b")),children:[{path:"",name:"home",redirect:"/models"},{path:"/controllers",component:()=>Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"a7d4")),children:[{path:"",name:"controllers"},{path:"cloud-credentials",name:"cloud-credentials"}]},{path:"/models",component:()=>Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"56c6")),children:[{path:"",name:"models"},{path:"machines",name:"machines"}]},{path:"/my-account",name:"my-account",component:()=>Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"8c2d"))},{path:"/admin",name:"admin",component:()=>Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"34ab"))},{path:"/welcome",name:"welcome",component:()=>Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"35a8"))}]}];Y.push({path:"*",component:()=>Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"e51e"))});var E=Y,H=Object(S["route"])((function({Vue:e}){e.use(V["a"]);const a=new V["a"]({scrollBehavior:()=>({x:0,y:0}),routes:E,mode:"hash",base:""});return a.beforeEach((e,a,t)=>{const d="seen-juju-lens-before";if(u["a"].getItem(d)||"welcome"==e.name)t();else{t({name:"welcome",query:Object.assign({welcomePageTo:e.fullPath},e.query)});try{u["a"].set(d,"true")}catch(n){console.error(n)}}}),a})),Q=function(){return $.apply(this,arguments)};function $(){return $=r()(n.a.mark((function e(){var a,t,d;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof J){e.next=6;break}return e.next=3,J({Vue:o["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=J;case 7:if(a=e.t0,"function"!==typeof H){e.next=14;break}return e.next=11,H({Vue:o["a"],store:a});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=H;case 15:return t=e.t1,a.$router=t,d={router:t,store:a,render:function(e){return e(w)}},d.el="#q-app",e.abrupt("return",{app:d,store:a,router:t});case 20:case"end":return e.stop()}}),e)}))),$.apply(this,arguments)}var F=t("bc3a"),X=t.n(F),_=Object(S["boot"])(({Vue:e})=>{e.prototype.$axios=X.a});function Z(){return ee.apply(this,arguments)}function ee(){return ee=r()(n.a.mark((function e(){var a,t,d,i,r,c,s,l,f;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:a=e.sent,t=a.app,d=a.store,i=a.router,r=!0,c=function(e){r=!1,window.location.href=e},s=window.location.href.replace(window.location.origin,""),l=[_],f=0;case 11:if(!(!0===r&&f<l.length)){e.next=29;break}if("function"===typeof l[f]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[f]({app:t,router:i,store:d,Vue:o["a"],ssrContext:null,redirect:c,urlPath:s});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:f++,e.next=11;break;case 29:if(!1!==r){e.next=31;break}return e.abrupt("return");case 31:new o["a"](t);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),ee.apply(this,arguments)}Z()},"7e6d":function(e,a,t){},b2da:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var d=t("cf2e"),n=t("18d6"),i={controllers:[{name:"AWS Prod Controller",id:"mN20lGzuMkVBi",cloudId:"BIfy0JfRercfFNiaLtmxtWaE",region:"us-west",accessLevel:"admin",cloudCredentialId:"X4DNgKiu4SJ"},{name:"Azure Dev Controller",id:"APRmlF23dYHPPcCc",cloudId:"AdzUGKLWNOyfA48Ug",region:"us-west",accessLevel:"user",cloudCredentialId:"85bCHNKPABAaPzQ"}],cloudCredentials:[{name:"Main AWS Creds",id:"X4DNgKiu4SJ",cloudId:"BIfy0JfRercfFNiaLtmxtWaE",credentialData:{accessKey:"y5dh1MGzHBv541YA8ONI3zGjTkLpnf46TCNbWDxi",secretKey:"iBMlj6jrl93i27NBYrwNvJYXq2UbhQ"}},{name:"My Azure Creds",id:"85bCHNKPABAaPzQ",cloudId:"AdzUGKLWNOyfA48Ug",credentialData:{adAId:"y5dh1MGzHBv541YA8ONI3zGjTkLpnf46TCNbWDxi",sId:"VW29TSfKD",adAP:"mNfq7YWRwTgfW5vwfxYRp"}}],clouds:[{name:"AWS",id:"BIfy0JfRercfFNiaLtmxtWaE",availableRegions:["us-west","us-east","asia"],requiredCredentials:[{key:"accessKey",label:"Access Key",description:"AWS access key"},{key:"secretKey",label:"Secret Key",description:"AWS secret key",isPassword:!0}]},{name:"Azure",id:"AdzUGKLWNOyfA48Ug",availableRegions:["centralus","centralasion"],requiredCredentials:[{key:"adAId",label:"Azure Active Directory Application ID"},{key:"sId",label:"Azure Subscription ID"},{key:"adAP",label:"Azure Active Directory Application Password",isPassword:!0}]}],models:[{name:"e-commerce-stack",id:"2900e66a-569b-4551-9e5a-6f8f459b694d"},{name:"backend-data-processing",id:"ffa8b47a-1b94-4da7-9138-f89195e4f26f"}],applications:[{name:"attendize",id:"f76da48d-3308-4339-a9a8-a875344acff6",modelId:"2900e66a-569b-4551-9e5a-6f8f459b694d",charmId:"b770e9dd-06f6-4e14-8e83-681992f06a22"},{name:"attendize-db",id:"7235e47a-b2b9-4815-b913-746ffc86f0e6",modelId:"2900e66a-569b-4551-9e5a-6f8f459b694d",charmId:"eb24fb67-19dd-464b-af6d-5366c5066edc"},{name:"ceph-filestore",id:"989d5634-710d-4fe1-880c-7e83ad3c83d4",modelId:"ffa8b47a-1b94-4da7-9138-f89195e4f26f",charmId:"031dc458-168c-4ae9-99c6-2f9d9162f1e5"},{name:"hadoop-cluster",id:"bb4dae6d-b303-4856-b378-e0a8adaf8eaa",modelId:"ffa8b47a-1b94-4da7-9138-f89195e4f26f",charmId:"bdabebab-73b9-4934-b086-e1dd91523a0d"},{name:"es-for-big-data",id:"b6b30cab-b10b-459e-890d-acae81e1b34d",modelId:"ffa8b47a-1b94-4da7-9138-f89195e4f26f",charmId:"a227b677-773c-425c-a6f5-83577de28742"},{name:"elastic-dashboard-proxy",id:"78f88c44-5bfb-4ff5-affd-f7bafb2a0ca5",modelId:"ffa8b47a-1b94-4da7-9138-f89195e4f26f",charmId:"69a4744e-b60f-42fd-85e7-1dfaca6c831e"}],relations:[[{applicationId:"f76da48d-3308-4339-a9a8-a875344acff6",endpointName:"database"},{applicationId:"7235e47a-b2b9-4815-b913-746ffc86f0e6",endpointName:"database"}],[{applicationId:"bb4dae6d-b303-4856-b378-e0a8adaf8eaa",endpointName:"ceph-data-store"},{applicationId:"989d5634-710d-4fe1-880c-7e83ad3c83d4",endpointName:"ceph-filesystem"}],[{applicationId:"b6b30cab-b10b-459e-890d-acae81e1b34d",endpointName:"hadoop-data-source"},{applicationId:"bb4dae6d-b303-4856-b378-e0a8adaf8eaa",endpointName:"hadoop-api"}],[{applicationId:"78f88c44-5bfb-4ff5-affd-f7bafb2a0ca5",endpointName:"reverse-proxy"},{applicationId:"b6b30cab-b10b-459e-890d-acae81e1b34d",endpointName:"elasticsearch-dashboard"}],[{applicationId:"78f88c44-5bfb-4ff5-affd-f7bafb2a0ca5",endpointName:"elasticsearch-cluster"},{applicationId:"78f88c44-5bfb-4ff5-affd-f7bafb2a0ca5",endpointName:"elasticsearch-cluster"}]],units:[{id:"eb7bddc9-9177-43b0-be07-3cdfc4b4d17d",index:0,applicationId:"f76da48d-3308-4339-a9a8-a875344acff6",machineId:"e81f4964-adfc-4c2e-bbc0-2a27192d2d01",exposedPorts:[80,443],status:{severity:"active",message:"Application running"},agentStatus:"idle"},{id:"cf61f077-a67e-44f3-9e4f-d5f253d81597",index:1,applicationId:"f76da48d-3308-4339-a9a8-a875344acff6",machineId:"3e5aecfb-2a86-4625-91bf-e8cd69be8885",exposedPorts:[80,443],status:{severity:"maintenance",message:"Updating appliation"},agentStatus:"idle"},{id:"8932c12c-89d4-413e-895e-db778527c0fc",index:1,applicationId:"7235e47a-b2b9-4815-b913-746ffc86f0e6",machineId:"e81f4964-adfc-4c2e-bbc0-2a27192d2d01",exposedPorts:[],status:{severity:"active",message:"Active master"},agentStatus:"idle"},{id:"16e862b5-3d87-4020-a2a0-2cc1e329a69c",index:2,applicationId:"7235e47a-b2b9-4815-b913-746ffc86f0e6",machineId:"3e5aecfb-2a86-4625-91bf-e8cd69be8885",exposedPorts:[],status:{severity:"active",message:"Active slave"},agentStatus:"idle"},{id:"8cdb16b4-fce0-4243-96ff-caaeed2ad968",index:4,applicationId:"7235e47a-b2b9-4815-b913-746ffc86f0e6",machineId:"95cffddf-8aa3-47d2-b325-2b2aa6572f5d",exposedPorts:[],status:{severity:"active",message:"Active slave"},agentStatus:"idle"},{id:"dc69d4ef-c010-40db-91b2-76fb6c24a855",index:0,applicationId:"989d5634-710d-4fe1-880c-7e83ad3c83d4",machineId:"e6f293c4-3a88-420a-b65f-c7aecd99d251",exposedPorts:[],status:{severity:"active"},agentStatus:"idle"},{id:"eee306f8-e316-4d6c-8587-6864c19fd081",index:1,applicationId:"989d5634-710d-4fe1-880c-7e83ad3c83d4",machineId:"177649cc-178c-4fd2-adaf-c1a99207b330",exposedPorts:[],status:{severity:"unknown"},agentStatus:"idle"},{id:"ad944336-5f1b-44ba-883b-29ad2e3df165",index:2,applicationId:"989d5634-710d-4fe1-880c-7e83ad3c83d4",machineId:"b26a62d6-7268-41bd-9c9b-9576ada3f2f5",exposedPorts:[],status:{severity:"blocked",message:"Server out of storage"},agentStatus:"idle"},{id:"922e19d7-dc8a-4b7f-bca8-22cbe4d94256",index:3,applicationId:"bb4dae6d-b303-4856-b378-e0a8adaf8eaa",machineId:"e6f293c4-3a88-420a-b65f-c7aecd99d251",exposedPorts:[],status:{severity:"waiting",message:"Waiting for master"},agentStatus:"idle"},{id:"4c8d8748-605b-4afb-85d2-f5eb5718ee7e",index:4,applicationId:"bb4dae6d-b303-4856-b378-e0a8adaf8eaa",machineId:"177649cc-178c-4fd2-adaf-c1a99207b330",exposedPorts:[],status:{severity:"maintenance",message:"Updating master"},agentStatus:"idle"},{id:"95e8ff59-5338-46d3-8e18-2ab894e7b696",index:6,applicationId:"bb4dae6d-b303-4856-b378-e0a8adaf8eaa",machineId:"b26a62d6-7268-41bd-9c9b-9576ada3f2f5",exposedPorts:[],status:{severity:"active",message:"Done updating"},agentStatus:"idle"},{id:"a54f54af-575f-4331-8eea-7778a2607bbc",index:10,applicationId:"bb4dae6d-b303-4856-b378-e0a8adaf8eaa",machineId:"dfe8f908-9e0b-481b-8736-de345934288d",exposedPorts:[],status:{severity:"maintenance",message:"Trying to become master"},agentStatus:"idle"},{id:"bd8670e2-f3c4-496e-8195-713977250c74",index:0,applicationId:"b6b30cab-b10b-459e-890d-acae81e1b34d",machineId:"e6f293c4-3a88-420a-b65f-c7aecd99d251",exposedPorts:[],status:{severity:"active",message:"Cluster active"},agentStatus:"idle"},{id:"0319f821-712f-4ddd-8af3-dedf27fb1ac1",index:1,applicationId:"b6b30cab-b10b-459e-890d-acae81e1b34d",machineId:"177649cc-178c-4fd2-adaf-c1a99207b330",exposedPorts:[],status:{severity:"active",message:"Cluster active"},agentStatus:"idle"},{id:"3732d605-b8b3-4a37-a306-83a9f9acf7e6",index:0,applicationId:"78f88c44-5bfb-4ff5-affd-f7bafb2a0ca5",machineId:"b26a62d6-7268-41bd-9c9b-9576ada3f2f5",exposedPorts:[80,443],status:{severity:"active",message:"Proxy online"},agentStatus:"idle"}],machines:[{id:"e81f4964-adfc-4c2e-bbc0-2a27192d2d01",index:0,modelId:"2900e66a-569b-4551-9e5a-6f8f459b694d",publicIp:"12.0.4.12",status:"running",instanceId:"juju-427011-0"},{id:"3e5aecfb-2a86-4625-91bf-e8cd69be8885",index:1,modelId:"2900e66a-569b-4551-9e5a-6f8f459b694d",publicIp:"12.0.4.13",status:"running",instanceId:"juju-427011-1"},{id:"95cffddf-8aa3-47d2-b325-2b2aa6572f5d",index:2,modelId:"2900e66a-569b-4551-9e5a-6f8f459b694d",publicIp:"12.0.4.14",status:"running",instanceId:"juju-427011-2"},{id:"e6f293c4-3a88-420a-b65f-c7aecd99d251",index:0,modelId:"ffa8b47a-1b94-4da7-9138-f89195e4f26f",publicIp:"12.0.4.15",status:"running",instanceId:"juju-110483-0"},{id:"177649cc-178c-4fd2-adaf-c1a99207b330",index:1,modelId:"ffa8b47a-1b94-4da7-9138-f89195e4f26f",publicIp:"12.0.4.16",status:"running",instanceId:"juju-110483-1"},{id:"b26a62d6-7268-41bd-9c9b-9576ada3f2f5",index:2,modelId:"ffa8b47a-1b94-4da7-9138-f89195e4f26f",publicIp:"12.0.4.17",status:"running",instanceId:"juju-110483-2"},{id:"dfe8f908-9e0b-481b-8736-de345934288d",index:3,modelId:"ffa8b47a-1b94-4da7-9138-f89195e4f26f",publicIp:"12.0.4.18",status:"running",instanceId:"juju-110483-3"}],store:[{id:"031dc458-168c-4ae9-99c6-2f9d9162f1e5",name:"Ceph",imageUrl:"/statics/charmIcons/ceph.svg",endpoints:[{name:"ceph-filesystem",interface:"cephfs",mode:"provides"}]},{id:"a227b677-773c-425c-a6f5-83577de28742",name:"ElasticSearch",imageUrl:"/statics/charmIcons/elasticsearch.svg",endpoints:[{name:"elasticsearch-dashbaord",interface:"http",mode:"provides"},{name:"hadoop-data-source",interface:"hadoop",mode:"requires"},{name:"spark-data-source",interface:"spark",mode:"requires"},{name:"cluster",interface:"elasticsearch-cluster",mode:"peer"}]},{id:"bdabebab-73b9-4934-b086-e1dd91523a0d",name:"Hadoop",imageUrl:"/statics/charmIcons/hadoop.svg",endpoints:[{name:"hadoop-api",interface:"hadoop",mode:"provides"},{name:"ceph-data-store",interface:"ceph",mode:"requires"}]},{id:"69a4744e-b60f-42fd-85e7-1dfaca6c831e",name:"Nginx",imageUrl:"/statics/charmIcons/nginx.svg",endpoints:[{name:"website",interface:"http",mode:"provides"},{name:"reverse-proxy",interface:"http",mode:"requires"}]},{id:"eb24fb67-19dd-464b-af6d-5366c5066edc",name:"PostgreSQL",imageUrl:"/statics/charmIcons/postgresql.svg",endpoints:[{name:"admin-dashboard",interface:"http",mode:"provides"},{name:"database",interface:"pgsql",mode:"provides"}]},{id:"b7f180a1-0619-4f44-821f-2adc3ad2c7ff",name:"Nextcloud",imageUrl:"/statics/charmIcons/nextcloud.svg",endpoints:[{name:"website",interface:"http",mode:"provides"},{name:"database",interface:"pgsql",mode:"requires"}]},{id:"c1600d9e-7407-4ab6-a26e-6978a6201000",name:"Spark",imageUrl:"/statics/charmIcons/nextcloud.svg",endpoints:[{name:"website",interface:"http",mode:"provides"},{name:"database",interface:"pgsql",mode:"requires"}]},{id:"b770e9dd-06f6-4e14-8e83-681992f06a22",name:"Attendize",imageUrl:"/statics/charmIcons/attendize.svg",endpoints:[{name:"website",interface:"http",mode:"provides"},{name:"database",interface:"pgsql",mode:"requires"}]}]},r=function(e,a,t,d){function n(e){return e instanceof t?e:new t((function(a){a(e)}))}return new(t||(t=Promise))((function(t,i){function r(e){try{c(d.next(e))}catch(a){i(a)}}function o(e){try{c(d["throw"](e))}catch(a){i(a)}}function c(e){e.done?t(e.value):n(e.value).then(r,o)}c((d=d.apply(e,a||[])).next())}))};const o=i;function c(){const e=[100,500,1e3,1500,2e3];return e[Math.floor(Math.random()*e.length)]}function s(e){return new Promise(a=>{setTimeout(()=>a(e()),c())})}const l={loadAllState:"loadAllState",persistState:"persistState",clearAllState:"clearAllState",setCurrentController:"setCurrentController",addController:"addController",updateController:"updateController",deleteController:"deleteController",addCloudCredential:"addCloudCredential",updateCloudCredential:"updateCloudCredential",deleteCloudCredential:"deleteCloudCredential"},f="jujuState",u={[l.loadAllState](e){return s(()=>{const a=n["a"].getItem(f);a?e.commit(d["b"].setAllState,a):e.commit(d["b"].setAllState,o)})},[l.persistState](e){n["a"].set(f,e.state)},[l.clearAllState](e){n["a"].remove(f),e.commit(d["b"].setAllState,{}),e.commit(d["b"].setAllState,o)},[l.setCurrentController](e,a){return r(this,void 0,void 0,(function*(){e.commit(d["b"].setCurrentController,a),yield e.dispatch(l.persistState)}))},[l.addController](e,a){return s(()=>r(this,void 0,void 0,(function*(){e.commit(d["b"].addController,a),yield e.dispatch(l.persistState)})))},[l.updateController](e,a){return s(()=>r(this,void 0,void 0,(function*(){e.commit(d["b"].updateController,a),yield e.dispatch(l.persistState)})))},[l.deleteController](e,a){return s(()=>r(this,void 0,void 0,(function*(){e.commit(d["b"].deleteController,a),yield e.dispatch(l.persistState)})))},[l.addCloudCredential](e,a){return s(()=>r(this,void 0,void 0,(function*(){e.commit(d["b"].addCloudCredential,a),yield e.dispatch(l.persistState)})))},[l.updateCloudCredential](e,a){return s(()=>r(this,void 0,void 0,(function*(){e.commit(d["b"].updateCloudCredential,a),yield e.dispatch(l.persistState)})))},[l.deleteCloudCredential](e,a){return s(()=>r(this,void 0,void 0,(function*(){e.commit(d["b"].deleteCloudCredential,a),yield e.dispatch(l.persistState)})))}};a["b"]=u},cf2e:function(e,a,t){"use strict";t.d(a,"b",(function(){return n}));var d=t("fb60");const n={setAllState:"setAllState",clearAllState:"clearAllState",setCurrentController:"setCurrentController",setControllers:"setControllers",addController:"addController",updateController:"updateController",deleteController:"deleteController",setCloudCredentials:"setCloudCredentials",addCloudCredential:"addCloudCredential",updateCloudCredential:"updateCloudCredential",deleteCloudCredential:"deleteCloudCredential",setClouds:"setClouds"},i={[n.setAllState](e,a){for(const t of Object.keys(a))e[t]=a[t]},[n.clearAllState](e){d["b"]},[n.setCurrentController](e,a){e.currentController=a},[n.setControllers](e,a){e.controllers=a},[n.addController](e,a){e.controllers.push(a)},[n.updateController](e,a){e.controllers=e.controllers.map(e=>e.id==a.id?a:e),e.currentController&&e.currentController.id==a.id&&(e.currentController=a)},[n.deleteController](e,a){e.controllers=e.controllers.filter(e=>e.id!=a),e.currentController&&e.currentController.id==a&&(e.currentController=null)},[n.setCloudCredentials](e,a){e.cloudCredentials=a},[n.addCloudCredential](e,a){e.cloudCredentials.push(a)},[n.updateCloudCredential](e,a){e.cloudCredentials=e.cloudCredentials.map(e=>e.id==a.id?a:e)},[n.deleteCloudCredential](e,a){e.cloudCredentials=e.cloudCredentials.filter(e=>e.id!=a)},[n.setClouds](e,a){e.clouds=a}};a["a"]=i},fb60:function(e,a,t){"use strict";var d;t.d(a,"a",(function(){return d})),function(e){e[e["active"]=0]="active",e[e["waiting"]=1]="waiting",e[e["maintenance"]=2]="maintenance",e[e["unknown"]=3]="unknown",e[e["blocked"]=4]="blocked",e[e["errored"]=5]="errored"}(d||(d={}));const n={currentController:null,controllers:[],clouds:[],cloudCredentials:[],models:[],applications:[],relations:[],units:[],machines:[],store:[]};a["b"]=n}},[[0,2,0]]]);