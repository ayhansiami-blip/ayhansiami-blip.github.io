const texts = [
    "Future Software Engineer",
    "Python Developer",
    "Web Developer",
    "Always Learning"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typingElement = document.getElementById("typing");

function type() {
    currentText = texts[index];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex--);
    } else {
        typingElement.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1200);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 60 : 100);
}

type();