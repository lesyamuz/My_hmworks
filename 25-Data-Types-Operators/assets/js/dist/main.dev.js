"use strict";

function addNumbers() {
  var sum = 0.1 + 0.2;
  var fixedSum = parseFloat(sum.toFixed(2));
  alert("0.1 + 0.2 = ".concat(fixedSum));
}

function addStringNumber() {
  var a = "1";
  var b = 2;
  var result = parseInt(a) + b;
  alert("a + b = ".concat(result));
}

function calculateFiles() {
  var flashSizeGb = parseFloat(prompt("Введіть обсяг флешки в ГБ:"));
  var flashSizeMb = flashSizeGb * 1024;
  var fileSize = 820;
  var filesCount = parseInt(flashSizeMb / fileSize);
  alert("\u041D\u0430 \u0444\u043B\u0435\u0448\u043A\u0443 \u043F\u043E\u043C\u0456\u0441\u0442\u0438\u0442\u044C\u0441\u044F ".concat(filesCount, " \u0444\u0430\u0439\u043B\u0456\u0432 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C 820 \u041C\u0411."));
}

function count() {
  var money = parseFloat(document.getElementById("money").value);
  var price = parseFloat(document.getElementById("price").value);
  var output = document.getElementById("rez_1");
  var count = parseInt(money / price);
  var change = (money - count * price).toFixed(2);
  output.textContent = "\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u0438 ".concat(count, " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A(\u0438). \u0420\u0435\u0448\u0442\u0430: ").concat(change, " \u0433\u0440\u043D.");
}

function reverseNumber() {
  var inputN = document.getElementById("threeDigitInput").value;
  var output = document.getElementById("rez_2");
  var number = parseInt(inputN);

  if (isNaN(number) || number < 100 || number > 999) {
    output.textContent = "Введіть, будь ласка, тризначне число";
    return;
  }

  var digit1 = number % 10;
  var digit2 = parseInt(number % 100 / 10);
  var digit3 = parseInt(number / 100);
  var reserved = "".concat(digit1).concat(digit2).concat(digit3);
  output.textContent = "\u0417\u0430\u0434\u043E\u043C \u043D\u0430\u043F\u0435\u0440\u0435\u0434: ".concat(reserved);
}

function calculateInterest() {
  var depositInput = document.getElementById("depositSum");
  var output = document.getElementById("rez_3");
  var deposit = parseFloat(depositInput.value);
  var annualRate = 5;
  var months = 2;

  if (isNaN(deposit) || deposit <= 0) {
    output.textContent = "Введіть, будь ласка, коректну суму вкладу";
    return;
  }

  var interest = deposit * (annualRate / 100) * (months / 12);
  var roundedInterest = interest.toFixed(2);
  output.textContent = "\u0421\u0443\u043C\u0430 \u043D\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432 \u0437\u0430 ".concat(months, " \u043C\u0456\u0441\u044F\u0446\u0456: ").concat(roundedInterest, " \u0433\u0440\u043D.");
}