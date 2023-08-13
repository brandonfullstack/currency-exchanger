import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConversion from './exchange-rate';

//Business Logic

async function getResult(baseCurrency, targetCurrency, amount) {
  const response = await CurrencyConversion.getResult(baseCurrency, targetCurrency, amount);
  if (response.result === "success") {
    printResult(response);
  } else {
    printError(response);
  }
}

//UI Logic

function printResult(response) {
  let convertedDiv = document.getElementById('convertedDiv');
  let inputAmount = document.getElementById("inputAmount").value;
  let convertedAmount = response.conversion_result;
  const targetCurrency = document.getElementById("targetCurrency").value;
  convertedDiv.innerText = convertedAmount + ` ${targetCurrency}`;
  console.log(response.conversion_result);
  console.log(inputAmount);
  console.log(convertedAmount);
}

function printError(response) {
  document.querySelector('#convertedDiv').innerText = `An ${response['error-type']} was entered.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const baseCurrency = document.getElementById("baseCurrency").value;
  const targetCurrency = document.getElementById("targetCurrency").value;
  const amount = document.getElementById("inputAmount").value;
  getResult(baseCurrency, targetCurrency, amount);

}

window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});