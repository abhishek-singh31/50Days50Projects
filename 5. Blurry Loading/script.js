let backgroundImage=document.querySelector(".container");
let number=document.querySelector(".num");
let counter=document.querySelector(".counter");
let curr=0;
let opa=1;
let run=setInterval(progress,20);
function progress(){
    if(curr==101){
        clearInterval(run);
    }
    else{
        backgroundImage.style.filter="blur("+(100-curr)+"px)";
        counter.style.opacity=opa+"";
        opa=opa-0.01;
        number.innerHTML=curr++;
    }
}