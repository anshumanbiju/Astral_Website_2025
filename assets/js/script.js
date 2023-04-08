document.onreadystatechange = function () {
  var loader = document.getElementById("loader");
  if (document.readyState !== "complete") {
    loader.style.display = "flex";
  } else {
    loader.style.display = "none";
  }
};
window.addEventListener("load", function () {
  setTimeout(removeLoader, 9000); // set delay for 2 seconds

  function removeLoader() {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.display = "none";
    }
  }
});
$(function () {
  $('a[href*=#]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
  });
});
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

// Buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Counter
let counter = 0;
const size = carouselImages[0].clientWidth;

// Set initial position of images
carouselSlide.style.transform = `translateX(${-size * counter}px)`;
carouselImages[counter].classList.add("active");

// Button listeners
nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 1s ease-in-out";
  counter++;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  carouselImages.forEach((image) =>
    image.classList.remove("active")
  );
  carouselImages[counter].classList.add("active");
});

// Smooth scroll for the navigation menu and links with .scrollto classes
$(document).on('click', 'a, .scrollto', function (e) {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    e.preventDefault();
    var target = $(this.hash);
    if (target.length) {

      var scrollto = target.offset().top;

      $('html, body').animate({
        scrollTop: scrollto
      }, 1500, 'easeInOutExpo');

      if ($(this).parents('.nav').length) {
        $('.nav .active,  .active').removeClass('active');
        $(this).closest('a').addClass('active');
      }
      return false;
    }
  }
});

// Activate smooth scroll on page load with hash links in the url
$(document).ready(function () {
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      var scrollto = $(initial_nav).offset().top;
      $('html, body').animate({
        scrollTop: scrollto
      }, 1500, 'easeInOutExpo');
    }
  }
});  // Smooth scroll for the navigation menu and links with .scrollto classes
$(document).on('click', 'a, .scrollto', function (e) {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    e.preventDefault();
    var target = $(this.hash);
    if (target.length) {

      var scrollto = target.offset().top;

      $('html, body').animate({
        scrollTop: scrollto
      }, 1500, 'easeInOutExpo');

      if ($(this).parents('.nav').length) {
        $('.nav .active,  .active').removeClass('active');
        $(this).closest('a').addClass('active');
      }
      return false;
    }
  }
});

// Activate smooth scroll on page load with hash links in the url
$(document).ready(function () {
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      var scrollto = $(initial_nav).offset().top;
      $('html, body').animate({
        scrollTop: scrollto
      }, 1500, 'easeInOutExpo');
    }
  }
});