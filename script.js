// Get the elements
const menuToggle = document.querySelector('.menu-toggle');
const overlayMenu = document.getElementById('overlay-menu');
const closeBtn = document.getElementById('close-btn');

// Function to open the overlay menu
function openMenu() {
    overlayMenu.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling when the menu is open
}

// Function to close the overlay menu
function closeMenu() {
    overlayMenu.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling when the menu is closed
}

// Add event listener to the menu toggle (burger icon)
menuToggle.addEventListener('click', openMenu);

// Add event listener to the close button (X)
closeBtn.addEventListener('click', closeMenu);

// Optional: Close the overlay if the user clicks anywhere outside the menu (click on the overlay background)
window.addEventListener('click', function(event) {
    if (event.target === overlayMenu) {
        closeMenu();
    }
});

// Hide the overlay menu on scroll
window.addEventListener('scroll', function() {
    // Only close the menu if it's currently visible
    if (overlayMenu.style.display === 'block') {
        closeMenu();
    }
});
