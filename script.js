// script.js
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var aboutLink = document.getElementById('about-link');
    var aboutSection = document.getElementById('about');

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        if (aboutSection.classList.contains('hidden')) {
            aboutSection.classList.remove('hidden');
        } else {
            aboutSection.classList.add('hidden');
        }
    });
});
