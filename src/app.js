/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["♦", "♥", "♠", "♣"];
const numbers = [
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
  "Q",
  "K",
  "A"
];

window.onload = function() {
  //write your code here
  let randomSuit = Math.floor(Math.random() * suits.length);

  let randomNumber = Math.floor(Math.random() * numbers.length);

  let suitTop = document.querySelector(".top-suit");
  suitTop.innerHTML = suits[randomSuit];

  let suitBottom = document.querySelector(".bottom-suit");
  suitBottom.innerHTML = suits[randomSuit];

  let cardValue = document.querySelector(".number");
  cardValue.innerHTML = numbers[randomNumber];

  if (randomSuit <= 1) {
    suitTop.style.color = "red";
    suitBottom.style.color = "red";
  }
};
