function showTripInfo(title, desc) {
    showOverlay(title); 
    document.getElementById('game-area').innerHTML = `<p style="padding:20px;">${desc}</p>`;
}