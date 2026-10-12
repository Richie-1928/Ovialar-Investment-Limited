// Element Selection
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Toggle menu: hamburger
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('active', isOpen);

        // The body of the webpage can be made blurred optionally.
        // document.body.classList.toggle('nav-open', isOpen);
    });

    navItems.forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('active');
            // document.body.classList.remove('nav-open');

            navItems.forEach((item) => item.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

// "About" Page pop-up
const aboutButton = document.querySelector('.btn-about');
const aboutExtra = document.getElementById('about-extra');

if (aboutButton && aboutExtra) {
    aboutButton.addEventListener('click', () => {
        const isOpen = aboutExtra.classList.toggle('open');
        aboutButton.setAttribute('aria-expanded', String(isOpen));
    });
}