const slid=document.querySelector("#slid");
let slidSec = document.querySelectorAll(".slid_sec");
let slidSecL = slidSec[slidSec.length -1];

const botnLeft = document.querySelector("#botn-left");
const botnRight = document.querySelector("#botn-right");

slid.insertAdjacentElement('afterbegin', slidSecL);

//botono derecha//
function sig(){
    let slidSecF = document.querySelectorAll(".slid_sec")[0];
    slid.style.marginLeft = "-200%";
    slid.style.marginRight = "all 0.5s";
    setTimeout(function(){
        slid.style.transition ="none";
        slid.insertAdjacentElement('beforeend', slidSecF);
        slid.style.marginLeft = "-100%";
    }, 500);
}
//botoon izquierda//
function ret(){
    let slidSec = document.querySelectorAll(".slid_sec");
    let slidSecL = slidSec[slidSec.length -1];
    slid.style.marginLeft = "0";
    slid.style.marginRight = "all 0.5s";
    setTimeout(function(){
        slid.style.transition ="none";
        slid.insertAdjacentElement('afterbegin', slidSecL);
        slid.style.marginLeft = "-100%";
    }, 500);
}

botnRight.addEventListener('click', function(){
    sig();
});
botnLeft.addEventListener('click', function(){
    ret();
});

setInterval(function(){
    sig();
}, 5000);