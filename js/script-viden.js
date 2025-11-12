"use strict";

/*------------------------------------
DATA OBJEKT, ARRAY TIL FISKENE
--------------------------------------*/
const fiskInfo = [
    {
        className: "klovnfisk",
        farve: "orange",
        alder: 5
    },

    {
        className: "mini-klovnfisk",
        farve: "orange",
        alder: 1
    },

    {
        className: "laks",
        farve: "lyserød",
        alder: 2
    },

    {
        className: "blue-fisk",
        farve: "blå",
        alder: 1
    },

    {
        className: "lilla-fisk",
        farve: "lilla",
        alder: 7
    },

    {
        className: "stribet-fisk",
        farve: "blå og lyserød",
        alder: "10"
    }
];


/*---------------------------------------
DOM CONTENT LOAD OG VIDENSBOKS VARIABEL
-----------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {

const vidensboks = document.getElementById("vidensboks");


/*-----------------------------
VIDENSBOKS FUNKTION
-------------------------------*/
function showVidensboks (html) {
    if (vidensboks) {
        vidensboks.innerHTML = html; //indsætter teksten fra objekterne i html

        vidensboks.classList.add("is-visible"); //gør boksen synlig med css 

        setTimeout(function() {
            vidensboks.classList.remove("is-visible");  //bestemmer hvor længe boksen skal være synlig 
        }, 3000);
    }
}


/*------------------
FOR EACH FUNKTION
--------------------*/
fiskInfo.forEach((fisk) => {     //tager fat i alt der har med fiskene at gøre i html'en og loop'er det
    document.querySelectorAll("." + fisk.className).forEach((elem) => {
        elem.addEventListener("click", () => {
            const fiskDetails = `
            <strong> ${fisk.className}</strong> <br>
            farve: ${fisk.farve}<br>
            alder: ${fisk.alder}<br>
            `;

            showVidensboks(fiskDetails); //funktionen showVidensboks bliver kaldt, med variablen fiskDetails (med html) i
        });

    });
});


/*---------------------------------
HENT FISKENE FRA HTML MED DOM
-----------------------------------*/
//henter alle elementerne der skal bruges fra html ved at kalde en const variabel
const klovnfisk = document.querySelector(".klovnfisk");
const laks = document.querySelector(".laks");
const stribetFisk = document.querySelector(".stribet-fisk");


/*-------------------------
AUDIO OBJEKTER TIL FISKENE
---------------------------*/
const soundKlovnfisk = new Audio();
soundKlovnfisk.src = "sound-viden/klovnfisk.mp3";

const soundLaks = new Audio();
soundLaks.src = "sound-viden/bobler.mp3";

const soundStribetFisk = new Audio();
soundStribetFisk.src = "sound-viden/cykel.mp3";


/*--------------------------------
EVENTLISTENERS PÅ AUDIO OBJEKTERNE
----------------------------------*/
//klovnfisken
if (klovnfisk) {
    klovnfisk.addEventListener("click", () => {
        soundKlovnfisk.play();
    });
}

if (laks) {
    laks.addEventListener("click", () => {
        soundLaks.play();
    });
}

if (stribetFisk) {
    stribetFisk.addEventListener("click", () => {
        soundStribetFisk.play();
    });
}


}); //DOM content loaded, slut