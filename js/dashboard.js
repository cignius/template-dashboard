/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
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
        borderColor: '#007bff',
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
