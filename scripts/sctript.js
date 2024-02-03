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
}

function decryptPhrase(phrase, method) {
    let decryptPhrase = "";
    if (phrase == "") return alertMessage(method);

    decryptPhrase = phrase.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");
}