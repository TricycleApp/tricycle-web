<template>
    <div class="article-view">
        <header>
            <div class="brand">Tricycle App</div>
        </header>
        <main class="article">
            <div class="article-container">
                <h1 class="article-title">{{ title }}</h1>
                <ul class="article-tags">
                <li class="article-tags-item" v-for="tag in tags" :key="tag.id">{{ tag }}</li>
            </ul>
                <div class="article-infos">
                    <div class="article-date">{{ date }}</div>
                    <div class="article-author">
                    <span class="article-author-label">Écrit par</span>
                    <span class="article-author-name">John Doe</span>
                </div>
                </div>
                <div class="article-thumbnail">
                    <img :src="'https://data.app-tricycle.com/assets/' + thumbnail" alt="" />
                </div>
                <div class="article-accroche" v-html="accroche"></div>
                <div class="article-content" v-html="content"></div>
            <div class="article-sources">
                <p class="article-sources-label">Sources :</p>
                <ul class="article-sources-list">
                    <li class="article-sources-item" v-for="source in sources" :key="source.id">
                        <a :href="source.link">{{ source.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="article-all">
                <button class="btn btn-second">
                    <router-link to="/news" class="article-see-all">Voir tout les articles</router-link>
                </button>
            </div>
            </div>
        </main>
        <Footer/>
    </div>
</template>

<script>
import Footer from '../components/Footer';

export default {
	name: "Article",
    components: {
        Footer
    },
	data() {
		return {
			title: "",
			thumbnail: "",
			accroche: "",
			content: "",
			date: "",
			tags: [],
			sources: [],
		};
	},
	mounted() {
		fetch(`https://data.app-tricycle.com/items/articles/${this.$route.params.id}?fields=title,thumbnail,accroche,content,date_created,date_updated,tags.tags_id.name,sources.sources_id.*`, {
			method: "GET",
		})
			.then((res) => res.json())
			.then((res) => {
				const data = res.data;
				console.log(data);
				this.title = data.title;
				this.thumbnail = data.thumbnail;
				this.accroche = data.accroche;
				this.content = data.content;
				this.date = new Date(data.date_created).toLocaleDateString('fr-FR', {day: 'numeric', month: 'long', year: 'numeric'});
				data.tags.forEach(element => {
                    this.tags.push(element.tags_id.name);
                });
				data.sources.forEach(element => {
                    this.sources.push({ name: element.sources_id.name, link: element.sources_id.link });
                });
                // console.log(this.sources);
			});
	},
};
</script>

<style lang="scss">
.article {
    margin-top: 6rem;
    padding: 0 22px;
	&-container {
		margin: 0 auto;
		max-width: 800px;
	}
    &-title {
        font-size: 3.18rem;
        margin-bottom: 2.5rem;
    }
    &-tags {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        margin-bottom: 0.625rem;
        &-item {
            background-color: var(--main-clr);
            color: var(--white-font);
            border-radius: 1.5rem;
            padding: .5rem 1rem;
            margin-right: 1rem;
            margin-bottom: 1rem;
            font-weight: bold;
        }
    }
    &-infos {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
    &-date {
        font-size: 1.125rem;
        font-weight: normal;
    }
    &-author {
        display: flex;
        flex-direction: column;
        &-label {
            font-size: .75rem;
        }
        &-name {
            font-size: 1.125rem;
            font-weight: bold;
        }
    }
	&-thumbnail {
        width: 100%;
        height: 32rem;
        margin: 2.5rem 0;
        @media (max-width: 720px) {
            height: 16rem;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 1rem;
        }
	}
    &-accroche {
        margin-bottom: 6.25rem;
    }
    &-accroche,
    &-content {
        h2 {
            margin-top: 2.5rem;
            display: inline-block;
            background: linear-gradient(0deg, var(--main-clr) 0%, var(--main-clr) 49%, rgba(110,81,190,0) 50%);
        }
        p {
            margin-top: 1.875rem;
            font-size: 1.1rem;
        }
        span[style*="underline"] {
            text-decoration: none!important;
            border-bottom: 4px dashed var(--main-clr);
        }
        em {
            color: var(--main-clr);
        }
        blockquote {
            background-color: var(--background-emphase);
            padding: 3rem;
            color: var(--main-clr);
            font-style: italic;
            font-weight: bold;
            margin-top: 1.875rem;
            border-radius: .7rem;
            position: relative;
            &::before {
                content: '';
                background: url('../assets/quote.svg') no-repeat;
                background-size: contain;
                width: 3rem;
                height: 3rem;
                display: block;
                position: absolute;
                top: 1rem;
                left: 1.5rem;
            }
            p {
                margin: 0;
            }
        }
    }
    &-sources {
        margin: 2.5rem 0;
        &-label {
            font-weight: bold;
            font-size: 1.4rem;
            margin-bottom: 1rem;
        }
        &-item {
            margin: .5rem 0;
            margin-left: 2rem;
            font-size: 1.2rem;
            &::marker {
                color: var(--main-clr);
                font-size: 1.4rem;
            }
        }
    }
    &-all {
        margin: 1rem 0;
        .btn {
            width: 100%;
        }
    }
}
</style>
