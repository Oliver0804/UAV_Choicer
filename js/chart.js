
// 創建圓餅圖函數
function createPieChart(scores) {
    var ctx = document.getElementById('myChart').getContext('2d');

    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['A類', 'B類', 'C類', 'D類'],
            datasets: [{
                data: [scores.A, scores.B, scores.C, scores.D],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#AA65F4']
            }]
        }
    });
}
