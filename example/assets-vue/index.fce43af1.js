import{_ as a,m as e,S as s,r as l,o as n,q as t,z as m,a as i,f as p,i as d,p as u,l as o}from"./common.10acb102.js";const c=a=>(u("data-v-388786fa"),a=a(),o(),a),r={class:"f-mb"},v=c((()=>i("span",{class:"mars-pannel-item-label"},"状 态:",-1))),b={class:"f-mb"},f=c((()=>i("span",{class:"mars-pannel-item-label"},"对比度:",-1))),g={class:"f-mb"},h=c((()=>i("span",{class:"mars-pannel-item-label"},"亮 度:",-1))),_={class:"f-mb"},x=c((()=>i("span",{class:"mars-pannel-item-label"},"增 量:",-1))),S={class:"f-mb"},C=c((()=>i("span",{class:"mars-pannel-item-label"},"步 长:",-1))),U={class:"f-mb"},k=c((()=>i("span",{class:"mars-pannel-item-label"},"Sigma:",-1)));var z=a(e({__name:"index",setup(a){const e=window.mapWork,u=s({enabled:!0,contrast:128,brightness:-.3,delta:1,stepSize:5,sigma:3.78}),o=()=>{e.setBloomEffect(u.enabled)},c=()=>{e.setContrast(u.contrast)},z=()=>{e.setBrightness(u.brightness)},w=()=>{e.setDelta(u.delta)},B=()=>{e.setStep(u.stepSize)},j=()=>{e.setSigma(u.sigma)};return(a,e)=>{const s=l("a-checkbox"),q=l("a-space"),D=l("mars-slider"),E=l("mars-dialog");return n(),t(E,{visible:!0,right:"10",top:"10"},{default:m((()=>[i("div",r,[p(q,null,{default:m((()=>[v,p(s,{checked:u.enabled,"onUpdate:checked":e[0]||(e[0]=a=>u.enabled=a),onChange:o},{default:m((()=>[d("开启效果")])),_:1},8,["checked"])])),_:1})]),i("div",b,[p(q,null,{default:m((()=>[f,p(D,{value:u.contrast,"onUpdate:value":e[1]||(e[1]=a=>u.contrast=a),onChange:c,min:-255,max:255,step:.01},null,8,["value","min","max","step"])])),_:1})]),i("div",g,[p(q,null,{default:m((()=>[h,p(D,{value:u.brightness,"onUpdate:value":e[2]||(e[2]=a=>u.brightness=a),onChange:z,min:-.1,max:3,step:.01},null,8,["value","min","max","step"])])),_:1})]),i("div",_,[p(q,null,{default:m((()=>[x,p(D,{value:u.delta,"onUpdate:value":e[3]||(e[3]=a=>u.delta=a),onChange:w,min:1,max:5,step:.01},null,8,["value","step"])])),_:1})]),i("div",S,[p(q,null,{default:m((()=>[C,p(D,{value:u.stepSize,"onUpdate:value":e[4]||(e[4]=a=>u.stepSize=a),onChange:B,min:0,max:7,step:.01},null,8,["value","step"])])),_:1})]),i("div",U,[p(q,null,{default:m((()=>[k,p(D,{value:u.sigma,"onUpdate:value":e[5]||(e[5]=a=>u.sigma=a),onChange:j,min:1,max:10,step:.01},null,8,["value","step"])])),_:1})])])),_:1})}}}),[["__scopeId","data-v-388786fa"]]);export{z as default};