

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

  !(function ($){
    "use strict";
      // Smooth scroll effect on hash link in the url 
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500, 'easeInOutExpo');
        return false;
      }
    }
  });
  })(jQuery);



  // on scroll move the logo from center to top midddle
  window.scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".logo").addClass("logo-small");
    } else {
      $(".logo").removeClass("logo-small");
    }
  }
  );

  var burgerBtn = document.getElementById('burgerBtn');
  burgerBtn.addEventListener('click', function () {
    console.log("clicked");
    mobile.classList.toggle('navigation');
  }, false);