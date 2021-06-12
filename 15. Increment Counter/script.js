const twitter=document.querySelector(".twitter");
const youtube=document.querySelector(".youtube");
const facebook=document.querySelector(".facebook");

let counter=setInterval(run,20);

function run(){
  if(twitter.innerHTML==12000){
    clearInterval(counter);
  }
  else{
    twitter.innerHTML=+twitter.innerHTML+240;
    youtube.innerHTML=Math.floor(+youtube.innerHTML+100);
    facebook.innerHTML=+facebook.innerHTML+150;
  }
}