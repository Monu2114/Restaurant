import pageLoad from './pageLoad';
import home from './home';
import menu from './menu';
import contact from './contact';
const buttons = document.querySelectorAll('button');
const header = document.querySelector('header');
const content = document.getElementById('content');
const nav = document.querySelector('nav');
nav.style.display = 'flex';
nav.style.justifyContent = 'flex-start';
nav.style.marginTop = '50px';
nav.style.gap = '20px';
buttons.forEach((button) => {
    button.style.padding = '10px 20px';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.backgroundColor = 'blue';
    button.style.color = 'white';
    button.style.cursor = 'pointer';
    button.style.fontSize = '1rem';
    button.style.textTransform = 'uppercase';
    button.style.display = 'block';
    button.style.textAlign = 'center';
    button.style.textDecoration = 'none';
    button.style.transition = 'all 0.3s ease';
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'darkblue';
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'blue';
    });
});

const homeButton = document.querySelector('.Home');
const menuButton = document.querySelector('.Menu');
const contactButton = document.querySelector('.contact');

homeButton.addEventListener('click', () => {
    header.style.display = 'none';
    home();
});

menuButton.addEventListener('click', () => {
    header.style.display = 'none';

    menu();
});

contactButton.addEventListener('click', () => {
    header.style.display = 'none';
    contact();
    console.log('contact');
});

console.log('Hello, World!');
pageLoad();

