<template>
	<section id="contact" class="contact">
        <div class="contact-content">
            <p>Pour toutes questions ou problèmes d'assistance, veuillez nous contacter à l'adresse suivante : 
            <a href="mailto:app.tricycle@gmail.com">app.tricycle@gmail.com</a></p>
        </div>
    </section>
</template>

<script>
export default {
	name: "Contact"
};
</script>

<style lang="scss">
.contact {
    background-color: var(--light-green);
    margin-bottom: -4rem;
    &-content {
		margin: 4rem auto;
		max-width: 800px;
        padding: 8rem 0;
        font-weight: bold;
        font-size: 1.2rem;
		@media (max-width: 720px) {
			padding: 0 1.5rem;	
		}
    }
}
</style>
