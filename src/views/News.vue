<template>
  <section class="news">
      <h1>Articles</h1>
      <ul>
          <li v-for="article in articles" :key="article.id" class="news-item">
            <router-link :to="'/article/' + article.id" class="news-link">
              <div class="news-article">
                  <div class="news-image">
                    <img :src="'https://data.app-tricycle.com/assets/' + article.thumbnail" alt="">
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
</template>

<script>
export default {
  data() {
    return {
      articles: []
    }
  },
  mounted() {
      fetch(`https://data.app-tricycle.com/items/articles?fields=id,title,accroche,thumbnail,tags.tags_id.name`, {
         method: 'GET'
      })
      .then(res => res.json())
      .then(res => {
        console.log(res.data);
        this.articles = res.data;
      })
  }
}
</script>

<style lang="scss">
.news {
    &-item {
        margin: 2rem 0;
        --link-active: var(--main-font);
    }
    &-article {
        display: flex;
        width: 100%;
    }
    &-link {
        display: block;
        color: var(--main-font);
    }
    &-infos {
        display: flex;
        flex-direction: column;
        background: var(--background-emphase);
        flex: 1;
        padding: 1rem 2rem;
    }
    &-title {
        color: var(--main-clr);
    }
    &-image{
        min-width: 10rem;
        min-height: 10rem;
        width: 10rem;
        height: 10rem;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>