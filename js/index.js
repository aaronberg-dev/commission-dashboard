let ctx = $('#myChart')
Chart.defaults.global.defaultFontColor = 'white'
let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['P144 C4', 'P144 C3', 'P144 C2', 'P144 C1', 'P143 C4', 'P143 C3'],
    datasets: [
      {
        label: 'Commission',
        data: [10400, 8733, 12300, 4588, 9730, 7833],
        backgroundColor: [
          'rgba(0, 86, 63, 0.4',
          'rgba(0, 86, 63, 0.4',
          'rgba(0, 86, 63, 0.4',
          'rgba(0, 86, 63, 0.4',
          'rgba(0, 86, 63, 0.4',
          'rgba(5, 206, 124, 1'
        ],
        borderColor: [
          'rgba(0, 86, 63, 1',
          'rgba(0, 86, 63, 1',
          'rgba(0, 86, 63, 1',
          'rgba(0, 86, 63, 1',
          'rgba(0, 86, 63, 1',
          'rgba(5, 206, 124, 1'
        ],
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(5, 206, 124, 0.4',
        hoverBorderColor: 'rgba(5, 206, 124, 1'
      }
    ]
  },
  options: {
    tooltips: {
      callback: {
        label: function(value, index, values) {
          if (parseInt(value) >= 1000) {
            return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          } else {
            return '$' + value
          }
        }
      }
    },
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          gridLines: {
            color: '#525252'
          },
          ticks: {
            beginAtZero: true,
            callback: function(value, index, values) {
              if (parseInt(value) >= 1000) {
                return (
                  '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                )
              } else {
                return '$' + value
              }
            }
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ]
    }
  }
})

function showGraph(id) {
  if (id === 'teamCommissions') {
    let teamComm = $('#teamCommChart')
    let teamCommChart = new Chart(teamComm, {
      type: 'line',
      data: {
        labels: [
          'P145 C2',
          'P145 C1',
          'P144 C4',
          'P144 C3',
          'P144 C2',
          'P144 C1',
          'P143 C4',
          'P143 C3'
        ],
        datasets: [
          {
            label: 'Commission',
            data: [350, 600, 1200, 400, 650, 600, 800, 1500],
            borderColor: 'rgba(44,143, 222, 0.8',
            borderWidth: 3,
            hoverBackgroundColor: 'rgba(44,143, 222, 0.8',
            backgroundColor: 'rgba(44,143, 222, 0.2'
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              gridLines: {
                color: '#525252'
              },
              ticks: {
                beginAtZero: true,
                callback: function(value, index, values) {
                  if (parseInt(value) >= 1000) {
                    return (
                      '$' +
                      value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    )
                  } else {
                    return '$' + value
                  }
                }
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    })
  } else if (id === 'inits') {
    let initComm = $('#initPolarChart')
    let initCommChart = new Chart(initComm, {
      type: 'polarArea',
      data: {
        labels: [
          'Lifestyle Bonus',
          'Retail Sales',
          'Premier 20/Elite 40',
          'Other'
        ],
        datasets: [
          {
            label: 'Commission',
            data: [10400, 8733, 12300, 4588],
            backgroundColor: [
              'rgba(135,50, 153, 0.4',
              'rgba(164, 213, 83, 0.4',
              'rgba(44, 143, 222, 0.4',
              'rgba(205,53, 175, 0.4'
            ],
            borderColor: [
              'rgba(135,50, 153, 0.8',
              'rgba(164, 213, 83, 0.8',
              'rgba(44, 143, 222, 0.8',
              'rgba(205,53, 175, 0.8'
            ],
            borderWidth: 1,
            hoverBackgroundColor: [
              'rgba(135,50, 153, 0.7',
              'rgba(164, 213, 83, 0.7',
              'rgba(44, 143, 222, 0.7',
              'rgba(205,53, 175, 0.7'
            ],
            hoverBorderColor: [
              'rgba(135,50, 153, 1',
              'rgba(164, 213, 83, 1',
              'rgba(44, 143, 222, 1',
              'rgba(205,53, 175, 1'
            ]
          }
        ]
      },
      options: {
        scale: {
          gridLines: {
            color: '#525252'
          },
          ticks: {
            fontColor: '#fff',
            backdropColor: 'rgba(0,0,0,0)',
            callback: function(value, index, values) {
              if (parseInt(value) >= 1000) {
                return (
                  '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                )
              } else {
                return '$' + value
              }
            }
          }
        },
        maintainAspectRatio: false
      }
    })
    let initComm2 = $('#initBarChart')
    let initCommChart2 = new Chart(initComm2, {
      type: 'bar',
      data: {
        labels: ['P144 C4', 'P144 C3', 'P144 C2', 'P144 C1'],
        datasets: [
          {
            label: 'Lifestyle Bonus',
            data: [10400, 10200, 8500, 4500],
            backgroundColor: 'rgba(135,50, 153, 0.4',
            borderColor: 'rgba(135,50, 153, 0.8',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(135,50, 153, 0.7',
            hoverBorderColor: 'rgba(135,50, 153, 1'
          },
          {
            label: 'Retail Sales',
            data: [8700, 5500, 6200, 3455],
            backgroundColor: 'rgba(164, 213, 83, 0.4',
            borderColor: 'rgba(164, 213, 83, 0.8',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(164, 213, 83, 0.7',
            hoverBorderColor: 'rgba(164, 213, 83, 1'
          },
          {
            label: 'Premier 20/Elite 40',
            data: [1200, 11052, 9722, 15000],
            backgroundColor: 'rgba(44, 143, 222, 0.4',
            borderColor: 'rgba(44, 143, 222, 0.8',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(44, 143, 222, 0.7',
            hoverBorderColor: 'rgba(44, 143, 222, 1'
          },
          {
            label: 'Other',
            data: [4588, 300, 1343, 600],
            backgroundColor: 'rgba(205,53, 175, 0.4',
            borderColor: 'rgba(205,53, 175, 0.8',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(205,53, 175, 0.7',
            hoverBorderColor: 'rgba(205,53, 175, 1'
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              stacked: true,
              gridLines: {
                color: '#525252'
              },
              ticks: {
                beginAtZero: true,
                callback: function(value, index, values) {
                  if (parseInt(value) >= 1000) {
                    return (
                      '$' +
                      value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    )
                  } else {
                    return '$' + value
                  }
                }
              }
            }
          ],
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    })
  } else {
    let fscComm = $('#fscCommChart')
    let fscCommChart = new Chart(fscComm, {
      type: 'line',
      data: {
        labels: [
          'P145 C2',
          'P145 C1',
          'P144 C4',
          'P144 C3',
          'P144 C2',
          'P144 C1',
          'P143 C4',
          'P143 C3'
        ],
        datasets: [
          {
            label: 'Commission',
            data: [55, 95, 640, 600, 1170, 850, 1775, 1250],
            borderColor: 'rgba(205,53,175, 0.8',
            borderWidth: 3,
            hoverBackgroundColor: 'rgba(205,53,175, 0.8',
            backgroundColor: 'rgba(205,53,175, 0.2'
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              gridLines: {
                color: '#525252'
              },
              ticks: {
                beginAtZero: true,
                callback: function(value, index, values) {
                  if (parseInt(value) >= 1000) {
                    return (
                      '$' +
                      value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    )
                  } else {
                    return '$' + value
                  }
                }
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    })
  }
}
