<template>
	
	<!-- 列表的排序过渡 -->
	<div id="list-complete-demo" class="demo">
		<button v-on:click="shuffle">shuffle</button>
		<button v-on:click="add">Add</button>
		<button v-on:click="remove">remove</button>
		<transition-group name="list-complete" tag="p">
			<span 
			  v-for="item in items" 
			  v-bind:key="item"
			  class="list-complete-item">
				{{ item }}
			</span>
		</transition-group>
	</div>
	<!-- 列表的进入和离开 -->
	<!-- <div id="list-demo" class="demo">
		<button v-on:click="add">Add</button>
		<button v-on:click="remove">Remove</button>
		<transition-group name="list" tag="p">
			<span v-for="item in items" v-bind:key="item" class="list-item">
				{{ item }}
			</span>
		</transition-group>
	</div> -->
	
	<!--多个组件的过渡 -->
	<!-- <transition name="component-fade" mode="out-in">
		<component v-bind:is="view"></component>
	</transition>
	 -->
	
  <!-- <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css"> -->

  <!-- transition：duration=“1000”  给duration属性设置一个显性的过渡持续事件  以毫秒级单位-->
  <!--  -->
<!--  <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
  <div id="example-1">
	  <button @click="show = !show">
		  Toggle
	  </button>
	  <transition
	  v-on:before-enter="beforeEnter"
	  v-on:enter="enter"
	  v-on:leave="leave"
	  v-bind:css="false">
	  <p v-if="show">
		  Demo
	  </p>
	  </transition> -->
	  <!-- <transition
	   name="custom-classes-transition"
	   enter-active-class="animated tade"
	   leave-active-class="animated bounceOutRight"
	  >
	  <p v-if="show">hello</p>
	  </transition> -->
<!-- 	  自定义过渡的类名-->
	  <!-- enter-class
	  enter-active-class
	  enter-to-class
	  leave-class
	  leave-active-class
	  leave-to-class -->
	  <!-- 优先级高于普通的类名 -->

	  <!-- css动画过渡   区别是在动画中  v-enter类名在节点插入DOM不会立即删除，
	  而是在animationend事件触发时删除-->
	  <!-- <button @click="show = !show">Toggle show</button>
	  <transition name="bounce">
		  <p v-if="show">Lorem ipsum dolor sit amet, cosectetur adipiscing elit,
		  Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
	  </transition> -->


	  <!-- 用法同css-->
	  <!-- css过渡-->
	  <!-- <button @click="show = !show">
		  Toggle render
	  </button>
	  <transition name="slide-fade">
		  <p v-if="show">hello</p>
	  </transition> -->

	  <!-- 单元素/组件的过渡  vue提供了transition的封装组件
	  可以给任何元素和组件添加进入、离开过渡
	   v-if 条件渲染  v-show 条件展示  动态组件  组件根节点-->
	 <!-- <button v-on:click="show = !show">
		  Toggle
	  </button>
	  <transition name="fade">
		  <p v-if="show">hello</p>
	  </transition> -->
  <!-- </div> -->
</template>

<script type="text/javascript">
export default{
	
	e1: "#list-complete-demo",
	data() {
		return {
			items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			nextNum: 10
		}
	},
	methods: {
		randomIndex: function() {
			return Math.floor(Math.random() * this.items.length)
		},
		add: function() {
			this.items.splice(this.randomIndex(), 0, this.nextNum++)
		},
		remove: function() {
			this.items.splice(this.randomIndex(), 1)
		},
		shuffle: function() {
			this.items = _.shuffle(this.items)
		}
	}
	
	/*列表的进入  离开过渡 */
	/* e1: "#list-demo",
	data() {
		return {
			items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			nextNum: 10
		}
	},
	methods: {
		randomIndex: function() {
			return Math.floor(Math.random() * this.items.length)
		},
		add: function() {
			this.items.splice(this.randomIndex(), 0, this.nextNum++)
		},
		remove: function() {
			this.items.splice(this.randomIndex(), 1)
		}
	} */
	
	
	
	/* 多个组件过渡 */
	/* el: '#transition-components-demo',
	data() {
		return {
			view: 'v-a'
	 }
	},
	components: {
		'v-a': {
			template: '<div>Component A</div>'
		},
		'v-b': {
			template: '<div>Component B</div>'
		}
	} */
	/* ,
		methods: {
		  beforeEnter: function(e1){
			  e1.style.opacity = 0
			  e1.style.transformOrigin = 'left'
		  },
		  enter: function(e1, done){
			  Velocity(e1, {opacity: 1, fontSize: '1.4em'}, {duration:300})
			  Velocity(e1, {fontSize: '1em'}, {complete:done})
		  },
		  leave: function(e1, done){
			  Velocity(e1,{translateX: '15px', rotateZ:'50deg'},{duration:600})
			  Velocity(e1, {rotateZ: '100deg'},{loop: 2})
			  Velocity(e1,{
				  rotateZ: '45deg',
				  translateY: '30px',
				  translateX: '30px',
				  opacity: 0
				  }, {complete: done})
		  }
		  }
	} */
}
</script>
<style>

.list-complete-item {
	transition: all 1s;
	/* 使用flip过滤的元素不能设置为display：inline  作为替代方案 可以设置为 display： inline-block 或者放置于flex中 */
	display: inline-block;
	margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to {
	opacity: 0;
	transform: translateY(30px);
}
.list-complete-leave-active {
	position: absolute;
}
	
/* 列表的排序过渡 */
/* .flip-list-move{
	transition: transform 1s;
} */
	
	/* 列表的进入  离开过渡 */
/* .list-item{
	display: inline-block;
	margin-right: 10px;
}	
.list-enter-active, .list-leave-active{
	transition: all 1s;
}
.list-enter, .list-leave-to{
	opacity: 0;
	transform: translateY(30px);
} */
	
	/* 多个组件过滤 */
/* .component-fade-enter-active, .component-fade-leave-active{
	transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to{
	opacity: 0;
} */

	/* css动漫 */
	/* .bounce-enter-active{
		animation: bounce-in .5s;
	}
	.bounce-leave-active{
		animation: bounce-in .5s reverse;
	}
	@keyframes  bounce-in{
		0%{
			transform: scale(0);
		}
		50%{
			transform: scale(1.5);
		}
		100%{
			transform: scale(1);
		}
	} */
	
	
	/* //可以设置不同的进入和离开动画
	//设置持续时间和动画函数
	.slide-fade-enter-active{
		transition: all .3s ease;
	}
	.slide-fade-leave-active{
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to{
		transform: translateX(10px);
		opacity: 0;
	} */


	/* .fade-enter-active,.fade-leave-active{
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to{
		opacity: 0;
	} */
</style>
