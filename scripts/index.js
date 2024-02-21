"use strict";

import { inputEmpty, copyTextAlert } from "./alert-notification.js";

let inputTextField = document.querySelector("textarea");
inputTextField.placeholder = "Digite seu texto";

let phrase = "";

const form = document.forms.namedItem("encrypt-decrypt");
form.addEventListener("input", () => {
    const message = form.message.value;

    const formData = new FormData(form);

    formData.set("message", message);

    phrase = formData.get("message");
})

function alertMessage(method) {
    let functionName = method == "encrypt" ? "encriptação" : "decriptação";
    inputEmpty(functionName);
}

const buttons = document.getElementById("buttons");

buttons.addEventListener("click", (event) => {
    event.preventDefault();

    const { target } = event;

    switch (target.getAttribute("id")) {
        case "encrypt":
            encryptPhrase(phrase, "encrypt");
            break;
        case "decrypt":
            decryptPhrase(phrase, "decrypt");
            break;
    }
})

function showPhrase(phrase) {
    let showPhrase = document.querySelector('.show__class__result__text');
    showPhrase.innerText = phrase;
}

function ocultSection() {
    let classResultEmptySection = document.querySelector(".class__result__empty");
    let showClassResultSection = document.querySelector(".show__class__result");

    classResultEmptySection.setAttribute("hidden", "");
    showClassResultSection.removeAttribute("hidden", "");
}

function encryptPhrase(phrase, method) {
    if (phrase == "") return alertMessage(method);

    let encryptPhrase = "";

    for (let i = 0; i < phrase.length; i++) {
        switch (phrase[i]) {
            case "a":
                encryptPhrase = encryptPhrase + phrase[i].replace(phrase[i], "ai");
                break;
            case "e":
                encryptPhrase = encryptPhrase + phrase[i].replace(phrase[i], "enter");
                break;
            case "i":
                encryptPhrase = encryptPhrase + phrase[i].replace(phrase[i], "imes");
                break;
            case "o":
                encryptPhrase = encryptPhrase + phrase[i].replace(phrase[i], "ober");
                break;
            case "u":
                encryptPhrase = encryptPhrase + phrase[i].replace(phrase[i], "ufat");
                break;
            default: encryptPhrase = encryptPhrase + phrase[i];
                break;
        }


    }
    ocultSection();
    showPhrase(encryptPhrase);
}

function decryptPhrase(phrase, method) {
    let decryptPhrase = "";
    if (phrase == "") return alertMessage(method);

    decryptPhrase = phrase.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");

    ocultSection();
    showPhrase(decryptPhrase);
}


let copyButton = document.getElementById("copy-button");

copyButton.addEventListener("click", (event) => {
    event.preventDefault();
    let textSelected = document.querySelector(".show__class__result__text").innerText;

    navigator.clipboard.writeText(textSelected).then(() => copyTextAlert());
})
