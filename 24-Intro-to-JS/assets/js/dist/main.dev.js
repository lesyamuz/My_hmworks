"use strict";

function askName() {
  var username = prompt("Enter your name");
  alert("Hello, ".concat(username, "!"));
}

function askBirthday() {
  var BIRTH_YEAR = prompt("У якому ти році народився/лась?");
  var CURRENT_YEAR = 2025;
  var age = CURRENT_YEAR - BIRTH_YEAR;
  alert("Тобі приблизно " + age + " років.");
}

function askPerimeter() {
  var sideLength = prompt("Введи довжину сторони квадрата (у см):");
  var perimeter = 4 * sideLength;
  alert("Периметр квадрата: " + perimeter + " см");
}

function askCircleArea() {
  var r = Number(prompt("Введіть радіус кола в сантиметрах:"));
  var s = Math.PI * Math.pow(r, 2);
  alert("\u041F\u043B\u043E\u0449\u0430 \u043A\u043E\u043B\u0430 \u0437 \u0440\u0430\u0434\u0456\u0443\u0441\u043E\u043C ".concat(r, " \u0441\u043C = ").concat(s.toFixed(2), " \u0441\u043C\xB2"));
}

function convertUsdToEur() {
  var exchangeRate = 0.85;
  var dollars = Number(prompt("Введіть суму в доларах (USD):"));
  var euros = dollars * exchangeRate;
  alert("".concat(dollars, " USD = ").concat(euros.toFixed(2), " EUR"));
}