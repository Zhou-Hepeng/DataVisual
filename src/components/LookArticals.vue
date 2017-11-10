<template>
  <div class="look-artical">
    <module-title :title="articalTitle" class="artical-title"></module-title>
    <div class="article-content">
      <div class="wrapper">
        <ul class="content">
          <li v-for="(item,index) in lookActives" :options="swipeOptions[index]">
            <swipe>
              <swipe-item class="swipe-item" v-for="ele in item">{{ele}}</swipe-item>
            </swipe>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import ModuleTitle from './ModuleTitle'
export default {
  props:['lookActives'],
  created(){
    // console.log(this.lookActives,'lookActives')
  },
  components: {
    ModuleTitle
  },
  data(){
    return {
      swipeOptions: [
        {
          auto: 1000
        },
        {
          auto: 2000
        },
        {
          auto: 1500
        },
        {
          auto: 2500
        },
        {
          auto: 5000
        },
        {
          auto: 1000
        },
        {
          auto: 1000
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
  padding-left: 80px;
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
.wrapper{
  height:100%;
  padding-left:20px;
  /*padding-bottom:10px;*/
  /*box-shadow: -11px 9px 40px rgba(0,255,232,.1);*/
  animation: head 3s ease-out 1.2s infinite;
}
  @keyframes head {
    0% {
      box-shadow: 0px -5px 15px rgba(0,255,232,.2);
    }
    20% {
      box-shadow: -5px 0px 30px rgba(0,255,232,.4);
    }
    40% {
      box-shadow: -9px 5px 45px rgba(0,255,232,.6);
    }
    60% {
      box-shadow: -11px 10px 45px rgba(0,255,232,.6);
    }
    80% {
      box-shadow: -9px 5px 30px rgba(0,255,232,.4);
    }
    80% {
      box-shadow: -5px -5px 15px rgba(0,255,232,.2);
    }
  }
.article-content li .swipe-item{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
