function e(e,t,s,i){Object.defineProperty(e,t,{get:s,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},r=s.parcelRequire4b80;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return i[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},s.parcelRequire4b80=r),r.register("bXuNP",(function(t,s){var i,n;e(t.exports,"register",(()=>i),(e=>i=e)),e(t.exports,"resolve",(()=>n),(e=>n=e));var r={};i=function(e){for(var t=Object.keys(e),s=0;s<t.length;s++)r[t[s]]=e[t[s]]},n=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("bXuNP").register(JSON.parse('{"da2qu":"index.43f27c51.js","jIWQh":"puzzle1.9bde11af.png","94eVO":"puzzle2.c4f28512.jpeg","9vvgT":"puzzle3.1d9a0bb7.png","9ohf7":"puzzle4.8cf7f628.png","f2dyO":"puzzle5.8665d590.png","b43Qm":"success.ea74ed94.png"}'));var a;r.register("kPq84",(function(t,s){var i;e(t.exports,"getBundleURL",(()=>i),(e=>i=e));var n={};function r(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var t=n[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),n[e]=t),t}})),a=r("kPq84").getBundleURL("da2qu")+r("bXuNP").resolve("jIWQh");var u;u=r("kPq84").getBundleURL("da2qu")+r("bXuNP").resolve("94eVO");var d;d=r("kPq84").getBundleURL("da2qu")+r("bXuNP").resolve("9vvgT");var l;l=r("kPq84").getBundleURL("da2qu")+r("bXuNP").resolve("9ohf7");var o;o=r("kPq84").getBundleURL("da2qu")+r("bXuNP").resolve("f2dyO");const c=[{image:t(a),answer:"блокчейн"},{image:t(u),answer:"джуниор девелопер"},{image:t(d),answer:"туториал"},{image:t(l),answer:"хакатон"},{image:t(o),answer:"фронтенд"}];class h{constructor(){this.ticker=null,this.timeInSecs=0,this.callback=void 0,this.countdownendEvent=new CustomEvent("countdownend")}start(e,t){this.callback=t,this.timeInSecs=parseInt(e),this.ticker=setInterval((()=>this.tick()),1e3)}tick(){let e=this.timeInSecs;e>0?this.timeInSecs--:(document.dispatchEvent(this.countdownendEvent),this.stop());const t=Math.floor(e/60);e%=60;const s=(t<10?"0":"")+t+":"+(e<10?"0":"")+e;this.callback&&this.callback(s)}stop(){clearInterval(this.ticker)}}var p;p=r("kPq84").getBundleURL("da2qu")+r("bXuNP").resolve("b43Qm");(new class{constructor(){this.startButton=null,this.countdown=null,this.questWrapper=null,this.rebuses=[],this.rebusImage=null,this.form=null,this.variantInput=null,this.answersWrapper=null,this.wastedWrapper=null,this.successWrapper=null,this.step=0,this.isValidAnswer=!1,this.timer=new h}init(e){const t=document.getElementById("start-btn"),s=document.getElementById("countdown"),i=document.getElementById("quest"),n=document.getElementById("rebus-image"),r=document.getElementById("quest-form"),a=document.getElementById("variant-field"),u=document.getElementById("answers"),d=document.getElementById("wasted"),l=document.getElementById("success");this.startButton=t,this.countdown=s,this.questWrapper=i,this.rebuses=e,this.rebusImage=n,this.form=r,this.variantInput=a,this.answersWrapper=u,this.wastedWrapper=d,this.successWrapper=l,this.start()}start(){this.subscribeStartButton(),this.subscribeOnFormChange(),this.subscribeTimeEnd()}subscribeTimeEnd(){document.addEventListener("countdownend",(()=>{this.hideQuest(),this.wastedWrapper.classList.remove("invisible")}))}subscribeStartButton(){if(!this.startButton)return null;this.startButton.addEventListener("click",(e=>{e.target.remove(),this.showQuest(),this.timer.start(120,(e=>this.timerHandler(e)))}))}timerHandler(e){this.countdown&&(this.countdown.textContent=e)}subscribeOnFormChange(){this.form&&this.form.addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(e.target).fd.get("variant");this.variantInput&&(this.validateAnswerField(t),this.isValidAnswer&&(this.nextStep(),setTimeout((()=>this.resetValidation(this.variantInput)),1e3)))}))}validateAnswerField(e){e!==this.rebuses[this.step].answer?(this.variantInput.classList.remove("is-valid"),this.variantInput.classList.add("is-invalid"),this.isValidAnswer=!1):(this.variantInput.classList.remove("is-invalid"),this.variantInput.classList.add("is-valid"),this.isValidAnswer=!0)}nextStep(){if(this.displayRightAnswer(),this.variantInput.value="",this.step+=1,this.isLastStep())return this.timer.stop(),this.hideQuest(),void this.showSuccessScreen();this.nextRebus()}nextRebus(){this.isLastStep()||(this.rebusImage.src=this.rebuses[this.step].image)}isLastStep(){return this.step===this.rebuses.length}resetValidation(e){e&&(e.classList.remove("is-valid"),e.classList.remove("is-invalid"),this.isValidAnswer=!1)}displayRightAnswer(){const e=document.createElement("li");e.textContent=this.rebuses[this.step].answer,this.answersWrapper.appendChild(e)}hideQuest(){this.questWrapper.classList.add("invisible")}showQuest(){this.questWrapper.classList.remove("invisible")}showSuccessScreen(){const e=document.createElement("img"),s=document.createElement("h6"),i=document.createElement("mark");e.src=t(p),e.width=760,e.height=230,e.classList.add("img-fluid"),s.textContent="Кодовое слово состоит из следующих букв",s.classList.add("display-6"),i.textContent="И Н П О Т",i.classList.add("badge"),i.classList.add("bg-success"),this.successWrapper.appendChild(e),setTimeout((()=>{e.remove(),this.successWrapper.appendChild(s),this.successWrapper.appendChild(i)}),2e3)}}).init(c);
//# sourceMappingURL=index.43f27c51.js.map
