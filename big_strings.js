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
    // capitalize first letter, rest lowercase:
    let allToLowerCase = input.toLowerCase();
    let firstLetter = allToLowerCase.substring(0, 1);
    let upperCase = firstLetter.toUpperCase();
    let endOfWord = allToLowerCase.substring(1);
    output = `${upperCase}${endOfWord}`;
    console.log(output);
    document.getElementById("theOutput").value = output; // stackoverflow says innerHTML doesn't work on input fields?
  } else if (selectValue === "2") {
    // find first name:
    // search for space after first name:
    let searchForSpace = input.indexOf(" ");
    console.log(searchForSpace); // returns a number
    // substring from 0 - the space:
    let output = input.substring(0, searchForSpace);
    document.getElementById("theOutput").value = output;
  } else if (selectValue === "3") {
  } else if (selectValue === "4") {
    // "*".repeat (.length)
  }
}
// if-sætn med mulighederne, der får hver deres funktion? Til sidst en skriv output ind-func?
