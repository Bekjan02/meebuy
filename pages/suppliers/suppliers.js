const selectContainer = document.getElementById("selectContainer");
const toggleLink = document.getElementById("toggleLink");
const openIcon = document.querySelector(".openIcon");
const closeIcon = document.querySelector(".closeIcon");
const selectModal = document.getElementById("selectModal");
const recommendedList = document.getElementById("recommended-list");
const recommended = document.getElementById("recommended");
const newSelectList = document.getElementById("new-list");
const newSelect = document.getElementById("new");

const toggleSelectModal = () => {
  if (
    selectModal.style.display === "none" ||
    selectModal.style.display === ""
  ) {
    selectModal.style.display = "block";
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    selectModal.style.display = "none";
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
};
const checkedSelect = (element) => {
  const select = [recommended, newSelect];
  for (let i = 0; i < select.length; i++) {
    if (select[i] === element) {
      select[i].style.display = "block";

      setTimeout(() => {
        selectModal.style.display = "none";
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
      }, 300);
    } else {
      select[i].style.display = "none";
    }
  }
};

recommendedList.addEventListener("click", () => {
  checkedSelect(recommended);
});
newSelectList.addEventListener("click", () => {
  checkedSelect(newSelect);
});
selectContainer.addEventListener("click", toggleSelectModal);

// filter
const filterContainer = document.getElementById("filterContainer");
const closeFilterContainer = document.getElementById("close-filter-container");
const toggleFilter = document.getElementById("toggleFilter");
const openFilter = document.getElementById("openFilter");

const toggleFilterModal = () => {
  openFilter.style.display =
    openFilter.style.display === "none" ? "block" : "none";
};
const toggleCloseFilterModal = () => {
  openFilter.style.display = "none";
};

filterContainer.addEventListener("click", toggleFilterModal);
closeFilterContainer.addEventListener("click", toggleCloseFilterModal);

document.addEventListener("click", (event) => {
  if (
    openFilter.style.display === "block" &&
    !filterContainer.contains(event.target) &&
    !openFilter.contains(event.target)
  ) {
    openFilter.style.display = "none";
  }
});

// dropdown mobile
const dropdownBtn = document.querySelector(".dropdown__btn");
const dropdownMenu = document.querySelector(".dropdown__menu");

const openSort = () => {
  const isActive = dropdownMenu.classList.contains("active");
  dropdownMenu.style.maxHeight = isActive
    ? "0"
    : `${dropdownMenu.scrollHeight}px`;
  dropdownMenu.classList.toggle("active");
};

dropdownBtn.addEventListener("click", openSort);

document.addEventListener("DOMContentLoaded", function () {
  const dropdownItems = dropdownMenu.querySelectorAll(".dropdown__item");

  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      const text = item.textContent;
      changeButtonText(text);
      openSort();
    });
  });
});

function changeButtonText(text) {
  dropdownBtn.querySelector("p").textContent = text;
}

// sort dropdown desktop
const all = document.getElementById("all");
const suppliers = document.getElementById("suppliers");
const manufactures = document.getElementById("manufactures");
const logistics = document.getElementById("logistics");

const toggleSort = (el) => {
  const tabs = [all, suppliers, manufactures, logistics];

  for (let i = 0; i <= tabs.length; i++) {
    if (tabs[i] === el) {
      tabs[i].style.backgroundColor = "#fffb98";
    } else {
      tabs[i].style.backgroundColor = "";
    }
  }
};
all.addEventListener("click", () => toggleSort(all));
suppliers.addEventListener("click", () => toggleSort(suppliers));
manufactures.addEventListener("click", () => toggleSort(manufactures));
logistics.addEventListener("click", () => toggleSort(logistics));
