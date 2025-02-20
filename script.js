document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".animated-text");
    text.style.animation = "fadeIn 2s ease-in-out";

    setTimeout(() => {
        text.innerHTML += " 🎂";
    }, 2000);
});