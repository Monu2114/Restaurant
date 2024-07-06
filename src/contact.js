// src/contact.js
export default function contact() {
    document.body.style.backgroundColor = 'pink'
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const ph = document.createElement('p');
    ph.textContent = 'Contact us at: 8297210405';
    
    const address = document.createElement('p');
    address.textContent = 'Address: 123, xyz street, abc city, 123456';
    
    const email = document.createElement('p');
    email.textContent = 'Email: monu.nanabala@gmail.com';
    
    content.appendChild(ph);
    content.appendChild(address);
    content.appendChild(email);
}
