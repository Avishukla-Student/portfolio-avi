const text = "  Frontend developer ,  Web developer .";
const typingSpeed = 80; // Speed of typing (ms per character)
const typingTextDiv = document.getElementById("text");

let charIndex = 0;

function typeText() {
    if (charIndex < text.length) {
        typingTextDiv.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        // Optional: Pause and restart typing effect
        setTimeout(() => {
            charIndex = 0;
            typingTextDiv.textContent = "";
            typeText();
        }, 1000); // Restart delay
    }
}

typeText();


// const slideshowImage = document.getElementById("slideshow");
// const imageArray = ["profile.jpg", "about.jpg", ];
// let slideIndex = 0;

// function swapImages() {
//     slideIndex = (slideIndex + 1) % imageArray.length;
//     slideshowImage.src = imageArray[slideIndex];
// }

// // Automatically swap images every 3 seconds
// setInterval(swapImages, 4000);
