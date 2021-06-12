const info=document.querySelectorAll(".info");
const faq=document.querySelectorAll(".faq");
const buttons=document.querySelectorAll("i");
function expand(idx){
    info[idx].classList.toggle("show");
    faq[idx].classList.toggle("white-faq");
    if(buttons[idx].classList.contains("fa-chevron-down")){
        buttons[idx].classList.remove("fa-chevron-down");
        buttons[idx].classList.add("fa-times");
    }
    else{
        buttons[idx].classList.add("fa-chevron-down");
        buttons[idx].classList.remove("fa-times");
    }
}