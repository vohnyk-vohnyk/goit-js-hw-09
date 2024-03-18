const form = document.querySelector(".feedback-form");

function saveMessageInLocalStorage(event) {
  const inputForm = {};
  const email = event.currentTarget.email.value.trim();
  const message = event.currentTarget.message.value.trim();

  // Перевірка на наявність корисних даних
  if (email !== "" && message !== "") {
    inputForm.email = email;
    inputForm.message = message;
    localStorage.setItem("feedback-form-state", JSON.stringify(inputForm));
  }
}

if (localStorage.getItem("feedback-form-state")) {
  const saveMessage = JSON.parse(localStorage.getItem("feedback-form-state"));
  form.email.value = saveMessage.email;
  form.message.value = saveMessage.message;
}

form.addEventListener("input", saveMessageInLocalStorage);

function submitMessage(event) {
  event.preventDefault();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (email !== "" && message !== "") {
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.removeItem("feedback-form-state");
    form.reset();
  }
}

form.addEventListener("submit", submitMessage);
