function showResult() {
    // 假設你的計分方式如下
    let scoreA = 0;
    let scoreB = 0;
    let scoreC = 0;
    let scoreD = 0;

    if (document.querySelector('input[name="question1"]:checked').value === "A") scoreA += 1;
    if (document.querySelector('input[name="question1"]:checked').value === "B") scoreB += 1;
    // ... 其他的問題和計分方式 ...

    let results = {
        A: scoreA,
        B: scoreB,
        C: scoreC,
        D: scoreD
    };

    document.getElementById("result").innerText = `A: ${scoreA}, B: ${scoreB}, C: ${scoreC}, D: ${scoreD}`; 

    renderChart(results);
}

function renderChart(results) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
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
