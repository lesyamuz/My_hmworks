"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// ===== 1️⃣ Клас, що описує коло =====
var Circle =
/*#__PURE__*/
function () {
  function Circle(radius) {
    _classCallCheck(this, Circle);

    this._radius = radius;
  }

  _createClass(Circle, [{
    key: "getArea",
    value: function getArea() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  }, {
    key: "getCircumference",
    value: function getCircumference() {
      return 2 * Math.PI * this._radius;
    }
  }, {
    key: "radius",
    get: function get() {
      return this._radius;
    },
    set: function set(value) {
      if (value <= 0) throw new Error("Радіус має бути додатнім числом");
      this._radius = value;
    }
  }, {
    key: "diameter",
    get: function get() {
      return this._radius * 2;
    }
  }]);

  return Circle;
}();

var circle = new Circle(5);
var circleOutput = "\n\u0420\u0430\u0434\u0456\u0443\u0441: ".concat(circle.radius, "\n\u0414\u0456\u0430\u043C\u0435\u0442\u0440: ").concat(circle.diameter, "\n\u041F\u043B\u043E\u0449\u0430: ").concat(circle.getArea().toFixed(2), "\n\u0414\u043E\u0432\u0436\u0438\u043D\u0430 \u043A\u043E\u043B\u0430: ").concat(circle.getCircumference().toFixed(2), "\n");
document.getElementById("circle-output").textContent = circleOutput; // ===== 2️⃣ Клас маркера =====

var Marker =
/*#__PURE__*/
function () {
  function Marker(color, inkLevel) {
    _classCallCheck(this, Marker);

    this.color = color;
    this.inkLevel = inkLevel; // у відсотках
  }

  _createClass(Marker, [{
    key: "print",
    value: function print(text, outputEl) {
      var result = "";
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _char = _step.value;

          if (_char !== " " && this.inkLevel > 0) {
            this.inkLevel -= 0.5;
          } else if (this.inkLevel <= 0) break;

          result += _char;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      outputEl.innerHTML = "<span style=\"color:".concat(this.color, "\">").concat(result, "</span><br>\u0417\u0430\u043B\u0438\u0448\u043E\u043A \u0447\u043E\u0440\u043D\u0438\u043B: ").concat(this.inkLevel.toFixed(1), "%");
    }
  }]);

  return Marker;
}();

var RefillableMarker =
/*#__PURE__*/
function (_Marker) {
  _inherits(RefillableMarker, _Marker);

  function RefillableMarker() {
    _classCallCheck(this, RefillableMarker);

    return _possibleConstructorReturn(this, _getPrototypeOf(RefillableMarker).apply(this, arguments));
  }

  _createClass(RefillableMarker, [{
    key: "refill",
    value: function refill() {
      this.inkLevel = 100;
    }
  }]);

  return RefillableMarker;
}(Marker);

var marker = new RefillableMarker("blue", 10);
var markerOutput = document.getElementById("marker-output");
document.getElementById("marker-btn").addEventListener("click", function () {
  marker.print("Hello, this is a test with a marker!", markerOutput);

  if (marker.inkLevel <= 0) {
    marker.refill();
    marker.print("Маркер перезаправлено і знову пише!", markerOutput);
  }
}); // ===== 3️⃣ Клас працівників =====

var Employee = function Employee(name, position, salary) {
  _classCallCheck(this, Employee);

  this.name = name;
  this.position = position;
  this.salary = salary;
};

var EmpTable =
/*#__PURE__*/
function () {
  function EmpTable(employees) {
    _classCallCheck(this, EmpTable);

    this.employees = employees;
  }

  _createClass(EmpTable, [{
    key: "getHtml",
    value: function getHtml() {
      var html = "\n        <table class=\"table table-bordered table-striped text-center align-middle\">\n          <thead class=\"table-dark\">\n            <tr>\n              <th>\u0406\u043C'\u044F</th>\n              <th>\u041F\u043E\u0441\u0430\u0434\u0430</th>\n              <th>\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430 (\u20AC)</th>\n            </tr>\n          </thead>\n          <tbody>";
      this.employees.forEach(function (emp) {
        html += "\n            <tr>\n              <td>".concat(emp.name, "</td>\n              <td>").concat(emp.position, "</td>\n              <td>").concat(emp.salary, "</td>\n            </tr>");
      });
      html += "</tbody></table>";
      return html;
    }
  }]);

  return EmpTable;
}();

var employees = [new Employee("Олена", "Менеджер", 1200), new Employee("Ігор", "Касир", 900), new Employee("Світлана", "Аналітик", 1500), new Employee("Марія", "Бухгалтер", 1100)];
var empTable = new EmpTable(employees);
document.getElementById("table-output").innerHTML = empTable.getHtml();