"use·strict";

const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  event.target.value.length !== Number(inputRef.getAttribute("data-length"))
    ? inputRef.classList.add("invalid")
    : inputRef.classList.replace("invalid", "valid");
}
