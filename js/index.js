const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// handle clicking on the nav toggle button
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

jQuery(document).ready(function($) {

    new GitHubCalendar("#github-graph", "fanonxr", { responsive: true });

});