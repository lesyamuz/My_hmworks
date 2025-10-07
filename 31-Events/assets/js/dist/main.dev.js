"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// --- 1. Редагування тексту ---
var editableDiv = document.getElementById("editableDiv");
var textarea;
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "e") {
    event.preventDefault();
    textarea = document.createElement("textarea");
    textarea.id = "editableTextarea";
    textarea.value = editableDiv.textContent;
    editableDiv.replaceWith(textarea);
    textarea.focus();
  }

  if (event.ctrlKey && event.key === "s") {
    event.preventDefault();

    if (textarea) {
      var div = document.createElement("div");
      div.id = "editableDiv";
      div.textContent = textarea.value;
      textarea.replaceWith(div);
      textarea = null;
    }
  }
}); // --- 2. Сортування таблиці ---

document.querySelectorAll("#sortableTable th").forEach(function (th, index) {
  th.addEventListener("click", function () {
    var table = th.closest("table");
    var tbody = table.querySelector("tbody");
    var rows = Array.from(tbody.querySelectorAll("tr"));
    var isNumeric = !isNaN(rows[0].children[index].textContent.trim());
    var ascending = th.dataset.order !== "asc";
    rows.sort(function (a, b) {
      var aText = a.children[index].textContent.trim();
      var bText = b.children[index].textContent.trim();
      return isNumeric ? ascending ? aText - bText : bText - aText : ascending ? aText.localeCompare(bText) : bText.localeCompare(aText);
    });
    tbody.append.apply(tbody, _toConsumableArray(rows));
    th.dataset.order = ascending ? "asc" : "desc";
  });
}); // --- 3. Змінюваний блок ---

var box = document.getElementById("resizableBox");
var resizer = box.querySelector(".resizer");
var isResizing = false;
resizer.addEventListener("mousedown", function (e) {
  isResizing = true;
  document.body.style.cursor = "se-resize";
});
document.addEventListener("mousemove", function (e) {
  if (!isResizing) return;
  var rect = box.getBoundingClientRect();
  box.style.width = e.clientX - rect.left + "px";
  box.style.height = e.clientY - rect.top + "px";
});
document.addEventListener("mouseup", function () {
  isResizing = false;
  document.body.style.cursor = "default";
});