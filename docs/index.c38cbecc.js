function e(e,t,s,i){Object.defineProperty(e,t,{get:s,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},n=s.parcelRequire4b80;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var s={id:e,exports:{}};return i[e]=s,t.call(s.exports,s,s.exports),s.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},s.parcelRequire4b80=n),n.register("bXuNP",(function(t,s){var i,r;e(t.exports,"register",(()=>i),(e=>i=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var n={};i=function(e){for(var t=Object.keys(e),s=0;s<t.length;s++)n[t[s]]=e[t[s]]},r=function(e){var t=n[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),n("bXuNP").register(JSON.parse('{"bparW":"index.c38cbecc.js","lkOGK":"puzzle1.9bde11af.png","a1AoH":"puzzle2.c4f28512.jpeg","rCnLT":"puzzle3.1d9a0bb7.png","hZsin":"puzzle4.8cf7f628.png","e2Xqw":"puzzle5.8665d590.png"}'));var a;n.register("kPq84",(function(t,s){var i;e(t.exports,"getBundleURL",(()=>i),(e=>i=e));var r={};function n(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return n(e[2])}return"/"}(),r[e]=t),t}})),a=n("kPq84").getBundleURL("bparW")+n("bXuNP").resolve("lkOGK");var l;l=n("kPq84").getBundleURL("bparW")+n("bXuNP").resolve("a1AoH");var u;u=n("kPq84").getBundleURL("bparW")+n("bXuNP").resolve("rCnLT");var o;o=n("kPq84").getBundleURL("bparW")+n("bXuNP").resolve("hZsin");var d;d=n("kPq84").getBundleURL("bparW")+n("bXuNP").resolve("e2Xqw");const p=[{image:t(a),answer:"блокчейн"},{image:t(l),answer:"джуниор девелопер"},{image:t(u),answer:"туториал"},{image:t(o),answer:"хакатон"},{image:t(d),answer:"фронтенд"}];(new class{constructor(){this.rebuses=[],this.rebusImage=null,this.form=null,this.variantInput=null,this.step=0,this.isValidAnswer=!1}init(e){const t=document.getElementById("rebus-image"),s=document.getElementById("quest-form"),i=document.getElementById("variant-field");this.rebuses=e,this.rebusImage=t,this.form=s,this.variantInput=i,this.subscribeOnFormChange(),this.start()}start(){console.log("quest is started",this.rebuses)}subscribeOnFormChange(){this.form&&this.form.addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(e.target).fd.get("variant");this.variantInput&&(this.validateAnswerField(t),this.isValidAnswer&&(this.nextStep(),setTimeout((()=>this.resetValidation(this.variantInput)),1e3)))}))}validateAnswerField(e){e!==this.rebuses[this.step].answer?(this.variantInput.classList.remove("is-valid"),this.variantInput.classList.add("is-invalid"),this.isValidAnswer=!1):(this.variantInput.classList.remove("is-invalid"),this.variantInput.classList.add("is-valid"),this.isValidAnswer=!0)}nextStep(){this.isLastStep()||(this.step+=1,this.nextRebus())}nextRebus(){this.isLastStep()||(this.rebusImage.src=this.rebuses[this.step].image)}isLastStep(){return this.step===this.rebuses.length}resetValidation(e){e&&(e.classList.remove("is-valid"),e.classList.remove("is-invalid"),this.isValidAnswer=!1)}}).init(p);
//# sourceMappingURL=index.c38cbecc.js.map