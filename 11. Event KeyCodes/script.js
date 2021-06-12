let eventKey=document.getElementsByClassName("para")[1];
let eventKeyCode=document.getElementsByClassName("para")[2];
let eventCode=document.getElementsByClassName("para")[3];
window.addEventListener("keyup",function(event){
    document.querySelector(".para").classList.add("hide");
    document.querySelector(".child").classList.add("show");
    eventKey.innerHTML=event.key;
    if(event.key==" "){
        eventKey.innerHTML=event.code;
    }
    eventKeyCode.innerHTML=event.keyCode;
    eventCode.innerHTML=event.code;
});