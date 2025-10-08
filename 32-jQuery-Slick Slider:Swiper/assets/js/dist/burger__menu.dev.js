"use strict";

var btn = document.querySelector('.btn_burger');
var block = document.querySelector('.nav__menu');

btn.onclick = function () {
  block.classList.toggle('active');
};

window.addEventListener('resize', function () {
  if (window.innerWidth >= 821) {
    block.classList.remove('active');
  }

  ;
});