/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  myCard();
};

const myCard = () => {
  let symbol = ["♦", "♥", "♠", "♣"];
  let letter = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q"
  ];

  let element = symbol[Math.floor(Math.random() * symbol.length)];
  document.getElementById("symbol").innerHTML = element;
  document.getElementById("symbol2").innerHTML = element;
  // Numero
  let element2 = letter[Math.floor(Math.random() * letter.length)];
  document.getElementById("number").innerHTML = element2;

  // Pinta de rojo
  if (element == "♥" || element == "♦") {
    document.getElementById("symbol").style.color = "red";
    document.getElementById("symbol2").style.color = "red";
    document.getElementById("number").style.color = "red";
  } else {
    document.getElementById("symbol").style.color = "black";
    document.getElementById("symbol2").style.color = "black";
    document.getElementById("number").style.color = "black";
  }

  let button = document.getElementById("superDuperButton");
  button.addEventListener("click", function() {
    let element = symbol[Math.floor(Math.random() * symbol.length)];
    document.getElementById("symbol").innerHTML = element;
    document.getElementById("symbol2").innerHTML = element;

    let element2 = letter[Math.floor(Math.random() * letter.length)];
    document.getElementById("number").innerHTML = element2;

    if (element == "♥" || element == "♦") {
      document.getElementById("symbol").style.color = "red";
      document.getElementById("symbol2").style.color = "red";
      document.getElementById("number").style.color = "red";
    } else {
      document.getElementById("symbol").style.color = "black";
      document.getElementById("symbol2").style.color = "black";
      document.getElementById("number").style.color = "black";
    }
  });
};
