window.onload = function() {
    document.getElementById('popupOverlay').style.display = 'flex';
}

// Close popup function
function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}

// Close popup when clicking outside
document.getElementById('popupOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});