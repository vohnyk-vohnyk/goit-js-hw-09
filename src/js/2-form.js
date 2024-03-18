const form = document.querySelector(".feedback-form");

function saveMessageInLocalStorage(event) {
    const inputForm = {};
    const email = event.currentTarget.email.value;
    const message = event.currentTarget.message.value;
    inputForm.email = email.trim();
    inputForm.message = message.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(inputForm));
}


if (localStorage.getItem("feedback-form-state")) {
    const saveMessage = JSON.parse(localStorage.getItem("feedback-form-state"));
    form.email.value = saveMessage.email;
    form.message.value = saveMessage.message;
}

form.addEventListener("input", saveMessageInLocalStorage);

function submitMessage(event) {
    event.preventDefault();
    if (form.email.value !== "" && form.message.value !== "") {
        console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
        localStorage.removeItem("feedback-form-state");
        form.reset();
    }
}

form.addEventListener("submit", submitMessage);

