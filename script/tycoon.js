let inventory = 50; 
let money = 1000;   
let day = 1;        

function startTycoon() {
    showOverlay("🧮 재고 최적화 타이쿤");
    inventory = 50;
    money = 1000;
    day = 1;

    const area = document.getElementById('game-area');
    area.innerHTML = `
        <div style="display: flex; flex-direction: column; text-align: left; font-size: 14px; line-height: 1.6; border: 1px solid #eee; padding: 15px; margin-bottom: 15px; width: 100%; box-sizing: border-box;"> 
            <p><strong>[게임 목표]</strong> 10일 동안 파산하지 않고 수익을 극대화하세요.</p>
            <p><strong>[비즈니스 규칙]</strong></p>
            <ul>
                <li>매일 판매할 물량을 결정(발주)하세요. (개당 원가: 5원)</li>
                <li>손님은 매일 10~80명이 랜덤하게 방문합니다.</li>
                <li>판매 시 개당 10원을 법니다.</li>
                <li>재고가 남으면 보관비(개당 1원)가 발생합니다.</li>
                <li>자금이 0원 이하가 되면 파산합니다.</li>
            </ul>
        </div>
        <button class="tycoon-btn" onclick="renderTycoonGame()">게임 시작하기</button>
    `;
}

function renderTycoonGame() {
    const area = document.getElementById('game-area');
    area.innerHTML = `
        <div style="margin-bottom: 15px;">
            <p>📅 <strong>${day}일차</strong></p>
            <p>💰 자금: <strong>${money}원</strong> | 📦 현재 재고: <strong>${inventory}개</strong></p>
        </div>
        <input type="number" id="order-input" placeholder="발주 수량(개)" style="padding: 8px; width: 120px;">
        <button class="tycoon-btn" onclick="processDay()">발주하고 진행</button>
        <p id="tycoon-msg" style="margin-top: 15px; color: #333; font-weight: bold;"></p>
    `;
}

function processDay() {
    const orderInput = document.getElementById('order-input');
    const order = parseInt(orderInput.value);
    
    // 로직 개선: 입력값 검증 및 자금 부족 방어
    if (isNaN(order) || order < 0) {
        alert("올바른 수량을 입력하세요.");
        return;
    }
    
    if (money < (order * 5)) {
        alert("자금이 부족하여 해당 수량을 발주할 수 없습니다!");
        return;
    }

    inventory += order;
    money -= (order * 5); 

    const demand = Math.floor(Math.random() * 70) + 10;
    const sales = Math.min(inventory, demand);
    
    money += (sales * 10); 
    inventory -= sales;   
    
    // 보관비 차감
    money -= (inventory * 1); 

    const msg = document.getElementById('tycoon-msg');
    msg.textContent = `방문객: ${demand}명 | 판매: ${sales}개 | 재고보관: ${inventory}개`;
    
    day++;
    
    if (money <= 0) {
        alert(`파산했습니다! 경영 실패. (최종일차: ${day-1}일)`);
        stopGame();
    } else if (day > 10) {
        alert(`게임 종료! 최종 자금: ${money}원`);
        stopGame();
    } else {
        renderTycoonGame();
    }
}