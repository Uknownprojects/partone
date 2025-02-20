document.addEventListener("DOMContentLoaded", function () {
    function createBalloon() {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        document.body.appendChild(balloon);

        // Random balloon position
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.backgroundColor = getRandomColor();

        // Remove balloon after animation
        setTimeout(() => {
            balloon.remove();
        }, 6000);
    }

    function getRandomColor() {
        const colors = ["#ff4757", "#ffa502", "#2ed573", "#1e90ff", "#3742fa", "#eccc68"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    setInterval(createBalloon, 500); // Creates a balloon every 0.5 seconds
});
