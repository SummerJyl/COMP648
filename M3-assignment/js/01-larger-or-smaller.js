// Usage: Use simple conditional statements
// Create an application that accepts two integers within two separate prompts.
// Then, display only the larger of the two within the browser window.
// Don’t forget to handle the fact that the two could be equal.

// Accept two integers
let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));

// Create a simple text string for the result (document.write has been deprecated)

// Display the larger of the two numbers
if (num1 > num2) {
  console.log("Larger: " + num1);
} else if (num2 > num1) {
  console.log("Larger: " + num2);
} else {
  console.log("Both numbers are equal.");
}
