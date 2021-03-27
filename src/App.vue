<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
.menu {
	list-style-type: none;
	margin-right: auto;
	li a {
		color: white;
		font-weight: bold;
	}
}
header {
	background-color: var(--main-clr);
	padding: 0 1rem;
	.brand {
		padding: 2rem;
		font-size: 1.4rem;
		font-weight: bold;
		color: var(--white-font);
	}
}
</style>
