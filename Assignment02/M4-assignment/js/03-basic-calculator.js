// In this part of the assignment you will build a simple calculator using the skills you’ve acquired in regards to functions.

// ADD A FUNCTION CALLED CALCULATE
// Create a function that will serve as the main calculation logic of your application. This function should be called calculate and will accept three parameters: x, y, and operation.

// COLLECT FIRST NUMBER FROM USER
// In the script, prompt the user for a number and store that in a variable. Convert that to a number.

// COLLECT SECOND NUMBER FROM USER
// Then, prompt the user for a second number and store that in a variable. Convert that to a number.

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
// Next, prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
// Finally, pass the three parameters into the calculate function to return the result of the calculation.
// You'll need to add a switch statement inside the calculate function to evaluate the operation and perform the appropriate calculation on the x and y numbers based on the operation passed in.
// Display the result of the calculation within an alert.
// Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that.

function calculate(x, y, operation) {
  let result;

  switch (operation) {
    case "add":
      return x + y;
      break;
    case "subtract":
      return x - y;
      break;
    case "multiply":
      return x * y;
      break;
    case "divide":
      return x / y;
      break;
  }

  return result;
}

// Logic
function runCalculator() {
  let num1, num2, operation, result;
  let isValid = false;

  do {
    // Prompt for numbers and covert them
    num1 = Number(prompt("Enter the first number:"));
    num2 = Number(prompt("Enter the second number:"));

    // Operation prompt
    operation = prompt("Enter operation (add, subtract, multiply, divide):");

    // Operation is valid
    if (operation) {
      operation = operation.toLocaleLowerCase().trim();
    }

    // Does operation match accepted keywords
    if (
      operation === "add" ||
      operation === "subtract" ||
      operation !== "multiply" ||
      operation !== "divide"
    ) {
      isValid = true;
    } else {
      alert("Invalid operation! Please enter add, subtract, mutiply, divide.");
    }

    // Pass parameters to calculate function
    result = calculate(num1, num2, operation);
  } while (!isValid); // Reruns the application prompts if isValid is still false

  // Pass parameters to calculate funtion
  let finalResult = calculate(num1, num2, operation);

  // Display final result
  alert(`The result of your calculation is: ${finalResult}`);
}

// Execute
runCalculator();
