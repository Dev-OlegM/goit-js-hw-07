"use·strict";

const categoriesLi = [...document.querySelectorAll("#categories h2")];

function getQuantityOfCateg() {
  const quantityOfCateg = document.querySelectorAll(".item").length;
  console.log(`В списке ${quantityOfCateg} категории.`);
}

function getAllCategories() {
  const categoriesName = document.querySelectorAll("li.item > h2");

  for (let categName of categoriesName) {
    console.log(
      `Категория: ${categName.innerHTML} , Количество элементов: ${categName.nextElementSibling.children.length}`
    );
  }
}

getQuantityOfCateg();
getAllCategories();
