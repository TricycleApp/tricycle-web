<template>
	<footer>
        <div class="footer-start">  
            <ul class="footer-social">
                <li class="footer-social-item">
                    <a href="https://twitter.com/TriCycle_app" title="Twitter" class="link"><img src="../assets/icons/twitter.svg" alt=""></a>
                </li>
                <li class="footer-social-item">
                    <a href="https://www.instagram.com/tricycleapp/?hl=fr" title="Instagram" class="link"><img src="../assets/icons/instagram.svg" alt=""></a>
                </li>
            </ul>
            <DarkSwitch/>
        </div>
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
import DarkSwitch from "./DarkSwitch";
export default {
	name: "Footer",
    components: {
        DarkSwitch
    }
};
</script>

<style lang="scss">
footer {
	min-height: 12rem;
    position: relative;
	background-color: var(--background-emphase);
    padding: 2.2rem 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: .8rem;
    margin-top: 4rem;
}
.footer {
    &-start {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    &-end {
        display: flex;        
        flex-wrap: wrap-reverse;
        justify-content: space-between;
        @media (max-width: 720px) {
            flex-direction: column-reverse;
        }
    }
    &-copyright {
        opacity: 0.4;
    }
    &-list {
        display: flex;
        list-style-type: none;
        @media (max-width: 720px) {
            flex-direction: column;
            margin-bottom: 1rem;
        }
    }
	&-item {
        @media (min-width: 720px) {
            margin-left: 3.75rem;
        }
	}
    &-social {
        list-style-type: none;
        display: flex;
        &-item {
            filter: invert(1);
            margin-right: 1rem;
            &:hover {
                filter: invert(66%) sepia(75%) saturate(374%) hue-rotate(36deg) brightness(174%) contrast(92%);
            }
        }
    }
}
.dark .footer-social-item {
    filter: invert(0);
    &:hover {
        filter: invert(66%) sepia(75%) saturate(374%) hue-rotate(36deg) brightness(174%) contrast(92%);
    }
}
</style>
