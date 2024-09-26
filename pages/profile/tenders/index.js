// auto search
const addSearchQueryBtns = document.querySelectorAll('.addSearchQuery-btn');
const searchQueryForm = document.querySelector('.form');
const searchQueryFormInput = document.querySelector('.form input[type="text"]');
const emptyContent = document.querySelector('.empty__content');
const filledContent = document.querySelector('.filled__content');

const searchQueryBtnCancel = document.querySelector('#searchQueryBtnCancel');

const searchQueryFormToggle = () => {
  searchQueryForm.classList.toggle('hidden');
  if ([].length > 0) {
    return filledContent.classList.toggle('hidden');
  }
  emptyContent.classList.toggle('hidden');
};

addSearchQueryBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    searchQueryFormToggle();
    searchQueryFormInput.focus();
  });
});

searchQueryBtnCancel.addEventListener('click', searchQueryFormToggle);

// script.js
document.addEventListener('DOMContentLoaded', (event) => {
  const selectSelected = document.querySelector('.select-selected');
  const selectItems = document.querySelector('.select-items');

  selectSelected.addEventListener('click', () => {
    selectItems.classList.toggle('select-hide');
    selectSelected.classList.toggle('select-arrow-active');
  });

  const items = document.querySelectorAll('.select-item');
  items.forEach((item) => {
    item.addEventListener('click', () => {
      selectSelected.textContent = item.textContent;
      selectItems.classList.add('select-hide');
      selectSelected.classList.remove('select-arrow-active');
    });
  });

  window.addEventListener('click', (event) => {
    if (!event.target.matches('.select-selected')) {
      if (!selectItems.classList.contains('select-hide')) {
        selectItems.classList.add('select-hide');
        selectSelected.classList.remove('select-arrow-active');
      }
    }
  });
});
