<template>
  <div class="start">
  	<div class="logo">
    	<img src="../../assets/image/login&registered/start/logo.png"/>
  	</div>	
  	<div class="button">
  		<img src="../../assets/image/login&registered/start/微信登录按钮.png"/>
  		<button class="login">登录</button>
  		<button class="newUser">新用户</button>
  	</div>
  </div>
</template>

<script>
</script>

<style>
	.start{
		background: url(../../assets/image/login&registered/start/启动界面背景.jpg);
		height: 736px;
		background-size:100%
	}
	.logo{
		width: 33%;
		margin: 0 auto;
		padding:33% 0;
	}
	.logo img{
		width: 100%;
	}
	.button{
		width: 80%;
		margin: 0 auto;
		padding: 17% 0;
	}
	.button img{
		width: 100%;
	}
	.button button{
		width: 45%;
		border: none;
		height: 45px;
		margin-top: 3%;
		border-radius: 6px;
	}
	.login{
		background: white;
		color: #ca3232;
		float: left;
	}
	.newUser{
		background: none;
		border: 1px solid white !important;
		float: right;
	}
</style>