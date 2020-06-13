"use·strict";

let counterValue = 0;

const valueRef = document.querySelector("#value");

const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);

const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);

function increment() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

decrementBtnRef.addEventListener("click", decrement);
incrementBtnRef.addEventListener("click", increment);
