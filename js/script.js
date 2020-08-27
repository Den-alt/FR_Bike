$(document).ready(function () {
  $(".slider__slider").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    accessibility: false,
    autoplaySpeed: 3000,
    nextArrow: 'button type="button" class="slick-next"></button>',
    prevArrow: 'button type="button" class="slick-prev"></button>',
  });

  $(".icon-menu").click(function (event) {
    $(this).toggleClass("active");
    $(".menu__body").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

//*-------------ibg-----------------------
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();
//*---------------------------------------

//?----------------slider-----------------

//?---------------------------------------
