/**
 * @id5io/id5-api.js
 * @version v1.0.10
 * @link https://id5.io/
 * @license Apache-2.0
 */
!function(n){var a={};function r(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,n){"use strict";function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,a=arguments[t];for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.b=function(e,t){var n=!0;return D(e,function(e){return n=n&&t(e)}),n},t.q=function(){O()&&v&&console.info.apply(console,C(arguments,"INFO:"))},t.r=function(){O()&&b&&console.warn.apply(console,C(arguments,"WARNING:"))},t.p=y,t.t=function(e){m=!!e},t.l=O,t.g=k,t.k=S,t.o=I,t.h=_,t.m=function(e){return k(e,o)},t.n=function(e){return k(e,c)},t.i=function(e){return k(e,d)},t.j=function(e){return void 0!==e},t.f=function(e){e=window.document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]*)\\s*(;|$)");return e?decodeURIComponent(e[2]):null},t.s=function(e,t,n){document.cookie="".concat(e,"=").concat(encodeURIComponent(t)).concat(""!==n?"; expires=".concat(n):"","; path=/")},t.a=function(e,t,n){var a,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};try{var i=r.method||(n?"POST":"GET");document.createElement("a").href=e;var o,c="object"===l(t)&&null!==t?t:{success:function(){!function(){O()&&h&&console.log.apply(console,C(arguments,"MESSAGE:"))}("xhr success")},error:function(e){y("xhr error",null,e)}};"function"==typeof t&&(c.success=t),(a=new window.XMLHttpRequest).onreadystatechange=function(){var e;a.readyState===w&&(200<=(e=a.status)&&e<300||304===e?c.success(a.responseText,a):c.error(a.statusText,a))},a.ontimeout=function(){y("  xhr timeout after ",a.timeout,"ms")},"GET"===i&&n&&(s((o=function(e,t){var n=document.createElement("a");t&&"noDecodeWholeURL"in t&&t.noDecodeWholeURL?n.href=e:n.href=decodeURIComponent(e);t=t&&"decodeSearchAsString"in t&&t.decodeSearchAsString;return{href:n.href,protocol:(n.protocol||"").replace(/:$/,""),hostname:n.hostname,port:+n.port,pathname:n.pathname.replace(/^(?!\/)/,"/"),search:t?n.search:function(e){return e?e.replace(/^\?/,"").split("&").reduce(function(e,t){var n=t.split("="),n=(t=2,function(e){if(Array.isArray(e))return e}(n=n)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var a,r,i=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return i}}(n,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),t=n[0],n=n[1];return/\[\]$/.test(t)?(e[t=t.replace("[]","")]=e[t]||[],e[t].push(n)):e[t]=n||"",e},{}):{}}(n.search||""),hash:(n.hash||"").replace(/^#/,""),host:n.host||window.location.host}}(e,r)).search,n),e=function(e){return(e.protocol||"http")+"://"+(e.host||e.hostname+(e.port?":".concat(e.port):""))+(e.pathname||"")+(e.search?"?".concat(function(e){return Object.keys(e).map(function(t){return Array.isArray(e[t])?e[t].map(function(e){return"".concat(t,"[]=").concat(e)}).join("&"):"".concat(t,"=").concat(e[t])}).join("&")}(e.search||"")):"")+(e.hash?"#".concat(e.hash):"")}(o)),a.open(i,e,!0),r.withCredentials&&(a.withCredentials=!0),D(r.customHeaders,function(e,t){a.setRequestHeader(t,e)}),r.preflight&&a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("Content-Type",r.contentType||"text/plain"),"POST"===i&&n?a.send(n):a.send()}catch(e){y("xhr construction",e)}},t.d=function(e,t,n){"loading"!==document.readyState?j(e,t,n):document.addEventListener("DOMContentLoaded",function(){j(e,t,n)})},t.c=function(e){for(var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,a=function(e,t){if(S(Math.imul))return Math.imul(e,t);var n=(4194303&e)*(t|=0);return 4290772992&e&&(n+=(4290772992&e)*t|0),0|n},r=3735928559^n,i=1103547991^n,o=0;o<e.length;o++)t=e.charCodeAt(o),r=a(r^t,2654435761),i=a(i^t,1597334677);return r=a(r^r>>>16,2246822507)^a(i^i>>>13,3266489909),(4294967296*(2097151&(i=a(i^i>>>16,2246822507)^a(r^r>>>13,3266489909)))+(r>>>0)).toString()},t.e=function(e,t,n,a,r){for(t=t.split?t.split("."):t,a=0;a<t.length;a++)e=e?e[t[a]]:r;return e===r?n:e};var a="Array",r="String",i="Function",o="Number",c="Object",d="Boolean",p=Object.prototype.toString,f="TRUE"===function(e){e=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null!==e?decodeURIComponent(e[1].replace(/\+/g," ")):""}("id5_debug").toUpperCase(),t=Boolean(window.console),h=Boolean(t&&window.console.log),v=Boolean(t&&window.console.info),b=Boolean(t&&window.console.warn),g=Boolean(t&&window.console.error),m=!1;function y(){O()&&g&&console.error.apply(console,C(arguments,"ERROR:"))}function C(e,t){return e=[].slice.call(e),t&&e.unshift(t),e.unshift("display: inline-block; color: #fff; background: #1c307e; padding: 1px 4px; border-radius: 3px;"),e.unshift("%cID5"),e}function O(){return f||m}function k(e,t){return p.call(e)==="[object "+t+"]"}function S(e){return k(e,i)}function I(e){return k(e,r)}function _(e){return k(e,a)}function D(e,t){if(!function(e){if(!e)return 1;if(_(e)||I(e))return!(0<e.length);for(var t in e)if(hasOwnProperty.call(e,t))return;return 1}(e)){if(S(e.forEach))return e.forEach(t,this);var n=0,a=e.length;if(0<a)for(;n<a;n++)t(e[n],n,e);else for(n in e)hasOwnProperty.call(e,n)&&t.call(this,e[n],n)}}var w=4;function j(e,t,n){var a=new Image;a.src=e,S(t)&&t(),S(n)&&(a.complete?n():a.addEventListener("load",n))}},function(e,t){e.exports={STORAGE_CONFIG:{ID5:{name:"id5id",expiresDays:90},LAST:{name:"id5id_last",expiresDays:90},CONSENT_DATA:{name:"id5id_cached_consent_data",expiresDays:30},PD:{name:"id5id_cached_pd",expiresDays:30},PRIVACY:{name:"id5id_privacy",expiresDays:30}},LEGACY_COOKIE_NAMES:["id5.1st","id5id.1st"],PRIVACY:{JURISDICTIONS:{gdpr:!0,ccpa:!1,lgpd:!0,other:!1}},ID5_EIDS_SOURCE:"id5-sync.com"}},function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0),t=n(1),i=n.n(t);function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),c(this,"localStorageAllowedCallback",void 0),c(this,"localStorage",void 0),this.localStorageAllowedCallback=e,this.localStorage=t}var e,t,a;return e=n,a=[{key:"pdCacheConfig",value:function(e){return{name:"".concat(i.a.STORAGE_CONFIG.PD.name,"_").concat(e),expiresDays:i.a.STORAGE_CONFIG.PD.expiresDays}}},{key:"makeStoredHash",value:function(e){return Object(r.c)("string"==typeof e?e:"")}},{key:"nbCacheConfig",value:function(e){return{name:"".concat(i.a.STORAGE_CONFIG.ID5.name,"_").concat(e,"_nb"),expiresDays:i.a.STORAGE_CONFIG.ID5.expiresDays}}},{key:"storedDataMatchesCurrentData",value:function(e,t){return null==e||e===t}},{key:"makeStoredConsentDataHash",value:function(e){var t={consentString:"",gdprApplies:!1,apiVersion:0};return e&&(t.consentString=e.consentString,t.gdprApplies=e.gdprApplies,t.apiVersion=e.apiVersion),Object(r.c)(JSON.stringify(t))}}],(t=[{key:"get",value:function(e){try{if(!0===this.localStorageAllowedCallback())return this.localStorage.getItemWithExpiration(e);Object(r.p)("clientStore.get() has been called without localStorageAllowed")}catch(e){Object(r.p)(e)}}},{key:"clear",value:function(e){try{this.localStorage.removeItemWithExpiration(e)}catch(e){Object(r.p)(e)}}},{key:"put",value:function(e,t){try{!0===this.localStorageAllowedCallback()?this.localStorage.setItemWithExpiration(e,t):Object(r.p)("clientStore.put() has been called without localStorageAllowed")}catch(e){Object(r.p)(e)}}},{key:"localStorageAllowed",value:function(){return this.localStorageAllowedCallback()}},{key:"isLocalStorageAvailable",value:function(){return this.localStorage.isAvailable()}},{key:"getResponseFromLegacyCookie",value:function(){var t;return i.a.LEGACY_COOKIE_NAMES.forEach(function(e){Object(r.f)(e)&&(t=Object(r.f)(e))}),t?JSON.parse(t):null}},{key:"getResponse",value:function(){var e=this.get(i.a.STORAGE_CONFIG.ID5);return e&&JSON.parse(decodeURIComponent(e))}},{key:"clearResponse",value:function(){this.clear(i.a.STORAGE_CONFIG.ID5)}},{key:"putResponse",value:function(e){this.put(i.a.STORAGE_CONFIG.ID5,encodeURIComponent(e))}},{key:"getHashedConsentData",value:function(){return this.get(i.a.STORAGE_CONFIG.CONSENT_DATA)}},{key:"clearHashedConsentData",value:function(){this.clear(i.a.STORAGE_CONFIG.CONSENT_DATA)}},{key:"putHashedConsentData",value:function(e){this.put(i.a.STORAGE_CONFIG.CONSENT_DATA,n.makeStoredConsentDataHash(e))}},{key:"getHashedPd",value:function(e){return this.get(n.pdCacheConfig(e))}},{key:"storedPdMatchesPd",value:function(e,t){return n.storedDataMatchesCurrentData(this.getHashedPd(e),n.makeStoredHash(t))}},{key:"clearHashedPd",value:function(e){this.clear(n.pdCacheConfig(e))}},{key:"putHashedPd",value:function(e,t){this.put(n.pdCacheConfig(e),n.makeStoredHash(t))}},{key:"getDateTime",value:function(){return new Date(this.get(i.a.STORAGE_CONFIG.LAST)).getTime()}},{key:"clearDateTime",value:function(){this.clear(i.a.STORAGE_CONFIG.LAST)}},{key:"setDateTime",value:function(e){this.put(i.a.STORAGE_CONFIG.LAST,e)}},{key:"getNb",value:function(e){e=this.get(n.nbCacheConfig(e));return e?parseInt(e):0}},{key:"clearNb",value:function(e){this.clear(n.nbCacheConfig(e))}},{key:"setNb",value:function(e,t){this.put(n.nbCacheConfig(e),t)}},{key:"incNb",value:function(e,t){return this.setNb(e,++t),t}},{key:"clearAll",value:function(e){this.clearResponse(),this.clearDateTime(),this.clearNb(e),this.clearHashedPd(e),this.clearHashedConsentData()}},{key:"removeLegacyCookies",value:function(t){var n=new Date(Date.now()-1e3).toUTCString();i.a.LEGACY_COOKIE_NAMES.forEach(function(e){Object(r.s)("".concat(e),"",n),Object(r.s)("".concat(e,"_nb"),"",n),Object(r.s)("".concat(e,"_").concat(t,"_nb"),"",n),Object(r.s)("".concat(e,"_last"),"",n),Object(r.s)("".concat(e,".cached_pd"),"",n),Object(r.s)("".concat(e,".cached_consent_data"),"",n)})}},{key:"storedConsentDataMatchesConsentData",value:function(e){return n.storedDataMatchesCurrentData(this.getHashedConsentData(),n.makeStoredConsentDataHash(e))}}])&&o(e.prototype,t),a&&o(e,a),n}()},function(e,t,n){"use strict";n.d(t,"a",function(){return l});var u=n(0),t=n(1),a=n.n(t);n(4);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,a=arguments[t];for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){i(this,s),c(this,"consentString",""),c(this,"gdprApplies",!1),c(this,"vendorData",{}),c(this,"apiVersion",0),c(this,"hasCcpaString",!1),c(this,"ccpaString","")}var d={tcfv1:{objName:"__cmpCall",objKeys:["command","parameter"],returnObjName:"__cmpReturn"},tcfv2:{objName:"__tcfapiCall",objKeys:["command","version"],returnObjName:"__tcfapiReturn"},uspv1:{objName:"__uspapiCall",objKeys:["command","version"],returnObjName:"__uspapiReturn"}},l=function(){function l(e){i(this,l),c(this,"consentData",void 0),c(this,"storedPrivacyData",void 0),c(this,"localStorage",void 0),c(this,"_consentRequested",!1),this.localStorage=e,this.resetConsentData()}var e,t,n;return e=l,n=[{key:"buildCmpSurrogate",value:function(c,s){return function(e,t,n){var a=Math.random()+"",r=d[c],i={},o={};o[r.objKeys[0]]=e,o[r.objKeys[1]]=t,o.callId=a,i[r.objName]=o;o=function e(t){t=Object(u.e)(t,"data.".concat(r.returnObjName));t&&t.callId===a&&(window.removeEventListener("message",e),n(t.returnValue,t.success))};window.addEventListener("message",o,!1),s.postMessage(i,"*")}}},{key:"parseUspData",value:function(e){if(Object(u.n)(e)&&Object(u.o)(e.uspString))return{hasCcpaString:!0,ccpaString:e.uspString};Object(u.p)("cmpApi: No or malformed USP data. Using defaults for CCPA.")}},{key:"parseTcfData",value:function(e,t){var n,a;if(1===t)n=l.isValidV1ConsentObject,a=l.normalizeV1Data;else{if(2!==t)return void Object(u.p)("cmpApi: No or malformed CMP data. Using defaults for GDPR.");n=l.isValidV2ConsentObject,a=l.normalizeV2Data}if(n(e))return a(e);Object(u.p)("cmpApi: Invalid CMP data. Using defaults for GDPR.",e)}},{key:"isValidV1ConsentObject",value:function(e){var t=Object(u.e)(e,"getConsentData.gdprApplies");return!!Object(u.i)(t)&&(!1===t||Object(u.o)(e.getConsentData.consentData)&&Object(u.n)(e.getVendorConsents)&&1<Object.keys(e.getVendorConsents).length)}},{key:"isValidV2ConsentObject",value:function(e){var t=e&&e.gdprApplies,e=e&&e.tcString;return!!Object(u.i)(t)&&(!1===t||Object(u.o)(e))}},{key:"normalizeV1Data",value:function(e){return{consentString:e.getConsentData.consentData,vendorData:e.getVendorConsents,gdprApplies:e.getConsentData.gdprApplies,apiVersion:1}}},{key:"normalizeV2Data",value:function(e){return{consentString:e.tcString,vendorData:e,gdprApplies:e.gdprApplies,apiVersion:2}}},{key:"findTCF",value:function(){for(var e,t,n=0,a=window;!e;){try{if("function"==typeof a.__tcfapi||"function"==typeof a.__cmp){t="function"==typeof a.__tcfapi?(n=2,a.__tcfapi):(n=1,a.__cmp),e=a;break}}catch(e){}try{if(a.frames.__tcfapiLocator){n=2,e=a;break}}catch(e){}try{if(a.frames.__cmpLocator){n=1,e=a;break}}catch(e){}if(a===window.top)break;a=a.parent}return{cmpVersion:n,cmpFrame:e,cmpFunction:t}}},{key:"findUsp",value:function(){for(var e,t,n=window;!e;){try{if("function"==typeof n.__uspapi){t=n.__uspapi,e=n;break}}catch(e){}try{if(n.frames.__uspapiLocator){e=n;break}}catch(e){}if(n===window.top)break;n=n.parent}return{uspapiFrame:e,uspapiFunction:t}}}],(t=[{key:"requestConsent",value:function(e,t,n,a){if(e)Object(u.r)("cmpApi: ID5 is operating in forced consent mode and will not retrieve any consent signals from the CMP"),a(this.consentData);else if(this._consentRequested)a(this.consentData);else switch(this._consentRequested=!0,t){case"static":this.parseStaticConsentData(n,a);break;case"iab":this.lookupIabConsent(a);break;default:Object(u.p)("cmpApi: Unknown consent API: ".concat(t)),this.resetConsentData(),a(this.consentData)}}},{key:"getOrCreateConsentData",value:function(){return this.consentData||(this.consentData=new s),this.consentData}},{key:"parseStaticConsentData",value:function(e,t){if(!Object(u.n)(e))return Object(u.p)('cmpApi: "static" did not specify consent data. Using defaults.'),void t(this.consentData);function n(e,t){Object(u.q)("cmpApi: Using static consent data from config for ".concat(e),t)}var a=e.getConsentData?1:e.getTCData?2:0,r=!1,i=!1;0<a&&(n("TCF v".concat(this.cmpVersion),e),r=!0,(a=l.parseTcfData(2==a?e.getTCData:e,a))&&o(this.getOrCreateConsentData(),a)),Object(u.n)(e.getUSPData)&&(n("USP",e),i=!0,(e=l.parseUspData(e.getUSPData))&&o(this.getOrCreateConsentData(),e)),r||i||Object(u.p)("cmpApi: Neither CMP nor USP static data detected! Using defaults."),t(this.consentData)}},{key:"lookupIabConsent",value:function(n){var a=this,r=[],e=function(t){return r[t]=!1,function(e){r[t]||(r[t]=!0,e&&o(a.getOrCreateConsentData(),e),r.every(function(e){return e})&&n(a.consentData))}},t=e(0),e=e(1);this.lookupTcf(t),this.lookupUsp(e)}},{key:"lookupUsp",value:function(n){var e=l.findUsp(),t=e.uspapiFrame,e=e.uspapiFunction;if(!t)return Object(u.r)("cmpApi: USP not found! Using defaults for CCPA."),void n();(Object(u.k)(e)?(Object(u.q)("cmpApi: Detected USP is directly accessible, calling it now."),e):(Object(u.q)("cmpApi: Detected USP is outside the current iframe. Using message passing."),l.buildCmpSurrogate("uspv1",t)))("getUSPData",1,function(e,t){t?n(l.parseUspData(e)):(Object(u.p)("cmpApi: USP callback not succesful. Using defaults for CCPA."),n())})}},{key:"lookupTcf",value:function(e){var t=l.findTCF(),n=t.cmpVersion,a=t.cmpFrame,t=t.cmpFunction;if(!a)return Object(u.r)("cmpApi: TCF not found! Using defaults for GDPR."),void e();Object(u.k)(t)?this.lookupDirectTcf(n,t,e):(Object(u.q)("cmpApi: Detected TCF is outside the current iframe. Using message passing."),this.lookupMessageTcf(n,a,e))}},{key:"lookupMessageTcf",value:function(e,t,n){t=l.buildCmpSurrogate(1===e?"tcfv1":"tcfv2",t);this.lookupDirectTcf(e,t,n)}},{key:"lookupDirectTcf",value:function(e,t,a){function r(e,t,n){Object(u.q)("cmpApi: TCFv".concat(e," - Received a call back: ").concat(t),n)}function i(e,t){Object(u.p)("cmpApi: TCFv".concat(e," - Received insuccess: ").concat(t,". Please check your CMP setup. Using defaults for GDPR."))}var n,o={},c={},s=function(n){return c[n]=!1,function(e,t){c[n]=!0,t?(r(1,n,e),o[n]=e):i(1,n),Object.values(c).every(function(e){return e})&&a(l.parseTcfData(o,1))}};1===e?(n=s("getConsentData"),s=s("getVendorConsents"),t("getConsentData",null,n),t("getVendorConsents",null,s)):2===e&&t("addEventListener",e,function(e,t){if(r(2,"event",e),!t)return i(2,"addEventListener"),void a();!e||!1!==e.gdprApplies&&"tcloaded"!==e.eventStatus&&"useractioncomplete"!==e.eventStatus||a(l.parseTcfData(e,2))})}},{key:"resetConsentData",value:function(){this.consentData=void 0,this.storedPrivacyData=void 0,this._consentRequested=!1}},{key:"isLocalStorageAllowed",value:function(e,t){var n=this.consentData;return!0===e||!0===t?(Object(u.r)("cmpApi: Local storage access granted by configuration override, consent will not be checked"),!0):n?!n.gdprApplies||!(!n.consentString||0===n.apiVersion)&&(1===n.apiVersion?!0===Object(u.e)(n,"vendorData.purposeConsents.1"):2!==n.apiVersion||!0===Object(u.e)(n,"vendorData.purpose.consents.1")):this.isProvisionalLocalStorageAllowed()}},{key:"isProvisionalLocalStorageAllowed",value:function(){var e;return Object(u.n)(this.storedPrivacyData)||(e=this.localStorage.getItemWithExpiration(a.a.STORAGE_CONFIG.PRIVACY),this.storedPrivacyData=e&&JSON.parse(e)),!(!this.storedPrivacyData||!0!==this.storedPrivacyData.id5_consent)||(this.storedPrivacyData&&void 0!==this.storedPrivacyData.jurisdiction?!1===(void 0!==a.a.PRIVACY.JURISDICTIONS[this.storedPrivacyData.jurisdiction]&&a.a.PRIVACY.JURISDICTIONS[this.storedPrivacyData.jurisdiction])||!0===this.storedPrivacyData.id5_consent:void 0)}},{key:"setStoredPrivacy",value:function(e){try{Object(u.n)(e)?(this.storedPrivacyData=e,this.localStorage.setItemWithExpiration(a.a.STORAGE_CONFIG.PRIVACY,JSON.stringify(e))):Object(u.q)("cmpApi: Cannot store privacy if it is not an object: ",e)}catch(e){Object(u.p)(e)}}}])&&r(e.prototype,t),n&&r(e,n),l}()},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return a});var o="_exp",a=function(){function n(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),i(this,"available",!1),i(this,"win",void 0),i(this,"writingEnabled",void 0),this.win=e,this.writingEnabled=t;t="__id5test";try{this.writingEnabled&&this.win.localStorage.setItem(t,t),this.win.localStorage.removeItem(t),this.available=!0}catch(e){}}var e,t,a;return e=n,(t=[{key:"isAvailable",value:function(){return this.available}},{key:"getItem",value:function(e){if(this.available)return this.win.localStorage.getItem(e)}},{key:"setItem",value:function(e,t){this.available&&this.writingEnabled&&this.win.localStorage.setItem(e,t)}},{key:"removeItem",value:function(e){this.available&&this.win.localStorage.removeItem(e)}},{key:"getItemWithExpiration",value:function(e){var t=e.name,e=this.getItem(t+o);return!e||new Date(e).getTime()-Date.now()<=0?(this.removeItemWithExpiration({name:t}),null):this.getItem(t)}},{key:"setItemWithExpiration",value:function(e,t){var n=e.name,e=e.expiresDays,e=Date.now()+864e5*e,e=new Date(e).toUTCString();this.setItem(n+o,e),this.setItem(n,t)}},{key:"removeItemWithExpiration",value:function(e){e=e.name;this.removeItem(e),this.removeItem(e+o)}}])&&r(e.prototype,t),a&&r(e,a),n}()},function(e,t,n){"use strict";n.d(t,"a",function(){return i});var s=n(0);function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function c(e){if(!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),r(this,"options",void 0),r(this,"providedOptions",void 0),r(this,"invalidSegments",void 0),this.options={debugBypassConsent:!1,allowLocalStorageWithoutConsentApi:!1,cmpApi:"iab",consentData:{getConsentData:{consentData:void 0,gdprApplies:void 0},getVendorConsents:{}},refreshInSeconds:7200,partnerId:void 0,partnerUserId:void 0,callbackOnAvailable:void 0,callbackOnUpdates:void 0,callbackTimeoutInMs:void 0,pd:void 0,abTesting:{enabled:!1,controlGroupPct:0},provider:void 0,maxCascades:8,applyCreativeRestrictions:!1,segments:void 0},this.providedOptions={},!e.partnerId||"number"!=typeof e.partnerId)throw new Error("partnerId is required and must be a number");this.invalidSegments=0,this.updOptions(e)}var e,t,n;return e=c,(t=[{key:"getOptions",value:function(){return this.options}},{key:"getProvidedOptions",value:function(){return this.providedOptions}},{key:"getInvalidSegments",value:function(){return this.invalidSegments}},{key:"updOptions",value:function(r){var n=this,i=this;if(Object(s.n)(r)){if(Object(s.m)(this.options.partnerId)&&Object(s.m)(r.partnerId)&&r.partnerId!==this.options.partnerId)throw new Error("Cannot update config with a different partnerId");var o=function(e,t){n.options[e]=t,n.providedOptions[e]=t};Object.keys(r).forEach(function(e){var n,t,a;"segments"===e?(a=r[e],n=[],Object(s.h)(a)?(a.forEach(function(e,t){t="segments[".concat(t,"]");return Object(s.h)(e.ids)&&Object(s.b)(e.ids,s.o)?e.ids.length<1?(Object(s.p)("Config option ".concat(t,".ids should contain at least one segment ID")),void(i.invalidSegments+=1)):Object(s.o)(e.destination)?void n.push(e):(l("".concat(t,".destination"),"String",e.destination),void(i.invalidSegments+=1)):(l("".concat(t,".ids"),"Array of String",e.ids),void(i.invalidSegments+=1))}),o(e,n)):l(e,"Array",a)):(t=c.configTypes[e],a=r[e],Object(s.g)(a,t)?o(e,a):l(e,t,a))})}else Object(s.p)("Config options must be an object")}}])&&a(e.prototype,t),n&&a(e,n),c}();function l(e,t,n){Object(s.p)("Config option ".concat(e," must be of type ").concat(t," but was ").concat(toString.call(n),". Ignoring..."))}r(i,"configTypes",{debugBypassConsent:"Boolean",allowLocalStorageWithoutConsentApi:"Boolean",cmpApi:"String",consentData:"Object",refreshInSeconds:"Number",partnerId:"Number",partnerUserId:"String",callbackOnAvailable:"Function",callbackOnUpdates:"Function",callbackTimeoutInMs:"Number",pd:"String",abTesting:"Object",provider:"String",maxCascades:"Number",applyCreativeRestrictions:"Boolean"})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n=n(7);window.ID5||(window.ID5=n.a)},function(e,t,n){"use strict";var v=n(0),r=n(8),c=n(2),s=n(3),l=n(9),i=n(10),u=n(4),d=n(5);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var a,r,i=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"loaded",!1),p(this,"_isUsingCdn",!1),p(this,"_referer",!1),p(this,"_version",i.a),p(this,"versions",{}),this.loaded=!0,this._isUsingCdn=!!(document&&document.currentScript&&document.currentScript.src&&0===document.currentScript.src.indexOf("https://cdn.id5-sync.com")),this._referer=Object(r.a)(),this.versions[i.a]=!0}var t,n,a;return t=e,(n=[{key:"debug",get:function(){return Object(v.l)()},set:function(e){Object(v.t)(e)}},{key:"init",value:function(e){try{Object(v.q)("Invoking Id5Api.init",arguments);var t=new d.a(e),n=t.getOptions(),a=new u.a(window.top,!n.applyCreativeRestrictions),r=new s.a(a),i=new c.a(function(){return r.isLocalStorageAllowed(n.allowLocalStorageWithoutConsentApi,n.debugBypassConsent)},a),o=new l.a(t,i,r);return this.getId(o,!1),Object(v.q)("ID5 initialized for partner ".concat(n.partnerId," with referer ").concat(this._referer.referer," and options"),e),o}catch(e){Object(v.p)("Exception caught from Id5Api.init",e)}}},{key:"refreshId",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(!Object(v.i)(t))throw new Error("Invalid signature for Id5Api.refreshId: second parameter must be a boolean");try{Object(v.q)("Invoking Id5Api.refreshId",arguments),e.startRefresh(t),e.updateOptions(n),e.consentManagement.resetConsentData(),this.getId(e,t)}catch(e){Object(v.p)("Exception caught from Id5Api.refreshId",e)}return e}},{key:"getId",value:function(o){var c,e,s=this,l=1<arguments.length&&void 0!==arguments[1]&&arguments[1],u=o.getOptions(),d=0,p=!1,f=!1,h=!1;o.localStorageAllowed()&&(c=o.clientStore.getResponse(),e=o.clientStore.getDateTime(),p=e<=0||Date.now()-e>1e3*u.refreshInSeconds,d=o.clientStore.getNb(u.partnerId),f=!o.clientStore.storedPdMatchesPd(u.partnerId,u.pd)),c||(c=o.clientStore.getResponseFromLegacyCookie(),p=!0),c&&c.universal_uid&&!f?(o.setUserId(c,!0),d=o.clientStore.incNb(u.partnerId,d),h=!0,Object(v.q)("ID5 User ID available from cache:",{storedResponse:c,storedDateTime:e,refreshNeeded:p})):c&&c.universal_uid&&f?Object(v.q)("PD value has changed, so ignoring User ID from cache"):c&&!c.universal_uid?Object(v.p)("Invalid stored response: ",c):Object(v.q)("No ID5 User ID available from cache"),o.consentManagement.requestConsent(u.debugBypassConsent,u.cmpApi,u.consentData,function(e){var t,r,i,n,a;!1!==o.localStorageAllowed()?(Object(v.q)("Consent to access local storage is: "+o.localStorageAllowed()),c=o.clientStore.getResponse()||o.clientStore.getResponseFromLegacyCookie(),n=!o.clientStore.storedConsentDataMatchesConsentData(e),o.clientStore.putHashedConsentData(e),o.clientStore.putHashedPd(u.partnerId,u.pd),c&&c.universal_uid&&c.signature&&!p&&!n&&!f&&!l||(t="https://id5-sync.com/g/v2/".concat(u.partnerId,".json"),r=e&&e.gdprApplies?1:0,i=e&&e.gdprApplies?e.consentString:void 0,n=c&&c.signature?c.signature:void 0,a={partner:u.partnerId,v:s._version,o:"api",gdpr:r,rf:s._referer.referer,u:s._referer.stack[0]||window.location.href,top:s._referer.reachedTop?1:0,localStorage:o.clientStore.isLocalStorageAvailable()?1:0,nbPage:d,id5cdn:s._isUsingCdn},Object(v.j)(i)&&(a.gdpr_consent=i),Object(v.j)(n)&&(a.s=n),e&&e.hasCcpaString&&(a.us_privacy=e.ccpaString),Object.entries({pd:"pd",partnerUserId:"puid",provider:"provider",segments:"segments"}).forEach(function(e){var t=b(e,2),e=t[0],t=t[1];Object(v.j)(u[e])&&(a[t]=u[e])}),!0===u.abTesting.enabled&&(a.ab_testing={enabled:!0,control_group_pct:o.getOptions().abTesting.controlGroupPct}),0<o.getInvalidSegments()&&(a._invalid_segments=o.getInvalidSegments()),Object(v.q)("Fetching ID5 user ID from:",t,a),l&&Object(v.q)("...with Force Fetch"),Object(v.a)(t,{success:function(e){if(Object(v.q)("Response from ID5 received:",e),e)try{var t,n,a=JSON.parse(e);Object(v.q)("Valid json response from ID5 received:",a),Object(v.o)(a.universal_uid)?(o.setUserId(a,!1),o.consentManagement.setStoredPrivacy(a.privacy),!0!==o.localStorageAllowed()&&Object(v.j)(a.privacy)?o.clientStore.clearAll(u.partnerId):(o.clientStore.putResponse(e),o.clientStore.setDateTime((new Date).toUTCString()),o.clientStore.setNb(u.partnerId,h?0:1)),o.clientStore.removeLegacyCookies(u.partnerId),!0===a.cascade_needed&&!0===o.localStorageAllowed()&&0<=u.maxCascades&&!u.applyCreativeRestrictions&&(t=u.partnerUserId&&0<u.partnerUserId.length,n="https://id5-sync.com/".concat(t?"s":"i","/").concat(u.partnerId,"/").concat(u.maxCascades,".gif?id5id=").concat(o._userId,"&o=api&").concat(t?"puid="+u.partnerUserId+"&":"","gdpr_consent=").concat(i,"&gdpr=").concat(r),Object(v.q)("Opportunities to cascade available:",n),Object(v.d)(n))):Object(v.p)("Invalid response from ID5 servers:",e)}catch(e){Object(v.p)(e)}else Object(v.p)("Empty response from ID5 servers:",e)},error:function(e){Object(v.p)(e)}},JSON.stringify(a),{method:"POST",withCredentials:!0}))):Object(v.q)("No legal basis to use ID5",e)})}}])&&o(t.prototype,n),a&&o(t,a),e}());t.a=n},function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,a=arguments[t];for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}n.d(t,"a",function(){return a});var i,a=(i=window,function(){try{var e,t=o(),n=t.length-1,a=null!==t[n].location||0<n&&null!==t[n-1].referrer,r=function(e){for(var t,n=[],a=null,r=null,i=null,o=null,c=null,s=e.length-1;0<=s;s--){try{r=e[s].location}catch(e){}if(r)n.push(r),c=c||r;else if(0!==s){t=e[s-1];try{i=t.referrer,o=t.ancestor}catch(e){}i?(n.push(i),c=c||i):o?(n.push(o),c=c||o):n.push(a)}else n.push(a)}return{stack:n,detectedRefererUrl:c}}(t);return t[t.length-1].canonicalUrl&&(e=t[t.length-1].canonicalUrl),{referer:r.detectedRefererUrl,reachedTop:a,numIframes:n,stack:r.stack,canonicalUrl:e}}catch(e){}});function o(){var e=function(){var t,n=[];do{try{t=t?t.parent:i;try{var e=t===i.top,a={referrer:t.document.referrer||null,location:t.location.href||null,isTop:e};e&&(a=r(a,{canonicalUrl:function(e){try{var t=e.querySelector("link[rel='canonical']");if(null!==t)return t.href}catch(e){}return null}(t.document)})),n.push(a)}catch(e){n.push({referrer:null,location:null,isTop:t===i.top})}}catch(e){return n.push({referrer:null,location:null,isTop:!1}),n}}while(t!==i.top);return n}(),t=function(){try{return i.location.ancestorOrigins?i.location.ancestorOrigins:void 0}catch(e){}}();if(t)for(var n=0,a=t.length;n<a;n++)e[n].ancestor=t[n];return e}},function(e,t,n){"use strict";n.d(t,"a",function(){return i});var t=n(1),a=n.n(t),o=n(0);n(5),n(2),n(3);function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function i(e,t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),c(this,"_availableCallbackTimerId",void 0),c(this,"_availableCallbackFired",!1),c(this,"_availableCallback",void 0),c(this,"_updateCallback",void 0),c(this,"_refreshCallbackTimerId",void 0),c(this,"_refreshCallbackFired",!1),c(this,"_refreshCallback",void 0),c(this,"_isExposed",void 0),c(this,"_fromCache",void 0),c(this,"_isRefreshing",!1),c(this,"_isRefreshingWithFetch",!1),c(this,"_userId",void 0),c(this,"_linkType",void 0),c(this,"_userIdAvailable",!1),c(this,"config",void 0),c(this,"clientStore",void 0),c(this,"consentManagement",void 0),this.config=e,this.clientStore=t,this.consentManagement=n}var e,t,n;return e=i,n=[{key:"doFireOnAvailableCallBack",value:function(e){o.q("Id5Status.doFireOnAvailableCallBack"),e._availableCallbackFired=!0,e._availableCallbackTimerId=void 0,e._availableCallback(e)}},{key:"doFireOnUpdateCallBack",value:function(e){o.q("Id5Status.doFireOnUpdateCallBack"),e._updateCallback(e)}},{key:"doFireOnRefreshCallBack",value:function(e){o.q("Id5Status.doFireOnRefreshCallBack"),e._refreshCallbackFired=!0,e._refreshCallbackTimerId=void 0,e._isRefreshing=!1,e._isRefreshingWithFetch=!1,e._refreshCallback(e)}}],(t=[{key:"getOptions",value:function(){return this.config.getOptions()}},{key:"getInvalidSegments",value:function(){return this.config.getInvalidSegments()}},{key:"updateOptions",value:function(e){return this.config.updOptions(e)}},{key:"startRefresh",value:function(e){this._isRefreshing=!0,this._isRefreshingWithFetch=e}},{key:"setUserId",value:function(e,t){var n=this,a=e.universal_uid,r=e.link_type||0;if(this._isExposed=!0,o.n(e.ab_testing))switch(e.ab_testing.result){case"normal":break;default:case"error":o.p("There was an error with A/B Testing. Make sure controlGroupRatio is a number >= 0 and <= 1");break;case"control":this._isExposed=!1,o.q("User is in control group!")}e=this._userId!==a||this._linkType!==r;this._userIdAvailable=!0,this._userId=a,this._linkType=r,this._fromCache=t,o.q("Id5Status.setUserId: user id updated, hasChanged: ".concat(e)),o.k(this._availableCallback)&&!1===this._availableCallbackFired&&(this._availableCallbackTimerId&&(o.q("Cancelling pending onAvailableCallback watchdog"),clearTimeout(this._availableCallbackTimerId),this._availableCallbackTimerId=void 0),this._availableCallbackTimerId=setTimeout(function(){return i.doFireOnAvailableCallBack(n)},0)),this._isRefreshing&&o.k(this._refreshCallback)&&!1===this._refreshCallbackFired&&(!1!==t&&!1!==this._isRefreshingWithFetch||(this._refreshCallbackTimerId&&(o.q("Cancelling pending onRefreshCallback watchdog"),clearTimeout(this._refreshCallbackTimerId),this._refreshCallbackTimerId=void 0),this._refreshCallbackTimerId=setTimeout(function(){return i.doFireOnRefreshCallBack(n)},0))),e&&o.k(this._updateCallback)&&setTimeout(function(){return i.doFireOnUpdateCallBack(n)},0)}},{key:"getUserId",value:function(){return!1===this._isExposed?"0":this._userId}},{key:"getLinkType",value:function(){return!1===this._isExposed?0:this._linkType}},{key:"isFromCache",value:function(){return this._fromCache}},{key:"exposeUserId",value:function(){return this._isExposed}},{key:"getUserIdAsEid",value:function(){return{source:a.a.ID5_EIDS_SOURCE,uids:[{id:this.getUserId(),ext:{linkType:this.getLinkType(),abTestingControlGroup:!this.exposeUserId()}}]}}},{key:"onAvailable",value:function(e,t){if(!o.k(e))throw new Error("onAvailable expect a function");var n;return o.k(this._availableCallback)?o.q("onAvailable was already called, ignoring"):(this._availableCallback=e,(n=this)._userIdAvailable?(o.q("Id5Status.onAvailable: User id already available firing callback immediately"),this._availableCallbackTimerId=setTimeout(function(){return i.doFireOnAvailableCallBack(n)},0)):0<t&&(this._availableCallbackTimerId=setTimeout(function(){return i.doFireOnAvailableCallBack(n)},t))),this}},{key:"onUpdate",value:function(e){if(!o.k(e))throw new Error("onUpdate expect a function");this._updateCallback=e;var t=this;return this._userIdAvailable&&setTimeout(function(){return i.doFireOnUpdateCallBack(t)},0),this}},{key:"onRefresh",value:function(e,t){if(!o.k(e))throw new Error("onRefresh expect a function");this._refreshCallbackTimerId&&(clearTimeout(this._refreshCallbackTimerId),this._refreshCallbackTimerId=void 0),this._refreshCallback=e;var n=this;return!0===this._isRefreshing&&!1===this._isRefreshingWithFetch&&this._userIdAvailable?this._refreshCallbackTimerId=setTimeout(function(){return i.doFireOnRefreshCallBack(n)},0):0<t&&(this._refreshCallbackTimerId=setTimeout(function(){return i.doFireOnRefreshCallBack(n)},t)),this}},{key:"localStorageAllowed",value:function(){return this.clientStore.localStorageAllowed()}}])&&r(e.prototype,t),n&&r(e,n),i}()},function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a="1.0.10"}]);