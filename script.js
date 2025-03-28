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
        }, 350);
        // Create and animate text pieces
        createTextPieces();
    }

    // Add an event listener to the button to animate the heart when clicked
    const surpriseBtn = document.getElementById("surprise-btn");

    surpriseBtn.addEventListener("click", animateHeart);
    
    // Function to create and animate text pieces
    function createTextPieces() {
        const textContainer = document.getElementById("text-container");
        const texts = ["❤️", "🌟", "🎉", "😍", "💖"];
        texts.forEach(text => {
            const textPiece = document.createElement("div");
            textPiece.className = "text-piece";
            textPiece.textContent = text;
            textPiece.style.left = `${Math.random() * 100}%`;
            textPiece.style.top = `${Math.random() * 100}%`;
            textContainer.appendChild(textPiece);

            // Remove the text piece after the animation ends
            setTimeout(() => {
                textPiece.remove();
            }, 3000);
        });
    }
});