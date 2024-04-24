// burger menu
const burgerMenu = document.querySelector('#burgerMenu');
const burgerIcon = document.querySelector('#burgerIcon');
const closeIcon = document.querySelector('#closeIcon');
// search

const searchForm = document.querySelector('#searchForm');
const searchIcon = document.querySelector('#searchIconImg');

const toggleMenu = () => {
  if (burgerMenu.classList.contains('translate-x-0')) {
    burgerMenu.classList.remove('translate-x-0');
    burgerMenu.classList.add('translate-x-full');
  } else {
    burgerMenu.classList.add('translate-x-0');
    burgerMenu.classList.remove('translate-x-full');
  }
};

burgerIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);

// search

const toggleFormWidth = () => {
  searchForm.classList.toggle('w-3/4'); // Используйте toggle для переключения класса
  searchForm.classList.toggle('w-min'); // Используйте toggle для переключения класса
};

searchIcon.addEventListener('click', toggleFormWidth);
