
function askName() {
const username = prompt("Enter your name")
alert(`Hello, ${username}!`);
}

function askBirthday() {
    const BIRTH_YEAR = prompt("У якому ти році народився/лась?");
        const CURRENT_YEAR = 2025;
        const age = CURRENT_YEAR - BIRTH_YEAR;
        alert("Тобі приблизно " + age + " років.");
}

function askPerimeter() {
    const sideLength = prompt("Введи довжину сторони квадрата (у см):");
    const perimeter = 4 * sideLength;
    alert("Периметр квадрата: " + perimeter + " см");
}

function askCircleArea() {
const r = Number(prompt("Введіть радіус кола в сантиметрах:"));
const s = Math.PI * r**2;
alert(`Площа кола з радіусом ${r} см = ${s.toFixed(2)} см²`);
}

function convertUsdToEur() {
    const exchangeRate = 0.85;
    const dollars = Number(prompt("Введіть суму в доларах (USD):"));
    const euros = dollars * exchangeRate;
  
    alert(`${dollars} USD = ${euros.toFixed(2)} EUR`);
  }
  