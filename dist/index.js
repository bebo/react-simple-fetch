!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactSimpleFetch=t(require("react")):e.ReactSimpleFetch=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=r(3),f=n(p);r(2);var l=r(1),h=n(l),c=!1,d=function(e){function t(){i(this,t);var e=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e.renderChild=e.renderChild.bind(e),e}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;c=!0;var t=this.props,r=t.url,n=t.path,o=t.forceHttps,i="";o&&(i=r.replace("http://","https://")),fetch(i).then(function(e){return e.json()}).then(function(t){if(c){var r=null;r=n&&n.length?(0,h["default"])(t,n):t,e.setState({data:r})}})}},{key:"componentWillUnmount",value:function(){c=!1}},{key:"mapChildren",value:function(e,t,r){return t.map(function(t,n){return f["default"].cloneElement(e,Object.assign({},e.props,o({key:n},r,t)))})}},{key:"renderChild",value:function(e,t,r){return f["default"].cloneElement(e,Object.assign({},e.props,o({},r,t)))}},{key:"render",value:function(){var e=this.state.data,t=this.props,r=t.children,n=t.mapResponse,o=t.as,i=t.loader;return e?n===!0?f["default"].createElement("div",null,this.mapChildren(r,e,o)):"auto"===n&&Array.isArray(e)?f["default"].createElement("div",null,this.mapChildren(r,e,o)):this.renderChild(r,e,o):i&&i.props?i:null}}]),t}(f["default"].Component);d.displayName="SimpleFetch",d.propTypes={children:f["default"].PropTypes.any.isRequired,url:f["default"].PropTypes.string.isRequired,forceHttps:f["default"].PropTypes.bool,path:f["default"].PropTypes.string,mapResponse:f["default"].PropTypes.any,as:f["default"].PropTypes.string,loader:f["default"].PropTypes.element},d.defaultProps={forceHttps:!0,path:"",mapResponse:"auto",as:"fetched"},t["default"]=d},function(e,t){"use strict";var r=function(e,t){"string"==typeof t&&(t=t.split(".")),"array"==typeof t&&(t=t);for(var r=0;r<t.length;r++){if(/\[[0-9]]/.test(t[r])){var n=t[r].split("[");e=e[n[0]][parseInt(n[1],10)]}else e=e[t[r]];if(!e)return!1}return e};e.exports=r},function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return y.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function s(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function a(e){var t=new FileReader;return t.readAsArrayBuffer(e),s(t)}function u(e){var t=new FileReader;return t.readAsText(e),s(t)}function p(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,"string"==typeof e)this._bodyText=e;else if(y.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(y.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(y.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(e){if(!y.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):y.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},y.blob?(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(a)},this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var e=i(this);return e?e:Promise.resolve(this._bodyText)},y.formData&&(this.formData=function(){return this.text().then(h)}),this.json=function(){return this.text().then(JSON.parse)},this}function f(e){var t=e.toUpperCase();return b.indexOf(t)>-1?t:e}function l(e,t){t=t||{};var r=t.body;if(l.prototype.isPrototypeOf(e)){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,r||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=e;if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=f(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function h(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function c(e){var t=new o,r=(e.getAllResponseHeaders()||"").trim().split("\n");return r.forEach(function(e){var r=e.trim().split(":"),n=r.shift().trim(),o=r.join(":").trim();t.append(n,o)}),t}function d(e,t){t||(t={}),this.type="default",this.status=t.status,this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText,this.headers=t.headers instanceof o?t.headers:new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var y={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};o.prototype.append=function(e,n){e=t(e),n=r(n);var o=this.map[e];o||(o=[],this.map[e]=o),o.push(n)},o.prototype["delete"]=function(e){delete this.map[t(e)]},o.prototype.get=function(e){var r=this.map[t(e)];return r?r[0]:null},o.prototype.getAll=function(e){return this.map[t(e)]||[]},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,n){this.map[t(e)]=[r(n)]},o.prototype.forEach=function(e,t){Object.getOwnPropertyNames(this.map).forEach(function(r){this.map[r].forEach(function(n){e.call(t,n,r,this)},this)},this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},y.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];l.prototype.clone=function(){return new l(this)},p.call(l.prototype),p.call(d.prototype),d.prototype.clone=function(){return new d(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},d.error=function(){var e=new d(null,{status:0,statusText:""});return e.type="error",e};var m=[301,302,303,307,308];d.redirect=function(e,t){if(m.indexOf(t)===-1)throw new RangeError("Invalid status code");return new d(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=l,e.Response=d,e.fetch=function(e,t){return new Promise(function(r,n){function o(){return"responseURL"in s?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):void 0}var i;i=l.prototype.isPrototypeOf(e)&&!t?e:new l(e,t);var s=new XMLHttpRequest;s.onload=function(){var e={status:s.status,statusText:s.statusText,headers:c(s),url:o()},t="response"in s?s.response:s.responseText;r(new d(t,e))},s.onerror=function(){n(new TypeError("Network request failed"))},s.ontimeout=function(){n(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials&&(s.withCredentials=!0),"responseType"in s&&y.blob&&(s.responseType="blob"),i.headers.forEach(function(e,t){s.setRequestHeader(t,e)}),s.send("undefined"==typeof i._bodyInit?null:i._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},function(t,r){t.exports=e}])});