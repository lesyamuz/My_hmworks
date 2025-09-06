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

  
  normalize: function() {
    
    if (this.seconds >= 60) {
      this.minutes += Math.floor(this.seconds / 60);
      this.seconds = this.seconds % 60;
    }

    if (this.minutes >= 60) {
      this.hours += Math.floor(this.minutes / 60);
      this.minutes = this.minutes % 60;
    }

    
    this.hours = this.hours % 24;

    
    if (this.seconds < 0 || this.minutes < 0 || this.hours < 0) {
      let total = this.hours * 3600 + this.minutes * 60 + this.seconds;
      total = ((total % 86400) + 86400) % 86400; 
      this.hours = Math.floor(total / 3600);
      this.minutes = Math.floor((total % 3600) / 60);
      this.seconds = total % 60;
    }
  },

  addSeconds: function(sec) {
    this.seconds += sec;
    this.normalize();
    this.show();
  },

  addMinutes: function(min) {
    this.minutes += min;
    this.normalize();
    this.show();
  },

  
  addHours: function(h) {
    this.hours += h;
    this.normalize();
    this.show();
  }
}