document.addEventListener("DOMContentLoaded", function() {
    // Select the heart element
    const heart = document.querySelector(".heart");

    // Function to animate the heart
    function animateHeart() {
        // Pause the pulse animation
        //heart.style.animationPlayState = 'paused';

        // Add the shrink-expand animation class
        heart.classList.add("shrink-expand");

        // Remove the shrink-expand animation class after 0.5 seconds
        setTimeout(() => {
            heart.classList.remove("shrink-expand");
            // Resume the pulse animation
            //heart.style.animationPlayState = 'running';
        }, 300);
    }

    // Add an event listener to the button to animate the heart when clicked
    const surpriseBtn = document.getElementById("surprise-btn");
    surpriseBtn.addEventListener("click", animateHeart);
});