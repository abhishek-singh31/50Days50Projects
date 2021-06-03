let contentBox=document.querySelectorAll(".child");
window.addEventListener("scroll",function(){
    let withinRange=window.innerHeight*(0.75);
    for(let i=0;i<contentBox.length;i++){
        let positionFromTop=contentBox[i].getBoundingClientRect().top;
        if(withinRange>positionFromTop){
            contentBox[i].classList.add("visible");
        }
        else{
            contentBox[i].classList.remove("visible");
        }
    }
});