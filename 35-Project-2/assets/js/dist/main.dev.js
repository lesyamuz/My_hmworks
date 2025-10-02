"use strict";

$(document).ready(function () {
  // ===============================
  // Slick Slider для новин
  // ===============================
  var $slider = $(".news-slider");

  if ($slider.length) {
    $slider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "linear",
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
    }); // Кастомні кнопки

    $(".js_prev").on("click", function () {
      $slider.slick("slickPrev");
    });
    $(".js_next").on("click", function () {
      $slider.slick("slickNext");
    });
  } // ===============================
  // Модалка новини
  // ===============================


  $(".news-card").on("click", function () {
    var $this = $(this);
    $(".showNews__img").attr("src", $this.find("img").attr("src"));
    $(".showNews__title").text($this.find("h3").text());
    $(".showNews__text").text($this.find("p").first().text());
    $(".showNews__author").html($this.find(".author").clone());
    $(".showNews").fadeIn(200);
  });
  $(".showNews__close").on("click", function () {
    $(".showNews").fadeOut(200);
  }); // ===============================
  // Універсальна функція для модалок (Section 2)
  // ===============================

  function openModal(blockSelector) {
    var $block = $(blockSelector);
    $(".showModal__img").attr("src", $block.find(".block-img img:first-child").attr("src"));
    $(".showModal__subtitle").text($block.find(".block-desc h4").text());
    $(".showModal__title").text($block.find(".block-desc h2").text());
    $(".showModal__text").text($block.find(".block-desc p").text());
    $(".showModal").fadeIn(200);
  }

  $(".block1 .block-desc button").on("click", function () {
    return openModal(".block1");
  });
  $(".block2 .block-desc button").on("click", function () {
    return openModal(".block2");
  });
  $(".showModal__close").on("click", function () {
    $(".showModal").fadeOut(200);
  }); // ===============================
  // Gallery 360 view
  // ===============================

  $(".gallery-main").on("click", function () {
    $(".gallery__360").fadeIn(200);
  });
  $(".gallery__close").on("click", function () {
    $(".gallery__360").fadeOut(200);
  }); // 360 horizontal viewer

  if ($(".cycle").length) {
    $(".cycle").cyclotron();
  } // ===============================
  // Gallery cards click
  // ===============================


  $(".gallery-cards img").on("click", function () {
    $(".gallery__holder img").attr("src", $(this).attr("src"));
    $(".gallery__holder").fadeIn(200);
  });
  $(".gallery__holder p").on("click", function () {
    $(".gallery__holder").fadeOut(200);
  });
});