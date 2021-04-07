<template>
    <div class="article-view">
        <Header/>
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
                    <span class="article-author-name">{{ author }}</span>
                </div>
                </div>
                <div class="article-thumbnail">
                    <img :src="'https://data.app-tricycle.com/assets/' + thumbnail" alt="" />
                </div>
                <div class="article-social">
                    <div class="article-social-container">
                        <h2 class="article-social-label">Visitez nos réseaux 😊</h2>
                        <ul class="article-social-list">
                            <li class="article-social-item">
                                <a href="https://twitter.com/TriCycle_app" title="Twitter"><img src="../assets/icons/twitter.svg" alt=""></a>
                            </li>
                            <li class="article-social-item">
                                <a href="https://www.instagram.com/tricycleapp/?hl=fr" title="Instagram"><img src="../assets/icons/instagram.svg" alt=""></a>
                            </li>
                        </ul>
                    </div>
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
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
	name: "Article",
    components: {
        Header,
        Footer
    },
	data() {
		return {
			title: "",
            author: "",
			thumbnail: "",
			accroche: "",
			content: "",
			date: "",
			tags: [],
			sources: [],
		};
	},
	mounted() {
		fetch(`https://data.app-tricycle.com/items/articles/${this.$route.params.id}?fields=title,thumbnail,accroche,content,date_created,date_updated,tags.tags_id.name,sources.sources_id.*,user_created`, {
			method: "GET",
		})
        .then((res) => res.json())
        .then((res) => {
            const data = res.data;
            this.title = data.title;
            this.thumbnail = data.thumbnail;
            this.accroche = data.accroche;
            this.content = data.content;
            this.date = new Date(data.date_created).toLocaleDateString('fr-FR', {day: 'numeric', month: 'long', year: 'numeric'});
            data.tags.forEach(element => {
                if (element.tags_id !== null) this.tags.push(element.tags_id.name);
            });
            data.sources.forEach(element => {
                if (element.sources_id !== null) this.sources.push({ name: element.sources_id.name, link: element.sources_id.link });
            });
            fetch(`https://data.app-tricycle.com/users/${data.user_created}`, {
                method: 'GET'
            })
            .then(res => res.json())
            .then(res => {
                this.author = res.data.first_name + ' ' + res.data.last_name;
            })
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
        word-break: break-word;
        @media (min-width: 720px) {
            font-size: 2.5rem;
        }
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
            min-width: 4rem;
            display: flex;
            justify-content: center;
            align-items: center;
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
        ol, ul {
            margin-top: 1.875rem;
        }
        ol > li::marker {
            font-size: 1.2rem;
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
                background: url('../assets/icons/quote.svg') no-repeat;
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
    }
    &-all {
        margin: 1rem 0;
        .btn {
            width: 100%;
        }
    }
    .article-sources-item,
    .article-content li {
        margin: .5rem 0;
        margin-left: 2rem;
        font-size: 1.2rem;
        &::marker {
            color: var(--main-clr);
            font-weight: bold;
            font-size: 1.4rem;
        }
    }
    &-container {
        position: relative;
    }
    &-social {
        @media (min-width: 720px) {
            position: sticky;
            top: 8rem;
        }
        &-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            @media (min-width: 720px) {
                position: absolute;
                top: 2rem;
                right: -8rem;
                flex-direction: column;
            }
        }
        &-list {
            list-style-type: none;
            @media (max-width: 720px) {
                display: flex;
            }
        }
        &-item {
            background-color: var(--main-clr);
            border-radius: .8rem;
            width: 3rem;
            height: 3rem;
            margin-bottom: .5rem;
            margin-right: 0.5rem;
            a::before {
                content: none;
            }
            img {
                width: 100%;
                height: 100%;
                padding: .7rem;
            }
        }
        &-label {
            width: 100px;
            font-size: .8rem;
            margin-bottom: 1rem;
        }
    }
}
@media (max-width: 720px) {
    .article {
        &-title {
            line-height: 3.4rem;
        }
        &-tags-item {
            font-size: 0.8rem;
            margin-right: .5rem;
            margin-bottom: .5rem;
        }
        &-thumbnail {
            margin: 1.5rem 0;
        }
        &-date {
            font-size: .9rem;
        }
        &-author-name {
            font-size: .9rem;
        }
        &-accroche {
            margin-bottom: 1rem;
        }
        &-accroche,
        &-content {
            p {
                font-size: 1rem;
            }
            ol > li::marker {
                font-size: 1rem;
            }
        }
        .article-sources-item,
        .article-content li {
            font-size: 1rem;
            &::marker {
                font-size: 1rem;
            }
        }
    }
}

.dark .article {

    &-accroche,
    &-content {
        h2 {
            background: linear-gradient(0deg, rgba(154, 199, 56, 0.6) 0%, rgba(154, 199, 56, 0.6) 49%, rgba(110,81,190,0) 50%);
        }
    }
}
</style>
