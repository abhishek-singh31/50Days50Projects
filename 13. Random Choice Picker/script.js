const input=document.querySelector("textarea");
let str="";
const options=document.querySelector(".options");
input.addEventListener("keyup",(event) => {
    if(event.key==="Enter"){
        str=input.value;
        let arr=str.split(",");
        input.value="";
        select(arr);
    }
    else{
        str=input.value;
        let arr=str.split(",");
        build(arr);
    }
})

function build(arr){
    options.innerHTML="";
    let innerCode="";
    for(let i=0;i<arr.length;i++){
        if(arr[i].length==0)
            continue;
        innerCode+='<span class="choice">'+arr[i]+'</span>';
    }
    options.innerHTML=innerCode;
}

function select(arr){
    let mx=arr.length,cnt=0;
    mx--;
    let lastNum=-1;
    let myFunc=setInterval(choose,50);
    function choose(){
        cnt++;
        let myNum=Math.floor(Math.random()*mx);
        let choice=document.querySelectorAll(".choice");
        if(lastNum!=-1)
            choice[lastNum].classList.remove("active");
        choice[myNum].classList.add("active");
        lastNum=myNum;
    }
    setTimeout(exit,3000);
    function exit(){
        clearInterval(myFunc);
    }
}