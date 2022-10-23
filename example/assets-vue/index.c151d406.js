import{G as a}from"./graphic-layer-state.acfd2ba6.js";import{_ as e,m as l,S as n,r as t,o as s,c,f as i,z as u,a as d,i as o,F as p,p as m,l as r}from"./common.10acb102.js";import"./style.795f3750.js";const h=a=>(m("data-v-76c7a5bc"),a=a(),r(),a),v={class:"f-mb"},g=h((()=>d("span",{class:"mars-pannel-item-label"},"相机位置:",-1))),f={class:"f-mb"},b=h((()=>d("span",{class:"mars-pannel-item-label"},"水平张角:",-1))),C={class:"f-mb"},_=h((()=>d("span",{class:"mars-pannel-item-label"},"垂直张角:",-1))),k={class:"f-mb"},A=h((()=>d("span",{class:"mars-pannel-item-label"},"投射距离:",-1))),V={class:"f-mb"},y=h((()=>d("span",{class:"mars-pannel-item-label"},"四周方向:",-1))),x={class:"f-mb"},F=h((()=>d("span",{class:"mars-pannel-item-label"},"俯仰角度:",-1))),w={class:"f-mb"},G=h((()=>d("span",{class:"mars-pannel-item-label"},"视椎框线:",-1))),U={class:"f-mb"},O=h((()=>d("span",{class:"mars-pannel-item-label"},"视频透明度:",-1))),S={class:"f-tac"};var j=e(l({__name:"index",setup(e){const l=window.mapWork,m=n({ckdFrustum:!0,cameraAngle:0,cameraAngle2:0,distanceValue:0,heading:0,pitchValue:0,opcity:1,pannelTitle:"",selectedGraphic:!1});function r(a){const e=l.getGraphic(a.graphicId);m.pannelTitle=a.graphicName,m.cameraAngle=null==e?void 0:e.angle,m.cameraAngle2=null==e?void 0:e.angle2,m.ckdFrustum=null==e?void 0:e.showFrustum,m.distanceValue=null==e?void 0:e.distance,m.pitchValue=null==e?void 0:e.pitch,m.opcity=null==e?void 0:e.opacity,m.heading=null==e?void 0:e.heading,m.selectedGraphic=!0}function h(){m.selectedGraphic=!1}const j=()=>{l.selCamera()},E=()=>{l.onChangeAngle(m.cameraAngle)},T=()=>{l.onChangeAngle2(m.cameraAngle2)},D=()=>{l.onChangeDistance(m.distanceValue)},I=()=>{l.onChangeHeading(m.heading)},L=()=>{l.onClickSelView()},P=()=>{l.onChangePitch(m.pitchValue)},z=()=>{l.showFrustum(m.ckdFrustum)},H=()=>{l.onChangeOpacity(m.opcity)},N=()=>{l.locate()},W=()=>{l.printParameters()},q=()=>{l.playOrpause()};return(e,l)=>{const n=t("mars-dialog"),B=t("mars-button"),J=t("a-space"),K=t("mars-slider"),M=t("a-checkbox");return s(),c(p,null,[i(n,{visible:!0,right:"10",top:"10"},{default:u((()=>[i(a,{defaultCount:10,drawLabel1:"绘制",drawLabel2:"按当前相机",interaction:!1,customEditor:"video3D",onOnStartEditor:r,onOnStopEditor:h})])),_:1}),i(n,{visible:m.selectedGraphic,title:m.pannelTitle,closeable:!0,beforeClose:()=>{m.selectedGraphic=!1},left:"10",top:"10"},{default:u((()=>[d("div",v,[i(J,null,{default:u((()=>[g,i(B,{onClick:j},{default:u((()=>[o("鼠标图上点选(相机位置)")])),_:1})])),_:1})]),d("div",f,[i(J,null,{default:u((()=>[b,i(K,{onChange:E,value:m.cameraAngle,"onUpdate:value":l[0]||(l[0]=a=>m.cameraAngle=a),min:1,max:60,step:.1},null,8,["value","step"])])),_:1})]),d("div",C,[i(J,null,{default:u((()=>[_,i(K,{onChange:T,value:m.cameraAngle2,"onUpdate:value":l[1]||(l[1]=a=>m.cameraAngle2=a),min:10,max:30,step:.1},null,8,["value","step"])])),_:1})]),d("div",k,[i(J,null,{default:u((()=>[A,i(K,{onChange:D,value:m.distanceValue,"onUpdate:value":l[2]||(l[2]=a=>m.distanceValue=a),min:1,max:1e3,step:.1},null,8,["value","step"])])),_:1})]),d("div",V,[i(J,null,{default:u((()=>[y,i(K,{onChange:I,value:m.heading,"onUpdate:value":l[3]||(l[3]=a=>m.heading=a),min:0,max:360,step:.1},null,8,["value","step"]),i(B,{onClick:L},{default:u((()=>[o("图上选点")])),_:1})])),_:1})]),d("div",x,[i(J,null,{default:u((()=>[F,i(K,{onChange:P,value:m.pitchValue,"onUpdate:value":l[4]||(l[4]=a=>m.pitchValue=a),min:-180,max:180,step:.1},null,8,["value","step"])])),_:1})]),d("div",w,[i(J,null,{default:u((()=>[G,i(M,{onChange:z,checked:m.ckdFrustum,"onUpdate:checked":l[5]||(l[5]=a=>m.ckdFrustum=a)},{default:u((()=>[o("是否显示")])),_:1},8,["checked"])])),_:1})]),d("div",U,[i(J,null,{default:u((()=>[O,i(K,{onChange:H,value:m.opcity,"onUpdate:value":l[6]||(l[6]=a=>m.opcity=a),min:0,max:1,step:.1},null,8,["value","step"])])),_:1})]),d("div",S,[i(J,null,{default:u((()=>[i(B,{onClick:q},{default:u((()=>[o("播放暂停")])),_:1}),i(B,{onClick:N},{default:u((()=>[o("返回相机视点")])),_:1}),i(B,{onClick:W},{default:u((()=>[o("打印参数")])),_:1})])),_:1})])])),_:1},8,["visible","title","beforeClose"])],64)}}}),[["__scopeId","data-v-76c7a5bc"]]);export{j as default};