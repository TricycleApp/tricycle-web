<template>
	<section class="news">
		<main class="news-container">
			<h1 class="news-container-title">Articles</h1>
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
		</main>
	</section>
</template>

<script>
export default {
	data() {
		return {
			articles: [],
		};
	},
	mounted() {
		fetch(`https://data.app-tricycle.com/items/articles?fields=id,title,accroche,thumbnail,tags.tags_id.name`, {
			method: "GET",
		})
			.then((res) => res.json())
			.then((res) => {
				this.articles = res.data;
			});
	}
};
</script>

<style lang="scss">
.news {
	&-container {
		margin: 0 auto;
        margin-top: 4rem;
		max-width: 800px;
        min-height: calc(100vh - 400px);
        &-title {
            font-size: 5rem;
        }
		@media (max-width: 720px) {
			margin: 0 1rem;
		}
	}
    &-list {
        list-style-type: none;
    }
	&-item {
		margin: 2rem 0;
		--link-active: var(--main-font);
        border-radius: 1rem;
		background: var(--background-emphase);
        box-shadow: var(--shdw);
	}
	&-article {
        display: flex;
		width: 100%;
		@media (max-width: 720px) {
			flex-direction: column;
		}
	}
	&-link {
        display: block;
		color: var(--main-font);
        padding: 1rem;
        &::before {
            border-radius: 1rem;
            opacity: 0.1;
        }
	}
	&-infos {
        display: flex;
		flex-direction: column;
		flex: 1;
		padding: 1rem 2rem;
		@media (max-width: 720px) {
			padding: 1rem;
		}
	}
	&-title {
		color: var(--main-clr);
        margin-bottom: 1rem;
	}
    &-hook {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
	&-image {
		@media (max-width: 720px) {
			padding: 0 1rem;
			padding-top: 1rem;
			width: 100%;
			max-height: 14rem;
			height: 14rem;
		}
		@media (min-width: 720px) {
			min-width: 10rem;
			min-height: 10rem;
			width: 10rem;
			height: 10rem;
		}
		img {
            border-radius: 1rem;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}
</style>
