
function openPlayer() {
    const width = 350;
    const height = 150;
    const left = window.screen.width - width;
    const top = 0;
    window.open('player.html', 'musicPlayer', `width=${width},height=${height},left=${left},top=${top}`);
}
