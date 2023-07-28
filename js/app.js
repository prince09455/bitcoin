let text= document.querySelector(".header-content h1");
let innerText=text.textContent;
let arrText=innerText.split("");

text.innerHTML="";
for (i=0; i<arrText.length; i++){
    text.innerHTML+=`<span>${arrText[i]}</span>`
}

let char=0;
let timer=setInterval(makeWord, 100);
function makeWord(){
    const span=document.querySelectorAll('span')[char];
    span.classList.add('test_animation');
    char++
    if(char==arrText.length+1){
        complete();
        return
    }
}

function complete(){
    clearInterval(timer);
    timer=null;
}