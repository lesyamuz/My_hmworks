
    // ===== 1️⃣ Клас, що описує коло =====
    class Circle {
      constructor(radius) {
        this._radius = radius;
      }

      get radius() {
        return this._radius;
      }

      set radius(value) {
        if (value <= 0) throw new Error("Радіус має бути додатнім числом");
        this._radius = value;
      }

      get diameter() {
        return this._radius * 2;
      }

      getArea() {
        return Math.PI * this._radius ** 2;
      }

      getCircumference() {
        return 2 * Math.PI * this._radius;
      }
    }

    const circle = new Circle(5);
    const circleOutput = `
Радіус: ${circle.radius}
Діаметр: ${circle.diameter}
Площа: ${circle.getArea().toFixed(2)}
Довжина кола: ${circle.getCircumference().toFixed(2)}
`;
    document.getElementById("circle-output").textContent = circleOutput;

    // ===== 2️⃣ Клас маркера =====
    class Marker {
      constructor(color, inkLevel) {
        this.color = color;
        this.inkLevel = inkLevel; // у відсотках
      }

      print(text, outputEl) {
        let result = "";
        for (let char of text) {
          if (char !== " " && this.inkLevel > 0) {
            this.inkLevel -= 0.5;
          } else if (this.inkLevel <= 0) break;
          result += char;
        }
        outputEl.innerHTML = `<span style="color:${this.color}">${result}</span><br>Залишок чорнил: ${this.inkLevel.toFixed(1)}%`;
      }
    }

    class RefillableMarker extends Marker {
      refill() {
        this.inkLevel = 100;
      }
    }

    const marker = new RefillableMarker("blue", 10);
    const markerOutput = document.getElementById("marker-output");
    document.getElementById("marker-btn").addEventListener("click", () => {
      marker.print("Hello, this is a test with a marker!", markerOutput);
      if (marker.inkLevel <= 0) {
        marker.refill();
        marker.print("Маркер перезаправлено і знову пише!", markerOutput);
      }
    });

    // ===== 3️⃣ Клас працівників =====
    class Employee {
      constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
      }
    }

    class EmpTable {
      constructor(employees) {
        this.employees = employees;
      }

      getHtml() {
        let html = `
        <table class="table table-bordered table-striped text-center align-middle">
          <thead class="table-dark">
            <tr>
              <th>Ім'я</th>
              <th>Посада</th>
              <th>Зарплата (€)</th>
            </tr>
          </thead>
          <tbody>`;
        this.employees.forEach(emp => {
          html += `
            <tr>
              <td>${emp.name}</td>
              <td>${emp.position}</td>
              <td>${emp.salary}</td>
            </tr>`;
        });
        html += `</tbody></table>`;
        return html;
      }
    }

    const employees = [
      new Employee("Олена", "Менеджер", 1200),
      new Employee("Ігор", "Касир", 900),
      new Employee("Світлана", "Аналітик", 1500),
      new Employee("Марія", "Бухгалтер", 1100),
    ];

    const empTable = new EmpTable(employees);
    document.getElementById("table-output").innerHTML = empTable.getHtml();
  