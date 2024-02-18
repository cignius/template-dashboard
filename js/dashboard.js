(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('myChart')
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'kpi1',
        'kpi2',
        'kpi3',
        'kpi4',
        'kpi5',
        'kpi6',
        'kpi7'
      ],
      datasets: [{
        data: [
          10,
          18,
          10,
          12,
          10,
          20,
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#b8c0c6',
        borderWidth: 2,
        pointRadius: 0,
        pointBackgroundColor: 'transparent'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            display: false,
            beginAtZero: true
          },
          gridLines: {
            drawOnChartArea: false,
            lineWidth: 3,
            drawTicks: false
            
          }
        }],
        xAxes: [{
          ticks: {
            display: false,
          },
          gridLines: {
            drawOnChartArea: false,
            lineWidth: 3,
            drawTicks:false,
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
