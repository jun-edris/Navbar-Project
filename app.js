// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
navToggle.addEventListener('click', () => {
    links.classList.toggle("show-links");
});

// function where everytime the width resizes more than 800px
// the show-links class will be removed
window.addEventListener('resize', (event) => {
    const screenSize = window.innerWidth;
    if(screenSize > 800) {
        links.classList.remove('show-links');
    }
});
