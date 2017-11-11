<template>
	<div class="title">
		<div class="name">
		</div>
		<div class="data">
			<span>服务卡友</span>
			<p>{{thousandBitSeparator(sum)}}</p>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				sum:394084647

			}
		},
		created(){
			try{
				let num = localStorage.getItem('num')
				if(num){
					this.num = Number(num);
				}
			}catch(err){
				console.log(err)
			}

		},
		mounted(){
			setInterval(() => {
				this.sum += Math.floor(Math.random() * 100 +1)
				try{
					localStorage.setItem('num',this.sum)
				}catch(err){
					console.log(err)
				}
			},5000)
		},
		methods:{
			thousandBitSeparator(num) {
		    var source = String(num).split(".");//按小数点分成2部分
		        source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)','ig'),"$1,");//只将整数部分进行都好分割
		    return source[0];//再将小数部分合并进来
			}
		}
	}
</script>
<style scoped>
	.title{
		margin-top: 66px;
	}
	.name{
		width:844px;
		height:128px;
		background-image: url('../assets/Title.png');
	}
	.data{
		width:654px;
		margin:46px auto;
		text-align: left;
	}
	.data span{
		font-size: 24px;
		color: #00FFE8;
		line-height: 20px;
	}
	.data p{
		font-size: 120px;
		margin-top: 15px;
		font-family: 'black';
		color: #FFDF00;
		line-height: 120px;
	}
</style>