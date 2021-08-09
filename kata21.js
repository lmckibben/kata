let prompt = require("prompt-sync")();

// code below (replace this example)
let answer = prompt("Guess a number: ");
console.log("You answered: " + answer);

//set random number
let ranNum = Math.floor(Math.random() * 100);
//console.log("Answer = " + ranNum);

//track guesses
let trackAnswer = new Set();


let guess = 1;

while (answer != ranNum) {
  if ((/\D/).test(answer) || (/\s/).test(answer) || !answer) {
    console.log("Not a number! Try again!")
    guess++
  }else if (trackAnswer.has(answer)) {
    console.log("Already guessed! Try again!")
    guess++
  }else if (answer > ranNum) {
    console.log("Too high! Try again!")
    guess++ 
  }else if (answer < ranNum) {
    console.log("Too low! Try again!")
    guess++
  }else if (trackAnswer.has(answer)) {
    console.log("Already guessed! Try again!")
    guess++
  }
  trackAnswer.add(answer);
  console.log("You answered: " + answer);
  answer = prompt("Guess a number: ");
}

//if number is guessed correctly
if (answer = ranNum) {
  console.log("You got it! You took " + guess + " attempts!");
}