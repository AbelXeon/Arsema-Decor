document.addEventListener('DOMContentLoaded', () => {

    // Check if we are on a page with the contact container
    const contactContainer = document.querySelector('.contact-container');
    if (contactContainer) {

        // GSAP Animation Timeline for the contact page
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Animate the entire container box
        tl.from(contactContainer, { 
            opacity: 0, 
            scale: 0.95, 
            duration: 0.8 
        });

        // Animate the map sliding in from the right
        tl.from('.contact-right', { 
            x: '100%', 
            opacity: 0, 
            duration: 1 
        }, '-=0.5');

        // Stagger the animation of the title and intro text on the left
        tl.from('.contact-left .contact-title, .contact-left .contact-intro', {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2
        }, '-=0.8');

        // Stagger the animation of the contact detail items
        tl.from('.detail-item', {
            x: -30,
            opacity: 0,
            stagger: 0.15
        }, '-=0.4');

        // Stagger the animation of the form groups
        tl.from('.form-group', {
            y: 20,
            opacity: 0,
            stagger: 0.1
        }, '-=0.3');

        // Finally, animate the submit button
        tl.from('.submit-btn', {
            opacity: 0,
            y: 20,
            scale: 0.9
        }, '-=0.2');
    }





     // --- FAQ Accordion Logic ---
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const currentlyActive = document.querySelector('.faq-question.active');

                // If there's an active question and it's not the one we just clicked
                if (currentlyActive && currentlyActive !== question) {
                    currentlyActive.classList.remove('active');
                    currentlyActive.nextElementSibling.style.maxHeight = 0;
                    currentlyActive.nextElementSibling.style.padding = "0";
                }

                // Toggle the active state of the clicked question
                question.classList.toggle('active');
                const answer = question.nextElementSibling;

                if (question.classList.contains('active')) {
                    // Set max-height to the scrollHeight to fully show the content
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    answer.style.maxHeight = 0;
                }
            });
        });
    }


    // --- GSAP ScrollTrigger Animation for FAQ Section ---
    const faqSection = document.querySelector('.faq-section');
    if (faqSection) {
        // First, register the ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(faqSection, {
            scrollTrigger: {
                trigger: faqSection,
                start: "top 80%", // Animation starts when the top of the section is 80% from the top of the viewport
                toggleActions: "play none none none" // Play the animation once when it enters the viewport
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out"
        });
    }







});