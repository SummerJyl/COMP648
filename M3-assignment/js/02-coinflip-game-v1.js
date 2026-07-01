// Usage: Use nested conditional statements

// In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”.
// To complete the game follow the steps outlined below:

// Begin your application by creating a variable called coinFlip and set it equal to a random number. Y
// ou will have to use a Math method to get this number:

let coinFlip = Math.round(Math.random());

// Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
let choice = prompt("Select heads or tails:").toLocaleLowerCase();

// Use a conditional to check the result of the coin flip.
// If it’s less than a certain number, it will be heads.
// If it’s greater than a certain number, it will be tails.
if (coinFlip === 0) {
  if (choice === "heads") {
    console.log("The flip was heads and you chose heads...you win!"); // User chose heads
  } else {
    console.log("The flip was heads but you chose tails...you lose!"); // User chose tails
  }
}
// If the result is tails and the user selects heads, display the following message within an alert:
// The flip was tails but you chose heads...you lose!
// If the result is tails and the user selects tails, display the following message within an alert:
// The flip was tails and you chose tails...you win!
else {
  if (choice === "heads") {
    console.log("The flip was tails but you chose heads...you lose!"); // User chose heads
  } else {
    console.log("The flip was tails and you chose tails...you win!");
  }
}
