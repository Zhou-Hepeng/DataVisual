<template>
  <div id="app">
    <div class="left-wrapper">
      <LookArticals></LookArticals>
      <EchartImg></EchartImg>
    </div>
    <div class="center-wrapper">
      <TitleName></TitleName>
      <DataMap></DataMap>
    </div>
    <div class="right-wrapper">
      <UserActives></UserActives>
      <Interaction></Interaction>
      <RankVideos></RankVideos>
    </div>
  </div>
</template>

<script>
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
  mounted(){
    // alert(window.screen.height)
    // alert(window.screen.width)
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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width:1920px;
    height:1080px;
    overflow-x: auto;
    background:url('./assets/bg.png') no-repeat 0 0;
    background-size: 100% 100%;
  }
</style>
