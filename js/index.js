let HomeIcon = document.getElementById("homeicon");
let HOMEpage = document.getElementById("header");
let HOMEbutton = document.getElementById("section");
let sectionButton = document.getElementById("section-button");
let ship = document.getElementById("ship");
let close = document.getElementById("close");
let closeBg = document.getElementById("close-bg");
let aboutme = document.getElementById("aboutme");
let returnBt = document.getElementById("return");
let body = document.getElementById("body");



sectionButton.onmouseup = function() {
    ship.classList.toggle("fly");
    close.classList.toggle("close-animation"); 
    setTimeout(() => {
        HOMEpage.classList.toggle("hidden");
        HOMEbutton.classList.toggle("hidden");
        
        returnBt.classList.toggle("hidden");
    }, 2000);
    setTimeout(() => {
        ship.classList.toggle("fly");
        close.classList.toggle("close-animation"); 
        body.classList.toggle("overflow");
        closeBg.classList.toggle("hidden");
    },4000);
}

returnBt.onmouseup = function() {
    ship.classList.toggle("fly");
    close.classList.toggle("close-animation"); 
    body.classList.toggle("overflow");
    closeBg.classList.toggle("hidden");
    returnBt.classList.toggle("hidden");
    setTimeout(() => {
        HOMEpage.classList.toggle("hidden");
        HOMEbutton.classList.toggle("hidden");
        aboutme.classList.toggle("hidden");
        
    }, 2000);
    setTimeout(() => {
        ship.classList.toggle("fly");
        close.classList.toggle("close-animation"); 
    },4000);
}



