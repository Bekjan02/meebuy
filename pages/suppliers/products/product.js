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
// burger menu
const burgerMenu = document.querySelector("#burgerMenu");
const burgerIcon = document.querySelector("#burgerIcon");
const closeIcon = document.querySelector("#closeIcon");
// search
const searchForm = document.querySelector("#searchForm");
const searchIcon = document.querySelector("#searchIconImg");

const heart = document.querySelector("#heart2");
const heart1 = document.querySelector("#heart1");

const toggleMenu = () => {
  if (burgerMenu.classList.contains("translate-x-0")) {
    burgerMenu.classList.remove("translate-x-0");
    burgerMenu.classList.add("translate-x-full");
  } else {
    burgerMenu.classList.add("translate-x-0");
    burgerMenu.classList.remove("translate-x-full");
  }
};

burgerIcon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);

const toggleFormWidth = () => {
  searchForm.classList.toggle("w-3/4"); // Используйте toggle для переключения класса
  searchForm.classList.toggle("w-min"); // Используйте toggle для переключения класса
};

searchIcon.addEventListener("click", toggleFormWidth);

const slider = new Swiper(".swiper2", {
  pagination: {
    el: ".pagination2",
    clickable: true,
  },
  mousewheel: {
    enabled: true,
    sensitivity: 2,
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

const toggleActive = () => {
  heart.classList.toggle("text-logo-color");
  heart1.classList.toggle("text-logo-color");
};

heart.addEventListener("click", toggleActive);
heart1.addEventListener("click", toggleActive);
