let listItem = document.querySelectorAll(".menu-list li");
let menuDrop = document.querySelector(".menu-backdrop");
listItem.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    menuDrop.style.setProperty(
      "--block-top","".concat(e.getBoundingClientRect().top, "px")
    );
    menuDrop.style.setProperty(
      "--block-left",
      "".concat(e.getBoundingClientRect().left, "px")
    );
    menuDrop.style.setProperty(
      "--block-height",
      "".concat(e.clientHeight, "px")
    );
    menuDrop.style.setProperty("--block-width", "".concat(e.clientWidth, "px"));
    menuDrop.style.setProperty("opacity", "1");
    menuDrop.style.setProperty("visibility", "visible");
  });
  e.addEventListener("mouseleave", function () {
    menuDrop.style.setProperty("opacity", "0");
    menuDrop.style.setProperty("visibility", "hidden");
  });
});
