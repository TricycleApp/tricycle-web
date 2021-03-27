<template>
	<footer>
		<div class="footer-end">
			<p class="footer-copyright">© Copyright - Tricycle App 2021</p>
			<ul class="footer-list">
				<li class="footer-item">
					<router-link to="/privacy">Politique de confidentialité</router-link>
				</li>
				<li class="footer-item">
					<router-link to="/agreement">Conditions d'utilisations</router-link>
				</li>
			</ul>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer",
};
</script>

<style lang="scss">
footer {
	min-height: 12rem;
	background-color: var(--background-emphase);
    padding: 2.2rem 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: .8rem;
    margin-top: 4rem;
}
.footer {
    &-end {
        display: flex;        
        flex-wrap: wrap-reverse;
        justify-content: space-between;
    }
    &-copyright {
        opacity: 0.4;
    }
    &-list {
        display: flex;
        list-style-type: none;
    }
	&-item {
        margin-left: 3.75rem;
	}
}
</style>
