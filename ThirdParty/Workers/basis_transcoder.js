var BASIS=function(){var e="undefined"!==typeof document&&document.currentScript?document.currentScript.src:void 0;return"undefined"!==typeof __filename&&(e=e||__filename),function(r){var t,n,o="undefined"!==typeof(r=r||{})?r:{};o.ready=new Promise((function(e,r){t=e,readyPromiseRejectza=r}));var i,a={};for(i in o)o.hasOwnProperty(i)&&(a[i]=o[i]);var u=[],s=!1,c=!1,f=!1,l=!1;s="object"===typeof window,c="function"===typeof importScripts,f="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node,l=!s&&!f&&!c;var p,d,h,v,y,m="";function g(e){return o.locateFile?o.locateFile(e,m):m+e}f?(m=c?require("path").dirname(m)+"/":__dirname+"/",p=function(e,r){return v||(v=require("fs")),y||(y=require("path")),e=y.normalize(e),v.readFileSync(e,r?null:"utf8")},h=function(e){var r=p(e,!0);return r.buffer||(r=new Uint8Array(r)),A(r.buffer),r},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),u=process.argv.slice(2),process.on("uncaughtException",(function(e){if(!(e instanceof Qt))throw e})),process.on("unhandledRejection",de),function(e){process.exit(e)},o.inspect=function(){return"[Emscripten Module object]"}):l?("undefined"!=typeof read&&(p=function(e){return read(e)}),h=function(e){var r;return"function"===typeof readbuffer?new Uint8Array(readbuffer(e)):(A("object"===typeof(r=read(e,"binary"))),r)},"undefined"!=typeof scriptArgs?u=scriptArgs:"undefined"!=typeof arguments&&(u=arguments),"function"===typeof quit&&function(e){quit(e)},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print)):(s||c)&&(c?m=self.location.href:"undefined"!==typeof document&&document.currentScript&&(m=document.currentScript.src),e&&(m=e),m=0!==m.indexOf("blob:")?m.substr(0,m.lastIndexOf("/")+1):"",p=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),r.responseText},c&&(h=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}),d=function(e,r,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=function(){200==n.status||0==n.status&&n.response?r(n.response):t()},n.onerror=t,n.send(null)});var w=o.print||console.log.bind(console),T=o.printErr||console.warn.bind(console);for(i in a)a.hasOwnProperty(i)&&(o[i]=a[i]);a=null,o.arguments&&(u=o.arguments),o.thisProgram&&o.thisProgram,o.quit&&o.quit;var b,C=function(e){e};o.wasmBinary&&(b=o.wasmBinary);var $;o.noExitRuntime;"object"!==typeof WebAssembly&&de("no native wasm support detected");var P=!1;function A(e,r){e||de("Assertion failed: "+r)}var _="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;function S(e,r,t){for(var n=r+t,o=r;e[o]&&!(o>=n);)++o;if(o-r>16&&e.subarray&&_)return _.decode(e.subarray(r,o));for(var i="";r<o;){var a=e[r++];if(128&a){var u=63&e[r++];if(192!=(224&a)){var s=63&e[r++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&e[r++])<65536)i+=String.fromCharCode(a);else{var c=a-65536;i+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else i+=String.fromCharCode((31&a)<<6|u)}else i+=String.fromCharCode(a)}return i}function W(e,r){return e?S(R,e,r):""}function E(e,r,t,n){if(!(n>0))return 0;for(var o=t,i=t+n-1,a=0;a<e.length;++a){var u=e.charCodeAt(a);if(u>=55296&&u<=57343)u=65536+((1023&u)<<10)|1023&e.charCodeAt(++a);if(u<=127){if(t>=i)break;r[t++]=u}else if(u<=2047){if(t+1>=i)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=i)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=i)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}return r[t]=0,t-o}function F(e,r,t){return E(e,R,r,t)}function k(e){for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&(n=65536+((1023&n)<<10)|1023&e.charCodeAt(++t)),n<=127?++r:r+=n<=2047?2:n<=65535?3:4}return r}var O,j,R,x,I,D,U,B,M,V="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function q(e,r){for(var t=e,n=t>>1,o=n+r/2;!(n>=o)&&I[n];)++n;if((t=n<<1)-e>32&&V)return V.decode(R.subarray(e,t));for(var i="",a=0;!(a>=r/2);++a){var u=x[e+2*a>>1];if(0==u)break;i+=String.fromCharCode(u)}return i}function H(e,r,t){if(void 0===t&&(t=2147483647),t<2)return 0;for(var n=r,o=(t-=2)<2*e.length?t/2:e.length,i=0;i<o;++i){var a=e.charCodeAt(i);x[r>>1]=a,r+=2}return x[r>>1]=0,r-n}function z(e){return 2*e.length}function N(e,r){for(var t=0,n="";!(t>=r/4);){var o=D[e+4*t>>2];if(0==o)break;if(++t,o>=65536){var i=o-65536;n+=String.fromCharCode(55296|i>>10,56320|1023&i)}else n+=String.fromCharCode(o)}return n}function G(e,r,t){if(void 0===t&&(t=2147483647),t<4)return 0;for(var n=r,o=n+t-4,i=0;i<e.length;++i){var a=e.charCodeAt(i);if(a>=55296&&a<=57343)a=65536+((1023&a)<<10)|1023&e.charCodeAt(++i);if(D[r>>2]=a,(r+=4)+4>o)break}return D[r>>2]=0,r-n}function L(e){for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&++t,r+=4}return r}function X(e,r){return e%r>0&&(e+=r-e%r),e}function J(e){O=e,o.HEAP8=j=new Int8Array(e),o.HEAP16=x=new Int16Array(e),o.HEAP32=D=new Int32Array(e),o.HEAPU8=R=new Uint8Array(e),o.HEAPU16=I=new Uint16Array(e),o.HEAPU32=U=new Uint32Array(e),o.HEAPF32=B=new Float32Array(e),o.HEAPF64=M=new Float64Array(e)}o.INITIAL_MEMORY;var K,Q=[],Y=[],Z=[],ee=[];function re(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)ie(o.preRun.shift());$e(Q)}function te(){!0,$e(Y)}function ne(){$e(Z)}function oe(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)ue(o.postRun.shift());$e(ee)}function ie(e){Q.unshift(e)}function ae(e){Y.unshift(e)}function ue(e){ee.unshift(e)}var se=0,ce=null,fe=null;function le(e){se++,o.monitorRunDependencies&&o.monitorRunDependencies(se)}function pe(e){if(se--,o.monitorRunDependencies&&o.monitorRunDependencies(se),0==se&&(null!==ce&&(clearInterval(ce),ce=null),fe)){var r=fe;fe=null,r()}}function de(e){o.onAbort&&o.onAbort(e),T(e+=""),P=!0,1,e="abort("+e+"). Build with -s ASSERTIONS=1 for more info.";var r=new WebAssembly.RuntimeError(e);throw n(r),r}function he(e,r){return String.prototype.startsWith?e.startsWith(r):0===e.indexOf(r)}o.preloadedImages={},o.preloadedAudios={};var ve="data:application/octet-stream;base64,";function ye(e){return he(e,ve)}var me="file://";function ge(e){return he(e,me)}var we="basis_transcoder.wasm";function Te(e){try{if(e==we&&b)return new Uint8Array(b);if(h)return h(e);throw"both async and sync fetching of the wasm failed"}catch(T){de(T)}}function be(){if(!b&&(s||c)){if("function"===typeof fetch&&!ge(we))return fetch(we,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+we+"'";return e.arrayBuffer()})).catch((function(){return Te(we)}));if(d)return new Promise((function(e,r){d(we,(function(r){e(new Uint8Array(r))}),r)}))}return Promise.resolve().then((function(){return Te(we)}))}function Ce(){var e={a:Lt};function r(e,r){var t=e.exports;o.asm=t,J(($=o.asm.K).buffer),K=o.asm.O,ae(o.asm.L),pe()}function t(e){r(e.instance)}function i(r){return be().then((function(r){return WebAssembly.instantiate(r,e)})).then(r,(function(e){T("failed to asynchronously prepare wasm: "+e),de(e)}))}if(le(),o.instantiateWasm)try{return o.instantiateWasm(e,r)}catch(a){return T("Module.instantiateWasm callback failed with error: "+a),!1}return(b||"function"!==typeof WebAssembly.instantiateStreaming||ye(we)||ge(we)||"function"!==typeof fetch?i(t):fetch(we,{credentials:"same-origin"}).then((function(r){return WebAssembly.instantiateStreaming(r,e).then(t,(function(e){return T("wasm streaming compile failed: "+e),T("falling back to ArrayBuffer instantiation"),i(t)}))}))).catch(n),{}}function $e(e){for(;e.length>0;){var r=e.shift();if("function"!=typeof r){var t=r.func;"number"===typeof t?void 0===r.arg?K.get(t)():K.get(t)(r.arg):t(void 0===r.arg?null:r.arg)}else r(o)}}ye(we)||(we=g(we));var Pe={};function Ae(e){for(;e.length;){var r=e.pop();e.pop()(r)}}function _e(e){return this.fromWireType(U[e>>2])}var Se={},We={},Ee={},Fe=48,ke=57;function Oe(e){if(void 0===e)return"_unknown";var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=Fe&&r<=ke?"_"+e:e}function je(e,r){return e=Oe(e),new Function("body","return function "+e+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function Re(e,r){var t=je(r,(function(e){this.name=r,this.message=e;var t=new Error(e).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},t}var xe=void 0;function Ie(e){throw new xe(e)}function De(e,r,t){function n(r){var n=t(r);n.length!==e.length&&Ie("Mismatched type converter count");for(var o=0;o<e.length;++o)Ne(e[o],n[o])}e.forEach((function(e){Ee[e]=r}));var o=new Array(r.length),i=[],a=0;r.forEach((function(e,r){We.hasOwnProperty(e)?o[r]=We[e]:(i.push(e),Se.hasOwnProperty(e)||(Se[e]=[]),Se[e].push((function(){o[r]=We[e],++a===i.length&&n(o)})))})),0===i.length&&n(o)}function Ue(e){var r=Pe[e];delete Pe[e];var t=r.rawConstructor,n=r.rawDestructor,o=r.fields;De([e],o.map((function(e){return e.getterReturnType})).concat(o.map((function(e){return e.setterArgumentType}))),(function(e){var i={};return o.forEach((function(r,t){var n=r.fieldName,a=e[t],u=r.getter,s=r.getterContext,c=e[t+o.length],f=r.setter,l=r.setterContext;i[n]={read:function(e){return a.fromWireType(u(s,e))},write:function(e,r){var t=[];f(l,e,c.toWireType(t,r)),Ae(t)}}})),[{name:r.name,fromWireType:function(e){var r={};for(var t in i)r[t]=i[t].read(e);return n(e),r},toWireType:function(e,r){for(var o in i)if(!(o in r))throw new TypeError('Missing field:  "'+o+'"');var a=t();for(o in i)i[o].write(a,r[o]);return null!==e&&e.push(n,a),a},argPackAdvance:8,readValueFromPointer:_e,destructorFunction:n}]}))}function Be(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}function Me(){for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);Ve=e}var Ve=void 0;function qe(e){for(var r="",t=e;R[t];)r+=Ve[R[t++]];return r}var He=void 0;function ze(e){throw new He(e)}function Ne(e,r,t){if(t=t||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=r.name;if(e||ze('type "'+n+'" must have a positive integer typeid pointer'),We.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;ze("Cannot register type '"+n+"' twice")}if(We[e]=r,delete Ee[e],Se.hasOwnProperty(e)){var o=Se[e];delete Se[e],o.forEach((function(e){e()}))}}function Ge(e,r,t,n,o){var i=Be(t);Ne(e,{name:r=qe(r),fromWireType:function(e){return!!e},toWireType:function(e,r){return r?n:o},argPackAdvance:8,readValueFromPointer:function(e){var n;if(1===t)n=j;else if(2===t)n=x;else{if(4!==t)throw new TypeError("Unknown boolean type size: "+r);n=D}return this.fromWireType(n[e>>i])},destructorFunction:null})}function Le(e){if(!(this instanceof cr))return!1;if(!(e instanceof cr))return!1;for(var r=this.$$.ptrType.registeredClass,t=this.$$.ptr,n=e.$$.ptrType.registeredClass,o=e.$$.ptr;r.baseClass;)t=r.upcast(t),r=r.baseClass;for(;n.baseClass;)o=n.upcast(o),n=n.baseClass;return r===n&&t===o}function Xe(e){return{count:e.count,deleteScheduled:e.deleteScheduled,preservePointerOnDelete:e.preservePointerOnDelete,ptr:e.ptr,ptrType:e.ptrType,smartPtr:e.smartPtr,smartPtrType:e.smartPtrType}}function Je(e){ze(e.$$.ptrType.registeredClass.name+" instance already deleted")}var Ke=!1;function Qe(e){}function Ye(e){e.smartPtr?e.smartPtrType.rawDestructor(e.smartPtr):e.ptrType.registeredClass.rawDestructor(e.ptr)}function Ze(e){e.count.value-=1,0===e.count.value&&Ye(e)}function er(e){return"undefined"===typeof FinalizationGroup?(er=function(e){return e},e):(Ke=new FinalizationGroup((function(e){for(var r=e.next();!r.done;r=e.next()){var t=r.value;t.ptr?Ze(t):console.warn("object already deleted: "+t.ptr)}})),er=function(e){return Ke.register(e,e.$$,e.$$),e},Qe=function(e){Ke.unregister(e.$$)},er(e))}function rr(){if(this.$$.ptr||Je(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e=er(Object.create(Object.getPrototypeOf(this),{$$:{value:Xe(this.$$)}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e}function tr(){this.$$.ptr||Je(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ze("Object already scheduled for deletion"),Qe(this),Ze(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function nr(){return!this.$$.ptr}var or=void 0,ir=[];function ar(){for(;ir.length;){var e=ir.pop();e.$$.deleteScheduled=!1,e.delete()}}function ur(){return this.$$.ptr||Je(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ze("Object already scheduled for deletion"),ir.push(this),1===ir.length&&or&&or(ar),this.$$.deleteScheduled=!0,this}function sr(){cr.prototype.isAliasOf=Le,cr.prototype.clone=rr,cr.prototype.delete=tr,cr.prototype.isDeleted=nr,cr.prototype.deleteLater=ur}function cr(){}var fr={};function lr(e,r,t){if(void 0===e[r].overloadTable){var n=e[r];e[r]=function(){return e[r].overloadTable.hasOwnProperty(arguments.length)||ze("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[r].overloadTable+")!"),e[r].overloadTable[arguments.length].apply(this,arguments)},e[r].overloadTable=[],e[r].overloadTable[n.argCount]=n}}function pr(e,r,t){o.hasOwnProperty(e)?((void 0===t||void 0!==o[e].overloadTable&&void 0!==o[e].overloadTable[t])&&ze("Cannot register public name '"+e+"' twice"),lr(o,e,e),o.hasOwnProperty(t)&&ze("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),o[e].overloadTable[t]=r):(o[e]=r,void 0!==t&&(o[e].numArguments=t))}function dr(e,r,t,n,o,i,a,u){this.name=e,this.constructor=r,this.instancePrototype=t,this.rawDestructor=n,this.baseClass=o,this.getActualType=i,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function hr(e,r,t){for(;r!==t;)r.upcast||ze("Expected null or instance of "+t.name+", got an instance of "+r.name),e=r.upcast(e),r=r.baseClass;return e}function vr(e,r){if(null===r)return this.isReference&&ze("null is not a valid "+this.name),0;r.$$||ze('Cannot pass "'+at(r)+'" as a '+this.name),r.$$.ptr||ze("Cannot pass deleted object as a pointer of type "+this.name);var t=r.$$.ptrType.registeredClass;return hr(r.$$.ptr,t,this.registeredClass)}function yr(e,r){var t;if(null===r)return this.isReference&&ze("null is not a valid "+this.name),this.isSmartPointer?(t=this.rawConstructor(),null!==e&&e.push(this.rawDestructor,t),t):0;r.$$||ze('Cannot pass "'+at(r)+'" as a '+this.name),r.$$.ptr||ze("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&r.$$.ptrType.isConst&&ze("Cannot convert argument of type "+(r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name)+" to parameter type "+this.name);var n=r.$$.ptrType.registeredClass;if(t=hr(r.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(void 0===r.$$.smartPtr&&ze("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:r.$$.smartPtrType===this?t=r.$$.smartPtr:ze("Cannot convert argument of type "+(r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:t=r.$$.smartPtr;break;case 2:if(r.$$.smartPtrType===this)t=r.$$.smartPtr;else{var o=r.clone();t=this.rawShare(t,et((function(){o.delete()}))),null!==e&&e.push(this.rawDestructor,t)}break;default:ze("Unsupporting sharing policy")}return t}function mr(e,r){if(null===r)return this.isReference&&ze("null is not a valid "+this.name),0;r.$$||ze('Cannot pass "'+at(r)+'" as a '+this.name),r.$$.ptr||ze("Cannot pass deleted object as a pointer of type "+this.name),r.$$.ptrType.isConst&&ze("Cannot convert argument of type "+r.$$.ptrType.name+" to parameter type "+this.name);var t=r.$$.ptrType.registeredClass;return hr(r.$$.ptr,t,this.registeredClass)}function gr(e){return this.rawGetPointee&&(e=this.rawGetPointee(e)),e}function wr(e){this.rawDestructor&&this.rawDestructor(e)}function Tr(e){null!==e&&e.delete()}function br(e,r,t){if(r===t)return e;if(void 0===t.baseClass)return null;var n=br(e,r,t.baseClass);return null===n?null:t.downcast(n)}function Cr(){return Object.keys(_r).length}function $r(){var e=[];for(var r in _r)_r.hasOwnProperty(r)&&e.push(_r[r]);return e}function Pr(e){or=e,ir.length&&or&&or(ar)}function Ar(){o.getInheritedInstanceCount=Cr,o.getLiveInheritedInstances=$r,o.flushPendingDeletes=ar,o.setDelayFunction=Pr}var _r={};function Sr(e,r){for(void 0===r&&ze("ptr should not be undefined");e.baseClass;)r=e.upcast(r),e=e.baseClass;return r}function Wr(e,r){return r=Sr(e,r),_r[r]}function Er(e,r){return r.ptrType&&r.ptr||Ie("makeClassHandle requires ptr and ptrType"),!!r.smartPtrType!==!!r.smartPtr&&Ie("Both smartPtrType and smartPtr must be specified"),r.count={value:1},er(Object.create(e,{$$:{value:r}}))}function Fr(e){var r=this.getPointee(e);if(!r)return this.destructor(e),null;var t=Wr(this.registeredClass,r);if(void 0!==t){if(0===t.$$.count.value)return t.$$.ptr=r,t.$$.smartPtr=e,t.clone();var n=t.clone();return this.destructor(e),n}function o(){return this.isSmartPointer?Er(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:r,smartPtrType:this,smartPtr:e}):Er(this.registeredClass.instancePrototype,{ptrType:this,ptr:e})}var i,a=this.registeredClass.getActualType(r),u=fr[a];if(!u)return o.call(this);i=this.isConst?u.constPointerType:u.pointerType;var s=br(r,this.registeredClass,i.registeredClass);return null===s?o.call(this):this.isSmartPointer?Er(i.registeredClass.instancePrototype,{ptrType:i,ptr:s,smartPtrType:this,smartPtr:e}):Er(i.registeredClass.instancePrototype,{ptrType:i,ptr:s})}function kr(){Or.prototype.getPointee=gr,Or.prototype.destructor=wr,Or.prototype.argPackAdvance=8,Or.prototype.readValueFromPointer=_e,Or.prototype.deleteObject=Tr,Or.prototype.fromWireType=Fr}function Or(e,r,t,n,o,i,a,u,s,c,f){this.name=e,this.registeredClass=r,this.isReference=t,this.isConst=n,this.isSmartPointer=o,this.pointeeType=i,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=c,this.rawDestructor=f,o||void 0!==r.baseClass?this.toWireType=yr:n?(this.toWireType=vr,this.destructorFunction=null):(this.toWireType=mr,this.destructorFunction=null)}function jr(e,r,t){o.hasOwnProperty(e)||Ie("Replacing nonexistant public symbol"),void 0!==o[e].overloadTable&&void 0!==t?o[e].overloadTable[t]=r:(o[e]=r,o[e].argCount=t)}function Rr(e,r,t){var n=o["dynCall_"+e];return t&&t.length?n.apply(null,[r].concat(t)):n.call(null,r)}function xr(e,r,t){return-1!=e.indexOf("j")?Rr(e,r,t):K.get(r).apply(null,t)}function Ir(e,r){var t=[];return function(){t.length=arguments.length;for(var n=0;n<arguments.length;n++)t[n]=arguments[n];return xr(e,r,t)}}function Dr(e,r){var t=-1!=(e=qe(e)).indexOf("j")?Ir(e,r):K.get(r);return"function"!==typeof t&&ze("unknown function pointer with signature "+e+": "+r),t}var Ur=void 0;function Br(e){var r=Kt(e),t=qe(r);return Jt(r),t}function Mr(e,r){var t=[],n={};throw r.forEach((function e(r){n[r]||We[r]||(Ee[r]?Ee[r].forEach(e):(t.push(r),n[r]=!0))})),new Ur(e+": "+t.map(Br).join([", "]))}function Vr(e,r,t,n,o,i,a,u,s,c,f,l,p){f=qe(f),i=Dr(o,i),u&&(u=Dr(a,u)),c&&(c=Dr(s,c)),p=Dr(l,p);var d=Oe(f);pr(d,(function(){Mr("Cannot construct "+f+" due to unbound types",[n])})),De([e,r,t],n?[n]:[],(function(r){var t,o;r=r[0],o=n?(t=r.registeredClass).instancePrototype:cr.prototype;var a=je(d,(function(){if(Object.getPrototypeOf(this)!==s)throw new He("Use 'new' to construct "+f);if(void 0===l.constructor_body)throw new He(f+" has no accessible constructor");var e=l.constructor_body[arguments.length];if(void 0===e)throw new He("Tried to invoke ctor of "+f+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(l.constructor_body).toString()+") parameters instead!");return e.apply(this,arguments)})),s=Object.create(o,{constructor:{value:a}});a.prototype=s;var l=new dr(f,a,s,p,t,i,u,c),h=new Or(f,l,!0,!1,!1),v=new Or(f+"*",l,!1,!1,!1),y=new Or(f+" const*",l,!1,!0,!1);return fr[e]={pointerType:v,constPointerType:y},jr(d,a),[h,v,y]}))}function qr(e,r){for(var t=[],n=0;n<e;n++)t.push(D[(r>>2)+n]);return t}function Hr(e,r,t,n,o,i){A(r>0);var a=qr(r,t);o=Dr(n,o);var u=[i],s=[];De([],[e],(function(e){var t="constructor "+(e=e[0]).name;if(void 0===e.registeredClass.constructor_body&&(e.registeredClass.constructor_body=[]),void 0!==e.registeredClass.constructor_body[r-1])throw new He("Cannot register multiple constructors with identical number of parameters ("+(r-1)+") for class '"+e.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return e.registeredClass.constructor_body[r-1]=function(){Mr("Cannot construct "+e.name+" due to unbound types",a)},De([],a,(function(n){return e.registeredClass.constructor_body[r-1]=function(){arguments.length!==r-1&&ze(t+" called with "+arguments.length+" arguments, expected "+(r-1)),s.length=0,u.length=r;for(var e=1;e<r;++e)u[e]=n[e].toWireType(s,arguments[e-1]);var i=o.apply(null,u);return Ae(s),n[0].fromWireType(i)},[]})),[]}))}function zr(e,r){if(!(e instanceof Function))throw new TypeError("new_ called with constructor type "+typeof e+" which is not a function");var t=je(e.name||"unknownFunctionName",(function(){}));t.prototype=e.prototype;var n=new t,o=e.apply(n,r);return o instanceof Object?o:n}function Nr(e,r,t,n,o){var i=r.length;i<2&&ze("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==r[1]&&null!==t,u=!1,s=1;s<r.length;++s)if(null!==r[s]&&void 0===r[s].destructorFunction){u=!0;break}var c="void"!==r[0].name,f="",l="";for(s=0;s<i-2;++s)f+=(0!==s?", ":"")+"arg"+s,l+=(0!==s?", ":"")+"arg"+s+"Wired";var p="return function "+Oe(e)+"("+f+") {\nif (arguments.length !== "+(i-2)+") {\nthrowBindingError('function "+e+" called with ' + arguments.length + ' arguments, expected "+(i-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var d=u?"destructors":"null",h=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],v=[ze,n,o,Ae,r[0],r[1]];a&&(p+="var thisWired = classParam.toWireType("+d+", this);\n");for(s=0;s<i-2;++s)p+="var arg"+s+"Wired = argType"+s+".toWireType("+d+", arg"+s+"); // "+r[s+2].name+"\n",h.push("argType"+s),v.push(r[s+2]);if(a&&(l="thisWired"+(l.length>0?", ":"")+l),p+=(c?"var rv = ":"")+"invoker(fn"+(l.length>0?", ":"")+l+");\n",u)p+="runDestructors(destructors);\n";else for(s=a?1:2;s<r.length;++s){var y=1===s?"thisWired":"arg"+(s-2)+"Wired";null!==r[s].destructorFunction&&(p+=y+"_dtor("+y+"); // "+r[s].name+"\n",h.push(y+"_dtor"),v.push(r[s].destructorFunction))}return c&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",h.push(p),zr(Function,h).apply(null,v)}function Gr(e,r,t,n,o,i,a,u){var s=qr(t,n);r=qe(r),i=Dr(o,i),De([],[e],(function(e){var n=(e=e[0]).name+"."+r;function o(){Mr("Cannot call "+n+" due to unbound types",s)}u&&e.registeredClass.pureVirtualFunctions.push(r);var c=e.registeredClass.instancePrototype,f=c[r];return void 0===f||void 0===f.overloadTable&&f.className!==e.name&&f.argCount===t-2?(o.argCount=t-2,o.className=e.name,c[r]=o):(lr(c,r,n),c[r].overloadTable[t-2]=o),De([],s,(function(o){var u=Nr(n,o,e,i,a);return void 0===c[r].overloadTable?(u.argCount=t-2,c[r]=u):c[r].overloadTable[t-2]=u,[]})),[]}))}function Lr(e,r,t){e=qe(e),De([],[r],(function(r){return r=r[0],o[e]=r.fromWireType(t),[]}))}var Xr=[],Jr=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Kr(e){e>4&&0===--Jr[e].refcount&&(Jr[e]=void 0,Xr.push(e))}function Qr(){for(var e=0,r=5;r<Jr.length;++r)void 0!==Jr[r]&&++e;return e}function Yr(){for(var e=5;e<Jr.length;++e)if(void 0!==Jr[e])return Jr[e];return null}function Zr(){o.count_emval_handles=Qr,o.get_first_emval=Yr}function et(e){switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=Xr.length?Xr.pop():Jr.length;return Jr[r]={refcount:1,value:e},r}}function rt(e,r){Ne(e,{name:r=qe(r),fromWireType:function(e){var r=Jr[e].value;return Kr(e),r},toWireType:function(e,r){return et(r)},argPackAdvance:8,readValueFromPointer:_e,destructorFunction:null})}function tt(e,r,t){switch(r){case 0:return function(e){var r=t?j:R;return this.fromWireType(r[e])};case 1:return function(e){var r=t?x:I;return this.fromWireType(r[e>>1])};case 2:return function(e){var r=t?D:U;return this.fromWireType(r[e>>2])};default:throw new TypeError("Unknown integer type: "+e)}}function nt(e,r,t,n){var o=Be(t);function i(){}r=qe(r),i.values={},Ne(e,{name:r,constructor:i,fromWireType:function(e){return this.constructor.values[e]},toWireType:function(e,r){return r.value},argPackAdvance:8,readValueFromPointer:tt(r,o,n),destructorFunction:null}),pr(r,i)}function ot(e,r){var t=We[e];return void 0===t&&ze(r+" has unknown type "+Br(e)),t}function it(e,r,t){var n=ot(e,"enum");r=qe(r);var o=n.constructor,i=Object.create(n.constructor.prototype,{value:{value:t},constructor:{value:je(n.name+"_"+r,(function(){}))}});o.values[t]=i,o[r]=i}function at(e){if(null===e)return"null";var r=typeof e;return"object"===r||"array"===r||"function"===r?e.toString():""+e}function ut(e,r){switch(r){case 2:return function(e){return this.fromWireType(B[e>>2])};case 3:return function(e){return this.fromWireType(M[e>>3])};default:throw new TypeError("Unknown float type: "+e)}}function st(e,r,t){var n=Be(t);Ne(e,{name:r=qe(r),fromWireType:function(e){return e},toWireType:function(e,r){if("number"!==typeof r&&"boolean"!==typeof r)throw new TypeError('Cannot convert "'+at(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:ut(r,n),destructorFunction:null})}function ct(e,r,t,n,o,i){var a=qr(r,t);e=qe(e),o=Dr(n,o),pr(e,(function(){Mr("Cannot call "+e+" due to unbound types",a)}),r-1),De([],a,(function(t){var n=[t[0],null].concat(t.slice(1));return jr(e,Nr(e,n,null,o,i),r-1),[]}))}function ft(e,r,t){switch(r){case 0:return t?function(e){return j[e]}:function(e){return R[e]};case 1:return t?function(e){return x[e>>1]}:function(e){return I[e>>1]};case 2:return t?function(e){return D[e>>2]}:function(e){return U[e>>2]};default:throw new TypeError("Unknown integer type: "+e)}}function lt(e,r,t,n,o){r=qe(r),-1===o&&(o=4294967295);var i=Be(t),a=function(e){return e};if(0===n){var u=32-8*t;a=function(e){return e<<u>>>u}}var s=-1!=r.indexOf("unsigned");Ne(e,{name:r,fromWireType:a,toWireType:function(e,t){if("number"!==typeof t&&"boolean"!==typeof t)throw new TypeError('Cannot convert "'+at(t)+'" to '+this.name);if(t<n||t>o)throw new TypeError('Passing a number "'+at(t)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+n+", "+o+"]!");return s?t>>>0:0|t},argPackAdvance:8,readValueFromPointer:ft(r,i,0!==n),destructorFunction:null})}function pt(e,r,t){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function o(e){var r=U,t=r[e>>=2],o=r[e+1];return new n(O,o,t)}Ne(e,{name:t=qe(t),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})}function dt(e,r){var t="std::string"===(r=qe(r));Ne(e,{name:r,fromWireType:function(e){var r,n=U[e>>2];if(t)for(var o=e+4,i=0;i<=n;++i){var a=e+4+i;if(i==n||0==R[a]){var u=W(o,a-o);void 0===r?r=u:(r+=String.fromCharCode(0),r+=u),o=a+1}}else{var s=new Array(n);for(i=0;i<n;++i)s[i]=String.fromCharCode(R[e+4+i]);r=s.join("")}return Jt(e),r},toWireType:function(e,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var n="string"===typeof r;n||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||ze("Cannot pass non-string to std::string");var o=(t&&n?function(){return k(r)}:function(){return r.length})(),i=Xt(4+o+1);if(U[i>>2]=o,t&&n)F(r,i+4,o+1);else if(n)for(var a=0;a<o;++a){var u=r.charCodeAt(a);u>255&&(Jt(i),ze("String has UTF-16 code units that do not fit in 8 bits")),R[i+4+a]=u}else for(a=0;a<o;++a)R[i+4+a]=r[a];return null!==e&&e.push(Jt,i),i},argPackAdvance:8,readValueFromPointer:_e,destructorFunction:function(e){Jt(e)}})}function ht(e,r,t){var n,o,i,a,u;t=qe(t),2===r?(n=q,o=H,a=z,i=function(){return I},u=1):4===r&&(n=N,o=G,a=L,i=function(){return U},u=2),Ne(e,{name:t,fromWireType:function(e){for(var t,o=U[e>>2],a=i(),s=e+4,c=0;c<=o;++c){var f=e+4+c*r;if(c==o||0==a[f>>u]){var l=n(s,f-s);void 0===t?t=l:(t+=String.fromCharCode(0),t+=l),s=f+r}}return Jt(e),t},toWireType:function(e,n){"string"!==typeof n&&ze("Cannot pass non-string to C++ string type "+t);var i=a(n),s=Xt(4+i+r);return U[s>>2]=i>>u,o(n,s+4,i+r),null!==e&&e.push(Jt,s),s},argPackAdvance:8,readValueFromPointer:_e,destructorFunction:function(e){Jt(e)}})}function vt(e,r,t,n,o,i){Pe[e]={name:qe(r),rawConstructor:Dr(t,n),rawDestructor:Dr(o,i),fields:[]}}function yt(e,r,t,n,o,i,a,u,s,c){Pe[e].fields.push({fieldName:qe(r),getterReturnType:t,getter:Dr(n,o),getterContext:i,setterArgumentType:a,setter:Dr(u,s),setterContext:c})}function mt(e,r){Ne(e,{isVoid:!0,name:r=qe(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(e,r){}})}function gt(e){return e||ze("Cannot use deleted val. handle = "+e),Jr[e].value}function wt(e,r,t){e=gt(e),r=ot(r,"emval::as");var n=[],o=et(n);return D[t>>2]=o,r.toWireType(n,e)}var Tt={};function bt(e){var r=Tt[e];return void 0===r?qe(e):r}var Ct=[];function $t(e,r,t,n){(e=Ct[e])(r=gt(r),t=bt(t),null,n)}function Pt(){return"object"===typeof globalThis?globalThis:Function("return this")()}function At(e){return 0===e?et(Pt()):(e=bt(e),et(Pt()[e]))}function _t(e){var r=Ct.length;return Ct.push(e),r}function St(e,r){for(var t=new Array(e),n=0;n<e;++n)t[n]=ot(D[(r>>2)+n],"parameter "+n);return t}function Wt(e,r){for(var t=St(e,r),n=t[0],o=n.name+"_$"+t.slice(1).map((function(e){return e.name})).join("_")+"$",i=["retType"],a=[n],u="",s=0;s<e-1;++s)u+=(0!==s?", ":"")+"arg"+s,i.push("argType"+s),a.push(t[1+s]);var c="return function "+Oe("methodCaller_"+o)+"(handle, name, destructors, args) {\n",f=0;for(s=0;s<e-1;++s)c+="    var arg"+s+" = argType"+s+".readValueFromPointer(args"+(f?"+"+f:"")+");\n",f+=t[s+1].argPackAdvance;c+="    var rv = handle[name]("+u+");\n";for(s=0;s<e-1;++s)t[s+1].deleteObject&&(c+="    argType"+s+".deleteObject(arg"+s+");\n");return n.isVoid||(c+="    return retType.toWireType(destructors, rv);\n"),c+="};\n",i.push(c),_t(zr(Function,i).apply(null,a))}function Et(e){return e=bt(e),et(o[e])}function Ft(e,r){return et((e=gt(e))[r=gt(r)])}function kt(e){e>4&&(Jr[e].refcount+=1)}function Ot(e){for(var r="",t=0;t<e;++t)r+=(0!==t?", ":"")+"arg"+t;var n="return function emval_allocator_"+e+"(constructor, argTypes, args) {\n";for(t=0;t<e;++t)n+="var argType"+t+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+t+'], "parameter '+t+'");\nvar arg'+t+" = argType"+t+".readValueFromPointer(args);\nargs += argType"+t+"['argPackAdvance'];\n";return n+="var obj = new constructor("+r+");\nreturn __emval_register(obj);\n}\n",new Function("requireRegisteredType","Module","__emval_register",n)(ot,o,et)}var jt={};function Rt(e,r,t,n){e=gt(e);var o=jt[r];return o||(o=Ot(r),jt[r]=o),o(e,t,n)}function xt(e){return et(bt(e))}function It(e){Ae(Jr[e].value),Kr(e)}function Dt(){de()}function Ut(e,r,t){R.copyWithin(e,r,r+t)}function Bt(e){try{return $.grow(e-O.byteLength+65535>>>16),J($.buffer),1}catch(r){}}function Mt(e){var r=R.length,t=2147483648;if((e>>>=0)>t)return!1;for(var n=1;n<=4;n*=2){var o=r*(1+.2/n);if(o=Math.min(o,e+100663296),Bt(Math.min(t,X(Math.max(e,o),65536))))return!0}return!1}var Vt={mappings:{},buffers:[null,[],[]],printChar:function(e,r){var t=Vt.buffers[e];0===r||10===r?((1===e?w:T)(S(t,0)),t.length=0):t.push(r)},varargs:void 0,get:function(){return Vt.varargs+=4,D[Vt.varargs-4>>2]},getStr:function(e){return W(e)},get64:function(e,r){return e}};function qt(e){return 0}function Ht(e,r,t,n,o){}function zt(e,r,t,n){for(var o=0,i=0;i<t;i++){for(var a=D[r+8*i>>2],u=D[r+(8*i+4)>>2],s=0;s<u;s++)Vt.printChar(e,R[a+s]);o+=u}return D[n>>2]=o,0}function Nt(e){C(0|e)}xe=o.InternalError=Re(Error,"InternalError"),Me(),He=o.BindingError=Re(Error,"BindingError"),sr(),kr(),Ar(),Ur=o.UnboundTypeError=Re(Error,"UnboundTypeError"),Zr();var Gt,Lt={t:Ue,I:Ge,x:Vr,w:Hr,d:Gr,k:Lr,H:rt,n:nt,a:it,A:st,i:ct,j:lt,h:pt,B:dt,v:ht,u:vt,c:yt,J:mt,m:wt,s:$t,b:Kr,y:At,p:Wt,r:Et,e:Ft,g:kt,q:Rt,f:xt,l:It,o:Dt,E:Ut,F:Mt,G:qt,C:Ht,z:zt,D:Nt},Xt=(Ce(),o.___wasm_call_ctors=function(){return(o.___wasm_call_ctors=o.asm.L).apply(null,arguments)},o._malloc=function(){return(Xt=o._malloc=o.asm.M).apply(null,arguments)}),Jt=o._free=function(){return(Jt=o._free=o.asm.N).apply(null,arguments)},Kt=o.___getTypeName=function(){return(Kt=o.___getTypeName=o.asm.P).apply(null,arguments)};o.___embind_register_native_and_builtin_types=function(){return(o.___embind_register_native_and_builtin_types=o.asm.Q).apply(null,arguments)},o.dynCall_jiji=function(){return(o.dynCall_jiji=o.asm.R).apply(null,arguments)};function Qt(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function Yt(e){function r(){Gt||(Gt=!0,o.calledRun=!0,P||(te(),ne(),t(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),oe()))}e=e||u,se>0||(re(),se>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),r()}),1)):r()))}if(fe=function e(){Gt||Yt(),Gt||(fe=e)},o.run=Yt,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();return Yt(),r.ready}}();"object"===typeof exports&&"object"===typeof module?module.exports=BASIS:"function"===typeof define&&define.amd?define([],(function(){return BASIS})):"object"===typeof exports&&(exports.BASIS=BASIS);