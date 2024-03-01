"use strict";

let alertNotification = document.querySelector(".alert");
let alertNotificationMessage = document.querySelector(".alert_message");


export function copyTextAlert() {

    alertNotificationMessage.innerText = "Text copiado";

    if (!alertNotification.hasAttribute("alert copy_hide")) {
        alertNotification.className = "alert copy_hide";
    }

    alertNotification.classList.remove("copy_hide");
    alertNotification.classList.add("copy_show");
    alertNotification.classList.add("show_copy_alert");


    setTimeout(() => {
        alertNotification.classList.add("copy_hide");
        alertNotification.classList.remove("copy_show");
    }, 5000);
};

export function inputEmpty(functionName) {

    alertNotificationMessage.innerText = `Por favor, digitar algo para prosseguir com a ${functionName}`;

    if(!alertNotification.hasAttribute("alert hide")){
        alertNotification.className="alert hide";
    }

    alertNotification.classList.remove("hide");
    alertNotification.classList.add("show");
    alertNotification.classList.add("show_alert");


    setTimeout(() => {
        alertNotification.classList.add("hide");
        alertNotification.classList.remove("show");
    }, 5000);

 }