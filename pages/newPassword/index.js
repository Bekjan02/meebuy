const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function() {
  const isPasswordVisible = passwordInput.getAttribute("type") === "text";
  passwordInput.setAttribute("type", isPasswordVisible ? "password" : "text");
});
