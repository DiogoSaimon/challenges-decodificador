"use strict";

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

    Swal.fire({
        position: "top-start",
        icon: "error",
        title: `Por favor, digitar algo para prosseguir com a ${functionName}`,
        showConfirmButton: false,
        timer: 2500
    });
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
    console.log(encryptPhrase);

}

function decryptPhrase(formData, method) {
    if (formData == undefined) return alertMessage(method);
    console.log(formData);
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

/*

A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

Ex: paraguai = pairaigufataiimes
Ex: diogo saimon = dimesobergober saiimesmobern
*/