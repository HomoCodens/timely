(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(e,t,r){e.exports=r("2f39")},"0047":function(e,t,r){},"2f39":function(e,t,r){"use strict";r.r(t);var o=r("a34a"),n=r.n(o),c=(r("a481"),r("96cf"),r("c973")),a=r.n(c),i=(r("7d6e"),r("e54f"),r("985d"),r("0047"),r("2b0e")),s=r("1f91"),u=r("42d2"),p=r("b05d");i["a"].use(p["a"],{config:{},lang:s["a"],iconSet:u["a"]});var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},d=[],m={name:"App",data(){return{interval:0}},mounted(){this.interval=window.setInterval(()=>{this.$store.dispatch("tick")},1e3)},beforeDestroy(){window.clearInterval(this.interval),this.$store.dispatch("tick")}},f=m,b=r("2877"),j=Object(b["a"])(f,l,d,!1,null,null,null),h=j.exports,E=r("4bde"),v=r("2f62"),w=r("bfa9");const P={projects:[{name:"Project 1",id:"1",uiColor:"#ff0000"},{name:"Project 2",id:"2",uiColor:"#00ff00"}],activeProject:"1"};var T=P;function k(){return"#"+(16777215*Math.random()<<0).toString(16)}const O={setActiveProject({state:e,dispatch:t,commit:r},{id:o}){e.activeProject!==o&&(r("SET_ACTIVE_PROJECT",o),t("newBlock",{id:o}))},newProject({commit:e}){e("NEW_PROJECT")},renameProject({commit:e},t){e("SET_PROJECT_NAME",t)},removeProject({commit:e},t){e("REMOVE_PROJECT",t)},changeColor({commit:e},t){e("SET_PROJECT_COLOR",t)},randomizeColor({commit:e},t){const r={id:t,color:k()};e("SET_PROJECT_COLOR",r)}};var _=O;const C={getProjectById(e){return t=>e.projects.filter(e=>e.id===t)[0]},getActiveProject(e){return e.projects.filter(t=>t.id===e.activeProject)[0]}};var x=C,g=r("ec26");const R={SET_ACTIVE_PROJECT(e,t){e.activeProject=t},NEW_PROJECT(e){e.projects.push({name:"Project "+(e.projects.length+1),uiColor:k(),id:Object(g["a"])()})},SET_PROJECT_NAME(e,{id:t,newName:r}){const o=e.projects.map((e,t)=>({index:t,project:e})).filter(({project:e})=>e.id===t)[0].index;e.projects[o].name=r},SET_PROJECT_COLOR(e,{id:t,color:r}){const o=e.projects.map((e,t)=>({index:t,project:e})).filter(({project:e})=>e.id===t)[0].index;e.projects[o].uiColor=r},REMOVE_PROJECT(e,t){e.projects=e.projects.filter(e=>e.id!==t),e.activeProject===t&&(e.activeProject=e.projects[0].id)}};var S=R;const I={namespaced:!1,actions:_,getters:x,mutations:S,state:T};var J=I;const A={newBlock({commit:e},{id:t}){e("START_NEW_BLOCK",t)},tick({commit:e}){e("TICK")},pause({dispatch:e,commit:t}){e("tick"),t("SET_PAUSED",!0)},resume({dispatch:e,commit:t,rootState:r}){e("tick"),t("SET_PAUSED",!1),e("newBlock",{id:r.projects.activeProject})},togglePaused({state:e,dispatch:t}){e.paused?t("resume"):t("pause")},resetTime({commit:e}){e("RESET_TIME")}};var y=A;const V={projectAggregate(e,t){const r=e.timeblocks.reduce((e,t)=>(void 0===e[t.projectId]&&(e[t.projectId]=0),e[t.projectId]+=t.end.valueOf()-t.start.valueOf(),e),{});return Object.entries(r).map(([e,r])=>({name:t.getProjectById(e).name,id:e,time:r}))}};var B=V;const M={START_NEW_BLOCK(e,t){const r=(new Date).valueOf();e.timeblocks.push({projectId:t,start:r,end:r})},TICK(e){e.timeblocks.length>0&&!e.paused&&(e.timeblocks[e.timeblocks.length-1].end=(new Date).valueOf())},SET_PAUSED(e,t){e.paused=t},RESET_TIME(e){e.timeblocks=[],e.paused=!0},REMOVE_PROJECT(e,t){e.timeblocks[e.timeblocks.length-1].projectId===t&&(e.paused=!0),e.timeblocks=e.timeblocks.filter(e=>e.projectId!==t)}};var N=M;const D={timeblocks:[],paused:!0};var L=D;const K={namespaced:!1,actions:y,getters:B,mutations:N,state:L};var W=K,$=Object(E["store"])((function({Vue:e}){e.use(v["a"]);new w["a"]({storage:window.localStorage});const t=new v["a"].Store({modules:{projects:J,timeblocks:W},strict:!1});return t})),U=r("8c4f");const q=[{path:"/",component:()=>Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"8b24"))},{path:"/manager",component:()=>Promise.all([r.e(0),r.e(6)]).then(r.bind(null,"9c0a"))}]}];q.push({path:"*",component:()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"e51e"))});var z=q,Q=Object(E["route"])((function({Vue:e}){e.use(U["a"]);const t=new U["a"]({scrollBehavior:()=>({x:0,y:0}),routes:z,mode:"hash",base:""});return t})),F=function(){return G.apply(this,arguments)};function G(){return G=a()(n.a.mark((function e(){var t,r,o;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof $){e.next=6;break}return e.next=3,$({Vue:i["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=$;case 7:if(t=e.t0,"function"!==typeof Q){e.next=14;break}return e.next=11,Q({Vue:i["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=Q;case 15:return r=e.t1,t.$router=r,o={router:r,store:t,render:function(e){return e(h)}},o.el="#q-app",e.abrupt("return",{app:o,store:t,router:r});case 20:case"end":return e.stop()}}),e)}))),G.apply(this,arguments)}var H=r("750b"),X=Object(E["boot"])(({Vue:e})=>{e.use(H["b"])});function Y(){return Z.apply(this,arguments)}function Z(){return Z=a()(n.a.mark((function e(){var t,r,o,c,a,s,u,p,l;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,r=t.app,o=t.store,c=t.router,a=!0,s=function(e){a=!1,window.location.href=e},u=window.location.href.replace(window.location.origin,""),p=[X],l=0;case 11:if(!(!0===a&&l<p.length)){e.next=29;break}if("function"===typeof p[l]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,p[l]({app:r,router:c,store:o,Vue:i["a"],ssrContext:null,redirect:s,urlPath:u});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:l++,e.next=11;break;case 29:if(!1!==a){e.next=31;break}return e.abrupt("return");case 31:new i["a"](r);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),Z.apply(this,arguments)}Y()}},[[0,2,0]]]);