document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.overlay').forEach(overlay => {
        const box = overlay.closest('.box, .widebox');
        if (overlay.scrollHeight > box.clientHeight * 0.8) {
            overlay.classList.add('overlay-auto-full');
        }
    });
});