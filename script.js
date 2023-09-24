function showResult() {
    let scores = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };

    let q1Value = document.querySelector('input[name="question1"]:checked').value;
    let q2Value = document.querySelector('input[name="question2"]:checked').value;

    scores[q1Value]++;
    scores[q2Value]++;

    // 這裡可以進行更複雜的分數計算和結果顯示
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `A類分數：${scores.A}，B類分數：${scores.B}，C類分數：${scores.C}，D類分數：${scores.D}`;
}
