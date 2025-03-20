document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript Loaded");

    // Handle Register/Login Toggle
    const toggleForm = document.getElementById("toggle-form");
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");
    const formTitle = document.getElementById("form-title");

    toggleForm.addEventListener("click", (e) => {
        e.preventDefault();
        if (registerForm.style.display !== "none") {
            registerForm.style.display = "none";
            loginForm.style.display = "block";
            formTitle.innerText = "Login";
            toggleForm.innerHTML = `Don't have an account? <a href="#">Register here</a>`;
        } else {
            registerForm.style.display = "block";
            loginForm.style.display = "none";
            formTitle.innerText = "Register";
            toggleForm.innerHTML = `Already have an account? <a href="#">Login here</a>`;
        }
    });

    // Handle Registration
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(registerForm);

        const response = await fetch("register.php", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        alert(result.message);

        if (result.success) {
            window.location.href = "index.html";
        }
    });

    // Handle Login
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(loginForm);

        const response = await fetch("login.php", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        alert(result.message);

        if (result.success) {
            window.location.href = "index.html";
        }
    });
});
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
        dots[i].classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Show the first slide by default
showSlide(currentIndex);
