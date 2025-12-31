document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Continuous Typing Effect Logic ---
    const textToType = "Srinubabu Sanagala";
    const typingElement = document.getElementById('typing-text');
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        if (!typingElement) return;

        const currentText = textToType;
        let typeSpeed = 100; // Normal typing speed

        if (isDeleting) {
            // Delete text
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // Deleting speed (faster)
        } else {
            // Type text
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        // Logic to switch between typing and deleting
        if (!isDeleting && charIndex === currentText.length) {
            // Finished typing, wait before deleting
            isDeleting = true;
            typeSpeed = 2000; // Pause at end (2 seconds)
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting, start typing again
            isDeleting = false;
            typeSpeed = 500; // Pause before restarting
        }

        setTimeout(typeWriter, typeSpeed);
    }

    // Start typing loop
    typeWriter();


    // --- 2. Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Hamburger animation
            const spans = hamburger.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- 3. Dynamic Copyright Year ---
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- 4. Smooth Scroll for Safari/Older Browsers ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement){
                window.scrollTo({
                    top: targetElement.offsetTop - 70, 
                    behavior: 'smooth'
                });
            }
        });
    });
});
