<template>
  <div class="echarts-wrapper">
    <div class="artical-title interaction-title">
      <div class="title-wrapper swiper-container swiper-container-vertical swiper-no-swiping" id="echartImgTitle">
        <div class="content swiper-wrapper">
          <div class="title-name swiper-slide" v-for="item in Proportion">
            {{item.title}}
          </div>
        </div>
      </div>
    </div>
      <div class="wrapper swiper-container swiper-container-vertical swiper-no-swiping" id="echartSlider">
        <div class="content swiper-wrapper">
          <div class="swiper-slide">
            <chart :options="option" ref="pie"></chart>
          </div>
          <div class="swiper-slide">
            <chart :options="option1" ref="pie1"></chart>
          </div>
          <div class="swiper-slide">
            <chart :options="option2" ref="pie2"></chart>
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
import option1 from './options1'
import option2 from './options2'

export default {
  props:['Proportion'],
  components: {
    chart: ECharts,
    ModuleTitle
  },
  data: () => ({
    echartTitle: '',
    //数组存储的变量
    option,
    option1,
    option2,
    //存储四个数组的数据
    options:[],
    names:[],
    nihao:false
  }),
  created(){
  },
  methods:{
    show(pie){

       let dataIndex = -1
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
  },
  mounted() {
    let refs = this.$refs

      let pie = this.$refs.pie
      let pie1 = this.$refs.pie1
      let pie2 = this.$refs.pie2
      this.show(pie)
       this.show(pie1)
        this.show(pie2)

    //右下角文章标题滚动
    var swiper = new Swiper('#echartImgTitle', {
        loop:true,
        spaceBetween: 30,
        paginationClickable: true,
        spaceBetween: 0,
        autoplay: 25000,
        centeredSlides: true,
        autoplayDisableOnInteraction: false,
    });

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
.interaction-title{
  padding-left: 70px;
}
.artical-title{
  font-size: 20px;
  color: #00FFE8;
  letter-spacing: 0;
  line-height: 44px;
  text-shadow: 0 0 4px rgba(0,255,232,0.60);
  height: 54px;
  text-align: left;
  background: url('../assets/ModuleBg.png') no-repeat;
  background-size: 480px 54px;
}
.title-wrapper{
  width:100%;
  overflow: hidden;
}
.title-name{
  float:left;
  width:25%;
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
