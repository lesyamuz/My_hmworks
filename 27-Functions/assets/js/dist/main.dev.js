"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Function Declaration
function func1(a, b) {
  return a + b;
} // Function Expression


var func2 = function func2(a, b) {
  return a + b;
}; // Arrow Function


var func3 = function func3(a, b) {
  return a + b;
}; // Function Constructor


var func4 = new Function('a', 'b', 'return a + b'); // Method in Object

var obj = {
  func5: function func5(a, b) {
    return a + b;
  }
}; // Function to display result on page

function showResult(type) {
  var result;

  switch (type) {
    case 'func1':
      result = func1(2, 3);
      break;

    case 'func2':
      result = func2(4, 5);
      break;

    case 'func3':
      result = func3(6, 7);
      break;

    case 'func4':
      result = func4(8, 9);
      break;

    case 'func5':
      result = obj.func5(10, 11);
      break;
  }

  document.getElementById("output").textContent = "Result of ".concat(type, ": ").concat(result);
} //Створи функцію, яка буде виводити кількість переданих їй аргументів.


function countArgs() {
  return arguments.length;
}

function countArgsFromInput() {
  var input = document.getElementById("argInput").value;
  var args = input.split(",").map(function (arg) {
    return arg.trim();
  }).filter(function (arg) {
    return arg !== "";
  });
  var result = countArgs.apply(void 0, _toConsumableArray(args));
  document.getElementById("argResult").textContent = "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u0438\u0445 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0456\u0432: ".concat(result);
}
/*Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.*/


function compareNumbers(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

function checkNumbers() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var result = compareNumbers(num1, num2);
  document.getElementById("compareResult").innerText = "Результат: " + result;
} //Напиши функцію, яка обчислює факторіал переданого їй числа.


function factorial(n) {
  if (n < 0) return "Факторіал для від’ємних чисел не існує";
  if (n === 0 || n === 1) return 1;
  var result = 1;

  for (var i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

function showFactorial() {
  var num = parseInt(document.getElementById("factorialInput").value);
  var result = factorial(num);
  document.getElementById("factorialResult").innerText = "Факторіал числа " + num + " = " + result;
} //Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.


function combineDigits(a, b, c) {
  if ([a, b, c].some(function (d) {
    return d < 0 || d > 9;
  })) {
    return "Всі значення повинні бути цифрами від 0 до 9";
  }

  return a * 100 + b * 10 + c;
}

function showCombinedNumber() {
  var d1 = parseInt(document.getElementById("digit1").value);
  var d2 = parseInt(document.getElementById("digit2").value);
  var d3 = parseInt(document.getElementById("digit3").value);
  var result = combineDigits(d1, d2, d3);
  document.getElementById("combinedResult").innerText = "Об’єднане число: " + result;
} //Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.


function calculateArea(length, width) {
  if (width === undefined || width === 0) {
    return length * length;
  } else {
    return length * width;
  }
}

function showArea() {
  var length = Number(document.getElementById("lengthInput").value);
  var width = Number(document.getElementById("widthInput").value);

  if (!length) {
    document.getElementById("areaResult").textContent = "Введіть довжину!";
    return;
  }

  var area = calculateArea(length, width);
  document.getElementById("areaResult").textContent = "Площа: " + area;
} //Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.


function isPerfectNumber(num) {
  if (num <= 0) return false;
  var sum = 0;

  for (var i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }

  return sum === num;
}

function checkPerfectNumber() {
  var num = parseInt(document.getElementById("numberInput").value);
  var result = document.getElementById("result");

  if (isNaN(num)) {
    result.textContent = "Будь ласка, введіть число.";
    return;
  }

  if (isPerfectNumber(num)) {
    result.textContent = "\u0427\u0438\u0441\u043B\u043E ".concat(num, " \u0454 \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0438\u043C.");
  } else {
    result.textContent = "\u0427\u0438\u0441\u043B\u043E ".concat(num, " \u041D\u0415 \u0454 \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0438\u043C.");
  }
}
/*Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. 
Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.*/


function findPerfectNumbersInRange(min, max) {
  var perfectNumbers = [];

  for (var i = min; i <= max; i++) {
    if (isPerfectNumber(i)) perfectNumbers.push(i);
  }

  return perfectNumbers;
}

function showPerfectNumbers() {
  var min = parseInt(document.getElementById("minValue").value);
  var max = parseInt(document.getElementById("maxValue").value);
  var resultDiv = document.getElementById("PerfectNumbersResult");

  if (isNaN(min) || isNaN(max)) {
    resultDiv.textContent = "Будь ласка, введіть обидва числа.";
    return;
  }

  if (min > max) {
    resultDiv.textContent = "Мінімум не може бути більше за максимум.";
    return;
  }

  var perfectNumbers = findPerfectNumbersInRange(min, max);

  if (perfectNumbers.length > 0) {
    resultDiv.textContent = "\u0414\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0456 \u0447\u0438\u0441\u043B\u0430 \u0443 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0456: ".concat(perfectNumbers.join(", "));
  } else {
    resultDiv.textContent = "У цьому діапазоні немає досконалих чисел.";
  }
}