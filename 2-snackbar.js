import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as s}from"./assets/vendor-njWUcVeN.js";const o=document.querySelector(".form");o.addEventListener("submit",n);function n(i){i.preventDefault();const t=Number(o.delay.value),r=o.state.value;new Promise((e,m)=>{setTimeout(()=>{r==="fulfilled"?e(t):m(t)},t)}).then(e=>{s.show({message:`Fulfilled promise in ${e}ms`,color:"green",position:"topCenter",timeout:`${e}`})}).catch(e=>{s.show({message:`Rejected promise in ${e}ms`,color:"red",position:"topCenter",timeout:`${e}`})})}
//# sourceMappingURL=2-snackbar.js.map
