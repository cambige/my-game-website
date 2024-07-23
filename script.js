// script.js
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// script.js
document.getElementById('about-link').addEventListener('click', function() {
    var aboutSection = document.getElementById('about');
    if (aboutSection.classList.contains('hidden')) {
        aboutSection.classList.remove('hidden');
    } else {
        aboutSection.classList.add('hidden');
    }
});
