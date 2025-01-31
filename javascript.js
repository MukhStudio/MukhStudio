// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

console.log("Welcome to MUKH STUDIO Portfolio");

// counting up
// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const experienceSection = document.getElementById("experience");
    const counts = document.querySelectorAll(".count");

    const startCounting = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                counts.forEach((count) => {
                    const target = +count.getAttribute("data-target"); // Get the target number
                    const duration = 2000; // Animation duration in milliseconds
                    const startTime = performance.now(); // Get the start time

                    const updateCount = (currentTime) => {
                        const elapsedTime = currentTime - startTime; // Calculate elapsed time
                        const progress = Math.min(elapsedTime / duration, 1); // Ensure progress doesn't exceed 1
                        const currentNumber = Math.floor(progress * target); // Calculate current number

                        count.textContent = currentNumber; // Update the displayed number

                        if (progress < 1) {
                            requestAnimationFrame(updateCount); // Continue the animation
                        } else {
                            count.textContent = target; // Ensure it ends at the target number
                        }
                    };

                    requestAnimationFrame(updateCount); // Start the animation
                });

                observer.unobserve(experienceSection); // Stop observing after animation
            }
        });
    };

    const observer = new IntersectionObserver(startCounting, {
        threshold: 0.5, // Trigger when 50% of the section is visible
    });

    observer.observe(experienceSection); // Start observing the experience section
});