<template>
  <div class="rank-videos">
    <module-title :title="videoTitle" class="rank-videos-title"></module-title>
      <ul class="rank-videos-content">
        <li>
          <em>1</em>
          <span>骑手搭卡车“顺风车”，惨遭碾压断10根肋骨</span>
        </li>
        <li>
          <em>2</em>
          <span>实拍二师兄冒死跳车，300斤肉直接往地上摔</span>
        </li>
        <li>
          <em>3</em>
          <span>司机太拼了，轮胎报废了也要上坡，就是不信</span>
        </li>
        <li>
          <em>4</em>
          <span>交警快来，快来呀！这小子挑衅你们</span>
        </li>
        <li>
          <em>5</em>
          <span>只有敢这么转弯的人才能被称为老司机，我算</span>
        </li>
      </ul>
  </div>
</template>
<script>
import ModuleTitle from './ModuleTitle'
export default {
  components: {
    ModuleTitle
  },
  data: () => ({
    videoTitle: '每小时热门转发视频排行'
  })
}
</script>
<style scoped>
.rank-videos{
  width: 480px;
  height: 304px;
  margin-top: 59px;
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
  background: url('../assets/SmallModuleBg.png') no-repeat;
  background-size: 480px 250px;
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
