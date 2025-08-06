"use strict";

/*Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17),
 дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.*/
function checkAge() {
  var input = document.getElementById("ageInput");
  var result = document.getElementById("ageResult");
  var age = Number(input.value);

  if (isNaN(age) || input.value.trim() === "" || age < 0) {
    result.textContent = "Будь ласка, введіть коректний вік.";
    result.classList.remove("text-success");
    result.classList.add("text-danger");
    return;
  }

  var message = "";

  if (age <= 11) {
    message = "Ви - дитина.";
  } else if (age <= 17) {
    message = "Ви - підліток.";
  } else if (age <= 59) {
    message = "Ви - дорослий.";
  } else {
    message = "Ви - пенсіонер.";
  }

  result.textContent = message;
  result.classList.remove("text-danger");
  result.classList.add("text-success");
}
/*Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований
 на цій клавіші (1 !, 2 @, 3 # і т. д)*/


function isEven(n) {
  var symbol = '';

  if (n === 0) {
    symbol = ')';
  } else if (n === 1) {
    symbol = '!';
  } else if (n === 2) {
    symbol = '@';
  } else if (n === 3) {
    symbol = '#';
  } else if (n === 4) {
    symbol = '$';
  } else if (n === 5) {
    symbol = '%';
  } else if (n === 6) {
    symbol = '^';
  } else if (n === 7) {
    symbol = '&';
  } else if (n === 8) {
    symbol = '*';
  } else if (n === 9) {
    symbol = '(';
  } else {
    symbol = 'Unexpected value. Allow only numbers in range 0...9';
  }

  document.getElementById('rez').innerText = symbol;
} //Підрахуй суму всіх чисел в заданому користувачем діапазоні.


function checkNumber() {
  var n = Number(document.getElementById("numberInput").value.trim());
  var symbol = '';

  switch (n) {
    case 1:
      symbol = '!';
      break;

    case 2:
      symbol = "@";
      break;

    case 3:
      symbol = '#';
      break;

    case 4:
      symbol = '$';
      break;

    case 5:
      symbol = '^';
      break;

    case 6:
      symbol = '&';
      break;

    case 7:
      symbol = '*';
      break;

    case 8:
      symbol = '*';
      break;

    case 9:
      symbol = '(';
      break;

    case 0:
      symbol = ')';

    default:
      symbol = 'Введіть цифру від 0 до 9';
  }

  document.getElementById('checkNumber').innerText = symbol;
} //Запитай у користувача 2 числа і знайди найбільший спільний дільник.


function calculateSum() {
  var start = Number(document.getElementById("startInput").value);
  var end = Number(document.getElementById("endInput").value);
  var result = document.getElementById("sumResult");

  if (isNaN(start) || isNaN(end)) {
    result.textContent = "Будь ласка, введіть числа.";
    result.classList.replace("text-primary", "text-danger");
    return;
  }

  if (start > end) {
    result.textContent = "Початкове число має бути меншим або рівним кінцевому.";
    result.classList.replace("text-primary", "text-danger");
    return;
  }

  var sum = 0;

  for (var i = start; i <= end; i++) {
    sum += i;
  }

  result.textContent = "\u0421\u0443\u043C\u0430 \u0447\u0438\u0441\u0435\u043B \u0432\u0456\u0434 ".concat(start, " \u0434\u043E ").concat(end, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(sum);
  result.classList.replace("text-danger", "text-primary");
} //Запитай у користувача число і виведи всі дільники цього числа


function findGCD() {
  var a = Number(document.getElementById("firstNumber").value);
  var b = Number(document.getElementById("secondNumber").value);
  var result = document.getElementById("gcdResult");

  if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    result.textContent = "Введіть два додатні числа.";
    result.classList.replace("text-primary", "text-danger");
    return;
  }

  var x = a;
  var y = b;

  while (y !== 0) {
    var temp = y;
    y = x % y;
    x = temp;
  }

  result.textContent = "\u041D\u0421\u0414 \u0447\u0438\u0441\u0435\u043B ".concat(a, " \u0456 ").concat(b, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(x);
  result.classList.replace("text-danger", "text-primary");
} //Запитай у користувача число і виведи всі дільники цього числа.


function findDivisors() {
  var num = parseInt(document.getElementById("divisorInput").value);
  var result = document.getElementById("divisorResult");

  if (isNaN(num) || num <= 0) {
    result.textContent = "Будь ласка, введіть додатне число.";
    return;
  }

  var divisors = [];

  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  result.textContent = "\u0414\u0456\u043B\u044C\u043D\u0438\u043A\u0438 \u0447\u0438\u0441\u043B\u0430 ".concat(num, ": ").concat(divisors.join(", "));
} //Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


function checkPalindrome() {
  var input = document.getElementById("palindromeInput").value.trim();
  var result = document.getElementById("palindromeResult");
  var reversed = input.split("").reverse().join("");

  if (input === reversed) {
    result.textContent = "".concat(input, " - \u0446\u0435 \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C.");
  } else {
    result.textContent = "".concat(input, " - \u0446\u0435 \u043D\u0435 \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C.");
  }
}
/*Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%.*/


function calculateDiscount() {
  var purchaseAmount = parseFloat(document.getElementById("purchaseAmount").value);
  var result = document.getElementById("finalAmount");

  if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
    result.textContent = "Будь ласка, введіть коректне число більше за 0.";
  } else {
    var discount = 0;

    if (purchaseAmount >= 200 && purchaseAmount < 300) {
      discount = 0.03;
    } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
      discount = 0.05;
    } else if (purchaseAmount >= 500) {
      discount = 0.07;
    }

    var finalAmount = purchaseAmount * (1 - discount);
    result.textContent = "\u0421\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E: ".concat(finalAmount.toFixed(2), " \u0433\u0440\u043D.");
  }
}
/*Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.
 При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної
 (не 10) для введення чисел користувачем*/


var count = 0;
var positive = 0;
var negative = 0;
var zeros = 0;
var even = 0;
var odd = 0;

function analyzeNumbers() {
  var input = document.getElementById("stats");
  var progressMessage = document.getElementById("progressMessage");
  var result = document.getElementById("resultStats");
  var value = parseFloat(input.value);

  if (isNaN(value)) {
    progressMessage.innerText = "Введіть коректне число.";
    return;
  }

  if (count >= 10) {
    progressMessage.innerText = "Ви ввели 10 чисел";
    return;
  }

  count++;
  if (value > 0) positive++;else if (value < 0) negative++;else zeros++;
  if (value % 2 === 0) even++;else odd++;
  progressMessage.innerText = "\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 ".concat(count, " \u0437 10 \u0447\u0438\u0441\u0435\u043B.");
  input.value = "";
  input.focus();

  if (count === 10) {
    result.innerHTML = "\n       <strong>\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B:</strong><br>\n       \u0414\u043E\u0434\u0430\u0442\u043D\u0456\u0445: ".concat(positive, "<br>\n       \u0412\u0456\u0434\u2019\u0454\u043C\u043D\u0438\u0445: ").concat(negative, "<br>\n       \u041D\u0443\u043B\u0456\u0432: ").concat(zeros, "<br>\n       \u041F\u0430\u0440\u043D\u0438\u0445: ").concat(even, "<br>\n       \u041D\u0435\u043F\u0430\u0440\u043D\u0438\u0445: ").concat(odd, "\n    ");
  }
} //Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.


function showWeekdays() {
  var weekdays = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота', 'Неділя'];
  var i = 0;

  while (true) {
    var answer = confirm("".concat(weekdays[i], ". \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C?"));
    if (!answer) break;
    i = (i + 1) % weekdays.length;
  }
}
/*Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй 
результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і 
отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про 
алгоритм: "бінарний пошук").*/


var min, max, guess;

function startGame() {
  min = 0;
  max = 100;
  guess = Math.floor((min + max) / 2);
  document.getElementById("gameMessage").innerText = "\u0417\u0430\u0433\u0430\u0434\u0430\u0439\u0442\u0435 \u0447\u0438\u0441\u043B\u043E \u0432\u0456\u0434 0 \u0434\u043E 100. \u041C\u043E\u0454 \u043F\u0440\u0438\u043F\u0443\u0449\u0435\u043D\u043D\u044F: ".concat(guess);
  document.getElementById("controls").style.display = "block";
  document.getElementById("startButton").style.display = "none";
}

function handleGuess(response) {
  if (response === ">") {
    min = guess + 1;
  } else if (response === "<") {
    max = guess - 1;
  } else if (response === "==") {
    document.getElementById("gameMessage").innerText = "\u0423\u0440\u0430! \u042F \u0432\u0433\u0430\u0434\u0430\u043B\u0430 \u0442\u0432\u043E\u0454 \u0447\u0438\u0441\u043B\u043E: ".concat(guess);
    document.getElementById("controls").style.display = "none";
    document.getElementById("startButton").innerText = "Грати ще раз";
    document.getElementById("startButton").style.display = "inline-block";
    return;
  }

  if (min > max) {
    document.getElementById("gameMessage").innerText = "Щось пішло не так. Перевір відповідь.";
    document.getElementById("controls").style.display = "none";
    document.getElementById("startButton").innerText = "Спробувати знову";
    document.getElementById("startButton").style.display = "inline-block";
    return;
  }

  guess = Math.floor((min + max) / 2);
  document.getElementById("gameMessage").innerText = "\u041C\u043E\u0454 \u043F\u0440\u0438\u043F\u0443\u0449\u0435\u043D\u043D\u044F: ".concat(guess);
}

function leapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

function getDaysInMonth(month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;

    case 4:
    case 6:
    case 9:
    case 11:
      return 30;

    case 2:
      return leapYear(year) ? 29 : 28;

    default:
      return 0;
  }
} //Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.


function calculateNextDate() {
  var day = Number(document.getElementById("day").value);
  var month = Number(document.getElementById("month").value);
  var year = Number(document.getElementById("year").value);
  var result = document.getElementById("result");

  if (isNaN(day) || isNaN(month) || isNaN(year) || month < 1 || month > 12 || day < 1 || day > getDaysInMonth(month, year)) {
    result.textContent = "Будь ласка, введіть коректну дату.";
    result.classList.replace("text-success", "text-danger");
    return;
  }

  day++;
  var daysInMonth = getDaysInMonth(month, year);

  if (day > daysInMonth) {
    day = 1;
    month++;

    if (month > 12) {
      month = 1;
      year++;
    }
  }

  result.classList.replace("text-danger", "text-success");
  result.textContent = "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430 \u0434\u0430\u0442\u0430: ".concat(day, ".").concat(month, ".").concat(year);
}