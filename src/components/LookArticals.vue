<template>
  <div class="look-artical">
    <module-title :title="articalTitle" class="artical-title"></module-title>
    <ul class="article-content">
      <li>
        <swipe :options="swipeOptions.speedOption1">
          <swipe-item class="swipe-item">图森推自动驾驶卡车工信部部长现场试乘1图森推自动驾驶卡车工信部部长现场试乘1图森推自动驾驶卡车工信部部长现场试乘1图森推自动驾驶卡车工信部部长现场试乘1</swipe-item>
          <swipe-item>图森推自动驾驶卡车工信部部长现场试乘2</swipe-item>
          <swipe-item>图森推自动驾驶卡车工信部部长现场试乘3</swipe-item>
        </swipe>
      </li>
      <li>
        <swipe :options="swipeOptions.speedOption2">
          <swipe-item>图森推自动驾驶卡车工信部部长现场试乘1</swipe-item>
          <swipe-item>图森推自动驾驶卡车工信部部长现场试乘2</swipe-item>
        </swipe>
      </li>
      <li>
        <swipe :options="swipeOptions.speedOption3">
          <swipe-item>图森推自动驾驶卡车工信部部长现场试乘1</swipe-item>
          <swipe-item>图森推自动驾驶卡车工信部部长现场试乘2</swipe-item>
        </swipe>
      </li>
      <li>
        <swipe :options="swipeOptions.speedOption4">
          <swipe-item>图森推自动驾驶卡车工信部部长现场试乘1</swipe-item>
          <swipe-item>图森推自动驾驶卡车工信部部长现场试乘2</swipe-item>
        </swipe>
      </li>
      <li>
        <swipe :options="swipeOptions.speedOption5">
          <swipe-item>图森推自动驾驶卡车工信部部长现场试乘1</swipe-item>
          <swipe-item>图森推自动驾驶卡车工信部部长现场试乘2</swipe-item>
        </swipe>
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
    swipeOptions: {
      speedOption1: {
        auto: 1000
      },
      speedOption2: {
        auto: 2000
      },
      speedOption3: {
        auto: 1500
      },
      speedOption4: {
        auto: 2500
      },
      speedOption5: {
        auto: 5000
      },
      speedOption6: {
        auto: 1000
      },
      speedOption7: {
        auto: 1000
      }
    },
    articalTitle: '用户正在浏览的文章'
  })
}
</script>
<style scoped>
.look-artical{
  width: 476px;
  height: 360px;
  margin-top:145px;
  margin-left:57px;
  border-left: 4px solid #00FFE8;
}
.artical-title{
  padding-left: 80px;
}
.article-content{
  padding: 15px 40px;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 42px;
  height: 300px;
  background: url('../assets/NowBrower.png') no-repeat;
  background-size: 476px 330px;
}
.article-content li .swipe-item{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
