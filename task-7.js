"use·strict";

const inputRangeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRangeRef.addEventListener("input", onInputRange);

function onInputRange(event) {
  textRef.style.fontSize = event.target.value + "px";
}
