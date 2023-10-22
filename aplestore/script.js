const iphoneModelsLink = document.getElementById('iphone-models-link');
const iphoneModelsBar = document.getElementById('iphone-models-bar');
const iphoneModelsOverlay = document.getElementById('iphone-models-overlay');

function toggleIphoneModelsBar() {
  if (iphoneModelsBar.style.display === 'block') {
    iphoneModelsBar.style.display = 'none';
    iphoneModelsOverlay.style.display = 'none';
  } else {
    iphoneModelsBar.style.display = 'block';
    iphoneModelsOverlay.style.display = 'block';
  }
}

iphoneModelsLink.addEventListener('click', toggleIphoneModelsBar);

iphoneModelsOverlay.addEventListener('click', toggleIphoneModelsBar);





function handleKeyPress(event) {
  if (event.key === 'Enter') {
    search();
  }
}

function search() {
  const searchTerm = document.getElementById('search').value;
  console.log('Searching for: ' + searchTerm);
  // Replace console.log with your actual search functionality
  simulateSearch(searchTerm);
}

function simulateSearch(searchTerm) {
  // Simulate a search for 'iphone'
  if (searchTerm.toLowerCase() === 'iphone 15') {
    // Navigate to the iPhone HTML page
    window.location.href = '15.html';
  } 
  if (searchTerm.toLowerCase() === 'iphone 14') {
    // Navigate to the iPhone HTML page
    window.location.href = '14.html';
  }
  if (searchTerm.toLowerCase() === 'iphone 13') {
    // Navigate to the iPhone HTML page
    window.location.href = '13.html';
  }
  if (searchTerm.toLowerCase() === 'iphone 12') {
    // Navigate to the iPhone HTML page
    window.location.href = '12.html';
  }
  if (searchTerm.toLowerCase() === 'iphone 11') {
    // Navigate to the iPhone HTML page
    window.location.href = '11.html';
  }
  if (searchTerm.toLowerCase() === 'iphone x') {
    // Navigate to the iPhone HTML page
    window.location.href = 'X.html';
  }
  if (searchTerm.toLowerCase() === 'iphone 8') {
    // Navigate to the iPhone HTML page
    window.location.href = '8.html';
  }
}



function showSpecifications(name, specs) {
  const specificationsPopup = document.getElementById('specificationsPopup');
  const overlay = document.getElementById('overlay');
  const productName = document.getElementById('productName');
  const productSpecs = document.getElementById('productSpecs');

  productName.textContent = 'Product: ' + name;
  productSpecs.textContent = 'Specifications: ' + specs;

  specificationsPopup.style.display = 'block';
  overlay.style.display = 'block';

  // Close popup when clicking outside the popup
  overlay.addEventListener('click', closePopup);
}

function closePopup() {
  const specificationsPopup = document.getElementById('specificationsPopup');
  const overlay = document.getElementById('overlay');

  specificationsPopup.style.display = 'none';
  overlay.style.display = 'none';

  // Remove event listener to prevent multiple listeners
  overlay.removeEventListener('click', closePopup);
}





