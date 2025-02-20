document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".animated-text");
    text.style.animation = "fadeIn 2s ease-in-out";

    setTimeout(() => {
        text.innerHTML += " 🎂";
    }, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
    const revealButton = document.getElementById("revealButton");
    const hiddenMessage = document.getElementById("hiddenMessage");

    revealButton.addEventListener("click", function () {
        hiddenMessage.style.display = "block";
        revealButton.style.display = "none";
    });
});

