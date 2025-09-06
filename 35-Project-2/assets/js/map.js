const mapLink = document.getElementById("load-map-link");

mapLink.onclick = function(e) {
  e.preventDefault();

  // додаємо leaflet.css
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'assets/plugins/leaflet/leaflet.css';
  document.head.append(link);

  // додаємо leaflet.js і після завантаження ініціалізуємо мапу
  const script = document.createElement('script');
  script.src = 'assets/plugins/leaflet/leaflet.js';
  script.onload = initMap;
  document.body.append(script);
};

const initMap = () => {
  const mapContainer = document.getElementById("map");

  // очищаємо контейнер від <a> з картинкою
  mapContainer.innerHTML = "";

  // встановлюємо висоту (можна і в CSS)
  mapContainer.style.height = "500px";

  // створюємо карту
  const map = L.map("map").setView([51.505, -0.09], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
};
