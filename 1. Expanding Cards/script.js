let currentActive=0;
function expand(num){
    let selectedCard=document.querySelectorAll(".item")[num];
    let selectedText=document.querySelectorAll("span")[num];
    if(selectedCard.classList.length!=3){
        document.querySelectorAll(".item")[currentActive].classList.remove("active");
        selectedCard.classList.add("active");
        document.querySelectorAll("span")[currentActive].classList.remove("visible");
        selectedText.classList.add("visible");
        currentActive=num;
    }
    else{
        currentActive=num;
    }
}