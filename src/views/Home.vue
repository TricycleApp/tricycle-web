<template>
	<div class="presentation">
		<Header />
		<main>
			<section id="intro" class="intro">
				<div class="intro-text">
					<h1 class="intro-title">Tricycle App</h1>
					<p class="intro-subtitle">L'app qui vous aide à trier <span class="underline">facilement</span> 😎</p>
				</div>
				<div class="intro-img">
					<img src="@/assets/phone.png" alt="" />
				</div>
			</section>
			<section id="overview">
				<div class="overview-infos">
					<h2 class="overview-title">Ne vous prenez plus la tête pour trier.😉</h2>
					<p class="overview-text">Tricycle App est une application permettant de vous aidez à trier vos déchets, en les scannant vous aurez accès aux informations du produit et la manière de le trier.</p>
				</div>
				<div class="overview-img">
					<img src="" alt="" />
				</div>
			</section>
			<section id="download">
				<div class="download">
					<p class="download-text">Essayez la!<br />C'est gratuit 😊</p>
					<div class="download-button">
						<a href="" class="download-link"><img src="" alt=""/></a>
						<a href="" class="download-link"><img src="" alt=""/></a>
					</div>
				</div>
			</section>
			<section id="feature">
				<h2>Découvrez notre application</h2>
				<div class="feature-container">
					<h3 class="feature-title">Scan</h3>
					<p class="feature-text">Le scan est le moyen simple et rapide de les emballages d'un produit en scannant son code barre et savoir où les trié📷</p>
					<div class="feature-img">
						<img src="" alt="" />
					</div>
				</div>
				<div class="feature-container">
					<h3 class="feature-title">Détails</h3>
					<p class="feature-text">Visualisé les détails du produit, où et comment le trier.</p>
					<div class="feature-img">
						<img src="" alt="" />
					</div>
				</div>
				<div class="feature-container">
					<h3 class="feature-title">Recherche</h3>
					<p class="feature-text">Vous pouvez également utiliser la fonction "Recherche" pour savoir où jeter un produit sans le scanner. Recherchez un produit par catégorie, si vous n'avez pas son nom 🧐</p>
					<div class="feature-img">
						<img src="" alt="" />
					</div>
				</div>
				<div class="feature-container">
					<h3 class="feature-title">News</h3>
					<p class="feature-text">Consultez nos articles positifs sur l'environnement et l'innovation qui mettent avant les personnes qui font avancé l'écologie.</p>
					<div class="feature-img">
						<img src="" alt="" />
					</div>
				</div>
			</section>
			<section id="download">
				<div class="download">
					<p class="download-text">L'appli vous tente ?<br />Téléchargez le !⚡</p>
					<div class="download-button">
						<a href="" class="download-link"><img src="" alt=""/></a>
						<a href="" class="download-link"><img src="" alt=""/></a>
					</div>
				</div>
			</section>
			<section id="news">
				<h2 class="news-title">News</h2>
				<p class="news-text">Des articles positifs sur l'environnement</p>
				<ul class="news-list">
					<li v-for="article in articles" :key="article.id" class="news-item">
						<router-link :to="'/article/' + article.id" class="news-link">
							<div class="news-article">
								<div class="news-image">
									<img :src="'https://data.app-tricycle.com/assets/' + article.thumbnail" alt="" />
								</div>
								<div class="news-infos">
									<h2 class="news-title">{{ article.title }}</h2>
									<p class="news-hook" v-html="article.accroche">{{ article.accroche }}</p>
								</div>
							</div>
						</router-link>
					</li>
				</ul>
			</section>
		</main>
		<Footer />
	</div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
	name: "Home",
	components: {
		Header,
		Footer,
	},
	data() {
		return {
			articles: [],
		};
	},
	created() {
		fetch(`https://data.app-tricycle.com/items/articles?fields=id,title,accroche,thumbnail,tags.tags_id.name?limit=5`, {
			method: "GET",
		})
        .then((res) => res.json())
        .then((res) => {
            this.articles = res.data;
        });
	},
};
</script>

<style lang="scss" scoped>
.presentation {
	color: var(--white-font);
	background: var(--main-clr);
}

.underline {
	display: inline-block;
	position: relative;
	&::after {
		content: "";
		display: block;
		background-color: var(--white-font);
		height: 0.25rem;
		width: 100%;
		position: absolute;
		bottom: -0.3rem;
		left: 0;
	}
}
.intro {
	display: flex;
	align-items: center;
	justify-content: center;
	&-text {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		text-align: right;
	}
	&-title {
		text-transform: uppercase;
		font-weight: 800;
		font-size: 6rem;
		line-height: 7rem;
		width: 8ch;
	}
	&-subtitle {
		font-weight: 500;
		width: 20ch;
	}
	&-img {
	}
}
</style>
