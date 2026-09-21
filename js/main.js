// INTRO

setTimeout(()=>{
const intro=document.getElementById("intro");
if(intro){
intro.style.transition=".8s";
intro.style.opacity="0";
setTimeout(()=>intro.remove(),800);
}
},2200);

// MENU

const menu=document.getElementById("menu");

openMenu.onclick=()=>menu.classList.add("show");
closeMenu.onclick=()=>menu.classList.remove("show");

// BRASAS

const embers=document.getElementById("embers");

if(embers){

for(let i=0;i<35;i++){

const e=document.createElement("span");

e.style.left=Math.random()*100+"%";
e.style.animationDuration=(3+Math.random()*4)+"s";
e.style.animationDelay=Math.random()*4+"s";

embers.appendChild(e);

}

}

// CHUVA

const rain=document.getElementById("rain");

if(rain){

for(let i=0;i<90;i++){

const d=document.createElement("span");

d.className="drop";

d.style.left=Math.random()*100+"%";
d.style.animationDuration=(.8+Math.random()*.7)+"s";
d.style.animationDelay=Math.random()*2+"s";

rain.appendChild(d);

}

}

// BANNER

const slides=document.querySelectorAll(".slide");

let atual=0;

setInterval(()=>{

slides[atual].classList.remove("active");

atual=(atual+1)%slides.length;

slides[atual].classList.add("active");

},4000);

// BÚSSOLA

let clicks=0;

compass.onclick=()=>{

clicks++;

if(clicks>=5){

window.location.href="ilha.html";

}

};
