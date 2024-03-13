"use script";


let inputTextField = document.querySelector("textarea");
inputTextField.placeholder = "Digite seu texto";

export let phrase = "";

const form = document.forms.namedItem("encrypt-decrypt");

form.addEventListener("input", () => {
    const message = form.message.value;

    const formData = new FormData(form);

    formData.set("message", message);

    phrase = formData.get("message");
})
