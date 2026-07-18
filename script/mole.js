// script/mole.js
let gameTimer = null;
let score = 0;
let level = 1;
let moleSpeed = 1000;

function startMoleGame() {
    // 1. 상태 초기화
    score = 0;
    level = 1;
    moleSpeed = 1000;
    updateBoardUI();
    
    // 2. 화면 전환
    document.getElementById('original-content').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';

    const board = document.getElementById('game-board');
    board.innerHTML = ''; 
    
    // 3. 4x4 그리드 생성 (총 16개)
    for(let i = 0; i < 16; i++) {
        const hole = document.createElement('div');
        hole.className = 'hole';
        hole.onclick = function() {
            // 두더지 잡기 판별
            if(this.classList.contains('mole')) {
                score++;
                
                // 피드백: 잡았을 때 색상 변경
                this.classList.remove('mole');
                this.classList.add('hit');
                setTimeout(() => this.classList.remove('hit'), 200);

                // 레벨업 로직
                if (score % 10 === 0) {
                    if (level >= 5) {
                        alert("축하합니다! 최종 단계 레벨 5를 깨셨습니다! 게임을 종료합니다.");
                        stopMoleGame();
                        return;
                    }
                    level++;
                    moleSpeed = Math.max(200, moleSpeed - 150); // 속도 가속
                    alert(`레벨업! 현재 레벨: ${level}`);
                }
                updateBoardUI();
            }
        };
        board.appendChild(hole);
    }
    gameLoop();
}

// 게임 루프 (재귀적 호출)
function gameLoop() {
    if (document.getElementById('game-container').style.display === 'none') return;

    // 기존 두더지 초기화
    document.querySelectorAll('.hole').forEach(h => h.classList.remove('mole'));
    
    // 랜덤 두더지 생성
    const holes = document.querySelectorAll('.hole');
    const randomIdx = Math.floor(Math.random() * 16);
    if(holes[randomIdx]) holes[randomIdx].classList.add('mole');
    
    // 난이도에 따른 속도 적용
    gameTimer = setTimeout(gameLoop, moleSpeed);
}

// 점수 및 레벨 UI 업데이트
function updateBoardUI() {
    document.getElementById('score-board').textContent = `점수: ${score} | 레벨: ${level}`;
}

// 게임 종료 및 화면 복구
function stopMoleGame() {
    clearTimeout(gameTimer);
    document.getElementById('original-content').style.display = 'block';
    document.getElementById('game-container').style.display = 'none';
}