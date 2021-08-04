import * as echarts from 'echarts'
export default {
  // 折线图
  initLineChart(id, chartData = {},
    tooltipsColor = {},
    itemStyleColor = {},
    lineStyleColor = {},
    areaStyleColor = {}
  ) {
    if (!document.getElementById(id)) return false;
    this.chart = echarts.init(document.getElementById(id));
    this.chart.clear();
    const {
      dataX = [], dataSeries = []
    } = chartData
    const {
      tooltipBgColor = '#2c7592',
        className = 'echart-line--tooltip_blue'
    } = tooltipsColor
    const {
      itemStyleX = '#35a5c9',
        itemStyleY = '#4683ed'
    } = itemStyleColor
    const {
      lineStyleX = '#35a5c9',
        lineStyleY = '#4683ed',
    } = lineStyleColor
    const {
      areaStyleX = 'rgba(47,210,235, .8)',
        areaStyleY = 'rgba(62,113,243,0)'
    } = areaStyleColor
    const optionDate = {
      tooltip: {
        backgroundColor: tooltipBgColor,
        borderColor: 'transparent',
        className: className,
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          shadowStyle: {
            color: 'transparent'
          }
        },
        textStyle: {
          color: '#fff'
        },
        formatter(val) {
          let str = ''
          val.forEach(item => {
            str += item.axisValue + '　' + item.value + '\n'
          })
          return str
        }
      },
      grid: {
        left: '50',
        right: '50',
        bottom: '15%',
        top: '10%',
        containLabel: false
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dataX,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(207, 202, 202, 0.2)'
          }
        }
      },
      series: [{
        data: dataSeries,
        type: 'line',
        symbol: 'circle',
        symbolSize: '8',
        //圆点样式
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: itemStyleX // 0% 处的颜色
            }, {
              offset: 1,
              color: itemStyleY // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        },
        lineStyle: { // 折线样式
          width: 2,
          type: 'solid',
          dashOffset: 55,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: lineStyleX // 0% 处的颜色
            }, {
              offset: 1,
              color: lineStyleY // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },
          shadowOffsetY: '2.5',
          shadowColor: '#1a1933',
        },
        //区域颜色渐变
        areaStyle: {
          //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: areaStyleX // 0% 处的颜色
            }, {
              offset: 1,
              color: areaStyleY // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        },
      }]
    };
    this.chart.setOption(optionDate);
    let myChart = this.chart;
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  },
  // 曲线图
  initDiagramChart(id, chartData = {},
    tooltipsColor = {},
    itemStyleColor = {},
    lineStyleColor = {},
    areaStyleColor = {}
  ) {
    if (!document.getElementById(id)) return false;
    this.chart = echarts.init(document.getElementById(id));
    this.chart.clear();
    const {
      dataX = [], dataSeries = []
    } = chartData
    const {
      tooltipBgColor = '#2c7592',
        className = 'echart-line--tooltip_blue'
    } = tooltipsColor
    const {
      itemStyleX = '#35a5c9',
        itemStyleY = '#4683ed'
    } = itemStyleColor
    const {
      lineStyleX = '#35a5c9',
        lineStyleY = '#4683ed',
    } = lineStyleColor
    const {
      areaStyleX = 'rgba(47,210,235, .8)',
        areaStyleY = 'rgba(62,113,243,0)'
    } = areaStyleColor
    const optionDate = {
      tooltip: {
        backgroundColor: tooltipBgColor,
        borderColor: 'transparent',
        className: className,
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          shadowStyle: {
            color: 'transparent'
          }
        },
        textStyle: {
          color: '#fff'
        },
        formatter(val) {
          console.log(val);
          let str = ''
          val.forEach(item => {
            str += item.axisValue + '　' + item.value + '\n'
          })
          return str
        }
      },
      grid: {
        left: '50',
        right: '50',
        bottom: '15%',
        top: '10%',
        containLabel: false
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dataX,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(207, 202, 202, 0.2)'
          }
        }
      },
      series: [{
        data: dataSeries,
        type: 'line',
        symbol: 'circle',
        symbolSize: '8',
        smooth: true,
        //圆点样式
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: itemStyleX // 0% 处的颜色
            }, {
              offset: 1,
              color: itemStyleY // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        },
        lineStyle: { // 折线样式
          width: 2,
          type: 'solid',
          dashOffset: 55,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: lineStyleX // 0% 处的颜色
            }, {
              offset: 1,
              color: lineStyleY // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },
          shadowOffsetY: '2.5',
          shadowColor: '#1a1933',
        },
        //区域颜色渐变
        areaStyle: {
          //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: areaStyleX // 0% 处的颜色
            }, {
              offset: 1,
              color: areaStyleY // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        },
      }]
    };
    this.chart.setOption(optionDate);
    let myChart = this.chart;
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
}