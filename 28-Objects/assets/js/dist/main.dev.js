"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var car = {
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
  var result = document.getElementById("result");
  result.innerHTML = "\n      \u0412\u0438\u0440\u043E\u0431\u043D\u0438\u043A: ".concat(car.manufacturer, " <br>\n      \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(car.model, " <br>\n      \u0420\u0456\u043A \u0432\u0438\u043F\u0443\u0441\u043A\u0443: ").concat(car.year, " <br>\n      \u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C: ").concat(car.averageSpeed, " \u043A\u043C/\u0433\u043E\u0434 <br>\n      \u041E\u0431\u0441\u044F\u0433 \u043F\u0430\u043B\u0438\u0432\u043D\u043E\u0433\u043E \u0431\u0430\u043A\u0443: ").concat(car.fuelTank, " \u043B <br>\n      \u0412\u0438\u0442\u0440\u0430\u0442\u0430 \u043F\u0430\u043B\u0438\u0432\u0430: ").concat(car.fuelConsumption, " \u043B/100 \u043A\u043C <br>\n      \u0412\u043E\u0434\u0456\u0457: ").concat(car.drivers.join(", ") || "немає водіїв", "\n  ");
}

function addDriver() {
  var name = document.getElementById("driverName").value.trim();

  if (name && !car.drivers.includes(name)) {
    car.drivers.push(name);
    document.getElementById("result").textContent = "".concat(name, " \u0434\u043E\u0434\u0430\u043D\u0438\u0439 \u0434\u043E \u0441\u043F\u0438\u0441\u043A\u0443 \u0432\u043E\u0434\u0456\u0457\u0432.");
  } else {
    document.getElementById("result").textContent = "".concat(name, " \u0432\u0436\u0435 \u0454 \u0443 \u0441\u043F\u0438\u0441\u043A\u0443 \u0430\u0431\u043E \u0456\u043C'\u044F \u043F\u0443\u0441\u0442\u0435.");
  }
}

function checkDriver() {
  var name = document.getElementById("driverName").value.trim();
  var result = document.getElementById("result");

  if (car.drivers.includes(name)) {
    result.textContent = "".concat(name, " \u0454 \u0443 \u0441\u043F\u0438\u0441\u043A\u0443 \u0432\u043E\u0434\u0456\u0457\u0432.");
  } else {
    result.textContent = "".concat(name, " \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439 \u0443 \u0441\u043F\u0438\u0441\u043A\u0443 \u0432\u043E\u0434\u0456\u0457\u0432.");
  }
}

function calculateTrip() {
  updateCarFromForm();
  var distance = parseFloat(document.getElementById("distance").value);

  if (isNaN(distance) || distance <= 0) {
    document.getElementById("result").textContent = "Введіть коректну відстань!";
    return;
  }

  var time = distance / car.averageSpeed;
  var breaks = Math.floor(time / 4);
  time += breaks;
  var fuel = distance / 100 * car.fuelConsumption;
  document.getElementById("result").innerHTML = "\n      \u0427\u0430\u0441 \u0443 \u0434\u043E\u0440\u043E\u0437\u0456 (\u0437 \u043F\u0435\u0440\u0435\u0440\u0432\u0430\u043C\u0438): ".concat(time.toFixed(2), " \u0433\u043E\u0434\u0438\u043D <br>\n      \u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0430\u043B\u0438\u0432\u0430: ").concat(fuel.toFixed(2), " \u043B\n  ");
}

var time = {
  hours: 20,
  minutes: 59,
  seconds: 45,
  show: function show() {
    document.getElementById("timeResult").textContent = "".concat(this.hours.toString().padStart(2, "0"), ":") + "".concat(this.minutes.toString().padStart(2, "0"), ":") + "".concat(this.seconds.toString().padStart(2, "0"));
  },
  setTotalSeconds: function setTotalSeconds(total) {
    total = (total % 86400 + 86400) % 86400;
    this.hours = Math.floor(total / 3600);
    this.minutes = Math.floor(total % 3600 / 60);
    this.seconds = total % 60;
  },
  addSeconds: function addSeconds(sec) {
    var total = this.hours * 3600 + this.minutes * 60 + this.seconds + sec;
    this.setTotalSeconds(total);
    this.show();
  },
  addMinutes: function addMinutes(min) {
    this.addSeconds(min * 60);
  },
  addHours: function addHours(h) {
    this.addSeconds(h * 3600);
  }
};
var fraction = {
  create: function create(n, d) {
    if (d === 0) throw new Error("Знаменник не може бути 0!");
    return {
      numerator: n,
      denominator: d
    };
  },
  gcd: function gcd(a, b) {
    return b === 0 ? a : this.gcd(b, a % b);
  },
  simplify: function simplify(fr) {
    var divisor = this.gcd(Math.abs(fr.numerator), Math.abs(fr.denominator));
    return {
      numerator: fr.numerator / divisor,
      denominator: fr.denominator / divisor
    };
  },
  add: function add(fr1, fr2) {
    return this.simplify(this.create(fr1.numerator * fr2.denominator + fr2.numerator * fr1.denominator, fr1.denominator * fr2.denominator));
  },
  subtract: function subtract(fr1, fr2) {
    return this.simplify(this.create(fr1.numerator * fr2.denominator - fr2.numerator * fr1.denominator, fr1.denominator * fr2.denominator));
  },
  multiply: function multiply(fr1, fr2) {
    return this.simplify(this.create(fr1.numerator * fr2.numerator, fr1.denominator * fr2.denominator));
  },
  divide: function divide(fr1, fr2) {
    if (fr2.numerator === 0) throw new Error("Ділення на нуль!");
    return this.simplify(this.create(fr1.numerator * fr2.denominator, fr1.denominator * fr2.numerator));
  },
  toString: function toString(fr) {
    return "".concat(fr.numerator, "/").concat(fr.denominator);
  }
};

function getFractions() {
  var num1 = parseInt(document.getElementById("num1").value) || 0;
  var den1 = parseInt(document.getElementById("den1").value) || 1;
  var num2 = parseInt(document.getElementById("num2").value) || 0;
  var den2 = parseInt(document.getElementById("den2").value) || 1;
  return [fraction.create(num1, den1), fraction.create(num2, den2)];
}

function calc(op) {
  try {
    var _getFractions = getFractions(),
        _getFractions2 = _slicedToArray(_getFractions, 2),
        f1 = _getFractions2[0],
        f2 = _getFractions2[1];

    var result;

    switch (op) {
      case "add":
        result = fraction.add(f1, f2);
        break;

      case "subtract":
        result = fraction.subtract(f1, f2);
        break;

      case "multiply":
        result = fraction.multiply(f1, f2);
        break;

      case "divide":
        result = fraction.divide(f1, f2);
        break;
    }

    document.getElementById("fracResult").textContent = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(fraction.toString(result));
  } catch (e) {
    document.getElementById("fracResult").textContent = "\u041F\u043E\u043C\u0438\u043B\u043A\u0430: ".concat(e.message);
  }
}