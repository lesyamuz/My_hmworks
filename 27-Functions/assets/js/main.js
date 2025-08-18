// Function Declaration
function func1(a, b) {
  return a + b;
}

// Function Expression
const func2 = function(a, b) {
  return a + b;
};

// Arrow Function
const func3 = (a, b) => a + b;

// Function Constructor
const func4 = new Function('a', 'b', 'return a + b');

// Method in Object
const obj = {
  func5(a, b) {
    return a + b;
  }
};

// Function to display result on page
function showResult(type) {
  let result;
  switch(type) {
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
  document.getElementById("output").textContent = `Result of ${type}: ${result}`;
}


//Створи функцію, яка буде виводити кількість переданих їй аргументів.

function countArgs(...args) {
  return args.length;
}

function countArgsFromInput() {
  const input = document.getElementById("argInput").value;
  
  const args = input.split(",").map(arg => arg.trim()).filter(arg => arg !== "");

  const result = countArgs(...args);

  document.getElementById("argResult").textContent = 
    `Кількість переданих аргументів: ${result}`;
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
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = compareNumbers(num1, num2);
  document.getElementById("compareResult").innerText = "Результат: " + result;
}


//Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(n) {
  if (n < 0) return "Факторіал для від’ємних чисел не існує";
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function showFactorial() {
  const num = parseInt(document.getElementById("factorialInput").value);
  const result = factorial(num);
  document.getElementById("factorialResult").innerText = "Факторіал числа " + num + " = " + result;
}

//Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function combineDigits(a, b, c) {
  if ([a,b,c].some(d => d < 0 || d > 9)) {
    return "Всі значення повинні бути цифрами від 0 до 9";
  }
  return a * 100 + b * 10 + c;
}

function showCombinedNumber() {
  const d1 = parseInt(document.getElementById("digit1").value);
  const d2 = parseInt(document.getElementById("digit2").value);
  const d3 = parseInt(document.getElementById("digit3").value);
  const result = combineDigits(d1, d2, d3);
  document.getElementById("combinedResult").innerText = "Об’єднане число: " + result;
}

//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function calculateArea(length, width) {
  if (width === undefined || width === 0) {
    return length * length; 
  } else {
    return length * width;
  }
}

function showArea() {
  const length = Number(document.getElementById("lengthInput").value);
  const width = Number(document.getElementById("widthInput").value);
  
  if (!length) {
    document.getElementById("areaResult").textContent = "Введіть довжину!";
    return;
  }
  
  const area = calculateArea(length, width);
  document.getElementById("areaResult").textContent = "Площа: " + area;
}

//Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function isPerfectNumber(num) {
  if (num <= 0) return false;
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}

function checkPerfectNumber() {
  const num = parseInt(document.getElementById("numberInput").value);
  const result = document.getElementById("result");

  if (isNaN(num)) {
    result.textContent = "Будь ласка, введіть число.";
    return;
  }

  if (isPerfectNumber(num)) {
    result.textContent = `Число ${num} є досконалим.`;
  } else {
    result.textContent = `Число ${num} НЕ є досконалим.`;
  }
}

/*Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. 
Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.*/

function findPerfectNumbersInRange(min, max) {
  const perfectNumbers = [];
  for (let i = min; i <= max; i++) {
    if (isPerfectNumber(i)) perfectNumbers.push(i);
  }
  return perfectNumbers;
}

function showPerfectNumbers() {
  const min = parseInt(document.getElementById("minValue").value);
  const max = parseInt(document.getElementById("maxValue").value);
  const resultDiv = document.getElementById("PerfectNumbersResult");

  if (isNaN(min) || isNaN(max)) {
    resultDiv.textContent = "Будь ласка, введіть обидва числа.";
    return;
  }
  if (min > max) {
    resultDiv.textContent = "Мінімум не може бути більше за максимум.";
    return;
  }

  const perfectNumbers = findPerfectNumbersInRange(min, max);

  if (perfectNumbers.length > 0) {
    resultDiv.textContent = `Досконалі числа у діапазоні: ${perfectNumbers.join(", ")}`;
  } else {
    resultDiv.textContent = "У цьому діапазоні немає досконалих чисел.";
  }
}