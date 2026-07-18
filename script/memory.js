// 카드 데이터 및 상태 관리
const cards = ['🍎', '🍎', '🍌', '🍌', '🍇', '🍇', '🍓', '🍓', '🍒', '🍒', '🥝', '🥝', '🍍', '🍍', '🍑', '🍑'];
let flippedCards = [];
let matchedCount = 0;

// 카드 섞기 함수 (Fisher-Yates 알고리즘)
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// 카드 뒤집기 시작
function startMemoryGame() {
    showOverlay("🧩 카드 뒤집기");
    const shuffledCards = shuffle([...cards]);
    const area = document.getElementById('game-area');
    
    // 그리드 스타일 적용
    area.style.display = 'grid';
    area.style.gridTemplateColumns = 'repeat(4, 1fr)';
    area.style.gap = '10px';

    area.innerHTML = shuffledCards.map((icon, index) => `
        <div class="card" onclick="flipCard(this, '${icon}')" 
             style="height: 60px; border: 2px solid #ccc; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 20px;">
            ?
        </div>
    `).join('');
}

// 카드 클릭 로직
function flipCard(element, icon) {
    if (flippedCards.length >= 2 || element.classList.contains('flipped')) return;

    element.textContent = icon;
    element.classList.add('flipped');
    flippedCards.push({ element, icon });

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

// 짝 확인 로직
function checkMatch() {
    const [first, second] = flippedCards;
    if (first.icon === second.icon) {
        matchedCount += 2;
        flippedCards = [];
        if (matchedCount === cards.length) {
            setTimeout(() => {
                alert("축하합니다! 모두 맞췄습니다!");
                stopGame();
            }, 500);
        }
    } else {
        setTimeout(() => {
            first.element.textContent = '?';
            second.element.textContent = '?';
            first.element.classList.remove('flipped');
            second.element.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}