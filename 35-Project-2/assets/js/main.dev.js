"use strict";

$(document).ready(function () {
  // Slick slider for news section
  $(".news-slider").slick({
    autoplay: false,
    dots: true,
    infinite: true,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false
  }); // Custom prev/next buttons (if needed)

  $(".js_prev").click(function () {
    $(".news-slider").slick("slickPrev");
  });
  $(".js_next").click(function () {
    $(".news-slider").slick("slickNext");
  }); // Show news modal on news-card click

  $(".news-card").on("click", function () {
    var src = $(this).find("img").attr("src");
    var title = $(this).find("h3").text();
    var txt = $(this).find("p").first().text();
    var author = $(this).find(".author").clone();
    $(".showNews__img").attr("src", src);
    $(".showNews__title").html(title);
    $(".showNews__text").html(txt);
    $(".showNews__author").html(author);
    $(".showNews").css("display", "flex");
  });
  $(".showNews__close").click(function () {
    $(".showNews").css("display", "none");
  }); // Show modal for Section 2 blocks

  $(".block1 .block-desc button").click(function () {
    var src = $(".block1 .block-img img:first-child").attr("src");
    var subtitle = $(".block1 .block-desc h4").text();
    var title = $(".block1 .block-desc h3").text();
    var text = $(".block1 .block-desc p").text();
    $(".showModal__img").attr("src", src);
    $(".showModal__subtitle").html(subtitle);
    $(".showModal__title").html(title);
    $(".showModal__text").html(text);
    $(".showModal").css("display", "flex");
  });
  $(".block2 .block-desc button").click(function () {
    var src = $(".block2 .block-img img:first-child").attr("src");
    var subtitle = $(".block2 .block-desc h4").text();
    var title = $(".block2 .block-desc h3").text();
    var text = $(".block2 .block-desc p").text();
    $(".showModal__img").attr("src", src);
    $(".showModal__subtitle").html(subtitle);
    $(".showModal__title").html(title);
    $(".showModal__text").html(text);
    $(".showModal").css("display", "flex");
  });
  $(".showModal__close").click(function () {
    $(".showModal").css("display", "none");
  }); // Gallery 360 view

  $(".gallery-main").click(function () {
    $(".gallery__360").css("display", "flex");
  });
  $(".gallery__close").click(function () {
    $(".gallery__360").css("display", "none");
  }); // 360 horizontal viewer

  $(".cycle").cyclotron(); // Gallery card click

  $(".gallery-cards img").click(function () {
    var src = $(this).attr("src");
    $(".gallery__holder img").attr("src", src);
    $(".gallery__holder").css("display", "block");
  });
  $(".gallery__holder p").click(function () {
    $(".gallery__holder").css("display", "none");
  });
});