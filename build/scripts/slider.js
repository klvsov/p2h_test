$(document).ready(function () {
  $('.pets__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<button id="prev" type="button" class="btn-custom">&larr;</button>',
    nextArrow:
      '<button id="next" type="button" class="btn-custom">&rarr;</button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });
});
