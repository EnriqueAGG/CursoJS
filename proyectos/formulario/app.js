import { validateInputLength } from "./form/validateInputLength.js";
import { validateEmail } from "./form/validateEmail.js";
import { setDataValue } from "./form/setDataValue.js";

const formContact = document.querySelector(".form");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputMessage = document.querySelector("#message");
const labels = document.querySelectorAll("[data-status]");

const formDialog = document.querySelector(".form__dialog");
const closeDialogBtn = document.querySelector(".form__btn--close");

formContact.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(e){
    e.preventDefault();

    let statusName = validateInputLength(inputName, 6);
    let statusMessage = validateInputLength(inputMessage, 10);
    let statusEmail = validateEmail(inputEmail);

    if(statusName && statusMessage && statusEmail){
        
        labels.forEach(function(label){
            setDataValue(label, "status");
        });

        formDialog.showModal();
        formContact.reset();
    }

}

closeDialogBtn.addEventListener("click", function(){
    formDialog.close();
});