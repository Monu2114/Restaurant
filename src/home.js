// src/home.js
export default function home() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to My Cafe';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Hey Welcome !! If u ever feel u want all the privacy needed, pls come to our cafe to have fun with milkshakes on own :)';
    
    content.appendChild(heading);
    content.appendChild(paragraph);
}
