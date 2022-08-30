"use strict";

document.addEventListener("DOMContentLoaded", start);

let input = "";
let output;

function start() {
  console.log("start func loaded");

  document.querySelector("#button").addEventListener("click", getInput);
}

function getInput() {
  console.log("getInput func loaded");

  input = document.querySelector("#theInput").value;
  console.log("Input is:", input);
}

// if-sætn med mulighederne, der får hver deres funktion? Til sidst en skriv output ind-func?
