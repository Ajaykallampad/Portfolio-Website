(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var U0={exports:{}},Nc={},F0={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),wM=Symbol.for("react.portal"),AM=Symbol.for("react.fragment"),CM=Symbol.for("react.strict_mode"),RM=Symbol.for("react.profiler"),bM=Symbol.for("react.provider"),PM=Symbol.for("react.context"),LM=Symbol.for("react.forward_ref"),DM=Symbol.for("react.suspense"),NM=Symbol.for("react.memo"),IM=Symbol.for("react.lazy"),Op=Symbol.iterator;function UM(t){return t===null||typeof t!="object"?null:(t=Op&&t[Op]||t["@@iterator"],typeof t=="function"?t:null)}var O0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k0=Object.assign,B0={};function so(t,e,n){this.props=t,this.context=e,this.refs=B0,this.updater=n||O0}so.prototype.isReactComponent={};so.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};so.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function V0(){}V0.prototype=so.prototype;function ih(t,e,n){this.props=t,this.context=e,this.refs=B0,this.updater=n||O0}var rh=ih.prototype=new V0;rh.constructor=ih;k0(rh,so.prototype);rh.isPureReactComponent=!0;var kp=Array.isArray,z0=Object.prototype.hasOwnProperty,sh={current:null},H0={key:!0,ref:!0,__self:!0,__source:!0};function G0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)z0.call(e,i)&&!H0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:_a,type:t,key:s,ref:o,props:r,_owner:sh.current}}function FM(t,e){return{$$typeof:_a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function oh(t){return typeof t=="object"&&t!==null&&t.$$typeof===_a}function OM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bp=/\/+/g;function cu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?OM(""+t.key):e.toString(36)}function Cl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _a:case wM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+cu(o,0):i,kp(r)?(n="",t!=null&&(n=t.replace(Bp,"$&/")+"/"),Cl(r,e,n,"",function(c){return c})):r!=null&&(oh(r)&&(r=FM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Bp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",kp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+cu(s,a);o+=Cl(s,e,n,l,r)}else if(l=UM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+cu(s,a++),o+=Cl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ia(t,e,n){if(t==null)return t;var i=[],r=0;return Cl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function kM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},Rl={transition:null},BM={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:sh};function W0(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Ia,forEach:function(t,e,n){Ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ia(t,function(){e++}),e},toArray:function(t){return Ia(t,function(e){return e})||[]},only:function(t){if(!oh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=so;We.Fragment=AM;We.Profiler=RM;We.PureComponent=ih;We.StrictMode=CM;We.Suspense=DM;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BM;We.act=W0;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=k0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=sh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)z0.call(e,l)&&!H0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:_a,type:t.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:PM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bM,_context:t},t.Consumer=t};We.createElement=G0;We.createFactory=function(t){var e=G0.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:LM,render:t}};We.isValidElement=oh;We.lazy=function(t){return{$$typeof:IM,_payload:{_status:-1,_result:t},_init:kM}};We.memo=function(t,e){return{$$typeof:NM,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Rl.transition;Rl.transition={};try{t()}finally{Rl.transition=e}};We.unstable_act=W0;We.useCallback=function(t,e){return an.current.useCallback(t,e)};We.useContext=function(t){return an.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return an.current.useDeferredValue(t)};We.useEffect=function(t,e){return an.current.useEffect(t,e)};We.useId=function(){return an.current.useId()};We.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return an.current.useMemo(t,e)};We.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};We.useRef=function(t){return an.current.useRef(t)};We.useState=function(t){return an.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return an.current.useTransition()};We.version="18.3.1";F0.exports=We;var re=F0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VM=re,zM=Symbol.for("react.element"),HM=Symbol.for("react.fragment"),GM=Object.prototype.hasOwnProperty,WM=VM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jM={key:!0,ref:!0,__self:!0,__source:!0};function j0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)GM.call(e,i)&&!jM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:zM,type:t,key:s,ref:o,props:r,_owner:WM.current}}Nc.Fragment=HM;Nc.jsx=j0;Nc.jsxs=j0;U0.exports=Nc;var P=U0.exports,X0={exports:{}},Cn={},Y0={exports:{}},$0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,F){var O=D.length;D.push(F);e:for(;0<O;){var $=O-1>>>1,Z=D[$];if(0<r(Z,F))D[$]=F,D[O]=Z,O=$;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var F=D[0],O=D.pop();if(O!==F){D[0]=O;e:for(var $=0,Z=D.length,X=Z>>>1;$<X;){var K=2*($+1)-1,ce=D[K],pe=K+1,ve=D[pe];if(0>r(ce,O))pe<Z&&0>r(ve,ce)?(D[$]=ve,D[pe]=O,$=pe):(D[$]=ce,D[K]=O,$=K);else if(pe<Z&&0>r(ve,O))D[$]=ve,D[pe]=O,$=pe;else break e}}return F}function r(D,F){var O=D.sortIndex-F.sortIndex;return O!==0?O:D.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=D)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function x(D){if(y=!1,v(D),!g)if(n(l)!==null)g=!0,j(A);else{var F=n(c);F!==null&&q(x,F.startTime-D)}}function A(D,F){g=!1,y&&(y=!1,h(b),b=-1),p=!0;var O=d;try{for(v(F),f=n(l);f!==null&&(!(f.expirationTime>F)||D&&!U());){var $=f.callback;if(typeof $=="function"){f.callback=null,d=f.priorityLevel;var Z=$(f.expirationTime<=F);F=t.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(l)&&i(l),v(F)}else i(l);f=n(l)}if(f!==null)var X=!0;else{var K=n(c);K!==null&&q(x,K.startTime-F),X=!1}return X}finally{f=null,d=O,p=!1}}var C=!1,w=null,b=-1,S=5,M=-1;function U(){return!(t.unstable_now()-M<S)}function Y(){if(w!==null){var D=t.unstable_now();M=D;var F=!0;try{F=w(!0,D)}finally{F?J():(C=!1,w=null)}}else C=!1}var J;if(typeof _=="function")J=function(){_(Y)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,k=N.port2;N.port1.onmessage=Y,J=function(){k.postMessage(null)}}else J=function(){m(Y,0)};function j(D){w=D,C||(C=!0,J())}function q(D,F){b=m(function(){D(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,j(A))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var O=d;d=F;try{return D()}finally{d=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,F){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var O=d;d=D;try{return F()}finally{d=O}},t.unstable_scheduleCallback=function(D,F,O){var $=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?$+O:$):O=$,D){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=O+Z,D={id:u++,callback:F,priorityLevel:D,startTime:O,expirationTime:Z,sortIndex:-1},O>$?(D.sortIndex=O,e(c,D),n(l)===null&&D===n(c)&&(y?(h(b),b=-1):y=!0,q(x,O-$))):(D.sortIndex=Z,e(l,D),g||p||(g=!0,j(A))),D},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(D){var F=d;return function(){var O=d;d=F;try{return D.apply(this,arguments)}finally{d=O}}}})($0);Y0.exports=$0;var XM=Y0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YM=re,An=XM;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q0=new Set,$o={};function ts(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for($o[t]=e,t=0;t<e.length;t++)q0.add(e[t])}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pf=Object.prototype.hasOwnProperty,$M=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vp={},zp={};function qM(t){return Pf.call(zp,t)?!0:Pf.call(Vp,t)?!1:$M.test(t)?zp[t]=!0:(Vp[t]=!0,!1)}function KM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ZM(t,e,n,i){if(e===null||typeof e>"u"||KM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var ah=/[\-:]([a-z])/g;function lh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ah,lh);Gt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ah,lh);Gt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ah,lh);Gt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function ch(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ZM(e,n,r,i)&&(n=null),i||r===null?qM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=YM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ua=Symbol.for("react.element"),Ss=Symbol.for("react.portal"),Ms=Symbol.for("react.fragment"),uh=Symbol.for("react.strict_mode"),Lf=Symbol.for("react.profiler"),K0=Symbol.for("react.provider"),Z0=Symbol.for("react.context"),fh=Symbol.for("react.forward_ref"),Df=Symbol.for("react.suspense"),Nf=Symbol.for("react.suspense_list"),dh=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),Q0=Symbol.for("react.offscreen"),Hp=Symbol.iterator;function mo(t){return t===null||typeof t!="object"?null:(t=Hp&&t[Hp]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,uu;function bo(t){if(uu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uu=e&&e[1]||""}return`
`+uu+t}var fu=!1;function du(t,e){if(!t||fu)return"";fu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{fu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bo(t):""}function QM(t){switch(t.tag){case 5:return bo(t.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return t=du(t.type,!1),t;case 11:return t=du(t.type.render,!1),t;case 1:return t=du(t.type,!0),t;default:return""}}function If(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ms:return"Fragment";case Ss:return"Portal";case Lf:return"Profiler";case uh:return"StrictMode";case Df:return"Suspense";case Nf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Z0:return(t.displayName||"Context")+".Consumer";case K0:return(t._context.displayName||"Context")+".Provider";case fh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dh:return e=t.displayName||null,e!==null?e:If(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return If(t(e))}catch{}}return null}function JM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return If(e);case 8:return e===uh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function J0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function eE(t){var e=J0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fa(t){t._valueTracker||(t._valueTracker=eE(t))}function e_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=J0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function $l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uf(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function t_(t,e){e=e.checked,e!=null&&ch(t,"checked",e,!1)}function Ff(t,e){t_(t,e);var n=dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Of(t,e.type,n):e.hasOwnProperty("defaultValue")&&Of(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Of(t,e,n){(e!=="number"||$l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Po=Array.isArray;function ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function kf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Po(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function n_(t,e){var n=dr(e.value),i=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Xp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function i_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?i_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Oa,r_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Oa=Oa||document.createElement("div"),Oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Oa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tE=["Webkit","ms","Moz","O"];Object.keys(Io).forEach(function(t){tE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Io[e]=Io[t]})});function s_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Io.hasOwnProperty(t)&&Io[t]?(""+e).trim():e+"px"}function o_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=s_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var nE=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vf(t,e){if(e){if(nE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function zf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hf=null;function hh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gf=null,Bs=null,Vs=null;function Yp(t){if(t=Sa(t)){if(typeof Gf!="function")throw Error(te(280));var e=t.stateNode;e&&(e=kc(e),Gf(t.stateNode,t.type,e))}}function a_(t){Bs?Vs?Vs.push(t):Vs=[t]:Bs=t}function l_(){if(Bs){var t=Bs,e=Vs;if(Vs=Bs=null,Yp(t),e)for(t=0;t<e.length;t++)Yp(e[t])}}function c_(t,e){return t(e)}function u_(){}var hu=!1;function f_(t,e,n){if(hu)return t(e,n);hu=!0;try{return c_(t,e,n)}finally{hu=!1,(Bs!==null||Vs!==null)&&(u_(),l_())}}function Ko(t,e){var n=t.stateNode;if(n===null)return null;var i=kc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Wf=!1;if(Pi)try{var go={};Object.defineProperty(go,"passive",{get:function(){Wf=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{Wf=!1}function iE(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Uo=!1,ql=null,Kl=!1,jf=null,rE={onError:function(t){Uo=!0,ql=t}};function sE(t,e,n,i,r,s,o,a,l){Uo=!1,ql=null,iE.apply(rE,arguments)}function oE(t,e,n,i,r,s,o,a,l){if(sE.apply(this,arguments),Uo){if(Uo){var c=ql;Uo=!1,ql=null}else throw Error(te(198));Kl||(Kl=!0,jf=c)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function d_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $p(t){if(ns(t)!==t)throw Error(te(188))}function aE(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return $p(r),t;if(s===i)return $p(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function h_(t){return t=aE(t),t!==null?p_(t):null}function p_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=p_(t);if(e!==null)return e;t=t.sibling}return null}var m_=An.unstable_scheduleCallback,qp=An.unstable_cancelCallback,lE=An.unstable_shouldYield,cE=An.unstable_requestPaint,xt=An.unstable_now,uE=An.unstable_getCurrentPriorityLevel,ph=An.unstable_ImmediatePriority,g_=An.unstable_UserBlockingPriority,Zl=An.unstable_NormalPriority,fE=An.unstable_LowPriority,v_=An.unstable_IdlePriority,Ic=null,di=null;function dE(t){if(di&&typeof di.onCommitFiberRoot=="function")try{di.onCommitFiberRoot(Ic,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:mE,hE=Math.log,pE=Math.LN2;function mE(t){return t>>>=0,t===0?32:31-(hE(t)/pE|0)|0}var ka=64,Ba=4194304;function Lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Lo(a):(s&=o,s!==0&&(i=Lo(s)))}else o=n&~r,o!==0?i=Lo(o):s!==0&&(i=Lo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function gE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ei(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=gE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Xf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function __(){var t=ka;return ka<<=1,!(ka&4194240)&&(ka=64),t}function pu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ya(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function _E(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function mh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var qe=0;function y_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var x_,gh,S_,M_,E_,Yf=!1,Va=[],tr=null,nr=null,ir=null,Zo=new Map,Qo=new Map,Yi=[],yE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kp(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(e.pointerId)}}function vo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Sa(e),e!==null&&gh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function xE(t,e,n,i,r){switch(e){case"focusin":return tr=vo(tr,t,e,n,i,r),!0;case"dragenter":return nr=vo(nr,t,e,n,i,r),!0;case"mouseover":return ir=vo(ir,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Zo.set(s,vo(Zo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Qo.set(s,vo(Qo.get(s)||null,t,e,n,i,r)),!0}return!1}function T_(t){var e=Ur(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=d_(n),e!==null){t.blockedOn=e,E_(t.priority,function(){S_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Hf=i,n.target.dispatchEvent(i),Hf=null}else return e=Sa(n),e!==null&&gh(e),t.blockedOn=n,!1;e.shift()}return!0}function Zp(t,e,n){bl(t)&&n.delete(e)}function SE(){Yf=!1,tr!==null&&bl(tr)&&(tr=null),nr!==null&&bl(nr)&&(nr=null),ir!==null&&bl(ir)&&(ir=null),Zo.forEach(Zp),Qo.forEach(Zp)}function _o(t,e){t.blockedOn===e&&(t.blockedOn=null,Yf||(Yf=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,SE)))}function Jo(t){function e(r){return _o(r,t)}if(0<Va.length){_o(Va[0],t);for(var n=1;n<Va.length;n++){var i=Va[n];i.blockedOn===t&&(i.blockedOn=null)}}for(tr!==null&&_o(tr,t),nr!==null&&_o(nr,t),ir!==null&&_o(ir,t),Zo.forEach(e),Qo.forEach(e),n=0;n<Yi.length;n++)i=Yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Yi.length&&(n=Yi[0],n.blockedOn===null);)T_(n),n.blockedOn===null&&Yi.shift()}var zs=Ui.ReactCurrentBatchConfig,Jl=!0;function ME(t,e,n,i){var r=qe,s=zs.transition;zs.transition=null;try{qe=1,vh(t,e,n,i)}finally{qe=r,zs.transition=s}}function EE(t,e,n,i){var r=qe,s=zs.transition;zs.transition=null;try{qe=4,vh(t,e,n,i)}finally{qe=r,zs.transition=s}}function vh(t,e,n,i){if(Jl){var r=$f(t,e,n,i);if(r===null)Tu(t,e,i,ec,n),Kp(t,i);else if(xE(r,t,e,n,i))i.stopPropagation();else if(Kp(t,i),e&4&&-1<yE.indexOf(t)){for(;r!==null;){var s=Sa(r);if(s!==null&&x_(s),s=$f(t,e,n,i),s===null&&Tu(t,e,i,ec,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Tu(t,e,i,null,n)}}var ec=null;function $f(t,e,n,i){if(ec=null,t=hh(i),t=Ur(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=d_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ec=t,null}function w_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uE()){case ph:return 1;case g_:return 4;case Zl:case fE:return 16;case v_:return 536870912;default:return 16}default:return 16}}var qi=null,_h=null,Pl=null;function A_(){if(Pl)return Pl;var t,e=_h,n=e.length,i,r="value"in qi?qi.value:qi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Pl=r.slice(t,1<i?1-i:void 0)}function Ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function za(){return!0}function Qp(){return!1}function Rn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?za:Qp,this.isPropagationStopped=Qp,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yh=Rn(oo),xa=ht({},oo,{view:0,detail:0}),TE=Rn(xa),mu,gu,yo,Uc=ht({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(mu=t.screenX-yo.screenX,gu=t.screenY-yo.screenY):gu=mu=0,yo=t),mu)},movementY:function(t){return"movementY"in t?t.movementY:gu}}),Jp=Rn(Uc),wE=ht({},Uc,{dataTransfer:0}),AE=Rn(wE),CE=ht({},xa,{relatedTarget:0}),vu=Rn(CE),RE=ht({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),bE=Rn(RE),PE=ht({},oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LE=Rn(PE),DE=ht({},oo,{data:0}),em=Rn(DE),NE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=UE[t])?!!e[t]:!1}function xh(){return FE}var OE=ht({},xa,{key:function(t){if(t.key){var e=NE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?IE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xh,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kE=Rn(OE),BE=ht({},Uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tm=Rn(BE),VE=ht({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xh}),zE=Rn(VE),HE=ht({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),GE=Rn(HE),WE=ht({},Uc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jE=Rn(WE),XE=[9,13,27,32],Sh=Pi&&"CompositionEvent"in window,Fo=null;Pi&&"documentMode"in document&&(Fo=document.documentMode);var YE=Pi&&"TextEvent"in window&&!Fo,C_=Pi&&(!Sh||Fo&&8<Fo&&11>=Fo),nm=" ",im=!1;function R_(t,e){switch(t){case"keyup":return XE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function b_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function $E(t,e){switch(t){case"compositionend":return b_(e);case"keypress":return e.which!==32?null:(im=!0,nm);case"textInput":return t=e.data,t===nm&&im?null:t;default:return null}}function qE(t,e){if(Es)return t==="compositionend"||!Sh&&R_(t,e)?(t=A_(),Pl=_h=qi=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return C_&&e.locale!=="ko"?null:e.data;default:return null}}var KE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!KE[t.type]:e==="textarea"}function P_(t,e,n,i){a_(i),e=tc(e,"onChange"),0<e.length&&(n=new yh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Oo=null,ea=null;function ZE(t){z_(t,0)}function Fc(t){var e=As(t);if(e_(e))return t}function QE(t,e){if(t==="change")return e}var L_=!1;if(Pi){var _u;if(Pi){var yu="oninput"in document;if(!yu){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),yu=typeof sm.oninput=="function"}_u=yu}else _u=!1;L_=_u&&(!document.documentMode||9<document.documentMode)}function om(){Oo&&(Oo.detachEvent("onpropertychange",D_),ea=Oo=null)}function D_(t){if(t.propertyName==="value"&&Fc(ea)){var e=[];P_(e,ea,t,hh(t)),f_(ZE,e)}}function JE(t,e,n){t==="focusin"?(om(),Oo=e,ea=n,Oo.attachEvent("onpropertychange",D_)):t==="focusout"&&om()}function eT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fc(ea)}function tT(t,e){if(t==="click")return Fc(e)}function nT(t,e){if(t==="input"||t==="change")return Fc(e)}function iT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ri=typeof Object.is=="function"?Object.is:iT;function ta(t,e){if(ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Pf.call(e,r)||!ri(t[r],e[r]))return!1}return!0}function am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lm(t,e){var n=am(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=am(n)}}function N_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?N_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function I_(){for(var t=window,e=$l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$l(t.document)}return e}function Mh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rT(t){var e=I_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&N_(n.ownerDocument.documentElement,n)){if(i!==null&&Mh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=lm(n,s);var o=lm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sT=Pi&&"documentMode"in document&&11>=document.documentMode,Ts=null,qf=null,ko=null,Kf=!1;function cm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kf||Ts==null||Ts!==$l(i)||(i=Ts,"selectionStart"in i&&Mh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ko&&ta(ko,i)||(ko=i,i=tc(qf,"onSelect"),0<i.length&&(e=new yh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ts)))}function Ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},xu={},U_={};Pi&&(U_=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Oc(t){if(xu[t])return xu[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in U_)return xu[t]=e[n];return t}var F_=Oc("animationend"),O_=Oc("animationiteration"),k_=Oc("animationstart"),B_=Oc("transitionend"),V_=new Map,um="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){V_.set(t,e),ts(e,[t])}for(var Su=0;Su<um.length;Su++){var Mu=um[Su],oT=Mu.toLowerCase(),aT=Mu[0].toUpperCase()+Mu.slice(1);vr(oT,"on"+aT)}vr(F_,"onAnimationEnd");vr(O_,"onAnimationIteration");vr(k_,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(B_,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function fm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,oE(i,e,void 0,t),t.currentTarget=null}function z_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;fm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;fm(r,a,c),s=l}}}if(Kl)throw t=jf,Kl=!1,jf=null,t}function rt(t,e){var n=e[td];n===void 0&&(n=e[td]=new Set);var i=t+"__bubble";n.has(i)||(H_(e,t,2,!1),n.add(i))}function Eu(t,e,n){var i=0;e&&(i|=4),H_(n,t,i,e)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function na(t){if(!t[Ga]){t[Ga]=!0,q0.forEach(function(n){n!=="selectionchange"&&(lT.has(n)||Eu(n,!1,t),Eu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ga]||(e[Ga]=!0,Eu("selectionchange",!1,e))}}function H_(t,e,n,i){switch(w_(e)){case 1:var r=ME;break;case 4:r=EE;break;default:r=vh}n=r.bind(null,e,n,t),r=void 0,!Wf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Tu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ur(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}f_(function(){var c=s,u=hh(n),f=[];e:{var d=V_.get(t);if(d!==void 0){var p=yh,g=t;switch(t){case"keypress":if(Ll(n)===0)break e;case"keydown":case"keyup":p=kE;break;case"focusin":g="focus",p=vu;break;case"focusout":g="blur",p=vu;break;case"beforeblur":case"afterblur":p=vu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=AE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=zE;break;case F_:case O_:case k_:p=bE;break;case B_:p=GE;break;case"scroll":p=TE;break;case"wheel":p=jE;break;case"copy":case"cut":case"paste":p=LE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=tm}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var _=c,v;_!==null;){v=_;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,h!==null&&(x=Ko(_,h),x!=null&&y.push(ia(_,x,v)))),m)break;_=_.return}0<y.length&&(d=new p(d,g,null,n,u),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Hf&&(g=n.relatedTarget||n.fromElement)&&(Ur(g)||g[Li]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Ur(g):null,g!==null&&(m=ns(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=Jp,x="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=tm,x="onPointerLeave",h="onPointerEnter",_="pointer"),m=p==null?d:As(p),v=g==null?d:As(g),d=new y(x,_+"leave",p,n,u),d.target=m,d.relatedTarget=v,x=null,Ur(u)===c&&(y=new y(h,_+"enter",g,n,u),y.target=v,y.relatedTarget=m,x=y),m=x,p&&g)t:{for(y=p,h=g,_=0,v=y;v;v=is(v))_++;for(v=0,x=h;x;x=is(x))v++;for(;0<_-v;)y=is(y),_--;for(;0<v-_;)h=is(h),v--;for(;_--;){if(y===h||h!==null&&y===h.alternate)break t;y=is(y),h=is(h)}y=null}else y=null;p!==null&&dm(f,d,p,y,!1),g!==null&&m!==null&&dm(f,m,g,y,!0)}}e:{if(d=c?As(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var A=QE;else if(rm(d))if(L_)A=nT;else{A=eT;var C=JE}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=tT);if(A&&(A=A(t,c))){P_(f,A,n,u);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Of(d,"number",d.value)}switch(C=c?As(c):window,t){case"focusin":(rm(C)||C.contentEditable==="true")&&(Ts=C,qf=c,ko=null);break;case"focusout":ko=qf=Ts=null;break;case"mousedown":Kf=!0;break;case"contextmenu":case"mouseup":case"dragend":Kf=!1,cm(f,n,u);break;case"selectionchange":if(sT)break;case"keydown":case"keyup":cm(f,n,u)}var w;if(Sh)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Es?R_(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(C_&&n.locale!=="ko"&&(Es||b!=="onCompositionStart"?b==="onCompositionEnd"&&Es&&(w=A_()):(qi=u,_h="value"in qi?qi.value:qi.textContent,Es=!0)),C=tc(c,b),0<C.length&&(b=new em(b,t,null,n,u),f.push({event:b,listeners:C}),w?b.data=w:(w=b_(n),w!==null&&(b.data=w)))),(w=YE?$E(t,n):qE(t,n))&&(c=tc(c,"onBeforeInput"),0<c.length&&(u=new em("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=w))}z_(f,e)})}function ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ko(t,n),s!=null&&i.unshift(ia(t,s,r)),s=Ko(t,e),s!=null&&i.push(ia(t,s,r))),t=t.return}return i}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ko(n,s),l!=null&&o.unshift(ia(n,l,a))):r||(l=Ko(n,s),l!=null&&o.push(ia(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cT=/\r\n?/g,uT=/\u0000|\uFFFD/g;function hm(t){return(typeof t=="string"?t:""+t).replace(cT,`
`).replace(uT,"")}function Wa(t,e,n){if(e=hm(e),hm(t)!==e&&n)throw Error(te(425))}function nc(){}var Zf=null,Qf=null;function Jf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ed=typeof setTimeout=="function"?setTimeout:void 0,fT=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,dT=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(t){return pm.resolve(null).then(t).catch(hT)}:ed;function hT(t){setTimeout(function(){throw t})}function wu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Jo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Jo(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ao=Math.random().toString(36).slice(2),fi="__reactFiber$"+ao,ra="__reactProps$"+ao,Li="__reactContainer$"+ao,td="__reactEvents$"+ao,pT="__reactListeners$"+ao,mT="__reactHandles$"+ao;function Ur(t){var e=t[fi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Li]||n[fi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mm(t);t!==null;){if(n=t[fi])return n;t=mm(t)}return e}t=n,n=t.parentNode}return null}function Sa(t){return t=t[fi]||t[Li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function kc(t){return t[ra]||null}var nd=[],Cs=-1;function _r(t){return{current:t}}function at(t){0>Cs||(t.current=nd[Cs],nd[Cs]=null,Cs--)}function it(t,e){Cs++,nd[Cs]=t.current,t.current=e}var hr={},Kt=_r(hr),hn=_r(!1),$r=hr;function Ys(t,e){var n=t.type.contextTypes;if(!n)return hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function ic(){at(hn),at(Kt)}function gm(t,e,n){if(Kt.current!==hr)throw Error(te(168));it(Kt,e),it(hn,n)}function G_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,JM(t)||"Unknown",r));return ht({},n,i)}function rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,$r=Kt.current,it(Kt,t),it(hn,hn.current),!0}function vm(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=G_(t,e,$r),i.__reactInternalMemoizedMergedChildContext=t,at(hn),at(Kt),it(Kt,t)):at(hn),it(hn,n)}var Ti=null,Bc=!1,Au=!1;function W_(t){Ti===null?Ti=[t]:Ti.push(t)}function gT(t){Bc=!0,W_(t)}function yr(){if(!Au&&Ti!==null){Au=!0;var t=0,e=qe;try{var n=Ti;for(qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ti=null,Bc=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(t+1)),m_(ph,yr),r}finally{qe=e,Au=!1}}return null}var Rs=[],bs=0,sc=null,oc=0,Ln=[],Dn=0,qr=null,Ai=1,Ci="";function Rr(t,e){Rs[bs++]=oc,Rs[bs++]=sc,sc=t,oc=e}function j_(t,e,n){Ln[Dn++]=Ai,Ln[Dn++]=Ci,Ln[Dn++]=qr,qr=t;var i=Ai;t=Ci;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var s=32-ei(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ai=1<<32-ei(e)+r|n<<r|i,Ci=s+t}else Ai=1<<s|n<<r|i,Ci=t}function Eh(t){t.return!==null&&(Rr(t,1),j_(t,1,0))}function Th(t){for(;t===sc;)sc=Rs[--bs],Rs[bs]=null,oc=Rs[--bs],Rs[bs]=null;for(;t===qr;)qr=Ln[--Dn],Ln[Dn]=null,Ci=Ln[--Dn],Ln[Dn]=null,Ai=Ln[--Dn],Ln[Dn]=null}var En=null,Mn=null,lt=!1,Kn=null;function X_(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _m(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Mn=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:Ai,overflow:Ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Mn=null,!0):!1;default:return!1}}function id(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rd(t){if(lt){var e=Mn;if(e){var n=e;if(!_m(t,e)){if(id(t))throw Error(te(418));e=rr(n.nextSibling);var i=En;e&&_m(t,e)?X_(i,n):(t.flags=t.flags&-4097|2,lt=!1,En=t)}}else{if(id(t))throw Error(te(418));t.flags=t.flags&-4097|2,lt=!1,En=t}}}function ym(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function ja(t){if(t!==En)return!1;if(!lt)return ym(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jf(t.type,t.memoizedProps)),e&&(e=Mn)){if(id(t))throw Y_(),Error(te(418));for(;e;)X_(t,e),e=rr(e.nextSibling)}if(ym(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=En?rr(t.stateNode.nextSibling):null;return!0}function Y_(){for(var t=Mn;t;)t=rr(t.nextSibling)}function $s(){Mn=En=null,lt=!1}function wh(t){Kn===null?Kn=[t]:Kn.push(t)}var vT=Ui.ReactCurrentBatchConfig;function xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Xa(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xm(t){var e=t._init;return e(t._payload)}function $_(t){function e(h,_){if(t){var v=h.deletions;v===null?(h.deletions=[_],h.flags|=16):v.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=lr(h,_),h.index=0,h.sibling=null,h}function s(h,_,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<_?(h.flags|=2,_):v):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,v,x){return _===null||_.tag!==6?(_=Nu(v,h.mode,x),_.return=h,_):(_=r(_,v),_.return=h,_)}function l(h,_,v,x){var A=v.type;return A===Ms?u(h,_,v.props.children,x,v.key):_!==null&&(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ji&&xm(A)===_.type)?(x=r(_,v.props),x.ref=xo(h,_,v),x.return=h,x):(x=kl(v.type,v.key,v.props,null,h.mode,x),x.ref=xo(h,_,v),x.return=h,x)}function c(h,_,v,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Iu(v,h.mode,x),_.return=h,_):(_=r(_,v.children||[]),_.return=h,_)}function u(h,_,v,x,A){return _===null||_.tag!==7?(_=zr(v,h.mode,x,A),_.return=h,_):(_=r(_,v),_.return=h,_)}function f(h,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Nu(""+_,h.mode,v),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ua:return v=kl(_.type,_.key,_.props,null,h.mode,v),v.ref=xo(h,null,_),v.return=h,v;case Ss:return _=Iu(_,h.mode,v),_.return=h,_;case ji:var x=_._init;return f(h,x(_._payload),v)}if(Po(_)||mo(_))return _=zr(_,h.mode,v,null),_.return=h,_;Xa(h,_)}return null}function d(h,_,v,x){var A=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:a(h,_,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ua:return v.key===A?l(h,_,v,x):null;case Ss:return v.key===A?c(h,_,v,x):null;case ji:return A=v._init,d(h,_,A(v._payload),x)}if(Po(v)||mo(v))return A!==null?null:u(h,_,v,x,null);Xa(h,v)}return null}function p(h,_,v,x,A){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(v)||null,a(_,h,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ua:return h=h.get(x.key===null?v:x.key)||null,l(_,h,x,A);case Ss:return h=h.get(x.key===null?v:x.key)||null,c(_,h,x,A);case ji:var C=x._init;return p(h,_,v,C(x._payload),A)}if(Po(x)||mo(x))return h=h.get(v)||null,u(_,h,x,A,null);Xa(_,x)}return null}function g(h,_,v,x){for(var A=null,C=null,w=_,b=_=0,S=null;w!==null&&b<v.length;b++){w.index>b?(S=w,w=null):S=w.sibling;var M=d(h,w,v[b],x);if(M===null){w===null&&(w=S);break}t&&w&&M.alternate===null&&e(h,w),_=s(M,_,b),C===null?A=M:C.sibling=M,C=M,w=S}if(b===v.length)return n(h,w),lt&&Rr(h,b),A;if(w===null){for(;b<v.length;b++)w=f(h,v[b],x),w!==null&&(_=s(w,_,b),C===null?A=w:C.sibling=w,C=w);return lt&&Rr(h,b),A}for(w=i(h,w);b<v.length;b++)S=p(w,h,b,v[b],x),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?b:S.key),_=s(S,_,b),C===null?A=S:C.sibling=S,C=S);return t&&w.forEach(function(U){return e(h,U)}),lt&&Rr(h,b),A}function y(h,_,v,x){var A=mo(v);if(typeof A!="function")throw Error(te(150));if(v=A.call(v),v==null)throw Error(te(151));for(var C=A=null,w=_,b=_=0,S=null,M=v.next();w!==null&&!M.done;b++,M=v.next()){w.index>b?(S=w,w=null):S=w.sibling;var U=d(h,w,M.value,x);if(U===null){w===null&&(w=S);break}t&&w&&U.alternate===null&&e(h,w),_=s(U,_,b),C===null?A=U:C.sibling=U,C=U,w=S}if(M.done)return n(h,w),lt&&Rr(h,b),A;if(w===null){for(;!M.done;b++,M=v.next())M=f(h,M.value,x),M!==null&&(_=s(M,_,b),C===null?A=M:C.sibling=M,C=M);return lt&&Rr(h,b),A}for(w=i(h,w);!M.done;b++,M=v.next())M=p(w,h,b,M.value,x),M!==null&&(t&&M.alternate!==null&&w.delete(M.key===null?b:M.key),_=s(M,_,b),C===null?A=M:C.sibling=M,C=M);return t&&w.forEach(function(Y){return e(h,Y)}),lt&&Rr(h,b),A}function m(h,_,v,x){if(typeof v=="object"&&v!==null&&v.type===Ms&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ua:e:{for(var A=v.key,C=_;C!==null;){if(C.key===A){if(A=v.type,A===Ms){if(C.tag===7){n(h,C.sibling),_=r(C,v.props.children),_.return=h,h=_;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ji&&xm(A)===C.type){n(h,C.sibling),_=r(C,v.props),_.ref=xo(h,C,v),_.return=h,h=_;break e}n(h,C);break}else e(h,C);C=C.sibling}v.type===Ms?(_=zr(v.props.children,h.mode,x,v.key),_.return=h,h=_):(x=kl(v.type,v.key,v.props,null,h.mode,x),x.ref=xo(h,_,v),x.return=h,h=x)}return o(h);case Ss:e:{for(C=v.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(h,_.sibling),_=r(_,v.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=Iu(v,h.mode,x),_.return=h,h=_}return o(h);case ji:return C=v._init,m(h,_,C(v._payload),x)}if(Po(v))return g(h,_,v,x);if(mo(v))return y(h,_,v,x);Xa(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,v),_.return=h,h=_):(n(h,_),_=Nu(v,h.mode,x),_.return=h,h=_),o(h)):n(h,_)}return m}var qs=$_(!0),q_=$_(!1),ac=_r(null),lc=null,Ps=null,Ah=null;function Ch(){Ah=Ps=lc=null}function Rh(t){var e=ac.current;at(ac),t._currentValue=e}function sd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Hs(t,e){lc=t,Ah=Ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(Ah!==t)if(t={context:t,memoizedValue:e,next:null},Ps===null){if(lc===null)throw Error(te(308));Ps=t,lc.dependencies={lanes:0,firstContext:t}}else Ps=Ps.next=t;return e}var Fr=null;function bh(t){Fr===null?Fr=[t]:Fr.push(t)}function K_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,bh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xi=!1;function Ph(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Z_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,bh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function Dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,mh(t,n)}}function Sm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cc(t,e,n,i){var r=t.updateQueue;Xi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(d=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=ht({},f,d);break e;case 2:Xi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Zr|=o,t.lanes=o,t.memoizedState=f}}function Mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Ma={},hi=_r(Ma),sa=_r(Ma),oa=_r(Ma);function Or(t){if(t===Ma)throw Error(te(174));return t}function Lh(t,e){switch(it(oa,e),it(sa,t),it(hi,Ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bf(e,t)}at(hi),it(hi,e)}function Ks(){at(hi),at(sa),at(oa)}function Q_(t){Or(oa.current);var e=Or(hi.current),n=Bf(e,t.type);e!==n&&(it(sa,t),it(hi,n))}function Dh(t){sa.current===t&&(at(hi),at(sa))}var ft=_r(0);function uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cu=[];function Nh(){for(var t=0;t<Cu.length;t++)Cu[t]._workInProgressVersionPrimary=null;Cu.length=0}var Nl=Ui.ReactCurrentDispatcher,Ru=Ui.ReactCurrentBatchConfig,Kr=0,dt=null,Ct=null,It=null,fc=!1,Bo=!1,aa=0,_T=0;function jt(){throw Error(te(321))}function Ih(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ri(t[n],e[n]))return!1;return!0}function Uh(t,e,n,i,r,s){if(Kr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nl.current=t===null||t.memoizedState===null?MT:ET,t=n(i,r),Bo){s=0;do{if(Bo=!1,aa=0,25<=s)throw Error(te(301));s+=1,It=Ct=null,e.updateQueue=null,Nl.current=TT,t=n(i,r)}while(Bo)}if(Nl.current=dc,e=Ct!==null&&Ct.next!==null,Kr=0,It=Ct=dt=null,fc=!1,e)throw Error(te(300));return t}function Fh(){var t=aa!==0;return aa=0,t}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?dt.memoizedState=It=t:It=It.next=t,It}function zn(){if(Ct===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=It===null?dt.memoizedState:It.next;if(e!==null)It=e,Ct=t;else{if(t===null)throw Error(te(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},It===null?dt.memoizedState=It=t:It=It.next=t}return It}function la(t,e){return typeof e=="function"?e(t):e}function bu(t){var e=zn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Kr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,dt.lanes|=u,Zr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ri(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pu(t){var e=zn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ri(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function J_(){}function ey(t,e){var n=dt,i=zn(),r=e(),s=!ri(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,Oh(iy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,ca(9,ny.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(te(349));Kr&30||ty(n,e,r)}return r}function ty(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ny(t,e,n,i){e.value=n,e.getSnapshot=i,ry(e)&&sy(t)}function iy(t,e,n){return n(function(){ry(e)&&sy(t)})}function ry(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ri(t,n)}catch{return!0}}function sy(t){var e=Di(t,1);e!==null&&ti(e,t,1,-1)}function Em(t){var e=ai();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},e.queue=t,t=t.dispatch=ST.bind(null,dt,t),[e.memoizedState,t]}function ca(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function oy(){return zn().memoizedState}function Il(t,e,n,i){var r=ai();dt.flags|=t,r.memoizedState=ca(1|e,n,void 0,i===void 0?null:i)}function Vc(t,e,n,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&Ih(i,o.deps)){r.memoizedState=ca(e,n,s,i);return}}dt.flags|=t,r.memoizedState=ca(1|e,n,s,i)}function Tm(t,e){return Il(8390656,8,t,e)}function Oh(t,e){return Vc(2048,8,t,e)}function ay(t,e){return Vc(4,2,t,e)}function ly(t,e){return Vc(4,4,t,e)}function cy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function uy(t,e,n){return n=n!=null?n.concat([t]):null,Vc(4,4,cy.bind(null,e,t),n)}function kh(){}function fy(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ih(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function dy(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ih(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function hy(t,e,n){return Kr&21?(ri(n,e)||(n=__(),dt.lanes|=n,Zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function yT(t,e){var n=qe;qe=n!==0&&4>n?n:4,t(!0);var i=Ru.transition;Ru.transition={};try{t(!1),e()}finally{qe=n,Ru.transition=i}}function py(){return zn().memoizedState}function xT(t,e,n){var i=ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},my(t))gy(e,n);else if(n=K_(t,e,n,i),n!==null){var r=on();ti(n,t,i,r),vy(n,e,i)}}function ST(t,e,n){var i=ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(my(t))gy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ri(a,o)){var l=e.interleaved;l===null?(r.next=r,bh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=K_(t,e,r,i),n!==null&&(r=on(),ti(n,t,i,r),vy(n,e,i))}}function my(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function gy(t,e){Bo=fc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,mh(t,n)}}var dc={readContext:Vn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},MT={readContext:Vn,useCallback:function(t,e){return ai().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:Tm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Il(4194308,4,cy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Il(4194308,4,t,e)},useInsertionEffect:function(t,e){return Il(4,2,t,e)},useMemo:function(t,e){var n=ai();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ai();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=xT.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=ai();return t={current:t},e.memoizedState=t},useState:Em,useDebugValue:kh,useDeferredValue:function(t){return ai().memoizedState=t},useTransition:function(){var t=Em(!1),e=t[0];return t=yT.bind(null,t[1]),ai().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=ai();if(lt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Ut===null)throw Error(te(349));Kr&30||ty(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Tm(iy.bind(null,i,s,t),[t]),i.flags|=2048,ca(9,ny.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ai(),e=Ut.identifierPrefix;if(lt){var n=Ci,i=Ai;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_T++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ET={readContext:Vn,useCallback:fy,useContext:Vn,useEffect:Oh,useImperativeHandle:uy,useInsertionEffect:ay,useLayoutEffect:ly,useMemo:dy,useReducer:bu,useRef:oy,useState:function(){return bu(la)},useDebugValue:kh,useDeferredValue:function(t){var e=zn();return hy(e,Ct.memoizedState,t)},useTransition:function(){var t=bu(la)[0],e=zn().memoizedState;return[t,e]},useMutableSource:J_,useSyncExternalStore:ey,useId:py,unstable_isNewReconciler:!1},TT={readContext:Vn,useCallback:fy,useContext:Vn,useEffect:Oh,useImperativeHandle:uy,useInsertionEffect:ay,useLayoutEffect:ly,useMemo:dy,useReducer:Pu,useRef:oy,useState:function(){return Pu(la)},useDebugValue:kh,useDeferredValue:function(t){var e=zn();return Ct===null?e.memoizedState=t:hy(e,Ct.memoizedState,t)},useTransition:function(){var t=Pu(la)[0],e=zn().memoizedState;return[t,e]},useMutableSource:J_,useSyncExternalStore:ey,useId:py,unstable_isNewReconciler:!1};function $n(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function od(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zc={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=ar(t),s=bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(ti(e,t,r,i),Dl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=ar(t),s=bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(ti(e,t,r,i),Dl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=ar(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=sr(t,r,i),e!==null&&(ti(e,t,i,n),Dl(e,t,i))}};function wm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ta(n,i)||!ta(r,s):!0}function _y(t,e,n){var i=!1,r=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=pn(e)?$r:Kt.current,i=e.contextTypes,s=(i=i!=null)?Ys(t,r):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Am(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&zc.enqueueReplaceState(e,e.state,null)}function ad(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ph(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=pn(e)?$r:Kt.current,r.context=Ys(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(od(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&zc.enqueueReplaceState(r,r.state,null),cc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e){try{var n="",i=e;do n+=QM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Lu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ld(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wT=typeof WeakMap=="function"?WeakMap:Map;function yy(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){pc||(pc=!0,_d=i),ld(t,e)},n}function xy(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ld(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ld(t,e),typeof i!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new wT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=BT.bind(null,t,e,n),e.then(t,t))}function Rm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var AT=Ui.ReactCurrentOwner,dn=!1;function tn(t,e,n,i){e.child=t===null?q_(e,null,n,i):qs(e,t.child,n,i)}function Pm(t,e,n,i,r){n=n.render;var s=e.ref;return Hs(e,r),i=Uh(t,e,n,i,s,r),n=Fh(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(lt&&n&&Eh(e),e.flags|=1,tn(t,e,i,r),e.child)}function Lm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Xh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Sy(t,e,s,i,r)):(t=kl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ta,n(o,i)&&t.ref===e.ref)return Ni(t,e,r)}return e.flags|=1,t=lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Sy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ta(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,Ni(t,e,r)}return cd(t,e,n,i,r)}function My(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(Ds,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(Ds,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(Ds,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(Ds,Sn),Sn|=i;return tn(t,e,r,n),e.child}function Ey(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cd(t,e,n,i,r){var s=pn(n)?$r:Kt.current;return s=Ys(e,s),Hs(e,r),n=Uh(t,e,n,i,s,r),i=Fh(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(lt&&i&&Eh(e),e.flags|=1,tn(t,e,n,r),e.child)}function Dm(t,e,n,i,r){if(pn(n)){var s=!0;rc(e)}else s=!1;if(Hs(e,r),e.stateNode===null)Ul(t,e),_y(e,n,i),ad(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=pn(n)?$r:Kt.current,c=Ys(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Am(e,o,i,c),Xi=!1;var d=e.memoizedState;o.state=d,cc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||hn.current||Xi?(typeof u=="function"&&(od(e,n,u,i),l=e.memoizedState),(a=Xi||wm(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Z_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:$n(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=pn(n)?$r:Kt.current,l=Ys(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Am(e,o,i,l),Xi=!1,d=e.memoizedState,o.state=d,cc(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||hn.current||Xi?(typeof p=="function"&&(od(e,n,p,i),g=e.memoizedState),(c=Xi||wm(e,n,c,i,d,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return ud(t,e,n,i,s,r)}function ud(t,e,n,i,r,s){Ey(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&vm(e,n,!1),Ni(t,e,s);i=e.stateNode,AT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=qs(e,t.child,null,s),e.child=qs(e,null,a,s)):tn(t,e,a,s),e.memoizedState=i.state,r&&vm(e,n,!0),e.child}function Ty(t){var e=t.stateNode;e.pendingContext?gm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gm(t,e.context,!1),Lh(t,e.containerInfo)}function Nm(t,e,n,i,r){return $s(),wh(r),e.flags|=256,tn(t,e,n,i),e.child}var fd={dehydrated:null,treeContext:null,retryLane:0};function dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function wy(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ft,r&1),t===null)return rd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wc(o,i,0,null),t=zr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dd(n),e.memoizedState=fd,t):Bh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return CT(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=lr(a,s):(s=zr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?dd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=fd,i}return s=t.child,t=s.sibling,i=lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bh(t,e){return e=Wc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ya(t,e,n,i){return i!==null&&wh(i),qs(e,t.child,null,n),t=Bh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function CT(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Lu(Error(te(422))),Ya(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Wc({mode:"visible",children:i.children},r,0,null),s=zr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&qs(e,t.child,null,o),e.child.memoizedState=dd(o),e.memoizedState=fd,s);if(!(e.mode&1))return Ya(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Lu(s,i,void 0),Ya(t,e,o,i)}if(a=(o&t.childLanes)!==0,dn||a){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Di(t,r),ti(i,t,r,-1))}return jh(),i=Lu(Error(te(421))),Ya(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=VT.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=rr(r.nextSibling),En=e,lt=!0,Kn=null,t!==null&&(Ln[Dn++]=Ai,Ln[Dn++]=Ci,Ln[Dn++]=qr,Ai=t.id,Ci=t.overflow,qr=e),e=Bh(e,i.children),e.flags|=4096,e)}function Im(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),sd(t.return,e,n)}function Du(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ay(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Im(t,n,e);else if(t.tag===19)Im(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&uc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Du(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&uc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Du(e,!0,n,null,s);break;case"together":Du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function RT(t,e,n){switch(e.tag){case 3:Ty(e),$s();break;case 5:Q_(e);break;case 1:pn(e.type)&&rc(e);break;case 4:Lh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(ac,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?wy(t,e,n):(it(ft,ft.current&1),t=Ni(t,e,n),t!==null?t.sibling:null);it(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ay(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,My(t,e,n)}return Ni(t,e,n)}var Cy,hd,Ry,by;Cy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hd=function(){};Ry=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Or(hi.current);var s=null;switch(n){case"input":r=Uf(t,r),i=Uf(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=kf(t,r),i=kf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=nc)}Vf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($o.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&rt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};by=function(t,e,n,i){n!==i&&(e.flags|=4)};function So(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function bT(t,e,n){var i=e.pendingProps;switch(Th(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return pn(e.type)&&ic(),Xt(e),null;case 3:return i=e.stateNode,Ks(),at(hn),at(Kt),Nh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kn!==null&&(Sd(Kn),Kn=null))),hd(t,e),Xt(e),null;case 5:Dh(e);var r=Or(oa.current);if(n=e.type,t!==null&&e.stateNode!=null)Ry(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Xt(e),null}if(t=Or(hi.current),ja(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[fi]=e,i[ra]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<Do.length;r++)rt(Do[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":Gp(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":jp(i,s),rt("invalid",i)}Vf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wa(i.textContent,a,t),r=["children",""+a]):$o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&rt("scroll",i)}switch(n){case"input":Fa(i),Wp(i,s,!0);break;case"textarea":Fa(i),Xp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=nc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=i_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[fi]=e,t[ra]=i,Cy(t,e,!1,!1),e.stateNode=t;e:{switch(o=zf(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Do.length;r++)rt(Do[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":Gp(t,i),r=Uf(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),rt("invalid",t);break;case"textarea":jp(t,i),r=kf(t,i),rt("invalid",t);break;default:r=i}Vf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?o_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&r_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qo(t,l):typeof l=="number"&&qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&ch(t,s,l,o))}switch(n){case"input":Fa(t),Wp(t,i,!1);break;case"textarea":Fa(t),Xp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=nc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)by(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Or(oa.current),Or(hi.current),ja(e)){if(i=e.stateNode,n=e.memoizedProps,i[fi]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:Wa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[fi]=e,e.stateNode=i}return Xt(e),null;case 13:if(at(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&Mn!==null&&e.mode&1&&!(e.flags&128))Y_(),$s(),e.flags|=98560,s=!1;else if(s=ja(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[fi]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else Kn!==null&&(Sd(Kn),Kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Rt===0&&(Rt=3):jh())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Ks(),hd(t,e),t===null&&na(e.stateNode.containerInfo),Xt(e),null;case 10:return Rh(e.type._context),Xt(e),null;case 17:return pn(e.type)&&ic(),Xt(e),null;case 19:if(at(ft),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)So(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uc(t),o!==null){for(e.flags|=128,So(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Qs&&(e.flags|=128,i=!0,So(s,!1),e.lanes=4194304)}else{if(!i)if(t=uc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),So(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Xt(e),null}else 2*xt()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,i=!0,So(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=ft.current,it(ft,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return Wh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function PT(t,e){switch(Th(e),e.tag){case 1:return pn(e.type)&&ic(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),at(hn),at(Kt),Nh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dh(e),null;case 13:if(at(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ft),null;case 4:return Ks(),null;case 10:return Rh(e.type._context),null;case 22:case 23:return Wh(),null;case 24:return null;default:return null}}var $a=!1,qt=!1,LT=typeof WeakSet=="function"?WeakSet:Set,de=null;function Ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function pd(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Um=!1;function DT(t,e){if(Zf=Jl,t=I_(),Mh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qf={focusedElem:t,selectionRange:n},Jl=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:$n(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){vt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return g=Um,Um=!1,g}function Vo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&pd(e,n,s)}r=r.next}while(r!==i)}}function Hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function md(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Py(t){var e=t.alternate;e!==null&&(t.alternate=null,Py(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fi],delete e[ra],delete e[td],delete e[pT],delete e[mT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ly(t){return t.tag===5||t.tag===3||t.tag===4}function Fm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ly(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nc));else if(i!==4&&(t=t.child,t!==null))for(gd(t,e,n),t=t.sibling;t!==null;)gd(t,e,n),t=t.sibling}function vd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(vd(t,e,n),t=t.sibling;t!==null;)vd(t,e,n),t=t.sibling}var Ot=null,qn=!1;function Oi(t,e,n){for(n=n.child;n!==null;)Dy(t,e,n),n=n.sibling}function Dy(t,e,n){if(di&&typeof di.onCommitFiberUnmount=="function")try{di.onCommitFiberUnmount(Ic,n)}catch{}switch(n.tag){case 5:qt||Ls(n,e);case 6:var i=Ot,r=qn;Ot=null,Oi(t,e,n),Ot=i,qn=r,Ot!==null&&(qn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(qn?(t=Ot,n=n.stateNode,t.nodeType===8?wu(t.parentNode,n):t.nodeType===1&&wu(t,n),Jo(t)):wu(Ot,n.stateNode));break;case 4:i=Ot,r=qn,Ot=n.stateNode.containerInfo,qn=!0,Oi(t,e,n),Ot=i,qn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pd(n,e,o),r=r.next}while(r!==i)}Oi(t,e,n);break;case 1:if(!qt&&(Ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Oi(t,e,n),qt=i):Oi(t,e,n);break;default:Oi(t,e,n)}}function Om(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LT),e.forEach(function(i){var r=zT.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,qn=!1;break e;case 3:Ot=a.stateNode.containerInfo,qn=!0;break e;case 4:Ot=a.stateNode.containerInfo,qn=!0;break e}a=a.return}if(Ot===null)throw Error(te(160));Dy(s,o,r),Ot=null,qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ny(e,t),e=e.sibling}function Ny(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),oi(t),i&4){try{Vo(3,t,t.return),Hc(3,t)}catch(y){vt(t,t.return,y)}try{Vo(5,t,t.return)}catch(y){vt(t,t.return,y)}}break;case 1:Hn(e,t),oi(t),i&512&&n!==null&&Ls(n,n.return);break;case 5:if(Hn(e,t),oi(t),i&512&&n!==null&&Ls(n,n.return),t.flags&32){var r=t.stateNode;try{qo(r,"")}catch(y){vt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&t_(r,s),zf(a,o);var c=zf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?o_(r,f):u==="dangerouslySetInnerHTML"?r_(r,f):u==="children"?qo(r,f):ch(r,u,f,c)}switch(a){case"input":Ff(r,s);break;case"textarea":n_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ks(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ks(r,!!s.multiple,s.defaultValue,!0):ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[ra]=s}catch(y){vt(t,t.return,y)}}break;case 6:if(Hn(e,t),oi(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){vt(t,t.return,y)}}break;case 3:if(Hn(e,t),oi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Jo(e.containerInfo)}catch(y){vt(t,t.return,y)}break;case 4:Hn(e,t),oi(t);break;case 13:Hn(e,t),oi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Hh=xt())),i&4&&Om(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||u,Hn(e,t),qt=c):Hn(e,t),oi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(de=t,u=t.child;u!==null;){for(f=de=u;de!==null;){switch(d=de,p=d.child,d.tag){case 0:case 11:case 14:case 15:Vo(4,d,d.return);break;case 1:Ls(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){vt(i,n,y)}}break;case 5:Ls(d,d.return);break;case 22:if(d.memoizedState!==null){Bm(f);continue}}p!==null?(p.return=d,de=p):Bm(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=s_("display",o))}catch(y){vt(t,t.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){vt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Hn(e,t),oi(t),i&4&&Om(t);break;case 21:break;default:Hn(e,t),oi(t)}}function oi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ly(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qo(r,""),i.flags&=-33);var s=Fm(t);vd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Fm(t);gd(t,a,o);break;default:throw Error(te(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function NT(t,e,n){de=t,Iy(t)}function Iy(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||$a;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=$a;var c=qt;if($a=o,(qt=l)&&!c)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Vm(r):l!==null?(l.return=o,de=l):Vm(r);for(;s!==null;)de=s,Iy(s),s=s.sibling;de=r,$a=a,qt=c}km(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):km(t)}}function km(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||Hc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Jo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}qt||e.flags&512&&md(e)}catch(d){vt(e,e.return,d)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function Bm(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function Vm(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hc(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{md(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{md(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var IT=Math.ceil,hc=Ui.ReactCurrentDispatcher,Vh=Ui.ReactCurrentOwner,kn=Ui.ReactCurrentBatchConfig,Xe=0,Ut=null,Tt=null,Ht=0,Sn=0,Ds=_r(0),Rt=0,ua=null,Zr=0,Gc=0,zh=0,zo=null,un=null,Hh=0,Qs=1/0,Ei=null,pc=!1,_d=null,or=null,qa=!1,Ki=null,mc=0,Ho=0,yd=null,Fl=-1,Ol=0;function on(){return Xe&6?xt():Fl!==-1?Fl:Fl=xt()}function ar(t){return t.mode&1?Xe&2&&Ht!==0?Ht&-Ht:vT.transition!==null?(Ol===0&&(Ol=__()),Ol):(t=qe,t!==0||(t=window.event,t=t===void 0?16:w_(t.type)),t):1}function ti(t,e,n,i){if(50<Ho)throw Ho=0,yd=null,Error(te(185));ya(t,n,i),(!(Xe&2)||t!==Ut)&&(t===Ut&&(!(Xe&2)&&(Gc|=n),Rt===4&&$i(t,Ht)),mn(t,i),n===1&&Xe===0&&!(e.mode&1)&&(Qs=xt()+500,Bc&&yr()))}function mn(t,e){var n=t.callbackNode;vE(t,e);var i=Ql(t,t===Ut?Ht:0);if(i===0)n!==null&&qp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&qp(n),e===1)t.tag===0?gT(zm.bind(null,t)):W_(zm.bind(null,t)),dT(function(){!(Xe&6)&&yr()}),n=null;else{switch(y_(i)){case 1:n=ph;break;case 4:n=g_;break;case 16:n=Zl;break;case 536870912:n=v_;break;default:n=Zl}n=Hy(n,Uy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Uy(t,e){if(Fl=-1,Ol=0,Xe&6)throw Error(te(327));var n=t.callbackNode;if(Gs()&&t.callbackNode!==n)return null;var i=Ql(t,t===Ut?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gc(t,i);else{e=i;var r=Xe;Xe|=2;var s=Oy();(Ut!==t||Ht!==e)&&(Ei=null,Qs=xt()+500,Vr(t,e));do try{OT();break}catch(a){Fy(t,a)}while(!0);Ch(),hc.current=s,Xe=r,Tt!==null?e=0:(Ut=null,Ht=0,e=Rt)}if(e!==0){if(e===2&&(r=Xf(t),r!==0&&(i=r,e=xd(t,r))),e===1)throw n=ua,Vr(t,0),$i(t,i),mn(t,xt()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!UT(r)&&(e=gc(t,i),e===2&&(s=Xf(t),s!==0&&(i=s,e=xd(t,s))),e===1))throw n=ua,Vr(t,0),$i(t,i),mn(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:br(t,un,Ei);break;case 3:if($i(t,i),(i&130023424)===i&&(e=Hh+500-xt(),10<e)){if(Ql(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ed(br.bind(null,t,un,Ei),e);break}br(t,un,Ei);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ei(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*IT(i/1960))-i,10<i){t.timeoutHandle=ed(br.bind(null,t,un,Ei),i);break}br(t,un,Ei);break;case 5:br(t,un,Ei);break;default:throw Error(te(329))}}}return mn(t,xt()),t.callbackNode===n?Uy.bind(null,t):null}function xd(t,e){var n=zo;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=gc(t,e),t!==2&&(e=un,un=n,e!==null&&Sd(e)),t}function Sd(t){un===null?un=t:un.push.apply(un,t)}function UT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ri(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~zh,e&=~Gc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function zm(t){if(Xe&6)throw Error(te(327));Gs();var e=Ql(t,0);if(!(e&1))return mn(t,xt()),null;var n=gc(t,e);if(t.tag!==0&&n===2){var i=Xf(t);i!==0&&(e=i,n=xd(t,i))}if(n===1)throw n=ua,Vr(t,0),$i(t,e),mn(t,xt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,un,Ei),mn(t,xt()),null}function Gh(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(Qs=xt()+500,Bc&&yr())}}function Qr(t){Ki!==null&&Ki.tag===0&&!(Xe&6)&&Gs();var e=Xe;Xe|=1;var n=kn.transition,i=qe;try{if(kn.transition=null,qe=1,t)return t()}finally{qe=i,kn.transition=n,Xe=e,!(Xe&6)&&yr()}}function Wh(){Sn=Ds.current,at(Ds)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fT(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(Th(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ic();break;case 3:Ks(),at(hn),at(Kt),Nh();break;case 5:Dh(i);break;case 4:Ks();break;case 13:at(ft);break;case 19:at(ft);break;case 10:Rh(i.type._context);break;case 22:case 23:Wh()}n=n.return}if(Ut=t,Tt=t=lr(t.current,null),Ht=Sn=e,Rt=0,ua=null,zh=Gc=Zr=0,un=zo=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Fr=null}return t}function Fy(t,e){do{var n=Tt;try{if(Ch(),Nl.current=dc,fc){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}fc=!1}if(Kr=0,It=Ct=dt=null,Bo=!1,aa=0,Vh.current=null,n===null||n.return===null){Rt=1,ua=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Rm(o);if(p!==null){p.flags&=-257,bm(p,o,a,s,e),p.mode&1&&Cm(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){Cm(s,c,e),jh();break e}l=Error(te(426))}}else if(lt&&a.mode&1){var m=Rm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),bm(m,o,a,s,e),wh(Zs(l,a));break e}}s=l=Zs(l,a),Rt!==4&&(Rt=2),zo===null?zo=[s]:zo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=yy(s,l,e);Sm(s,h);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(or===null||!or.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=xy(s,a,e);Sm(s,x);break e}}s=s.return}while(s!==null)}By(n)}catch(A){e=A,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function Oy(){var t=hc.current;return hc.current=dc,t===null?dc:t}function jh(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ut===null||!(Zr&268435455)&&!(Gc&268435455)||$i(Ut,Ht)}function gc(t,e){var n=Xe;Xe|=2;var i=Oy();(Ut!==t||Ht!==e)&&(Ei=null,Vr(t,e));do try{FT();break}catch(r){Fy(t,r)}while(!0);if(Ch(),Xe=n,hc.current=i,Tt!==null)throw Error(te(261));return Ut=null,Ht=0,Rt}function FT(){for(;Tt!==null;)ky(Tt)}function OT(){for(;Tt!==null&&!lE();)ky(Tt)}function ky(t){var e=zy(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?By(t):Tt=e,Vh.current=null}function By(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=PT(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Tt=null;return}}else if(n=bT(n,e,Sn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Rt===0&&(Rt=5)}function br(t,e,n){var i=qe,r=kn.transition;try{kn.transition=null,qe=1,kT(t,e,n,i)}finally{kn.transition=r,qe=i}return null}function kT(t,e,n,i){do Gs();while(Ki!==null);if(Xe&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_E(t,s),t===Ut&&(Tt=Ut=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qa||(qa=!0,Hy(Zl,function(){return Gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=qe;qe=1;var a=Xe;Xe|=4,Vh.current=null,DT(t,n),Ny(n,t),rT(Qf),Jl=!!Zf,Qf=Zf=null,t.current=n,NT(n),cE(),Xe=a,qe=o,kn.transition=s}else t.current=n;if(qa&&(qa=!1,Ki=t,mc=r),s=t.pendingLanes,s===0&&(or=null),dE(n.stateNode),mn(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(pc)throw pc=!1,t=_d,_d=null,t;return mc&1&&t.tag!==0&&Gs(),s=t.pendingLanes,s&1?t===yd?Ho++:(Ho=0,yd=t):Ho=0,yr(),null}function Gs(){if(Ki!==null){var t=y_(mc),e=kn.transition,n=qe;try{if(kn.transition=null,qe=16>t?16:t,Ki===null)var i=!1;else{if(t=Ki,Ki=null,mc=0,Xe&6)throw Error(te(331));var r=Xe;for(Xe|=4,de=t.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(de=c;de!==null;){var u=de;switch(u.tag){case 0:case 11:case 15:Vo(8,u,s)}var f=u.child;if(f!==null)f.return=u,de=f;else for(;de!==null;){u=de;var d=u.sibling,p=u.return;if(Py(u),u===c){de=null;break}if(d!==null){d.return=p,de=d;break}de=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,de=h;break e}de=s.return}}var _=t.current;for(de=_;de!==null;){o=de;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,de=v;else e:for(o=_;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hc(9,a)}}catch(A){vt(a,a.return,A)}if(a===o){de=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,de=x;break e}de=a.return}}if(Xe=r,yr(),di&&typeof di.onPostCommitFiberRoot=="function")try{di.onPostCommitFiberRoot(Ic,t)}catch{}i=!0}return i}finally{qe=n,kn.transition=e}}return!1}function Hm(t,e,n){e=Zs(n,e),e=yy(t,e,1),t=sr(t,e,1),e=on(),t!==null&&(ya(t,1,e),mn(t,e))}function vt(t,e,n){if(t.tag===3)Hm(t,t,n);else for(;e!==null;){if(e.tag===3){Hm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(or===null||!or.has(i))){t=Zs(n,t),t=xy(e,t,1),e=sr(e,t,1),t=on(),e!==null&&(ya(e,1,t),mn(e,t));break}}e=e.return}}function BT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Ht&n)===n&&(Rt===4||Rt===3&&(Ht&130023424)===Ht&&500>xt()-Hh?Vr(t,0):zh|=n),mn(t,e)}function Vy(t,e){e===0&&(t.mode&1?(e=Ba,Ba<<=1,!(Ba&130023424)&&(Ba=4194304)):e=1);var n=on();t=Di(t,e),t!==null&&(ya(t,e,n),mn(t,n))}function VT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vy(t,n)}function zT(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),Vy(t,n)}var zy;zy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,RT(t,e,n);dn=!!(t.flags&131072)}else dn=!1,lt&&e.flags&1048576&&j_(e,oc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ul(t,e),t=e.pendingProps;var r=Ys(e,Kt.current);Hs(e,n),r=Uh(null,e,i,t,r,n);var s=Fh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(s=!0,rc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ph(e),r.updater=zc,e.stateNode=r,r._reactInternals=e,ad(e,i,t,n),e=ud(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&Eh(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=GT(i),t=$n(i,t),r){case 0:e=cd(null,e,i,t,n);break e;case 1:e=Dm(null,e,i,t,n);break e;case 11:e=Pm(null,e,i,t,n);break e;case 14:e=Lm(null,e,i,$n(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),cd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Dm(t,e,i,r,n);case 3:e:{if(Ty(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Z_(t,e),cc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Zs(Error(te(423)),e),e=Nm(t,e,i,n,r);break e}else if(i!==r){r=Zs(Error(te(424)),e),e=Nm(t,e,i,n,r);break e}else for(Mn=rr(e.stateNode.containerInfo.firstChild),En=e,lt=!0,Kn=null,n=q_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),i===r){e=Ni(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return Q_(e),t===null&&rd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Jf(i,r)?o=null:s!==null&&Jf(i,s)&&(e.flags|=32),Ey(t,e),tn(t,e,o,n),e.child;case 6:return t===null&&rd(e),null;case 13:return wy(t,e,n);case 4:return Lh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=qs(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Pm(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(ac,i._currentValue),i._currentValue=o,s!==null)if(ri(s.value,o)){if(s.children===r.children&&!hn.current){e=Ni(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),sd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),sd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Hs(e,n),r=Vn(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=$n(i,e.pendingProps),r=$n(i.type,r),Lm(t,e,i,r,n);case 15:return Sy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Ul(t,e),e.tag=1,pn(i)?(t=!0,rc(e)):t=!1,Hs(e,n),_y(e,i,r),ad(e,i,r,n),ud(null,e,i,!0,t,n);case 19:return Ay(t,e,n);case 22:return My(t,e,n)}throw Error(te(156,e.tag))};function Hy(t,e){return m_(t,e)}function HT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new HT(t,e,n,i)}function Xh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GT(t){if(typeof t=="function")return Xh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fh)return 11;if(t===dh)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function kl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Xh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ms:return zr(n.children,r,s,e);case uh:o=8,r|=8;break;case Lf:return t=Fn(12,n,e,r|2),t.elementType=Lf,t.lanes=s,t;case Df:return t=Fn(13,n,e,r),t.elementType=Df,t.lanes=s,t;case Nf:return t=Fn(19,n,e,r),t.elementType=Nf,t.lanes=s,t;case Q0:return Wc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K0:o=10;break e;case Z0:o=9;break e;case fh:o=11;break e;case dh:o=14;break e;case ji:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Fn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function zr(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function Wc(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=Q0,t.lanes=n,t.stateNode={isHidden:!1},t}function Nu(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function Iu(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WT(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pu(0),this.expirationTimes=pu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Yh(t,e,n,i,r,s,o,a,l){return t=new WT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ph(s),t}function jT(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Gy(t){if(!t)return hr;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(pn(n))return G_(t,n,e)}return e}function Wy(t,e,n,i,r,s,o,a,l){return t=Yh(n,i,!0,t,r,s,o,a,l),t.context=Gy(null),n=t.current,i=on(),r=ar(n),s=bi(i,r),s.callback=e??null,sr(n,s,r),t.current.lanes=r,ya(t,r,i),mn(t,i),t}function jc(t,e,n,i){var r=e.current,s=on(),o=ar(r);return n=Gy(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=sr(r,e,o),t!==null&&(ti(t,r,o,s),Dl(t,r,o)),o}function vc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $h(t,e){Gm(t,e),(t=t.alternate)&&Gm(t,e)}function XT(){return null}var jy=typeof reportError=="function"?reportError:function(t){console.error(t)};function qh(t){this._internalRoot=t}Xc.prototype.render=qh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));jc(t,e,null,null)};Xc.prototype.unmount=qh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){jc(null,t,null,null)}),e[Li]=null}};function Xc(t){this._internalRoot=t}Xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=M_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yi.length&&e!==0&&e<Yi[n].priority;n++);Yi.splice(n,0,t),n===0&&T_(t)}};function Kh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wm(){}function YT(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=vc(o);s.call(c)}}var o=Wy(e,i,t,0,null,!1,!1,"",Wm);return t._reactRootContainer=o,t[Li]=o.current,na(t.nodeType===8?t.parentNode:t),Qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=vc(l);a.call(c)}}var l=Yh(t,0,!1,null,null,!1,!1,"",Wm);return t._reactRootContainer=l,t[Li]=l.current,na(t.nodeType===8?t.parentNode:t),Qr(function(){jc(e,l,n,i)}),l}function $c(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=vc(o);a.call(l)}}jc(e,o,t,r)}else o=YT(n,e,t,r,i);return vc(o)}x_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Lo(e.pendingLanes);n!==0&&(mh(e,n|1),mn(e,xt()),!(Xe&6)&&(Qs=xt()+500,yr()))}break;case 13:Qr(function(){var i=Di(t,1);if(i!==null){var r=on();ti(i,t,1,r)}}),$h(t,1)}};gh=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=on();ti(e,t,134217728,n)}$h(t,134217728)}};S_=function(t){if(t.tag===13){var e=ar(t),n=Di(t,e);if(n!==null){var i=on();ti(n,t,e,i)}$h(t,e)}};M_=function(){return qe};E_=function(t,e){var n=qe;try{return qe=t,e()}finally{qe=n}};Gf=function(t,e,n){switch(e){case"input":if(Ff(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=kc(i);if(!r)throw Error(te(90));e_(i),Ff(i,r)}}}break;case"textarea":n_(t,n);break;case"select":e=n.value,e!=null&&ks(t,!!n.multiple,e,!1)}};c_=Gh;u_=Qr;var $T={usingClientEntryPoint:!1,Events:[Sa,As,kc,a_,l_,Gh]},Mo={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qT={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=h_(t),t===null?null:t.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||XT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{Ic=Ka.inject(qT),di=Ka}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$T;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kh(e))throw Error(te(200));return jT(t,e,null,n)};Cn.createRoot=function(t,e){if(!Kh(t))throw Error(te(299));var n=!1,i="",r=jy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Yh(t,1,!1,null,null,n,!1,i,r),t[Li]=e.current,na(t.nodeType===8?t.parentNode:t),new qh(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=h_(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return Qr(t)};Cn.hydrate=function(t,e,n){if(!Yc(e))throw Error(te(200));return $c(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!Kh(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=jy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Wy(e,null,t,1,n??null,r,!1,s,o),t[Li]=e.current,na(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Xc(e)};Cn.render=function(t,e,n){if(!Yc(e))throw Error(te(200));return $c(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!Yc(t))throw Error(te(40));return t._reactRootContainer?(Qr(function(){$c(null,null,t,!1,function(){t._reactRootContainer=null,t[Li]=null})}),!0):!1};Cn.unstable_batchedUpdates=Gh;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Yc(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return $c(t,e,n,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function Xy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xy)}catch(t){console.error(t)}}Xy(),X0.exports=Cn;var KT=X0.exports,Yy,jm=KT;Yy=jm.createRoot,jm.hydrateRoot;/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=t=>{const e=QT(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var JT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=re.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>re.createElement("svg",{ref:l,...JT,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:$y("lucide",r),...!s&&!ew(a)&&{"aria-hidden":"true"},...a},[...o.map(([c,u])=>re.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=(t,e)=>{const n=re.forwardRef(({className:i,...r},s)=>re.createElement(tw,{ref:s,iconNode:e,className:$y(`lucide-${ZT(Xm(t))}`,`lucide-${t}`,i),...r}));return n.displayName=Xm(t),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],iw=wt("bot",nw);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],qy=wt("briefcase",rw);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],ow=wt("circle-alert",sw);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ym=wt("circle-check-big",aw);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],cw=wt("code-xml",lw);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],fw=wt("cpu",uw);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],hw=wt("external-link",dw);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],mw=wt("github",pw);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],vw=wt("globe",gw);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],yw=wt("graduation-cap",_w);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Sw=wt("instagram",xw);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Ky=wt("layers",Mw);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Tw=wt("linkedin",Ew);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Aw=wt("loader-circle",ww);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Rw=wt("mail",Cw);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Pw=wt("map-pin",bw);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Dw=wt("menu",Lw);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Uu=wt("monitor",Nw);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Uw=wt("send",Iw);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ow=wt("x",Fw),Zh=re.createContext({});function Qh(t){const e=re.useRef(null);return e.current===null&&(e.current=t()),e.current}const kw=typeof window<"u",Zy=kw?re.useLayoutEffect:re.useEffect,qc=re.createContext(null);function Jh(t,e){t.indexOf(e)===-1&&t.push(e)}function _c(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const mi=(t,e,n)=>n>e?e:n<t?t:n;let ep=()=>{};const pr={},Qy=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Jy(t){return typeof t=="object"&&t!==null}const ex=t=>/^0[^.\s]+$/u.test(t);function tx(t){let e;return()=>(e===void 0&&(e=t()),e)}const Bn=t=>t,Bw=(t,e)=>n=>e(t(n)),Ea=(...t)=>t.reduce(Bw),fa=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class tp{constructor(){this.subscriptions=[]}add(e){return Jh(this.subscriptions,e),()=>_c(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Tn=t=>t*1e3,On=t=>t/1e3;function nx(t,e){return e?t*(1e3/e):0}const ix=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Vw=1e-7,zw=12;function Hw(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=ix(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>Vw&&++a<zw);return o}function Ta(t,e,n,i){if(t===e&&n===i)return Bn;const r=s=>Hw(s,0,1,t,n);return s=>s===0||s===1?s:ix(r(s),e,i)}const rx=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,sx=t=>e=>1-t(1-e),ox=Ta(.33,1.53,.69,.99),np=sx(ox),ax=rx(np),lx=t=>t>=1?1:(t*=2)<1?.5*np(t):.5*(2-Math.pow(2,-10*(t-1))),ip=t=>1-Math.sin(Math.acos(t)),cx=sx(ip),ux=rx(ip),Gw=Ta(.42,0,1,1),Ww=Ta(0,0,.58,1),fx=Ta(.42,0,.58,1),jw=t=>Array.isArray(t)&&typeof t[0]!="number",dx=t=>Array.isArray(t)&&typeof t[0]=="number",Xw={linear:Bn,easeIn:Gw,easeInOut:fx,easeOut:Ww,circIn:ip,circInOut:ux,circOut:cx,backIn:np,backInOut:ax,backOut:ox,anticipate:lx},Yw=t=>typeof t=="string",$m=t=>{if(dx(t)){ep(t.length===4);const[e,n,i,r]=t;return Ta(e,n,i,r)}else if(Yw(t))return Xw[t];return t},Za=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function $w(t,e){let n=new Set,i=new Set,r=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),t()),u(a)}const c={schedule:(u,f=!1,d=!1)=>{const g=d&&r?n:i;return f&&o.add(u),g.add(u),u},cancel:u=>{i.delete(u),o.delete(u)},process:u=>{if(a=u,r){s=!0;return}r=!0;const f=n;n=i,i=f,n.forEach(l),n.clear(),r=!1,s&&(s=!1,c.process(u))}};return c}const qw=40;function hx(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Za.reduce((v,x)=>(v[x]=$w(s),v),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:f,preRender:d,render:p,postRender:g}=o,y=()=>{const v=pr.useManualTiming,x=v?r.timestamp:performance.now();n=!1,v||(r.delta=i?1e3/60:Math.max(Math.min(x-r.timestamp,qw),1)),r.timestamp=x,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),f.process(r),d.process(r),p.process(r),g.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(y))},m=()=>{n=!0,i=!0,r.isProcessing||t(y)};return{schedule:Za.reduce((v,x)=>{const A=o[x];return v[x]=(C,w=!1,b=!1)=>(n||m(),A.schedule(C,w,b)),v},{}),cancel:v=>{for(let x=0;x<Za.length;x++)o[Za[x]].cancel(v)},state:r,steps:o}}const{schedule:Je,cancel:mr,state:kt,steps:Fu}=hx(typeof requestAnimationFrame<"u"?requestAnimationFrame:Bn,!0);let Bl;function Kw(){Bl=void 0}const rn={now:()=>(Bl===void 0&&rn.set(kt.isProcessing||pr.useManualTiming?kt.timestamp:performance.now()),Bl),set:t=>{Bl=t,queueMicrotask(Kw)}},px=t=>e=>typeof e=="string"&&e.startsWith(t),mx=px("--"),Zw=px("var(--"),rp=t=>Zw(t)?Qw.test(t.split("/*")[0].trim()):!1,Qw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function qm(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const lo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},da={...lo,transform:t=>mi(0,1,t)},Qa={...lo,default:1},Go=t=>Math.round(t*1e5)/1e5,sp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Jw(t){return t==null}const e1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,op=(t,e)=>n=>!!(typeof n=="string"&&e1.test(n)&&n.startsWith(t)||e&&!Jw(n)&&Object.prototype.hasOwnProperty.call(n,e)),gx=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(sp);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},t1=t=>mi(0,255,t),Ou={...lo,transform:t=>Math.round(t1(t))},kr={test:op("rgb","red"),parse:gx("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Ou.transform(t)+", "+Ou.transform(e)+", "+Ou.transform(n)+", "+Go(da.transform(i))+")"};function n1(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Md={test:op("#"),parse:n1,transform:kr.transform},wa=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Gi=wa("deg"),pi=wa("%"),he=wa("px"),i1=wa("vh"),r1=wa("vw"),Km={...pi,parse:t=>pi.parse(t)/100,transform:t=>pi.transform(t*100)},Ns={test:op("hsl","hue"),parse:gx("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+pi.transform(Go(e))+", "+pi.transform(Go(n))+", "+Go(da.transform(i))+")"},Et={test:t=>kr.test(t)||Md.test(t)||Ns.test(t),parse:t=>kr.test(t)?kr.parse(t):Ns.test(t)?Ns.parse(t):Md.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?kr.transform(t):Ns.transform(t),getAnimatableNone:t=>{const e=Et.parse(t);return e.alpha=0,Et.transform(e)}},s1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function o1(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(sp))==null?void 0:e.length)||0)+(((n=t.match(s1))==null?void 0:n.length)||0)>0}const vx="number",_x="color",a1="var",l1="var(",Zm="${}",c1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Js(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(c1,l=>(Et.test(l)?(i.color.push(s),r.push(_x),n.push(Et.parse(l))):l.startsWith(l1)?(i.var.push(s),r.push(a1),n.push(l)):(i.number.push(s),r.push(vx),n.push(parseFloat(l))),++s,Zm)).split(Zm);return{values:n,split:a,indexes:i,types:r}}function u1(t){return Js(t).values}function yx({split:t,types:e}){const n=t.length;return i=>{let r="";for(let s=0;s<n;s++)if(r+=t[s],i[s]!==void 0){const o=e[s];o===vx?r+=Go(i[s]):o===_x?r+=Et.transform(i[s]):r+=i[s]}return r}}function f1(t){return yx(Js(t))}const d1=t=>typeof t=="number"?0:Et.test(t)?Et.getAnimatableNone(t):t,h1=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:d1(t);function p1(t){const e=Js(t);return yx(e)(e.values.map((i,r)=>h1(i,e.split[r])))}const ni={test:o1,parse:u1,createTransformer:f1,getAnimatableNone:p1};function ku(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function m1({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=ku(l,a,t+1/3),s=ku(l,a,t),o=ku(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function yc(t,e){return n=>n>0?e:t}const ot=(t,e,n)=>t+(e-t)*n,Bu=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},g1=[Md,kr,Ns],v1=t=>g1.find(e=>e.test(t));function Qm(t){const e=v1(t);if(!e)return!1;let n=e.parse(t);return e===Ns&&(n=m1(n)),n}const Jm=(t,e)=>{const n=Qm(t),i=Qm(e);if(!n||!i)return yc(t,e);const r={...n};return s=>(r.red=Bu(n.red,i.red,s),r.green=Bu(n.green,i.green,s),r.blue=Bu(n.blue,i.blue,s),r.alpha=ot(n.alpha,i.alpha,s),kr.transform(r))},Ed=new Set(["none","hidden"]);function _1(t,e){return Ed.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function y1(t,e){return n=>ot(t,e,n)}function ap(t){return typeof t=="number"?y1:typeof t=="string"?rp(t)?yc:Et.test(t)?Jm:M1:Array.isArray(t)?xx:typeof t=="object"?Et.test(t)?Jm:x1:yc}function xx(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>ap(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function x1(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=ap(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function S1(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const M1=(t,e)=>{const n=ni.createTransformer(e),i=Js(t),r=Js(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Ed.has(t)&&!r.values.length||Ed.has(e)&&!i.values.length?_1(t,e):Ea(xx(S1(i,r),r.values),n):yc(t,e)};function Sx(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ot(t,e,n):ap(t)(t,e)}const E1=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>Je.update(e,n),stop:()=>mr(e),now:()=>kt.isProcessing?kt.timestamp:rn.now()}},Mx=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},xc=2e4;function lp(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<xc;)e+=n,i=t.next(e);return e>=xc?1/0:e}function T1(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(lp(i),xc);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:On(r)}}const gt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Td(t,e){return t*Math.sqrt(1-e*e)}const w1=12;function A1(t,e,n){let i=n;for(let r=1;r<w1;r++)i=i-t(i)/e(i);return i}const Vu=.001;function C1({duration:t=gt.duration,bounce:e=gt.bounce,velocity:n=gt.velocity,mass:i=gt.mass}){let r,s,o=1-e;o=mi(gt.minDamping,gt.maxDamping,o),t=mi(gt.minDuration,gt.maxDuration,On(t)),o<1?(r=c=>{const u=c*o,f=u*t,d=u-n,p=Td(c,o),g=Math.exp(-f);return Vu-d/p*g},s=c=>{const f=c*o*t,d=f*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-f),y=Td(Math.pow(c,2),o);return(-r(c)+Vu>0?-1:1)*((d-p)*g)/y}):(r=c=>{const u=Math.exp(-c*t),f=(c-n)*t+1;return-Vu+u*f},s=c=>{const u=Math.exp(-c*t),f=(n-c)*(t*t);return u*f});const a=5/t,l=A1(r,s,a);if(t=Tn(t),isNaN(l))return{stiffness:gt.stiffness,damping:gt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const R1=["duration","bounce"],b1=["stiffness","damping","mass"];function eg(t,e){return e.some(n=>t[n]!==void 0)}function P1(t){let e={velocity:gt.velocity,stiffness:gt.stiffness,damping:gt.damping,mass:gt.mass,isResolvedFromDuration:!1,...t};if(!eg(t,b1)&&eg(t,R1))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*mi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:gt.mass,stiffness:r,damping:s}}else{const n=C1({...t,velocity:0});e={...e,...n,mass:gt.mass},e.isResolvedFromDuration=!0}return e}function Sc(t=gt.visualDuration,e=gt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:f,velocity:d,isResolvedFromDuration:p}=P1({...n,velocity:-On(n.velocity||0)}),g=d||0,y=c/(2*Math.sqrt(l*u)),m=o-s,h=On(Math.sqrt(l/u)),_=Math.abs(m)<5;i||(i=_?gt.restSpeed.granular:gt.restSpeed.default),r||(r=_?gt.restDelta.granular:gt.restDelta.default);let v,x,A,C,w,b;if(y<1)A=Td(h,y),C=(g+y*h*m)/A,v=M=>{const U=Math.exp(-y*h*M);return o-U*(C*Math.sin(A*M)+m*Math.cos(A*M))},w=y*h*C+m*A,b=y*h*m-C*A,x=M=>Math.exp(-y*h*M)*(w*Math.sin(A*M)+b*Math.cos(A*M));else if(y===1){v=U=>o-Math.exp(-h*U)*(m+(g+h*m)*U);const M=g+h*m;x=U=>Math.exp(-h*U)*(h*M*U-g)}else{const M=h*Math.sqrt(y*y-1);v=N=>{const k=Math.exp(-y*h*N),j=Math.min(M*N,300);return o-k*((g+y*h*m)*Math.sinh(j)+M*m*Math.cosh(j))/M};const U=(g+y*h*m)/M,Y=y*h*U-m*M,J=y*h*m-U*M;x=N=>{const k=Math.exp(-y*h*N),j=Math.min(M*N,300);return k*(Y*Math.sinh(j)+J*Math.cosh(j))}}const S={calculatedDuration:p&&f||null,velocity:M=>Tn(x(M)),next:M=>{if(!p&&y<1){const Y=Math.exp(-y*h*M),J=Math.sin(A*M),N=Math.cos(A*M),k=o-Y*(C*J+m*N),j=Tn(Y*(w*J+b*N));return a.done=Math.abs(j)<=i&&Math.abs(o-k)<=r,a.value=a.done?o:k,a}const U=v(M);if(p)a.done=M>=f;else{const Y=Tn(x(M));a.done=Math.abs(Y)<=i&&Math.abs(o-U)<=r}return a.value=a.done?o:U,a},toString:()=>{const M=Math.min(lp(S),xc),U=Mx(Y=>S.next(M*Y).value,M,30);return M+"ms "+U},toTransition:()=>{}};return S}Sc.applyToOptions=t=>{const e=T1(t,100,Sc);return t.ease=e.ease,t.duration=Tn(e.duration),t.type="keyframes",t};const L1=5;function Ex(t,e,n){const i=Math.max(e-L1,0);return nx(n-t(i),e-i)}function wd({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=t[0],d={done:!1,value:f},p=b=>a!==void 0&&b<a||l!==void 0&&b>l,g=b=>a===void 0?l:l===void 0||Math.abs(a-b)<Math.abs(l-b)?a:l;let y=n*e;const m=f+y,h=o===void 0?m:o(m);h!==m&&(y=h-f);const _=b=>-y*Math.exp(-b/i),v=b=>h+_(b),x=b=>{const S=_(b),M=v(b);d.done=Math.abs(S)<=c,d.value=d.done?h:M};let A,C;const w=b=>{p(d.value)&&(A=b,C=Sc({keyframes:[d.value,g(d.value)],velocity:Ex(v,b,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return w(0),{calculatedDuration:null,next:b=>{let S=!1;return!C&&A===void 0&&(S=!0,x(b),w(b)),A!==void 0&&b>=A?C.next(b-A):(!S&&x(b),d)}}}function D1(t,e,n){const i=[],r=n||pr.mix||Sx,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Bn:e;a=Ea(l,a)}i.push(a)}return i}function N1(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(ep(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=D1(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(u<t[f+1]);f++);const d=fa(t[f],t[f+1],u);return a[f](d)};return n?u=>c(mi(t[0],t[s-1],u)):c}function I1(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=fa(0,e,i);t.push(ot(n,1,r))}}function U1(t){const e=[0];return I1(e,t.length-1),e}function F1(t,e){return t.map(n=>n*e)}function O1(t,e){return t.map(()=>e||fx).splice(0,t.length-1)}function Wo({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=jw(i)?i.map($m):$m(i),s={done:!1,value:e[0]},o=F1(n&&n.length===e.length?n:U1(e),t),a=N1(o,e,{ease:Array.isArray(r)?r:O1(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const k1=t=>t!==null;function Kc(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(k1),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const B1={decay:wd,inertia:wd,tween:Wo,keyframes:Wo,spring:Sc};function Tx(t){typeof t.type=="string"&&(t.type=B1[t.type])}class cp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const V1=t=>t/100;class Mc extends cp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==rn.now()&&this.tick(rn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Tx(e);const{type:n=Wo,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||Wo;l!==Wo&&typeof a[0]!="number"&&(this.mixKeyframes=Ea(V1,Sx(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=lp(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:u,repeat:f,repeatType:d,repeatDelay:p,type:g,onUpdate:y,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const h=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?h<0:h>r;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,x=i;if(f){const b=Math.min(this.currentTime,r)/a;let S=Math.floor(b),M=b%1;!M&&b>=1&&(M=1),M===1&&S--,S=Math.min(S,f+1),!!(S%2)&&(d==="reverse"?(M=1-M,p&&(M-=p/a)):d==="mirror"&&(x=o)),v=mi(0,1,M)*a}let A;_?(this.delayState.value=u[0],A=this.delayState):A=x.next(v),s&&!_&&(A.value=s(A.value));let{done:C}=A;!_&&l!==null&&(C=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const w=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return w&&g!==wd&&(A.value=Kc(u,this.options,m,this.speed)),y&&y(A.value),w&&this.finish(),A}then(e,n){return this.finished.then(e,n)}get duration(){return On(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+On(e)}get time(){return On(this.currentTime)}set time(e){e=Tn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return Ex(i=>this.generator.next(i).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(rn.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=On(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=E1,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(rn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function z1(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Br=t=>t*180/Math.PI,Ad=t=>{const e=Br(Math.atan2(t[1],t[0]));return Cd(e)},H1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Ad,rotateZ:Ad,skewX:t=>Br(Math.atan(t[1])),skewY:t=>Br(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Cd=t=>(t=t%360,t<0&&(t+=360),t),tg=Ad,ng=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),ig=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),G1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ng,scaleY:ig,scale:t=>(ng(t)+ig(t))/2,rotateX:t=>Cd(Br(Math.atan2(t[6],t[5]))),rotateY:t=>Cd(Br(Math.atan2(-t[2],t[0]))),rotateZ:tg,rotate:tg,skewX:t=>Br(Math.atan(t[4])),skewY:t=>Br(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Rd(t){return t.includes("scale")?1:0}function bd(t,e){if(!t||t==="none")return Rd(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=G1,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=H1,r=a}if(!r)return Rd(e);const s=i[e],o=r[1].split(",").map(j1);return typeof s=="function"?s(o):o[s]}const W1=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return bd(n,e)};function j1(t){return parseFloat(t.trim())}const co=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],uo=new Set(co),rg=t=>t===lo||t===he,X1=new Set(["x","y","z"]),Y1=co.filter(t=>!X1.has(t));function $1(t){const e=[];return Y1.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Zi={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>bd(e,"x"),y:(t,{transform:e})=>bd(e,"y")};Zi.translateX=Zi.x;Zi.translateY=Zi.y;const Hr=new Set;let Pd=!1,Ld=!1,Dd=!1;function wx(){if(Ld){const t=Array.from(Hr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=$1(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))==null||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Ld=!1,Pd=!1,Hr.forEach(t=>t.complete(Dd)),Hr.clear()}function Ax(){Hr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Ld=!0)})}function q1(){Dd=!0,Ax(),wx(),Dd=!1}class up{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Hr.add(this),Pd||(Pd=!0,Je.read(Ax),Je.resolveKeyframes(wx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}z1(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Hr.delete(this)}cancel(){this.state==="scheduled"&&(Hr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const K1=t=>t.startsWith("--");function Cx(t,e,n){K1(e)?t.style.setProperty(e,n):t.style[e]=n}const Z1={};function Rx(t,e){const n=tx(t);return()=>Z1[e]??n()}const Q1=Rx(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),bx=Rx(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),No=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,sg={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:No([0,.65,.55,1]),circOut:No([.55,0,1,.45]),backIn:No([.31,.01,.66,-.59]),backOut:No([.33,1.53,.69,.99])};function Px(t,e){if(t)return typeof t=="function"?bx()?Mx(t,e):"ease-out":dx(t)?No(t):Array.isArray(t)?t.map(n=>Px(n,e)||sg.easeOut):sg[t]}function J1(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const f=Px(a,r);Array.isArray(f)&&(u.easing=f);const d={delay:i,duration:r,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(d.pseudoElement=c),t.animate(u,d)}function Lx(t){return typeof t=="function"&&"applyToOptions"in t}function eA({type:t,...e}){return Lx(t)&&bx()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class Dx extends cp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,ep(typeof e.type!="string");const c=eA(e);this.animation=J1(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const u=Kc(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(u),Cx(n,i,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i,r;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((r=(i=this.animation).commitStyles)==null||r.call(i))}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return On(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+On(e)}get time(){return On(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Tn(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:i,observe:r}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&Q1()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),i&&(this.animation.rangeEnd=i),Bn):r(this)}}const Nx={anticipate:lx,backInOut:ax,circInOut:ux};function tA(t){return t in Nx}function nA(t){typeof t.ease=="string"&&tA(t.ease)&&(t.ease=Nx[t.ease])}const zu=10;class iA extends Dx{constructor(e){nA(e),Tx(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new Mc({...o,autoplay:!1}),l=Math.max(zu,rn.now()-this.startTime),c=mi(0,zu,l-zu),u=a.sample(l).value,{name:f}=this.options;s&&f&&Cx(s,f,u),n.setWithVelocity(a.sample(Math.max(0,l-c)).value,u,c),a.stop()}}const og=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ni.test(t)||t==="0")&&!t.startsWith("url("));function rA(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function sA(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=og(r,e),a=og(s,e);return!o||!a?!1:rA(t)||(n==="spring"||Lx(n))&&i}function Nd(t){t.duration=0,t.type="keyframes"}const Ix=new Set(["opacity","clipPath","filter","transform"]),oA=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function aA(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&oA.test(t[e]))return!0;return!1}const lA=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),cA=tx(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function uA(t){var f;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o,keyframes:a}=t;if(!(((f=e==null?void 0:e.owner)==null?void 0:f.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=e.owner.getProps();return cA()&&n&&(Ix.has(n)||lA.has(n)&&aA(a))&&(n!=="transform"||!u)&&!c&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const fA=40;class dA extends cp{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:u,...f}){var g;super(),this.stop=()=>{var y,m;this._animation&&(this._animation.stop(),(y=this.stopTimeline)==null||y.call(this)),(m=this.keyframeResolver)==null||m.cancel()},this.createdAt=rn.now();const d={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:u,...f},p=(u==null?void 0:u.KeyframeResolver)||up;this.keyframeResolver=new p(a,(y,m,h)=>this.onKeyframesResolved(y,m,d,!h),l,c,u),(g=this.keyframeResolver)==null||g.scheduleResolve()}onKeyframesResolved(e,n,i,r){var h,_;this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=rn.now();let f=!0;sA(e,s,o,a)||(f=!1,(pr.instantAnimations||!l)&&(u==null||u(Kc(e,i,n))),e[0]=e[e.length-1],Nd(i),i.repeat=0);const p={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>fA?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},g=f&&!c&&uA(p),y=(_=(h=p.motionValue)==null?void 0:h.owner)==null?void 0:_.current;let m;if(g)try{m=new iA({...p,element:y})}catch{m=new Mc(p)}else m=new Mc(p);m.finished.then(()=>{this.notifyFinished()}).catch(Bn),this.pendingTimeline&&(this.stopTimeline=m.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),q1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function Ux(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}const hA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function pA(t){const e=hA.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function Fx(t,e,n=1){const[i,r]=pA(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return Qy(o)?parseFloat(o):o}return rp(r)?Fx(r,e,n+1):r}const mA={type:"spring",stiffness:500,damping:25,restSpeed:10},gA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),vA={type:"keyframes",duration:.8},_A={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},yA=(t,{keyframes:e})=>e.length>2?vA:uo.has(t)?t.startsWith("scale")?gA(e[1]):mA:_A;function Ox(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function fp(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?Ox(n,t):n}const xA=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function SA(t){for(const e in t)if(!xA.has(e))return!0;return!1}const dp=(t,e,n,i={},r,s)=>o=>{const a=fp(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Tn(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};SA(a)||Object.assign(u,yA(t,u)),u.duration&&(u.duration=Tn(u.duration)),u.repeatDelay&&(u.repeatDelay=Tn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Nd(u),u.delay===0&&(f=!0)),(pr.instantAnimations||pr.skipAnimations||r!=null&&r.shouldSkipAnimations)&&(f=!0,Nd(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,f&&!s&&e.get()!==void 0){const d=Kc(u.keyframes,a);if(d!==void 0){Je.update(()=>{u.onUpdate(d),u.onComplete()});return}}return a.isSync?new Mc(u):new dA(u)};function ag(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function hp(t,e,n,i){if(typeof e=="function"){const[r,s]=ag(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=ag(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function Gr(t,e,n){const i=t.getProps();return hp(i,e,n!==void 0?n:i.custom,t)}const kx=new Set(["width","height","top","left","right","bottom",...co]),lg=30,MA=t=>!isNaN(parseFloat(t));class EA{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=rn.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=rn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=MA(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new tp);const i=this.events[e].add(n);return e==="change"?()=>{i(),Je.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=rn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>lg)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,lg);return nx(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function eo(t,e){return new EA(t,e)}const Id=t=>Array.isArray(t);function TA(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,eo(n))}function wA(t){return Id(t)?t[t.length-1]||0:t}function AA(t,e){const n=Gr(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=wA(s[o]);TA(t,o,a)}}const Vt=t=>!!(t&&t.getVelocity);function CA(t){return!!(Vt(t)&&t.add)}function Ud(t,e){const n=t.getValue("willChange");if(CA(n))return n.add(e);if(!n&&pr.WillChange){const i=new pr.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function pp(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const RA="framerAppearId",Bx="data-"+pp(RA);function Vx(t){return t.props[Bx]}function bA({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function zx(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();s=s?Ox(s,l):l;const c=s==null?void 0:s.reduceMotion;i&&(s=i);const u=[],f=r&&t.animationState&&t.animationState.getState()[r];for(const d in a){const p=t.getValue(d,t.latestValues[d]??null),g=a[d];if(g===void 0||f&&bA(f,d))continue;const y={delay:n,...fp(s||{},d)},m=p.get();if(m!==void 0&&!p.isAnimating()&&!Array.isArray(g)&&g===m&&!y.velocity){Je.update(()=>p.set(g));continue}let h=!1;if(window.MotionHandoffAnimation){const x=Vx(t);if(x){const A=window.MotionHandoffAnimation(x,d,Je);A!==null&&(y.startTime=A,h=!0)}}Ud(t,d);const _=c??t.shouldReduceMotion;p.start(dp(d,p,g,_&&kx.has(d)?{type:!1}:y,t,h));const v=p.animation;v&&u.push(v)}if(o){const d=()=>Je.update(()=>{o&&AA(t,o)});u.length?Promise.all(u).then(d):d()}return u}function Fd(t,e,n={}){var l;const i=Gr(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(zx(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:d}=r;return PA(t,e,c,u,f,d,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[c,u]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function PA(t,e,n=0,i=0,r=0,s=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(Fd(l,e,{...o,delay:n+(typeof i=="function"?0:i)+Ux(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function LA(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Fd(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Fd(t,e,n);else{const r=typeof e=="function"?Gr(t,e,n.custom):e;i=Promise.all(zx(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const DA={test:t=>t==="auto",parse:t=>t},Hx=t=>e=>e.test(t),Gx=[lo,he,pi,Gi,r1,i1,DA],cg=t=>Gx.find(Hx(t));function NA(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||ex(t):!0}const IA=new Set(["brightness","contrast","saturate","opacity"]);function UA(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(sp)||[];if(!i)return t;const r=n.replace(i,"");let s=IA.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const FA=/\b([a-z-]*)\(.*?\)/gu,Od={...ni,getAnimatableNone:t=>{const e=t.match(FA);return e?e.map(UA).join(" "):t}},kd={...ni,getAnimatableNone:t=>{const e=ni.parse(t);return ni.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},ug={...lo,transform:Math.round},OA={rotate:Gi,rotateX:Gi,rotateY:Gi,rotateZ:Gi,scale:Qa,scaleX:Qa,scaleY:Qa,scaleZ:Qa,skew:Gi,skewX:Gi,skewY:Gi,distance:he,translateX:he,translateY:he,translateZ:he,x:he,y:he,z:he,perspective:he,transformPerspective:he,opacity:da,originX:Km,originY:Km,originZ:he},mp={borderWidth:he,borderTopWidth:he,borderRightWidth:he,borderBottomWidth:he,borderLeftWidth:he,borderRadius:he,borderTopLeftRadius:he,borderTopRightRadius:he,borderBottomRightRadius:he,borderBottomLeftRadius:he,width:he,maxWidth:he,height:he,maxHeight:he,top:he,right:he,bottom:he,left:he,inset:he,insetBlock:he,insetBlockStart:he,insetBlockEnd:he,insetInline:he,insetInlineStart:he,insetInlineEnd:he,padding:he,paddingTop:he,paddingRight:he,paddingBottom:he,paddingLeft:he,paddingBlock:he,paddingBlockStart:he,paddingBlockEnd:he,paddingInline:he,paddingInlineStart:he,paddingInlineEnd:he,margin:he,marginTop:he,marginRight:he,marginBottom:he,marginLeft:he,marginBlock:he,marginBlockStart:he,marginBlockEnd:he,marginInline:he,marginInlineStart:he,marginInlineEnd:he,fontSize:he,backgroundPositionX:he,backgroundPositionY:he,...OA,zIndex:ug,fillOpacity:da,strokeOpacity:da,numOctaves:ug},kA={...mp,color:Et,backgroundColor:Et,outlineColor:Et,fill:Et,stroke:Et,borderColor:Et,borderTopColor:Et,borderRightColor:Et,borderBottomColor:Et,borderLeftColor:Et,filter:Od,WebkitFilter:Od,mask:kd,WebkitMask:kd},Wx=t=>kA[t],BA=new Set([Od,kd]);function jx(t,e){let n=Wx(t);return BA.has(n)||(n=ni),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const VA=new Set(["auto","none","0"]);function zA(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!VA.has(s)&&Js(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=jx(n,r)}class HA extends up{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<e.length;u++){let f=e[u];if(typeof f=="string"&&(f=f.trim(),rp(f))){const d=Fx(f,n.current);d!==void 0&&(e[u]=d),u===e.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!kx.has(i)||e.length!==2)return;const[r,s]=e,o=cg(r),a=cg(s),l=qm(r),c=qm(s);if(l!==c&&Zi[i]){this.needsMeasurement=!0;return}if(o!==a)if(rg(o)&&rg(a))for(let u=0;u<e.length;u++){const f=e[u];typeof f=="string"&&(e[u]=parseFloat(f))}else Zi[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||NA(e[r]))&&i.push(r);i.length&&zA(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Zi[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=Zi[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function Xx(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let i=document;const r=(n==null?void 0:n[t])??i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}const Yx=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function Vl(t){return Jy(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:gp}=hx(queueMicrotask,!1),Yn={x:!1,y:!1};function $x(){return Yn.x||Yn.y}function GA(t){return t==="x"||t==="y"?Yn[t]?null:(Yn[t]=!0,()=>{Yn[t]=!1}):Yn.x||Yn.y?null:(Yn.x=Yn.y=!0,()=>{Yn.x=Yn.y=!1})}function qx(t,e){const n=Xx(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function WA(t){return!(t.pointerType==="touch"||$x())}function jA(t,e,n={}){const[i,r,s]=qx(t,n);return i.forEach(o=>{let a=!1,l=!1,c;const u=()=>{o.removeEventListener("pointerleave",g)},f=m=>{c&&(c(m),c=void 0),u()},d=m=>{a=!1,window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d),l&&(l=!1,f(m))},p=()=>{a=!0,window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",d,r)},g=m=>{if(m.pointerType!=="touch"){if(a){l=!0;return}f(m)}},y=m=>{if(!WA(m))return;l=!1;const h=e(o,m);typeof h=="function"&&(c=h,o.addEventListener("pointerleave",g,r))};o.addEventListener("pointerenter",y,r),o.addEventListener("pointerdown",p,r)}),s}const Kx=(t,e)=>e?t===e?!0:Kx(t,e.parentElement):!1,vp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,XA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function YA(t){return XA.has(t.tagName)||t.isContentEditable===!0}const $A=new Set(["INPUT","SELECT","TEXTAREA"]);function qA(t){return $A.has(t.tagName)||t.isContentEditable===!0}const zl=new WeakSet;function fg(t){return e=>{e.key==="Enter"&&t(e)}}function Hu(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const KA=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=fg(()=>{if(zl.has(n))return;Hu(n,"down");const r=fg(()=>{Hu(n,"up")}),s=()=>Hu(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function dg(t){return vp(t)&&!$x()}const hg=new WeakSet;function ZA(t,e,n={}){const[i,r,s]=qx(t,n),o=a=>{const l=a.currentTarget;if(!dg(a)||hg.has(a))return;zl.add(l),n.stopPropagation&&hg.add(a);const c=e(l,a),u=(p,g)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",d),zl.has(l)&&zl.delete(l),dg(p)&&typeof c=="function"&&c(p,{success:g})},f=p=>{u(p,l===window||l===document||n.useGlobalTarget||Kx(l,p.target))},d=p=>{u(p,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",d,r)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),Vl(a)&&(a.addEventListener("focus",c=>KA(c,r)),!YA(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function _p(t){return Jy(t)&&"ownerSVGElement"in t}const Hl=new WeakMap;let Wi;const Zx=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:_p(i)&&"getBBox"in i?i.getBBox()[e]:i[n],QA=Zx("inline","width","offsetWidth"),JA=Zx("block","height","offsetHeight");function eC({target:t,borderBoxSize:e}){var n;(n=Hl.get(t))==null||n.forEach(i=>{i(t,{get width(){return QA(t,e)},get height(){return JA(t,e)}})})}function tC(t){t.forEach(eC)}function nC(){typeof ResizeObserver>"u"||(Wi=new ResizeObserver(tC))}function iC(t,e){Wi||nC();const n=Xx(t);return n.forEach(i=>{let r=Hl.get(i);r||(r=new Set,Hl.set(i,r)),r.add(e),Wi==null||Wi.observe(i)}),()=>{n.forEach(i=>{const r=Hl.get(i);r==null||r.delete(e),r!=null&&r.size||Wi==null||Wi.unobserve(i)})}}const Gl=new Set;let Is;function rC(){Is=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Gl.forEach(e=>e(t))},window.addEventListener("resize",Is)}function sC(t){return Gl.add(t),Is||rC(),()=>{Gl.delete(t),!Gl.size&&typeof Is=="function"&&(window.removeEventListener("resize",Is),Is=void 0)}}function pg(t,e){return typeof t=="function"?sC(t):iC(t,e)}function oC(t){return _p(t)&&t.tagName==="svg"}const aC=[...Gx,Et,ni],lC=t=>aC.find(Hx(t)),mg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Us=()=>({x:mg(),y:mg()}),gg=()=>({min:0,max:0}),At=()=>({x:gg(),y:gg()}),cC=new WeakMap;function Zc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function ha(t){return typeof t=="string"||Array.isArray(t)}const yp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],xp=["initial",...yp];function Qc(t){return Zc(t.animate)||xp.some(e=>ha(t[e]))}function Qx(t){return!!(Qc(t)||t.variants)}function uC(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Vt(r))t.addValue(i,r);else if(Vt(s))t.addValue(i,eo(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,eo(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Bd={current:null},Jx={current:!1},fC=typeof window<"u";function dC(){if(Jx.current=!0,!!fC)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Bd.current=t.matches;t.addEventListener("change",e),e()}else Bd.current=!1}const vg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Ec={};function eS(t){Ec=t}function hC(){return Ec}class pC{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=up,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=rn.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,Je.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Qc(n),this.isVariantNode=Qx(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in d){const g=d[p];c[p]!==void 0&&Vt(g)&&g.set(c[p])}}mount(e){var n,i;if(this.hasBeenMounted)for(const r in this.initialValues)(n=this.values.get(r))==null||n.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=e,cC.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Jx.current||dC(),this.shouldReduceMotion=Bd.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),mr(this.notifyUpdate),mr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&Ix.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:u}=n.accelerate,f=new Dx({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:Tn(u)}),d=o(f);this.valueSubscriptions.set(e,()=>{d(),f.cancel()});return}const i=uo.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&Je.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Ec){const n=Ec[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):At()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<vg.length;i++){const r=vg[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=uC(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=eo(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(Qy(i)||ex(i))?i=parseFloat(i):!lC(i)&&ni.test(n)&&(i=jx(e,n)),this.setBaseTarget(e,Vt(i)?i.get():i)),Vt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=hp(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Vt(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new tp),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){gp.render(this.render)}}class tS extends pC{constructor(){super(...arguments),this.KeyframeResolver=HA}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Vt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class xr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function nS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function mC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function gC(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Gu(t){return t===void 0||t===1}function Vd({scale:t,scaleX:e,scaleY:n}){return!Gu(t)||!Gu(e)||!Gu(n)}function Pr(t){return Vd(t)||iS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function iS(t){return _g(t.x)||_g(t.y)}function _g(t){return t&&t!=="0%"}function Tc(t,e,n){const i=t-n,r=e*i;return n+r}function yg(t,e,n,i,r){return r!==void 0&&(t=Tc(t,r,i)),Tc(t,n,i)+e}function zd(t,e=0,n=1,i,r){t.min=yg(t.min,e,n,i,r),t.max=yg(t.max,e,n,i,r)}function rS(t,{x:e,y:n}){zd(t.x,e.translate,e.scale,e.originPoint),zd(t.y,n.translate,n.scale,n.originPoint)}const xg=.999999999999,Sg=1.0000000000001;function vC(t,e,n,i=!1){var a;const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let l=0;l<r;l++){s=n[l],o=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(ci(t.x,-s.scroll.offset.x),ci(t.y,-s.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,rS(t,o)),i&&Pr(s.latestValues)&&Wl(t,s.latestValues,(a=s.layout)==null?void 0:a.layoutBox))}e.x<Sg&&e.x>xg&&(e.x=1),e.y<Sg&&e.y>xg&&(e.y=1)}function ci(t,e){t.min+=e,t.max+=e}function Mg(t,e,n,i,r=.5){const s=ot(t.min,t.max,r);zd(t,e,n,s,i)}function Eg(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function Wl(t,e,n){const i=n??t;Mg(t.x,Eg(e.x,i.x),e.scaleX,e.scale,e.originX),Mg(t.y,Eg(e.y,i.y),e.scaleY,e.scale,e.originY)}function sS(t,e){return nS(gC(t.getBoundingClientRect(),e))}function _C(t,e,n){const i=sS(t,n),{scroll:r}=e;return r&&(ci(i.x,r.offset.x),ci(i.y,r.offset.y)),i}const yC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},xC=co.length;function SC(t,e,n){let i="",r=!0;for(let s=0;s<xC;s++){const o=co[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number")l=a===(o.startsWith("scale")?1:0);else{const c=parseFloat(a);l=o.startsWith("scale")?c===1:c===0}if(!l||n){const c=Yx(a,mp[o]);if(!l){r=!1;const u=yC[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Sp(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(uo.has(l)){o=!0;continue}else if(mx(l)){r[l]=c;continue}else{const u=Yx(c,mp[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=SC(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}function oS(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r==null||r.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function Tg(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Eo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(he.test(t))t=parseFloat(t);else return t;const n=Tg(t,e.target.x),i=Tg(t,e.target.y);return`${n}% ${i}%`}},MC={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=ni.parse(t);if(r.length>5)return i;const s=ni.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=ot(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}},Hd={borderRadius:{...Eo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Eo,borderTopRightRadius:Eo,borderBottomLeftRadius:Eo,borderBottomRightRadius:Eo,boxShadow:MC};function aS(t,{layout:e,layoutId:n}){return uo.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Hd[t]||t==="opacity")}function Mp(t,e,n){var o;const i=t.style,r=e==null?void 0:e.style,s={};if(!i)return s;for(const a in i)(Vt(i[a])||r&&Vt(r[a])||aS(a,t)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function EC(t){return window.getComputedStyle(t)}class TC extends tS{constructor(){super(...arguments),this.type="html",this.renderInstance=oS}readValueFromInstance(e,n){var i;if(uo.has(n))return(i=this.projection)!=null&&i.isProjecting?Rd(n):W1(e,n);{const r=EC(e),s=(mx(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return sS(e,n)}build(e,n,i){Sp(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Mp(e,n,i)}}const wC={offset:"stroke-dashoffset",array:"stroke-dasharray"},AC={offset:"strokeDashoffset",array:"strokeDasharray"};function CC(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?wC:AC;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}const RC=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function lS(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,c,u){if(Sp(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:d}=t;f.transform&&(d.transform=f.transform,delete f.transform),(d.transform||f.transformOrigin)&&(d.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),d.transform&&(d.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete f.transformBox);for(const p of RC)f[p]!==void 0&&(d[p]=f[p],delete f[p]);e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),r!==void 0&&CC(f,r,s,o,!1)}const cS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),uS=t=>typeof t=="string"&&t.toLowerCase()==="svg";function bC(t,e,n,i){oS(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(cS.has(r)?r:pp(r),e.attrs[r])}function fS(t,e,n){const i=Mp(t,e,n);for(const r in t)if(Vt(t[r])||Vt(e[r])){const s=co.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}class PC extends tS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=At}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(uo.has(n)){const i=Wx(n);return i&&i.default||0}return n=cS.has(n)?n:pp(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return fS(e,n,i)}build(e,n,i){lS(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){bC(e,n,i,r)}mount(e){this.isSVGTag=uS(e.tagName),super.mount(e)}}const LC=xp.length;function dS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?dS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<LC;n++){const i=xp[n],r=t.props[i];(ha(r)||r===!1)&&(e[i]=r)}return e}function hS(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const DC=[...yp].reverse(),NC=yp.length;function IC(t){return e=>Promise.all(e.map(({animation:n,options:i})=>LA(t,n,i)))}function UC(t){let e=IC(t),n=wg(),i=!0,r=!1;const s=c=>(u,f)=>{var p;const d=Gr(t,f,c==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);if(d){const{transition:g,transitionEnd:y,...m}=d;u={...u,...m,...y}}return u};function o(c){e=c(t)}function a(c){const{props:u}=t,f=dS(t.parent)||{},d=[],p=new Set;let g={},y=1/0;for(let h=0;h<NC;h++){const _=DC[h],v=n[_],x=u[_]!==void 0?u[_]:f[_],A=ha(x),C=_===c?v.isActive:null;C===!1&&(y=h);let w=x===f[_]&&x!==u[_]&&A;if(w&&(i||r)&&t.manuallyAnimateOnMount&&(w=!1),v.protectedKeys={...g},!v.isActive&&C===null||!x&&!v.prevProp||Zc(x)||typeof x=="boolean")continue;if(_==="exit"&&v.isActive&&C!==!0){v.prevResolvedValues&&(g={...g,...v.prevResolvedValues});continue}const b=FC(v.prevProp,x);let S=b||_===c&&v.isActive&&!w&&A||h>y&&A,M=!1;const U=Array.isArray(x)?x:[x];let Y=U.reduce(s(_),{});C===!1&&(Y={});const{prevResolvedValues:J={}}=v,N={...J,...Y},k=D=>{S=!0,p.has(D)&&(M=!0,p.delete(D)),v.needsAnimating[D]=!0;const F=t.getValue(D);F&&(F.liveStyle=!1)};for(const D in N){const F=Y[D],O=J[D];if(g.hasOwnProperty(D))continue;let $=!1;Id(F)&&Id(O)?$=!hS(F,O):$=F!==O,$?F!=null?k(D):p.add(D):F!==void 0&&p.has(D)?k(D):v.protectedKeys[D]=!0}v.prevProp=x,v.prevResolvedValues=Y,v.isActive&&(g={...g,...Y}),(i||r)&&t.blockInitialAnimation&&(S=!1);const j=w&&b;S&&(!j||M)&&d.push(...U.map(D=>{const F={type:_};if(typeof D=="string"&&(i||r)&&!j&&t.manuallyAnimateOnMount&&t.parent){const{parent:O}=t,$=Gr(O,D);if(O.enteringChildren&&$){const{delayChildren:Z}=$.transition||{};F.delay=Ux(O.enteringChildren,t,Z)}}return{animation:D,options:F}}))}if(p.size){const h={};if(typeof u.initial!="boolean"){const _=Gr(t,Array.isArray(u.initial)?u.initial[0]:u.initial);_&&_.transition&&(h.transition=_.transition)}p.forEach(_=>{const v=t.getBaseTarget(_),x=t.getValue(_);x&&(x.liveStyle=!0),h[_]=v??null}),d.push({animation:h})}let m=!!d.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(m=!1),i=!1,r=!1,m?e(d):Promise.resolve()}function l(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=t.variantChildren)==null||d.forEach(p=>{var g;return(g=p.animationState)==null?void 0:g.setActive(c,u)}),n[c].isActive=u;const f=a(c);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=wg(),r=!0}}}function FC(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!hS(e,t):!1}function Er(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function wg(){return{animate:Er(!0),whileInView:Er(),whileHover:Er(),whileTap:Er(),whileDrag:Er(),whileFocus:Er(),exit:Er()}}function Gd(t,e){t.min=e.min,t.max=e.max}function Gn(t,e){Gd(t.x,e.x),Gd(t.y,e.y)}function Ag(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const pS=1e-4,OC=1-pS,kC=1+pS,mS=.01,BC=0-mS,VC=0+mS;function sn(t){return t.max-t.min}function zC(t,e,n){return Math.abs(t-e)<=n}function Cg(t,e,n,i=.5){t.origin=i,t.originPoint=ot(e.min,e.max,t.origin),t.scale=sn(n)/sn(e),t.translate=ot(n.min,n.max,t.origin)-t.originPoint,(t.scale>=OC&&t.scale<=kC||isNaN(t.scale))&&(t.scale=1),(t.translate>=BC&&t.translate<=VC||isNaN(t.translate))&&(t.translate=0)}function jo(t,e,n,i){Cg(t.x,e.x,n.x,i?i.originX:void 0),Cg(t.y,e.y,n.y,i?i.originY:void 0)}function Rg(t,e,n,i=0){const r=i?ot(n.min,n.max,i):n.min;t.min=r+e.min,t.max=t.min+sn(e)}function HC(t,e,n,i){Rg(t.x,e.x,n.x,i==null?void 0:i.x),Rg(t.y,e.y,n.y,i==null?void 0:i.y)}function bg(t,e,n,i=0){const r=i?ot(n.min,n.max,i):n.min;t.min=e.min-r,t.max=t.min+sn(e)}function wc(t,e,n,i){bg(t.x,e.x,n.x,i==null?void 0:i.x),bg(t.y,e.y,n.y,i==null?void 0:i.y)}function Pg(t,e,n,i,r){return t-=e,t=Tc(t,1/n,i),r!==void 0&&(t=Tc(t,1/r,i)),t}function GC(t,e=0,n=1,i=.5,r,s=t,o=t){if(pi.test(e)&&(e=parseFloat(e),e=ot(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=ot(s.min,s.max,i);t===s&&(a-=e),t.min=Pg(t.min,e,n,a,r),t.max=Pg(t.max,e,n,a,r)}function Lg(t,e,[n,i,r],s,o){GC(t,e[n],e[i],e[r],e.scale,s,o)}const WC=["x","scaleX","originX"],jC=["y","scaleY","originY"];function Dg(t,e,n,i){Lg(t.x,e,WC,n?n.x:void 0,i?i.x:void 0),Lg(t.y,e,jC,n?n.y:void 0,i?i.y:void 0)}function Ng(t){return t.translate===0&&t.scale===1}function gS(t){return Ng(t.x)&&Ng(t.y)}function Ig(t,e){return t.min===e.min&&t.max===e.max}function XC(t,e){return Ig(t.x,e.x)&&Ig(t.y,e.y)}function Ug(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function vS(t,e){return Ug(t.x,e.x)&&Ug(t.y,e.y)}function Fg(t){return sn(t.x)/sn(t.y)}function Og(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function li(t){return[t("x"),t("y")]}function YC(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:f,rotateY:d,skewX:p,skewY:g}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),f&&(i+=`rotateX(${f}deg) `),d&&(i+=`rotateY(${d}deg) `),p&&(i+=`skewX(${p}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const _S=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],$C=_S.length,kg=t=>typeof t=="string"?parseFloat(t):t,Bg=t=>typeof t=="number"||he.test(t);function qC(t,e,n,i,r,s){r?(t.opacity=ot(0,n.opacity??1,KC(i)),t.opacityExit=ot(e.opacity??1,0,ZC(i))):s&&(t.opacity=ot(e.opacity??1,n.opacity??1,i));for(let o=0;o<$C;o++){const a=_S[o];let l=Vg(e,a),c=Vg(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Bg(l)===Bg(c)?(t[a]=Math.max(ot(kg(l),kg(c),i),0),(pi.test(c)||pi.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=ot(e.rotate||0,n.rotate||0,i))}function Vg(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const KC=yS(0,.5,cx),ZC=yS(.5,.95,Bn);function yS(t,e,n){return i=>i<t?0:i>e?1:n(fa(t,e,i))}function QC(t,e,n){const i=Vt(t)?t:eo(t);return i.start(dp("",i,e,n)),i.animation}function pa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const JC=(t,e)=>t.depth-e.depth;class eR{constructor(){this.children=[],this.isDirty=!1}add(e){Jh(this.children,e),this.isDirty=!0}remove(e){_c(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(JC),this.isDirty=!1,this.children.forEach(e)}}function tR(t,e){const n=rn.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(mr(i),t(s-e))};return Je.setup(i,!0),()=>mr(i)}function jl(t){return Vt(t)?t.get():t}class nR{constructor(){this.members=[]}add(e){Jh(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;(!r||r.isConnected===!1)&&!i.snapshot&&(_c(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(_c(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let i=this.members.indexOf(e)-1;i>=0;i--){const r=this.members[i];if(r.isPresent!==!1&&((n=r.instance)==null?void 0:n.isConnected)!==!1)return this.promote(r),!0}return!1}promote(e,n){var r;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:s}=i.options,{layoutDependency:o}=e.options;(s===void 0||s!==o)&&(e.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(r=e.root)!=null&&r.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,i,r,s,o;(i=(n=e.options).onExitComplete)==null||i.call(n),(o=(r=e.resumingFrom)==null?void 0:(s=r.options).onExitComplete)==null||o.call(s)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Xl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Wu=["","X","Y","Z"],iR=1e3;let rR=0;function ju(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function xS(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Vx(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",Je,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&xS(i)}function SS({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=rR++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(aR),this.nodes.forEach(hR),this.nodes.forEach(pR),this.nodes.forEach(lR)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new eR)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new tp),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=_p(o)&&!oC(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let u,f=0;const d=()=>this.root.updateBlockedByResize=!1;Je.read(()=>{f=window.innerWidth}),t(o,()=>{const p=window.innerWidth;p!==f&&(f=p,this.root.updateBlockedByResize=!0,u&&u(),u=tR(d,250),Xl.hasAnimatedSinceResize&&(Xl.hasAnimatedSinceResize=!1,this.nodes.forEach(Gg)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:f,hasRelativeLayoutChanged:d,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||c.getDefaultTransition()||yR,{onLayoutAnimationStart:y,onLayoutAnimationComplete:m}=c.getProps(),h=!this.targetLayout||!vS(this.targetLayout,p),_=!f&&d;if(this.options.layoutRoot||this.resumeFrom||_||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const v={...fp(g,"layout"),onPlay:y,onComplete:m};(c.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v),this.setAnimationOrigin(u,_)}else f||Gg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),mr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(mR),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&xS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,(typeof f.latestValues.x=="string"||typeof f.latestValues.y=="string")&&(f.isLayoutDirty=!0),f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(uR),this.nodes.forEach(zg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Hg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(fR),this.nodes.forEach(dR),this.nodes.forEach(sR),this.nodes.forEach(oR)):this.nodes.forEach(Hg),this.clearAllSnapshots();const a=rn.now();kt.delta=mi(0,1e3/60,a-kt.timestamp),kt.timestamp=a,kt.isProcessing=!0,Fu.update.process(kt),Fu.preRender.process(kt),Fu.render.process(kt),kt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,gp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(cR),this.sharedNodes.forEach(gR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Je.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Je.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!sn(this.snapshot.measuredBox.x)&&!sn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=At()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!gS(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||Pr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),xR(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return At();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(SR))){const{scroll:u}=this.root;u&&(ci(a.x,u.offset.x),ci(a.y,u.offset.y))}return a}removeElementScroll(o){var l;const a=At();if(Gn(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:d}=u;u!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&Gn(a,o),ci(a.x,f.offset.x),ci(a.y,f.offset.y))}return a}applyTransform(o,a=!1,l){var u,f;const c=l||At();Gn(c,o);for(let d=0;d<this.path.length;d++){const p=this.path[d];!a&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(ci(c.x,-p.scroll.offset.x),ci(c.y,-p.scroll.offset.y)),Pr(p.latestValues)&&Wl(c,p.latestValues,(u=p.layout)==null?void 0:u.layoutBox)}return Pr(this.latestValues)&&Wl(c,this.latestValues,(f=this.layout)==null?void 0:f.layoutBox),c}removeTransform(o){var l;const a=At();Gn(a,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!Pr(u.latestValues))continue;let f;u.instance&&(Vd(u.latestValues)&&u.updateSnapshot(),f=At(),Gn(f,u.measurePageBox())),Dg(a,u.latestValues,(l=u.snapshot)==null?void 0:l.layoutBox,f)}return Pr(this.latestValues)&&Dg(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==kt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var p;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:f}=this.options;if(!this.layout||!(u||f))return;this.resolvedRelativeTargetAt=kt.timestamp;const d=this.getClosestProjectingParent();d&&this.linkedParentVersion!==d.layoutVersion&&!d.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&d&&d.layout?this.createRelativeTarget(d,this.layout.layoutBox,d.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=At(),this.targetWithTransforms=At()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),HC(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Gn(this.target,this.layout.layoutBox),rS(this.target,this.targetDelta)):Gn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?this.createRelativeTarget(d,this.target,d.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Vd(this.parent.latestValues)||iS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=At(),this.relativeTargetOrigin=At(),wc(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),Gn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var g;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===kt.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;Gn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,d=this.treeScale.y;vC(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=At());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ag(this.prevProjectionDelta.x,this.projectionDelta.x),Ag(this.prevProjectionDelta.y,this.projectionDelta.y)),jo(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==d||!Og(this.projectionDelta.x,this.prevProjectionDelta.x)||!Og(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Us(),this.projectionDelta=Us(),this.projectionDeltaWithTransform=Us()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=Us();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=At(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,y=p!==g,m=this.getStack(),h=!m||m.members.length<=1,_=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(_R));this.animationProgress=0;let v;this.mixTargetDelta=x=>{const A=x/1e3;Wg(f.x,o.x,A),Wg(f.y,o.y,A),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(wc(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),vR(this.relativeTarget,this.relativeTargetOrigin,d,A),v&&XC(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=At()),Gn(v,this.relativeTarget)),y&&(this.animationValues=u,qC(u,c,this.latestValues,A,_,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=A},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(mr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Je.update(()=>{Xl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=eo(0)),this.motionValue.jump(0,!1),this.currentAnimation=QC(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(iR),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&MS(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||At();const f=sn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=sn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}Gn(a,l),Wl(a,u),jo(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new nR),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&ju("z",o,c,this.animationValues);for(let u=0;u<Wu.length;u++)ju(`rotate${Wu[u]}`,o,c,this.animationValues),ju(`skew${Wu[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=jl(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=jl(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Pr(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let f=YC(this.projectionDeltaWithTransform,this.treeScale,u);l&&(f=l(u,f)),o.transform=f;const{x:d,y:p}=this.projectionDelta;o.transformOrigin=`${d.origin*100}% ${p.origin*100}% 0`,c.animationValues?o.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const g in Hd){if(u[g]===void 0)continue;const{correct:y,applyTo:m,isCSSVariable:h}=Hd[g],_=f==="none"?u[g]:y(u[g],c);if(m){const v=m.length;for(let x=0;x<v;x++)o[m[x]]=_}else h?this.options.visualElement.renderState.vars[g]=_:o[g]=_}this.options.layoutId&&(o.pointerEvents=c===this?jl(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(zg),this.root.sharedNodes.clear()}}}function sR(t){t.updateLayout()}function oR(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;if(s==="size")li(f=>{const d=o?e.measuredBox[f]:e.layoutBox[f],p=sn(d);d.min=i[f].min,d.max=d.min+p});else if(s==="x"||s==="y"){const f=s==="x"?"y":"x";Gd(o?e.measuredBox[f]:e.layoutBox[f],i[f])}else MS(s,e.layoutBox,i)&&li(f=>{const d=o?e.measuredBox[f]:e.layoutBox[f],p=sn(i[f]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=Us();jo(a,i,e.layoutBox);const l=Us();o?jo(l,t.applyTransform(r,!0),e.measuredBox):jo(l,i,e.layoutBox);const c=!gS(a);let u=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:p}=f;if(d&&p){const g=t.options.layoutAnchor||void 0,y=At();wc(y,e.layoutBox,d.layoutBox,g);const m=At();wc(m,i,p.layoutBox,g),vS(y,m)||(u=!0),f.options.layoutRoot&&(t.relativeTarget=m,t.relativeTargetOrigin=y,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function aR(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function lR(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function cR(t){t.clearSnapshot()}function zg(t){t.clearMeasurements()}function uR(t){t.isLayoutDirty=!0,t.updateLayout()}function Hg(t){t.isLayoutDirty=!1}function fR(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function dR(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Gg(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function hR(t){t.resolveTargetDelta()}function pR(t){t.calcProjection()}function mR(t){t.resetSkewAndRotation()}function gR(t){t.removeLeadSnapshot()}function Wg(t,e,n){t.translate=ot(e.translate,0,n),t.scale=ot(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function jg(t,e,n,i){t.min=ot(e.min,n.min,i),t.max=ot(e.max,n.max,i)}function vR(t,e,n,i){jg(t.x,e.x,n.x,i),jg(t.y,e.y,n.y,i)}function _R(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const yR={duration:.45,ease:[.4,0,.1,1]},Xg=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Yg=Xg("applewebkit/")&&!Xg("chrome/")?Math.round:Bn;function $g(t){t.min=Yg(t.min),t.max=Yg(t.max)}function xR(t){$g(t.x),$g(t.y)}function MS(t,e,n){return t==="position"||t==="preserve-aspect"&&!zC(Fg(e),Fg(n),.2)}function SR(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const MR=SS({attachResizeListener:(t,e)=>pa(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Xu={current:void 0},ES=SS({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Xu.current){const t=new MR({});t.mount(window),t.setOptions({layoutScroll:!0}),Xu.current=t}return Xu.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Ep=re.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function qg(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function ER(...t){return e=>{let n=!1;const i=t.map(r=>{const s=qg(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():qg(t[r],null)}}}}function TR(...t){return re.useCallback(ER(...t),t)}class wR extends re.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(Vl(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=n.offsetParent,r=Vl(i)&&i.offsetWidth||0,s=Vl(i)&&i.offsetHeight||0,o=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=r-a.width-a.left,a.bottom=s-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}}function AR({children:t,isPresent:e,anchorX:n,anchorY:i,root:r,pop:s}){var d;const o=re.useId(),a=re.useRef(null),l=re.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=re.useContext(Ep),u=((d=t.props)==null?void 0:d.ref)??(t==null?void 0:t.ref),f=TR(a,u);return re.useInsertionEffect(()=>{const{width:p,height:g,top:y,left:m,right:h,bottom:_}=l.current;if(e||s===!1||!a.current||!p||!g)return;const v=n==="left"?`left: ${m}`:`right: ${h}`,x=i==="bottom"?`bottom: ${_}`:`top: ${y}`;a.current.dataset.motionPopId=o;const A=document.createElement("style");c&&(A.nonce=c);const C=r??document.head;return C.appendChild(A),A.sheet&&A.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${g}px !important;
            ${v}px !important;
            ${x}px !important;
          }
        `),()=>{var w;(w=a.current)==null||w.removeAttribute("data-motion-pop-id"),C.contains(A)&&C.removeChild(A)}},[e]),P.jsx(wR,{isPresent:e,childRef:a,sizeRef:l,pop:s,children:s===!1?t:re.cloneElement(t,{ref:f})})}const CR=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o,anchorX:a,anchorY:l,root:c})=>{const u=Qh(RR),f=re.useId();let d=!0,p=re.useMemo(()=>(d=!1,{id:f,initial:e,isPresent:n,custom:r,onExitComplete:g=>{u.set(g,!0);for(const y of u.values())if(!y)return;i&&i()},register:g=>(u.set(g,!1),()=>u.delete(g))}),[n,u,i]);return s&&d&&(p={...p}),re.useMemo(()=>{u.forEach((g,y)=>u.set(y,!1))},[n]),re.useEffect(()=>{!n&&!u.size&&i&&i()},[n]),t=P.jsx(AR,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:l,root:c,children:t}),P.jsx(qc.Provider,{value:p,children:t})};function RR(){return new Map}function TS(t=!0){const e=re.useContext(qc);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=re.useId();re.useEffect(()=>{if(t)return r(s)},[t]);const o=re.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const Ja=t=>t.key||"";function Kg(t){const e=[];return re.Children.forEach(t,n=>{re.isValidElement(n)&&e.push(n)}),e}const bR=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:c})=>{const[u,f]=TS(o),d=re.useMemo(()=>Kg(t),[t]),p=o&&!u?[]:d.map(Ja),g=re.useRef(!0),y=re.useRef(d),m=Qh(()=>new Map),h=re.useRef(new Set),[_,v]=re.useState(d),[x,A]=re.useState(d);Zy(()=>{g.current=!1,y.current=d;for(let b=0;b<x.length;b++){const S=Ja(x[b]);p.includes(S)?(m.delete(S),h.current.delete(S)):m.get(S)!==!0&&m.set(S,!1)}},[x,p.length,p.join("-")]);const C=[];if(d!==_){let b=[...d];for(let S=0;S<x.length;S++){const M=x[S],U=Ja(M);p.includes(U)||(b.splice(S,0,M),C.push(M))}return s==="wait"&&C.length&&(b=C),A(Kg(b)),v(d),null}const{forceRender:w}=re.useContext(Zh);return P.jsx(P.Fragment,{children:x.map(b=>{const S=Ja(b),M=o&&!u?!1:d===x||p.includes(S),U=()=>{if(h.current.has(S))return;if(m.has(S))h.current.add(S),m.set(S,!0);else return;let Y=!0;m.forEach(J=>{J||(Y=!1)}),Y&&(w==null||w(),A(y.current),o&&(f==null||f()),i&&i())};return P.jsx(CR,{isPresent:M,initial:!g.current||n?void 0:!1,custom:e,presenceAffectsLayout:r,mode:s,root:c,onExitComplete:M?void 0:U,anchorX:a,anchorY:l,children:b},S)})})},wS=re.createContext({strict:!1}),Zg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Qg=!1;function PR(){if(Qg)return;const t={};for(const e in Zg)t[e]={isEnabled:n=>Zg[e].some(i=>!!n[i])};eS(t),Qg=!0}function AS(){return PR(),hC()}function LR(t){const e=AS();for(const n in t)e[n]={...e[n],...t[n]};eS(e)}const DR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ac(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||DR.has(t)}let CS=t=>!Ac(t);function NR(t){typeof t=="function"&&(CS=e=>e.startsWith("on")?!Ac(e):t(e))}try{NR(require("@emotion/is-prop-valid").default)}catch{}function IR(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||Vt(t[r])||(CS(r)||n===!0&&Ac(r)||!e&&!Ac(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}const Jc=re.createContext({});function UR(t,e){if(Qc(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ha(n)?n:void 0,animate:ha(i)?i:void 0}}return t.inherit!==!1?e:{}}function FR(t){const{initial:e,animate:n}=UR(t,re.useContext(Jc));return re.useMemo(()=>({initial:e,animate:n}),[Jg(e),Jg(n)])}function Jg(t){return Array.isArray(t)?t.join(" "):t}const Tp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function RS(t,e,n){for(const i in e)!Vt(e[i])&&!aS(i,n)&&(t[i]=e[i])}function OR({transformTemplate:t},e){return re.useMemo(()=>{const n=Tp();return Sp(n,e,t),Object.assign({},n.vars,n.style)},[e])}function kR(t,e){const n=t.style||{},i={};return RS(i,n,t),Object.assign(i,OR(t,e)),i}function BR(t,e){const n={},i=kR(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const bS=()=>({...Tp(),attrs:{}});function VR(t,e,n,i){const r=re.useMemo(()=>{const s=bS();return lS(s,e,uS(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};RS(s,t.style,t),r.style={...s,...r.style}}return r}const zR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function wp(t){return typeof t!="string"||t.includes("-")?!1:!!(zR.indexOf(t)>-1||/[A-Z]/u.test(t))}function HR(t,e,n,{latestValues:i},r,s=!1,o){const l=(o??wp(t)?VR:BR)(e,i,r,t),c=IR(e,typeof t=="string",s),u=t!==re.Fragment?{...c,...l,ref:n}:{},{children:f}=e,d=re.useMemo(()=>Vt(f)?f.get():f,[f]);return re.createElement(t,{...u,children:d})}function GR({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:WR(n,i,r,t),renderState:e()}}function WR(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=jl(s[d]);let{initial:o,animate:a}=t;const l=Qc(t),c=Qx(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?a:o;if(f&&typeof f!="boolean"&&!Zc(f)){const d=Array.isArray(f)?f:[f];for(let p=0;p<d.length;p++){const g=hp(t,d[p]);if(g){const{transitionEnd:y,transition:m,...h}=g;for(const _ in h){let v=h[_];if(Array.isArray(v)){const x=u?v.length-1:0;v=v[x]}v!==null&&(r[_]=v)}for(const _ in y)r[_]=y[_]}}}return r}const PS=t=>(e,n)=>{const i=re.useContext(Jc),r=re.useContext(qc),s=()=>GR(t,e,i,r);return n?s():Qh(s)},jR=PS({scrapeMotionValuesFromProps:Mp,createRenderState:Tp}),XR=PS({scrapeMotionValuesFromProps:fS,createRenderState:bS}),YR=Symbol.for("motionComponentSymbol");function $R(t,e,n){const i=re.useRef(n);re.useInsertionEffect(()=>{i.current=n});const r=re.useRef(null);return re.useCallback(s=>{var a;s&&((a=t.onMount)==null||a.call(t,s));const o=i.current;if(typeof o=="function")if(s){const l=o(s);typeof l=="function"&&(r.current=l)}else r.current?(r.current(),r.current=null):o(s);else o&&(o.current=s);e&&(s?e.mount(s):e.unmount())},[e])}const LS=re.createContext({});function xs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function qR(t,e,n,i,r,s){var v,x;const{visualElement:o}=re.useContext(Jc),a=re.useContext(wS),l=re.useContext(qc),c=re.useContext(Ep),u=c.reducedMotion,f=c.skipAnimations,d=re.useRef(null),p=re.useRef(!1);i=i||a.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,skipAnimations:f,isSVG:s}),p.current&&d.current&&(d.current.manuallyAnimateOnMount=!0));const g=d.current,y=re.useContext(LS);g&&!g.projection&&r&&(g.type==="html"||g.type==="svg")&&KR(d.current,n,r,y);const m=re.useRef(!1);re.useInsertionEffect(()=>{g&&m.current&&g.update(n,l)});const h=n[Bx],_=re.useRef(!!h&&typeof window<"u"&&!((v=window.MotionHandoffIsComplete)!=null&&v.call(window,h))&&((x=window.MotionHasOptimisedAnimation)==null?void 0:x.call(window,h)));return Zy(()=>{p.current=!0,g&&(m.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),_.current&&g.animationState&&g.animationState.animateChanges())}),re.useEffect(()=>{g&&(!_.current&&g.animationState&&g.animationState.animateChanges(),_.current&&(queueMicrotask(()=>{var A;(A=window.MotionHandoffMarkAsComplete)==null||A.call(window,h)}),_.current=!1),g.enteringChildren=void 0)}),g}function KR(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutAnchor:u,layoutCrossfade:f}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:DS(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&xs(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:f,layoutScroll:l,layoutRoot:c,layoutAnchor:u})}function DS(t){if(t)return t.options.allowProjection!==!1?t.projection:DS(t.parent)}function Yu(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&LR(i);const s=n?n==="svg":wp(t),o=s?XR:jR;function a(c,u){let f;const d={...re.useContext(Ep),...c,layoutId:ZR(c)},{isStatic:p}=d,g=FR(c),y=o(c,p);if(!p&&typeof window<"u"){QR();const m=JR(d);f=m.MeasureLayout,g.visualElement=qR(t,y,d,r,m.ProjectionNode,s)}return P.jsxs(Jc.Provider,{value:g,children:[f&&g.visualElement?P.jsx(f,{visualElement:g.visualElement,...d}):null,HR(t,c,$R(y,g.visualElement,u),y,p,e,s)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=re.forwardRef(a);return l[YR]=t,l}function ZR({layoutId:t}){const e=re.useContext(Zh).id;return e&&t!==void 0?e+"-"+t:t}function QR(t,e){re.useContext(wS).strict}function JR(t){const e=AS(),{drag:n,layout:i}=e;if(!n&&!i)return{};const r={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function eb(t,e){if(typeof Proxy>"u")return Yu;const n=new Map,i=(s,o)=>Yu(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,Yu(o,void 0,t,e)),n.get(o))})}const tb=(t,e)=>e.isSVG??wp(t)?new PC(e):new TC(e,{allowProjection:t!==re.Fragment});class nb extends xr{constructor(e){super(e),e.animationState||(e.animationState=UC(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Zc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let ib=0;class rb extends xr{constructor(){super(...arguments),this.id=ib++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:o,custom:a}=this.node.getProps();if(typeof o=="string"){const l=Gr(this.node,o,a);if(l){const{transition:c,transitionEnd:u,...f}=l;for(const d in f)(s=this.node.getValue(d))==null||s.jump(f[d])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const sb={animation:{Feature:nb},exit:{Feature:rb}};function Aa(t){return{point:{x:t.pageX,y:t.pageY}}}const ob=t=>e=>vp(e)&&t(e,Aa(e));function Xo(t,e,n,i){return pa(t,e,ob(n),i)}const NS=({current:t})=>t?t.ownerDocument.defaultView:null,ev=(t,e)=>Math.abs(t-e);function ab(t,e){const n=ev(t.x,e.x),i=ev(t.y,e.y);return Math.sqrt(n**2+i**2)}const tv=new Set(["auto","scroll"]);class IS{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=p=>{this.handleScroll(p.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=el(this.lastRawMoveEventInfo,this.transformPagePoint));const p=$u(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,y=ab(p.offset,{x:0,y:0})>=this.distanceThreshold;if(!g&&!y)return;const{point:m}=p,{timestamp:h}=kt;this.history.push({...m,timestamp:h});const{onStart:_,onMove:v}=this.handlers;g||(_&&_(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,p)},this.handlePointerMove=(p,g)=>{this.lastMoveEvent=p,this.lastRawMoveEventInfo=g,this.lastMoveEventInfo=el(g,this.transformPagePoint),Je.update(this.updatePoint,!0)},this.handlePointerUp=(p,g)=>{this.end();const{onEnd:y,onSessionEnd:m,resumeAnimation:h}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&h&&h(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const _=$u(p.type==="pointercancel"?this.lastMoveEventInfo:el(g,this.transformPagePoint),this.history);this.startEvent&&y&&y(p,_),m&&m(p,_)},!vp(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const l=Aa(e),c=el(l,this.transformPagePoint),{point:u}=c,{timestamp:f}=kt;this.history=[{...u,timestamp:f}];const{onSessionStart:d}=n;d&&d(e,$u(c,this.history)),this.removeListeners=Ea(Xo(this.contextWindow,"pointermove",this.handlePointerMove),Xo(this.contextWindow,"pointerup",this.handlePointerUp),Xo(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(tv.has(i.overflowX)||tv.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-n.x,y:r.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),Je.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),mr(this.updatePoint)}}function el(t,e){return e?{point:e(t.point)}:t}function nv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function $u({point:t},e){return{point:t,delta:nv(t,US(e)),offset:nv(t,lb(e)),velocity:cb(e,.1)}}function lb(t){return t[0]}function US(t){return t[t.length-1]}function cb(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=US(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Tn(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>Tn(e)*2&&(i=t[1]);const s=On(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function ub(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?ot(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?ot(n,t,i.max):Math.min(t,n)),t}function iv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function fb(t,{top:e,left:n,bottom:i,right:r}){return{x:iv(t.x,n,r),y:iv(t.y,e,i)}}function rv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function db(t,e){return{x:rv(t.x,e.x),y:rv(t.y,e.y)}}function hb(t,e){let n=.5;const i=sn(t),r=sn(e);return r>i?n=fa(e.min,e.max-i,t.min):i>r&&(n=fa(t.min,t.max-r,e.min)),mi(0,1,n)}function pb(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Wd=.35;function mb(t=Wd){return t===!1?t=0:t===!0&&(t=Wd),{x:sv(t,"left","right"),y:sv(t,"top","bottom")}}function sv(t,e,n){return{min:ov(t,e),max:ov(t,n)}}function ov(t,e){return typeof t=="number"?t:t[e]||0}const gb=new WeakMap;class vb{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=At(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=f=>{n&&this.snapToCursor(Aa(f).point),this.stopAnimation()},o=(f,d)=>{const{drag:p,dragPropagation:g,onDragStart:y}=this.getProps();if(p&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=GA(p),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=d,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),li(h=>{let _=this.getAxisMotionValue(h).get()||0;if(pi.test(_)){const{projection:v}=this.visualElement;if(v&&v.layout){const x=v.layout.layoutBox[h];x&&(_=sn(x)*(parseFloat(_)/100))}}this.originPoint[h]=_}),y&&Je.update(()=>y(f,d),!1,!0),Ud(this.visualElement,"transform");const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},a=(f,d)=>{this.latestPointerEvent=f,this.latestPanInfo=d;const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:y,onDrag:m}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:h}=d;if(g&&this.currentDirection===null){this.currentDirection=yb(h),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",d.point,h),this.updateAxis("y",d.point,h),this.visualElement.render(),m&&Je.update(()=>m(f,d),!1,!0)},l=(f,d)=>{this.latestPointerEvent=f,this.latestPanInfo=d,this.stop(f,d),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:f}=this.getProps();(f||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new IS(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:i,contextWindow:NS(this.visualElement),element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&Je.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!tl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=ub(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&xs(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=fb(i.layoutBox,e):this.constraints=!1,this.elastic=mb(n),r!==this.constraints&&!xs(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&li(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=pb(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!xs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=_C(i,r.root,this.visualElement.getTransformPagePoint());let o=db(r.layout.layoutBox,s);if(n){const a=n(mC(o));this.hasMutatedConstraints=!!a,a&&(o=nS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=li(u=>{if(!tl(u,n,this.currentDirection))return;let f=l&&l[u]||{};(o===!0||o===u)&&(f={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Ud(this.visualElement,e),i.start(dp(e,i,0,n,this.visualElement,!1))}stopAnimation(){li(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){li(n=>{const{drag:i}=this.getProps();if(!tl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n],l=s.get()||0;s.set(e[n]-ot(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!xs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};li(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=hb({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),li(o=>{if(!tl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(ot(l,c,r[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;gb.set(this.visualElement,this);const e=this.visualElement.current,n=Xo(e,"pointerdown",c=>{const{drag:u,dragListener:f=!0}=this.getProps(),d=c.target,p=d!==e&&qA(d);u&&f&&!p&&this.start(c)});let i;const r=()=>{const{dragConstraints:c}=this.getProps();xs(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),i||(i=_b(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),Je.read(r);const a=pa(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(li(f=>{const d=this.getAxisMotionValue(f);d&&(this.originPoint[f]+=c[f].translate,d.set(d.get()+c[f].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Wd,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function av(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function _b(t,e,n){const i=pg(t,av(n)),r=pg(e,av(n));return()=>{i(),r()}}function tl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function yb(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class xb extends xr{constructor(e){super(e),this.removeGroupControls=Bn,this.removeListeners=Bn,this.controls=new vb(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Bn}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const qu=t=>(e,n)=>{t&&Je.update(()=>t(e,n),!1,!0)};class Sb extends xr{constructor(){super(...arguments),this.removePointerDownListener=Bn}onPointerDown(e){this.session=new IS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:NS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:qu(e),onStart:qu(n),onMove:qu(i),onEnd:(s,o)=>{delete this.session,r&&Je.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Xo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Ku=!1;class Mb extends re.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),Ku&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Xl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),Ku=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||Je.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=n,i.root.didUpdate(),gp.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;Ku=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function FS(t){const[e,n]=TS(),i=re.useContext(Zh);return P.jsx(Mb,{...t,layoutGroup:i,switchLayoutGroup:re.useContext(LS),isPresent:e,safeToRemove:n})}const Eb={pan:{Feature:Sb},drag:{Feature:xb,ProjectionNode:ES,MeasureLayout:FS}};function lv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&Je.postRender(()=>s(e,Aa(e)))}class Tb extends xr{mount(){const{current:e}=this.node;e&&(this.unmount=jA(e,(n,i)=>(lv(this.node,i,"Start"),r=>lv(this.node,r,"End"))))}unmount(){}}class wb extends xr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ea(pa(this.node.current,"focus",()=>this.onFocus()),pa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function cv(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&Je.postRender(()=>s(e,Aa(e)))}class Ab extends xr{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=ZA(e,(r,s)=>(cv(this.node,s,"Start"),(o,{success:a})=>cv(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const jd=new WeakMap,Zu=new WeakMap,Cb=t=>{const e=jd.get(t.target);e&&e(t)},Rb=t=>{t.forEach(Cb)};function bb({root:t,...e}){const n=t||document;Zu.has(n)||Zu.set(n,{});const i=Zu.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(Rb,{root:t,...e})),i[r]}function Pb(t,e,n){const i=bb(e);return jd.set(t,n),i.observe(t),()=>{jd.delete(t),i.unobserve(t)}}const Lb={some:0,all:1};class Db extends xr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:Lb[r]},a=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:f,onViewportLeave:d}=this.node.getProps(),p=u?f:d;p&&p(c)};this.stopObserver=Pb(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(Nb(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Nb({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const Ib={inView:{Feature:Db},tap:{Feature:Ab},focus:{Feature:wb},hover:{Feature:Tb}},Ub={layout:{ProjectionNode:ES,MeasureLayout:FS}},Fb={...sb,...Ib,...Eb,...Ub},St=eb(Fb,tb),uv=[{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Experience",href:"#experience"},{name:"Projects",href:"#projects"},{name:"Services",href:"#services"},{name:"Contact",href:"#contact"}];function Ob(){const[t,e]=re.useState(!1),[n,i]=re.useState(!1);return re.useEffect(()=>{const r=()=>i(window.scrollY>50);return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),P.jsxs(St.nav,{initial:{y:-100},animate:{y:0},className:`fixed w-full z-50 transition-all duration-300 ${n?"glass py-4":"bg-transparent py-6"}`,children:[P.jsxs("div",{className:"max-w-7xl mx-auto px-6 flex justify-between items-center",children:[P.jsxs("a",{href:"#",className:"text-2xl font-bold tracking-tighter text-white",children:["AJAY",P.jsx("span",{className:"text-cyan-500",children:"."})]}),P.jsx("div",{className:"hidden md:flex gap-8",children:uv.map(r=>P.jsx("a",{href:r.href,className:"text-sm font-medium text-white hover:text-cyan-400 transition-colors",children:r.name},r.name))}),P.jsx("button",{className:"md:hidden text-white",onClick:()=>e(!t),children:t?P.jsx(Ow,{}):P.jsx(Dw,{})})]}),t&&P.jsx(St.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"md:hidden absolute top-full left-0 w-full glass flex flex-col items-center py-6 gap-6",children:uv.map(r=>P.jsx("a",{href:r.href,onClick:()=>e(!1),className:"text-lg font-medium text-white hover:text-cyan-400",children:r.name},r.name))})]})}function kb(){const[t,e]=re.useState({x:0,y:0}),[n,i]=re.useState(!1);return re.useEffect(()=>{const r=o=>{e({x:o.clientX,y:o.clientY})},s=o=>{const a=o.target;a.tagName.toLowerCase()==="a"||a.tagName.toLowerCase()==="button"||a.closest("a")||a.closest("button")?i(!0):i(!1)};return window.addEventListener("mousemove",r),window.addEventListener("mouseover",s),()=>{window.removeEventListener("mousemove",r),window.removeEventListener("mouseover",s)}},[]),P.jsxs("div",{className:"hidden md:block",children:[P.jsx(St.div,{className:"fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-[100] mix-blend-screen",animate:{x:t.x-6,y:t.y-6,scale:n?2.5:1},transition:{type:"tween",ease:"backOut",duration:.1}}),P.jsx(St.div,{className:"fixed top-0 left-0 w-10 h-10 border border-cyan-500/40 rounded-full pointer-events-none z-[99]",animate:{x:t.x-20,y:t.y-20,scale:n?1.5:1},transition:{type:"tween",ease:"circOut",duration:.2}})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ap="160",Bb=0,fv=1,Vb=2,OS=1,zb=2,Mi=3,gr=0,gn=1,wi=2,cr=0,Ws=1,dv=2,hv=3,pv=4,Hb=5,Nr=100,Gb=101,Wb=102,mv=103,gv=104,jb=200,Xb=201,Yb=202,$b=203,Xd=204,Yd=205,qb=206,Kb=207,Zb=208,Qb=209,Jb=210,eP=211,tP=212,nP=213,iP=214,rP=0,sP=1,oP=2,Cc=3,aP=4,lP=5,cP=6,uP=7,kS=0,fP=1,dP=2,ur=0,hP=1,pP=2,mP=3,gP=4,vP=5,_P=6,BS=300,to=301,no=302,$d=303,qd=304,eu=306,Kd=1e3,Qn=1001,Zd=1002,nn=1003,vv=1004,Qu=1005,Nn=1006,yP=1007,ma=1008,fr=1009,xP=1010,SP=1011,Cp=1012,VS=1013,Qi=1014,Ji=1015,ga=1016,zS=1017,HS=1018,Wr=1020,MP=1021,Jn=1023,EP=1024,TP=1025,jr=1026,io=1027,wP=1028,GS=1029,AP=1030,WS=1031,jS=1033,Ju=33776,ef=33777,tf=33778,nf=33779,_v=35840,yv=35841,xv=35842,Sv=35843,XS=36196,Mv=37492,Ev=37496,Tv=37808,wv=37809,Av=37810,Cv=37811,Rv=37812,bv=37813,Pv=37814,Lv=37815,Dv=37816,Nv=37817,Iv=37818,Uv=37819,Fv=37820,Ov=37821,rf=36492,kv=36494,Bv=36495,CP=36283,Vv=36284,zv=36285,Hv=36286,YS=3e3,Xr=3001,RP=3200,bP=3201,PP=0,LP=1,Un="",Bt="srgb",Ii="srgb-linear",Rp="display-p3",tu="display-p3-linear",Rc="linear",st="srgb",bc="rec709",Pc="p3",rs=7680,Gv=519,DP=512,NP=513,IP=514,$S=515,UP=516,FP=517,OP=518,kP=519,Wv=35044,jv="300 es",Qd=1035,Ri=2e3,Lc=2001;class fo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sf=Math.PI/180,Jd=180/Math.PI;function Ca(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function fn(t,e,n){return Math.max(e,Math.min(n,t))}function BP(t,e){return(t%e+e)%e}function of(t,e,n){return(1-n)*t+n*e}function Xv(t){return(t&t-1)===0&&t!==0}function eh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function To(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],y=r[0],m=r[3],h=r[6],_=r[1],v=r[4],x=r[7],A=r[2],C=r[5],w=r[8];return s[0]=o*y+a*_+l*A,s[3]=o*m+a*v+l*C,s[6]=o*h+a*x+l*w,s[1]=c*y+u*_+f*A,s[4]=c*m+u*v+f*C,s[7]=c*h+u*x+f*w,s[2]=d*y+p*_+g*A,s[5]=d*m+p*v+g*C,s[8]=d*h+p*x+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(af.makeScale(e,n)),this}rotate(e){return this.premultiply(af.makeRotation(-e)),this}translate(e,n){return this.premultiply(af.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const af=new He;function qS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Dc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function VP(){const t=Dc("canvas");return t.style.display="block",t}const Yv={};function Yo(t){t in Yv||(Yv[t]=!0,console.warn(t))}const $v=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qv=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),nl={[Ii]:{transfer:Rc,primaries:bc,toReference:t=>t,fromReference:t=>t},[Bt]:{transfer:st,primaries:bc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[tu]:{transfer:Rc,primaries:Pc,toReference:t=>t.applyMatrix3(qv),fromReference:t=>t.applyMatrix3($v)},[Rp]:{transfer:st,primaries:Pc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(qv),fromReference:t=>t.applyMatrix3($v).convertLinearToSRGB()}},zP=new Set([Ii,tu]),Ze={enabled:!0,_workingColorSpace:Ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!zP.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=nl[e].toReference,r=nl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return nl[t].primaries},getTransfer:function(t){return t===Un?Rc:nl[t].transfer}};function js(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function lf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ss;class KS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ss===void 0&&(ss=Dc("canvas")),ss.width=e.width,ss.height=e.height;const i=ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ss}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=js(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(js(n[i]/255)*255):n[i]=js(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HP=0;class ZS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HP++}),this.uuid=Ca(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cf(r[o].image)):s.push(cf(r[o]))}else s=cf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function cf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?KS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GP=0;class wn extends fo{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,i=Qn,r=Qn,s=Nn,o=ma,a=Jn,l=fr,c=wn.DEFAULT_ANISOTROPY,u=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GP++}),this.uuid=Ca(),this.name="",this.source=new ZS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Xr?Bt:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==BS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kd:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kd:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Bt?Xr:YS}set encoding(e){Yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xr?Bt:Un}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=BS;wn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,x=(p+1)/2,A=(h+1)/2,C=(u+d)/4,w=(f+y)/4,b=(g+m)/4;return v>x&&v>A?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=w/i):x>A?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=C/r,s=b/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=b/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-y)/_,this.z=(d-u)/_,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WP extends fo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Yo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Xr?Bt:Un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new wn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ZS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends WP{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class QS extends wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jP extends wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ra{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=y;return}if(f!==y||l!==d||c!==p||u!==g){let m=1-a;const h=l*d+c*p+u*g+f*y,_=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const A=Math.sqrt(v),C=Math.atan2(A,h*_);m=Math.sin(m*C)/A,a=Math.sin(a*C)/A}const x=a*_;if(l=l*m+d*x,c=c*m+p*x,u=u*m+g*x,f=f*m+y*x,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*d,e[n+1]=l*g+u*d+c*f-a*p,e[n+2]=c*g+u*p+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uf.copy(this).projectOnVector(e),this.sub(uf)}reflect(e){return this.sub(uf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uf=new G,Kv=new Ra;class ba{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(s,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),il.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),il.copy(i.boundingBox)),il.applyMatrix4(e.matrixWorld),this.union(il)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),rl.subVectors(this.max,wo),os.subVectors(e.a,wo),as.subVectors(e.b,wo),ls.subVectors(e.c,wo),ki.subVectors(as,os),Bi.subVectors(ls,as),Tr.subVectors(os,ls);let n=[0,-ki.z,ki.y,0,-Bi.z,Bi.y,0,-Tr.z,Tr.y,ki.z,0,-ki.x,Bi.z,0,-Bi.x,Tr.z,0,-Tr.x,-ki.y,ki.x,0,-Bi.y,Bi.x,0,-Tr.y,Tr.x,0];return!ff(n,os,as,ls,rl)||(n=[1,0,0,0,1,0,0,0,1],!ff(n,os,as,ls,rl))?!1:(sl.crossVectors(ki,Bi),n=[sl.x,sl.y,sl.z],ff(n,os,as,ls,rl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new G,new G,new G,new G,new G,new G,new G,new G],Wn=new G,il=new ba,os=new G,as=new G,ls=new G,ki=new G,Bi=new G,Tr=new G,wo=new G,rl=new G,sl=new G,wr=new G;function ff(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){wr.fromArray(t,s);const a=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),c=n.dot(wr),u=i.dot(wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const XP=new ba,Ao=new G,df=new G;class nu{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):XP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const n=Ao.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ao,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(df.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(df)),this.expandByPoint(Ao.copy(e.center).sub(df))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new G,hf=new G,ol=new G,Vi=new G,pf=new G,al=new G,mf=new G;class JS{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){hf.copy(e).add(n).multiplyScalar(.5),ol.copy(n).sub(e).normalize(),Vi.copy(this.origin).sub(hf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ol),a=Vi.dot(this.direction),l=-Vi.dot(ol),c=Vi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const y=1/u;f*=y,d*=y,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(hf).addScaledVector(ol,d),p}intersectSphere(e,n){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,n,i,r,s){pf.subVectors(n,e),al.subVectors(i,e),mf.crossVectors(pf,al);let o=this.direction.dot(mf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);const l=a*this.direction.dot(al.crossVectors(Vi,al));if(l<0)return null;const c=a*this.direction.dot(pf.cross(Vi));if(c<0||l+c>o)return null;const u=-a*Vi.dot(mf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,g,y,m){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,y,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,y=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,y=c*f;n[0]=d+y*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,y=c*f;n[0]=d-y*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,y=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+y,n[1]=l*f,n[5]=y*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=y-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+y,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YP,e,$P)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),zi.crossVectors(i,yn),zi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),zi.crossVectors(i,yn)),zi.normalize(),ll.crossVectors(yn,zi),r[0]=zi.x,r[4]=ll.x,r[8]=yn.x,r[1]=zi.y,r[5]=ll.y,r[9]=yn.y,r[2]=zi.z,r[6]=ll.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],y=i[6],m=i[10],h=i[14],_=i[3],v=i[7],x=i[11],A=i[15],C=r[0],w=r[4],b=r[8],S=r[12],M=r[1],U=r[5],Y=r[9],J=r[13],N=r[2],k=r[6],j=r[10],q=r[14],D=r[3],F=r[7],O=r[11],$=r[15];return s[0]=o*C+a*M+l*N+c*D,s[4]=o*w+a*U+l*k+c*F,s[8]=o*b+a*Y+l*j+c*O,s[12]=o*S+a*J+l*q+c*$,s[1]=u*C+f*M+d*N+p*D,s[5]=u*w+f*U+d*k+p*F,s[9]=u*b+f*Y+d*j+p*O,s[13]=u*S+f*J+d*q+p*$,s[2]=g*C+y*M+m*N+h*D,s[6]=g*w+y*U+m*k+h*F,s[10]=g*b+y*Y+m*j+h*O,s[14]=g*S+y*J+m*q+h*$,s[3]=_*C+v*M+x*N+A*D,s[7]=_*w+v*U+x*k+A*F,s[11]=_*b+v*Y+x*j+A*O,s[15]=_*S+v*J+x*q+A*$,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],y=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+y*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],h=e[15],_=f*m*c-y*d*c+y*l*p-a*m*p-f*l*h+a*d*h,v=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,x=u*y*c-g*f*c+g*a*p-o*y*p-u*a*h+o*f*h,A=g*f*l-u*y*l-g*a*d+o*y*d+u*a*m-o*f*m,C=n*_+i*v+r*x+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=_*w,e[1]=(y*d*s-f*m*s-y*r*p+i*m*p+f*r*h-i*d*h)*w,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*h+i*l*h)*w,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*w,e[4]=v*w,e[5]=(u*m*s-g*d*s+g*r*p-n*m*p-u*r*h+n*d*h)*w,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*h-n*l*h)*w,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*w,e[8]=x*w,e[9]=(g*f*s-u*y*s-g*i*p+n*y*p+u*i*h-n*f*h)*w,e[10]=(o*y*s-g*a*s+g*i*c-n*y*c-o*i*h+n*a*h)*w,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*w,e[12]=A*w,e[13]=(u*y*r-g*f*r+g*i*d-n*y*d-u*i*m+n*f*m)*w,e[14]=(g*a*r-o*y*r-g*i*l+n*y*l+o*i*m-n*a*m)*w,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,y=o*u,m=o*f,h=a*f,_=l*c,v=l*u,x=l*f,A=i.x,C=i.y,w=i.z;return r[0]=(1-(y+h))*A,r[1]=(p+x)*A,r[2]=(g-v)*A,r[3]=0,r[4]=(p-x)*C,r[5]=(1-(d+h))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(g+v)*w,r[9]=(m-_)*w,r[10]=(1-(d+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=cs.set(r[0],r[1],r[2]).length();const o=cs.set(r[4],r[5],r[6]).length(),a=cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jn.copy(this);const c=1/s,u=1/o,f=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=f,jn.elements[9]*=f,jn.elements[10]*=f,n.setFromRotationMatrix(jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ri){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===Ri)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Lc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ri){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u;let g,y;if(a===Ri)g=(o+s)*f,y=-2*f;else if(a===Lc)g=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const cs=new G,jn=new Ft,YP=new G(0,0,0),$P=new G(1,1,1),zi=new G,ll=new G,yn=new G,Zv=new Ft,Qv=new Ra;class iu{constructor(e=0,n=0,i=0,r=iu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(fn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-fn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Zv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qv.setFromEuler(this),this.setFromQuaternion(Qv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}iu.DEFAULT_ORDER="XYZ";class eM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qP=0;const Jv=new G,us=new Ra,yi=new Ft,cl=new G,Co=new G,KP=new G,ZP=new Ra,e0=new G(1,0,0),t0=new G(0,1,0),n0=new G(0,0,1),QP={type:"added"},JP={type:"removed"};class vn extends fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qP++}),this.uuid=Ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new G,n=new iu,i=new Ra,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new He}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(e0,e)}rotateY(e){return this.rotateOnAxis(t0,e)}rotateZ(e){return this.rotateOnAxis(n0,e)}translateOnAxis(e,n){return Jv.copy(e).applyQuaternion(this.quaternion),this.position.add(Jv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(e0,e)}translateY(e){return this.translateOnAxis(t0,e)}translateZ(e){return this.translateOnAxis(n0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?cl.copy(e):cl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Co,cl,this.up):yi.lookAt(cl,Co,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),us.setFromRotationMatrix(yi),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(QP)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(JP)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,KP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,ZP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new G(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new G,xi=new G,gf=new G,Si=new G,fs=new G,ds=new G,i0=new G,vf=new G,_f=new G,yf=new G;let ul=!1;class Zn{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Xn.subVectors(e,n),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Xn.subVectors(r,n),xi.subVectors(i,n),gf.subVectors(e,n);const o=Xn.dot(Xn),a=Xn.dot(xi),l=Xn.dot(gf),c=xi.dot(xi),u=xi.dot(gf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(e,n,i,r,s,o,a,l){return ul===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ul=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static isFrontFacing(e,n,i,r){return Xn.subVectors(i,n),xi.subVectors(e,n),Xn.cross(xi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Xn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ul===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ul=!0),Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;fs.subVectors(r,i),ds.subVectors(s,i),vf.subVectors(e,i);const l=fs.dot(vf),c=ds.dot(vf);if(l<=0&&c<=0)return n.copy(i);_f.subVectors(e,r);const u=fs.dot(_f),f=ds.dot(_f);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(fs,o);yf.subVectors(e,s);const p=fs.dot(yf),g=ds.dot(yf);if(g>=0&&p<=g)return n.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(ds,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return i0.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(i0,a);const h=1/(m+y+d);return o=y*h,a=d*h,n.copy(i).addScaledVector(fs,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},fl={h:0,s:0,l:0};function xf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=BP(e,1),n=fn(n,0,1),i=fn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=xf(o,s,e+1/3),this.g=xf(o,s,e),this.b=xf(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Bt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bt){const i=tM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=lf(e.r),this.g=lf(e.g),this.b=lf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Ze.fromWorkingColorSpace($t.copy(this),e),Math.round(fn($t.r*255,0,255))*65536+Math.round(fn($t.g*255,0,255))*256+Math.round(fn($t.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Bt){Ze.fromWorkingColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==Bt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(fl);const i=of(Hi.h,fl.h,n),r=of(Hi.s,fl.s,n),s=of(Hi.l,fl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new $e;$e.NAMES=tM;let e2=0;class Pa extends fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e2++}),this.uuid=Ca(),this.name="",this.type="Material",this.blending=Ws,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=Yd,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Cc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xd&&(i.blendSrc=this.blendSrc),this.blendDst!==Yd&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nM extends Pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new G,dl=new Qe;class ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)dl.fromBufferAttribute(this,n),dl.applyMatrix3(e),this.setXY(n,dl.x,dl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=To(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=To(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=To(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=To(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=To(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wv&&(e.usage=this.usage),e}}class iM extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class rM extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yr extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let t2=0;const Pn=new Ft,Sf=new vn,hs=new G,xn=new ba,Ro=new ba,Nt=new G;class Fi extends fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t2++}),this.uuid=Ca(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qS(e)?rM:iM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return Sf.lookAt(e),Sf.updateMatrix(),this.applyMatrix4(Sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Yr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ba);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(xn.min,Ro.min),xn.expandByPoint(Nt),Nt.addVectors(xn.max,Ro.max),xn.expandByPoint(Nt)):(xn.expandByPoint(Ro.min),xn.expandByPoint(Ro.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(e,c),Nt.add(hs)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let M=0;M<a;M++)c[M]=new G,u[M]=new G;const f=new G,d=new G,p=new G,g=new Qe,y=new Qe,m=new Qe,h=new G,_=new G;function v(M,U,Y){f.fromArray(r,M*3),d.fromArray(r,U*3),p.fromArray(r,Y*3),g.fromArray(o,M*2),y.fromArray(o,U*2),m.fromArray(o,Y*2),d.sub(f),p.sub(f),y.sub(g),m.sub(g);const J=1/(y.x*m.y-m.x*y.y);isFinite(J)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(J),_.copy(p).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(J),c[M].add(h),c[U].add(h),c[Y].add(h),u[M].add(_),u[U].add(_),u[Y].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let M=0,U=x.length;M<U;++M){const Y=x[M],J=Y.start,N=Y.count;for(let k=J,j=J+N;k<j;k+=3)v(i[k+0],i[k+1],i[k+2])}const A=new G,C=new G,w=new G,b=new G;function S(M){w.fromArray(s,M*3),b.copy(w);const U=c[M];A.copy(U),A.sub(w.multiplyScalar(w.dot(U))).normalize(),C.crossVectors(b,U);const J=C.dot(u[M])<0?-1:1;l[M*4]=A.x,l[M*4+1]=A.y,l[M*4+2]=A.z,l[M*4+3]=J}for(let M=0,U=x.length;M<U;++M){const Y=x[M],J=Y.start,N=Y.count;for(let k=J,j=J+N;k<j;k+=3)S(i[k+0]),S(i[k+1]),S(i[k+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new ii(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const r0=new Ft,Ar=new JS,hl=new nu,s0=new G,ps=new G,ms=new G,gs=new G,Mf=new G,pl=new G,ml=new Qe,gl=new Qe,vl=new Qe,o0=new G,a0=new G,l0=new G,_l=new G,yl=new G;class er extends vn{constructor(e=new Fi,n=new nM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Mf.fromBufferAttribute(f,e),o?pl.addScaledVector(Mf,u):pl.addScaledVector(Mf.sub(n),u))}n.add(pl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(hl.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(hl,s0)===null||Ar.origin.distanceToSquared(s0)>(e.far-e.near)**2))&&(r0.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(r0),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],h=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,A=v;x<A;x+=3){const C=a.getX(x),w=a.getX(x+1),b=a.getX(x+2);r=xl(this,h,e,i,c,u,f,C,w,b),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){const _=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);r=xl(this,o,e,i,c,u,f,_,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],h=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,A=v;x<A;x+=3){const C=x,w=x+1,b=x+2;r=xl(this,h,e,i,c,u,f,C,w,b),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){const _=m,v=m+1,x=m+2;r=xl(this,o,e,i,c,u,f,_,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function n2(t,e,n,i,r,s,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===gr,a),l===null)return null;yl.copy(a),yl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(yl);return c<n.near||c>n.far?null:{distance:c,point:yl.clone(),object:t}}function xl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ps),t.getVertexPosition(l,ms),t.getVertexPosition(c,gs);const u=n2(t,e,n,i,ps,ms,gs,_l);if(u){r&&(ml.fromBufferAttribute(r,a),gl.fromBufferAttribute(r,l),vl.fromBufferAttribute(r,c),u.uv=Zn.getInterpolation(_l,ps,ms,gs,ml,gl,vl,new Qe)),s&&(ml.fromBufferAttribute(s,a),gl.fromBufferAttribute(s,l),vl.fromBufferAttribute(s,c),u.uv1=Zn.getInterpolation(_l,ps,ms,gs,ml,gl,vl,new Qe),u.uv2=u.uv1),o&&(o0.fromBufferAttribute(o,a),a0.fromBufferAttribute(o,l),l0.fromBufferAttribute(o,c),u.normal=Zn.getInterpolation(_l,ps,ms,gs,o0,a0,l0,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new G,materialIndex:0};Zn.getNormal(ps,ms,gs,f.normal),u.face=f}return u}class La extends Fi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yr(c,3)),this.setAttribute("normal",new Yr(u,3)),this.setAttribute("uv",new Yr(f,2));function g(y,m,h,_,v,x,A,C,w,b,S){const M=x/w,U=A/b,Y=x/2,J=A/2,N=C/2,k=w+1,j=b+1;let q=0,D=0;const F=new G;for(let O=0;O<j;O++){const $=O*U-J;for(let Z=0;Z<k;Z++){const X=Z*M-Y;F[y]=X*_,F[m]=$*v,F[h]=N,c.push(F.x,F.y,F.z),F[y]=0,F[m]=0,F[h]=C>0?1:-1,u.push(F.x,F.y,F.z),f.push(Z/w),f.push(1-O/b),q+=1}}for(let O=0;O<b;O++)for(let $=0;$<w;$++){const Z=d+$+k*O,X=d+$+k*(O+1),K=d+($+1)+k*(O+1),ce=d+($+1)+k*O;l.push(Z,X,ce),l.push(X,K,ce),D+=6}a.addGroup(p,D,S),p+=D,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=ro(t[n]);for(const r in i)e[r]=i[r]}return e}function i2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function sM(t){return t.getRenderTarget()===null?t.outputColorSpace:Ze.workingColorSpace}const r2={clone:ro,merge:en};var s2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class es extends Pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s2,this.fragmentShader=o2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=i2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class oM extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class In extends oM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(sf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const vs=-90,_s=1;class a2 extends vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(vs,_s,e,n);r.layers=this.layers,this.add(r);const s=new In(vs,_s,e,n);s.layers=this.layers,this.add(s);const o=new In(vs,_s,e,n);o.layers=this.layers,this.add(o);const a=new In(vs,_s,e,n);a.layers=this.layers,this.add(a);const l=new In(vs,_s,e,n);l.layers=this.layers,this.add(l);const c=new In(vs,_s,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class aM extends wn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:to,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l2 extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Yo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xr?Bt:Un),this.texture=new aM(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new La(5,5,5),s=new es({name:"CubemapFromEquirect",uniforms:ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:cr});s.uniforms.tEquirect.value=n;const o=new er(r,s),a=n.minFilter;return n.minFilter===ma&&(n.minFilter=Nn),new a2(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ef=new G,c2=new G,u2=new He;class Lr{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ef.subVectors(i,n).cross(c2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ef),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||u2.getNormalMatrix(e),r=this.coplanarPoint(Ef).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new nu,Sl=new G;class lM{constructor(e=new Lr,n=new Lr,i=new Lr,r=new Lr,s=new Lr,o=new Lr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ri){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],y=r[10],m=r[11],h=r[12],_=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-p,x-h).normalize(),i[1].setComponents(l+s,d+c,m+p,x+h).normalize(),i[2].setComponents(l+o,d+u,m+g,x+_).normalize(),i[3].setComponents(l-o,d-u,m-g,x-_).normalize(),i[4].setComponents(l-a,d-f,m-y,x-v).normalize(),n===Ri)i[5].setComponents(l+a,d+f,m+y,x+v).normalize();else if(n===Lc)i[5].setComponents(a,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Sl.x=r.normal.x>0?e.max.x:e.min.x,Sl.y=r.normal.y>0?e.max.y:e.min.y,Sl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function f2(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,p=f.byteLength,g=t.createBuffer();t.bindBuffer(u,g),t.bufferData(u,f,d),c.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,f){const d=u.array,p=u._updateRange,g=u.updateRanges;if(t.bindBuffer(f,c),p.count===-1&&g.length===0&&t.bufferSubData(f,0,d),g.length!==0){for(let y=0,m=g.length;y<m;y++){const h=g[y];n?t.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):t.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class bp extends Fi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],g=[],y=[],m=[];for(let h=0;h<u;h++){const _=h*d-o;for(let v=0;v<c;v++){const x=v*f-s;g.push(x,-_,0),y.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const v=_+c*h,x=_+c*(h+1),A=_+1+c*(h+1),C=_+1+c*h;p.push(v,x,C),p.push(x,A,C)}this.setIndex(p),this.setAttribute("position",new Yr(g,3)),this.setAttribute("normal",new Yr(y,3)),this.setAttribute("uv",new Yr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bp(e.width,e.height,e.widthSegments,e.heightSegments)}}var d2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,p2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g2=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,v2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,y2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x2=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,S2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,M2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,w2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,A2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,C2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,R2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,N2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,I2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,U2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,F2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,O2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,k2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H2="gl_FragColor = linearToOutputTexel( gl_FragColor );",G2=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,W2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,j2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Y2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,q2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eL=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iL=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rL=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sL=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aL=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cL=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fL=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dL=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hL=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pL=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mL=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gL=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vL=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_L=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ML=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wL=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,CL=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,RL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PL=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IL=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VL=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,$L=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_D=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,SD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ED=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ND=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ID=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,FD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,GD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:d2,alphahash_pars_fragment:h2,alphamap_fragment:p2,alphamap_pars_fragment:m2,alphatest_fragment:g2,alphatest_pars_fragment:v2,aomap_fragment:_2,aomap_pars_fragment:y2,batching_pars_vertex:x2,batching_vertex:S2,begin_vertex:M2,beginnormal_vertex:E2,bsdfs:T2,iridescence_fragment:w2,bumpmap_pars_fragment:A2,clipping_planes_fragment:C2,clipping_planes_pars_fragment:R2,clipping_planes_pars_vertex:b2,clipping_planes_vertex:P2,color_fragment:L2,color_pars_fragment:D2,color_pars_vertex:N2,color_vertex:I2,common:U2,cube_uv_reflection_fragment:F2,defaultnormal_vertex:O2,displacementmap_pars_vertex:k2,displacementmap_vertex:B2,emissivemap_fragment:V2,emissivemap_pars_fragment:z2,colorspace_fragment:H2,colorspace_pars_fragment:G2,envmap_fragment:W2,envmap_common_pars_fragment:j2,envmap_pars_fragment:X2,envmap_pars_vertex:Y2,envmap_physical_pars_fragment:sL,envmap_vertex:$2,fog_vertex:q2,fog_pars_vertex:K2,fog_fragment:Z2,fog_pars_fragment:Q2,gradientmap_pars_fragment:J2,lightmap_fragment:eL,lightmap_pars_fragment:tL,lights_lambert_fragment:nL,lights_lambert_pars_fragment:iL,lights_pars_begin:rL,lights_toon_fragment:oL,lights_toon_pars_fragment:aL,lights_phong_fragment:lL,lights_phong_pars_fragment:cL,lights_physical_fragment:uL,lights_physical_pars_fragment:fL,lights_fragment_begin:dL,lights_fragment_maps:hL,lights_fragment_end:pL,logdepthbuf_fragment:mL,logdepthbuf_pars_fragment:gL,logdepthbuf_pars_vertex:vL,logdepthbuf_vertex:_L,map_fragment:yL,map_pars_fragment:xL,map_particle_fragment:SL,map_particle_pars_fragment:ML,metalnessmap_fragment:EL,metalnessmap_pars_fragment:TL,morphcolor_vertex:wL,morphnormal_vertex:AL,morphtarget_pars_vertex:CL,morphtarget_vertex:RL,normal_fragment_begin:bL,normal_fragment_maps:PL,normal_pars_fragment:LL,normal_pars_vertex:DL,normal_vertex:NL,normalmap_pars_fragment:IL,clearcoat_normal_fragment_begin:UL,clearcoat_normal_fragment_maps:FL,clearcoat_pars_fragment:OL,iridescence_pars_fragment:kL,opaque_fragment:BL,packing:VL,premultiplied_alpha_fragment:zL,project_vertex:HL,dithering_fragment:GL,dithering_pars_fragment:WL,roughnessmap_fragment:jL,roughnessmap_pars_fragment:XL,shadowmap_pars_fragment:YL,shadowmap_pars_vertex:$L,shadowmap_vertex:qL,shadowmask_pars_fragment:KL,skinbase_vertex:ZL,skinning_pars_vertex:QL,skinning_vertex:JL,skinnormal_vertex:eD,specularmap_fragment:tD,specularmap_pars_fragment:nD,tonemapping_fragment:iD,tonemapping_pars_fragment:rD,transmission_fragment:sD,transmission_pars_fragment:oD,uv_pars_fragment:aD,uv_pars_vertex:lD,uv_vertex:cD,worldpos_vertex:uD,background_vert:fD,background_frag:dD,backgroundCube_vert:hD,backgroundCube_frag:pD,cube_vert:mD,cube_frag:gD,depth_vert:vD,depth_frag:_D,distanceRGBA_vert:yD,distanceRGBA_frag:xD,equirect_vert:SD,equirect_frag:MD,linedashed_vert:ED,linedashed_frag:TD,meshbasic_vert:wD,meshbasic_frag:AD,meshlambert_vert:CD,meshlambert_frag:RD,meshmatcap_vert:bD,meshmatcap_frag:PD,meshnormal_vert:LD,meshnormal_frag:DD,meshphong_vert:ND,meshphong_frag:ID,meshphysical_vert:UD,meshphysical_frag:FD,meshtoon_vert:OD,meshtoon_frag:kD,points_vert:BD,points_frag:VD,shadow_vert:zD,shadow_frag:HD,sprite_vert:GD,sprite_frag:WD},oe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ui={basic:{uniforms:en([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:en([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:en([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:en([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:en([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:en([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:en([oe.points,oe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:en([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:en([oe.common,oe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:en([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:en([oe.sprite,oe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:en([oe.common,oe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:en([oe.lights,oe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};ui.physical={uniforms:en([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Ml={r:0,b:0,g:0};function jD(t,e,n,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function g(m,h){let _=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=(h.backgroundBlurriness>0?n:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),_=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===eu)?(u===void 0&&(u=new er(new La(1,1,1),new es({name:"BackgroundCubeMaterial",uniforms:ro(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(v.colorSpace)!==st,(f!==v||d!==v.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new er(new bp(2,2),new es({name:"BackgroundMaterial",uniforms:ro(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(v.colorSpace)!==st,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,h){m.getRGB(Ml,sM(t)),i.buffers.color.setClear(Ml.r,Ml.g,Ml.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:g}}function XD(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(N,k,j,q,D){let F=!1;if(o){const O=y(q,j,k);c!==O&&(c=O,p(c.object)),F=h(N,q,j,D),F&&_(N,q,j,D)}else{const O=k.wireframe===!0;(c.geometry!==q.id||c.program!==j.id||c.wireframe!==O)&&(c.geometry=q.id,c.program=j.id,c.wireframe=O,F=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(F||u)&&(u=!1,b(N,k,j,q),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function y(N,k,j){const q=j.wireframe===!0;let D=a[N.id];D===void 0&&(D={},a[N.id]=D);let F=D[k.id];F===void 0&&(F={},D[k.id]=F);let O=F[q];return O===void 0&&(O=m(d()),F[q]=O),O}function m(N){const k=[],j=[],q=[];for(let D=0;D<r;D++)k[D]=0,j[D]=0,q[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:j,attributeDivisors:q,object:N,attributes:{},index:null}}function h(N,k,j,q){const D=c.attributes,F=k.attributes;let O=0;const $=j.getAttributes();for(const Z in $)if($[Z].location>=0){const K=D[Z];let ce=F[Z];if(ce===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(ce=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(ce=N.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;O++}return c.attributesNum!==O||c.index!==q}function _(N,k,j,q){const D={},F=k.attributes;let O=0;const $=j.getAttributes();for(const Z in $)if($[Z].location>=0){let K=F[Z];K===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(K=N.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),D[Z]=ce,O++}c.attributes=D,c.attributesNum=O,c.index=q}function v(){const N=c.newAttributes;for(let k=0,j=N.length;k<j;k++)N[k]=0}function x(N){A(N,0)}function A(N,k){const j=c.newAttributes,q=c.enabledAttributes,D=c.attributeDivisors;j[N]=1,q[N]===0&&(t.enableVertexAttribArray(N),q[N]=1),D[N]!==k&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,k),D[N]=k)}function C(){const N=c.newAttributes,k=c.enabledAttributes;for(let j=0,q=k.length;j<q;j++)k[j]!==N[j]&&(t.disableVertexAttribArray(j),k[j]=0)}function w(N,k,j,q,D,F,O){O===!0?t.vertexAttribIPointer(N,k,j,D,F):t.vertexAttribPointer(N,k,j,q,D,F)}function b(N,k,j,q){if(i.isWebGL2===!1&&(N.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const D=q.attributes,F=j.getAttributes(),O=k.defaultAttributeValues;for(const $ in F){const Z=F[$];if(Z.location>=0){let X=D[$];if(X===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(X=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(X=N.instanceColor)),X!==void 0){const K=X.normalized,ce=X.itemSize,pe=n.get(X);if(pe===void 0)continue;const ve=pe.buffer,De=pe.type,Ie=pe.bytesPerElement,Ae=i.isWebGL2===!0&&(De===t.INT||De===t.UNSIGNED_INT||X.gpuType===VS);if(X.isInterleavedBufferAttribute){const je=X.data,B=je.stride,Zt=X.offset;if(je.isInstancedInterleavedBuffer){for(let Me=0;Me<Z.locationSize;Me++)A(Z.location+Me,je.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let Me=0;Me<Z.locationSize;Me++)x(Z.location+Me);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let Me=0;Me<Z.locationSize;Me++)w(Z.location+Me,ce/Z.locationSize,De,K,B*Ie,(Zt+ce/Z.locationSize*Me)*Ie,Ae)}else{if(X.isInstancedBufferAttribute){for(let je=0;je<Z.locationSize;je++)A(Z.location+je,X.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let je=0;je<Z.locationSize;je++)x(Z.location+je);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let je=0;je<Z.locationSize;je++)w(Z.location+je,ce/Z.locationSize,De,K,ce*Ie,ce/Z.locationSize*je*Ie,Ae)}}else if(O!==void 0){const K=O[$];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(Z.location,K);break;case 3:t.vertexAttrib3fv(Z.location,K);break;case 4:t.vertexAttrib4fv(Z.location,K);break;default:t.vertexAttrib1fv(Z.location,K)}}}}C()}function S(){Y();for(const N in a){const k=a[N];for(const j in k){const q=k[j];for(const D in q)g(q[D].object),delete q[D];delete k[j]}delete a[N]}}function M(N){if(a[N.id]===void 0)return;const k=a[N.id];for(const j in k){const q=k[j];for(const D in q)g(q[D].object),delete q[D];delete k[j]}delete a[N.id]}function U(N){for(const k in a){const j=a[k];if(j[N.id]===void 0)continue;const q=j[N.id];for(const D in q)g(q[D].object),delete q[D];delete j[N.id]}}function Y(){J(),u=!0,c!==l&&(c=l,p(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:J,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:x,disableUnusedAttributes:C}}function YD(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,d){if(d===0)return;let p,g;if(r)p=t,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,u,f,d),n.update(f,s,d)}function c(u,f,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(u[g],f[g]);else{p.multiDrawArraysWEBGL(s,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=f[y];n.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function $D(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,x=o||e.has("OES_texture_float"),A=v&&x,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:A,maxSamples:C}}function qD(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Lr,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,v=_*4;let x=h.clippingState||null;l.value=x,x=u(g,d,v,p);for(let A=0;A!==v;++A)x[A]=n[A];h.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const h=p+y*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,x=p;v!==y;++v,x+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function KD(t){let e=new WeakMap;function n(o,a){return a===$d?o.mapping=to:a===qd&&(o.mapping=no),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$d||a===qd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new l2(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ZD extends oM{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=4,c0=[.125,.215,.35,.446,.526,.582],Ir=20,Tf=new ZD,u0=new $e;let wf=null,Af=0,Cf=0;const Dr=(1+Math.sqrt(5))/2,ys=1/Dr,f0=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Dr,ys),new G(0,Dr,-ys),new G(ys,0,Dr),new G(-ys,0,Dr),new G(Dr,ys,0),new G(-Dr,ys,0)];class d0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){wf=this._renderer.getRenderTarget(),Af=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wf,Af,Cf),e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===to||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wf=this._renderer.getRenderTarget(),Af=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:ga,format:Jn,colorSpace:Ii,depthBuffer:!1},r=h0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QD(s)),this._blurMaterial=JD(s,e,n)}return r}_compileMaterial(e){const n=new er(this._lodPlanes[0],e);this._renderer.compile(n,Tf)}_sceneToCubeUV(e,n,i,r){const a=new In(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(u0),u.toneMapping=ur,u.autoClear=!1;const p=new nM({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new er(new La,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(u0),y=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const v=this._cubeSize;El(r,_*v,h>2?v:0,v,v),u.setRenderTarget(r),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===to||e.mapping===no;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=m0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new er(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;El(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Tf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=f0[(r-1)%f0.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new er(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ir-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):Ir;m>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);const h=[];let _=0;for(let w=0;w<Ir;++w){const b=w/y,S=Math.exp(-b*b/2);h.push(S),w===0?_+=S:w<m&&(_+=2*S)}for(let w=0;w<h.length;w++)h[w]=h[w]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const x=this._sizeLods[r],A=3*x*(r>v-Fs?r-v+Fs:0),C=4*(this._cubeSize-x);El(n,A,C,3*x,2*x),l.setRenderTarget(n),l.render(f,Tf)}}function QD(t){const e=[],n=[],i=[];let r=t;const s=t-Fs+1+c0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Fs?l=c0[o-t+Fs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,y=3,m=2,h=1,_=new Float32Array(y*g*p),v=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,b=C>2?0:-1,S=[w,b,0,w+2/3,b,0,w+2/3,b+1,0,w,b,0,w+2/3,b+1,0,w,b+1,0];_.set(S,y*g*C),v.set(d,m*g*C);const M=[C,C,C,C,C,C];x.set(M,h*g*C)}const A=new Fi;A.setAttribute("position",new ii(_,y)),A.setAttribute("uv",new ii(v,m)),A.setAttribute("faceIndex",new ii(x,h)),e.push(A),r>Fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function h0(t,e,n){const i=new Jr(t,e,n);return i.texture.mapping=eu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function El(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function JD(t,e,n){const i=new Float32Array(Ir),r=new G(0,1,0);return new es({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function p0(){return new es({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function m0(){return new es({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Pp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function e3(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===$d||l===qd,u=l===to||l===no;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new d0(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new d0(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function t3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function n3(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const y=p[g];for(let m=0,h=y.length;m<h;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let v=0,x=_.length;v<x;v+=3){const A=_[v+0],C=_[v+1],w=_[v+2];d.push(A,C,C,w,w,A)}}else if(g!==void 0){const _=g.array;y=g.version;for(let v=0,x=_.length/3-1;v<x;v+=3){const A=v+0,C=v+1,w=v+2;d.push(A,C,C,w,w,A)}}else return;const m=new(qS(d)?rM:iM)(d,1);m.version=y;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function i3(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,g){t.drawElements(s,g,a,p*l),n.update(g,s,1)}function f(p,g,y){if(y===0)return;let m,h;if(r)m=t,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,g,a,p*l,y),n.update(g,s,y)}function d(p,g,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<y;h++)this.render(p[h]/l,g[h]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,y);let h=0;for(let _=0;_<y;_++)h+=g[_];n.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function r3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function s3(t,e){return t[0]-e[0]}function o3(t,e){return Math.abs(e[1])-Math.abs(t[1])}function a3(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new zt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==y){let k=function(){J.dispose(),s.delete(u),u.removeEventListener("dispose",k)};var p=k;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let S=0;v===!0&&(S=1),x===!0&&(S=2),A===!0&&(S=3);let M=u.attributes.position.count*S,U=1;M>e.maxTextureSize&&(U=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const Y=new Float32Array(M*U*4*y),J=new QS(Y,M,U,y);J.type=Ji,J.needsUpdate=!0;const N=S*4;for(let j=0;j<y;j++){const q=C[j],D=w[j],F=b[j],O=M*U*4*j;for(let $=0;$<q.count;$++){const Z=$*N;v===!0&&(o.fromBufferAttribute(q,$),Y[O+Z+0]=o.x,Y[O+Z+1]=o.y,Y[O+Z+2]=o.z,Y[O+Z+3]=0),x===!0&&(o.fromBufferAttribute(D,$),Y[O+Z+4]=o.x,Y[O+Z+5]=o.y,Y[O+Z+6]=o.z,Y[O+Z+7]=0),A===!0&&(o.fromBufferAttribute(F,$),Y[O+Z+8]=o.x,Y[O+Z+9]=o.y,Y[O+Z+10]=o.z,Y[O+Z+11]=F.itemSize===4?o.w:1)}}m={count:y,texture:J,size:new Qe(M,U)},s.set(u,m),u.addEventListener("dispose",k)}let h=0;for(let v=0;v<d.length;v++)h+=d[v];const _=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let y=i[u.id];if(y===void 0||y.length!==g){y=[];for(let x=0;x<g;x++)y[x]=[x,0];i[u.id]=y}for(let x=0;x<g;x++){const A=y[x];A[0]=x,A[1]=d[x]}y.sort(o3);for(let x=0;x<8;x++)x<g&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(s3);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const A=a[x],C=A[0],w=A[1];C!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+x)!==m[C]&&u.setAttribute("morphTarget"+x,m[C]),h&&u.getAttribute("morphNormal"+x)!==h[C]&&u.setAttribute("morphNormal"+x,h[C]),r[x]=w,_+=w):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),h&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const v=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function l3(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class uM extends wn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:jr,u!==jr&&u!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===jr&&(i=Qi),i===void 0&&u===io&&(i=Wr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const fM=new wn,dM=new uM(1,1);dM.compareFunction=$S;const hM=new QS,pM=new jP,mM=new aM,g0=[],v0=[],_0=new Float32Array(16),y0=new Float32Array(9),x0=new Float32Array(4);function ho(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=g0[r];if(s===void 0&&(s=new Float32Array(r),g0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ru(t,e){let n=v0[e];n===void 0&&(n=new Int32Array(e),v0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function c3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function u3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function f3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function d3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function h3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;x0.set(i),t.uniformMatrix2fv(this.addr,!1,x0),Pt(n,i)}}function p3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;y0.set(i),t.uniformMatrix3fv(this.addr,!1,y0),Pt(n,i)}}function m3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;_0.set(i),t.uniformMatrix4fv(this.addr,!1,_0),Pt(n,i)}}function g3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function v3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function _3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function y3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function x3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function S3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function M3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function E3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function T3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?dM:fM;n.setTexture2D(e||s,r)}function w3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||pM,r)}function A3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||mM,r)}function C3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||hM,r)}function R3(t){switch(t){case 5126:return c3;case 35664:return u3;case 35665:return f3;case 35666:return d3;case 35674:return h3;case 35675:return p3;case 35676:return m3;case 5124:case 35670:return g3;case 35667:case 35671:return v3;case 35668:case 35672:return _3;case 35669:case 35673:return y3;case 5125:return x3;case 36294:return S3;case 36295:return M3;case 36296:return E3;case 35678:case 36198:case 36298:case 36306:case 35682:return T3;case 35679:case 36299:case 36307:return w3;case 35680:case 36300:case 36308:case 36293:return A3;case 36289:case 36303:case 36311:case 36292:return C3}}function b3(t,e){t.uniform1fv(this.addr,e)}function P3(t,e){const n=ho(e,this.size,2);t.uniform2fv(this.addr,n)}function L3(t,e){const n=ho(e,this.size,3);t.uniform3fv(this.addr,n)}function D3(t,e){const n=ho(e,this.size,4);t.uniform4fv(this.addr,n)}function N3(t,e){const n=ho(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function I3(t,e){const n=ho(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function U3(t,e){const n=ho(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function F3(t,e){t.uniform1iv(this.addr,e)}function O3(t,e){t.uniform2iv(this.addr,e)}function k3(t,e){t.uniform3iv(this.addr,e)}function B3(t,e){t.uniform4iv(this.addr,e)}function V3(t,e){t.uniform1uiv(this.addr,e)}function z3(t,e){t.uniform2uiv(this.addr,e)}function H3(t,e){t.uniform3uiv(this.addr,e)}function G3(t,e){t.uniform4uiv(this.addr,e)}function W3(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||fM,s[o])}function j3(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||pM,s[o])}function X3(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||mM,s[o])}function Y3(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||hM,s[o])}function $3(t){switch(t){case 5126:return b3;case 35664:return P3;case 35665:return L3;case 35666:return D3;case 35674:return N3;case 35675:return I3;case 35676:return U3;case 5124:case 35670:return F3;case 35667:case 35671:return O3;case 35668:case 35672:return k3;case 35669:case 35673:return B3;case 5125:return V3;case 36294:return z3;case 36295:return H3;case 36296:return G3;case 35678:case 36198:case 36298:case 36306:case 35682:return W3;case 35679:case 36299:case 36307:return j3;case 35680:case 36300:case 36308:case 36293:return X3;case 36289:case 36303:case 36311:case 36292:return Y3}}class q3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=R3(n.type)}}class K3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$3(n.type)}}class Z3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Rf=/(\w+)(\])?(\[|\.)?/g;function S0(t,e){t.seq.push(e),t.map[e.id]=e}function Q3(t,e,n){const i=t.name,r=i.length;for(Rf.lastIndex=0;;){const s=Rf.exec(i),o=Rf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){S0(n,c===void 0?new q3(a,t,e):new K3(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Z3(a),S0(n,f)),n=f}}}class Yl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Q3(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function M0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const J3=37297;let eN=0;function tN(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function nN(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===Pc&&n===bc?i="LinearDisplayP3ToLinearSRGB":e===bc&&n===Pc&&(i="LinearSRGBToLinearDisplayP3"),t){case Ii:case tu:return[i,"LinearTransferOETF"];case Bt:case Rp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function E0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+tN(t.getShaderSource(e),o)}else return r}function iN(t,e){const n=nN(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function rN(t,e){let n;switch(e){case hP:n="Linear";break;case pP:n="Reinhard";break;case mP:n="OptimizedCineon";break;case gP:n="ACESFilmic";break;case _P:n="AgX";break;case vP:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function sN(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Os).join(`
`)}function oN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Os).join(`
`)}function aN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function lN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Os(t){return t!==""}function T0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function w0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cN=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(t){return t.replace(cN,fN)}const uN=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fN(t,e){let n=Fe[e];if(n===void 0){const i=uN.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return th(n)}const dN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A0(t){return t.replace(dN,hN)}function hN(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function C0(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pN(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===OS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===zb?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function mN(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case to:case no:e="ENVMAP_TYPE_CUBE";break;case eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gN(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case no:e="ENVMAP_MODE_REFRACTION";break}return e}function vN(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case kS:e="ENVMAP_BLENDING_MULTIPLY";break;case fP:e="ENVMAP_BLENDING_MIX";break;case dP:e="ENVMAP_BLENDING_ADD";break}return e}function _N(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function yN(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=pN(n),c=mN(n),u=gN(n),f=vN(n),d=_N(n),p=n.isWebGL2?"":sN(n),g=oN(n),y=aN(s),m=r.createProgram();let h,_,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Os).join(`
`),h.length>0&&(h+=`
`),_=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Os).join(`
`),_.length>0&&(_+=`
`)):(h=[C0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),_=[p,C0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ur?"#define TONE_MAPPING":"",n.toneMapping!==ur?Fe.tonemapping_pars_fragment:"",n.toneMapping!==ur?rN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,iN("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Os).join(`
`)),o=th(o),o=T0(o,n),o=w0(o,n),a=th(a),a=T0(a,n),a=w0(a,n),o=A0(o),a=A0(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===jv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=v+h+o,A=v+_+a,C=M0(r,r.VERTEX_SHADER,x),w=M0(r,r.FRAGMENT_SHADER,A);r.attachShader(m,C),r.attachShader(m,w),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function b(Y){if(t.debug.checkShaderErrors){const J=r.getProgramInfoLog(m).trim(),N=r.getShaderInfoLog(C).trim(),k=r.getShaderInfoLog(w).trim();let j=!0,q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,C,w);else{const D=E0(r,C,"vertex"),F=E0(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+D+`
`+F)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(N===""||k==="")&&(q=!1);q&&(Y.diagnostics={runnable:j,programLog:J,vertexShader:{log:N,prefix:h},fragmentShader:{log:k,prefix:_}})}r.deleteShader(C),r.deleteShader(w),S=new Yl(r,m),M=lN(r,m)}let S;this.getUniforms=function(){return S===void 0&&b(this),S};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(m,J3)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=eN++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=w,this}let xN=0;class SN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new MN(e),n.set(e,i)),i}}class MN{constructor(e){this.id=xN++,this.code=e,this.usedTimes=0}}function EN(t,e,n,i,r,s,o){const a=new eM,l=new SN,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function m(S,M,U,Y,J){const N=Y.fog,k=J.geometry,j=S.isMeshStandardMaterial?Y.environment:null,q=(S.isMeshStandardMaterial?n:e).get(S.envMap||j),D=q&&q.mapping===eu?q.image.height:null,F=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const O=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,$=O!==void 0?O.length:0;let Z=0;k.morphAttributes.position!==void 0&&(Z=1),k.morphAttributes.normal!==void 0&&(Z=2),k.morphAttributes.color!==void 0&&(Z=3);let X,K,ce,pe;if(F){const Qt=ui[F];X=Qt.vertexShader,K=Qt.fragmentShader}else X=S.vertexShader,K=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),pe=l.getFragmentShaderID(S);const ve=t.getRenderTarget(),De=J.isInstancedMesh===!0,Ie=J.isBatchedMesh===!0,Ae=!!S.map,je=!!S.matcap,B=!!q,Zt=!!S.aoMap,Me=!!S.lightMap,Pe=!!S.bumpMap,_e=!!S.normalMap,ct=!!S.displacementMap,Oe=!!S.emissiveMap,R=!!S.metalnessMap,E=!!S.roughnessMap,z=S.anisotropy>0,ne=S.clearcoat>0,ee=S.iridescence>0,ie=S.sheen>0,ye=S.transmission>0,ue=z&&!!S.anisotropyMap,me=ne&&!!S.clearcoatMap,we=ne&&!!S.clearcoatNormalMap,ke=ne&&!!S.clearcoatRoughnessMap,Q=ee&&!!S.iridescenceMap,Ke=ee&&!!S.iridescenceThicknessMap,Ge=ie&&!!S.sheenColorMap,be=ie&&!!S.sheenRoughnessMap,Se=!!S.specularMap,ge=!!S.specularColorMap,Ue=!!S.specularIntensityMap,Ye=ye&&!!S.transmissionMap,pt=ye&&!!S.thicknessMap,Ve=!!S.gradientMap,se=!!S.alphaMap,L=S.alphaTest>0,ae=!!S.alphaHash,le=!!S.extensions,Ce=!!k.attributes.uv1,Ee=!!k.attributes.uv2,et=!!k.attributes.uv3;let tt=ur;return S.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(tt=t.toneMapping),{isWebGL2:u,shaderID:F,shaderType:S.type,shaderName:S.name,vertexShader:X,fragmentShader:K,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ie,instancing:De,instancingColor:De&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ve===null?t.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ii,map:Ae,matcap:je,envMap:B,envMapMode:B&&q.mapping,envMapCubeUVHeight:D,aoMap:Zt,lightMap:Me,bumpMap:Pe,normalMap:_e,displacementMap:d&&ct,emissiveMap:Oe,normalMapObjectSpace:_e&&S.normalMapType===LP,normalMapTangentSpace:_e&&S.normalMapType===PP,metalnessMap:R,roughnessMap:E,anisotropy:z,anisotropyMap:ue,clearcoat:ne,clearcoatMap:me,clearcoatNormalMap:we,clearcoatRoughnessMap:ke,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:Ke,sheen:ie,sheenColorMap:Ge,sheenRoughnessMap:be,specularMap:Se,specularColorMap:ge,specularIntensityMap:Ue,transmission:ye,transmissionMap:Ye,thicknessMap:pt,gradientMap:Ve,opaque:S.transparent===!1&&S.blending===Ws,alphaMap:se,alphaTest:L,alphaHash:ae,combine:S.combine,mapUv:Ae&&y(S.map.channel),aoMapUv:Zt&&y(S.aoMap.channel),lightMapUv:Me&&y(S.lightMap.channel),bumpMapUv:Pe&&y(S.bumpMap.channel),normalMapUv:_e&&y(S.normalMap.channel),displacementMapUv:ct&&y(S.displacementMap.channel),emissiveMapUv:Oe&&y(S.emissiveMap.channel),metalnessMapUv:R&&y(S.metalnessMap.channel),roughnessMapUv:E&&y(S.roughnessMap.channel),anisotropyMapUv:ue&&y(S.anisotropyMap.channel),clearcoatMapUv:me&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:we&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:be&&y(S.sheenRoughnessMap.channel),specularMapUv:Se&&y(S.specularMap.channel),specularColorMapUv:ge&&y(S.specularColorMap.channel),specularIntensityMapUv:Ue&&y(S.specularIntensityMap.channel),transmissionMapUv:Ye&&y(S.transmissionMap.channel),thicknessMapUv:pt&&y(S.thicknessMap.channel),alphaMapUv:se&&y(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(_e||z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:Ee,vertexUv3s:et,pointsUvs:J.isPoints===!0&&!!k.attributes.uv&&(Ae||se),fog:!!N,useFog:S.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Z,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ae&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wi,flipSided:S.side===gn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:le&&S.extensions.derivatives===!0,extensionFragDepth:le&&S.extensions.fragDepth===!0,extensionDrawBuffers:le&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)M.push(U),M.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(_(M,S),v(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function x(S){const M=g[S.type];let U;if(M){const Y=ui[M];U=r2.clone(Y.uniforms)}else U=S.uniforms;return U}function A(S,M){let U;for(let Y=0,J=c.length;Y<J;Y++){const N=c[Y];if(N.cacheKey===M){U=N,++U.usedTimes;break}}return U===void 0&&(U=new yN(t,M,S,s),c.push(U)),U}function C(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:A,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:b}}function TN(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function wN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function R0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function b0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,g,y,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:y,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=y,h.group=m),e++,h}function a(f,d,p,g,y,m){const h=o(f,d,p,g,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,g,y,m){const h=o(f,d,p,g,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||wN),i.length>1&&i.sort(d||R0),r.length>1&&r.sort(d||R0)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function AN(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new b0,t.set(i,[o])):r>=s.length?(o=new b0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function CN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new $e};break;case"SpotLight":n={position:new G,direction:new G,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function RN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let bN=0;function PN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function LN(t,e){const n=new CN,i=RN(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new G);const s=new G,o=new Ft,a=new Ft;function l(u,f){let d=0,p=0,g=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let y=0,m=0,h=0,_=0,v=0,x=0,A=0,C=0,w=0,b=0,S=0;u.sort(PN);const M=f===!0?Math.PI:1;for(let Y=0,J=u.length;Y<J;Y++){const N=u[Y],k=N.color,j=N.intensity,q=N.distance,D=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=k.r*j*M,p+=k.g*j*M,g+=k.b*j*M;else if(N.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(N.sh.coefficients[F],j);S++}else if(N.isDirectionalLight){const F=n.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const O=N.shadow,$=i.get(N);$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,r.directionalShadow[y]=$,r.directionalShadowMap[y]=D,r.directionalShadowMatrix[y]=N.shadow.matrix,x++}r.directional[y]=F,y++}else if(N.isSpotLight){const F=n.get(N);F.position.setFromMatrixPosition(N.matrixWorld),F.color.copy(k).multiplyScalar(j*M),F.distance=q,F.coneCos=Math.cos(N.angle),F.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),F.decay=N.decay,r.spot[h]=F;const O=N.shadow;if(N.map&&(r.spotLightMap[w]=N.map,w++,O.updateMatrices(N),N.castShadow&&b++),r.spotLightMatrix[h]=O.matrix,N.castShadow){const $=i.get(N);$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,r.spotShadow[h]=$,r.spotShadowMap[h]=D,C++}h++}else if(N.isRectAreaLight){const F=n.get(N);F.color.copy(k).multiplyScalar(j),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),r.rectArea[_]=F,_++}else if(N.isPointLight){const F=n.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity*M),F.distance=N.distance,F.decay=N.decay,N.castShadow){const O=N.shadow,$=i.get(N);$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,$.shadowCameraNear=O.camera.near,$.shadowCameraFar=O.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=D,r.pointShadowMatrix[m]=N.shadow.matrix,A++}r.point[m]=F,m++}else if(N.isHemisphereLight){const F=n.get(N);F.skyColor.copy(N.color).multiplyScalar(j*M),F.groundColor.copy(N.groundColor).multiplyScalar(j*M),r.hemi[v]=F,v++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const U=r.hash;(U.directionalLength!==y||U.pointLength!==m||U.spotLength!==h||U.rectAreaLength!==_||U.hemiLength!==v||U.numDirectionalShadows!==x||U.numPointShadows!==A||U.numSpotShadows!==C||U.numSpotMaps!==w||U.numLightProbes!==S)&&(r.directional.length=y,r.spot.length=h,r.rectArea.length=_,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=C+w-b,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=S,U.directionalLength=y,U.pointLength=m,U.spotLength=h,U.rectAreaLength=_,U.hemiLength=v,U.numDirectionalShadows=x,U.numPointShadows=A,U.numSpotShadows=C,U.numSpotMaps=w,U.numLightProbes=S,r.version=bN++)}function c(u,f){let d=0,p=0,g=0,y=0,m=0;const h=f.matrixWorldInverse;for(let _=0,v=u.length;_<v;_++){const x=u[_];if(x.isDirectionalLight){const A=r.directional[d];A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(h),d++}else if(x.isSpotLight){const A=r.spot[g];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(h),A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(h),g++}else if(x.isRectAreaLight){const A=r.rectArea[y];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(h),a.identity(),o.copy(x.matrixWorld),o.premultiply(h),a.extractRotation(o),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const A=r.point[p];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function P0(t,e){const n=new LN(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function DN(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new P0(t,e),n.set(s,[l])):o>=a.length?(l=new P0(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class NN extends Pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IN extends Pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const UN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ON(t,e,n){let i=new lM;const r=new Qe,s=new Qe,o=new zt,a=new NN({depthPacking:bP}),l=new IN,c={},u=n.maxTextureSize,f={[gr]:gn,[gn]:gr,[wi]:wi},d=new es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:UN,fragmentShader:FN}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Fi;g.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new er(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=OS;let h=this.type;this.render=function(C,w,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=t.getRenderTarget(),M=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(cr),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const J=h!==Mi&&this.type===Mi,N=h===Mi&&this.type!==Mi;for(let k=0,j=C.length;k<j;k++){const q=C[k],D=q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const F=D.getFrameExtents();if(r.multiply(F),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/F.x),r.x=s.x*F.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/F.y),r.y=s.y*F.y,D.mapSize.y=s.y)),D.map===null||J===!0||N===!0){const $=this.type!==Mi?{minFilter:nn,magFilter:nn}:{};D.map!==null&&D.map.dispose(),D.map=new Jr(r.x,r.y,$),D.map.texture.name=q.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const O=D.getViewportCount();for(let $=0;$<O;$++){const Z=D.getViewport($);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),Y.viewport(o),D.updateMatrices(q,$),i=D.getFrustum(),x(w,b,D.camera,q,this.type)}D.isPointLightShadow!==!0&&this.type===Mi&&_(D,b),D.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(S,M,U)};function _(C,w){const b=e.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Jr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,b,d,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,b,p,y,null)}function v(C,w,b,S){let M=null;const U=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)M=U;else if(M=b.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Y=M.uuid,J=w.uuid;let N=c[Y];N===void 0&&(N={},c[Y]=N);let k=N[J];k===void 0&&(k=M.clone(),N[J]=k,w.addEventListener("dispose",A)),M=k}if(M.visible=w.visible,M.wireframe=w.wireframe,S===Mi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Y=t.properties.get(M);Y.light=b}return M}function x(C,w,b,S,M){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Mi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const J=e.update(C),N=C.material;if(Array.isArray(N)){const k=J.groups;for(let j=0,q=k.length;j<q;j++){const D=k[j],F=N[D.materialIndex];if(F&&F.visible){const O=v(C,F,S,M);C.onBeforeShadow(t,C,w,b,J,O,D),t.renderBufferDirect(b,null,J,O,C,D),C.onAfterShadow(t,C,w,b,J,O,D)}}}else if(N.visible){const k=v(C,N,S,M);C.onBeforeShadow(t,C,w,b,J,k,null),t.renderBufferDirect(b,null,J,k,C,null),C.onAfterShadow(t,C,w,b,J,k,null)}}const Y=C.children;for(let J=0,N=Y.length;J<N;J++)x(Y[J],w,b,S,M)}function A(C){C.target.removeEventListener("dispose",A);for(const b in c){const S=c[b],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function kN(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ae=new zt;let le=null;const Ce=new zt(0,0,0,0);return{setMask:function(Ee){le!==Ee&&!L&&(t.colorMask(Ee,Ee,Ee,Ee),le=Ee)},setLocked:function(Ee){L=Ee},setClear:function(Ee,et,tt,Lt,Qt){Qt===!0&&(Ee*=Lt,et*=Lt,tt*=Lt),ae.set(Ee,et,tt,Lt),Ce.equals(ae)===!1&&(t.clearColor(Ee,et,tt,Lt),Ce.copy(ae))},reset:function(){L=!1,le=null,Ce.set(-1,0,0,0)}}}function s(){let L=!1,ae=null,le=null,Ce=null;return{setTest:function(Ee){Ee?Ie(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(Ee){ae!==Ee&&!L&&(t.depthMask(Ee),ae=Ee)},setFunc:function(Ee){if(le!==Ee){switch(Ee){case rP:t.depthFunc(t.NEVER);break;case sP:t.depthFunc(t.ALWAYS);break;case oP:t.depthFunc(t.LESS);break;case Cc:t.depthFunc(t.LEQUAL);break;case aP:t.depthFunc(t.EQUAL);break;case lP:t.depthFunc(t.GEQUAL);break;case cP:t.depthFunc(t.GREATER);break;case uP:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=Ee}},setLocked:function(Ee){L=Ee},setClear:function(Ee){Ce!==Ee&&(t.clearDepth(Ee),Ce=Ee)},reset:function(){L=!1,ae=null,le=null,Ce=null}}}function o(){let L=!1,ae=null,le=null,Ce=null,Ee=null,et=null,tt=null,Lt=null,Qt=null;return{setTest:function(nt){L||(nt?Ie(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(nt){ae!==nt&&!L&&(t.stencilMask(nt),ae=nt)},setFunc:function(nt,Jt,si){(le!==nt||Ce!==Jt||Ee!==si)&&(t.stencilFunc(nt,Jt,si),le=nt,Ce=Jt,Ee=si)},setOp:function(nt,Jt,si){(et!==nt||tt!==Jt||Lt!==si)&&(t.stencilOp(nt,Jt,si),et=nt,tt=Jt,Lt=si)},setLocked:function(nt){L=nt},setClear:function(nt){Qt!==nt&&(t.clearStencil(nt),Qt=nt)},reset:function(){L=!1,ae=null,le=null,Ce=null,Ee=null,et=null,tt=null,Lt=null,Qt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},p={},g=new WeakMap,y=[],m=null,h=!1,_=null,v=null,x=null,A=null,C=null,w=null,b=null,S=new $e(0,0,0),M=0,U=!1,Y=null,J=null,N=null,k=null,j=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,F=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(O)[1]),D=F>=1):O.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),D=F>=2);let $=null,Z={};const X=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),ce=new zt().fromArray(X),pe=new zt().fromArray(K);function ve(L,ae,le,Ce){const Ee=new Uint8Array(4),et=t.createTexture();t.bindTexture(L,et),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<le;tt++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ae,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(ae+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return et}const De={};De[t.TEXTURE_2D]=ve(t.TEXTURE_2D,t.TEXTURE_2D,1),De[t.TEXTURE_CUBE_MAP]=ve(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[t.TEXTURE_2D_ARRAY]=ve(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),De[t.TEXTURE_3D]=ve(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(t.DEPTH_TEST),l.setFunc(Cc),Oe(!1),R(fv),Ie(t.CULL_FACE),_e(cr);function Ie(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function Ae(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function je(L,ae){return p[L]!==ae?(t.bindFramebuffer(L,ae),p[L]=ae,i&&(L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ae),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ae)),!0):!1}function B(L,ae){let le=y,Ce=!1;if(L)if(le=g.get(ae),le===void 0&&(le=[],g.set(ae,le)),L.isWebGLMultipleRenderTargets){const Ee=L.texture;if(le.length!==Ee.length||le[0]!==t.COLOR_ATTACHMENT0){for(let et=0,tt=Ee.length;et<tt;et++)le[et]=t.COLOR_ATTACHMENT0+et;le.length=Ee.length,Ce=!0}}else le[0]!==t.COLOR_ATTACHMENT0&&(le[0]=t.COLOR_ATTACHMENT0,Ce=!0);else le[0]!==t.BACK&&(le[0]=t.BACK,Ce=!0);Ce&&(n.isWebGL2?t.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Zt(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const Me={[Nr]:t.FUNC_ADD,[Gb]:t.FUNC_SUBTRACT,[Wb]:t.FUNC_REVERSE_SUBTRACT};if(i)Me[mv]=t.MIN,Me[gv]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Me[mv]=L.MIN_EXT,Me[gv]=L.MAX_EXT)}const Pe={[jb]:t.ZERO,[Xb]:t.ONE,[Yb]:t.SRC_COLOR,[Xd]:t.SRC_ALPHA,[Jb]:t.SRC_ALPHA_SATURATE,[Zb]:t.DST_COLOR,[qb]:t.DST_ALPHA,[$b]:t.ONE_MINUS_SRC_COLOR,[Yd]:t.ONE_MINUS_SRC_ALPHA,[Qb]:t.ONE_MINUS_DST_COLOR,[Kb]:t.ONE_MINUS_DST_ALPHA,[eP]:t.CONSTANT_COLOR,[tP]:t.ONE_MINUS_CONSTANT_COLOR,[nP]:t.CONSTANT_ALPHA,[iP]:t.ONE_MINUS_CONSTANT_ALPHA};function _e(L,ae,le,Ce,Ee,et,tt,Lt,Qt,nt){if(L===cr){h===!0&&(Ae(t.BLEND),h=!1);return}if(h===!1&&(Ie(t.BLEND),h=!0),L!==Hb){if(L!==_||nt!==U){if((v!==Nr||C!==Nr)&&(t.blendEquation(t.FUNC_ADD),v=Nr,C=Nr),nt)switch(L){case Ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dv:t.blendFunc(t.ONE,t.ONE);break;case hv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case pv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dv:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case hv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case pv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,A=null,w=null,b=null,S.set(0,0,0),M=0,_=L,U=nt}return}Ee=Ee||ae,et=et||le,tt=tt||Ce,(ae!==v||Ee!==C)&&(t.blendEquationSeparate(Me[ae],Me[Ee]),v=ae,C=Ee),(le!==x||Ce!==A||et!==w||tt!==b)&&(t.blendFuncSeparate(Pe[le],Pe[Ce],Pe[et],Pe[tt]),x=le,A=Ce,w=et,b=tt),(Lt.equals(S)===!1||Qt!==M)&&(t.blendColor(Lt.r,Lt.g,Lt.b,Qt),S.copy(Lt),M=Qt),_=L,U=!1}function ct(L,ae){L.side===wi?Ae(t.CULL_FACE):Ie(t.CULL_FACE);let le=L.side===gn;ae&&(le=!le),Oe(le),L.blending===Ws&&L.transparent===!1?_e(cr):_e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Ce=L.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),z(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ie(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){Y!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),Y=L)}function R(L){L!==Bb?(Ie(t.CULL_FACE),L!==J&&(L===fv?t.cullFace(t.BACK):L===Vb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),J=L}function E(L){L!==N&&(D&&t.lineWidth(L),N=L)}function z(L,ae,le){L?(Ie(t.POLYGON_OFFSET_FILL),(k!==ae||j!==le)&&(t.polygonOffset(ae,le),k=ae,j=le)):Ae(t.POLYGON_OFFSET_FILL)}function ne(L){L?Ie(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function ee(L){L===void 0&&(L=t.TEXTURE0+q-1),$!==L&&(t.activeTexture(L),$=L)}function ie(L,ae,le){le===void 0&&($===null?le=t.TEXTURE0+q-1:le=$);let Ce=Z[le];Ce===void 0&&(Ce={type:void 0,texture:void 0},Z[le]=Ce),(Ce.type!==L||Ce.texture!==ae)&&($!==le&&(t.activeTexture(le),$=le),t.bindTexture(L,ae||De[L]),Ce.type=L,Ce.texture=ae)}function ye(){const L=Z[$];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ue(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ke(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(L){ce.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ce.copy(L))}function Ye(L){pe.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),pe.copy(L))}function pt(L,ae){let le=f.get(ae);le===void 0&&(le=new WeakMap,f.set(ae,le));let Ce=le.get(L);Ce===void 0&&(Ce=t.getUniformBlockIndex(ae,L.name),le.set(L,Ce))}function Ve(L,ae){const Ce=f.get(ae).get(L);u.get(ae)!==Ce&&(t.uniformBlockBinding(ae,Ce,L.__bindingPointIndex),u.set(ae,Ce))}function se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},$=null,Z={},p={},g=new WeakMap,y=[],m=null,h=!1,_=null,v=null,x=null,A=null,C=null,w=null,b=null,S=new $e(0,0,0),M=0,U=!1,Y=null,J=null,N=null,k=null,j=null,ce.set(0,0,t.canvas.width,t.canvas.height),pe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:Ae,bindFramebuffer:je,drawBuffers:B,useProgram:Zt,setBlending:_e,setMaterial:ct,setFlipSided:Oe,setCullFace:R,setLineWidth:E,setPolygonOffset:z,setScissorTest:ne,activeTexture:ee,bindTexture:ie,unbindTexture:ye,compressedTexImage2D:ue,compressedTexImage3D:me,texImage2D:Se,texImage3D:ge,updateUBOMapping:pt,uniformBlockBinding:Ve,texStorage2D:Ge,texStorage3D:be,texSubImage2D:we,texSubImage3D:ke,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ke,scissor:Ue,viewport:Ye,reset:se}}function BN(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return p?new OffscreenCanvas(R,E):Dc("canvas")}function y(R,E,z,ne){let ee=1;if((R.width>ne||R.height>ne)&&(ee=ne/Math.max(R.width,R.height)),ee<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ie=E?eh:Math.floor,ye=ie(ee*R.width),ue=ie(ee*R.height);f===void 0&&(f=g(ye,ue));const me=z?g(ye,ue):f;return me.width=ye,me.height=ue,me.getContext("2d").drawImage(R,0,0,ye,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ye+"x"+ue+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Xv(R.width)&&Xv(R.height)}function h(R){return a?!1:R.wrapS!==Qn||R.wrapT!==Qn||R.minFilter!==nn&&R.minFilter!==Nn}function _(R,E){return R.generateMipmaps&&E&&R.minFilter!==nn&&R.minFilter!==Nn}function v(R){t.generateMipmap(R)}function x(R,E,z,ne,ee=!1){if(a===!1)return E;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=E;if(E===t.RED&&(z===t.FLOAT&&(ie=t.R32F),z===t.HALF_FLOAT&&(ie=t.R16F),z===t.UNSIGNED_BYTE&&(ie=t.R8)),E===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(ie=t.R8UI),z===t.UNSIGNED_SHORT&&(ie=t.R16UI),z===t.UNSIGNED_INT&&(ie=t.R32UI),z===t.BYTE&&(ie=t.R8I),z===t.SHORT&&(ie=t.R16I),z===t.INT&&(ie=t.R32I)),E===t.RG&&(z===t.FLOAT&&(ie=t.RG32F),z===t.HALF_FLOAT&&(ie=t.RG16F),z===t.UNSIGNED_BYTE&&(ie=t.RG8)),E===t.RGBA){const ye=ee?Rc:Ze.getTransfer(ne);z===t.FLOAT&&(ie=t.RGBA32F),z===t.HALF_FLOAT&&(ie=t.RGBA16F),z===t.UNSIGNED_BYTE&&(ie=ye===st?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function A(R,E,z){return _(R,z)===!0||R.isFramebufferTexture&&R.minFilter!==nn&&R.minFilter!==Nn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function C(R){return R===nn||R===vv||R===Qu?t.NEAREST:t.LINEAR}function w(R){const E=R.target;E.removeEventListener("dispose",w),S(E),E.isVideoTexture&&u.delete(E)}function b(R){const E=R.target;E.removeEventListener("dispose",b),U(E)}function S(R){const E=i.get(R);if(E.__webglInit===void 0)return;const z=R.source,ne=d.get(z);if(ne){const ee=ne[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(R),Object.keys(ne).length===0&&d.delete(z)}i.remove(R)}function M(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const z=R.source,ne=d.get(z);delete ne[E.__cacheKey],o.memory.textures--}function U(R){const E=R.texture,z=i.get(R),ne=i.get(E);if(ne.__webglTexture!==void 0&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(z.__webglFramebuffer[ee]))for(let ie=0;ie<z.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(z.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(z.__webglFramebuffer[ee]);z.__webglDepthbuffer&&t.deleteRenderbuffer(z.__webglDepthbuffer[ee])}else{if(Array.isArray(z.__webglFramebuffer))for(let ee=0;ee<z.__webglFramebuffer.length;ee++)t.deleteFramebuffer(z.__webglFramebuffer[ee]);else t.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&t.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&t.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ee=0;ee<z.__webglColorRenderbuffer.length;ee++)z.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(z.__webglColorRenderbuffer[ee]);z.__webglDepthRenderbuffer&&t.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,ie=E.length;ee<ie;ee++){const ye=i.get(E[ee]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(E[ee])}i.remove(E),i.remove(R)}let Y=0;function J(){Y=0}function N(){const R=Y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),Y+=1,R}function k(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function j(R,E){const z=i.get(R);if(R.isVideoTexture&&ct(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(z,R,E);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+E)}function q(R,E){const z=i.get(R);if(R.version>0&&z.__version!==R.version){ce(z,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+E)}function D(R,E){const z=i.get(R);if(R.version>0&&z.__version!==R.version){ce(z,R,E);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+E)}function F(R,E){const z=i.get(R);if(R.version>0&&z.__version!==R.version){pe(z,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+E)}const O={[Kd]:t.REPEAT,[Qn]:t.CLAMP_TO_EDGE,[Zd]:t.MIRRORED_REPEAT},$={[nn]:t.NEAREST,[vv]:t.NEAREST_MIPMAP_NEAREST,[Qu]:t.NEAREST_MIPMAP_LINEAR,[Nn]:t.LINEAR,[yP]:t.LINEAR_MIPMAP_NEAREST,[ma]:t.LINEAR_MIPMAP_LINEAR},Z={[DP]:t.NEVER,[kP]:t.ALWAYS,[NP]:t.LESS,[$S]:t.LEQUAL,[IP]:t.EQUAL,[OP]:t.GEQUAL,[UP]:t.GREATER,[FP]:t.NOTEQUAL};function X(R,E,z){if(z?(t.texParameteri(R,t.TEXTURE_WRAP_S,O[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,O[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,O[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,$[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,$[E.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Qn||E.wrapT!==Qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,C(E.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,C(E.minFilter)),E.minFilter!==nn&&E.minFilter!==Nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===nn||E.minFilter!==Qu&&E.minFilter!==ma||E.type===Ji&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===ga&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(R,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function K(R,E){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",w));const ne=E.source;let ee=d.get(ne);ee===void 0&&(ee={},d.set(ne,ee));const ie=k(E);if(ie!==R.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[ie].usedTimes++;const ye=ee[R.__cacheKey];ye!==void 0&&(ee[R.__cacheKey].usedTimes--,ye.usedTimes===0&&M(E)),R.__cacheKey=ie,R.__webglTexture=ee[ie].texture}return z}function ce(R,E,z){let ne=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=t.TEXTURE_3D);const ee=K(R,E),ie=E.source;n.bindTexture(ne,R.__webglTexture,t.TEXTURE0+z);const ye=i.get(ie);if(ie.version!==ye.__version||ee===!0){n.activeTexture(t.TEXTURE0+z);const ue=Ze.getPrimaries(Ze.workingColorSpace),me=E.colorSpace===Un?null:Ze.getPrimaries(E.colorSpace),we=E.colorSpace===Un||ue===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const ke=h(E)&&m(E.image)===!1;let Q=y(E.image,ke,!1,r.maxTextureSize);Q=Oe(E,Q);const Ke=m(Q)||a,Ge=s.convert(E.format,E.colorSpace);let be=s.convert(E.type),Se=x(E.internalFormat,Ge,be,E.colorSpace,E.isVideoTexture);X(ne,E,Ke);let ge;const Ue=E.mipmaps,Ye=a&&E.isVideoTexture!==!0&&Se!==XS,pt=ye.__version===void 0||ee===!0,Ve=A(E,Q,Ke);if(E.isDepthTexture)Se=t.DEPTH_COMPONENT,a?E.type===Ji?Se=t.DEPTH_COMPONENT32F:E.type===Qi?Se=t.DEPTH_COMPONENT24:E.type===Wr?Se=t.DEPTH24_STENCIL8:Se=t.DEPTH_COMPONENT16:E.type===Ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===jr&&Se===t.DEPTH_COMPONENT&&E.type!==Cp&&E.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Qi,be=s.convert(E.type)),E.format===io&&Se===t.DEPTH_COMPONENT&&(Se=t.DEPTH_STENCIL,E.type!==Wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Wr,be=s.convert(E.type))),pt&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,Se,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,Se,Q.width,Q.height,0,Ge,be,null));else if(E.isDataTexture)if(Ue.length>0&&Ke){Ye&&pt&&n.texStorage2D(t.TEXTURE_2D,Ve,Se,Ue[0].width,Ue[0].height);for(let se=0,L=Ue.length;se<L;se++)ge=Ue[se],Ye?n.texSubImage2D(t.TEXTURE_2D,se,0,0,ge.width,ge.height,Ge,be,ge.data):n.texImage2D(t.TEXTURE_2D,se,Se,ge.width,ge.height,0,Ge,be,ge.data);E.generateMipmaps=!1}else Ye?(pt&&n.texStorage2D(t.TEXTURE_2D,Ve,Se,Q.width,Q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Q.width,Q.height,Ge,be,Q.data)):n.texImage2D(t.TEXTURE_2D,0,Se,Q.width,Q.height,0,Ge,be,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Se,Ue[0].width,Ue[0].height,Q.depth);for(let se=0,L=Ue.length;se<L;se++)ge=Ue[se],E.format!==Jn?Ge!==null?Ye?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,Q.depth,Ge,ge.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Se,ge.width,ge.height,Q.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,Q.depth,Ge,be,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Se,ge.width,ge.height,Q.depth,0,Ge,be,ge.data)}else{Ye&&pt&&n.texStorage2D(t.TEXTURE_2D,Ve,Se,Ue[0].width,Ue[0].height);for(let se=0,L=Ue.length;se<L;se++)ge=Ue[se],E.format!==Jn?Ge!==null?Ye?n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,ge.width,ge.height,Ge,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Se,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage2D(t.TEXTURE_2D,se,0,0,ge.width,ge.height,Ge,be,ge.data):n.texImage2D(t.TEXTURE_2D,se,Se,ge.width,ge.height,0,Ge,be,ge.data)}else if(E.isDataArrayTexture)Ye?(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Se,Q.width,Q.height,Q.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Ge,be,Q.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,Q.width,Q.height,Q.depth,0,Ge,be,Q.data);else if(E.isData3DTexture)Ye?(pt&&n.texStorage3D(t.TEXTURE_3D,Ve,Se,Q.width,Q.height,Q.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Ge,be,Q.data)):n.texImage3D(t.TEXTURE_3D,0,Se,Q.width,Q.height,Q.depth,0,Ge,be,Q.data);else if(E.isFramebufferTexture){if(pt)if(Ye)n.texStorage2D(t.TEXTURE_2D,Ve,Se,Q.width,Q.height);else{let se=Q.width,L=Q.height;for(let ae=0;ae<Ve;ae++)n.texImage2D(t.TEXTURE_2D,ae,Se,se,L,0,Ge,be,null),se>>=1,L>>=1}}else if(Ue.length>0&&Ke){Ye&&pt&&n.texStorage2D(t.TEXTURE_2D,Ve,Se,Ue[0].width,Ue[0].height);for(let se=0,L=Ue.length;se<L;se++)ge=Ue[se],Ye?n.texSubImage2D(t.TEXTURE_2D,se,0,0,Ge,be,ge):n.texImage2D(t.TEXTURE_2D,se,Se,Ge,be,ge);E.generateMipmaps=!1}else Ye?(pt&&n.texStorage2D(t.TEXTURE_2D,Ve,Se,Q.width,Q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ge,be,Q)):n.texImage2D(t.TEXTURE_2D,0,Se,Ge,be,Q);_(E,Ke)&&v(ne),ye.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function pe(R,E,z){if(E.image.length!==6)return;const ne=K(R,E),ee=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const ie=i.get(ee);if(ee.version!==ie.__version||ne===!0){n.activeTexture(t.TEXTURE0+z);const ye=Ze.getPrimaries(Ze.workingColorSpace),ue=E.colorSpace===Un?null:Ze.getPrimaries(E.colorSpace),me=E.colorSpace===Un||ye===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,ke=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let se=0;se<6;se++)!we&&!ke?Q[se]=y(E.image[se],!1,!0,r.maxCubemapSize):Q[se]=ke?E.image[se].image:E.image[se],Q[se]=Oe(E,Q[se]);const Ke=Q[0],Ge=m(Ke)||a,be=s.convert(E.format,E.colorSpace),Se=s.convert(E.type),ge=x(E.internalFormat,be,Se,E.colorSpace),Ue=a&&E.isVideoTexture!==!0,Ye=ie.__version===void 0||ne===!0;let pt=A(E,Ke,Ge);X(t.TEXTURE_CUBE_MAP,E,Ge);let Ve;if(we){Ue&&Ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,ge,Ke.width,Ke.height);for(let se=0;se<6;se++){Ve=Q[se].mipmaps;for(let L=0;L<Ve.length;L++){const ae=Ve[L];E.format!==Jn?be!==null?Ue?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,0,0,ae.width,ae.height,be,ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,ge,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,0,0,ae.width,ae.height,be,Se,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,ge,ae.width,ae.height,0,be,Se,ae.data)}}}else{Ve=E.mipmaps,Ue&&Ye&&(Ve.length>0&&pt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,ge,Q[0].width,Q[0].height));for(let se=0;se<6;se++)if(ke){Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Q[se].width,Q[se].height,be,Se,Q[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ge,Q[se].width,Q[se].height,0,be,Se,Q[se].data);for(let L=0;L<Ve.length;L++){const le=Ve[L].image[se].image;Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,0,0,le.width,le.height,be,Se,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,ge,le.width,le.height,0,be,Se,le.data)}}else{Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,be,Se,Q[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ge,be,Se,Q[se]);for(let L=0;L<Ve.length;L++){const ae=Ve[L];Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,0,0,be,Se,ae.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,ge,be,Se,ae.image[se])}}}_(E,Ge)&&v(t.TEXTURE_CUBE_MAP),ie.__version=ee.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ve(R,E,z,ne,ee,ie){const ye=s.convert(z.format,z.colorSpace),ue=s.convert(z.type),me=x(z.internalFormat,ye,ue,z.colorSpace);if(!i.get(E).__hasExternalTextures){const ke=Math.max(1,E.width>>ie),Q=Math.max(1,E.height>>ie);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ie,me,ke,Q,E.depth,0,ye,ue,null):n.texImage2D(ee,ie,me,ke,Q,0,ye,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),_e(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,i.get(z).__webglTexture,0,Pe(E)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,i.get(z).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(R,E,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let ne=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(z||_e(E)){const ee=E.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Ji?ne=t.DEPTH_COMPONENT32F:ee.type===Qi&&(ne=t.DEPTH_COMPONENT24));const ie=Pe(E);_e(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,ne,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,ne,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ne,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const ne=Pe(E);z&&_e(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,E.width,E.height):_e(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ne=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0;ee<ne.length;ee++){const ie=ne[ee],ye=s.convert(ie.format,ie.colorSpace),ue=s.convert(ie.type),me=x(ie.internalFormat,ye,ue,ie.colorSpace),we=Pe(E);z&&_e(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,we,me,E.width,E.height):_e(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,we,me,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,me,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ie(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);const ne=i.get(E.depthTexture).__webglTexture,ee=Pe(E);if(E.depthTexture.format===jr)_e(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(E.depthTexture.format===io)_e(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ae(R){const E=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ie(E.__webglFramebuffer,R)}else if(z){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]=t.createRenderbuffer(),De(E.__webglDepthbuffer[ne],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),De(E.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(R,E,z){const ne=i.get(R);E!==void 0&&ve(ne.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Ae(R)}function B(R){const E=R.texture,z=i.get(R),ne=i.get(E);R.addEventListener("dispose",b),R.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=E.version,o.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,ie=R.isWebGLMultipleRenderTargets===!0,ye=m(R)||a;if(ee){z.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[ue]=[];for(let me=0;me<E.mipmaps.length;me++)z.__webglFramebuffer[ue][me]=t.createFramebuffer()}else z.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)z.__webglFramebuffer[ue]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const ue=R.texture;for(let me=0,we=ue.length;me<we;me++){const ke=i.get(ue[me]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&_e(R)===!1){const ue=ie?E:[E];z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let me=0;me<ue.length;me++){const we=ue[me];z.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[me]);const ke=s.convert(we.format,we.colorSpace),Q=s.convert(we.type),Ke=x(we.internalFormat,ke,Q,we.colorSpace,R.isXRRenderTarget===!0),Ge=Pe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Ke,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,z.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),De(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),X(t.TEXTURE_CUBE_MAP,E,ye);for(let ue=0;ue<6;ue++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)ve(z.__webglFramebuffer[ue][me],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else ve(z.__webglFramebuffer[ue],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);_(E,ye)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const ue=R.texture;for(let me=0,we=ue.length;me<we;me++){const ke=ue[me],Q=i.get(ke);n.bindTexture(t.TEXTURE_2D,Q.__webglTexture),X(t.TEXTURE_2D,ke,ye),ve(z.__webglFramebuffer,R,ke,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),_(ke,ye)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ue,ne.__webglTexture),X(ue,E,ye),a&&E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)ve(z.__webglFramebuffer[me],R,E,t.COLOR_ATTACHMENT0,ue,me);else ve(z.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,ue,0);_(E,ye)&&v(ue),n.unbindTexture()}R.depthBuffer&&Ae(R)}function Zt(R){const E=m(R)||a,z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ne=0,ee=z.length;ne<ee;ne++){const ie=z[ne];if(_(ie,E)){const ye=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ue=i.get(ie).__webglTexture;n.bindTexture(ye,ue),v(ye),n.unbindTexture()}}}function Me(R){if(a&&R.samples>0&&_e(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],z=R.width,ne=R.height;let ee=t.COLOR_BUFFER_BIT;const ie=[],ye=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(R),me=R.isWebGLMultipleRenderTargets===!0;if(me)for(let we=0;we<E.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let we=0;we<E.length;we++){ie.push(t.COLOR_ATTACHMENT0+we),R.depthBuffer&&ie.push(ye);const ke=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(ke===!1&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),me&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[we]),ke===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ye]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ye])),me){const Q=i.get(E[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Q,0)}t.blitFramebuffer(0,0,z,ne,0,0,z,ne,ee,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let we=0;we<E.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,ue.__webglColorRenderbuffer[we]);const ke=i.get(E[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Pe(R){return Math.min(r.maxSamples,R.samples)}function _e(R){const E=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ct(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function Oe(R,E){const z=R.colorSpace,ne=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Qd||z!==Ii&&z!==Un&&(Ze.getTransfer(z)===st?a===!1?e.has("EXT_sRGB")===!0&&ne===Jn?(R.format=Qd,R.minFilter=Nn,R.generateMipmaps=!1):E=KS.sRGBToLinear(E):(ne!==Jn||ee!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}this.allocateTextureUnit=N,this.resetTextureUnits=J,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=D,this.setTextureCube=F,this.rebindTextures=je,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=_e}function VN(t,e,n){const i=n.isWebGL2;function r(s,o=Un){let a;const l=Ze.getTransfer(o);if(s===fr)return t.UNSIGNED_BYTE;if(s===zS)return t.UNSIGNED_SHORT_4_4_4_4;if(s===HS)return t.UNSIGNED_SHORT_5_5_5_1;if(s===xP)return t.BYTE;if(s===SP)return t.SHORT;if(s===Cp)return t.UNSIGNED_SHORT;if(s===VS)return t.INT;if(s===Qi)return t.UNSIGNED_INT;if(s===Ji)return t.FLOAT;if(s===ga)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===MP)return t.ALPHA;if(s===Jn)return t.RGBA;if(s===EP)return t.LUMINANCE;if(s===TP)return t.LUMINANCE_ALPHA;if(s===jr)return t.DEPTH_COMPONENT;if(s===io)return t.DEPTH_STENCIL;if(s===Qd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===wP)return t.RED;if(s===GS)return t.RED_INTEGER;if(s===AP)return t.RG;if(s===WS)return t.RG_INTEGER;if(s===jS)return t.RGBA_INTEGER;if(s===Ju||s===ef||s===tf||s===nf)if(l===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ju)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ef)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ju)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ef)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_v||s===yv||s===xv||s===Sv)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===_v)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yv)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xv)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sv)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===XS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Mv||s===Ev)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Mv)return l===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ev)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Tv||s===wv||s===Av||s===Cv||s===Rv||s===bv||s===Pv||s===Lv||s===Dv||s===Nv||s===Iv||s===Uv||s===Fv||s===Ov)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Tv)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wv)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Av)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cv)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rv)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bv)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Pv)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lv)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Dv)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Nv)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Iv)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Uv)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fv)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ov)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===rf||s===kv||s===Bv)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===rf)return l===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kv)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Bv)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===CP||s===Vv||s===zv||s===Hv)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===rf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Vv)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zv)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Hv)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class zN extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tl extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HN={type:"move"};class bf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(c,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HN)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Tl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class GN extends fo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const y=n.getContextAttributes();let m=null,h=null;const _=[],v=[],x=new Qe;let A=null;const C=new In;C.layers.enable(1),C.viewport=new zt;const w=new In;w.layers.enable(2),w.viewport=new zt;const b=[C,w],S=new zN;S.layers.enable(1),S.layers.enable(2);let M=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=_[X];return K===void 0&&(K=new bf,_[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=_[X];return K===void 0&&(K=new bf,_[X]=K),K.getGripSpace()},this.getHand=function(X){let K=_[X];return K===void 0&&(K=new bf,_[X]=K),K.getHandSpace()};function Y(X){const K=v.indexOf(X.inputSource);if(K===-1)return;const ce=_[K];ce!==void 0&&(ce.update(X.inputSource,X.frame,c||o),ce.dispatchEvent({type:X.type,data:X.inputSource}))}function J(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",N);for(let X=0;X<_.length;X++){const K=v[X];K!==null&&(v[X]=null,_[X].disconnect(K))}M=null,U=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",J),r.addEventListener("inputsourceschange",N),y.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(x),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new Jr(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:fr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let K=null,ce=null,pe=null;y.depth&&(pe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=y.stencil?io:jr,ce=y.stencil?Wr:Qi);const ve={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new Jr(d.textureWidth,d.textureHeight,{format:Jn,type:fr,depthTexture:new uM(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const De=e.properties.get(h);De.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(X){for(let K=0;K<X.removed.length;K++){const ce=X.removed[K],pe=v.indexOf(ce);pe>=0&&(v[pe]=null,_[pe].disconnect(ce))}for(let K=0;K<X.added.length;K++){const ce=X.added[K];let pe=v.indexOf(ce);if(pe===-1){for(let De=0;De<_.length;De++)if(De>=v.length){v.push(ce),pe=De;break}else if(v[De]===null){v[De]=ce,pe=De;break}if(pe===-1)break}const ve=_[pe];ve&&ve.connect(ce)}}const k=new G,j=new G;function q(X,K,ce){k.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(ce.matrixWorld);const pe=k.distanceTo(j),ve=K.projectionMatrix.elements,De=ce.projectionMatrix.elements,Ie=ve[14]/(ve[10]-1),Ae=ve[14]/(ve[10]+1),je=(ve[9]+1)/ve[5],B=(ve[9]-1)/ve[5],Zt=(ve[8]-1)/ve[0],Me=(De[8]+1)/De[0],Pe=Ie*Zt,_e=Ie*Me,ct=pe/(-Zt+Me),Oe=ct*-Zt;K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Oe),X.translateZ(ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const R=Ie+ct,E=Ae+ct,z=Pe-Oe,ne=_e+(pe-Oe),ee=je*Ae/E*R,ie=B*Ae/E*R;X.projectionMatrix.makePerspective(z,ne,ee,ie,R,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function D(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;S.near=w.near=C.near=X.near,S.far=w.far=C.far=X.far,(M!==S.near||U!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,U=S.far);const K=X.parent,ce=S.cameras;D(S,K);for(let pe=0;pe<ce.length;pe++)D(ce[pe],K);ce.length===2?q(S,C,w):S.projectionMatrix.copy(C.projectionMatrix),F(X,S,K)};function F(X,K,ce){ce===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(ce.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Jd*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let O=null;function $(X,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let pe=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let ve=0;ve<ce.length;ve++){const De=ce[ve];let Ie=null;if(p!==null)Ie=p.getViewport(De);else{const je=f.getViewSubImage(d,De);Ie=je.viewport,ve===0&&(e.setRenderTargetTextures(h,je.colorTexture,d.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(h))}let Ae=b[ve];Ae===void 0&&(Ae=new In,Ae.layers.enable(ve),Ae.viewport=new zt,b[ve]=Ae),Ae.matrix.fromArray(De.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(De.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ve===0&&(S.matrix.copy(Ae.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(Ae)}}for(let ce=0;ce<_.length;ce++){const pe=v[ce],ve=_[ce];pe!==null&&ve!==void 0&&ve.update(pe,K,c||o)}O&&O(X,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const Z=new cM;Z.setAnimationLoop($),this.setAnimationLoop=function(X){O=X},this.dispose=function(){}}}function WN(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,sM(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,v,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,_,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===gn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===gn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*v,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===gn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jN(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const x=v.program;i.uniformBlockBinding(_,x)}function c(_,v){let x=r[_.id];x===void 0&&(g(_),x=u(_),r[_.id]=x,_.addEventListener("dispose",m));const A=v.program;i.updateUBOMapping(_,A);const C=e.render.frame;s[_.id]!==C&&(d(_),s[_.id]=C)}function u(_){const v=f();_.__bindingPointIndex=v;const x=t.createBuffer(),A=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const v=r[_.id],x=_.uniforms,A=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,w=x.length;C<w;C++){const b=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,M=b.length;S<M;S++){const U=b[S];if(p(U,C,S,A)===!0){const Y=U.__offset,J=Array.isArray(U.value)?U.value:[U.value];let N=0;for(let k=0;k<J.length;k++){const j=J[k],q=y(j);typeof j=="number"||typeof j=="boolean"?(U.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,Y+N,U.__data)):j.isMatrix3?(U.__data[0]=j.elements[0],U.__data[1]=j.elements[1],U.__data[2]=j.elements[2],U.__data[3]=0,U.__data[4]=j.elements[3],U.__data[5]=j.elements[4],U.__data[6]=j.elements[5],U.__data[7]=0,U.__data[8]=j.elements[6],U.__data[9]=j.elements[7],U.__data[10]=j.elements[8],U.__data[11]=0):(j.toArray(U.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,x,A){const C=_.value,w=v+"_"+x;if(A[w]===void 0)return typeof C=="number"||typeof C=="boolean"?A[w]=C:A[w]=C.clone(),!0;{const b=A[w];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return A[w]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function g(_){const v=_.uniforms;let x=0;const A=16;for(let w=0,b=v.length;w<b;w++){const S=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,U=S.length;M<U;M++){const Y=S[M],J=Array.isArray(Y.value)?Y.value:[Y.value];for(let N=0,k=J.length;N<k;N++){const j=J[N],q=y(j),D=x%A;D!==0&&A-D<q.boundary&&(x+=A-D),Y.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=x,x+=q.storage}}}const C=x%A;return C>0&&(x+=A-C),_.__size=x,_.__cache={},this}function y(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class gM{constructor(e={}){const{canvas:n=VP(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const h=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this._useLegacyLights=!1,this.toneMapping=ur,this.toneMappingExposure=1;const v=this;let x=!1,A=0,C=0,w=null,b=-1,S=null;const M=new zt,U=new zt;let Y=null;const J=new $e(0);let N=0,k=n.width,j=n.height,q=1,D=null,F=null;const O=new zt(0,0,k,j),$=new zt(0,0,k,j);let Z=!1;const X=new lM;let K=!1,ce=!1,pe=null;const ve=new Ft,De=new Qe,Ie=new G,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return w===null?q:1}let B=i;function Zt(T,I){for(let H=0;H<T.length;H++){const W=T[H],V=n.getContext(W,I);if(V!==null)return V}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ap}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",ae,!1),B===null){const I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),B=Zt(I,T),B===null)throw Zt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Me,Pe,_e,ct,Oe,R,E,z,ne,ee,ie,ye,ue,me,we,ke,Q,Ke,Ge,be,Se,ge,Ue,Ye;function pt(){Me=new t3(B),Pe=new $D(B,Me,e),Me.init(Pe),ge=new VN(B,Me,Pe),_e=new kN(B,Me,Pe),ct=new r3(B),Oe=new TN,R=new BN(B,Me,_e,Oe,Pe,ge,ct),E=new KD(v),z=new e3(v),ne=new f2(B,Pe),Ue=new XD(B,Me,ne,Pe),ee=new n3(B,ne,ct,Ue),ie=new l3(B,ee,ne,ct),Ge=new a3(B,Pe,R),ke=new qD(Oe),ye=new EN(v,E,z,Me,Pe,Ue,ke),ue=new WN(v,Oe),me=new AN,we=new DN(Me,Pe),Ke=new jD(v,E,z,_e,ie,d,l),Q=new ON(v,ie,Pe),Ye=new jN(B,ct,Pe,_e),be=new YD(B,Me,ct,Pe),Se=new i3(B,Me,ct,Pe),ct.programs=ye.programs,v.capabilities=Pe,v.extensions=Me,v.properties=Oe,v.renderLists=me,v.shadowMap=Q,v.state=_e,v.info=ct}pt();const Ve=new GN(v,B);this.xr=Ve,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(k,j,!1))},this.getSize=function(T){return T.set(k,j)},this.setSize=function(T,I,H=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,j=I,n.width=Math.floor(T*q),n.height=Math.floor(I*q),H===!0&&(n.style.width=T+"px",n.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(k*q,j*q).floor()},this.setDrawingBufferSize=function(T,I,H){k=T,j=I,q=H,n.width=Math.floor(T*H),n.height=Math.floor(I*H),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(O)},this.setViewport=function(T,I,H,W){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,I,H,W),_e.viewport(M.copy(O).multiplyScalar(q).floor())},this.getScissor=function(T){return T.copy($)},this.setScissor=function(T,I,H,W){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,I,H,W),_e.scissor(U.copy($).multiplyScalar(q).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){_e.setScissorTest(Z=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){F=T},this.getClearColor=function(T){return T.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(T=!0,I=!0,H=!0){let W=0;if(T){let V=!1;if(w!==null){const fe=w.texture.format;V=fe===jS||fe===WS||fe===GS}if(V){const fe=w.texture.type,xe=fe===fr||fe===Qi||fe===Cp||fe===Wr||fe===zS||fe===HS,Te=Ke.getClearColor(),Re=Ke.getClearAlpha(),Be=Te.r,Le=Te.g,Ne=Te.b;xe?(p[0]=Be,p[1]=Le,p[2]=Ne,p[3]=Re,B.clearBufferuiv(B.COLOR,0,p)):(g[0]=Be,g[1]=Le,g[2]=Ne,g[3]=Re,B.clearBufferiv(B.COLOR,0,g))}else W|=B.COLOR_BUFFER_BIT}I&&(W|=B.DEPTH_BUFFER_BIT),H&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),me.dispose(),we.dispose(),Oe.dispose(),E.dispose(),z.dispose(),ie.dispose(),Ue.dispose(),Ye.dispose(),ye.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Qt),Ve.removeEventListener("sessionend",nt),pe&&(pe.dispose(),pe=null),Jt.stop()};function se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=ct.autoReset,I=Q.enabled,H=Q.autoUpdate,W=Q.needsUpdate,V=Q.type;pt(),ct.autoReset=T,Q.enabled=I,Q.autoUpdate=H,Q.needsUpdate=W,Q.type=V}function ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function le(T){const I=T.target;I.removeEventListener("dispose",le),Ce(I)}function Ce(T){Ee(T),Oe.remove(T)}function Ee(T){const I=Oe.get(T).programs;I!==void 0&&(I.forEach(function(H){ye.releaseProgram(H)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,H,W,V,fe){I===null&&(I=Ae);const xe=V.isMesh&&V.matrixWorld.determinant()<0,Te=SM(T,I,H,W,V);_e.setMaterial(W,xe);let Re=H.index,Be=1;if(W.wireframe===!0){if(Re=ee.getWireframeAttribute(H),Re===void 0)return;Be=2}const Le=H.drawRange,Ne=H.attributes.position;let _t=Le.start*Be,_n=(Le.start+Le.count)*Be;fe!==null&&(_t=Math.max(_t,fe.start*Be),_n=Math.min(_n,(fe.start+fe.count)*Be)),Re!==null?(_t=Math.max(_t,0),_n=Math.min(_n,Re.count)):Ne!=null&&(_t=Math.max(_t,0),_n=Math.min(_n,Ne.count));const Dt=_n-_t;if(Dt<0||Dt===1/0)return;Ue.setup(V,W,Te,H,Re);let gi,ut=be;if(Re!==null&&(gi=ne.get(Re),ut=Se,ut.setIndex(gi)),V.isMesh)W.wireframe===!0?(_e.setLineWidth(W.wireframeLinewidth*je()),ut.setMode(B.LINES)):ut.setMode(B.TRIANGLES);else if(V.isLine){let ze=W.linewidth;ze===void 0&&(ze=1),_e.setLineWidth(ze*je()),V.isLineSegments?ut.setMode(B.LINES):V.isLineLoop?ut.setMode(B.LINE_LOOP):ut.setMode(B.LINE_STRIP)}else V.isPoints?ut.setMode(B.POINTS):V.isSprite&&ut.setMode(B.TRIANGLES);if(V.isBatchedMesh)ut.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)ut.renderInstances(_t,Dt,V.count);else if(H.isInstancedBufferGeometry){const ze=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,su=Math.min(H.instanceCount,ze);ut.renderInstances(_t,Dt,su)}else ut.render(_t,Dt)};function et(T,I,H){T.transparent===!0&&T.side===wi&&T.forceSinglePass===!1?(T.side=gn,T.needsUpdate=!0,Na(T,I,H),T.side=gr,T.needsUpdate=!0,Na(T,I,H),T.side=wi):Na(T,I,H)}this.compile=function(T,I,H=null){H===null&&(H=T),m=we.get(H),m.init(),_.push(m),H.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),T!==H&&T.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(v._useLegacyLights);const W=new Set;return T.traverse(function(V){const fe=V.material;if(fe)if(Array.isArray(fe))for(let xe=0;xe<fe.length;xe++){const Te=fe[xe];et(Te,H,V),W.add(Te)}else et(fe,H,V),W.add(fe)}),_.pop(),m=null,W},this.compileAsync=function(T,I,H=null){const W=this.compile(T,I,H);return new Promise(V=>{function fe(){if(W.forEach(function(xe){Oe.get(xe).currentProgram.isReady()&&W.delete(xe)}),W.size===0){V(T);return}setTimeout(fe,10)}Me.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let tt=null;function Lt(T){tt&&tt(T)}function Qt(){Jt.stop()}function nt(){Jt.start()}const Jt=new cM;Jt.setAnimationLoop(Lt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(T){tt=T,Ve.setAnimationLoop(T),T===null?Jt.stop():Jt.start()},Ve.addEventListener("sessionstart",Qt),Ve.addEventListener("sessionend",nt),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(I),I=Ve.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,I,w),m=we.get(T,_.length),m.init(),_.push(m),ve.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),X.setFromProjectionMatrix(ve),ce=this.localClippingEnabled,K=ke.init(this.clippingPlanes,ce),y=me.get(T,h.length),y.init(),h.push(y),si(T,I,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(D,F),this.info.render.frame++,K===!0&&ke.beginShadows();const H=m.state.shadowsArray;if(Q.render(H,T,I),K===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(y,T),m.setupLights(v._useLegacyLights),I.isArrayCamera){const W=I.cameras;for(let V=0,fe=W.length;V<fe;V++){const xe=W[V];Lp(y,T,xe,xe.viewport)}}else Lp(y,T,I);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(v,T,I),Ue.resetDefaultState(),b=-1,S=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function si(T,I,H,W){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){W&&Ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ve);const xe=ie.update(T),Te=T.material;Te.visible&&y.push(T,xe,Te,H,Ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){const xe=ie.update(T),Te=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ie.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ie.copy(xe.boundingSphere.center)),Ie.applyMatrix4(T.matrixWorld).applyMatrix4(ve)),Array.isArray(Te)){const Re=xe.groups;for(let Be=0,Le=Re.length;Be<Le;Be++){const Ne=Re[Be],_t=Te[Ne.materialIndex];_t&&_t.visible&&y.push(T,xe,_t,H,Ie.z,Ne)}}else Te.visible&&y.push(T,xe,Te,H,Ie.z,null)}}const fe=T.children;for(let xe=0,Te=fe.length;xe<Te;xe++)si(fe[xe],I,H,W)}function Lp(T,I,H,W){const V=T.opaque,fe=T.transmissive,xe=T.transparent;m.setupLightsView(H),K===!0&&ke.setGlobalState(v.clippingPlanes,H),fe.length>0&&xM(V,fe,I,H),W&&_e.viewport(M.copy(W)),V.length>0&&Da(V,I,H),fe.length>0&&Da(fe,I,H),xe.length>0&&Da(xe,I,H),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function xM(T,I,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const fe=Pe.isWebGL2;pe===null&&(pe=new Jr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?ga:fr,minFilter:ma,samples:fe?4:0})),v.getDrawingBufferSize(De),fe?pe.setSize(De.x,De.y):pe.setSize(eh(De.x),eh(De.y));const xe=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(J),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const Te=v.toneMapping;v.toneMapping=ur,Da(T,H,W),R.updateMultisampleRenderTarget(pe),R.updateRenderTargetMipmap(pe);let Re=!1;for(let Be=0,Le=I.length;Be<Le;Be++){const Ne=I[Be],_t=Ne.object,_n=Ne.geometry,Dt=Ne.material,gi=Ne.group;if(Dt.side===wi&&_t.layers.test(W.layers)){const ut=Dt.side;Dt.side=gn,Dt.needsUpdate=!0,Dp(_t,H,W,_n,Dt,gi),Dt.side=ut,Dt.needsUpdate=!0,Re=!0}}Re===!0&&(R.updateMultisampleRenderTarget(pe),R.updateRenderTargetMipmap(pe)),v.setRenderTarget(xe),v.setClearColor(J,N),v.toneMapping=Te}function Da(T,I,H){const W=I.isScene===!0?I.overrideMaterial:null;for(let V=0,fe=T.length;V<fe;V++){const xe=T[V],Te=xe.object,Re=xe.geometry,Be=W===null?xe.material:W,Le=xe.group;Te.layers.test(H.layers)&&Dp(Te,I,H,Re,Be,Le)}}function Dp(T,I,H,W,V,fe){T.onBeforeRender(v,I,H,W,V,fe),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(v,I,H,W,T,fe),V.transparent===!0&&V.side===wi&&V.forceSinglePass===!1?(V.side=gn,V.needsUpdate=!0,v.renderBufferDirect(H,I,W,V,T,fe),V.side=gr,V.needsUpdate=!0,v.renderBufferDirect(H,I,W,V,T,fe),V.side=wi):v.renderBufferDirect(H,I,W,V,T,fe),T.onAfterRender(v,I,H,W,V,fe)}function Na(T,I,H){I.isScene!==!0&&(I=Ae);const W=Oe.get(T),V=m.state.lights,fe=m.state.shadowsArray,xe=V.state.version,Te=ye.getParameters(T,V.state,fe,I,H),Re=ye.getProgramCacheKey(Te);let Be=W.programs;W.environment=T.isMeshStandardMaterial?I.environment:null,W.fog=I.fog,W.envMap=(T.isMeshStandardMaterial?z:E).get(T.envMap||W.environment),Be===void 0&&(T.addEventListener("dispose",le),Be=new Map,W.programs=Be);let Le=Be.get(Re);if(Le!==void 0){if(W.currentProgram===Le&&W.lightsStateVersion===xe)return Ip(T,Te),Le}else Te.uniforms=ye.getUniforms(T),T.onBuild(H,Te,v),T.onBeforeCompile(Te,v),Le=ye.acquireProgram(Te,Re),Be.set(Re,Le),W.uniforms=Te.uniforms;const Ne=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=ke.uniform),Ip(T,Te),W.needsLights=EM(T),W.lightsStateVersion=xe,W.needsLights&&(Ne.ambientLightColor.value=V.state.ambient,Ne.lightProbe.value=V.state.probe,Ne.directionalLights.value=V.state.directional,Ne.directionalLightShadows.value=V.state.directionalShadow,Ne.spotLights.value=V.state.spot,Ne.spotLightShadows.value=V.state.spotShadow,Ne.rectAreaLights.value=V.state.rectArea,Ne.ltc_1.value=V.state.rectAreaLTC1,Ne.ltc_2.value=V.state.rectAreaLTC2,Ne.pointLights.value=V.state.point,Ne.pointLightShadows.value=V.state.pointShadow,Ne.hemisphereLights.value=V.state.hemi,Ne.directionalShadowMap.value=V.state.directionalShadowMap,Ne.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ne.spotShadowMap.value=V.state.spotShadowMap,Ne.spotLightMatrix.value=V.state.spotLightMatrix,Ne.spotLightMap.value=V.state.spotLightMap,Ne.pointShadowMap.value=V.state.pointShadowMap,Ne.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=Le,W.uniformsList=null,Le}function Np(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=Yl.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function Ip(T,I){const H=Oe.get(T);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function SM(T,I,H,W,V){I.isScene!==!0&&(I=Ae),R.resetTextureUnits();const fe=I.fog,xe=W.isMeshStandardMaterial?I.environment:null,Te=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ii,Re=(W.isMeshStandardMaterial?z:E).get(W.envMap||xe),Be=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Le=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ne=!!H.morphAttributes.position,_t=!!H.morphAttributes.normal,_n=!!H.morphAttributes.color;let Dt=ur;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Dt=v.toneMapping);const gi=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ut=gi!==void 0?gi.length:0,ze=Oe.get(W),su=m.state.lights;if(K===!0&&(ce===!0||T!==S)){const bn=T===S&&W.id===b;ke.setState(W,T,bn)}let mt=!1;W.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==su.state.version||ze.outputColorSpace!==Te||V.isBatchedMesh&&ze.batching===!1||!V.isBatchedMesh&&ze.batching===!0||V.isInstancedMesh&&ze.instancing===!1||!V.isInstancedMesh&&ze.instancing===!0||V.isSkinnedMesh&&ze.skinning===!1||!V.isSkinnedMesh&&ze.skinning===!0||V.isInstancedMesh&&ze.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ze.instancingColor===!1&&V.instanceColor!==null||ze.envMap!==Re||W.fog===!0&&ze.fog!==fe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ke.numPlanes||ze.numIntersection!==ke.numIntersection)||ze.vertexAlphas!==Be||ze.vertexTangents!==Le||ze.morphTargets!==Ne||ze.morphNormals!==_t||ze.morphColors!==_n||ze.toneMapping!==Dt||Pe.isWebGL2===!0&&ze.morphTargetsCount!==ut)&&(mt=!0):(mt=!0,ze.__version=W.version);let Sr=ze.currentProgram;mt===!0&&(Sr=Na(W,I,V));let Up=!1,po=!1,ou=!1;const Wt=Sr.getUniforms(),Mr=ze.uniforms;if(_e.useProgram(Sr.program)&&(Up=!0,po=!0,ou=!0),W.id!==b&&(b=W.id,po=!0),Up||S!==T){Wt.setValue(B,"projectionMatrix",T.projectionMatrix),Wt.setValue(B,"viewMatrix",T.matrixWorldInverse);const bn=Wt.map.cameraPosition;bn!==void 0&&bn.setValue(B,Ie.setFromMatrixPosition(T.matrixWorld)),Pe.logarithmicDepthBuffer&&Wt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Wt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,po=!0,ou=!0)}if(V.isSkinnedMesh){Wt.setOptional(B,V,"bindMatrix"),Wt.setOptional(B,V,"bindMatrixInverse");const bn=V.skeleton;bn&&(Pe.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Wt.setValue(B,"boneTexture",bn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Wt.setOptional(B,V,"batchingTexture"),Wt.setValue(B,"batchingTexture",V._matricesTexture,R));const au=H.morphAttributes;if((au.position!==void 0||au.normal!==void 0||au.color!==void 0&&Pe.isWebGL2===!0)&&Ge.update(V,H,Sr),(po||ze.receiveShadow!==V.receiveShadow)&&(ze.receiveShadow=V.receiveShadow,Wt.setValue(B,"receiveShadow",V.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Mr.envMap.value=Re,Mr.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),po&&(Wt.setValue(B,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&MM(Mr,ou),fe&&W.fog===!0&&ue.refreshFogUniforms(Mr,fe),ue.refreshMaterialUniforms(Mr,W,q,j,pe),Yl.upload(B,Np(ze),Mr,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Yl.upload(B,Np(ze),Mr,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Wt.setValue(B,"center",V.center),Wt.setValue(B,"modelViewMatrix",V.modelViewMatrix),Wt.setValue(B,"normalMatrix",V.normalMatrix),Wt.setValue(B,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const bn=W.uniformsGroups;for(let lu=0,TM=bn.length;lu<TM;lu++)if(Pe.isWebGL2){const Fp=bn[lu];Ye.update(Fp,Sr),Ye.bind(Fp,Sr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sr}function MM(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function EM(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,I,H){Oe.get(T.texture).__webglTexture=I,Oe.get(T.depthTexture).__webglTexture=H;const W=Oe.get(T);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,I){const H=Oe.get(T);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,H=0){w=T,A=I,C=H;let W=!0,V=null,fe=!1,xe=!1;if(T){const Re=Oe.get(T);Re.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(B.FRAMEBUFFER,null),W=!1):Re.__webglFramebuffer===void 0?R.setupRenderTarget(T):Re.__hasExternalTextures&&R.rebindTextures(T,Oe.get(T.texture).__webglTexture,Oe.get(T.depthTexture).__webglTexture);const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(xe=!0);const Le=Oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[I])?V=Le[I][H]:V=Le[I],fe=!0):Pe.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?V=Oe.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?V=Le[H]:V=Le,M.copy(T.viewport),U.copy(T.scissor),Y=T.scissorTest}else M.copy(O).multiplyScalar(q).floor(),U.copy($).multiplyScalar(q).floor(),Y=Z;if(_e.bindFramebuffer(B.FRAMEBUFFER,V)&&Pe.drawBuffers&&W&&_e.drawBuffers(T,V),_e.viewport(M),_e.scissor(U),_e.setScissorTest(Y),fe){const Re=Oe.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+I,Re.__webglTexture,H)}else if(xe){const Re=Oe.get(T.texture),Be=I||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Re.__webglTexture,H||0,Be)}b=-1},this.readRenderTargetPixels=function(T,I,H,W,V,fe,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Te=Te[xe]),Te){_e.bindFramebuffer(B.FRAMEBUFFER,Te);try{const Re=T.texture,Be=Re.format,Le=Re.type;if(Be!==Jn&&ge.convert(Be)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Le===ga&&(Me.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Le!==fr&&ge.convert(Le)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===Ji&&(Pe.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-W&&H>=0&&H<=T.height-V&&B.readPixels(I,H,W,V,ge.convert(Be),ge.convert(Le),fe)}finally{const Re=w!==null?Oe.get(w).__webglFramebuffer:null;_e.bindFramebuffer(B.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(T,I,H=0){const W=Math.pow(2,-H),V=Math.floor(I.image.width*W),fe=Math.floor(I.image.height*W);R.setTexture2D(I,0),B.copyTexSubImage2D(B.TEXTURE_2D,H,0,0,T.x,T.y,V,fe),_e.unbindTexture()},this.copyTextureToTexture=function(T,I,H,W=0){const V=I.image.width,fe=I.image.height,xe=ge.convert(H.format),Te=ge.convert(H.type);R.setTexture2D(H,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,H.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,H.unpackAlignment),I.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,T.x,T.y,V,fe,xe,Te,I.image.data):I.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,T.x,T.y,I.mipmaps[0].width,I.mipmaps[0].height,xe,I.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,W,T.x,T.y,xe,Te,I.image),W===0&&H.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(T,I,H,W,V=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=T.max.x-T.min.x+1,xe=T.max.y-T.min.y+1,Te=T.max.z-T.min.z+1,Re=ge.convert(W.format),Be=ge.convert(W.type);let Le;if(W.isData3DTexture)R.setTexture3D(W,0),Le=B.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)R.setTexture2DArray(W,0),Le=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const Ne=B.getParameter(B.UNPACK_ROW_LENGTH),_t=B.getParameter(B.UNPACK_IMAGE_HEIGHT),_n=B.getParameter(B.UNPACK_SKIP_PIXELS),Dt=B.getParameter(B.UNPACK_SKIP_ROWS),gi=B.getParameter(B.UNPACK_SKIP_IMAGES),ut=H.isCompressedTexture?H.mipmaps[V]:H.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ut.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ut.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,T.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,T.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,T.min.z),H.isDataTexture||H.isData3DTexture?B.texSubImage3D(Le,V,I.x,I.y,I.z,fe,xe,Te,Re,Be,ut.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Le,V,I.x,I.y,I.z,fe,xe,Te,Re,ut.data)):B.texSubImage3D(Le,V,I.x,I.y,I.z,fe,xe,Te,Re,Be,ut),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ne),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_t),B.pixelStorei(B.UNPACK_SKIP_PIXELS,_n),B.pixelStorei(B.UNPACK_SKIP_ROWS,Dt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,gi),V===0&&W.generateMipmaps&&B.generateMipmap(Le),_e.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),_e.unbindTexture()},this.resetState=function(){A=0,C=0,w=null,_e.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Rp?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===tu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Bt?Xr:YS}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xr?Bt:Ii}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class XN extends gM{}XN.prototype.isWebGL1Renderer=!0;class YN extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class vM extends Pa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const L0=new Ft,nh=new JS,wl=new nu,Al=new G;class $N extends vn{constructor(e=new Fi,n=new vM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(r),wl.radius+=s,e.ray.intersectsSphere(wl)===!1)return;L0.copy(r).invert(),nh.copy(e.ray).applyMatrix4(L0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,y=p;g<y;g++){const m=c.getX(g);Al.fromBufferAttribute(f,m),D0(Al,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,y=p;g<y;g++)Al.fromBufferAttribute(f,g),D0(Al,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function D0(t,e,n,i,r,s,o){const a=nh.distanceSqToPoint(t);if(a<n){const l=new G;nh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ap}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ap);const yt="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/",qN=[{url:`${yt}python/python-original.svg`,accent:"#3776AB"},{url:`${yt}javascript/javascript-original.svg`,accent:"#F7DF1E"},{url:`${yt}typescript/typescript-original.svg`,accent:"#3178C6"},{url:`${yt}html5/html5-original.svg`,accent:"#E34F26"},{url:`${yt}css3/css3-original.svg`,accent:"#1572B6"},{url:`${yt}react/react-original.svg`,accent:"#61DAFB"},{url:`${yt}angularjs/angularjs-original.svg`,accent:"#DD0031"},{url:`${yt}django/django-plain.svg`,accent:"#44B78B"},{url:`${yt}flask/flask-original.svg`,accent:"#FFFFFF"},{url:`${yt}fastapi/fastapi-original.svg`,accent:"#009688"},{url:`${yt}postgresql/postgresql-original.svg`,accent:"#336791"},{url:`${yt}mysql/mysql-original.svg`,accent:"#00758F"},{url:`${yt}git/git-original.svg`,accent:"#F05032"},{url:`${yt}github/github-original.svg`,accent:"#E0E0E0"},{url:`${yt}docker/docker-original.svg`,accent:"#2496ED"},{url:`${yt}kubernetes/kubernetes-original.svg`,accent:"#326CE5"},{url:`${yt}linux/linux-original.svg`,accent:"#FCC624"},{url:`${yt}amazonwebservices/amazonwebservices-original.svg`,accent:"#FF9900"},{url:`${yt}azure/azure-original.svg`,accent:"#0078D4"},{url:`${yt}jira/jira-original.svg`,accent:"#0052CC"},{url:`${yt}postman/postman-original.svg`,accent:"#FF6C37"},{url:"https://cdn.simpleicons.org/odoo/714B67",accent:"#714B67"}];function KN(t,e){const n=qN.map(({url:i,accent:r})=>new Promise(s=>{const o=new Image;o.crossOrigin="anonymous",o.onload=()=>s({img:o,accent:r}),o.onerror=()=>s({img:null,accent:r}),o.src=i}));return Promise.all(n).then(i=>i.map(({img:r,accent:s})=>({img:r,accent:s,x:Math.random()*t,y:Math.random()*e,angle:Math.random()*Math.PI*2,speed:.4+Math.random()*.55})))}function ZN(t,e){if(!e.img)return;const n=e.x,i=e.y;t.save(),t.globalAlpha=1,t.drawImage(e.img,n-20,i-20,40,40),t.restore()}function QN(){const t=re.useRef(null),e=re.useRef(null),n=re.useRef(null);return re.useEffect(()=>{const i=()=>Math.min(Math.max(window.innerHeight,700),1080),r=t.current,s=e.current,o=n.current;if(!r||!s||!o)return;let a=r.offsetWidth,l=i();r.style.height=`${l}px`;const c=o.getContext("2d");o.width=a,o.height=l,c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high";const u=new YN,f=new In(60,a/l,.1,100);f.position.z=5;const d=new gM({canvas:s,antialias:!0,alpha:!1});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setSize(a,l),d.setClearColor(657935,1);const p=300,g=new Float32Array(p*3);for(let b=0;b<p;b++){const S=2.5+Math.random()*2.5,M=Math.random()*Math.PI*2,U=Math.acos(2*Math.random()-1);g[b*3]=S*Math.sin(U)*Math.cos(M),g[b*3+1]=S*Math.sin(U)*Math.sin(M),g[b*3+2]=S*Math.cos(U)}const y=new Fi;y.setAttribute("position",new ii(g,3));const m=new vM({color:8490232,size:.03,opacity:.8,transparent:!0}),h=new $N(y,m);u.add(h);const _={x:0,y:0},v=b=>{_.x=b.clientX/a*2-1,_.y=-(b.clientY/l)*2+1};window.addEventListener("mousemove",v);let x=[],A=null;function C(){A=requestAnimationFrame(C),h.rotation.y+=8e-4,h.rotation.x+=2e-4,f.position.x+=(_.x*.5-f.position.x)*.05,f.position.y+=(_.y*.3-f.position.y)*.05,f.lookAt(0,0,0),d.render(u,f),c.clearRect(0,0,a,l);for(let b=0;b<x.length;b++){const S=x[b];S.x+=Math.cos(S.angle)*S.speed,S.y+=Math.sin(S.angle)*S.speed,S.x<-50&&(S.x=a+50),S.x>a+50&&(S.x=-50),S.y<-50&&(S.y=l+50),S.y>l+50&&(S.y=-50),ZN(c,S)}}KN(a,l).then(b=>{x=b,C()});const w=()=>{a=r.offsetWidth,l=i(),r.style.height=`${l}px`,f.aspect=a/l,f.updateProjectionMatrix(),d.setSize(a,l),o.width=a,o.height=l,c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high"};return window.addEventListener("resize",w),()=>{A&&cancelAnimationFrame(A),window.removeEventListener("mousemove",v),window.removeEventListener("resize",w),d.dispose(),y.dispose(),m.dispose()}},[]),P.jsxs("div",{ref:t,style:{position:"relative",width:"100%",minHeight:"700px",maxHeight:"1080px",background:"#0a0a0f",overflow:"hidden"},children:[P.jsx("canvas",{ref:e,style:{position:"absolute",inset:0,zIndex:0}}),P.jsx("canvas",{ref:n,style:{position:"absolute",inset:0,zIndex:1,pointerEvents:"none"}}),P.jsxs("div",{style:{position:"absolute",inset:0,zIndex:2,pointerEvents:"none",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"0 24px"},children:[P.jsx("p",{style:{fontFamily:"'Courier New', monospace",fontSize:"clamp(10px, 1.4vw, 14px)",letterSpacing:"0.26em",color:"#5eead4",textTransform:"uppercase",margin:"0 0 16px 0"},children:"Hey..."}),P.jsxs("h1",{style:{fontFamily:"system-ui, -apple-system, sans-serif",fontSize:"clamp(48px, 8vw, 96px)",fontWeight:800,letterSpacing:"-0.02em",lineHeight:1.1,margin:"0 0 20px 0"},children:[P.jsx("span",{style:{color:"#f0f4ff"},children:"I'm "}),P.jsx("span",{style:{background:"linear-gradient(90deg, #14b8a6, #3b82f6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Ajay P"})]}),P.jsx("p",{style:{fontFamily:"system-ui, -apple-system, sans-serif",fontSize:"clamp(13px, 1.8vw, 20px)",fontWeight:600,color:"rgba(255,255,255,0.92)",letterSpacing:"0.02em",margin:"0 0 48px 0"},children:"Software Developer | Odoo Technical Consultant | AI Expert"}),P.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"16px",justifyContent:"center",pointerEvents:"all",flexWrap:"wrap"},children:[P.jsx("a",{href:"#services",style:{background:"linear-gradient(135deg, #14b8a6, #0ea5e9)",color:"#ffffff",border:"none",borderRadius:"50px",padding:"15px 36px",fontSize:"clamp(13px, 1.4vw, 16px)",fontWeight:600,cursor:"pointer",boxShadow:"0 0 28px rgba(20,184,166,0.45)",textDecoration:"none",fontFamily:"system-ui, -apple-system, sans-serif",transition:"transform 0.2s ease, box-shadow 0.2s ease",display:"inline-block"},onMouseEnter:i=>{i.currentTarget.style.transform="scale(1.05)",i.currentTarget.style.boxShadow="0 0 40px rgba(20,184,166,0.65)"},onMouseLeave:i=>{i.currentTarget.style.transform="scale(1)",i.currentTarget.style.boxShadow="0 0 28px rgba(20,184,166,0.45)"},children:"What I Do"}),P.jsx("a",{href:"#contact",style:{background:"transparent",color:"#ffffff",border:"1.5px solid rgba(255,255,255,0.25)",borderRadius:"50px",padding:"15px 36px",fontSize:"clamp(13px, 1.4vw, 16px)",fontWeight:600,cursor:"pointer",textDecoration:"none",fontFamily:"system-ui, -apple-system, sans-serif",transition:"border-color 0.2s ease, background 0.2s ease",display:"inline-block"},onMouseEnter:i=>{i.currentTarget.style.borderColor="rgba(255,255,255,0.6)",i.currentTarget.style.background="rgba(255,255,255,0.06)"},onMouseLeave:i=>{i.currentTarget.style.borderColor="rgba(255,255,255,0.25)",i.currentTarget.style.background="transparent"},children:"Get In Touch"})]}),P.jsxs("div",{style:{position:"absolute",bottom:"36px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",pointerEvents:"none"},children:[P.jsx("span",{style:{fontFamily:"'Courier New', monospace",fontSize:"9px",letterSpacing:"0.35em",color:"rgba(255,255,255,0.28)"},children:"SCROLL"}),P.jsx("div",{style:{width:"1px",height:"40px",background:"linear-gradient(to bottom, rgba(255,255,255,0.28), transparent)"}})]})]})]})}function JN(){return P.jsxs("section",{id:"about",className:"py-24 px-6 relative w-full flex items-center justify-center",children:[P.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-gray-900 to-[#0a0a0a] z-0"}),P.jsxs("div",{className:"max-w-7xl mx-auto w-full relative z-10",children:[P.jsxs(St.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8},className:"text-center mb-16",children:[P.jsxs("h2",{className:"text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 mb-4 tracking-tight",children:["About ",P.jsx("span",{className:"text-cyan-500",children:"Me"})]}),P.jsx("div",{className:"w-20 h-1 bg-cyan-500 mx-auto rounded-full"})]}),P.jsxs("div",{className:"grid lg:grid-cols-12 gap-12 items-center flex-col md:flex-row",children:[P.jsxs(St.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},className:"glass p-8 md:p-10 lg:p-12 rounded-3xl lg:col-span-7",children:[P.jsxs("h3",{className:"text-2xl font-semibold mb-6 text-white tracking-wide",children:["Who am ",P.jsx("span",{className:"text-cyan-400",children:"I?"})]}),P.jsxs("div",{className:"space-y-4 md:space-y-5 text-gray-400 leading-relaxed font-light text-[17px] md:text-lg",children:[P.jsxs("p",{children:["I’m a ",P.jsx("strong",{className:"text-white font-medium",children:"Software Developer"})," based in Kerala, focused on building clean, efficient, and scalable solutions. With a background in ",P.jsx("strong",{className:"text-white font-medium",children:"Full Stack Development"})," and strong expertise in Odoo ERP, I work across the entire product lifecycle — from gathering requirements and understanding business workflows to designing solutions, development, deployment, and post-launch support and training."]}),P.jsxs("p",{children:["I’ve developed complex ",P.jsx("strong",{className:"text-white font-medium",children:"Odoo"})," systems across domains like Hospital Management, Academics, and Finance, along with premium websites and real-world applications that help businesses operate and scale effectively. My approach goes beyond coding — I focus on delivering complete, reliable systems."]}),P.jsx("p",{children:"Alongside development, I bring strong problem-solving, adaptability, and the ability to guide clients and teams through complex challenges with clarity."}),P.jsxs("p",{children:["Currently, I’m exploring the intersection of software and ",P.jsx("strong",{className:"text-white font-medium",children:"AI"})," — building workflow automation systems, research pipelines, and AI-driven solutions that not only respond to business needs but help anticipate them."]})]})]}),P.jsx(St.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},className:"grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 lg:col-span-5",children:[{value:"3+ Years",label:"Experience",desc:"Odoo ERP / Full Stack Development",color:"text-cyan-500",border:"hover:border-cyan-500/50",delay:.1},{value:"Strengths",label:"Core Traits",desc:"Leadership, Problem Solving, Adaptability",color:"text-cyan-500",border:"hover:border-cyan-500/50",delay:.2},{value:"Tech Stack",label:"Development",desc:"Python, Odoo, PostgreSQL, XML, Django, React, API",color:"text-cyan-500",border:"hover:border-cyan-500/50",delay:.3},{value:"Current Focus",label:"AI Driven",desc:"Workflow Automation, RAG Pipelines, Digital Marketing, Content Creation, Branding",color:"text-cyan-500",border:"hover:border-cyan-500/50",delay:.4}].map((t,e)=>P.jsxs(St.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.4,delay:t.delay+.3},whileHover:{y:-5},className:`glass p-6 rounded-2xl flex flex-col items-center text-center justify-center transition-all duration-300 border border-gray-800 bg-white/5 hover:shadow-lg ${t.border}`,children:[P.jsx("div",{className:`${t.color} text-xl sm:text-2xl font-bold mb-2`,children:t.value}),P.jsx("div",{className:"text-white font-medium mb-1",children:t.label}),P.jsx("div",{className:"text-gray-400 text-xs sm:text-sm leading-relaxed",children:t.desc})]},e))})]})]})]})}const eI=[{title:"Full Stack Engineering",icon:P.jsx(cw,{className:"w-6 h-6 text-cyan-400"}),skills:["Python","Django","REST API Development","SQL","HTML5, CSS3, JavaScript","React","TypeScript","Three.js"]},{title:"Odoo Consulting",icon:P.jsx(qy,{className:"w-6 h-6 text-cyan-400"}),skills:["Odoo ERP","PostgreSQL","XML Views & QWeb Templates","API Integration with External Systems","ORM Methods","Version Migration","Workflow Design & Automation","Requirements Gathering & Business Process Mapping","User Training & Post-Deployment Support"]},{title:"AI & Modern Tech",icon:P.jsx(fw,{className:"w-6 h-6 text-cyan-400"}),skills:["Prompt Engineering","Workflow Automation","Agentic AI Systems","Generative Content & Video Creation","Large-Scale Data Processing","Data Extraction & Summarization","Digital Marketing"]},{title:"Architecture & Tools",icon:P.jsx(Ky,{className:"w-6 h-6 text-cyan-400"}),skills:["System Design","Database Optimization","Linux / CLI","Git","Postman","Agile / Scrum"]}];function tI(){const t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},e={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}};return P.jsx("section",{id:"skills",className:"py-24 px-6 relative w-full flex flex-col items-center",children:P.jsxs("div",{className:"max-w-7xl mx-auto w-full",children:[P.jsxs(St.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6},className:"text-center mb-16",children:[P.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight",children:["Technical ",P.jsx("span",{className:"text-cyan-500",children:"Arsenal"})]}),P.jsx("div",{className:"w-20 h-1 bg-cyan-500 mx-auto rounded-full"})]}),P.jsx(St.div,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:eI.map((n,i)=>P.jsxs(St.div,{variants:e,className:"glass p-8 rounded-3xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden",children:[P.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"}),P.jsx("div",{className:"mb-6 p-4 bg-gray-900/50 rounded-2xl inline-block border border-gray-800",children:n.icon}),P.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:n.title}),P.jsx("ul",{className:"space-y-3",children:n.skills.map((r,s)=>P.jsxs("li",{className:"text-gray-400 font-medium flex items-center gap-2 text-sm",children:[P.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500"}),r]},s))})]},i))})]})})}const nI=[{title:"Software Developer",company:"Ahalia International Group",period:"Nov 2023 – Present",desc:"Spearheaded Odoo ERP customization and Python backend development. Engineered comprehensive business solutions, automated processes, and enhanced PostgreSQL database architectures.",icon:P.jsx(qy,{className:"w-5 h-5"})},{title:"Full Stack Intern",company:"Luminar Technolab",period:"Previous",desc:"Developed Django-based web applications, integrated REST APIs, and managed full-stack delivery from frontend UI creation to backend database schema design.",icon:P.jsx(yw,{className:"w-5 h-5"})}];function iI(){return P.jsx("section",{id:"experience",className:"py-24 px-6 relative w-full bg-[#050505] border-y border-white/5",children:P.jsxs("div",{className:"max-w-4xl mx-auto w-full",children:[P.jsxs(St.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-16",children:[P.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight",children:["Career ",P.jsx("span",{className:"text-cyan-500",children:"Journey"})]}),P.jsx("div",{className:"w-20 h-1 bg-cyan-500 mx-auto rounded-full"})]}),P.jsxs("div",{className:"relative",children:[P.jsx("div",{className:"absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-gray-800 to-transparent md:-translate-x-1/2"}),P.jsx("div",{className:"space-y-12",children:nI.map((t,e)=>P.jsxs(St.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,delay:e*.2},className:`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${e%2===0?"md:flex-row-reverse":""}`,children:[P.jsx("div",{className:"absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-gray-900 border-2 border-cyan-500 text-cyan-500 flex items-center justify-center translate-x-[-1.1rem] md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]",children:t.icon}),P.jsx("div",{className:`ml-14 md:ml-0 md:w-1/2 ${e%2===0?"md:pl-12":"md:pr-12"}`,children:P.jsxs("div",{className:"glass p-8 rounded-2xl hover:border-cyan-500/30 transition-colors border border-gray-800 relative group",children:[P.jsx("div",{className:"absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"}),P.jsx("span",{className:"text-cyan-400 font-mono text-sm font-semibold tracking-wider mb-2 block",children:t.period}),P.jsx("h3",{className:"text-2xl font-bold text-white mb-1",children:t.title}),P.jsx("h4",{className:"text-lg text-gray-400 font-medium mb-4",children:t.company}),P.jsx("p",{className:"text-gray-400 leading-relaxed font-light",children:t.desc})]})})]},e))})]})]})})}const rI=[{title:"Hospital Administration System",description:"A comprehensive management system built on Odoo. Features include patient records, appointment scheduling, billing, and inventory tracking.",tech:["Odoo","Python","PostgreSQL","XML"],icon:P.jsx(Uu,{className:"w-8 h-8 text-cyan-400"})},{title:"Full-Stack E-Commerce Platform",description:"A scalable e-commerce application with a full administrative backend, secure checkout workflows, and modern UI.",tech:["Django","Python","React","PostgreSQL","Stripe API"],icon:P.jsx(Uu,{className:"w-8 h-8 text-cyan-400"})},{title:"Smart Attendance System",description:"An IoT-integrated attendance tracking application that automates logging via modern hardware endpoints and web dashboards.",tech:["Python","IoT","Web Tech","Django"],icon:P.jsx(Uu,{className:"w-8 h-8 text-cyan-400"})}];function sI(){return P.jsx("section",{id:"projects",className:"py-24 px-6 relative w-full",children:P.jsxs("div",{className:"max-w-7xl mx-auto w-full",children:[P.jsxs(St.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6},className:"text-center mb-16",children:[P.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight",children:["Featured ",P.jsx("span",{className:"text-cyan-500",children:"Work"})]}),P.jsx("div",{className:"w-20 h-1 bg-cyan-500 mx-auto rounded-full"})]}),P.jsx("div",{className:"grid lg:grid-cols-3 gap-8",children:rI.map((t,e)=>P.jsxs(St.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.5,delay:e*.1},className:"group glass p-8 rounded-3xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 flex flex-col h-full overflow-hidden relative",children:[P.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"}),P.jsx("div",{className:"mb-6",children:t.icon}),P.jsx("h3",{className:"text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-400 transition-colors",children:t.title}),P.jsx("p",{className:"text-gray-400 text-sm leading-relaxed mb-6 flex-grow",children:t.description}),P.jsx("div",{className:"flex flex-wrap gap-2 mt-auto mb-6 relative z-10",children:t.tech.map((n,i)=>P.jsx("span",{className:"px-3 py-1 bg-gray-900/80 border border-gray-700 rounded-full text-xs font-medium text-gray-300",children:n},i))}),P.jsx("div",{className:"flex items-center gap-4 pt-6 border-t border-gray-800 relative z-10",children:P.jsxs("a",{href:"#",className:"flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors font-semibold",children:[P.jsx("span",{children:"View Details"}),P.jsx(hw,{className:"w-4 h-4"})]})})]},e))})]})})}const oI=[{title:"Odoo ERP Solutions",desc:"From requirements gathering to go-live — I design, build, and deploy custom Odoo modules tailored to your business. Whether it's a fresh implementation, version migration, or complex workflow automation, I handle the full cycle including training and post-launch support.",icon:P.jsx(Ky,{className:"w-10 h-10 text-cyan-400"})},{title:"Software & Web Development",desc:"I build premium websites and complete software solutions that don't just look good — they generate real results. Businesses and personal brands get eye-catching, high-converting websites that attract clients and boost income, paired with powerful backend systems capable of running entire business operations from a single platform.",icon:P.jsx(vw,{className:"w-10 h-10 text-cyan-400"})},{title:"AI & Automation",desc:"I design intelligent systems that work for your business around the clock. From AI-powered workflow automation and multi-agent research pipelines to smart digital marketing engines and agentic decision systems — I turn complex operations into streamlined, self-running processes.",icon:P.jsx(iw,{className:"w-10 h-10 text-cyan-400"})}];function aI(){return P.jsx("section",{id:"services",className:"py-24 px-6 relative w-full bg-[#050505] border-y border-white/5",children:P.jsxs("div",{className:"max-w-7xl mx-auto w-full",children:[P.jsxs(St.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-16",children:[P.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight",children:["What I ",P.jsx("span",{className:"text-cyan-500",children:"Do"})]}),P.jsx("div",{className:"w-20 h-1 bg-cyan-500 mx-auto rounded-full"})]}),P.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:oI.map((t,e)=>P.jsxs(St.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:e*.15},className:"glass p-10 rounded-3xl border border-gray-800 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] transition-all duration-300 text-center flex flex-col items-center",children:[P.jsx("div",{className:"w-20 h-20 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center mb-6 shadow-inner",children:t.icon}),P.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:t.title}),P.jsx("p",{className:"text-gray-400 leading-relaxed text-sm",children:t.desc})]},e))})]})})}const va={_origin:"https://api.emailjs.com"},lI=(t,e="https://api.emailjs.com")=>{va._userID=t,va._origin=e},_M=(t,e,n)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class N0{constructor(e){this.status=e.status,this.text=e.responseText}}const yM=(t,e,n={})=>new Promise((i,r)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{const a=new N0(o);a.status===200||a.text==="OK"?i(a):r(a)}),s.addEventListener("error",({target:o})=>{r(new N0(o))}),s.open("POST",va._origin+t,!0),Object.keys(n).forEach(o=>{s.setRequestHeader(o,n[o])}),s.send(e)}),cI=(t,e,n,i)=>{const r=i||va._userID;return _M(r,t,e),yM("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})},uI=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},fI=(t,e,n,i)=>{const r=i||va._userID,s=uI(n);_M(r,t,e);const o=new FormData(s);return o.append("lib_version","3.2.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",r),yM("/api/v1.0/email/send-form",o)},dI={init:lI,send:cI,sendForm:fI},hI="service_hixtfg2",pI="template_97suyf7",mI="FlIK7NbIAjKtG6ZLM",gI="https://script.google.com/macros/s/AKfycbxI-RJmD1l6Nz1A2T06uf7EcUVCI47ZvD21NVUmxRCtEXeNtxsGAkVlmrrdLNtayrM_2A/exec",I0={name:"",email:"",phone:"",message:""};function vI(){const[t,e]=re.useState(I0),[n,i]=re.useState("idle"),[r,s]=re.useState(""),o=()=>{const f=new Date,d=f.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}),p=f.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",second:"2-digit"});return{date:d,time:p}},a=f=>dI.send(hI,pI,f,mI),l=f=>fetch(gI,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(f)}),c=async f=>{if(f.preventDefault(),!t.name.trim()||!t.message.trim()){s("Name and Message are required."),i("error");return}i("sending"),s("");const{date:d,time:p}=o(),g={name:t.name.trim(),email:t.email.trim()||"Not provided",phone:t.phone.trim()||"Not provided",message:t.message.trim(),date:d,time:p};try{await a(g);try{await l(g)}catch(y){console.warn("Google Sheets logging failed (non-critical):",(y==null?void 0:y.message)??y)}i("success"),e(I0),setTimeout(()=>i("idle"),5e3)}catch(y){const m=(y==null?void 0:y.text)||(y==null?void 0:y.message)||(typeof y=="object"?JSON.stringify(y):String(y));console.error("EmailJS send failed:",m),s(`Failed to send message (${m}). Please try again or email me directly at ajaykallampad72@gmail.com`),i("error")}},u=f=>e(d=>({...d,[f.target.name]:f.target.value}));return P.jsxs("section",{id:"contact",className:"py-24 px-6 relative w-full border-t border-gray-800 bg-[#020202]",children:[P.jsxs("div",{className:"max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16",children:[P.jsxs(St.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},className:"lg:w-1/3",children:[P.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight",children:["Let's ",P.jsx("span",{className:"text-cyan-500",children:"Connect"})]}),P.jsx("p",{className:"text-gray-400 mb-10 leading-relaxed font-light",children:"Whether you have a specific project in mind, need technical consulting, or just want to say hello, I'm always open to discussing new opportunities."}),P.jsxs("div",{className:"space-y-6",children:[P.jsxs("a",{href:"mailto:ajaykallampad72@gmail.com",className:"flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group",children:[P.jsx("div",{className:"w-12 h-12 rounded-full glass flex items-center justify-center border border-gray-800 group-hover:border-cyan-500/50",children:P.jsx(Rw,{className:"w-5 h-5"})}),P.jsx("span",{className:"font-medium",children:"ajaykallampad72@gmail.com"})]}),P.jsxs("div",{className:"flex items-center gap-4 text-gray-300",children:[P.jsx("div",{className:"w-12 h-12 rounded-full glass flex items-center justify-center border border-gray-800",children:P.jsx(Pw,{className:"w-5 h-5"})}),P.jsx("span",{className:"font-medium",children:"Kerala, India"})]}),P.jsxs("div",{className:"flex gap-4 pt-6",children:[P.jsx("a",{href:"https://github.com/Ajaykallampad",target:"_blank",rel:"noreferrer",className:"w-12 h-12 rounded-full glass flex items-center justify-center border border-gray-800 hover:border-cyan-500 hover:text-cyan-400 transition-all text-gray-400 hover:-translate-y-1",children:P.jsx(mw,{className:"w-5 h-5"})}),P.jsx("a",{href:"https://linkedin.com/in/ajayp72/",target:"_blank",rel:"noreferrer",className:"w-12 h-12 rounded-full glass flex items-center justify-center border border-gray-800 hover:border-cyan-500 hover:text-cyan-400 transition-all text-gray-400 hover:-translate-y-1",children:P.jsx(Tw,{className:"w-5 h-5"})}),P.jsx("a",{href:"https://www.instagram.com/ajay_mohan._/",target:"_blank",rel:"noreferrer",className:"w-12 h-12 rounded-full glass flex items-center justify-center border border-gray-800 hover:border-cyan-500 hover:text-cyan-400 transition-all text-gray-400 hover:-translate-y-1",children:P.jsx(Sw,{className:"w-5 h-5"})})]})]})]}),P.jsx(St.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},className:"lg:w-2/3",children:P.jsxs("form",{onSubmit:c,noValidate:!0,className:"glass p-8 md:p-10 rounded-3xl border border-gray-800 flex flex-col gap-6",children:[P.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[P.jsxs("div",{className:"flex flex-col gap-2",children:[P.jsx("label",{className:"text-sm font-medium text-gray-400 pl-1",children:"Your Name"}),P.jsx("input",{type:"text",name:"name",required:!0,value:t.name,onChange:u,disabled:n==="sending",className:"bg-black/50 border border-gray-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-600 disabled:opacity-50",placeholder:"Ajay P"})]}),P.jsxs("div",{className:"flex flex-col gap-2",children:[P.jsxs("label",{className:"text-sm font-medium text-gray-400 pl-1",children:["Your Email ",P.jsx("span",{className:"text-gray-600",children:"(optional)"})]}),P.jsx("input",{type:"email",name:"email",value:t.email,onChange:u,disabled:n==="sending",className:"bg-black/50 border border-gray-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-600 disabled:opacity-50",placeholder:"ajaykallampad72@gmail.com"})]})]}),P.jsxs("div",{className:"flex flex-col gap-2",children:[P.jsxs("label",{className:"text-sm font-medium text-gray-400 pl-1",children:["Phone Number ",P.jsx("span",{className:"text-gray-600",children:"(optional)"})]}),P.jsx("input",{type:"tel",name:"phone",value:t.phone,onChange:u,disabled:n==="sending",className:"bg-black/50 border border-gray-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-600 disabled:opacity-50",placeholder:"+91 XXXXX XXXXX"})]}),P.jsxs("div",{className:"flex flex-col gap-2",children:[P.jsx("label",{className:"text-sm font-medium text-gray-400 pl-1",children:"Message"}),P.jsx("textarea",{name:"message",required:!0,rows:5,value:t.message,onChange:u,disabled:n==="sending",className:"bg-black/50 border border-gray-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-600 resize-none disabled:opacity-50",placeholder:"How can I help you?"})]}),P.jsxs(bR,{mode:"wait",children:[n==="success"&&P.jsxs(St.div,{initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.3},className:"flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl px-5 py-4 text-sm font-medium",children:[P.jsx(Ym,{className:"w-5 h-5 shrink-0"}),"Message sent successfully! I'll get back to you soon."]},"success"),n==="error"&&P.jsxs(St.div,{initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.3},className:"flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-5 py-4 text-sm font-medium",children:[P.jsx(ow,{className:"w-5 h-5 shrink-0"}),r]},"error")]}),P.jsx("button",{type:"submit",disabled:n==="sending",className:"mt-2 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-cyan-500 text-black font-bold py-4 px-8 rounded-xl transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2",children:n==="sending"?P.jsxs(P.Fragment,{children:[P.jsx(Aw,{className:"w-5 h-5 animate-spin"})," Sending..."]}):n==="success"?P.jsxs(P.Fragment,{children:[P.jsx(Ym,{className:"w-5 h-5"})," Message Sent!"]}):P.jsxs(P.Fragment,{children:["Send Message ",P.jsx(Uw,{className:"w-5 h-5 ml-1"})]})})]})})]}),P.jsxs("div",{className:"text-center text-gray-600 text-sm mt-32 relative z-10 font-mono",children:["© ",new Date().getFullYear()," Ajay P"]})]})}function _I(){return P.jsxs("div",{className:"relative min-h-screen bg-background text-foreground selection:bg-cyan-500/30",children:[P.jsx(kb,{}),P.jsx(Ob,{}),P.jsxs("main",{children:[P.jsx(QN,{height:600}),P.jsx(JN,{}),P.jsx(tI,{}),P.jsx(iI,{}),P.jsx(sI,{}),P.jsx(aI,{}),P.jsx(vI,{})]})]})}Yy(document.getElementById("root")).render(P.jsx(re.StrictMode,{children:P.jsx(_I,{})}));
