const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const result = document.getElementById('result');
const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', function() {
  const firstNumber = parseFloat(num1.value);
  const secondNumber = parseFloat(num2.value);
  const selectedOperation = operation.value;

  let calculatedResult;
  switch (selectedOperation) {
    case "add":
      calculatedResult = firstNumber + secondNumber;
      break;
    case "subtract":
      calculatedResult = firstNumber - secondNumber;
      break;
    case "multiply":
      calculatedResult = firstNumber * secondNumber;
      break;
    case "divide":
      if (secondNumber === 0) {
        result.textContent = "Error: Division by zero";
        return;
      }
      calculatedResult = firstNumber / secondNumber;
      break;
    default:
      result.textContent = "Error: Invalid operation";
  }

  result.textContent = "Result: " + calculatedResult;
});
