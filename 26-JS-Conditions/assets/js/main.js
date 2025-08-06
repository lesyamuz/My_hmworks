
/*Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17),
 дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.*/

function checkAge() {
    const input = document.getElementById("ageInput");
    const result = document.getElementById("ageResult");
    const age = Number(input.value);

    if (isNaN(age) || input.value.trim() === "" || age < 0) {
      result.textContent = "Будь ласка, введіть коректний вік.";
      result.classList.remove("text-success");
      result.classList.add("text-danger");
      return;
    }

    let message = "";

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
    let symbol = ''
    if (n===0){
        symbol = ')'
    }
    else if (n===1){
        symbol = '!'
    }
    else if (n===2){
        symbol = '@'
    }
    else if (n===3){
        symbol = '#'
    }
    else if (n===4){
        symbol = '$'
    }
    else if (n===5){
        symbol = '%'
    }
    else if (n===6){
        symbol = '^'
    }
    else if (n===7){
        symbol = '&'
    }
    else if (n===8){
        symbol = '*'
    }
    else if (n===9){
        symbol = '('
    }
    else {
        symbol = 'Unexpected value. Allow only numbers in range 0...9'
    }
    document.getElementById('rez').innerText = symbol
}

//Підрахуй суму всіх чисел в заданому користувачем діапазоні.

function checkNumber() {
    const n = Number(document.getElementById("numberInput").value.trim());
    let symbol = '';
    switch(n){
        case 1:
            symbol = '!'
            break
        case 2:
        symbol = "@"
            break
        case 3:
        symbol = '#'
            break
        case 4:
        symbol = '$'
            break
        case 5:
        symbol = '^'
            break
        case 6:
        symbol = '&'
            break
        case 7:
        symbol = '*'
            break
        case 8:
        symbol = '*'
            break
        case 9:
        symbol = '('
            break
        case 0:
        symbol = ')'
        default:
            symbol = 'Введіть цифру від 0 до 9';
        }
    
        document.getElementById('checkNumber').innerText = symbol;
      }

//Запитай у користувача 2 числа і знайди найбільший спільний дільник.

      function calculateSum() {
        const start = Number(document.getElementById("startInput").value);
        const end = Number(document.getElementById("endInput").value);
        const result = document.getElementById("sumResult");
    
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
    
        let sum = 0;
        for (let i = start; i <= end; i++) {
          sum += i;
        }
    
        result.textContent = `Сума чисел від ${start} до ${end} дорівнює ${sum}`;
        result.classList.replace("text-danger", "text-primary");
      }

//Запитай у користувача число і виведи всі дільники цього числа

function findGCD() {
  const a = Number(document.getElementById("firstNumber").value);
  const b = Number(document.getElementById("secondNumber").value);
  const result = document.getElementById("gcdResult");

  if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    result.textContent = "Введіть два додатні числа.";
    result.classList.replace("text-primary", "text-danger");
    return;
  }

  let x = a;
  let y = b;

  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }

  result.textContent = `НСД чисел ${a} і ${b} дорівнює ${x}`;
  result.classList.replace("text-danger", "text-primary");
}


//Запитай у користувача число і виведи всі дільники цього числа.
function findDivisors() {
    const num = parseInt(document.getElementById("divisorInput").value);
    const result = document.getElementById("divisorResult");

    if (isNaN(num) || num <= 0) {
      result.textContent = "Будь ласка, введіть додатне число.";
      return;
    }

    let divisors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }

    result.textContent = `Дільники числа ${num}: ${divisors.join(", ")}`;
  }

//Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

function checkPalindrome() {
    const input = document.getElementById("palindromeInput").value.trim();
    const result = document.getElementById("palindromeResult");
  
    const reversed = input.split("").reverse().join("");
    if (input === reversed) {
      result.textContent = `${input} - це паліндром.`;
    } else {
      result.textContent = `${input} - це не паліндром.`;
    }
  }
  
  /*Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%.*/

  function calculateDiscount() {
    const purchaseAmount = parseFloat(document.getElementById("purchaseAmount").value);
    const result = document.getElementById("finalAmount");
  
    if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
      result.textContent = "Будь ласка, введіть коректне число більше за 0.";
    } else {
      let discount = 0;
  
      if (purchaseAmount >= 200 && purchaseAmount < 300) {
        discount = 0.03;
      } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
        discount = 0.05;
      } else if (purchaseAmount >= 500) {
        discount = 0.07;
      }
  
      const finalAmount = purchaseAmount * (1 - discount);
      result.textContent = `Сума до оплати зі знижкою: ${finalAmount.toFixed(2)} грн.`;
    }
  }


  /*Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.
   При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної
   (не 10) для введення чисел користувачем*/

  let count = 0;
  let positive = 0;
  let negative = 0;
  let zeros = 0;
  let even = 0;
  let odd = 0;

  function analyzeNumbers() {
    const input = document.getElementById("stats");
    const progressMessage = document.getElementById("progressMessage");
    const result = document.getElementById("resultStats");

    const value = parseFloat(input.value);

    if (isNaN(value)) {
      progressMessage.innerText = "Введіть коректне число.";
      return;
    }

    if (count >= 10) {
      progressMessage.innerText = "Ви ввели 10 чисел";
      return;
    }

    count++;

    if (value > 0) positive++;
    else if (value < 0) negative++;
    else zeros++;

    if (value % 2 === 0) even++;
    else odd++;

    progressMessage.innerText = `Ви ввели ${count} з 10 чисел.`;
    input.value = "";
    input.focus();

    if (count === 10) {
  
    result.innerHTML = `
       <strong>Статистика введених чисел:</strong><br>
       Додатніх: ${positive}<br>
       Від’ємних: ${negative}<br>
       Нулів: ${zeros}<br>
       Парних: ${even}<br>
       Непарних: ${odd}
    `;
  }
}

//Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
function showWeekdays() {
  const weekdays = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота', 'Неділя'];
  let i = 0;

  while (true) {
    const answer = confirm(`${weekdays[i]}. Хочеш побачити наступний день?`);
    if (!answer) break;
    i = (i + 1) % weekdays.length;
  }
}


/*Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй 
результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і 
отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про 
алгоритм: "бінарний пошук").*/ 

let min, max, guess;

  function startGame() {
    min = 0;
    max = 100;
    guess = Math.floor((min + max) / 2);
    document.getElementById("gameMessage").innerText =
      `Загадайте число від 0 до 100. Моє припущення: ${guess}`;
    document.getElementById("controls").style.display = "block";
    document.getElementById("startButton").style.display = "none";
  }

  function handleGuess(response) {
    if (response === ">") {
      min = guess + 1;
    } else if (response === "<") {
      max = guess - 1;
    } else if (response === "==") {
      document.getElementById("gameMessage").innerText =`Ура! Я вгадала твоє число: ${guess}`;
      document.getElementById("controls").style.display = "none";
      document.getElementById("startButton").innerText = "Грати ще раз";
      document.getElementById("startButton").style.display = "inline-block";
      return;
    }

    if (min > max) {
      document.getElementById("gameMessage").innerText =
        "Щось пішло не так. Перевір відповідь.";
      document.getElementById("controls").style.display = "none";
      document.getElementById("startButton").innerText = "Спробувати знову";
      document.getElementById("startButton").style.display = "inline-block";
      return;
    }

    guess = Math.floor((min + max) / 2);
    document.getElementById("gameMessage").innerText =`Моє припущення: ${guess}`;
  }


 
  function leapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  function getDaysInMonth(month, year) {
    switch (month) {
      case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        return 31;
      case 4: case 6: case 9: case 11:
        return 30;
      case 2:
        return leapYear(year) ? 29 : 28;
      default:
        return 0;
    }
  }

  //Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

  function calculateNextDate() {
    let day = Number(document.getElementById("day").value);
    let month = Number(document.getElementById("month").value);
    let year = Number(document.getElementById("year").value);
    const result = document.getElementById("result");

    if (
      isNaN(day) || isNaN(month) || isNaN(year) ||
      month < 1 || month > 12 || day < 1 || day > getDaysInMonth(month, year)
    ) {
      result.textContent = "Будь ласка, введіть коректну дату.";
      result.classList.replace("text-success", "text-danger");
      return;
    }

    day++;
    const daysInMonth = getDaysInMonth(month, year);

    if (day > daysInMonth) {
      day = 1;
      month++;
      if (month > 12) {
        month = 1;
        year++;
      }
    }
     result.classList.replace("text-danger", "text-success");
    result.textContent = `Наступна дата: ${day}.${month}.${year}`;
}

   
  


  
















