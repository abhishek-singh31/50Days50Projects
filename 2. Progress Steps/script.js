let currentBar=0;
let currentNum=1;
let prevButton=document.querySelectorAll("button")[0];
let nextButton=document.querySelectorAll("button")[1];
let selectedBar=document.querySelectorAll(".bar");
let selectedNum=document.querySelectorAll(".num");
function nextClicked(){
    if(prevButton.disabled===true){
        prevButton.disabled=false;
        prevButton.classList.remove("disabled-btn");
        prevButton.classList.add("active-btn");
    }
    selectedBar[currentBar++].classList.add("filled-bar");
    selectedNum[currentNum++].classList.add("active");
    if(currentBar==3){
        nextButton.classList.remove("active-btn");
        nextButton.classList.add("disabled-btn");
        nextButton.disabled=true;
    }
}

function prevClicked(){
    if(nextButton.disabled===true){
        nextButton.disabled=false;
        nextButton.classList.remove("disabled-btn");
        nextButton.classList.add("active-btn");
    }
    selectedNum[currentNum-1].classList.remove("active");
    selectedBar[currentBar-1].classList.remove("filled-bar");
    currentBar--;
    currentNum--;
    if(currentBar==0){
        prevButton.classList.remove("active-btn");
        prevButton.classList.add("disabled-btn");
        prevButton.disabled=true;
    }
}