const container = document.querySelector(".container");
const sizeBtn = document.querySelector("#size-btn");
const clearBtn = document.querySelector("#clear-btn");
const eraseBtn = document.querySelector("#erase-btn");
const selection = document.querySelector("#color-selector");

let sheetSize = 16;
let sheetSwidth = 20;
let sheetSheight = 20;
let colorPen = "black";

createSheet(sheetSize, sheetSwidth, sheetSheight);

function createSheet(size, width, height) {
  container.style.width = `${size * width}px`;
  container.style.height = `${size * height}px`;
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = "white";
    div.classList.add("plate");
    container.appendChild(div);
  }
  // Hover affect
  const plates = document.querySelectorAll(".plate");
  plates.forEach((plate) => {
    plate.addEventListener("mouseover", function () {
      plate.style.backgroundColor = `${colorPen}`;
    });
  });
}

//Clearing the sheet
// function clearSheet() {
//   for (let i = 0; i < sheetSize * sheetSize; i++) {
//     container.removeChild(document.querySelector(".plate"));
//   }
//   createSheet(sheetSize, 20, 20);
// }

function deleteSheet() {
  for (let i = 0; i < sheetSize * sheetSize; i++) {
    container.removeChild(document.querySelector(".plate"));
  }
}

// Buttons
sizeBtn.addEventListener("click", function () {
  deleteSheet();
  sheetSize = prompt("Choose the size from 0 to 34");
  if (sheetSize === null) {
    deleteSheet();
    sheetSize = 16;
    createSheet(sheetSize, sheetSwidth, sheetSheight);
  } else if (sheetSize <= 34) {
    createSheet(sheetSize, sheetSwidth, sheetSheight);
  } else {
    alert("Too much!");
    sheetSize = 16;
    createSheet(sheetSize, sheetSwidth, sheetSheight);
  }
});

clearBtn.addEventListener("click", function () {
  deleteSheet();
  createSheet(sheetSize, sheetSwidth, sheetSheight);
});

eraseBtn.addEventListener("click", function () {
  colorPen = "white";
});

// function changing() {
//   console.log(1);
// }

selection.addEventListener("change", function () {
  if (selection.value == "black") {
    colorPen = "black";
  } else if (selection.value == "red") {
    colorPen = "#D63423";
  } else if (selection.value == "blue") {
    colorPen = "#008BC6";
  } else if (selection.value == "yellow") {
    colorPen = "#F9F871";
  }
});
