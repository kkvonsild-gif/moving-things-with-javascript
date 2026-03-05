// Your code here
"use strict";

// Exercise 1
const dodger = document.getElementById("dodger");

  // Funktioner
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
      dodger.style.left = `${left - 10}px`;
      playSoundOnMovement();
  }
  
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 10}px`;
    playSoundOnMovement();
  }
}

function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom > -1) {
    dodger.style.bottom = `${bottom + 10}px`;
    playSoundOnMovement();
  }
}

function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom < 380) {
    dodger.style.bottom = `${bottom - 10}px`;
    playSoundOnMovement();
  }
}

  // Event Listeners - hvis 
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
    dodger.style.transform = "rotate(180deg)"; // Kigger venstre
  }

  if (e.key === "ArrowRight") {
    moveDodgerRight();
    dodger.style.transform = "rotate(0deg)";   // Kigger højre
  }

  if (e.key === "ArrowUp") {
    moveDodgerUp();
    dodger.style.transform = "rotate(-90deg)"; // Kigger op
  }

  if (e.key === "ArrowDown") {
    moveDodgerDown();
    dodger.style.transform = "rotate(90deg)";  // Kigger ned
  }
});

// Exercise 2
const soundMovement = document.getElementById("soundMovement");

function playSoundOnMovement() {
    soundMovement.currentTime = 0;
    soundMovement.play();
}