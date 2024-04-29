const swiper = new Swiper(".swiper1", {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var direction = window.innerWidth <= 730 ? "horizontal" : "horizontal";

  return direction;
}

const swiper2 = new Swiper(".swiper2", {
  slidesPerView: window.innerWidth >= 992 ? 4 : 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: window.innerWidth >= 992 ? ".swiper-pagination" : "",
    clickable: true,
  },
});
