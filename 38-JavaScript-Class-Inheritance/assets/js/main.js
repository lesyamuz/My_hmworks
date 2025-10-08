class WorldClock {
  constructor(name, colorClass) {
    this.name = name;
    this.id = Date.now();
    this.colorClass = colorClass; // green, blue, red
    this.createClockCard();
  }

  getCurrentTime() {
    return new Date().toLocaleTimeString();
  }

  createClockCard() {
    const container = document.getElementById("clockContainer");
    const card = document.createElement("div");
    card.classList.add("clock-card");
    card.id = `clock-${this.id}`;
    card.innerHTML = `
      <h5>${this.name}</h5>
      <p class="clock-output mb-2">${this.getCurrentTime()}</p>
      <div class="color-squares">
        <div class="green"></div>
        <div class="blue"></div>
        <div class="red"></div>
      </div>
      <button class="btn btn-danger btn-sm mt-2 delete-clock">Видалити</button>
    `;
    container.appendChild(card);

    // Delete button
    card.querySelector(".delete-clock").addEventListener("click", () => {
      this.deleteClock();
    });

    // Live clock
    this.interval = setInterval(() => {
      card.querySelector(".clock-output").textContent = this.getCurrentTime();
    }, 1000);
  }

  deleteClock() {
    clearInterval(this.interval);
    const el = document.getElementById(`clock-${this.id}`);
    if (el) el.remove();
  }
}

// Add clocks
const colors = ["green", "blue", "red"];
let colorIndex = 0;

document.getElementById("addClockBtn").addEventListener("click", () => {
  const name = document.getElementById("clockName").value.trim();
  if (!name) return;
  new WorldClock(name, colors[colorIndex]);
  colorIndex = (colorIndex + 1) % colors.length; // rotate colors
});
