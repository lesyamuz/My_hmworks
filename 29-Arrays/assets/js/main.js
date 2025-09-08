let shoppingList = [
      { name: "Хліб", quantity: 1, price: 20, total: 20, bought: false },
      { name: "Молоко", quantity: 2, price: 30, total: 60, bought: true },
      { name: "Яйця", quantity: 10, price: 5, total: 50, bought: false }
    ];

    function addProduct() {
      const name = document.getElementById("productName").value.trim();
      const qty = parseInt(document.getElementById("productQty").value);
      const price = parseFloat(document.getElementById("productPrice").value);

      if (!name || isNaN(qty) || isNaN(price) || qty <= 0 || price <= 0) {
        document.getElementById("shopList").textContent = "Введіть коректні дані!";
        return;
      }

      let product = shoppingList.find(item => item.name.toLowerCase() === name.toLowerCase());
      if (product) {
        product.quantity += qty;
        product.price = price; // можна оновлювати ціну
        product.total = product.quantity * product.price;
        document.getElementById("shopList").textContent = `${name} оновлено у списку.`;
      } else {
        shoppingList.push({ name, quantity: qty, price, total: qty * price, bought: false });
        document.getElementById("shopList").textContent = `${name} додано до списку.`;
      }

      document.getElementById("productName").value = "";
      document.getElementById("productQty").value = "";
      document.getElementById("productPrice").value = "";
      showList();
    }

    function showList() {
      let sorted = [...shoppingList].sort((a, b) => a.bought - b.bought);
      let output = sorted.map(item =>
        `${item.name} — ${item.quantity} шт. × ${item.price} грн = ${item.total} грн ${item.bought ? "(куплено)" : "(ще не куплено)"}`
      ).join("<br>");
      document.getElementById("shopList").innerHTML = output;
    }

    function buyProduct(name) {
      let product = shoppingList.find(item => item.name.toLowerCase() === name.toLowerCase());
      if (product) {
        product.bought = true;
        document.getElementById("shopList").textContent = `${product.name} позначено як куплений.`;
        showList();
      } else {
        document.getElementById("shopList").textContent = `Продукт "${name}" не знайдено у списку.`;
      }
      document.getElementById("buyName").value = "";
    }

    function deleteProduct(name) {
      const lowerName = name.trim().toLowerCase();
      shoppingList = shoppingList.filter(item => item.name.toLowerCase() !== lowerName);
      document.getElementById("shopList").textContent = `${name} видалено зі списку.`;
      showList();
      document.getElementById("deleteName").value = "";
    }

    function totalSum() {
      const sum = shoppingList.reduce((acc, item) => acc + item.total, 0);
      document.getElementById("shopList").textContent = `Загальна сума: ${sum} грн`;
    }

    function sumByStatus(bought) {
      const sum = shoppingList.filter(item => item.bought === bought)
                              .reduce((acc, item) => acc + item.total, 0);
      document.getElementById("shopList").textContent = bought ? `Сума куплених: ${sum} грн` : `Сума не куплених: ${sum} грн`;
    }

    function sortByTotal(order = "asc") {
      let sorted = [...shoppingList].sort((a, b) => order === "asc" ? a.total - b.total : b.total - a.total);
      let output = sorted.map(item =>
        `${item.name} — ${item.quantity} шт. × ${item.price} грн = ${item.total} грн ${item.bought ? "(куплено)" : "(ще не куплено)"}`
      ).join("<br>");
      document.getElementById("shopList").innerHTML = output;
    }