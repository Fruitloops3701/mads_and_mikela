document.addEventListener("DOMContentLoaded", function() {
    // Select the heart element
    const heart = document.querySelector(".heart");

    // Function to animate the heart
    function animateHeart() {
        // Add the animation class
        heart.classList.add("shrink-expand");

        // Remove the animation class after 1 second
        setTimeout(() => {
            heart.classList.remove("shrink-expand");
        }, 1000);
    }

    // Add an event listener to the button to animate the heart when clicked
    const surpriseBtn = document.getElementById("surprise-btn");
    surpriseBtn.addEventListener("click", animateHeart);
});