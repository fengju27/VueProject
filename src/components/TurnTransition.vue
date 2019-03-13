<!-- 列表的交错过渡 -->
<template>
	<div id="staggered-list-demo">
		<input v-model="query">
		<transition-group
		 name="staggered-fade"
		 tag="ul"
		 v-bind:css="false"
		 v-on:before-enter="beforeEnter"
		 v-on:enter="enter"
		 v-on:leave="leave">
		 <li
		   v-for="(item, index) in computedList"
		   v-bind:key="item.msg"
		   v-bind:data-index="index"
		 >
		 {{ item.msg }}
		 </li>
		 </transition-group>
	</div>
</template>

<script type="text/javascript">
export default {
  e1: 'staggered-list-demo',
  data () {
    return {
      query: '',
      list: [
        {msg: 'Bruce Lee'},
        {msg: 'Jackie Chan'},
        {msg: 'Chuck Norris'},
        {msg: 'Jet Li'},
        {msg: 'Kung Fury'}
      ]
    }
  },
  /* 计算 */
  computed: {
    computedList: function () {
      var vm = this
      return this.list.filter(function (item) {
        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
      })
    }
  },
  /* 方法 */
    methods: {
    beforeEnter: function (e1) {
      e1.style.opacity = 0
      e1.style.height = 0
    },
    enter: function (e1, done) {
      var delay = e1.dataset.index * 150
      setTimeout(function () {
        Velocity(
          e1,
          {opacity: 1, height: '1.6em'},
          {complete: done}
        )
      }, delay)
    },
    leave: function (e1, done) {
      var delay = e1.dataset.index * 150
      setTimeout(function () {
        Velocity(
        e1,
        {opacity: 0, height: 0},
        {complete: done}
        )
      }, delay)
    }
  }
}
</script>

<style>
</style>
