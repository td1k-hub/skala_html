//업다운 게임

function startGame() {
    let computerNum = Math.floor(Math.random() *50) +1;
    let count = 0;
    //startGame의 함수선언. / let 변수선언> 데이터를 저장하는 공간 만듦
    // math.floor> 소수점을 버리고 정수로 만드는 내장함수/ Math.random> 0이상, 1미만의 무작위 실수를 생성하는 메서드
    // let count 도전횟수를 기록할 초기값 설정

    console.log("이번 판 컴퓨터의 비밀 숫자: " + computerNum);
    //콘솔로그에서 숫자 확인가능 F12

    while(true){
        //무한 반복문
        let userGuess = Number(prompt("1부터 50사이의 숫자 컴퓨터가 생각한 숫자는 무엇일까요❔❓"))
        //prompt() 사용자에게 값을 입력받는 브라우저 창을 띄우는 함수
        //Number() prompt로 받은 문자열 데이터를 숫자로 변환하는 형 변환 (타입 캐스팅)

        if (userGuess === 0) {
            alert("게임이 취소되었습니다.");
            break;
        }
        //사용자가 취소 버튼을 누르거나 창을 닫으면 게임종료 / break 반복문 강제 종료

        count = count + 1;

        if (userGuess === computerNum){
            alert("🎉정답입니다! 축하합니다! \n 👏 도전횟수 " + count + "번 만에 맞추셨습니다.");
            break;
        }
        else if(userGuess > computerNum){
            alert("⬇️ Down! 더 작은 숫자를 입력해보세요. \n (현재 " + count + "회 도전 중)");
        }else if(userGuess < computerNum){
            alert("⬇️ Down! 더 작은 숫자를 입력해보세요. \n (현재 " + count + "회 도전 중)");
        }
        else {
            alert("⚠️입력하신 숫자가 범위내에 있지 않습니다. 다시 시도해주세요.");
        }
    }   

}   

