<template>
	<div class="toastWrap">
		<div class="toast">
			{{ message }}
		</div>
	</div>
</template>

<script lang="ts">
import './index.less'
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
	name: 'Toast',

	props: {
		message: {
			type: String,
			default: () => '',
		},
		time: {
			type: Number,
			default: () => 1000,
		},
	},
	setup(props, { attrs }) {
		const remove = attrs.remove as Function

		onMounted(() => {
			setTimeout(() => {
				remove()
			}, props.time)
		})
	},
})
</script>