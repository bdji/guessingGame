console.log((document.querySelector(".message").textContent = "Badji"));

document.querySelector(".number").textContent = 13; //to asign a value
document.querySelector(".score").textContent = 10;
console.log(document.querySelector(".guess").value); //to read a value
document.querySelector(".guess").value = 23;

//Handle Click Event
//Event listener
//mathrandom() gives a number from 0 to 1 with 1 not included

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  // when no inout
  if (!guess) {
    document.querySelector(".message").textContent = "👀 No number!";
    //when players wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "👌 Congrats Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    // changing the body color of the website
    document.querySelector("body").style.backgroundColor = " #60b347";

    document.querySelector(".number").style.width = "30rem ";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🐱‍🏍 Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " 🤣 You Lost the game";
    }
    // when guess is loo
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = " 🗡Too low ";
    score++;
    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", restoringValues);

function restoringValues() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = " Start Guessing....";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = " ? ";
  document.querySelector(".guess").textContent = " ";

  document.querySelector("body").style.backgroundColor = " #222";

  document.querySelector(".number").style.width = "15rem ";
}
