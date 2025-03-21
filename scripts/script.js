const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.rockstar');


hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open')
});


