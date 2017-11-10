<template>
  <div class="interaction">
    <div class="artical-title interaction-title">
      <div class="title-wrapper swiper-container swiper-container-vertical swiper-no-swiping" id="userRankTitle">
        <div class="content swiper-wrapper">
          <div class="title-name swiper-slide" v-for="item in userRank">
            {{item.title}}
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper swiper-container swiper-container-vertical swiper-no-swiping" id="userRank">
      <div class="content swiper-wrapper">
        <ul class="interaction-rank swiper-slide" v-for="item in userRank">
          <li v-for="(ele,index) in item.content">
            <span class="rank">No.{{index+1}}</span>
            <figure>
              <img :src="ele.src" alt="">
            </figure>
            <span class="user-name">{{ele.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import ModuleTitle from './ModuleTitle'
export default {
  props:['userRank'],
  components: {
    ModuleTitle
  },
  data: () => ({
    interactTitle: '互动达人',
  }),
  mounted(){
    var swiper = new Swiper('#userRank', {
        spaceBetween: 30,
        loop:true,
        paginationClickable: true,
        spaceBetween: 0,
        autoplay: 3000,
        centeredSlides: true,
        autoplayDisableOnInteraction: false,
    });
    var swiper = new Swiper('#userRankTitle', {
        spaceBetween: 30,
        loop:true,
        paginationClickable: true,
        spaceBetween: 0,
        autoplay: 3000,
        centeredSlides: true,
        autoplayDisableOnInteraction: false,
    });
  },
}
</script>
<style scoped>
.interaction{
  width: 480px;
  height: 210px;
  margin-top: 25px;
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
  height:100%;
  overflow: hidden;
}
.content{
  width:1000%;
  overflow: hidden;
}
.interaction-rank{
  float:left;
}
.interaction-title{
  padding-left: 70px;
}
.interaction-rank li{
  float: left;
  width: 139px;
  height: 156px;
}
.interaction-rank li{
  margin-left: 13px;
}
.interaction-rank li .rank{
  display: inline-block;
  width: 75px;
  height: 38px;
  font-size: 20px;
  color: #FFDF00;
  letter-spacing: 0;
  line-height: 38px;
  text-shadow: 0 0 4px rgba(255,223,0,0.40);
  background: url('../assets/Rank.png') no-repeat;
  background-size: 75px 38px;
}
.interaction-rank li figure{
  width: 138px;
  height: 102px;
  line-height: 102px;
  text-align: center;
  background: url('../assets/AvatarBg.png') no-repeat;
  background-size: 138px 102px;
}
.interaction-rank li figure img{
  width: 80px;
  height: 80px;
  object-fit: cover;
  vertical-align: middle;
}
.interaction-rank li .user-name{
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  color: #00FFE8;
  letter-spacing: 0;
  line-height: 16px;
}
</style>
