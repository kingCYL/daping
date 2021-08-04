<template>
  <div class="home">
    <!-- 折线图 -->
      <div class="home-flex">
        <div class="home-flex-left">
          <sr-block titleName="累计用户量" class="home-line">
            <slot>
              <div id="initLineChartTotal" style="height: 100%;"></div>
            </slot>
          </sr-block>
          <sr-block titleName="新增用户数" class="home-line">
            <slot>
              <div id="initLineChartUser" style="height: 100%;"></div>
            </slot>
          </sr-block>
          <sr-block titleName="用户城市分布" class="home-line">
            <slot>
              <div id="initHistogramChart" style="height: 100%;"></div>
            </slot>
          </sr-block>
        </div>
        <sr-block width="100%" height="100%" class="home-flex-mid">
          <div class="home-flex-mid__banner">
              我是中国地图组件
          </div>
          <div class="home-flex-mid__item">
              <div class="left">
                <div class="left-box">
                  <i class="sr-icon-star"></i>
                  <div>
                    <p>用户量最多</p>
                    <p>${广东}</p>
                  </div>
                </div>
                 <div class="left-box">
                  <i class="sr-icon-people"></i>
                  <div>
                    <p>用户量增长最快</p>
                    <p>${北京}</p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div id="initDashboardChart1" style="height: 100%;"></div>
                <div id="initDashboardChart2" style="height: 100%;"></div>
                <div id="initDashboardChart3" style="height: 100%;"></div>
                <div id="initDashboardChart4" style="height: 100%;"></div>
              </div>
          </div>
        </sr-block>
        <div class="home-flex-right">
          <sr-block class="home-line" height="400px">
            <slot>
              <div>今日语音请求量</div>
              <div id="initWordcloudChart" style="height: 100%;"></div>
            </slot>
          </sr-block>
          <sr-block titleName="昨日开车时长分布" class="home-line" height="220px">
            <slot>
               我是仪表图
            </slot>
          </sr-block>
          <sr-block titleName="出行时间段分布" class="home-line" height="220px">
            <slot>
              <div id="initDiagramChart" style="height: 100%;"></div>
            </slot>
          </sr-block>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      chartData: {
        dataX: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
        dataSeries: [820, 932, 901, 934, 1290, 1330, 1320]
      },
      barData: {
        dataX: ['一线城市', '新一线城市', '二线城市', '三线城市', '四线城市', '其他'],
        dataSeries: [820, 3032, 901, 934, 1290, 1330]
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.initLineChart()
      this.initDiagramChart()
      this.initHistogramChart()
      this.initWordcloudChart()
      this.initDashboardChart()
    },
    // 折线图
    initLineChart() {
       this.$chart.initLineChart('initLineChartTotal', this.chartData)
       this.$chart.initLineChart('initLineChartUser', this.chartData,
         {tooltipBgColor: '#a10ab8', className: 'echart-line--tooltip_pink'},
          {itemStyleX: '#8514f8', itemStyleY: '#ce04db'},
          {lineStyleX: '#8714f8', lineStyleY: '#ce04db'},
          {areaStyleX: 'rgba(116, 14, 135, .8)', areaStyleY: 'rgba(62,113,243,0)'}
          )
    },
    // 曲线图
    initDiagramChart() {
      this.$chart.initDiagramChart('initDiagramChart', this.chartData)
    },
    // 柱状图
    initHistogramChart() {
      this.$chart.initHistogramChart('initHistogramChart', this.barData)
    },
    // 词云
    initWordcloudChart() {
      this.$chart.initWordcloudChart('initWordcloudChart', this.barData)
    },
    // 仪表盘
    initDashboardChart() {
      this.$chart.initDashboardChart('initDashboardChart1', {value: 98, name: '节目1'})
      this.$chart.initDashboardChart('initDashboardChart2', {value: 40, name: '节目2'}, ['#9300f6', '#be00e6'])
      this.$chart.initDashboardChart('initDashboardChart3', {value: 60, name: '节目3'})
      this.$chart.initDashboardChart('initDashboardChart4', {value: 80, name: '节目4'}, ['#9300f6', '#be00e6'])
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    padding: 20px 0;
    background-color: #060a18;
    height: 100%;
    &-flex {
      display: flex;
      &-mid {
        flex: 2;
        box-sizing: border-box;
        &__banner {
          height: 720px;
        }
        &__item {
            display: flex;
          .left {
            width: 250px;
            padding-left: 30px;
            box-sizing: border-box;
            .left-box {
              display: flex;
              margin-bottom: 20px;
              i {
                margin-right: 10px;
              }
              p {
                font-size: 16px;
                color: #948f8f;
                text-align: left;
                &:last-child {
                  color: #fff;
                  font-size: 24px;
                }
              }
            }
          }
          .right {
            flex: 1;
            display: flex;
            div {
              flex: 1;
            }
          }
        }
      }
      &-left{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        margin: 0 15px;
      }
      &-right{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        margin: 0 15px;
      }
    }
    .sr-icon-star {
      background: url('../assets/img/sr-icon-star.png') no-repeat;
      background-size: 100% 100%;
    }
    .sr-icon-people {
      background: url('../assets/img/sr-icon-people.png') no-repeat;
      background-size: 100% 100%;
    }
    .echart-line--tooltip_blue /deep/ {
      background-image: linear-gradient(0deg, rgba(62,112,241,0.50) 20%, #35b1cf 100%);
    }
    .echart-line--tooltip_pink /deep/ {
      background-image: linear-gradient(0deg, rgba(84, 17, 127,0.50) 20%, #a30ab8 100%);
    }
  }

</style>
