require('echarts-wordcloud')
import * as echarts from 'echarts'
export default {
  // 词云
  initWordcloudChart(id, chartData) {
    if (!document.getElementById(id)) return false;
    this.chart = echarts.init(document.getElementById(id));
    this.chart.clear();
    const {
      dataX = [{
            name: " 导航",
            value: 50,
          },
          {
            name: " 打开空调",
            value: 14
          },
          {
            name: " 打开空调",
            value: 4
          },
          {
            name: " 打开空调",
            value: 24,
          },
          {
            name: " 打开空调",
            value: 20
          },
        ],
        // dataSeries = []
    } = chartData
    const optionData = {
      tooltip: {
        show: true
      },
      series: [{
        type: 'wordCloud',
        gridSize: 40, //修改文字（画布）之间的间距
        sizeRange: [12, 50], //字体大小的范围
        shape: 'pentagon',
        rotationRange: [0, 0], //翻转范围
        left: "center",
        top: "center",
        right: null,
        bottom: null,
        width: 500,
        height: 300,
        textStyle: {
          // normal: {
          //   color: function () {
          //     return 'rgb(' + [
          //       Math.round(Math.random() * 160),
          //       Math.round(Math.random() * 160),
          //       Math.round(Math.random() * 160)
          //     ].join(',') + ')';
          //   }
          // },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: dataX
      }]
    };
    this.chart.setOption(optionData);
    let myChart = this.chart;
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
}