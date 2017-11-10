<template>
  <div id="app">
    <div class="left-wrapper">
      <LookArticals :lookActives="lookActives"></LookArticals>
      <EchartImg :Proportion="Proportion"></EchartImg>
    </div>
    <div class="center-wrapper">
      <TitleName :number="number"></TitleName>
      <DataMap :userActives="userActives"></DataMap>
    </div>
    <div class="right-wrapper">
      <UserActives :userActives="userActives"></UserActives>
      <Interaction :userRank="userRank"></Interaction>
      <RankVideos :rankVideos="rankVideos"></RankVideos>
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
    RankVideos

  },
  data(){
    return {
        lookActives:[],
        Proportion:[],
        number:'',
        userActives:[],
        userRank:[],
    }
  },
  created(){
    this.lookActives = data.lookActives
    this.Proportion = data.proportion
    this.number = 394084647
    this.userActives = data.userActives
    this.userRank = data.userRank
    this.rankVideos = data.rankVideos
    console.log(data)
    axios.get('https://dealer-api.360che.com/AppleTV/GetClueProvinceList.aspx').then((res) => {
      console.log(res.data)
        // this.geoCoordMap = res.data
        // this.$nextTick(() => {
        //   this._getMyChart()
        // })
    })
  },
  mounted(){
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
    background-size: cover;
  }
</style>
