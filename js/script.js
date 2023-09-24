function showResult() {
    // 初始化分數
    let scoreA = 0;
    let scoreB = 0;
    let scoreC = 0;
    let scoreD = 0;

    // 使用querySelectorAll來選取所有符合名稱前綴的輸入元素
    let totalQuestions = document.querySelectorAll('input[name^="question"]').length / 4; // 因為每個問題有4個選項

    // 對所有問題進行迴圈
    for (let i = 1; i <= totalQuestions; i++) {
        let selectedValue = document.querySelector(`input[name="question${i}"]:checked`).value;

        switch (selectedValue) {
            case 'A':
                scoreA += 1;
                break;
            case 'B':
                scoreB += 1;
                break;
            case 'C':
                scoreC += 1;
                break;
            case 'D':
                scoreD += 1;
                break;
        }
    }

    let results = {
        A: scoreA,
        B: scoreB,
        C: scoreC,
        D: scoreD
    };

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `A類分數：${results.A}，B類分數：${results.B}，C類分數：${results.C}，D類分數：${results.D}`;

    renderChart(results);
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
            labels: ['A類', 'B類', 'C類', 'D類'],
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
