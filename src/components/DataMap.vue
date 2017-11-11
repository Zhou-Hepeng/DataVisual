<template>
  <div class="map">
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
// 引入名称数据
import map from './map.js'
// 引入中国地图
import chinaMap from '../data/china.json'

import geoCoordMap from './city.js'

import dataTemp from './data.js'
ECharts.registerMap('china', chinaMap)

export default {
  components: {
    chart: ECharts
  },
  data() {
    return {
      map
    }
  },
  created() {
    this.getProvince()
  },
  mounted() {},
  methods: {
    convertData(data) {
      let res = []
      for (let i = 0; i < data.length; i++) {
        let geoCoord = geoCoordMap[data[i].name]
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          })
        }
      }
      return res
    },
    getProvince() {
      //请求文章接口
      axios.get('https://dealer-api.360che.com/AppleTV/GetClueProvinceList.aspx').then((res) => {
        let _Data = res.data.province
        dataTemp.forEach((item, index) => {
          if(_Data[index]){
            dataTemp[index].value = [_Data[index].tel, _Data[index].truckname]
          }
        })
        let data = this.convertData(dataTemp)
        let o = {
          series: [
            {
              data: data
            }
          ]
        }
        this.$refs.map.mergeOptions(o)
        this.loop(data)

        console.log(data)
      })
    },
    loop(data) {
      let dataIndex = -1
      let myMap = this.$refs.map
      let dataLen = data.length
      setInterval(() => {
        myMap.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex
        })
        dataIndex = (dataIndex + 1) % dataLen
        myMap.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex
        })
        // 显示 tooltip
        myMap.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex
        })
      }, 5000)
    }
  }
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
