// src/menu.js
export default function menu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Our Menu';
    
    const menuList = document.createElement('ul');
    const item1 = document.createElement('li');
    item1.textContent = 'Coffee';
    const item2 = document.createElement('li');
    item2.textContent = 'Tea';
    const item3 = document.createElement('li');
    item3.textContent = 'Sandwich';
    
    menuList.appendChild(item1);
    menuList.appendChild(item2);
    menuList.appendChild(item3);
    
    content.appendChild(menuTitle);
    content.appendChild(menuList);
}
