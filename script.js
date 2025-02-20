document.addEventListener("DOMContentLoaded", function () {
    // Reveal message on button click
    const revealButton = document.getElementById("revealButton");
    const hiddenMessage = document.getElementById("hiddenMessage");

    revealButton.addEventListener("click", function () {
        hiddenMessage.style.display = "block";
        revealButton.style.display = "none";
    });

    // Reveal images on click
    const imageContainers = document.querySelectorAll(".image-container");

    imageContainers.forEach(container => {
        container.addEventListener("click", function () {
            const image = container.querySelector(".hidden-image");
            const text = container.querySelector(".click-text");

            image.classList.add("revealed"); // Make image visible
            text.style.display = "none"; // Hide "Click to reveal" text
        });
    });

    const backgroundSwitch = document.getElementById("backgroundSwitch");

    backgroundSwitch.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode");
    });
});




