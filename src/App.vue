<template>
	<div id="app">
		<Sum msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
import Sum from "./components/Sum.vue";

export default {
	name: "App",
	components: {
		Sum,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
