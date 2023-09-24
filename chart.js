<!-- 引入 Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- 創建一個 <canvas> 元素來放置你的圓餅圖 -->
<canvas id="myChart"></canvas>

<script>
// 獲取 <canvas> 元素
var ctx = document.getElementById('myChart').getContext('2d');

// 創建圓餅圖
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
</script>
