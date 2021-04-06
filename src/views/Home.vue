<template>
	<div class="presentation">
		<Header />
		<main>
			<section id="intro" class="intro">
				<div class="intro-container">
					<div class="intro-text">
						<h1 class="intro-title">Tricycle App</h1>
						<p class="intro-subtitle">😎 L'app qui vous aide à trier <span class="underline">facilement</span></p>
					</div>
					<div class="intro-img">
						<img src="@/assets/phone.png" alt="" />
					</div>
				</div>
			</section>
			<section id="overview" class="overview">
				<div class="overview-infos">
					<h2 class="overview-title">Ne vous prenez plus la tête pour trier.😉</h2>
					<p class="overview-text">Tricycle App est une application permettant de vous aidez à trier vos déchets, en les scannant vous aurez accès aux informations du produit et la manière de le trier.</p>
				</div>
				<div class="overview-img">
					<img src="@/assets/sort-products.svg" alt="" />
				</div>
			</section>
			<section id="download">
				<div class="download">
					<p class="download-text">Essayez la!<br />C'est gratuit 😊</p>
					<div class="download-button">
						<a href="https://play.google.com/store/apps/details?id=dev.tricycle" class="download-link"><img src="@/assets/playstore.svg" alt="Google Play store"/></a>
						<a href="" class="download-link"><img src="@/assets/appstore.svg" alt="Apple App Store"/></a>
					</div>
				</div>
			</section>
			<section id="feature">
				<h2 class="feature-section-title">Découvrez notre application</h2>
				<div class="feature-container">
					<h3 class="feature-title">Scan</h3>
					<div class="feature-img">
						<img src="@/assets/phone.png" alt="" />
					</div>
					<p class="feature-text">Le scan est le moyen simple et rapide de les emballages d'un produit en scannant son code barre et savoir où les trié 📷</p>
				</div>
				<div class="feature-container">
					<h3 class="feature-title">Détails</h3>
					<div class="feature-img">
						<img src="@/assets/phone.png" alt="" />
					</div>
					<p class="feature-text">Visualisé les détails du produit, où et comment le trier.</p>
				</div>
				<div class="feature-container">
					<h3 class="feature-title">Recherche</h3>
					<div class="feature-img">
						<img src="@/assets/phone.png" alt="" />
					</div>
					<p class="feature-text">Vous pouvez également utiliser la fonction "Recherche" pour savoir où jeter un produit sans le scanner. Recherchez un produit par catégorie, si vous n'avez pas son nom 🧐</p>
				</div>
				<div class="feature-container">
					<h3 class="feature-title">News</h3>
					<div class="feature-img">
						<img src="@/assets/phone.png" alt="" />
					</div>
					<p class="feature-text">Consultez nos articles positifs sur l'environnement et l'innovation qui mettent avant les personnes qui font avancé l'écologie.</p>
				</div>
			</section>
			<section id="download">
				<div class="download">
					<p class="download-text">L'appli vous tente ?<br />Téléchargez le !⚡</p>
					<div class="download-button">
						<a href="https://play.google.com/store/apps/details?id=dev.tricycle" class="download-link"><img src="@/assets/playstore.svg" alt="Google Play store"/></a>
						<a href="" class="download-link"><img src="@/assets/appstore.svg" alt="Apple App Store"/></a>
					</div>
				</div>
			</section>
			<section id="articles">
				<h2 class="articles-title">News</h2>
				<p class="articles-text">Des articles positifs sur l'environnement</p>
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
$brk: 870px;
.presentation {
	color: var(--white-font);
	background: var(--main-clr);
	overflow: hidden;
	footer {
		color: var(--main-font);
		margin-top: 0;
	}
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
	position: relative;
	padding-top: 4rem;
	padding-bottom: 12rem;
	margin-bottom: 6rem;
	min-height: calc(100vh - 4rem);
	@media (max-width: $brk) {
		flex-direction: column;
	}
	&-container {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		transform: rotateZ(-6deg) translateX(-2rem);
	}
	&-text {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		text-align: right;
	}
	&-title {
		text-transform: uppercase;
		font-weight: 800;
		font-size: 10rem;
		letter-spacing: -3px;
		line-height: 10rem;
		width: 8ch;
		margin-top: 2rem;
	}
	&-subtitle {
		font-weight: 500;
		width: 20ch;
		margin-top: 1rem;
	}
	&-img {
	}
	&::after {
		content: '';
		background-color: var(--white-font);
		display: block;
		width: 110%;
		height: 8rem;
		position: absolute;
		bottom: 0rem;
		left: -4rem;
		transform: rotateZ(-6deg);
	}
}
.overview {
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding-bottom: 5rem;
	@media (max-width: $brk) {
		flex-direction: column;
	}
	&-infos {
		width: 42ch;
	}
	&-title {
		margin-bottom: 2rem;
	}
	&-text {
		padding-right: 2rem;		
	}
	&-img {
		img {

		}
	}
}
#download {
	display: flex;
	align-items: center;
	justify-content: center;
}
.download {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: var(--green-card);
	padding: 2rem 3rem;
	border-radius: .5rem;
	position: relative;
	z-index: 5;
	max-width: 1200px;
	width: 70vw;
	@media (max-width: $brk) {
		flex-direction: column;
	}
	&-text {
		font-size: 2.2rem;
		font-weight: bold;
	}
	&-button {
		display: flex;
		flex-direction: column;

	}
	&-link {
		margin: .5rem 0;
		img {
			height: 3rem;
		}
	}
}
#feature {
	position: relative;
	padding-top: 10rem;
	&::after {
		content: '';
		background-color: var(--white-font);
		display: block;
		width: 110%;
		height: 8rem;
		position: absolute;
		top: -4rem;
		left: -4rem;
		z-index: 0;
		transform: rotateZ(3deg);
	}
}
.feature {
	&-section-title {
		margin: 0 auto;
		width: fit-content;
		font-size: 1.8rem;
		margin-top: 5rem;
	}
	&-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-items: flex-end;
		@media (max-width: $brk) {
			display: flex;
			flex-direction: column;
		}
		&:nth-of-type(even) {
			justify-items: flex-start;
			.feature-title {
				text-align: left;
			}
			.feature-text {
				grid-column: 1;
			}
			.feature-img {
				grid-column: 2;
				img {
					transform: rotateZ(-20deg);
				}
			}
		}
	}
	&-title {
		grid-column: span 2;
		grid-row: 1;
		font-size: 20rem;
		text-transform: uppercase;
		font-weight: 800;
		overflow: hidden;
		text-align: right;
	}
	&-text {
		grid-column: 2;
		grid-row: 2;
		font-size: 1.4rem;
		width: 35ch;
	}
	&-img {
		display: flex;
		justify-content: center;
		align-items: center;
		grid-column: 1;
		grid-row: 2;
		position: relative;
		top: -14rem;
		right: -3rem;
		img {
			transform: rotateZ(20deg);
		}
	}
}
#articles {
	background: var(--background);
	color: var(--main-clr);
	padding: 2rem 0;
	margin-top: 10rem;
	.articles-title {
		font-size: 3rem;
		margin-left: 2rem;
	}
	.articles-text {
		margin-left: 2rem;
	}
	.news {
		&-container {
			margin: 0 auto;
			margin-top: 4rem;
			max-width: 800px;
			min-height: calc(100vh - 400px);
			&-title {
				font-size: 5rem;
			}
		}
		&-list {
			list-style-type: none;
			display: flex;
			overflow-X: scroll;
		}
		&-item {
			margin: 2rem 2rem;
			--link-active: var(--main-font);
			border-radius: 1rem;
			background: var(--background-emphase);
			box-shadow: var(--shdw);
			width: 25rem;
		}
		&-article {
			display: flex;
			width: 100%;
			flex-direction: column;
		}
		&-link {
			display: block;
			color: var(--main-font);
			padding: 1rem;
			width: 100%;
			height: 100%;
			&::before {
				border-radius: 1rem;
				opacity: 0.1;
			}
		}
		&-infos {
			display: flex;
			flex-direction: column;
			padding: 1rem;
		}
		&-title {
			color: var(--main-clr);
			margin-bottom: .5rem;

		}
		&-hook {
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 3;
			overflow: hidden;
		}
		&-image {
			padding: 0 1rem;
			padding-top: 1rem;
			width: 100%;
			max-height: 14rem;
			height: 14rem;
			width: 23rem;
			img {
				border-radius: 1rem;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
}
</style>
