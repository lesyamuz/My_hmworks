"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WorldClock =
/*#__PURE__*/
function () {
  function WorldClock(name, colorClass) {
    _classCallCheck(this, WorldClock);

    this.name = name;
    this.id = Date.now();
    this.colorClass = colorClass; // green, blue, red

    this.createClockCard();
  }

  _createClass(WorldClock, [{
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return new Date().toLocaleTimeString();
    }
  }, {
    key: "createClockCard",
    value: function createClockCard() {
      var _this = this;

      var container = document.getElementById("clockContainer");
      var card = document.createElement("div");
      card.classList.add("clock-card");
      card.id = "clock-".concat(this.id);
      card.innerHTML = "\n      <h5>".concat(this.name, "</h5>\n      <p class=\"clock-output mb-2\">").concat(this.getCurrentTime(), "</p>\n      <div class=\"color-squares\">\n        <div class=\"green\"></div>\n        <div class=\"blue\"></div>\n        <div class=\"red\"></div>\n      </div>\n      <button class=\"btn btn-danger btn-sm mt-2 delete-clock\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n    ");
      container.appendChild(card); // Delete button

      card.querySelector(".delete-clock").addEventListener("click", function () {
        _this.deleteClock();
      }); // Live clock

      this.interval = setInterval(function () {
        card.querySelector(".clock-output").textContent = _this.getCurrentTime();
      }, 1000);
    }
  }, {
    key: "deleteClock",
    value: function deleteClock() {
      clearInterval(this.interval);
      var el = document.getElementById("clock-".concat(this.id));
      if (el) el.remove();
    }
  }]);

  return WorldClock;
}(); // Add clocks


var colors = ["green", "blue", "red"];
var colorIndex = 0;
document.getElementById("addClockBtn").addEventListener("click", function () {
  var name = document.getElementById("clockName").value.trim();
  if (!name) return;
  new WorldClock(name, colors[colorIndex]);
  colorIndex = (colorIndex + 1) % colors.length; // rotate colors
});