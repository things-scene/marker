!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=scene},function(e,t,r){e.exports=r(2)},function(e,t,r){"use strict";r.r(t);var n=r(0);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"color",label:"inner-circle-fill-style",name:"innerCircleFillStyle",property:"innerCircleFillStyle"}]},f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,l(t).apply(this,arguments))}var r,o,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(t,n["Rect"]),r=t,(o=[{key:"_draw",value:function(e){var t=this.model,r=t.innerCircleFillStyle,n=t.top,o=t.left,i=t.width,u=t.height;e.translate(o,n),e.beginPath(),e.moveTo(i/2,.9*u),e.bezierCurveTo(i/2.3,.6*u,0,u/2,0,u/4),e.ellipse(i/2,u/4,Math.abs(i/2),Math.abs(u/4),0,Math.PI*(i<0?0:1),Math.PI*(i<0?1:0),Math.sign(i)*Math.sign(u)==-1),e.bezierCurveTo(i,u/2,i/1.7,.6*u,i/2,.9*u),e.closePath(),this.drawFill(e),this.drawStroke(e),e.beginPath(),e.ellipse(i/2,u/4,Math.abs(.18*i),Math.abs(.09*u),0,0,2*Math.PI),e.fillStyle=r,e.fill(),e.translate(-o,-n)}},{key:"_post_draw",value:function(e){this.drawText(e)}},{key:"controls",get:function(){}},{key:"nature",get:function(){return c}}])&&i(r.prototype,o),f&&i(r,f),t}();n.Component.register("marker",f),r.d(t,"Marker",function(){return f})}]);
//# sourceMappingURL=things-scene-marker-ie.js.map