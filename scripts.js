// Show login form when "Login" button is clicked
const loginButton = document.getElementById("loginButton");
const loginForm = document.getElementById("loginForm");
const signupButton = document.getElementById("signupButton");
const signupForm = document.getElementById("signupForm");

loginButton.addEventListener("click", () => {
    loginForm.style.display = "block";
});

signupButton.addEventListener("click", () => {
    signupForm.style.display = "block";
});

function closeLoginForm() {
    loginForm.style.display = "none";
}

function closeSignupForm() {
    signupForm.style.display = "none";
}
