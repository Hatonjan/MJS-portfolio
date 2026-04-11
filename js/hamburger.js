const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');

// Toggle the hamburger menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('mobile-menu');
});

// Close menu when a link is clicked
navigation.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        hamburger.classList.remove('active');
        navigation.classList.remove('mobile-menu');
    }
});

// Close menu when clicking outside of it
document.addEventListener('click', (e) => {
    const isClickInsideNav = navigation.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);
    
    if (!isClickInsideNav && !isClickOnHamburger && hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        navigation.classList.remove('mobile-menu');
    }
});
