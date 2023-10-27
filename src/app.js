/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateRandomCard();
};

function generateRandomCard() {
  const suits = ["hearts", "diamonds", "spades", "clubs"];
  const cardValues = [
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

  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomValueIndex = Math.floor(Math.random() * cardValues.length);

  const cardDiv = document.getElementById("card");
  cardDiv.classList = "card " + suits[randomSuitIndex];

  const suitSymbol = getSuitSymbol(suits[randomSuitIndex]);
  const cardValue = cardValues[randomValueIndex];

  const topLeft = cardDiv.querySelector(".top-left");
  const bottomRight = cardDiv.querySelector(".bottom-right");
  const value = cardDiv.querySelector(".value");

  topLeft.textContent = suitSymbol;
  bottomRight.textContent = suitSymbol;
  value.textContent = cardValue;
}

function getSuitSymbol(suit) {
  switch (suit) {
    case "hearts":
      return "♥";
    case "diamonds":
      return "♦";
    case "spades":
      return "♠";
    case "clubs":
      return "♣";
    default:
      return "";
  }
}
