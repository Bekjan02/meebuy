// burger menu
const burgerMenu = document.querySelector("#burgerMenu");
const burgerIcon = document.querySelector("#burgerIcon");
const closeIcon = document.querySelector("#closeIcon");
// search

const searchForm = document.querySelector("#searchForm");
const searchIcon = document.querySelector("#searchIconImg");

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

// search

const toggleFormWidth = () => {
  searchForm.classList.toggle("w-3/4");
  searchForm.classList.toggle("w-min");
};

searchIcon.addEventListener("click", toggleFormWidth);

const auth_tabs = document.querySelectorAll(".auth_tab");

const toggleAuthTab = (clickedTab) => {
  auth_tabs.forEach((tab) => {
    if (tab === clickedTab) {
      tab.classList.add("tab_hover");
    } else {
      tab.classList.remove("tab_hover");
    }
  });
};

auth_tabs.forEach((tab) => {
  tab.addEventListener("click", () => toggleAuthTab(tab));
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("show-password")) {
    const passwordInput = event.target
      .closest(".flex")
      .querySelector(".password-input");
    const showPasswordIcon = event.target;
    const isPasswordVisible = passwordInput.getAttribute("type") === "text";

    if (isPasswordVisible) {
      passwordInput.setAttribute("type", "password");
      showPasswordIcon.setAttribute(
        "src",
        "../../assets/images/icons/password-close.svg"
      );
    } else {
      passwordInput.setAttribute("type", "text");
      showPasswordIcon.setAttribute(
        "src",
        "../../assets/images/icons/password-open.svg"
      );
    }
  }
});

const registerTab = document.getElementById("register-tab");
const loginTab = document.getElementById("login-tab");
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");

const toggleTabRegister = () => {
  registerForm.style.display = "flex";
  loginForm.style.display = "none";
};

const toggleTabLogin = () => {
  loginForm.style.display = "flex";
  registerForm.style.display = "none";
};

registerTab.addEventListener("click", toggleTabRegister);
loginTab.addEventListener("click", toggleTabLogin);
