let HomeIcon = document.getElementById("homeicon");
let HOMEpage = document.getElementById("header");
let HOMEbutton = document.getElementById("section");
let sectionButton = document.getElementById("section-button");
let ship = document.getElementById("ship");
let close = document.getElementById("close");
let closeBg = document.getElementById("close-bg");
let returnBt = document.getElementById("return");
let body = document.getElementById("body");
let sections = document.getElementById("sections")


sectionButton.onmouseup = function() {
    ship.classList.toggle("fly");
    close.classList.toggle("close-animation"); 
    setTimeout(() => {
        HOMEpage.classList.toggle("hidden");
        HOMEbutton.classList.toggle("hidden");
        sections.classList.toggle("hidden");
        returnBt.classList.toggle("hidden");
    }, 2000);
    setTimeout(() => {
        ship.classList.toggle("fly");
        close.classList.toggle("close-animation"); 
        body.classList.toggle("overflow-hidden");
        closeBg.classList.toggle("hidden");
    },4000);
}

returnBt.onmouseup = function() {
    ship.classList.toggle("fly");
    close.classList.toggle("close-animation"); 
    body.classList.toggle("overflow-hidden");
    closeBg.classList.toggle("hidden");
    returnBt.classList.toggle("hidden");
    setTimeout(() => {
        HOMEpage.classList.toggle("hidden");
        HOMEbutton.classList.toggle("hidden");
        sections.classList.toggle("hidden");
    }, 2000);
    setTimeout(() => {
        ship.classList.toggle("fly");
        close.classList.toggle("close-animation"); 
    },4000);
}



