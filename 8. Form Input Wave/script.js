const labels=document.querySelectorAll("label");
for(let i=0;i<labels.length;i++){
    let arr=labels[i].innerText.split('');
    let str='';
    for(let j=0;j<arr.length;j++){
        str=str+('<span style="transition-delay:'+(j*50)+'ms">'+ (arr[j])+ '</span>');
    }
    labels[i].innerHTML=str;
}