!function(){var e={81:function(e,t,r){var n={"./icon-star.svg":907,"./icon-trustpilot.svg":180};function o(e){var t=c(e);return r(t)}function c(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=c,e.exports=o,o.id=81},907:function(e,t,r){"use strict";e.exports=r.p+"svg/icon-star.8a8e00c1.svg"},180:function(e,t,r){"use strict";e.exports=r.p+"svg/icon-trustpilot.1d3ddcc0.svg"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,r),c.exports}r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",function(){"use strict";var e;(e=r(81)).keys().forEach(e),document.addEventListener("DOMContentLoaded",(function(){!function(e,t,r){var n=new Date;function o(e){var t=function(e){return String(e).padStart(2,"0")},r=t(e.getHours()),n=t(e.getMinutes()),o=t(e.getSeconds());return"".concat(r,":").concat(n,":").concat(o)}n.setHours(4,51,16),document.querySelector(".offer__label-count").textContent=o(n);var c=setInterval((function(){n.setSeconds(n.getSeconds()-1),document.querySelector(".offer__label-count").textContent=o(n),0===n.getSeconds()&&0===n.getMinutes()&&0===n.getHours()&&clearInterval(c)}),1e3)}()}));var t=document.querySelector(".carousel__preview-list");t.addEventListener("click",(function(e){var r,n=e.target.closest(".carousel__preview-item");if(n){var o=t.querySelector(".carousel__preview-item_active");n!==o&&(o.classList.remove("carousel__preview-item_active"),n.classList.add("carousel__preview-item_active"),r=n,t.querySelectorAll(".carousel__preview-item").forEach((function(e,t){e===r&&(document.querySelector(".carousel__list").style.transform="translateX(".concat(100*-t,"%)"))})))}})),document.querySelector(".product__order-button").addEventListener("click",(function(e){e.preventDefault(),window.open("https://www.youtube.com/","_blank")}))}()}();