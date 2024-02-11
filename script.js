const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function pageAnimation() {
  var elemc = document.querySelector("#elem-container");
  var fix = document.querySelector("#fixed-image");
  elemc.addEventListener("mouseenter", () => {
    fix.style.display = "block";
  });
  elemc.addEventListener("mouseleave", () => {
    fix.style.display = "none";
  });

  var elems = document.querySelectorAll("#elem");
  elems.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      var addr = e.getAttribute("data-image");
      //console.log(addr);
      fix.style.backgroundImage = `url(${addr})`;
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

swiperAnimation();
pageAnimation();
let loader = document.querySelector("#loader");
setTimeout(() => {
  loader.style.top = "-100%";
}, 3300);
