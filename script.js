document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menu = document.getElementById('menu');

    hamburgerMenu.addEventListener('click', function() {
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!hamburgerMenu.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = 'none';
        }
    });
});