import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.barChart();
    this.doughnutChart();
    this.lineChart();
  }
  /** Bar Chart */
  barChart(){
    let myChart = new Chart('myChart', {
        type: 'bar',
        data: {
            labels: ['Oct 1', 'Oct 2', 'Oct 3', 'Oct 4', 'Oct 5', 'Oct 6', 'Oct 7', 'Oct 8', 'Oct 9', 'Oct 10', 'Oct 11', 'Oct 12'],
            datasets: [{
                label: '',
                data: [25, 20, 30, 23, 18, 10,18,25,27,26,20,32],
                backgroundColor: [
                    '#2C7BE5',
                    '#2C7BE5',
                    '#2C7BE5',
                    '#2C7BE5',
                    '#2C7BE5',
                    '#2C7BE5',
                    '#2C7BE5',
                    '#2C7BE5',
                    '#2C7BE5',
                    '#2C7BE5',
                    '#2C7BE5',
                    '#2C7BE5',
                ],
                borderColor: [
                  '#2C7BE5',
                  '#2C7BE5',
                  '#2C7BE5',
                  '#2C7BE5',
                  '#2C7BE5',
                  '#2C7BE5',
                  '#2C7BE5',
                  '#2C7BE5',
                  '#2C7BE5',
                  '#2C7BE5',
                  '#2C7BE5',
                ],
                borderWidth: 1,
            }]
        },
        options: {
          legend: {
            display: false
          },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Percentage',
                    },
                    gridLines:{
                      borderDash: [2, 4],
                    },
                }],
                xAxes:[{
                    barPercentage: 0.1,
                    gridLines : {
                      drawOnChartArea: false
                  }
                }]
            }
        },

    });
  }

  /** Doughnut Chart */
  doughnutChart(){
      let myChart = new Chart('pieChart', {
          type: 'doughnut',
          data: {
            labels: [ 'Direct','Organic','Referral'],
              datasets: [{
                  data: [60, 25, 15],
                  backgroundColor: [
                      '#2C7BE5',
                      '#A6C5F7',
                      '#D2DDEC',
                  ],
                  borderWidth: 1,
              }]
          },
          options: {
            cutoutPercentage:85,
            responsive: true,
            title: {
              display: false,
              position: "top",
              fontStyle: "bold",
              fontSize: 0,
              fullWidth: false,
              padding: 0
            },
            legend: {
              display: true,
              position: "bottom",
              fullWidth: false,
              labels: {
                display: false,
                usePointStyle: true,
                fontSize: 10,
                fontStyle: "bold",
              }
            }
          }
      });
  }

  /** Direct Doughnut Chart */
  directDoughnutChart(){
    let myChart = new Chart('pieChart', {
        type: 'doughnut',
        data: {
          labels: [ 'Direct','Organic','Referral'],
            datasets: [{
                data: [15, 45, 20],
                backgroundColor: [
                    '#2C7BE5',
                    '#A6C5F7',
                    '#D2DDEC',
                ],
                borderWidth: 1,
            }]
        },
        options: {
          cutoutPercentage:85,
          responsive: true,
          title: {
            display: false,
            position: "top",
            fontStyle: "bold",
            fontSize: 0,
            fullWidth: false,
            padding: 0
          },
          legend: {
            display: true,
            position: "bottom",
            fullWidth: false,
            labels: {
              display: false,
              usePointStyle: true,
              fontSize: 10,
              fontStyle: "bold",
            }
          }
        }
    });
}

  /** Line Chart */
  lineChart(){
    var myLineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['Oct 1', 'Oct 3', 'Oct 6', 'Oct 9', 'Oct 12', 'Oct 5', 'Oct 18', 'Oct 21', 'Oct 24', 'Oct 27', 'Oct 30'],
        datasets: [{
          label: 'Series 1',
          data:[0,10,5,15,10,20,18,25,20,30,25],
          fill: false,
          backgroundColor: '#2C7BE5',
          borderColor: '#2C7BE5'
      }]
    },
    options:{
      tooltips: {
        mode: 'index',
        intersect: false,
      },
     hover: {
        mode: 'nearest',
        intersect: true
      },
      responsive: true,
      elements: {
        point:{
            radius: 0
        }
    },
      legend: {
        display: false
      },
      scales:{
        yAxes: [{
          gridLines:{
            borderDash: [2, 4],
          }
      }],
        xAxes:[{
          gridLines : {
            drawOnChartArea: false
        }
      }]
      }
    }
  })
  }

  /** Direct Line Chart */
  directLineChart(){
    var myLineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['Oct 1', 'Oct 3', 'Oct 6', 'Oct 9', 'Oct 12', 'Oct 5', 'Oct 18', 'Oct 21', 'Oct 24', 'Oct 27', 'Oct 30'],
        datasets: [{
          label: 'Series 1',
          data:[7,40,12,27,34,17,19,30,28,32,24],
          fill: false,
          backgroundColor: '#2C7BE5',
          borderColor: '#2C7BE5'
      }]
    },
    options:{
      tooltips: {
        mode: 'index',
        intersect: false,
      },
     hover: {
        mode: 'nearest',
        intersect: true
      },
      responsive: true,
      elements: {
        point:{
            radius: 0
        }
    },
      legend: {
        display: false
      },
      scales:{
        yAxes: [{
          gridLines:{
            borderDash: [2, 4],
          }
      }],
        xAxes:[{
          gridLines : {
            drawOnChartArea: false
        }
      }]
      }
    }
  })
  }

  /** Organic Line Chart */
  organicLineChart(){
    var myLineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['Oct 1', 'Oct 3', 'Oct 6', 'Oct 9', 'Oct 12', 'Oct 5', 'Oct 18', 'Oct 21', 'Oct 24', 'Oct 27', 'Oct 30'],
        datasets: [{
          label: 'Series 1',
          data:[2,12,35,25,36,25,34,16,4,14,15],
          fill: false,
          backgroundColor: '#2C7BE5',
          borderColor: '#2C7BE5'
      }]
    },
    options:{
      tooltips: {
        mode: 'index',
        intersect: false,
      },
     hover: {
        mode: 'nearest',
        intersect: true
      },
      responsive: true,
      elements: {
        point:{
            radius: 0
        }
    },
      legend: {
        display: false
      },
      scales:{
        yAxes: [{
          gridLines:{
            borderDash: [2, 4],
          }
      }],
        xAxes:[{
          gridLines : {
            drawOnChartArea: false
        }
      }]
      }
    }
  })
  }
}
