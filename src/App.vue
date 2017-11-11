<template>
  <div id="app">
    <div class="left-wrapper">
      <LookArticals v-if="lookActives.length" :lookActives="lookActives"></LookArticals>
      <EchartImg :Proportion="Proportion"></EchartImg>
    </div>
    <div class="center-wrapper">
      <TitleName></TitleName>
      <DataMap></DataMap>
    </div>
    <div class="right-wrapper">
      <UserActives v-if="userActives.length" :userActives="userActives"></UserActives>
      <Interaction :userRank="userRank"></Interaction>
      <RankVideos v-if="rankVideos.name.length == 4" :rankVideos="rankVideos"></RankVideos>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DataMap from './components/DataMap'
//左侧内容
import LookArticals from './components/LookArticals'
import EchartImg from './components/EchartImg'
//中间内容
import TitleName from './components/TitleName'
//右侧内容
import UserActives from './components/UserActives'
import Interaction from './components/Interaction'
import RankVideos from './components/RankVideos'
import data from './data/data.js'

export default {
  name: 'app',
  components: {
    DataMap,
    //左侧
    LookArticals,
    EchartImg,
    //中间
    TitleName,
    //右侧
    UserActives,
    Interaction,
    RankVideos,

  },
  data(){
    return {
        lookActives:[],
        Proportion:[],
        userActives:[],
        userRank:[],
        rankVideos:{
          "name":[],
          "content":[]
        },
        articalsNumber:1,

    }
  },
  methods:{
      getData(){
        //请求用户行为
        axios.get('https://2b.360che.com/appletv/feed.php').then((res) => {
          if(res.data.status == 1){
            this.userActives = res.data.data
          }
        })
        this.userRank = data.userRank

        //右下角接口
        //每小时转发视频排行
        this.rankVideos = {
          "name":[],
          "content":[]
        }
        axios.get('https://api.360che.com/AppleTV/list.aspx?top=5&hour=1&type=news').then((res) => {
          if(res.data.status == 1){
            this.rankVideos.name.push('每小时转发文章排行榜')
            this.rankVideos.content.push(res.data.data)
            //每小时转发视频排行
            axios.get('https://api.360che.com/AppleTV/list.aspx?top=5&hour=1&type=video').then((res) => {
              if(res.data.status == 1){
                this.rankVideos.name.push('每小时转发视频排行榜')
                this.rankVideos.content.push(res.data.data)
                //每天转发视频排行
                axios.get('https://api.360che.com/AppleTV/list.aspx?top=5&hour=24&type=news').then((res) => {
                  if(res.data.status == 1){
                    this.rankVideos.name.push('每天转发文章排行榜')
                    this.rankVideos.content.push(res.data.data)
                    //每小时转发视频排行
                    axios.get('https://api.360che.com/AppleTV/list.aspx?top=5&hour=24&type=video').then((res) => {
                      if(res.data.status == 1){
                        this.rankVideos.name.push('每天转发视频排行榜')
                        this.rankVideos.content.push(res.data.data)
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }
  },
  created(){
    // this.lookActives = data.lookActives
    //请求用户正在浏览的文章
    for(let i = 1; i < 8  ; i++){
      axios.get('https://api.360che.com/AppleTV/article.aspx?page=' + i).then((res) => {
        if(res.data.status == 1){
          this.lookActives.push(res.data.data)
          console.log(this.lookActives,'his.rankVideoshis.rankVideoshis.rankVideoshis.rankVideos')
        }
      })
    }

    setInterval(() => {
      //请求用户正在浏览的文章
      //请求用户正在浏览的文章
      his.lookActives = [];
      for(let i = 8; i < 15 ; i++){
        axios.get('https://api.360che.com/AppleTV/article.aspx?page=' + i).then((res) => {
          if(res.data.status == 1){
            this.lookActives.push(res.data.data)
            console.log(this.lookActives,'his.rankVideoshis.rankVideoshis.rankVideoshis.rankVideos')
          }
        })
      }

      //请求用户行为和每小时每天的数据排行榜
      this.getData();
    },60000)


    this.Proportion = data.proportion

    //请求用户行为和每小时每天的数据排行榜
    this.getData();

    // console.log(data)
    // axios.get('https://dealer-api.360che.com/AppleTV/GetClueProvinceList.aspx').then((res) => {
    //   console.log(res.data)
    //     // this.geoCoordMap = res.data
    //     // this.$nextTick(() => {
    //     //   this._getMyChart()
    //     // })
    // })
  }
}
</script>

<style>
  @font-face {
      font-family: 'black';
      src: url('//s.kcimg.cn/wap/font/tvshow/introcond.woff') format('woff'),
      url('//s.kcimg.cn/wap/font/tvshow/introcond.ttf') format('truetype');
  }
  /*大布局*/
  .left-wrapper{float:left;width:538px;height:100%;}
  .center-wrapper{float:left;width:844px;height:100%;}
  .right-wrapper{float:left;width:538px;height:100%;}
  /* Reset */
  html, body, h1, h2, h3, h4, h5, p, figure, figcaption, ul, ol, li,dl,dt,dd,form{margin:0;padding:0; font-size: 16px; font-weight: 400;-webkit-text-size-adjust: none;}
  body,select,textarea,input{ font:16px/1.5 "Microsoft YaHei",Arial; }
  html,body{
    width:100%;
    height:100%;
  }
  body{overflow:auto;background: #f5f5f5}
  ol, ul{list-style: none}
  var, em, i{ font-style:normal;}
  a img{ border:0 none;}
  a:link,a:visited{text-decoration: none;color:none;}
  img{ vertical-align: middle;}
  #app {
    text-align: center;
    color: #2c3e50;
    width:1920px;
    height:1080px;
    overflow-x: auto;
    background:url('./assets/bg.png') no-repeat 0 0;
    background-size: 100%;
  }
</style>
