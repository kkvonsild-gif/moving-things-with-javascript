// Your code here
"use strict";

// Exercise 1
const dodger = document.getElementById("dodger");

  // Funktioner
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0 && left < 360) {
        dodger.style.left = `${left - 1}px`
    }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360 && left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom > -1 && bottom < 380) {
    dodger.style.bottom = `${bottom + 1}px`
  }
}

function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom < 380 && bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`
  }
}

  // Event Listeners - hvis 
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }

  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }

  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }

  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});

// Exercise 2
