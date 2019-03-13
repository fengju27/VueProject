<template>
	<div id="main" v-clock v-on:click="hideTooltip">
		<div class="tooltip" v-on:click.stop v-if="show_tooltip">
			<input type="text" v-model="text_content"/>
		</div>
		<p v-on:click.stop="toggleTooltip">{{ text_content }}</p>
	</div>
</template>

<script type="text/javascript">
export default {
  e1: '#main',
  data() {
    return {
      show_tooltip: false,
      text_content: '点我，并编辑内容'
    }
  },
  methods: {
    hideTooltip: function () {
      this.show_tooltip = false
    },
    toggleTooltip: function () {
      this.show_tooltip = !this.show_tooltip
    }
  }
}
</script>

<style>
/* 隐藏未编译的变量 */
[v-clock] {
	display: none;
}
*{
	margin: 0;
	padding: 0;
}
 template{
        font:15px/1.3 'Open Sans', sans-serif;
        color: #5e5b64;
        text-align:center;
    }

    a, a:visited {
        outline:none;
        color:#389dc1;
    }

    a:hover{
        text-decoration:none;
    }

    section, footer, header, aside, nav{
        display: block;
    }


    /*-------------------------
        编辑框
    --------------------------*/

    .tooltip{
        background-color:#5c9bb7;

        background-image:-webkit-linear-gradient(top, #5c9bb7, #5392ad);
        background-image:-moz-linear-gradient(top, #5c9bb7, #5392ad);
        background-image:linear-gradient(top, #5c9bb7, #5392ad);

        box-shadow: 0 1px 1px #ccc;
        border-radius:3px;
        width: 290px;
        padding: 10px;

        position: absolute;
        left:50%;
        margin-left:-150px;
        top: 80px;
    }

    .tooltip:after{
        /* 提示信息 */
        content:'';
        position:absolute;
        border:6px solid #5190ac;
        border-color:#5190ac transparent transparent;
        width:0;
        height:0;
        bottom:-12px;
        left:50%;
        margin-left:-6px;
    }

    .tooltip input{
        border: none;
        width: 100%;
        line-height: 34px;
        border-radius: 3px;
        box-shadow: 0 2px 6px #bbb inset;
        text-align: center;
        font-size: 16px;
        font-family: inherit;
        color: #8d9395;
        font-weight: bold;
        outline: none;
    }

    p{
        font-size:22px;
        font-weight:bold;
        color:#6d8088;
        height: 30px;
        cursor:default;
    }

    p b{
        color:#ffffff;
        display:inline-block;
        padding:5px 10px;
        background-color:#c4d7e0;
        border-radius:2px;
        text-transform:uppercase;
        font-size:18px;
    }

    p:before{
        content:'✎';
        display:inline-block;
        margin-right:5px;
        font-weight:normal;
        vertical-align: text-bottom;
    }

    #main{
        height:300px;
        position:relative;
        padding-top: 150px;
    }
</style>
