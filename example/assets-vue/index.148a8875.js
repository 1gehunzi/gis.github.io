import{k as a}from"./style.795f3750.js";import{_ as l,m as s,u as e,x as u,aI as t,r as n,o,q as v,z as r,a as d,f as m,t as c,A as i,i as f,p,l as _}from"./common.10acb102.js";const h=a=>(p("data-v-c5c69582"),a=a(),_(),a),Y={class:"f-mb"},b=h((()=>d("span",null,"日期选择:",-1))),g={class:"f-mb"},M=h((()=>d("span",null,"时间选择:",-1))),k={class:"f-mb"},w=h((()=>d("span",null,"当前时间:",-1))),x={class:"f-mb"},D=h((()=>d("span",null,"自动播放:",-1)));var y=l(s({__name:"index",setup(l){const s=window.mapWork,p=e(a().format("YYYY-MM-DD")),_=e(420),h=u((()=>Math.floor(_.value/60))),y=u((()=>Math.floor(_.value%60)));s.eventTarget.on("changeShadows",(a=>{const l=a.shadowTime;_.value=60*l.getHours()+l.getMinutes()})),t((()=>{C()}));const C=()=>{s.setShadows(p.value,h.value,y.value)},j=()=>{s.startPlay(p.value,h.value,y.value)},I=()=>{s.stopPlay()};return(a,l)=>{const s=n("mars-date-picker"),e=n("a-space"),u=n("mars-slider"),t=n("mars-button"),P=n("mars-dialog");return o(),v(P,{visible:!0,right:"10",top:"10"},{default:r((()=>[d("div",Y,[m(e,null,{default:r((()=>[b,m(s,{value:p.value,"onUpdate:value":l[0]||(l[0]=a=>p.value=a),valueFormat:"YYYY-MM-DD"},null,8,["value"])])),_:1})]),d("div",g,[m(e,null,{default:r((()=>[M,m(u,{onChange:C,value:_.value,"onUpdate:value":l[1]||(l[1]=a=>_.value=a),min:0,max:1440,step:1},null,8,["value"])])),_:1})]),d("div",k,[m(e,null,{default:r((()=>[w,d("span",null,c(p.value)+" "+c(i(h))+" 时 "+c(i(y))+"分",1)])),_:1})]),d("div",x,[m(e,null,{default:r((()=>[D,m(t,{onClick:j},{default:r((()=>[f("播放")])),_:1}),m(t,{onClick:I},{default:r((()=>[f("暂停")])),_:1})])),_:1})])])),_:1})}}}),[["__scopeId","data-v-c5c69582"]]);export{y as default};