import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t=document.querySelector(".feedback-form");function o(e){const a={},s=e.currentTarget.email.value.trim(),m=e.currentTarget.message.value.trim();a.email=s,a.message=m,localStorage.setItem("feedback-form-state",JSON.stringify(a))}if(localStorage.getItem("feedback-form-state")){const e=JSON.parse(localStorage.getItem("feedback-form-state"));t.email.value=e.email,t.message.value=e.message}t.addEventListener("input",o);function r(e){e.preventDefault();const a=t.email.value.trim(),s=t.message.value.trim();a!==""&&s!==""&&(console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),t.reset())}t.addEventListener("submit",r);
//# sourceMappingURL=commonHelpers2.js.map