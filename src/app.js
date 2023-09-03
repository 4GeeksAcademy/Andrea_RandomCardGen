/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let shouldBeRed = false;

window.onload = function() {
  let num = document.querySelector(".number");
  num.innerHTML = random_number;

  let top = document.querySelector(".top-suit");
  top.innerHTML = random_suit;

  let bottom = document.querySelector(".bottom-suit");
  bottom.innerHTML = random_suit;

  if (shouldBeRed) {
    top.style.color = "red";
    bottom.style.color = "red";
  } else {
    top.style.color = "black";
    bottom.style.color = "black";
  }
  console.log(suit());
};

let suit = () => {
  let topSuit = ["♠", "♥", "♣", "♦"];
  let randomSuit = Math.floor(Math.random() * topSuit.length);
  if (randomSuit == 1 || randomSuit == 3) {
    // make the red,
    shouldBeRed = true;
  } else {
    shouldBeRed = false;
  }

  return topSuit[randomSuit];
};

let random_suit = suit();

let number = () => {
  let index = Math.floor(Math.random() * 13) + 1;

  if (index == 1) {
    return "A";
  } else if (index == 11) {
    return "J";
  } else if (index == 12) {
    return "Q";
  } else if (index == 13) {
    return "K";
  } else {
    return index;
  }
};

let random_number = number();
