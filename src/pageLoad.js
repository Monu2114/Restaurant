export default function pageLoad() {
  // Set the background image for the body  
  // Get the content div
  document.body.style.backgroundColor = 'bisque';
  const content = document.getElementById('content');
  
  // Clear the content div
  content.innerHTML = '';

  // Create new elements
  const header = document.querySelector('header');
  const heading = document.createElement('h1');
  heading.innerHTML = 'My Cafe';
  
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Welcome to my cafe!';
  
  // Append elements
  header.appendChild(heading);
  content.appendChild(paragraph);
  document.body.prepend(header); // Add header at the top of the body
}
