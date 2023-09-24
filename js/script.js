function showResult() {
    // 初始化分數
    let scoreA = 0;
    let scoreB = 0;
    let scoreC = 0;
    let scoreD = 0;

    console.log("開始計算分數...");

    fetch('https://raw.githubusercontent.com/Oliver0804/UAV_Choicer/main/questions.json')
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
            resultDiv.innerHTML = `四軸飛行器/穿越機：${results.A}，直升機：${results.B}，固定翼/滑翔翼：${results.C}，DIY自組無人機：${results.D}`;

            console.log("計算完成，結果已顯示在頁面上");

            renderChart(results);
        })
        .catch(error => {
            console.error("讀取問題出錯:", error);
        });
}


var myChart; // 宣告一個全局變數來保存圖表實例

function renderChart(results) {
    var ctx = document.getElementById('myChart').getContext('2d');
    
    // 檢查是否已經有一個圖表存在
    if (myChart) {
        myChart.destroy(); // 如果存在，就銷毀它
    }

    // 然後創建新的圖表
    myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['四軸飛行器/穿越機', '直升機', '固定翼/滑翔翼', 'DIY自組無人機'],
            datasets: [{
                data: [results.A, results.B, results.C, results.D],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
    });
}