function a(r,e,t){for(var u=new Array(t),n=0,i=e;n<t;)u[n]=r[i],n=n+1|0,i=i+1|0;return u}function o(r,e){for(;;){var t=e,u=r,n=u.length,i=n===0?1:n,f=t.length,E=i-f|0;if(E===0)return u.apply(null,t);if(E>=0)return function(_,p){return function(d){return o(_,p.concat([d]))}}(u,t);e=a(t,i,-E|0),r=u.apply(null,a(t,0,i))}}function S(r,e){var t=r.length;if(t===1)return r(e);switch(t){case 1:return r(e);case 2:return function(u){return r(e,u)};case 3:return function(u,n){return r(e,u,n)};case 4:return function(u,n,i){return r(e,u,n,i)};case 5:return function(u,n,i,f){return r(e,u,n,i,f)};case 6:return function(u,n,i,f,E){return r(e,u,n,i,f,E)};case 7:return function(u,n,i,f,E,_){return r(e,u,n,i,f,E,_)};default:return o(r,[e])}}function T(r,e,t){var u=r.length;if(u===2)return r(e,t);switch(u){case 1:return o(r(e),[t]);case 2:return r(e,t);case 3:return function(n){return r(e,t,n)};case 4:return function(n,i){return r(e,t,n,i)};case 5:return function(n,i,f){return r(e,t,n,i,f)};case 6:return function(n,i,f,E){return r(e,t,n,i,f,E)};case 7:return function(n,i,f,E,_){return r(e,t,n,i,f,E,_)};default:return o(r,[e,t])}}var l=function(r){return typeof process<"u"&&process.platform==="win32"?"Win32":"Unix"};function v(r){if(typeof process>"u")return"";var e=process.argv;return e==null?"":e[0]}var s={contents:0};function N(r){return s.contents=s.contents+1|0,r+("/"+s.contents)}function w(r){return r==null?!1:typeof r.RE_EXN_ID=="string"}function O(r){return r===void 0?{BS_PRIVATE_NESTED_SOME_NONE:0}:r!==null&&r.BS_PRIVATE_NESTED_SOME_NONE!==void 0?{BS_PRIVATE_NESTED_SOME_NONE:r.BS_PRIVATE_NESTED_SOME_NONE+1|0}:r}function h(r){if(!(r!==null&&r.BS_PRIVATE_NESTED_SOME_NONE!==void 0))return r;var e=r.BS_PRIVATE_NESTED_SOME_NONE;if(e!==0)return{BS_PRIVATE_NESTED_SOME_NONE:e-1|0}}var D=N("Caml_js_exceptions.Error");function I(r){return w(r)?r:{RE_EXN_ID:D,_1:r}}function R(r,e){if(e in r)return O(r[e])}v();l();l();l();function g(r){return Number.isFinite(r)?Math.floor(r)===r:!1}var c=N("Json_decode.DecodeError");function y(r){if(typeof r=="number")return r;throw{RE_EXN_ID:c,_1:"Expected number, got "+JSON.stringify(r),Error:new Error}}function m(r){var e=y(r);if(g(e))return e;throw{RE_EXN_ID:c,_1:"Expected integer, got "+JSON.stringify(r),Error:new Error}}function A(r){if(typeof r=="string")return r;throw{RE_EXN_ID:c,_1:"Expected string, got "+JSON.stringify(r),Error:new Error}}function X(r,e,t){if(typeof t=="object"&&!Array.isArray(t)&&t!==null){var u=R(t,r);if(u!==void 0)try{return S(e,h(u))}catch(i){var n=I(i);throw n.RE_EXN_ID===c?{RE_EXN_ID:c,_1:n._1+(`
	at field '`+(r+"'")),Error:new Error}:n}else throw{RE_EXN_ID:c,_1:"Expected field '"+r+"'",Error:new Error}}else throw{RE_EXN_ID:c,_1:"Expected object, got "+JSON.stringify(t),Error:new Error}}export{m as $,S as _,O as a,T as b,X as f,A as s,h as v};