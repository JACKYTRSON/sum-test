<template>
	<div class="container mx-auto w-64">
		<div class="flex justify-between">
			<span class="w-20 text-left">A</span>
			<input v-model="a" class="w-40 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
		</div>
		<div class="flex justify-between">
			<span class="w-20 text-left">B</span>
			<input v-model="b" class="w-40 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
		</div>
		<div class="flex justify-between">
			<span class="w-20 text-left">SUM</span>
			<span v-text="total" class="w-40 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-left"></span>
		</div>

		<button v-on:click="handleSumClick" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
			Click
		</button>
	</div>
</template>

<script>
export default {
	name: "Sum",
	props: {},
	methods: {
		handleSumClick() {
			this.$store.dispatch("doSum");
		},
	},
	computed: {
		a: {
			get() {
				return this.$store.state.a;
			},
			set(value) {
				this.$store.commit("updateA", value);
			},
		},
		b: {
			get() {
				return this.$store.state.b;
			},
			set(value) {
				this.$store.commit("updateB", value);
			},
		},
		total: {
			get() {
				return this.$store.state.total;
			},
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
