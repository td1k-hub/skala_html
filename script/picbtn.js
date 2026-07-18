function showTripInfo(title, desc) {
    showOverlay(title); // 이미 게임에서 쓰던 함수 재활용
    document.getElementById('game-area').innerHTML = `<p style="padding:20px;">${desc}</p>`;
}