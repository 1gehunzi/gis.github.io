define(["exports","./Matrix2-1ba2543c","./RuntimeError-ac440aa5","./OrientedBoundingBox-966209b7"],(function(n,t,e,r){"use strict";const a={},i=new t.Cartesian3,o=new t.Cartesian3,u=new t.Cartesian3,s=new t.Cartesian3,c=new r.OrientedBoundingBox;function C(n,e,r,a,o){const u=t.Cartesian3.subtract(n,e,i),s=t.Cartesian3.dot(r,u),c=t.Cartesian3.dot(a,u);return t.Cartesian2.fromElements(s,c,o)}a.validOutline=function(n){const e=r.OrientedBoundingBox.fromPoints(n,c).halfAxes,a=t.Matrix3.getColumn(e,0,o),i=t.Matrix3.getColumn(e,1,u),C=t.Matrix3.getColumn(e,2,s),m=t.Cartesian3.magnitude(a),g=t.Cartesian3.magnitude(i),l=t.Cartesian3.magnitude(C);return!(0===m&&(0===g||0===l)||0===g&&0===l)},a.computeProjectTo2DArguments=function(n,e,a,i){const C=r.OrientedBoundingBox.fromPoints(n,c),m=C.halfAxes,g=t.Matrix3.getColumn(m,0,o),l=t.Matrix3.getColumn(m,1,u),d=t.Matrix3.getColumn(m,2,s),f=t.Cartesian3.magnitude(g),x=t.Cartesian3.magnitude(l),B=t.Cartesian3.magnitude(d),M=Math.min(f,x,B);if(0===f&&(0===x||0===B)||0===x&&0===B)return!1;let P,w;return M!==x&&M!==B||(P=g),M===f?P=l:M===B&&(w=l),M!==f&&M!==x||(w=d),t.Cartesian3.normalize(P,a),t.Cartesian3.normalize(w,i),t.Cartesian3.clone(C.center,e),!0},a.createProjectPointsTo2DFunction=function(n,t,e){return function(r){const a=new Array(r.length);for(let i=0;i<r.length;i++)a[i]=C(r[i],n,t,e);return a}},a.createProjectPointTo2DFunction=function(n,t,e){return function(r,a){return C(r,n,t,e,a)}},n.CoplanarPolygonGeometryLibrary=a}));