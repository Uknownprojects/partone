document.addEventListener("DOMContentLoaded", function () {
    // Play audio when the page loads
    const audio = document.getElementById("birthdayAudio");

    // Try playing audio when the page loads
    audio.play().catch(error => {
        console.log("Autoplay was blocked. Playing after user interaction.");
        
        // Add an event listener to play audio on user interaction
        document.body.addEventListener("click", function () {
            audio.play();
        }, { once: true }); // Runs only once
    });

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

            image.classList.add("revealed");
            text.style.display = "none";
        });
    });

    // Background color switch
    const backgroundSwitch = document.getElementById("backgroundSwitch");

    backgroundSwitch.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode");
    });
});





