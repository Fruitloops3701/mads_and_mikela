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
        const heartRect = heart.getBoundingClientRect();

        texts.forEach(text => {
            const textPiece = document.createElement("div");
            textPiece.className = "text-piece";
            textPiece.textContent = text;

            // Set the initial position to the center of the heart
            const initialX = heartRect.left + heartRect.width / 2;
            const initialY = heartRect.top + heartRect.height / 2;
            textPiece.style.left = `${initialX}px`;
            textPiece.style.top = `${initialY}px`;

            // Append the text piece to the container
            textContainer.appendChild(textPiece);

            // Apply random trajectory and animation
            const angle = Math.random() * 360;
            const distance = Math.random() * 100 + 50; // Random distance between 50 and 150 pixels
            const x = distance * Math.cos(angle * Math.PI / 180);
            const y = distance * Math.sin(angle * Math.PI / 180);

            textPiece.style.transform = `translate(${x}px, ${y}px)`;

            // Remove the text piece after the animation ends
            setTimeout(() => {
                textPiece.remove();
            }, 3000);
        });
    }
});