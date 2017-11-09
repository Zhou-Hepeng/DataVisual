<template>
  <div class="echarts">
    <module-title :title="echartTitle" class="echart-title"></module-title>
    <figure>
      <chart :options="option" ref="pie"></chart>
    </figure>
  </div>
</template>
<script>
import ECharts from 'vue-echarts/components/ECharts.vue'
import ModuleTitle from './ModuleTitle'
import 'echarts/lib/chart/pie'
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/chart/map.js'
// // 分散
// import 'echarts/lib/chart/scatter'
// import 'echarts/lib/chart/effectScatter'
// // 地图
// import 'echarts/lib/component/geo'
// 其他
import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/polar'
// import 'echarts/lib/component/legend'
// import 'echarts/lib/component/title'
// import 'echarts/lib/component/visualMap'

import option from './options'

export default {
  components: {
    chart: ECharts,
    ModuleTitle
  },
  data: () => ({
    echartTitle: '车系大类的比例',
    option
  }),
  mounted() {
    let dataIndex = -1
    let pie = this.$refs.pie
    let dataLen = pie.options.series[0].data.length
    setInterval(() => {
      pie.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex
      })
      dataIndex = (dataIndex + 1) % dataLen
      pie.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex
      })
      // 显示 tooltip
      pie.dispatchAction({
        trigger: 'item',
        type: 'showTip',
        seriesIndex: 0,
        dataIndex
      })
    }, 1000)
  }
}
</script>
<style scoped>
.echarts {
  width: 480px;
  height: 300px;
  margin-top:62px;
  margin-left:57px;
}
.echart-title{
  padding-left: 120px;
}
</style>
