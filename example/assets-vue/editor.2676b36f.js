import{m as e,u as a,x as s,y as t,o,q as n,z as i,f as l,c,b as r,F as u,A as d,h as m,e as p,s as b,B as f}from"./common.10acb102.js";import{w as v,_ as w,M as g,d as x,C as y,g as h,s as P,a as j,b as k}from"./style.0a538c9f.js";const I=e({__name:"App",setup(e){const p=v.exports.useWidgetStore(),b=a(!1),f=s((()=>p.state.widgets)),h=s((()=>p.state.openAtStart));let P=null;t("getMapInstance",(()=>P));function j(){var e;window.marsEditor.useLifecycle(),e=window._mapInstance,P=e,b.value=!0}return(e,a)=>(o(),n(d(y),{locale:d(x)},{default:i((()=>[l(w,{onChildMounted:j}),b.value?(o(!0),c(u,{key:0},r(d(f),(e=>(o(),c(u,{key:e.key},[d(h).includes(e.name)&&e.visible?(o(),n(g,{key:0,visible:e.visible,"onUpdate:visible":a=>e.visible=a,widget:e},null,8,["visible","onUpdate:visible","widget"])):m("",!0)],64)))),128)):m("",!0)])),_:1},8,["locale"]))}});document.oncontextmenu=function(e){e.preventDefault()};const S=new p.exports.Editor({baseUrl:"/",code:h("code"),fullScreen:h("full"),configLibs:window.configLibs,resourcePublicPath:"example",thumbnailPublicPath:"/config/",libPublicPath:"/lib/",framework:"vue",configSourceUrl:"/config/example.json",UIFile:"{main}/index.vue"});window.marsEditor=S;let U,_=!1;S.on("loaded",(a=>{_&&(U.unmount(),U=null),function(a){if(a)U=b(e({template:"<div><div>"}));else{U=b(I);const e=v.exports.getInjectKey();U.use(v.exports.injectState(f.exports.cloneDeep(P)),e)}j(U,{dialog:{position:{left:50,bottom:50},warpper:"#mars-main-view"}}),U.mount("#mars-ui-root")}(!a.hasPannel),_=!0})),S.render(document.getElementById("root"),k(),h("name"));