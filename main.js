// Popup ko'rsatish kerakmi yoki yo'qligini tekshirish
function shouldShowPopup() {
    // LocalStorage dan oxirgi tashriflar tarixini olish
    const lastVisits = JSON.parse(localStorage.getItem('popupVisits') || '[]');
    const now = new Date().getTime();
    
    // 24 soatdan eski tashriflarni filtrlash
    const recentVisits = lastVisits.filter(visit => {
        const timeDiff = now - visit;
        const hoursDiff = timeDiff / (1000 * 60 * 60);
        return hoursDiff < 24;
    });
    
    // Agar 24 soat ichida 2 tadan kam tashrif bo'lsa
    if (recentVisits.length < 2) {
        // Yangi tashrifni qo'shish
        recentVisits.push(now);
        localStorage.setItem('popupVisits', JSON.stringify(recentVisits));
        return true;
    }
    
    return false;
}

// Popup ni yopish funksiyasi
function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}

// Test uchun tashrif tarixini tozalash
function clearVisitHistory() {
    localStorage.removeItem('popupVisits');
    console.log('Tashrif tarixi tozalandi');
}

// Sahifa yuklanganda popup ni ko'rsatish
window.onload = function() {
    if (shouldShowPopup()) {
        document.getElementById('popupOverlay').style.display = 'flex';
    }
}

// Popup tashqarisiga bosganda yopish
document.getElementById('popupOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});
