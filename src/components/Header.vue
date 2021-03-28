<template>
    <header>
        <div class="brand">Tricycle App</div>
    </header>
</template>

<script>
export default {
	name: "Header",
};
</script>

<style lang="scss">
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
