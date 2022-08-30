"use strict";

document.addEventListener("DOMContentLoaded", start);

let input;
let output;
let selectValue;

function start() {
  console.log("start func loaded");

  document.querySelector("#button").addEventListener("click", getInput);
}

function getInput() {
  console.log("getInput func loaded");

  // get text from input field:
  input = document.querySelector("#theInput").value;
  console.log("Input is:", typeof input, input);

  // variable for value i drop down:
  selectValue = document.querySelector("#dropdown").value;
  console.log(selectValue);

  formatString();
}

function formatString() {
  console.log("formatString func loaded");

  if (selectValue === "1") {
    let allToLowerCase = input.toLowerCase;
    console.log(allToLowerCase);
    let firstLetter = allToLowerCase.substring(0, 1).toUpperCase;
    let endOfWord = allToLowerCase.substring(1);
    output = `${firstLetter}${endOfWord}`;
    console.log(output);
  } else if (selectValue === 4) {
    // "*".repeat (.length)
  }
}
// if-sætn med mulighederne, der får hver deres funktion? Til sidst en skriv output ind-func?
