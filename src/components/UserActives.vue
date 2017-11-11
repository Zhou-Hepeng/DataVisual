<template>
  <div class="user-actives">
    <module-title :title="userActivesTitle" class="user-actives-title"></module-title>
    <div class="wrapper">
      <div class="content swiper-container swiper-container-vertical swiper-no-swiping" id="swiper">
        <ul class="user-actives-content swiper-wrapper">
          <li class="swiper-slide" v-for="item in userActives">「<span class="users">{{item.p1}}</span>」{{item.p2}}「<span class="posts">{{item.p3}}</span>」</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import ModuleTitle from './ModuleTitle'
export default {
  props:['userActives'],
  components: {
    ModuleTitle
  },
  data: () => ({
    userActivesTitle: '用户行为'
  }),
  created(){

  },
  mounted(){
    //新闻条滚动
    let swiperNew = new Swiper('#swiper', {
        direction : 'vertical',
        autoplay: 1000,
        centeredSlides: true,
        slidesPerView: 5,
        loop:true
    });
  }
}
</script>
<style scoped>
.user-actives{
  width: 476px;
  height: 304px;
  margin-top: 159px;
  border-left: 4px solid #00FFE8;
}
.user-actives-title{
  padding-left: 70px;
}
.wrapper{
  position: relative;
  height: 210px;
  padding: 18px 40px 25px;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 42px;
  text-align: left;
  overflow: hidden;
  background: url('../assets/SmallModuleBg.png') no-repeat;
  background-size: 476px 250px;
}
.content{
  height:200px;
  overflow: hidden;
}
.user-actives-content{
  overflow: hidden;
  transition: all 1s ease-out;
}
.user-actives-content li{
  display: block;
  height: 40px;
  line-height:40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.users{
  font-weight: bold;
  color: #FFDF00;
}
.posts{
  font-weight: bold;
  color: #00FFE8;
}

</style>
