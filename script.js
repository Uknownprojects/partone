document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("birthdayAudio");
    const playButton = document.getElementById("playMusicButton");

    // Try autoplay when page loads (Muted first)
    audio.muted = true;
    audio.play().then(() => {
        audio.muted = false; // Unmute after it starts
    }).catch(() => {
        console.log("Autoplay blocked. Waiting for user interaction...");
        playButton.style.display = "block"; // Show play button
    });

    // Play audio when user clicks the button
    playButton.addEventListener("click", function () {
        audio.muted = false;
        audio.play();
        playButton.style.display = "none"; // Hide button after playing
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
