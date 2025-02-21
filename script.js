document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("birthdayAudio");
    const playButton = document.getElementById("playMusicButton");

    // Play music when page loads (muted first)
    audio.muted = true;
    audio.play().then(() => {
        audio.muted = false; // Unmute after autoplay starts
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

    // 🎈 Balloon Animation (Random Colors)
    function createBalloon() {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");

        // Set random position
        balloon.style.left = Math.random() * 100 + "vw";
        
        // Set random animation duration
        balloon.style.animationDuration = Math.random() * 3 + 3 + "s";

        // Random colors for balloons
        const colors = ["red", "blue", "green", "yellow", "pink", "purple", "orange"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.backgroundColor = randomColor;

        document.getElementById("balloon-container").appendChild(balloon);

        setTimeout(() => {
            balloon.remove(); // Remove balloon after animation
        }, 6000);
    }

    setInterval(createBalloon, 500); // Generate balloons continuously
});
