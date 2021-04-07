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
$brk: 870px;

header {
	background-color: var(--main-clr);
	padding: 0 1rem;
	display: flex;
	@media (max-width: $brk) {
		flex-direction: column;
		align-items: center;
		padding: 1rem;
	}
}
.header { 
	&-brand {
		padding: 2rem;
		font-size: 1.4rem;
		font-weight: bold;
		color: var(--white-font);
		@media (max-width: 720px) {
			padding: 1rem;
		}
		.logo {
			height: 4rem;
			object-fit: contain;
		}
	}
	&-menu {
		list-style-type: none;
		margin-left: auto;
		display: flex;
		align-items: center;
		@media (max-width: $brk) {
			margin: 0 auto;
		}
		li {
			margin: 0 1rem;
			a {
				font-weight: bold;
			}
		}
	}
}
</style>
