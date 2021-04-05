<template>
	<header>
		<div class="header-brand">
			<router-link to="/" class="link">
				<img class="logo" src="@/assets/logo.png" />
			</router-link>
		</div>
		<ul class="header-menu">
			<li>
				<router-link to="/news" class="link">News</router-link>
			</li>
			<li>
				<button class="btn btn-invert">
					<a href="#download" class="link">Téléchargez</a>
				</button>
			</li>
		</ul>
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
	display: flex;
}
.header { 
	&-brand {
		padding: 2rem;
		font-size: 1.4rem;
		font-weight: bold;
		color: var(--white-font);
		.logo {
			height: 4rem;
		}
	}
	&-menu {
		list-style-type: none;
		margin-left: auto;
		display: flex;
		align-items: center;
		li {
			margin: 0 1rem;
			a {
				font-weight: bold;
			}
		}
	}
}
</style>
