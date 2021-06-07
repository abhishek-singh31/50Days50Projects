function play(sound){
    if(sound==="applause"){
        if(typeof myAudio!="undefined"){
            myAudio.pause();
            myAudio.currentTime=0;
        }
        myAudio=new Audio('sounds/applause.mp3');
        myAudio.play();
    }
    else if(sound==="boo"){
        if(typeof myAudio!="undefined"){
            myAudio.pause();
            myAudio.currentTime=0;
        }
        myAudio=new Audio('sounds/boo.mp3');
        myAudio.play();
    }
    else if(sound==="gasp"){
        if(typeof myAudio!="undefined"){
            myAudio.pause();
            myAudio.currentTime=0;
        }
        myAudio=new Audio('sounds/gasp.mp3');
        myAudio.play();
    }
    else if(sound==="tada"){
        if(typeof myAudio!="undefined"){
            myAudio.pause();
            myAudio.currentTime=0;
        }
        myAudio=new Audio('sounds/tada.mp3');
        myAudio.play();
    }
    else if(sound==="victory"){
        if(typeof myAudio!="undefined"){
            myAudio.pause();
            myAudio.currentTime=0;
        }
        myAudio=new Audio('sounds/victory.mp3');
        myAudio.play();
    }
    else{
        if(typeof myAudio!="undefined"){
            myAudio.pause();
            myAudio.currentTime=0;
        }
        myAudio=new Audio('sounds/wrong.mp3');
        myAudio.play();
    }
}