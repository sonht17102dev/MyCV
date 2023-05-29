"use strict";

const inputEmail = document.getElementById("InputEmail1");
const btnSubmit = document.getElementById("btnSubmit");
const info = document.getElementById("personal-info");
const form = document.getElementById("form-submit");
const error = document.getElementById("error-email");
const heading = document.querySelectorAll(".section-heading");
const btnViewMore = document.querySelectorAll(".btnViewMore");

function validate() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valueEmail = inputEmail.value.trim();
  if (valueEmail.length > 0 && !regex.test(valueEmail)) {
    error.textContent = "Email không hợp lệ";
  } else if (valueEmail === "") {
    console.log(valueEmail);
    error.textContent = "Hãy nhập email";
  } else {
    info.classList.remove("hidden");
    form.classList.add("hidden");
  }
}
const showButton = (button) => {
  button.childNodes[0].nextSibling.childNodes[3].classList.remove("hidden");
};
function hideButton(button) {
  button.childNodes[0].nextSibling.childNodes[3].classList.add("hidden");
}
function toggleContent(button) {
  const contentDiv = button.parentNode.parentNode.nextElementSibling;
  button.textContent = "View Less";
  contentDiv.classList.toggle("hidden");
  if (contentDiv.classList.contains("hidden")) {
    button.textContent = "View More";
  }
}
