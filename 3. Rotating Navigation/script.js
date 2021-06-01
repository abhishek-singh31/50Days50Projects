let openButton=document.getElementById("open");
let closeButton=document.getElementById("close");
let container=document.getElementsByClassName("container")[0];

openButton.addEventListener("click",function(){
    container.classList.add("show-nav");
})

closeButton.addEventListener("click",function(){
    container.classList.remove("show-nav");
})
