<template>
  <div class="look-artical">
    <module-title :title="articalTitle" class="artical-title"></module-title>
    <div class="article-content">
      <div class="wrapper">
        <ul class="content">
          <li  v-for="(item,index) in lookActives">
            <swipe :options="swipeOptions[index]">
              <swipe-item v-for="ele in item">{{ele.title}}</swipe-item>
            </swipe>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import ModuleTitle from './ModuleTitle'
export default {
  props:['lookActives'],
  created(){
    // console.log(this.lookActives,'lookActives')
    //请求文章接口
    axios.get('https://api.360che.com/AppleTV/article.aspx?page=1').then((res) => {
      if(res.data.result == 1){
      console.log(res.data,'sunData')

      }
    })
  },
  components: {
    ModuleTitle
  },
  data(){
    return {
      swipeOptions: [
        {
          auto: 3900,
          speed: 3000
        },
        {
          auto: 4700,
          speed: 3000
        },
        {
          auto: 3200,
          speed: 3000
        },
        {
          auto: 4800,
          speed: 3000
        },
        {
          auto: 6400,
          speed: 3000
        },
        {
          auto: 4300,
          speed: 3000
        },
        {
          auto: 3500,
          speed: 3000
        }
      ],
      articalTitle: '用户正在浏览的文章'
    }
  }
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
  padding-left: 70px;
}

.article-content{
  padding: 15px 27px 30px 20px;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 42px;
  height: 290px;
  background: url('../assets/NowBrower.png') no-repeat;
  background-size: 476px 330px;
}
.article-content li .swipe-item{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
