<template>
  <div class="map">
    <chart id="map" :options="map" ref="map" auto-resize></chart>
  </div>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/map.js'
//分散
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
//地图
import 'echarts/lib/component/geo'
//其他
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'

//引入中国地图
// Map of China
import chinaMap from '../data/china.json'
// registering map data
ECharts.registerMap('china', chinaMap)

//引入名称数据
import map from '../data/map.js'

export default {
  components: {
    chart: ECharts
  },
  data () {
    return {
      map,
      connected: false,
    }
  },
  name: 'app',
  created(){
    // console.log(ECharts)
    // ECharts.methods.mergeOptions({
    //   color: ['#fff'],
    // })
  },
  mounted(){
    let dataIndex = -1
    let map = this.$refs.map
    let dataLen = map.options.series[0].data.length

    setInterval(() => {
      map.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex,
        symbolSize: 40,
      })
      dataIndex = (dataIndex + 1) % dataLen
      map.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex,
        symbolSize: 40,
        data:{
          value:99
        }
      })
      // 显示 tooltip
      map.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex,
        symbolSize: 40,
      })
      //显示默认地区
      // var selected = param.selected;
      // var str = '当前选择： ';
      // for (var p in selected) {
      //     if (selected[p]) {
      //         str += p + ' ';
      //     }
      // }
    }, 5000)
    this.connected = true
  },
  watch: {
    connected: {
      handler (value) {
        ECharts[value ? 'connect' : 'disconnect']('radiance')
      }
    }
  },
}
</script>

<style scoped>
.map{
  width:844px;
  height:456px;
  margin-top: 30px;
  background-color:rgba(0,0,0,0);
}
.echarts{
  width:800px;
  height:600px;
  /*margin:0 auto;*/
}
.echarts canvas{
  width:800px;
  height:600px;
}
.echarts > div{
  display: block;
  background-color:red;
}
</style>
