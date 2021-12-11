<template>
	<div class="App">
		<div class="btn" @click="toast">测试app</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

import { toastFace } from '../../interface'

export default defineComponent({
	name: 'App',

	setup() {
		const Toast = inject<toastFace>('$Toast')

		const toast = () => {
			Toast!({
				time: 1000,
				message: '这是一条测试信息～',
			})
		}

		return {
			toast,
		}
	},
})
</script>


