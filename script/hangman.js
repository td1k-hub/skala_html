// --- 단어 맞추기 데이터 ---
let secretWord = "KORAIL";
let displayWord = [];
let attempts = 6;

// --- 오버레이 제어 함수 ---
function showOverlay(title) {
    // grid 대신 overlay를 보여주도록 수정
    document.getElementById('game-overlay').style.display = 'flex';
    document.getElementById('game-title').innerText = title;
}

function stopGame() {
    // 오버레이 숨기고 게임 영역 초기화
    document.getElementById('game-overlay').style.display = 'none';
    document.getElementById('game-area').innerHTML = '';
}

// --- 단어 맞추기 게임 시작 ---
function startHangman() {
    showOverlay("🔠 단어 맞추기");
    
    const words = ["KORAIL", "KIA", "PBV", "DATA"];
    secretWord = words[Math.floor(Math.random() * words.length)];
    displayWord = Array(secretWord.length).fill("_");
    attempts = 10;

    const area = document.getElementById('game-area');
    area.innerHTML = `
        <p id="word-display" style="font-size: 24px; letter-spacing: 5px;">${displayWord.join(" ")}</p>
        <p>남은 기회: <span id="attempts">${attempts}</span></p>
        <input type="text" id="h-input" maxlength="1" placeholder="알파벳 1글자">
        <button class="btn-submit" onclick="checkHangman()">확인</button>
    `;
}

// --- 게임 로직 검증 ---
function checkHangman() {
    const input = document.getElementById('h-input').value.toUpperCase();
    const wordDisplay = document.getElementById('word-display');
    const attemptsDisplay = document.getElementById('attempts');

    if (!input) return;

    if (secretWord.includes(input)) {
        // 정답 처리
        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === input) displayWord[i] = input;
        }
        wordDisplay.textContent = displayWord.join(" ");
        
        // 승리 체크
        if (!displayWord.includes("_")) {
            setTimeout(() => {
                alert("축하합니다! 정답입니다: " + secretWord);
                stopGame();
            }, 100);
        }
    } else {
        // 오답 처리
        attempts--;
        attemptsDisplay.textContent = attempts;
        
        // 패배 체크
        if (attempts === 0) {
            setTimeout(() => {
                alert("게임 오버! 정답은 " + secretWord + "였습니다.");
                stopGame();
            }, 100);
        }
    }
    document.getElementById('h-input').value = '';
    document.getElementById('h-input').focus(); // 입력 후 자동으로 커서 이동
}