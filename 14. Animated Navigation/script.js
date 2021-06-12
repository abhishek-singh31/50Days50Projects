const btn=document.querySelector("button");
const nav=document.querySelector(".nav-bar");
btn.addEventListener("click",() =>{
  nav.classList.toggle("active");
})