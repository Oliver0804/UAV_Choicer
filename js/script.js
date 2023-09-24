function showResult() {
    // 初始化分數
    let scoreA = 0;
    let scoreB = 0;
    let scoreC = 0;
    let scoreD = 0;

    console.log("開始計算分數...");

    fetch('questions.json')
        .then(response => response.json())
        .then(questions => {
            questions.forEach((question, index) => {
                let selectedValue = document.querySelector(`input[name="question${index + 1}"]:checked`).value;

                console.log(`問題${index + 1}選擇的答案是: ${selectedValue}`);

                // 針對選擇的選項增加相應的分數
                switch (selectedValue) {
                    case 'A':
                        scoreA += question.weight;
                        console.log(`A分數增加${question.weight}，目前A分數是：${scoreA}`);
                        break;
                    case 'B':
                        scoreB += question.weight;
                        console.log(`B分數增加${question.weight}，目前B分數是：${scoreB}`);
                        break;
                    case 'C':
                        scoreC += question.weight;
                        console.log(`C分數增加${question.weight}，目前C分數是：${scoreC}`);
                        break;
                    case 'D':
                        scoreD += question.weight;
                        console.log(`D分數增加${question.weight}，目前D分數是：${scoreD}`);
                        break;
                }
            });

            let results = {
                A: scoreA,
                B: scoreB,
                C: scoreC,
                D: scoreD
            };

            var resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `A類分數：${results.A}，B類分數：${results.B}，C類分數：${results.C}，D類分數：${results.D}`;

            console.log("計算完成，結果已顯示在頁面上");

            renderChart(results);
        })
        .catch(error => {
            console.error("讀取問題出錯:", error);
        });
}
