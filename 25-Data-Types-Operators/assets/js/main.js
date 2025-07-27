function addNumbers() {
    const sum = 0.1 + 0.2;
  const fixedSum = parseFloat(sum.toFixed(2));
  alert(`0.1 + 0.2 = ${fixedSum}`);
}

function addStringNumber() {
    const a = "1";
    const b = 2;
    const result = parseInt(a) + b;
    alert (`a + b = ${result}`);
}

function calculateFiles() {
    const flashSizeGb = parseFloat(prompt("Введіть обсяг флешки в ГБ:"));
    const flashSizeMb = flashSizeGb * 1024; 
    const fileSize = 820; 
    const filesCount = parseInt(flashSizeMb / fileSize); 
    alert(`На флешку поміститься ${filesCount} файлів розміром 820 МБ.`);
  }

function count() {
    const money = parseFloat(document.getElementById("money").value);
    const price = parseFloat(document.getElementById("price").value);
    const output = document.getElementById("rez_1");

    const count = parseInt(money / price);
    const change = (money - count * price).toFixed(2);

    output.textContent = `Ви можете купити ${count} шоколадок(и). Решта: ${change} грн.`;
}

function reverseNumber() {
  const inputN = document.getElementById("threeDigitInput").value;
  const output = document.getElementById("rez_2");

  const number = parseInt(inputN);
  if (isNaN(number) || number < 100 || number > 999) {
    output.textContent = "Введіть, будь ласка, тризначне число";
    return;
  }

  const digit1 = number % 10;
  const digit2 = parseInt((number % 100) / 10);
  const digit3 = parseInt(number/100);

  const reserved = `${digit1}${digit2}${digit3}`;
  output.textContent = `Задом наперед: ${reserved}`;
}

function calculateInterest() {
  const depositInput = document.getElementById("depositSum");
  const output = document.getElementById("rez_3");

  const deposit = parseFloat(depositInput.value);
  const annualRate = 5; 
  const months = 2;

  if (isNaN(deposit) || deposit <= 0) {
    output.textContent = "Введіть, будь ласка, коректну суму вкладу";
    return;
  }
   
  const interest = deposit * (annualRate / 100) * (months / 12);
  const roundedInterest = interest.toFixed(2);

  output.textContent = `Сума нарахованих відсотків за ${months} місяці: ${roundedInterest} грн.`;
  }

















