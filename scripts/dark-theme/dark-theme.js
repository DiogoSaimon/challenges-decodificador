"use strict";

export function darkThemeMode(){
    let mode = document.getElementById("mode-icon");

mode.addEventListener("click", () => {
    const body = document.querySelector("body");
    const logo = document.getElementById("logo-alura");


    if (mode.classList.contains("fa-moon")) {
        mode.classList.remove("fa-moon");
        mode.classList.add("fa-sun");
        logo.src = "assets/png/alura-logo-dark.png";
        body.classList.add("dark");
        return;
    }



    mode.classList.remove("fa-sun");
    mode.classList.add("fa-moon");
    body.classList.remove("dark");
    logo.src = "assets/png/logo-alura.png";
})
}