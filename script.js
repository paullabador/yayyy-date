"use strict";

const dateDetails = document.querySelector(".date-details");
const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
     if (noCount === 1) {
      titleElement.innerHTML =
        "Im serious when I said; Gusto ko makabisado every personality that you have. So ano, G?";
    }
       if (noCount === 2) {
      titleElement.innerHTML =
        "Ayaw padin? :(";
    }
         if (noCount === 3) {
      titleElement.innerHTML =
        "What if i try mo lang?";
    }
         if (noCount === 4) {
      titleElement.innerHTML =
        "Chill date lang promise, Trust me";
    }
         if (noCount === 5) {
      titleElement.innerHTML =
        "Plithhh, say YES?";
    }
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");

  dateDetails.innerHTML = `
    <strong>Our Date Plan 💕</strong><br><br>
    🏺 Pottery date<br>
    📍 A cozy pottery studio<br>
    🗓️ This weekend<br>
    🍽️ Dinner 🥩🍴<br>
    🍦Ice cream & any random stuff
  `;

  dateDetails.classList.remove("hidden")
  ;

  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Nope",
    "Yaw q nga",
    "E ayaw ngani",
    "Bahala ka jan",
    "I'm gonna cry...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
