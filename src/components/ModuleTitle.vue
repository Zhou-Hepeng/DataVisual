<template>
  <div class="artical-title">
    {{title}}
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data: () => ({})
}
</script>
<style scoped>
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
</style>
