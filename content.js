let isActive = false;

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggle") {
    isActive = request.state;
    if (isActive) {
      document.body.classList.add('colorcat-active');
    } else {
      document.body.classList.remove('colorcat-active');
    }
  }
});

// Intercept clicks on the page
document.addEventListener('click', (e) => {
  if (!isActive) return; // Do nothing if the extension is turned off
  
  // Prevent the default click behavior (like navigating away if it's a link)
  e.preventDefault();
  e.stopPropagation();
  
  // Generate a random hex color
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  
  // Apply the color to the clicked element
  e.target.style.backgroundColor = randomColor;
  e.target.style.transition = 'background-color 0.2s';
  
}, true); // Use capture phase to ensure we catch the click before other scripts
