function checkGrade() {
    let subjects = ["HTML", "CSS", "JavaScript"];
    //과목 명이 담긴 배열 선언
    let total = 0;
    //점수들을 누적하여 더해줄 총 점 변수를 0으로 초기화

    for(let i = 0; i < subjects.length; i++){
        let score = Number(prompt(subjects[i] + "점수를 입력해주세요. (0~100)"));

        if (isNaN(score)){ 
            //사용자가 취소 버튼을 눌렀을 때의 예외 처리
            alert("올바른 숫자가 입력되지 않아 계산을 취소합니다.");
            return; //함수를 즉시 취소함
        }

        total = total + score;
    }
    let average = total / subjects.length;

    let result = "";
    if(average>=90){
    result = "🎉 A등급입니다! 축하합니다";
    } else if (average>=80){
        result = "B등급입니다!";
    } else if (average>=70){
        result = "C등급입니다";
    } else {
        result= "D등급입니다 분발하세요"};

alert (
    "---------------------------------------------\n" +
    "---------------성적 결과 표----------------\n" +
    "총점: " + total + "점\n" +
    "평균: " + average.toFixed(1) + "점\n" + // toFixed(1) 소수점 1번째까지만 출력해라 
    "---------------------------------------------\n" +
    "결과: " + result 
);
}

