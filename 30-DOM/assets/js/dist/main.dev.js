"use strict";

var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];
var list = document.getElementById("playlist");
playList.forEach(function (track) {
  var li = document.createElement("li");
  li.textContent = track.author + " - " + track.song;
  list.appendChild(li);
});
var modal = document.getElementById("myModal");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn"); // Відкрити модальне вікно

openBtn.onclick = function () {
  return modal.classList.add("show");
}; // Закрити модальне вікно


closeBtn.onclick = function () {
  return modal.classList.remove("show");
}; // Закрити при кліку поза вікном


window.onclick = function (e) {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
};

var lights = document.querySelectorAll('.light');
var current = 0;
document.getElementById('next').addEventListener('click', function () {
  // вимкнути всі
  lights.forEach(function (light) {
    return light.classList.remove('active');
  }); // наступний колір

  current = (current + 1) % lights.length; // увімкнути поточний

  lights[current].classList.add('active');
});