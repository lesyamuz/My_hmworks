"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var shoppingList = [{
  name: "Хліб",
  quantity: 1,
  price: 20,
  total: 20,
  bought: false
}, {
  name: "Молоко",
  quantity: 2,
  price: 30,
  total: 60,
  bought: true
}, {
  name: "Яйця",
  quantity: 10,
  price: 5,
  total: 50,
  bought: false
}];

function addProduct() {
  var name = document.getElementById("productName").value.trim();
  var qty = parseInt(document.getElementById("productQty").value);
  var price = parseFloat(document.getElementById("productPrice").value);

  if (!name || isNaN(qty) || isNaN(price) || qty <= 0 || price <= 0) {
    document.getElementById("shopList").textContent = "Введіть коректні дані!";
    return;
  }

  var product = shoppingList.find(function (item) {
    return item.name.toLowerCase() === name.toLowerCase();
  });

  if (product) {
    product.quantity += qty;
    product.price = price; // можна оновлювати ціну

    product.total = product.quantity * product.price;
    document.getElementById("shopList").textContent = "".concat(name, " \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u0443 \u0441\u043F\u0438\u0441\u043A\u0443.");
  } else {
    shoppingList.push({
      name: name,
      quantity: qty,
      price: price,
      total: qty * price,
      bought: false
    });
    document.getElementById("shopList").textContent = "".concat(name, " \u0434\u043E\u0434\u0430\u043D\u043E \u0434\u043E \u0441\u043F\u0438\u0441\u043A\u0443.");
  }

  document.getElementById("productName").value = "";
  document.getElementById("productQty").value = "";
  document.getElementById("productPrice").value = "";
  showList();
}

function showList() {
  var sorted = _toConsumableArray(shoppingList).sort(function (a, b) {
    return a.bought - b.bought;
  });

  var output = sorted.map(function (item) {
    return "".concat(item.name, " \u2014 ").concat(item.quantity, " \u0448\u0442. \xD7 ").concat(item.price, " \u0433\u0440\u043D = ").concat(item.total, " \u0433\u0440\u043D ").concat(item.bought ? "(куплено)" : "(ще не куплено)");
  }).join("<br>");
  document.getElementById("shopList").innerHTML = output;
}

function buyProduct(name) {
  var product = shoppingList.find(function (item) {
    return item.name.toLowerCase() === name.toLowerCase();
  });

  if (product) {
    product.bought = true;
    document.getElementById("shopList").textContent = "".concat(product.name, " \u043F\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u043E \u044F\u043A \u043A\u0443\u043F\u043B\u0435\u043D\u0438\u0439.");
    showList();
  } else {
    document.getElementById("shopList").textContent = "\u041F\u0440\u043E\u0434\u0443\u043A\u0442 \"".concat(name, "\" \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0443 \u0441\u043F\u0438\u0441\u043A\u0443.");
  }

  document.getElementById("buyName").value = "";
}

function deleteProduct(name) {
  var lowerName = name.trim().toLowerCase();
  shoppingList = shoppingList.filter(function (item) {
    return item.name.toLowerCase() !== lowerName;
  });
  document.getElementById("shopList").textContent = "".concat(name, " \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E \u0437\u0456 \u0441\u043F\u0438\u0441\u043A\u0443.");
  showList();
  document.getElementById("deleteName").value = "";
}

function totalSum() {
  var sum = shoppingList.reduce(function (acc, item) {
    return acc + item.total;
  }, 0);
  document.getElementById("shopList").textContent = "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430: ".concat(sum, " \u0433\u0440\u043D");
}

function sumByStatus(bought) {
  var sum = shoppingList.filter(function (item) {
    return item.bought === bought;
  }).reduce(function (acc, item) {
    return acc + item.total;
  }, 0);
  document.getElementById("shopList").textContent = bought ? "\u0421\u0443\u043C\u0430 \u043A\u0443\u043F\u043B\u0435\u043D\u0438\u0445: ".concat(sum, " \u0433\u0440\u043D") : "\u0421\u0443\u043C\u0430 \u043D\u0435 \u043A\u0443\u043F\u043B\u0435\u043D\u0438\u0445: ".concat(sum, " \u0433\u0440\u043D");
}

function sortByTotal() {
  var order = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "asc";

  var sorted = _toConsumableArray(shoppingList).sort(function (a, b) {
    return order === "asc" ? a.total - b.total : b.total - a.total;
  });

  var output = sorted.map(function (item) {
    return "".concat(item.name, " \u2014 ").concat(item.quantity, " \u0448\u0442. \xD7 ").concat(item.price, " \u0433\u0440\u043D = ").concat(item.total, " \u0433\u0440\u043D ").concat(item.bought ? "(куплено)" : "(ще не куплено)");
  }).join("<br>");
  document.getElementById("shopList").innerHTML = output;
}