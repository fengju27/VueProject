<template>
	<div id="example-8">
		<input v-model.number="firstNumber" type="number" step="10">+
		<input v-model.number="secondNumber" type="number" step="10">=
		 {{ result }}
		<p>
			<animated-integer v-bind:value="firstNumber"></animated-integer>+
			<animated-integer v-bind:value="secondNumber"></animated-integer>=
			<animated-integer v-bind:value="result"></animated-integer>
		</p>
	</div>
</template>

<script type="text/javascript">
export default {
	e1: '#example-8',
	data () {
		component('animated-integer', {
			template: '<span>{{ tweeningValue }}</span>',
			props: {
				value: {
					type: Number,
					required: true
				}
			},
			data: function () {
				return {
					tweeningValue: 0
				}
			},
			watch: {
				value: function(newValue, oldValue) {
          this.tween(oldValue, newValue)
        }
      },
      mounted: function () {
        this.tween(0, this.value)
      },
      methods: {
        tween: function(startValue, endValue) {
					var vm = this
					function animate () {
						if (TWEEN.update()) {
							requestAnimationFrame(animate)
						}
					}
					new TWEEN.Tween({ tweeningValue: startValue })
					.to({ tweeningValue: endValue }, 500)
					.onUpdate(function() {
						vm.tweeningValue = this.tweeningValue.toFixed(0)
					})
					.start()
					animate()
				}
			}
		})
		return {
			firstNumber: 20,
			secondNumber: 20,
		    computed: {
			  result: function (){
				return this.firstNumber + this.secondNumber
			}
		}
	  }
	}
}
</script>

<style>
</style>
