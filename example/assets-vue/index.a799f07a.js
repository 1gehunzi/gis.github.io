import{d as t,r as a,aH as s,o as e,c as o,a5 as i,b2 as u,b4 as r,a4 as d,bn as n,M as f}from"./common.5a7f0626.js";import{f as l}from"./fixedRoute-info.7eda4c00.js";import"./read.03cd8dda.js";const c=t({__name:"index",setup(t){const c=window.mapWork,m=a({isStart:!1,isPause:!1});c.eventTarget.on("endRoam",(()=>{S()}));const p=()=>{c.fixedRoute.start(),S()},x=()=>{c.fixedRoute.pause(),S()},R=()=>{c.fixedRoute.proceed(),S()},_=()=>{c.fixedRoute.stop(),S()};function S(){setTimeout((()=>{m.isStart=c.fixedRoute.isStart,m.isPause=c.fixedRoute.isPause}),100)}return(t,a)=>{const c=s("mars-button"),S=s("a-space"),b=s("mars-dialog");return e(),o(f,null,[i(b,{visible:!0,right:"10",top:"10"},{default:u((()=>[i(S,null,{default:u((()=>[r(i(c,{onClick:p},{default:u((()=>[d("开始")])),_:1},512),[[n,!m.isStart]]),r(i(c,{onClick:x},{default:u((()=>[d("暂停")])),_:1},512),[[n,m.isStart&&!m.isPause]]),r(i(c,{onClick:R},{default:u((()=>[d("继续")])),_:1},512),[[n,m.isStart&&m.isPause]]),r(i(c,{onClick:_},{default:u((()=>[d("停止")])),_:1},512),[[n,m.isStart]])])),_:1})])),_:1}),i(l)],64)}}});export{c as default};