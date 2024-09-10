const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const otpBox = document.querySelector(".otp-box");
const passwordBox = document.querySelector(".password-box");
const verifyOtpBtn = document.querySelector("#verify-otp-btn");
const finalSignUpBtn = document.querySelector("#final-sign-up-btn");
const signInForm = document.querySelector(".sign-in-form");

sign_up_btn.addEventListener('click', () => {
  container.classList.add("sign-up-mode");
  otpBox.classList.add("animation");
  otpBox.classList.remove("hidden");
  setTimeout(() => otpBox.classList.remove("animation"), 500); // Remove animation class after animation ends
});

sign_in_btn.addEventListener('click', () => {
  container.classList.remove("sign-up-mode");
  otpBox.classList.add("hidden");
  passwordBox.classList.add("hidden");
  finalSignUpBtn.classList.add("hidden");
});

// Handle form submission
signInForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission
  window.location.href = "home.html"; // Redirect to home.html
});

verifyOtpBtn.addEventListener('click', () => {
  // Simulate OTP verification
  // Replace this with actual OTP verification logic
  setTimeout(() => {
    otpBox.classList.add("hidden");
    passwordBox.classList.add("animation");
    passwordBox.classList.remove("hidden");
    finalSignUpBtn.classList.remove("hidden");
  }, 1000); // Simulate delay for OTP verification
});
