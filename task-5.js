"use·strict";

const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

nameInputRef.addEventListener("input", onNameInput);

function onNameInput(event) {
  nameOutputRef.textContent = event.target.value;
  if (nameOutputRef.textContent === "") {
    nameOutputRef.textContent = "незнакомец";
  }
}
