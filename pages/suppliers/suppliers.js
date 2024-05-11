const selectContainer = document.getElementById("selectContainer");
const toggleLink = document.getElementById("toggleLink");
const openIcon = document.querySelector(".openIcon");
const closeIcon = document.querySelector(".closeIcon");
const selectModal = document.getElementById("selectModal");

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
selectContainer.addEventListener("click", toggleSelectModal);

const filterContainer = document.getElementById("filterContainer");
const closeFilterContainer = document.getElementById("close-filter-container");
const toggleFilter = document.getElementById("toggleFilter");
const openFilter = document.getElementById("openFilter");
const recommended = document.getElementById("recommended");
const newSelect = document.getElementById("new");

const toggleFilterModal = () => {
  openFilter.style.display =
    openFilter.style.display === "none" ? "block" : "none";
};
const toggleCloseFilterModal = () => {
  openFilter.style.display = openFilter.style.display = "none";
};
const checkedFilter = (element) => {
  const select = [recommended, newSelect];
  for (let i = 0; i <= select.length; i++) {
    if (select[i] === element) {
      select[i].style.display = "block";
    } else {
      select[i].style.display = "none";
    }
  }
};

recommended.addEventListener("click", () => checkedFilter(recommended));
newSelect.addEventListener("click", () => checkedFilter(newSelect));
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
