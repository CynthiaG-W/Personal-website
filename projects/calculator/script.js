
let history = [];

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
}

function logToConsole(a, b, operation, result) {

  history.push({ a, b, operation, result });

  const consoleDiv = document.getElementById('console');

  const p = document.createElement('p');

  p.textContent = `Number 1: ${a}, Number 2: ${b}, Operation: ${operation}, Result: ${result}`;

  consoleDiv.appendChild(p);

  consoleDiv.scrollTop = consoleDiv.scrollHeight;

  console.log(`Number 1: ${a}, Number 2: ${b}, Operation: ${operation}, Result: ${result}`);
}

function calculate(operation) {

  let a = parseFloat(document.getElementById('num1').value);
  let b = parseFloat(document.getElementById('num2').value);

  if (isNaN(a) || isNaN(b)) {
    alert("Please enter valid numbers!");
    return;
  }

  let result;
  switch(operation) {
    case 'add':
      result = add(a, b);
      break;
    case 'subtract':
      result = subtract(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'divide':
      result = divide(a, b);
      break;
    default:
      result = "Invalid operation";
  }

  document.getElementById('result').textContent = result;

  logToConsole(a, b, operation, result);

}

// Display full history
function displayHistory() {
  const consoleDiv = document.getElementById("console");

  if (history.length === 0) {
    consoleDiv.innerHTML = "<p>No calculations yet.</p>";
    return;
  }

  consoleDiv.innerHTML = "";

  history.forEach(entry => {
    const p = document.createElement("p");
    p.textContent = `Number 1: ${entry.a}, Number 2: ${entry.b}, Operation: ${entry.operation}, Result: ${entry.result}`;
    consoleDiv.appendChild(p);
  });

}

function clearHistory() {
  history = [];
  const consoleDiv = document.getElementById('console');
  consoleDiv.innerHTML = ""; localStorage
  console.log("History cleared.");
}