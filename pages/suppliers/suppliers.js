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
const toggleFilter = document.getElementById("toggleFilter");
const openFilter = document.getElementById("openFilter");

const toggleFilterModal = () => {
  openFilter.style.display =
    openFilter.style.display === "none" ? "block" : "none";
};

// Add event listener to the filter container to toggle modal visibility
filterContainer.addEventListener("click", toggleFilterModal);

// Close filter modal when clicking outside of it
document.addEventListener("click", (event) => {
  // Check if the click event target is neither inside the filter container nor the filter modal
  if (
    openFilter.style.display === "block" &&
    !filterContainer.contains(event.target) &&
    !openFilter.contains(event.target)
  ) {
    openFilter.style.display = "none";
  }
});
