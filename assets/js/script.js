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

// mobile navigation 

var nav_button = document.getElementById('burgerBtn');
var content = document.getElementById('mobile');
var nav_menu = document.getElementById('nav-menu-container');

// nav_button.addEventListener('click', function () {
//   // nav_menu.classList.toggle('active');
//   content.classList.toggle('hide1');
// }
// );

// change nav-bar position to fixed on scroll
// let height = screen.height;
let vid = document.getElementById('vvv'); 

function removeh() {
  vid.classList.remove('hide');
}
function addh() {
  vid.classList.add('hide');
}

window.onscroll = function (){
  if (window.pageYOffset > 50) {
    $('nav').addClass('header-scrolled');
    removeh();
  } else {
    $('nav').removeClass('header-scrolled');
    addh();
  }
}


// function GetThisHidden(){
//   $(".hide1").css("opacity", "0").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend', HideTheElementAfterAnimation);
// }

// function GetThisDisplayed(){
//   $(".hide1").css("display", "relative").css("opacity", "1").unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend");
// }

// function HideTheElementAfterAnimation(){
//   $(".hide1").css("display", "none");
// }


function fadeOutElement(element, callback) {
    if (typeof callback === "function") {
      callback();
    }
    else{
      $(element).fadeOut("slow", "swing") 
    }
}

function fadeInElement(element, callback) {
  $(element).css("display", "flow-root").fadeIn("slow", "swing", function() {
    if (typeof callback === "function") {
      callback();
    }
  });
}

nav_button.addEventListener('click', function () {
  $("#mobile").toggle(function() {
    if ($(this).is(":visible")) {
      fadeOutElement(".hide1", function() {
        fadeInElement(".hide1");
      });
    } else {
      fadeOutElement(".hide1");
    }
  });
});
// // To fade in the element
// fadeElement(".hide1", "in");

// // To fade out the element
// fadeElement(".hide1", "out");

const delay = 3000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 10 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function() {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function() {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
  changeSlide(false);
  restart();
});

setInterval(function() {
  var element = document.querySelector('#title1');
  element.classList.toggle('glitch');
}, 3000);