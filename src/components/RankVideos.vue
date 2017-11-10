<template>
  <div class="rank-videos">
    <module-title :title="videoTitle" class="rank-videos-title"></module-title>
    <div class="rank-videos-content">
      <div class="wrapper swiper-container swiper-container-vertical swiper-no-swiping" id="swiperContent">
        <div class="content swiper-wrapper">
          <ul class="swiper-slide" v-for="item in rankVideos.content">
            <li v-for="(ele,index) in item">
              <em>{{index+1}}</em>
              <span>{{ele}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ModuleTitle from './ModuleTitle'
export default {
  props:["rankVideos"],
  components: {
    ModuleTitle
  },
  data: () => ({
    videoTitle: '每小时热门转发视频排行'
  }),
  mounted(){
    var swiper = new Swiper('#swiperContent', {
        spaceBetween: 30,
        loop:true,
        paginationClickable: true,
        spaceBetween: 0,
        autoplay: 3000,
        centeredSlides: true,
        autoplayDisableOnInteraction: false,
    });
  }
}
</script>
<style scoped>
.rank-videos{
  width: 480px;
  height: 304px;
  margin-top: 30px;
}
.rank-videos-title{
  padding-left: 70px;
}
.rank-videos-content{
  height: 210px;
  padding: 15px 40px 25px;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 42px;
  text-align: left;
  clear: both;
  overflow:hidden;
  background: url('../assets/SmallModuleBg.png') no-repeat;
  background-size: 480px 250px;
}
.wrapper{
  height:100%;
  overflow: hidden;
}
.content{
  width:1000%;
  overflow: hidden;
}
.content ul{
  width:100%;
}
.rank-videos-content ul{
  float:left
}
.rank-videos-content li{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.rank-videos-content em{
  display: inline-block;
  width: 38px;
  height: 31px;
  font-size: 16px;
  color: #FFDF00;
  letter-spacing: 0;
  text-align: center;
  line-height: 31px;
  background: url('../assets/SmallRank.png') no-repeat;
  background-size: 38px 31px;
}
</style>
