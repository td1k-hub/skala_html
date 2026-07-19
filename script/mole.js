let gameTimer = null;
let score = 0;
let level = 1;
let moleSpeed = 1000;

function startMoleGame() {
    score = 0;
    level = 1;
    moleSpeed = 1000;
    updateBoardUI();
    
    document.getElementById('original-content').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';

    const board = document.getElementById('game-board');
    board.innerHTML = ''; 
    
    for(let i = 0; i < 16; i++) {
        const hole = document.createElement('div');
        hole.className = 'hole';
        hole.onclick = function() {
            if(this.classList.contains('mole')) {
                score++;
                
                this.classList.remove('mole');
                this.classList.add('hit');
                setTimeout(() => this.classList.remove('hit'), 200);

                if (score % 10 === 0) {
                    if (level >= 5) {
                        alert("축하합니다! 최종 단계 레벨 5를 깨셨습니다! 게임을 종료합니다.");
                        stopMoleGame();
                        return;
                    }
                    level++;
                    moleSpeed = Math.max(200, moleSpeed - 150); 
                    alert(`레벨업! 현재 레벨: ${level} 속도를 올려볼게요😉` );
                }
                updateBoardUI();
            }
        };
        board.appendChild(hole);
    }
    gameLoop();
}


function gameLoop() {
    if (document.getElementById('game-container').style.display === 'none') return;

    document.querySelectorAll('.hole').forEach(h => h.classList.remove('mole'));
    
    const holes = document.querySelectorAll('.hole');
    const randomIdx = Math.floor(Math.random() * 16);
    if(holes[randomIdx]) holes[randomIdx].classList.add('mole');
    
    gameTimer = setTimeout(gameLoop, moleSpeed);
}

function updateBoardUI() {
    document.getElementById('score-board').textContent = `점수: ${score} | 레벨: ${level}`;
}

function stopMoleGame() {
    clearTimeout(gameTimer);
    document.getElementById('original-content').style.display = 'block';
    document.getElementById('game-container').style.display = 'none';
}