gsap.registerPlugin(ScrollTrigger);

// Typed Text Animation for Hero Section
const familyNames = ["Xavier - The Rock",
                    "Gracy - The Heart",
                    "Deepa G. - The Guiding Light",
                    "Anto-O-Rio - The Visionary",
                    "Javier - The Wanderer",
                    "Mahima J. - The Business Magnet"
                ];
let nameIndex = 0;
let charIndex = 0;
const typedTextElement = document.querySelector(".typed-text");

function typeEffect() {
    if (charIndex < familyNames[nameIndex].length) {
        typedTextElement.textContent += familyNames[nameIndex][charIndex];
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(() => {
            typedTextElement.textContent = "";
            charIndex = 0;
            nameIndex = (nameIndex + 1) % familyNames.length;
            typeEffect();
        }, 2000);
    }
}

typeEffect();

//Scroll to Features section
function scrollToSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    const header = document.querySelector("header"); // Select the header
    const headerHeight = header.offsetHeight; // Get the height of the header

    const topOffset = section.offsetTop - headerHeight; // Adjust for header height
    window.scrollTo({
        top: topOffset,
        behavior: "smooth"
    });
}

// Scroll Trigger with GSAP
gsap.utils.toArray('.features').forEach(feature => {
    gsap.fromTo(feature, 
        { opacity: 0, y: 30 }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            scrollTrigger: { 
                trigger: feature, 
                start: "top 80%" 
            } 
        }
    );
});
