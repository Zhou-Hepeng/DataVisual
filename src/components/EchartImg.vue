<template>
  <div class="echarts-wrapper">
    <module-title :title="echartTitle" class="echart-title"></module-title>
      <div class="wrapper swiper-container swiper-container-vertical swiper-no-swiping" id="echartSlider">
        <div class="content swiper-wrapper">
          <div class="swiper-slide" v-for="(ele,index) in Proportion">
            <chart :options="option" :ref="'pie' + index"></chart>
          </div>
        </div>
      </div>
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

console.log(this.options,'this.options')

export default {
  props:['Proportion'],
  components: {
    chart: ECharts,
    ModuleTitle
  },
  data: () => ({
    echartTitle: '车系大类的比例',
    //数组存储的变量
    option,
    //存储四个数组的数据
    options:[],
    names:[],
  }),
  created(){
    // console.log(this.Proportion,'Proportion')
    this.Proportion.forEach((ele,index) => {
      let option = this.option
      this.options.push(option)
      // this.options[index].series[0].data = ele.content
      console.log(ele.content,'ele.content')
      this.names.push(ele.title)
    })
    this.options[0].series[0].data = this.Proportion[0].content

    this.options[1].series[0].data = this.Proportion[1].content

    this.options[2].series[0].data = this.Proportion[2].content
    // console.log(this.options,'this.options')
    // console.log(this.names)
  },
  mounted() {
    let dataIndex = -1
    let refs = this.$refs

    for(let key in refs){
      let pie = refs[key][0]
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
      }, 5000)
    }


    //循环圆形饼图
    var swiper = new Swiper('#echartSlider', {
        spaceBetween: 30,
        paginationClickable: true,
        spaceBetween: 0,
        autoplay: 25000,
        centeredSlides: true,
        autoplayDisableOnInteraction: false,
    });
  }
}
</script>
<style scoped>
.echarts-wrapper {
  width: 480px;
  height: 500px;
  margin-top:62px;
  margin-left:57px;
}
.echart-title{
  padding-left: 120px;
}
.wrapper{
  height:500px;
  overflow: hidden;
}
.content{
  width:1000%;
  height:100%;
  overflow: hidden;
}
.swiper-slide{
  width:800px;
  height:500px;
  float:left;
}
.echarts{
  width:600px;
  height:400px;
}
</style>
