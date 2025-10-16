document.addEventListener('DOMContentLoaded', () => {
    // --- Hero Slideshow Data (Price has been removed) ---
    const slides = [
        {
            headline: "Elegant Weddings",
            mainImg: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            nextImg: "https://images.pexels.com/photos/265917/pexels-photo-265917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            headline: "Cozy Anniversaries",
            mainImg: "https://images.pexels.com/photos/265917/pexels-photo-265917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            nextImg: "https://images.pexels.com/photos/1683989/pexels-photo-1683989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            headline: "Joyful Birthdays",
            mainImg: "https://images.pexels.com/photos/1683989/pexels-photo-1683989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            nextImg: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];

    // --- DOM Elements (priceEl removed) ---
    const headlineEl = document.getElementById('hero-headline');
    const mainImgEl = document.getElementById('main-hero-img');
    const nextImgEl = document.getElementById('next-preview-img');
    const nextBtn = document.getElementById('next-btn');

    // All elements that fade during the transition (price-text removed)
    const elementsToAnimate = [headlineEl, mainImgEl, nextImgEl];
    
    let currentSlide = 0;
    let isAnimating = false;

    // --- Function to update slide content (price logic removed) ---
    function updateSlide(slideIndex) {
        const slide = slides[slideIndex];
        headlineEl.textContent = slide.headline;
        mainImgEl.src = slide.mainImg;

        const nextSlideIndex = (slideIndex + 1) % slides.length;
        nextImgEl.src = slides[nextSlideIndex].nextImg;
    }

    // --- Event Listener for the 'Next' button (no changes needed here) ---
    nextBtn.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;

        elementsToAnimate.forEach(el => el.classList.add('is-changing'));

        setTimeout(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlide(currentSlide);

            requestAnimationFrame(() => {
                elementsToAnimate.forEach(el => el.classList.remove('is-changing'));
            });
            
            setTimeout(() => {
                isAnimating = false;
            }, 400);

        }, 400);
    });

    // --- Initial Page Load Animation ---
    function triggerEntryAnimations() {
        const textWrapper = document.querySelector('.text-wrapper');
        const mainImageContainer = document.querySelector('.main-image-container');
        
        setTimeout(() => {
            if (textWrapper) textWrapper.classList.add('visible');
            if (mainImageContainer) mainImageContainer.classList.add('visible');
        }, 100);
    }

    updateSlide(0);
    triggerEntryAnimations();
});
