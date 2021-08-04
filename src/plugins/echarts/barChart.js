import * as echarts from 'echarts'
export default {
  // 柱状图
  initHistogramChart(id, chartData) {
    if (!document.getElementById(id)) return false;
    this.chart = echarts.init(document.getElementById(id));
    this.chart.clear();
    const {
      dataX = [], dataSeries = []
    } = chartData
    const optionData = {
      // tooltip: {
      //   backgroundColor: '#2c7592',
      //   borderColor: '#2a5396',
      //   className: 'echart-line--tooltip_blue',
      //   trigger: 'axis',
      //   axisPointer: {
      //     type: 'cross'
      //   },
      //   textStyle: {
      //     color: '#fff'
      //   },
      //   formatter(val) {
      //     console.log(val);
      //     let str = ''
      //     val.forEach(item => {
      //       str += item.axisValue + ' ' + item.value + '\n'
      //     })
      //     return str
      //   }
      // },
      grid: {
        left: '50',
        right: '50',
        bottom: '15%',
        top: '15%',
        containLabel: false
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: dataX,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      yAxis: [{
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(207, 202, 202, 0.2)'
          }
        }
      }],
      series: [{ // For shadow
          type: 'bar',
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                  offset: 0,
                  color: 'rgba(31, 174, 198, .9)'
                },
                {
                  offset: 1,
                  color: 'rgba(72, 114, 238, 1)'
                }
              ],
              global: false // 缺省为 false
            },
          },
          barGap: '-100%',
          barCategoryGap: '40%',
          data: dataSeries,
          barMaxWidth: 124,
          label: {
            show: true,
            position: "top",
            color: '#fff'
          },
        },
        {
          type: 'bar',
          barMaxWidth: 124
        }
      ]
    };
    this.chart.setOption(optionData);
    let myChart = this.chart;
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
}