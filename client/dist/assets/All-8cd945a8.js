import{h as k,c as j,d as z,e as V,f as K,i as G,g as H,P as Q}from"./index-20ef1387.js";import{w as W}from"./withSDKOperations-5fb6bbf0.js";import{l as Y,d as X}from"./LoggerService-5538c8b6.js";import{c as P}from"./_commonjs-dynamic-modules-302442b1.js";import"./InputText.component-6208ec5e.js";var B={exports:{}};(function(U,M){(function(h){U.exports=h()})(function(){return function(){function h(m,E,i){function u(f,g){if(!E[f]){if(!m[f]){var l=typeof P=="function"&&P;if(!g&&l)return l(f,!0);if(a)return a(f,!0);var y=new Error("Cannot find module '"+f+"'");throw y.code="MODULE_NOT_FOUND",y}var v=E[f]={exports:{}};m[f][0].call(v.exports,function(d){var I=m[f][1][d];return u(I||d)},v,v.exports,h,m,E,i)}return E[f].exports}for(var a=typeof P=="function"&&P,c=0;c<i.length;c++)u(i[c]);return u}return h}()({1:[function(h,m,E){var i=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(E,"__esModule",{value:!0}),E.PromiseGlobal=void 0;var u=i(h("promise-polyfill")),a=typeof Promise<"u"?Promise:u.default;E.PromiseGlobal=a},{"promise-polyfill":8}],2:[function(h,m,E){var i=h("./lib/promise"),u={};function a(c){var f,g=JSON.stringify(c);if(!c.forceScriptReload&&(f=u[g],f))return f;var l=document.createElement("script"),y=c.dataAttributes||{},v=c.container||document.head;return l.src=c.src,l.id=c.id||"",l.async=!0,c.crossorigin&&l.setAttribute("crossorigin",""+c.crossorigin),Object.keys(y).forEach(function(d){l.setAttribute("data-"+d,""+y[d])}),f=new i.PromiseGlobal(function(d,I){l.addEventListener("load",function(){d(l)}),l.addEventListener("error",function(){I(new Error(c.src+" failed to load."))}),l.addEventListener("abort",function(){I(new Error(c.src+" has aborted."))}),v.appendChild(l)}),u[g]=f,f}a.clearCache=function(){u={}},m.exports=a},{"./lib/promise":1}],3:[function(h,m,E){m.exports=h("./dist/load-script")},{"./dist/load-script":2}],4:[function(h,m,E){Object.defineProperty(E,"__esModule",{value:!0});function i(u){return function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];setTimeout(function(){try{u.apply(void 0,a)}catch(f){console.log("Error in callback function"),console.log(f)}},1)}}E.deferred=i},{}],5:[function(h,m,E){Object.defineProperty(E,"__esModule",{value:!0});function i(u){var a=!1;return function(){for(var c=[],f=0;f<arguments.length;f++)c[f]=arguments[f];a||(a=!0,u.apply(void 0,c))}}E.once=i},{}],6:[function(h,m,E){Object.defineProperty(E,"__esModule",{value:!0});function i(u,a){if(!a)return u;u.then(function(c){return a(null,c)}).catch(function(c){return a(c)})}E.promiseOrCallback=i},{}],7:[function(h,m,E){var i=h("./lib/deferred"),u=h("./lib/once"),a=h("./lib/promise-or-callback");function c(f){return function(){for(var g=[],l=0;l<arguments.length;l++)g[l]=arguments[l];var y,v=g[g.length-1];return typeof v=="function"&&(y=g.pop(),y=u.once(i.deferred(y))),a.promiseOrCallback(f.apply(this,g),y)}}c.wrapPrototype=function(f,g){g===void 0&&(g={});var l=g.ignoreMethods||[],y=g.transformPrivateMethods===!0,v=Object.getOwnPropertyNames(f.prototype).filter(function(d){var I,O=d!=="constructor"&&typeof f.prototype[d]=="function",C=l.indexOf(d)===-1;return y?I=!0:I=d.charAt(0)!=="_",O&&I&&C});return v.forEach(function(d){var I=f.prototype[d];f.prototype[d]=c(I)}),f},m.exports=c},{"./lib/deferred":4,"./lib/once":5,"./lib/promise-or-callback":6}],8:[function(h,m,E){function i(t){var e=this.constructor;return this.then(function(r){return e.resolve(t()).then(function(){return r})},function(r){return e.resolve(t()).then(function(){return e.reject(r)})})}function u(t){var e=this;return new e(function(r,n){if(!(t&&typeof t.length<"u"))return n(new TypeError(typeof t+" "+t+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var o=Array.prototype.slice.call(t);if(o.length===0)return r([]);var s=o.length;function p(w,T){if(T&&(typeof T=="object"||typeof T=="function")){var R=T.then;if(typeof R=="function"){R.call(T,function(A){p(w,A)},function(A){o[w]={status:"rejected",reason:A},--s===0&&r(o)});return}}o[w]={status:"fulfilled",value:T},--s===0&&r(o)}for(var _=0;_<o.length;_++)p(_,o[_])})}var a=setTimeout;function c(t){return!!(t&&typeof t.length<"u")}function f(){}function g(t,e){return function(){t.apply(e,arguments)}}function l(t){if(!(this instanceof l))throw new TypeError("Promises must be constructed via new");if(typeof t!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],C(t,this)}function y(t,e){for(;t._state===3;)t=t._value;if(t._state===0){t._deferreds.push(e);return}t._handled=!0,l._immediateFn(function(){var r=t._state===1?e.onFulfilled:e.onRejected;if(r===null){(t._state===1?v:d)(e.promise,t._value);return}var n;try{n=r(t._value)}catch(o){d(e.promise,o);return}v(e.promise,n)})}function v(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&(typeof e=="object"||typeof e=="function")){var r=e.then;if(e instanceof l){t._state=3,t._value=e,I(t);return}else if(typeof r=="function"){C(g(r,e),t);return}}t._state=1,t._value=e,I(t)}catch(n){d(t,n)}}function d(t,e){t._state=2,t._value=e,I(t)}function I(t){t._state===2&&t._deferreds.length===0&&l._immediateFn(function(){t._handled||l._unhandledRejectionFn(t._value)});for(var e=0,r=t._deferreds.length;e<r;e++)y(t,t._deferreds[e]);t._deferreds=null}function O(t,e,r){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.promise=r}function C(t,e){var r=!1;try{t(function(n){r||(r=!0,v(e,n))},function(n){r||(r=!0,d(e,n))})}catch(n){if(r)return;r=!0,d(e,n)}}l.prototype.catch=function(t){return this.then(null,t)},l.prototype.then=function(t,e){var r=new this.constructor(f);return y(this,new O(t,e,r)),r},l.prototype.finally=i,l.all=function(t){return new l(function(e,r){if(!c(t))return r(new TypeError("Promise.all accepts an array"));var n=Array.prototype.slice.call(t);if(n.length===0)return e([]);var o=n.length;function s(_,w){try{if(w&&(typeof w=="object"||typeof w=="function")){var T=w.then;if(typeof T=="function"){T.call(w,function(R){s(_,R)},r);return}}n[_]=w,--o===0&&e(n)}catch(R){r(R)}}for(var p=0;p<n.length;p++)s(p,n[p])})},l.allSettled=u,l.resolve=function(t){return t&&typeof t=="object"&&t.constructor===l?t:new l(function(e){e(t)})},l.reject=function(t){return new l(function(e,r){r(t)})},l.race=function(t){return new l(function(e,r){if(!c(t))return r(new TypeError("Promise.race accepts an array"));for(var n=0,o=t.length;n<o;n++)l.resolve(t[n]).then(e,r)})},l._immediateFn=typeof setImmediate=="function"&&function(t){setImmediate(t)}||function(t){a(t,0)},l._unhandledRejectionFn=function(e){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},m.exports=l},{}],9:[function(h,m,E){var i=h("../lib/braintree-error");m.exports={DATA_COLLECTOR_KOUNT_NOT_ENABLED:{type:i.types.MERCHANT,code:"DATA_COLLECTOR_KOUNT_NOT_ENABLED",message:"Kount is not enabled for this merchant."},DATA_COLLECTOR_KOUNT_ERROR:{type:i.types.MERCHANT,code:"DATA_COLLECTOR_KOUNT_ERROR"},DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS:{type:i.types.MERCHANT,code:"DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS",message:"Data Collector must be created with Kount and/or PayPal."}}},{"../lib/braintree-error":16}],10:[function(h,m,E){var i=h("../lib/constants").FRAUDNET_FNCLS,u=h("../lib/constants").FRAUDNET_SOURCE,a=h("../lib/constants").FRAUDNET_URL,c=h("../lib/assets").loadScript,f;function g(C){var t=new y;return C=C||{},!C.sessionId&&f?(t.sessionId=f,Promise.resolve(t)):t.initialize(C)}function l(){f=null}function y(){}y.prototype.initialize=function(C){var t=C.environment,e=this;return this.sessionId=C.sessionId||d(),C.sessionId||(f=this.sessionId),this._beaconId=I(this.sessionId),this._parameterBlock=O(this.sessionId,this._beaconId,t),c({src:a}).then(function(r){return e._thirdPartyBlock=r,e}).catch(function(){return null})},y.prototype.teardown=function(){v(document.querySelector('iframe[title="ppfniframe"]')),v(document.querySelector('iframe[title="pbf"]')),v(this._parameterBlock),v(this._thirdPartyBlock)};function v(C){C&&C.parentNode&&C.parentNode.removeChild(C)}function d(){var C,t="";for(C=0;C<32;C++)t+=Math.floor(Math.random()*16).toString(16);return t}function I(C){var t=new Date().getTime()/1e3;return"https://b.stats.paypal.com/counter.cgi?i=127.0.0.1&p="+C+"&t="+t+"&a=14"}function O(C,t,e){var r=document.body.appendChild(document.createElement("script")),n={f:C,s:u,b:t};return e!=="production"&&(n.sandbox=!0),r.type="application/json",r.setAttribute("fncls",i),r.text=JSON.stringify(n),r}m.exports={setup:g,clearSessionIdCache:l}},{"../lib/assets":14,"../lib/constants":18}],11:[function(h,m,E){var i=h("./kount"),u=h("./fraudnet"),a=h("../lib/braintree-error"),c=h("../lib/basic-component-verification"),f=h("../lib/create-deferred-client"),g=h("../lib/create-assets-url"),l=h("../lib/methods"),y=h("../lib/convert-methods-to-error"),v="3.94.0",d=h("@braintree/wrap-promise"),I=h("./errors");function O(e){var r="Data Collector",n={_instances:[]},o;return c.verify({name:r,client:e.client,authorization:e.authorization}).then(function(){return n._instantiatedWithAClient=!e.useDeferredClient,n._createPromise=f.create({authorization:e.authorization,client:e.client,debug:e.debug,assetsUrl:g.create(e.authorization),name:r}).then(function(s){var p,_=s.getConfiguration();if(e.kount===!0&&_.gatewayConfiguration.kount){try{p=i.setup({environment:_.gatewayConfiguration.environment,merchantId:_.gatewayConfiguration.kount.kountMerchantId})}catch(w){return Promise.reject(new a({type:I.DATA_COLLECTOR_KOUNT_ERROR.type,code:I.DATA_COLLECTOR_KOUNT_ERROR.code,message:w.message}))}o=p.deviceData,n._instances.push(p)}else o={};return Promise.resolve(s)}).then(function(s){return u.setup({sessionId:e.riskCorrelationId||e.clientMetadataId||e.correlationId,environment:s.getConfiguration().gatewayConfiguration.environment}).then(function(p){p&&(o.correlation_id=p.sessionId,n._instances.push(p))})}).then(function(){return n._instances.length===0?Promise.reject(new a(I.DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS)):(n.deviceData=JSON.stringify(o),n.rawDeviceData=o,n)}),n.teardown=C(n),n.getDeviceData=t(n),n._instantiatedWithAClient?n._createPromise:n})}function C(e){return d(function(){return e._createPromise.then(function(){e._instances.forEach(function(n){n&&n.teardown()}),y(e,l(e))})})}function t(e){return d(function(n){return n=n||{},e._createPromise.then(function(){return n.raw?Promise.resolve(e.rawDeviceData):Promise.resolve(e.deviceData)})})}m.exports={create:d(O),VERSION:v}},{"../lib/basic-component-verification":15,"../lib/braintree-error":16,"../lib/convert-methods-to-error":19,"../lib/create-assets-url":20,"../lib/create-deferred-client":21,"../lib/methods":24,"./errors":9,"./fraudnet":10,"./kount":12,"@braintree/wrap-promise":7}],12:[function(h,m,E){var i=h("./vendor/sjcl"),u=h("../lib/camel-case-to-snake-case"),a="https://assets.qa.braintreepayments.com/data",c="braintreeDataFrame-",f={development:a,qa:a,sandbox:"https://assets.braintreegateway.com/sandbox/data",production:"https://assets.braintreegateway.com/data"},g={};function l(v){var d=v??{};return new y(d)}function y(v){var d=y.getCachedDeviceData(v.merchantId);if(d){this.deviceData=d,this._isCached=!0;return}this._currentEnvironment=this._initializeEnvironment(v),i.random.startCollectors(),this._deviceSessionId=this._generateDeviceSessionId(),this.deviceData=this._getDeviceData(),y.setCachedDeviceData(v.merchantId,this.deviceData),this._iframe=this._setupIFrame()}y.getCachedDeviceData=function(v){return g[v]},y.setCachedDeviceData=function(v,d){g[v]=d},y.prototype.teardown=function(){this._isCached||(i.random.stopCollectors(),this._removeIframe())},y.prototype._removeIframe=function(){this._iframe.parentNode.removeChild(this._iframe)},y.prototype._getDeviceData=function(){return u({deviceSessionId:this._deviceSessionId,fraudMerchantId:this._currentEnvironment.id})},y.prototype._generateDeviceSessionId=function(){var v,d;return v=i.random.randomWords(4,0),d=i.codec.hex.fromBits(v),d},y.prototype._setupIFrame=function(){var v,d,I=this;return v="?m="+this._currentEnvironment.id+"&s="+this._deviceSessionId,d=document.createElement("iframe"),d.width=1,d.id=c+this._deviceSessionId,d.height=1,d.frameBorder=0,d.scrolling="no",d.style.position="fixed",d.style.left="-999999px",d.style.top="-999999px",d.title="Braintree-Kount-iframe",d.setAttribute("aria-hidden","true"),document.body.appendChild(d),setTimeout(function(){d.src=I._currentEnvironment.url+"/logo.htm"+v,d.innerHTML='<img src="'+I._currentEnvironment.url+"/logo.gif"+v+'" alt="" />'},10),d},y.prototype._initializeEnvironment=function(v){var d=f[v.environment];if(d==null)throw new Error(v.environment+" is not a valid environment for kount.environment");return{url:d,name:v.environment,id:v.merchantId}},m.exports={setup:l,Kount:y,environmentUrls:f}},{"../lib/camel-case-to-snake-case":17,"./vendor/sjcl":13}],13:[function(h,m,E){var i={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(t){this.toString=function(){return"CORRUPT: "+this.message},this.message=t},invalid:function(t){this.toString=function(){return"INVALID: "+this.message},this.message=t},bug:function(t){this.toString=function(){return"BUG: "+this.message},this.message=t},notReady:function(t){this.toString=function(){return"NOT READY: "+this.message},this.message=t}}};i.cipher.aes=function(t){this.l[0][0][0]||this.G();var e,r,n,o,s=this.l[0][4],p=this.l[1];e=t.length;var _=1;if(e!==4&&e!==6&&e!==8)throw new i.exception.invalid("invalid aes key size");for(this.b=[n=t.slice(0),o=[]],t=e;t<4*e+28;t++)r=n[t-1],(t%e===0||e===8&&t%e===4)&&(r=s[r>>>24]<<24^s[r>>16&255]<<16^s[r>>8&255]<<8^s[r&255],t%e===0&&(r=r<<8^r>>>24^_<<24,_=_<<1^283*(_>>7))),n[t]=n[t-e]^r;for(e=0;t;e++,t--)r=n[e&3?t:t-4],o[e]=4>=t||4>e?r:p[0][s[r>>>24]]^p[1][s[r>>16&255]]^p[2][s[r>>8&255]]^p[3][s[r&255]]},i.cipher.aes.prototype={encrypt:function(t){return u(this,t,0)},decrypt:function(t){return u(this,t,1)},l:[[[],[],[],[],[]],[[],[],[],[],[]]],G:function(){var t=this.l[0],e=this.l[1],r=t[4],n=e[4],o,s,p,_=[],w=[],T,R,A,b;for(o=0;256>o;o++)w[(_[o]=o<<1^283*(o>>7))^o]=o;for(s=p=0;!r[s];s^=T||1,p=w[p]||1)for(A=p^p<<1^p<<2^p<<3^p<<4,A=A>>8^A&255^99,r[s]=A,n[A]=s,R=_[o=_[T=_[s]]],b=16843009*R^65537*o^257*T^16843008*s,R=257*_[A]^16843008*A,o=0;4>o;o++)t[o][s]=R=R<<24^R>>>8,e[o][A]=b=b<<24^b>>>8;for(o=0;5>o;o++)t[o]=t[o].slice(0),e[o]=e[o].slice(0)}};function u(t,e,r){if(e.length!==4)throw new i.exception.invalid("invalid aes block size");var n=t.b[r],o=e[0]^n[0],s=e[r?3:1]^n[1],p=e[2]^n[2];e=e[r?1:3]^n[3];var _,w,T,R=n.length/4-2,A,b=4,N=[0,0,0,0];_=t.l[r],t=_[0];var S=_[1],D=_[2],L=_[3],x=_[4];for(A=0;A<R;A++)_=t[o>>>24]^S[s>>16&255]^D[p>>8&255]^L[e&255]^n[b],w=t[s>>>24]^S[p>>16&255]^D[e>>8&255]^L[o&255]^n[b+1],T=t[p>>>24]^S[e>>16&255]^D[o>>8&255]^L[s&255]^n[b+2],e=t[e>>>24]^S[o>>16&255]^D[s>>8&255]^L[p&255]^n[b+3],b+=4,o=_,s=w,p=T;for(A=0;4>A;A++)N[r?3&-A:A]=x[o>>>24]<<24^x[s>>16&255]<<16^x[p>>8&255]<<8^x[e&255]^n[b++],_=o,o=s,s=p,p=e,e=_;return N}i.bitArray={bitSlice:function(t,e,r){return t=i.bitArray.M(t.slice(e/32),32-(e&31)).slice(1),r===void 0?t:i.bitArray.clamp(t,r-e)},extract:function(t,e,r){var n=Math.floor(-e-r&31);return((e+r-1^e)&-32?t[e/32|0]<<32-n^t[e/32+1|0]>>>n:t[e/32|0]>>>n)&(1<<r)-1},concat:function(t,e){if(t.length===0||e.length===0)return t.concat(e);var r=t[t.length-1],n=i.bitArray.getPartial(r);return n===32?t.concat(e):i.bitArray.M(e,n,r|0,t.slice(0,t.length-1))},bitLength:function(t){var e=t.length;return e===0?0:32*(e-1)+i.bitArray.getPartial(t[e-1])},clamp:function(t,e){if(32*t.length<e)return t;t=t.slice(0,Math.ceil(e/32));var r=t.length;return e=e&31,0<r&&e&&(t[r-1]=i.bitArray.partial(e,t[r-1]&2147483648>>e-1,1)),t},partial:function(t,e,r){return t===32?e:(r?e|0:e<<32-t)+1099511627776*t},getPartial:function(t){return Math.round(t/1099511627776)||32},equal:function(t,e){if(i.bitArray.bitLength(t)!==i.bitArray.bitLength(e))return!1;var r=0,n;for(n=0;n<t.length;n++)r|=t[n]^e[n];return r===0},M:function(t,e,r,n){var o;for(o=0,n===void 0&&(n=[]);32<=e;e-=32)n.push(r),r=0;if(e===0)return n.concat(t);for(o=0;o<t.length;o++)n.push(r|t[o]>>>e),r=t[o]<<32-e;return o=t.length?t[t.length-1]:0,t=i.bitArray.getPartial(o),n.push(i.bitArray.partial(e+t&31,32<e+t?r:n.pop(),1)),n},Y:function(t,e){return[t[0]^e[0],t[1]^e[1],t[2]^e[2],t[3]^e[3]]},byteswapM:function(t){var e,r;for(e=0;e<t.length;++e)r=t[e],t[e]=r>>>24|r>>>8&65280|(r&65280)<<8|r<<24;return t}},i.codec.utf8String={fromBits:function(t){var e="",r=i.bitArray.bitLength(t),n,o;for(n=0;n<r/8;n++)!(n&3)&&(o=t[n/4]),e+=String.fromCharCode(o>>>8>>>8>>>8),o<<=8;return decodeURIComponent(escape(e))},toBits:function(t){t=unescape(encodeURIComponent(t));var e=[],r,n=0;for(r=0;r<t.length;r++)n=n<<8|t.charCodeAt(r),(r&3)===3&&(e.push(n),n=0);return r&3&&e.push(i.bitArray.partial(8*(r&3),n)),e}},i.codec.hex={fromBits:function(t){var e="",r;for(r=0;r<t.length;r++)e+=((t[r]|0)+0xf00000000000).toString(16).substr(4);return e.substr(0,i.bitArray.bitLength(t)/4)},toBits:function(t){var e,r=[],n;for(t=t.replace(/\s|0x/g,""),n=t.length,t=t+"00000000",e=0;e<t.length;e+=8)r.push(parseInt(t.substr(e,8),16)^0);return i.bitArray.clamp(r,4*n)}},i.hash.sha256=function(t){this.b[0]||this.G(),t?(this.u=t.u.slice(0),this.o=t.o.slice(0),this.h=t.h):this.reset()},i.hash.sha256.hash=function(t){return new i.hash.sha256().update(t).finalize()},i.hash.sha256.prototype={blockSize:512,reset:function(){return this.u=this.K.slice(0),this.o=[],this.h=0,this},update:function(t){typeof t=="string"&&(t=i.codec.utf8String.toBits(t));var e,r=this.o=i.bitArray.concat(this.o,t);if(e=this.h,t=this.h=e+i.bitArray.bitLength(t),9007199254740991<t)throw new i.exception.invalid("Cannot hash more than 2^53 - 1 bits");if(typeof Uint32Array<"u"){var n=new Uint32Array(r),o=0;for(e=512+e-(512+e&511);e<=t;e+=512)a(this,n.subarray(16*o,16*(o+1))),o+=1;r.splice(0,16*o)}else for(e=512+e-(512+e&511);e<=t;e+=512)a(this,r.splice(0,16));return this},finalize:function(){var t,r=this.o,e=this.u,r=i.bitArray.concat(r,[i.bitArray.partial(1,1)]);for(t=r.length+2;t&15;t++)r.push(0);for(r.push(Math.floor(this.h/4294967296)),r.push(this.h|0);r.length;)a(this,r.splice(0,16));return this.reset(),e},K:[],b:[],G:function(){function t(s){return 4294967296*(s-Math.floor(s))|0}for(var e=0,r=2,n,o;64>e;r++){for(o=!0,n=2;n*n<=r;n++)if(r%n===0){o=!1;break}o&&(8>e&&(this.K[e]=t(Math.pow(r,.5))),this.b[e]=t(Math.pow(r,1/3)),e++)}}};function a(t,e){var r,n,o,s=t.u,p=t.b,_=s[0],w=s[1],T=s[2],R=s[3],A=s[4],b=s[5],N=s[6],S=s[7];for(r=0;64>r;r++)16>r?n=e[r]:(n=e[r+1&15],o=e[r+14&15],n=e[r&15]=(n>>>7^n>>>18^n>>>3^n<<25^n<<14)+(o>>>17^o>>>19^o>>>10^o<<15^o<<13)+e[r&15]+e[r+9&15]|0),n=n+S+(A>>>6^A>>>11^A>>>25^A<<26^A<<21^A<<7)+(N^A&(b^N))+p[r],S=N,N=b,b=A,A=R+n|0,R=T,T=w,w=_,_=n+(w&T^R&(w^T))+(w>>>2^w>>>13^w>>>22^w<<30^w<<19^w<<10)|0;s[0]=s[0]+_|0,s[1]=s[1]+w|0,s[2]=s[2]+T|0,s[3]=s[3]+R|0,s[4]=s[4]+A|0,s[5]=s[5]+b|0,s[6]=s[6]+N|0,s[7]=s[7]+S|0}i.prng=function(t){this.c=[new i.hash.sha256],this.i=[0],this.H=0,this.v={},this.F=0,this.J={},this.L=this.f=this.j=this.T=0,this.b=[0,0,0,0,0,0,0,0],this.g=[0,0,0,0],this.C=void 0,this.D=t,this.s=!1,this.B={progress:{},seeded:{}},this.m=this.S=0,this.w=1,this.A=2,this.O=65536,this.I=[0,48,64,96,128,192,256,384,512,768,1024],this.P=3e4,this.N=80},i.prng.prototype={randomWords:function(t,e){var r=[],n;n=this.isReady(e);var o;if(n===this.m)throw new i.exception.notReady("generator isn't seeded");if(n&this.A){n=!(n&this.w),o=[];var s=0,p;for(this.L=o[0]=new Date().valueOf()+this.P,p=0;16>p;p++)o.push(4294967296*Math.random()|0);for(p=0;p<this.c.length&&(o=o.concat(this.c[p].finalize()),s+=this.i[p],this.i[p]=0,n||!(this.H&1<<p));p++);for(this.H>=1<<this.c.length&&(this.c.push(new i.hash.sha256),this.i.push(0)),this.f-=s,s>this.j&&(this.j=s),this.H++,this.b=i.hash.sha256.hash(this.b.concat(o)),this.C=new i.cipher.aes(this.b),n=0;4>n&&(this.g[n]=this.g[n]+1|0,!this.g[n]);n++);}for(n=0;n<t;n+=4)(n+1)%this.O===0&&g(this),o=l(this),r.push(o[0],o[1],o[2],o[3]);return g(this),r.slice(0,t)},setDefaultParanoia:function(t,e){if(t===0&&e!=="Setting paranoia=0 will ruin your security; use it only for testing")throw new i.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");this.D=t},addEntropy:function(t,e,r){r=r||"user";var n,o,s=new Date().valueOf(),p=this.v[r],_=this.isReady(),w=0;switch(n=this.J[r],n===void 0&&(n=this.J[r]=this.T++),p===void 0&&(p=this.v[r]=0),this.v[r]=(this.v[r]+1)%this.c.length,typeof t){case"number":e===void 0&&(e=1),this.c[p].update([n,this.F++,1,e,s,1,t|0]);break;case"object":if(r=Object.prototype.toString.call(t),r==="[object Uint32Array]"){for(o=[],r=0;r<t.length;r++)o.push(t[r]);t=o}else for(r!=="[object Array]"&&(w=1),r=0;r<t.length&&!w;r++)typeof t[r]!="number"&&(w=1);if(!w){if(e===void 0)for(r=e=0;r<t.length;r++)for(o=t[r];0<o;)e++,o=o>>>1;this.c[p].update([n,this.F++,2,e,s,t.length].concat(t))}break;case"string":e===void 0&&(e=t.length),this.c[p].update([n,this.F++,3,e,s,t.length]),this.c[p].update(t);break;default:w=1}if(w)throw new i.exception.bug("random: addEntropy only supports number, array of numbers or string");this.i[p]+=e,this.f+=e,_===this.m&&(this.isReady()!==this.m&&c("seeded",Math.max(this.j,this.f)),c("progress",this.getProgress()))},isReady:function(t){return t=this.I[t!==void 0?t:this.D],this.j&&this.j>=t?this.i[0]>this.N&&new Date().valueOf()>this.L?this.A|this.w:this.w:this.f>=t?this.A|this.m:this.m},getProgress:function(t){return t=this.I[t||this.D],this.j>=t||this.f>t?1:this.f/t},startCollectors:function(){if(!this.s){if(this.a={loadTimeCollector:y(this,this.V),mouseCollector:y(this,this.W),keyboardCollector:y(this,this.U),accelerometerCollector:y(this,this.R),touchCollector:y(this,this.X)},window.addEventListener)window.addEventListener("load",this.a.loadTimeCollector,!1),window.addEventListener("mousemove",this.a.mouseCollector,!1),window.addEventListener("keypress",this.a.keyboardCollector,!1),window.addEventListener("devicemotion",this.a.accelerometerCollector,!1),window.addEventListener("touchmove",this.a.touchCollector,!1);else if(document.attachEvent)document.attachEvent("onload",this.a.loadTimeCollector),document.attachEvent("onmousemove",this.a.mouseCollector),document.attachEvent("keypress",this.a.keyboardCollector);else throw new i.exception.bug("can't attach event");this.s=!0}},stopCollectors:function(){this.s&&(window.removeEventListener?(window.removeEventListener("load",this.a.loadTimeCollector,!1),window.removeEventListener("mousemove",this.a.mouseCollector,!1),window.removeEventListener("keypress",this.a.keyboardCollector,!1),window.removeEventListener("devicemotion",this.a.accelerometerCollector,!1),window.removeEventListener("touchmove",this.a.touchCollector,!1)):document.detachEvent&&(document.detachEvent("onload",this.a.loadTimeCollector),document.detachEvent("onmousemove",this.a.mouseCollector),document.detachEvent("keypress",this.a.keyboardCollector)),this.s=!1)},addEventListener:function(t,e){this.B[t][this.S++]=e},removeEventListener:function(t,e){var r,n,o=this.B[t],s=[];for(n in o)o.hasOwnProperty(n)&&o[n]===e&&s.push(n);for(r=0;r<s.length;r++)n=s[r],delete o[n]},U:function(){f(this,1)},W:function(t){var e,r;try{e=t.x||t.clientX||t.offsetX||0,r=t.y||t.clientY||t.offsetY||0}catch{r=e=0}e!=0&&r!=0&&this.addEntropy([e,r],2,"mouse"),f(this,0)},X:function(t){t=t.touches[0]||t.changedTouches[0],this.addEntropy([t.pageX||t.clientX,t.pageY||t.clientY],1,"touch"),f(this,0)},V:function(){f(this,2)},R:function(t){if(t=t.accelerationIncludingGravity.x||t.accelerationIncludingGravity.y||t.accelerationIncludingGravity.z,window.orientation){var e=window.orientation;typeof e=="number"&&this.addEntropy(e,1,"accelerometer")}t&&this.addEntropy(t,2,"accelerometer"),f(this,0)}};function c(t,e){var r,n=i.random.B[t],o=[];for(r in n)n.hasOwnProperty(r)&&o.push(n[r]);for(r=0;r<o.length;r++)o[r](e)}function f(t,e){typeof window<"u"&&window.performance&&typeof window.performance.now=="function"?t.addEntropy(window.performance.now(),e,"loadtime"):t.addEntropy(new Date().valueOf(),e,"loadtime")}function g(t){t.b=l(t).concat(l(t)),t.C=new i.cipher.aes(t.b)}function l(t){for(var e=0;4>e&&(t.g[e]=t.g[e]+1|0,!t.g[e]);e++);return t.C.encrypt(t.g)}function y(t,e){return function(){e.apply(t,arguments)}}i.random=new i.prng(6);t:try{var v,d,I,O;if(O=typeof m<"u"&&m.exports){var C;try{C=h("crypto")}catch{C=null}O=d=C}if(O&&d.randomBytes)v=d.randomBytes(128),v=new Uint32Array(new Uint8Array(v).buffer),i.random.addEntropy(v,1024,"crypto['randomBytes']");else if(typeof window<"u"&&typeof Uint32Array<"u"){if(I=new Uint32Array(32),window.crypto&&window.crypto.getRandomValues)window.crypto.getRandomValues(I);else if(window.msCrypto&&window.msCrypto.getRandomValues)window.msCrypto.getRandomValues(I);else break t;i.random.addEntropy(I,1024,"crypto['getRandomValues']")}}catch(t){typeof window<"u"&&window.console&&(console.log("There was an error collecting entropy from the browser:"),console.log(t))}typeof m<"u"&&m.exports&&(m.exports=i)},{crypto:void 0}],14:[function(h,m,E){var i=h("@braintree/asset-loader/load-script");m.exports={loadScript:i}},{"@braintree/asset-loader/load-script":3}],15:[function(h,m,E){var i=h("./braintree-error"),u=h("./errors"),a="3.94.0";function c(f){var g,l,y;return f?(y=f.name,g=f.client,l=f.authorization,!g&&!l?Promise.reject(new i({type:u.INSTANTIATION_OPTION_REQUIRED.type,code:u.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating "+y+"."})):!l&&g.getVersion()!==a?Promise.reject(new i({type:u.INCOMPATIBLE_VERSIONS.type,code:u.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+g.getVersion()+") and "+y+" (version "+a+") components must be from the same SDK version."})):Promise.resolve()):Promise.reject(new i({type:u.INVALID_USE_OF_INTERNAL_FUNCTION.type,code:u.INVALID_USE_OF_INTERNAL_FUNCTION.code,message:"Options must be passed to basicComponentVerification function."}))}m.exports={verify:c}},{"./braintree-error":16,"./errors":23}],16:[function(h,m,E){var i=h("./enumerate");function u(a){if(!u.types.hasOwnProperty(a.type))throw new Error(a.type+" is not a valid type.");if(!a.code)throw new Error("Error code required.");if(!a.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=a.code,this.message=a.message,this.type=a.type,this.details=a.details}u.prototype=Object.create(Error.prototype),u.prototype.constructor=u,u.types=i(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),u.findRootError=function(a){return a instanceof u&&a.details&&a.details.originalError?u.findRootError(a.details.originalError):a},m.exports=u},{"./enumerate":22}],17:[function(h,m,E){function i(u){return u.replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1_$2").toLowerCase()}m.exports=function(u){return Object.keys(u).reduce(function(a,c){var f=i(c);return a[f]=u[c],a},{})}},{}],18:[function(h,m,E){var i="3.94.0",u="web",a={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"},c={production:"https://assets.braintreegateway.com",sandbox:"https://assets.braintreegateway.com"},f={production:"https://payments.braintree-api.com/graphql",sandbox:"https://payments.sandbox.braintree-api.com/graphql"};m.exports={ANALYTICS_PREFIX:u+".",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,ASSETS_URLS:c,CLIENT_API_URLS:a,FRAUDNET_SOURCE:"BRAINTREE_SIGNIN",FRAUDNET_FNCLS:"fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99",FRAUDNET_URL:"https://c.paypal.com/da/r/fb.js",BUS_CONFIGURATION_REQUEST_EVENT:"BUS_CONFIGURATION_REQUEST",GRAPHQL_URLS:f,INTEGRATION_TIMEOUT_MS:6e4,VERSION:i,INTEGRATION:"custom",SOURCE:"client",PLATFORM:u,BRAINTREE_LIBRARY_VERSION:"braintree/"+u+"/"+i}},{}],19:[function(h,m,E){var i=h("./braintree-error"),u=h("./errors");m.exports=function(a,c){c.forEach(function(f){a[f]=function(){throw new i({type:u.METHOD_CALLED_AFTER_TEARDOWN.type,code:u.METHOD_CALLED_AFTER_TEARDOWN.code,message:f+" cannot be called after teardown."})}})}},{"./braintree-error":16,"./errors":23}],20:[function(h,m,E){var i=h("./constants").ASSETS_URLS;function u(a){return i.production}m.exports={create:u}},{"./constants":18}],21:[function(h,m,E){var i=h("./braintree-error"),u=h("./assets"),a=h("./errors"),c="3.94.0";function f(g){var l=Promise.resolve();return g.client?Promise.resolve(g.client):(window.braintree&&window.braintree.client||(l=u.loadScript({src:g.assetsUrl+"/web/"+c+"/js/client.min.js"}).catch(function(y){return Promise.reject(new i({type:a.CLIENT_SCRIPT_FAILED_TO_LOAD.type,code:a.CLIENT_SCRIPT_FAILED_TO_LOAD.code,message:a.CLIENT_SCRIPT_FAILED_TO_LOAD.message,details:{originalError:y}}))})),l.then(function(){return window.braintree.client.VERSION!==c?Promise.reject(new i({type:a.INCOMPATIBLE_VERSIONS.type,code:a.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+window.braintree.client.VERSION+") and "+g.name+" (version "+c+") components must be from the same SDK version."})):window.braintree.client.create({authorization:g.authorization,debug:g.debug})}))}m.exports={create:f}},{"./assets":14,"./braintree-error":16,"./errors":23}],22:[function(h,m,E){function i(u,a){return a=a??"",u.reduce(function(c,f){return c[f]=a+f,c},{})}m.exports=i},{}],23:[function(h,m,E){var i=h("./braintree-error");m.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:i.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},INSTANTIATION_OPTION_REQUIRED:{type:i.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INCOMPATIBLE_VERSIONS:{type:i.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},CLIENT_SCRIPT_FAILED_TO_LOAD:{type:i.types.NETWORK,code:"CLIENT_SCRIPT_FAILED_TO_LOAD",message:"Braintree client script could not be loaded."},METHOD_CALLED_AFTER_TEARDOWN:{type:i.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"}}},{"./braintree-error":16}],24:[function(h,m,E){m.exports=function(i){return Object.keys(i).filter(function(u){return typeof i[u]=="function"})}},{}]},{},[11])(11)})})(B);var J=B.exports;const $=k(J),Z={dataCollectorCreate:{label:"braintree-web.dataCollector.create()",type:"client",data:{options:{client:"BT_CLIENT_INSTANCE",kount:!0,paypal:!0}}}},F=U=>{const M=j(),h=z(),m=V(),E=K(),i=G(),u=H(),a=async()=>{M();try{const c=await $.create({...U.operations.dataCollectorCreate.data.options,client:i.clientInstance});Y("DataCollectorAll: createDataCollector",c),m("DataCollector",c),c&&u("dcInstance",c)}catch(c){E(),X("DataCollectorAll: createDataCollector",c)}h()};return React.createElement("button",{className:"btn btn-outline-success",onClick:a},"Create DC Instance")};F.propTypes={operations:Q.object};const ot=W(F,Z,["clientInstance"]);export{ot as default};