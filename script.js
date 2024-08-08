"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉correct Number!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".number").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);

*/
let secretnumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector(".number").textContent = secretnumber;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when guess have no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No Number!";
  }

  // when player wins
  else if (guess === secretnumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretnumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;

      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //when guess is too high
  else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥 You will lost the Game!";
    }
  }
  //when guess is too low
  else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥 You will lost the Game!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  const initial = Number(document.querySelector(".guess").value);
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing..";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
