// ===== INTRO =====

window.onload=()=>{

setTimeout(()=>{

const intro=document.getElementById("intro");

if(intro) intro.classList.add("hide");

},2200);

};

// ===== BRASAS =====

const embers=document.getElementById("embers");

if(embers){

for(let i=0;i<40;i++){

const e=document.createElement("span");

e.style.left=Math.random()*100+"%";

e.style.animationDuration=(3+Math.random()*4)+"s";

e.style.animationDelay=Math.random()*4+"s";

embers.appendChild(e);

}

}

// ===== RELÂMPAGO =====

const flash=document.querySelector(".flash");

setInterval(()=>{

if(!flash) return;

flash.style.opacity=Math.random()*0.6+0.2;

},700);

// ===== MENU =====

const menu=document.getElementById("menu");

const open=document.getElementById("openMenu");

const close=document.getElementById("closeMenu");

if(open){

open.onclick=()=>menu.classList.add("show");

}

if(close){

close.onclick=()=>menu.classList.remove("show");

}

// ===== BÚSSOLA =====

let clicks=0;

const compass=document.getElementById("compass");

if(compass){

compass.onclick=()=>{

clicks++;

if(clicks>=5){

window.location.href="ilha.html";

}

};

}
