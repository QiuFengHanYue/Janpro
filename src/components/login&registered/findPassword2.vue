<template>
	<div style="text-align: center;">
		<p class="title"><span class="back"><返回</span>找回密码</p>
		<h3 style="margin-top: 120px;">
			短信验证码已发送，请输入验证码
		</h3>
		<div style="margin-top: 2rem;">
			<input  type="text" placeholder="验证码" style="width: 24rem; height: 3.4rem; text-align: center; border:none; border-bottom: 1px solid #f3f3f3;"/>
		</div>
		<button style="width: 20.5rem; height: 3rem; background: #ca3232; color: white; font-size: 20px; border-radius: 10px ; border: none; margin-top: 50px;">下一步</button>
		<button style="width: 20.5rem; height: 3rem; background: white; color: #ca3232; font-size: 20px; border-radius: 10px ;  margin-top: 20px; border: none;">28s后重新发送</button>
	</div>	
</template>

<script>
</script>

<style>
	.title{
		text-align: left;
		height: 60px;
		background: #ca3232;
		color: white;
		font: "微软雅黑";
		font-size: 20px;
		line-height: 60px;
	}
	.back{
		float: left;
		padding-left: 5%;
		padding-right: 22%;
	}
</style>