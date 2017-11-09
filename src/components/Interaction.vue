<template>
  <div class="interaction">
    <module-title :title="interactTitle" class="interaction-title"></module-title>
    <ul class="interaction-rank">
      <li>
        <span class="rank">No.1</span>
        <figure>
          <img src="https://img8.kcimg.cn/HW_Image/2017/1106/1106191501.jpg" alt="">
        </figure>
        <span class="user-name">哈哈哈</span>
      </li>
      <li>
        <span class="rank">No.2</span>
        <figure>
          <img src="https://img8.kcimg.cn/HW_Image/2017/1106/1106191501.jpg" alt="">
        </figure>
        <span class="user-name">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</span>
      </li><li>
        <span class="rank">No.3</span>
        <figure>
          <img src="https://img8.kcimg.cn/HW_Image/2017/1106/1106191501.jpg" alt="">
        </figure>
        <span class="user-name">哈哈哈</span>
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
    interactTitle: '互动达人'
  })
}
</script>
<style scoped>
.interaction{
  width: 480px;
  height: 210px;
  margin-top: 39px;
}
.interaction-title{
  padding-left: 120px;
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
