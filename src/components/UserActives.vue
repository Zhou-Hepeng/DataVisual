<template>
  <div class="user-actives">
    <module-title :title="userActivesTitle" class="user-actives-title"></module-title>
    <ul class="user-actives-content">
      <li>「<span class="users">蛤蟆哥</span>」发表了个帖子「<span class="posts">戴眼镜是种怎样的体验？</span>」</li>
      <li>「<span class="users">哈哈哈哈</span>」关注了「<span class="users">蛤蟆哥</span>」</li>
      <li>「<span class="users">蛤蟆哥</span>」发表了个帖子「<span class="posts">戴眼镜是种怎样的体验？</span>」</li>
      <li>「<span class="users">哈哈哈哈</span>」关注了「<span class="users">蛤蟆哥</span>」</li>
      <li>「<span class="users">哈哈哈哈</span>」点赞了「<span class="users">蛤蟆哥</span>」</li>
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
    userActivesTitle: '用户行为'
  })
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
  padding-left: 120px;
}
.user-actives-content{
  height: 210px;
  padding: 15px 40px 25px;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 42px;
  text-align: left;
  background: url('../assets/SmallModuleBg.png') no-repeat;
  background-size: 476px 250px;
}
.user-actives-content li{
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
