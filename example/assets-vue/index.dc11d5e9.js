import{d as a,r as n,au as t,aH as e,o as s,Y as o,b2 as l,_ as i,I as c,a5 as r,a4 as u}from"./common.5a7f0626.js";const d={class:"f-mb"},f={class:"f-mb"},m=a({__name:"index",setup(a){const m=window.mapWork,w=n({allLength:0,nowView:0});t((()=>{m.eventTarget.on("changeCameraHistory",(function(a){const n=a.data;w.allLength=n.count,w.nowView=n.index+1}))}));const _=()=>{m.lastView()},g=()=>{m.nextView()},p=()=>{m.lastOneView()};return(a,n)=>{const t=e("mars-button"),m=e("a-space"),V=e("mars-dialog");return s(),o(V,{visible:!0,right:"10",top:"10"},{default:l((()=>[i("p",d,"当前共有"+c(w.allLength)+"条视角记录，当前正在第"+c(w.nowView)+"条视角",1),i("div",f,[r(t,{onClick:p},{default:l((()=>[u("回到当前（最后一条）")])),_:1})]),i("div",null,[r(m,null,{default:l((()=>[r(t,{onClick:_},{default:l((()=>[u("上一个视图")])),_:1}),r(t,{onClick:g},{default:l((()=>[u("下一个视图")])),_:1})])),_:1})])])),_:1})}}});export{m as default};