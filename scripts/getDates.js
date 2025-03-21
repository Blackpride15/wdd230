// Get the current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get the last modified date of the document
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerElement = document.getElementById('hamburger');
    const navElement = document.querySelector('.rockstar');

    hamburgerElement.addEventListener('click', () => {
        navElement.classList.toggle('open');
        hamburgerElement.classList.toggle('open');
    });
});