function showMyBag() {
    let mybag = [
        {name: "여권✈️", count:1 },
        {name: "지갑💰", count:1 },
        {name: "휴대폰📱", count:1 },
        {name: "보조배터리🔋", count:2 }
    ];

    let resultText = "내 가방 속 물건들:\n------------------------\n";

    for (let i = 0; i < mybag.length; i++) {
        resultText += mybag[i].name + " : " + mybag[i].count + "개\n";
    }
    resultText += "------------------------\n";
    resultText += "총 물품 종류 " + mybag.length + "개\n";
    
    alert(resultText);


}
