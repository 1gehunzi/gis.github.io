import{h as t}from"./style.0a538c9f.js";import{m as e,r as a,o,q as r,z as n,a as s}from"./common.10acb102.js";const i=s("div",{id:"chart-container",style:{width:"400px",height:"250px"}},null,-1),l=e({__name:"index",setup(e){const s=window.mapWork;let l=null,f=null;return s.eventTarget.on("dataLoaded",(function(e){l=t(document.getElementById("chart-container"));const{heightArray:a,heightTDArray:o,distanceArray:r}=e;f={title:{text:"断面图",textStyle:{color:"#ffffff"}},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},toolbox:{show:!1,feature:{saveAsImage:{}}},legend:{data:["地形高程","设计高程"],textStyle:{color:"#ffffff"}},xAxis:{type:"category",boundaryGap:!1,data:r,axisLabel:{color:"#ffffff"}},yAxis:{type:"value",axisLabel:{formatter:"{value} 米",color:"#ffffff"},axisPointer:{snap:!0}},dataZoom:[{type:"inside"},{start:0,end:10,handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}}],series:[{name:"地形高程",type:"line",smooth:!0,itemStyle:{normal:{color:"rgb(255, 255, 0)"}},data:o},{name:"设计高程",type:"line",smooth:!0,itemStyle:{normal:{color:"rgb(255, 70, 131)"}},data:a,markPoint:void 0}]},l.setOption(f,!0)})),s.eventTarget.on("dataUpdated",(function(t){if(!l)return;const{loc:e,height:a}=t,o={data:[{name:"车",value:"车",xAxis:e+5,yAxis:a}]};l.setOption({series:[{name:"设计高程",markPoint:o}]})})),(t,e)=>{const s=a("mars-dialog");return o(),r(s,{visible:!0,right:"10",top:"10"},{default:n((()=>[i])),_:1})}}});export{l as default};