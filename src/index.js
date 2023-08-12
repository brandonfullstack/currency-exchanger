import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './exchange-rate';

//Business Logic

async function getRate(baseCurrency, targetCurrency, amount) {
  const response = await Promise.all([
    ExchangeRate.getRate(baseCurrency, targetCurrency, amount)
  ])

  calcRate(response);
}

//UI Logic

function calcRate(response) {
  let convertedDiv = document.getElementById('convertedDiv');
  let inputAmount = document.getElementById("inputAmount").value;
  let convertedAmount = response.conversion_result;
  convertedDiv.innerText = convertedAmount;
  console.log(response.conversion_result);
  console.log(inputAmount);
  console.log(convertedAmount);
}

function handleFormSubmission(e) {
  e.preventDefault();
  let baseCurrency = document.getElementById("baseCurrency").value;
  let targetCurrency = document.getElementById("targetCurrency").value;
  let amount = document.getElementById("inputAmount").value;
  getRate(baseCurrency, targetCurrency, amount);

}

window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", handleFormSubmission)
})