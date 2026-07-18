function checkGrade() {
    let subjects = ["HTML", "CSS", "JavaScript"];
    // 과목 명이 담긴 배열 선언
    let total = 0;
    // 점수들을 누적하여 더해줄 총 점 변수를 0으로 초기화

    for (let i = 0; i < subjects.length; i++) {
        let input = prompt(subjects[i] + " 점수를 입력해주세요. (0~100)");

        // 사용자가 취소 버튼을 눌렀을 때 (input이 null인 경우)
        if (input === null) {
            alert("계산을 취소합니다.");
            return; // 함수를 즉시 종료
        }

        let score = Number(input);

        // 숫자가 아니거나 범위를 벗어난 경우 (예외 처리)
        if (isNaN(score) || score < 0 || score > 100) {
            alert("올바른 점수(0~100 사이 숫자)를 입력해주세요.");
            return; // 함수를 즉시 종료
        }

        total = total + score;
    }

    let average = total / subjects.length;

    let result = "";
    if (average >= 90) {
        result = "🎉 A등급입니다! 축하합니다";
    } else if (average >= 80) {
        result = "B등급입니다!";
    } else if (average >= 70) {
        result = "C등급입니다";
    } else {
        result = "D등급입니다 분발하세요";
    }

    alert(
        "---------------------------------------------\n" +
        "---------------성적 결과 표----------------\n" +
        "총점: " + total + "점\n" +
        "평균: " + average.toFixed(1) + "점\n" +
        "---------------------------------------------\n" +
        "결과: " + result
    );
}