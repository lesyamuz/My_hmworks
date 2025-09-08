const car = {
  manufacturer: "",
  model: "",
  year: 0,
  averageSpeed: 0,
  fuelTank: 0,
  fuelConsumption: 0,
  drivers: []
};

function updateCarFromForm() {
  car.manufacturer = document.getElementById("manufacturer").value;
  car.model = document.getElementById("model").value;
  car.year = parseInt(document.getElementById("year").value);
  car.averageSpeed = parseInt(document.getElementById("speed").value);
  car.fuelTank = parseFloat(document.getElementById("fuelTank").value);
  car.fuelConsumption = parseFloat(document.getElementById("fuelConsumption").value);
}

function showInfo() {
  updateCarFromForm();
  const result = document.getElementById("result");
  result.innerHTML = `
      Виробник: ${car.manufacturer} <br>
      Модель: ${car.model} <br>
      Рік випуску: ${car.year} <br>
      Середня швидкість: ${car.averageSpeed} км/год <br>
      Обсяг паливного баку: ${car.fuelTank} л <br>
      Витрата палива: ${car.fuelConsumption} л/100 км <br>
      Водії: ${car.drivers.join(", ") || "немає водіїв"}
  `;
}

function addDriver() {
  const name = document.getElementById("driverName").value.trim();
  if (name && !car.drivers.includes(name)) {
      car.drivers.push(name);
      document.getElementById("result").textContent = `${name} доданий до списку водіїв.`;
  } else {
      document.getElementById("result").textContent = `${name} вже є у списку або ім'я пусте.`;
  }
}

function checkDriver() {
  const name = document.getElementById("driverName").value.trim();
  const result = document.getElementById("result");
  if (car.drivers.includes(name)) {
      result.textContent = `${name} є у списку водіїв.`;
  } else {
      result.textContent = `${name} відсутній у списку водіїв.`;
  }
}

function calculateTrip() {
  updateCarFromForm();
  const distance = parseFloat(document.getElementById("distance").value);
  if (isNaN(distance) || distance <= 0) {
      document.getElementById("result").textContent = "Введіть коректну відстань!";
      return;
  }
  let time = distance / car.averageSpeed;
  const breaks = Math.floor(time / 4);
  time += breaks;
  const fuel = (distance / 100) * car.fuelConsumption;

  document.getElementById("result").innerHTML = `
      Час у дорозі (з перервами): ${time.toFixed(2)} годин <br>
      Кількість палива: ${fuel.toFixed(2)} л
  `;
}

const time = {
  hours: 20,
  minutes: 59,
  seconds: 45,

  show: function() {
    document.getElementById("timeResult").textContent =
      `${this.hours.toString().padStart(2, "0")}:` +
      `${this.minutes.toString().padStart(2, "0")}:` +
      `${this.seconds.toString().padStart(2, "0")}`;
  },

  setTotalSeconds: function(total) {
    total = ((total % 86400) + 86400) % 86400;
    this.hours = Math.floor(total / 3600);
    this.minutes = Math.floor((total % 3600) / 60);
    this.seconds = total % 60;
  },

  addSeconds: function(sec) {
    let total = this.hours * 3600 + this.minutes * 60 + this.seconds + sec;
    this.setTotalSeconds(total);
    this.show();
  },

  addMinutes: function(min) {
    this.addSeconds(min * 60);
  },

  addHours: function(h) {
    this.addSeconds(h * 3600);
  }
};


const fraction = {
      create: function(n, d) {
        if (d === 0) throw new Error("Знаменник не може бути 0!");
        return { numerator: n, denominator: d };
      },
      gcd: function(a, b) {
        return b === 0 ? a : this.gcd(b, a % b);
      },
      simplify: function(fr) {
        const divisor = this.gcd(Math.abs(fr.numerator), Math.abs(fr.denominator));
        return {
          numerator: fr.numerator / divisor,
          denominator: fr.denominator / divisor
        };
      },
      add: function(fr1, fr2) {
        return this.simplify(this.create(
          fr1.numerator * fr2.denominator + fr2.numerator * fr1.denominator,
          fr1.denominator * fr2.denominator
        ));
      },
      subtract: function(fr1, fr2) {
        return this.simplify(this.create(
          fr1.numerator * fr2.denominator - fr2.numerator * fr1.denominator,
          fr1.denominator * fr2.denominator
        ));
      },
      multiply: function(fr1, fr2) {
        return this.simplify(this.create(
          fr1.numerator * fr2.numerator,
          fr1.denominator * fr2.denominator
        ));
      },
      divide: function(fr1, fr2) {
        if (fr2.numerator === 0) throw new Error("Ділення на нуль!");
        return this.simplify(this.create(
          fr1.numerator * fr2.denominator,
          fr1.denominator * fr2.numerator
        ));
      },
      toString: function(fr) {
        return `${fr.numerator}/${fr.denominator}`;
      }
    };

    function getFractions() {
      const num1 = parseInt(document.getElementById("num1").value) || 0;
      const den1 = parseInt(document.getElementById("den1").value) || 1;
      const num2 = parseInt(document.getElementById("num2").value) || 0;
      const den2 = parseInt(document.getElementById("den2").value) || 1;
      return [fraction.create(num1, den1), fraction.create(num2, den2)];
    }

    function calc(op) {
      try {
        const [f1, f2] = getFractions();
        let result;
        switch (op) {
          case "add": result = fraction.add(f1, f2); break;
          case "subtract": result = fraction.subtract(f1, f2); break;
          case "multiply": result = fraction.multiply(f1, f2); break;
          case "divide": result = fraction.divide(f1, f2); break;
        }
        document.getElementById("fracResult").textContent = `Результат: ${fraction.toString(result)}`;
      } catch (e) {
        document.getElementById("fracResult").textContent = `Помилка: ${e.message}`;
      }
    }