<template>
  <div class="map" id="mapsha">
    <chart id="map" :options="map" ref="map" auto-resize></chart>
  </div>
</template>

<script>
import axios from 'axios'
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
      userActives:[]
    }
  },
  name: 'app',
  created(){

  },
  mounted(){
    let dataIndex = -1
    let map = this.$refs.map
    let dataLen;
    let cityData = {};

    //请求文章接口
    axios.get('https://dealer-api.360che.com/AppleTV/GetClueProvinceList.aspx').then((res) => {
      if(res.data.state == 1){
        res.data.province.forEach(ele => {
          let o = {"name":ele.provincename,"value":[ele.tel,ele.truckname]}
          this.userActives.push(o)
        })
        map.options.series[0].data = this.userActives
        dataLen = map.options.series[0].data.length

        console.log(map.options.series[0].data ,'map.options.series[0].data = this.userActivesmap.options.series[0].data = this.userActives')

        // console.log(map,'mapmapmapmapom')

        setInterval(() => {
          map.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex
          })


          dataIndex = (dataIndex + 1) % dataLen

          console.log(dataIndex)

          let number;
          if(cityData[map.options.series[0].data[dataIndex].name] || cityData[map.options.series[0].data[dataIndex].name] == 0){
            number = dataIndex;
            dataIndex = cityData[map.options.series[0].data[dataIndex].name]
          }

          map.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex,
          })

          // map.$options.propsData.options.series[0].data.shift({name: '内蒙古',value: 183 });

          // 显示 tooltip
          map.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex
          })


          if(!cityData[map.options.series[0].data[dataIndex].name] && cityData[map.options.series[0].data[dataIndex].name] != 0){
            cityData[map.options.series[0].data[dataIndex].name] = dataIndex
          }
          if(number){
            dataIndex = number
          }

        }, 1000)
        this.connected = true;
      }
    })
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
