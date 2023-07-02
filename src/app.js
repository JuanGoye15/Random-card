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
  document.getElementsByClassName("symbol")[0].innerHTML = element;

  // let element2 = symbol[Math.floor(Math.random() * symbol.length)];
  // document.getElementById("symbol2").innerHTML = element2;

  let element2 = letter[Math.floor(Math.random() * letter.length)];
  document.getElementById("number").innerHTML = element2;

  let button = document.querySelector("#superDuperButton");
  button.addEventListener("click", function() {
    let element = symbol[Math.floor(Math.random() * symbol.length)];
    document.getElementsByClassName("symbol")[0].innerHTML = element;

    let element2 = letter[Math.floor(Math.random() * letter.length)];
    document.getElementById("number").innerHTML = element2;
  });
};
