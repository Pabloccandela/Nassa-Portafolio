let HomeIcon = document.getElementById("homeicon");
let HOMEpage = document.getElementById("header");
let HOMEbutton = document.getElementById("section");
let sectionButton = document.getElementById("section-button");
let ship = document.getElementById("ship");
let close = document.getElementById("close");
let closeBg = document.getElementById("close-bg");
let returnBt = document.getElementById("return");
let body = document.getElementById("body");
let sections = document.getElementById("sections");


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

let whatsapp = document.getElementById("social-whatsapp");
let instagram = document.getElementById("social-instagram");
let linkedin = document.getElementById("social-linkedin");
let gmail = document.getElementById("social-gmail");

whatsapp.onmouseup = function() {
    window.open("https://api.whatsapp.com/send?phone=543364540036&text=Buenas%20Nassa!!%20...", '_blank');
};

instagram.onmouseup = function() {
    window.open( "https://www.instagram.com/pabloccandela/", '_blank');
};

linkedin.onmouseup = function() {
    window.open ("https://www.linkedin.com/in/pablo-candela-medina-241418214/", '_blank');
};

const correo = "Correo: pabloccandela@gmail.com";

gmail.onmouseup = function() {
    alert(correo);
}


let nassafx = document.getElementById("nassafx");
let mundotarjeta = document.getElementById("mundotarjeta");

nassafx.onmouseup = function() {
    window.open ("https://www.instagram.com/nassafx/", '_blank');
};
mundotarjeta.onmouseup = function() {
    window.open ("https://www.instagram.com/mundotarjeta.sn/", '_blank');
};
