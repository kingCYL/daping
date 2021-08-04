import * as echarts from 'echarts'

export default {
  initDashboardChart(id, dataX = {}, chartColor = ['#3d6ff2', '#2fd1eb']) {
    if (!document.getElementById(id)) return false;
    this.chart = echarts.init(document.getElementById(id));
    this.chart.clear();
    const {
      value = 0, name
    } = dataX
    const optionData = {
      series: [{
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: chartColor[0] // 0% 处的颜色
              }, {
                offset: 1,
                color: chartColor[1] // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          }
        },
        axisLine: {
          show: false,
          lineStyle: {
            width: 6
          }
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: [{
          value: value,
          name: name,
          title: {
            offsetCenter: ['0%', '-30%']
          },
          detail: {
            offsetCenter: ['0%', '10']
          }
        }],
        title: {
          fontSize: 14,
          color: '#948f8f'
        },
        detail: {
          width: 50,
          height: 14,
          fontSize: 20,
          color: '#fff',
          formatter: '{value}%'
        }
      }]
    }

    this.chart.setOption(optionData);
    let myChart = this.chart;
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
}