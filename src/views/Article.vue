<template>
  <div class="article">
    <h1>{{ title }}</h1>
    <div class="flex">
      <div class="date">{{ date }}</div>
      <div class="author">Écrit par</div>
    </div>
    <img :src="'https://data.app-tricycle.com/assets/' + thumbnail" alt="">
    <div class="accroche" v-html="accroche"></div>
    <div class="content" v-html="content"></div>
    <div class="tags">{{ tags }}</div>
    <div class="sources">{{ sources }}</div>
  </div>
</template>

<script>
export default {
    name: 'Article',
    data() {
      return {
        title: '',
        thumbnail:'',
        accroche: '',
        content: '',
        date: '',
        tags: [],
        sources: []
      }
    },
    mounted() {
      fetch(`https://data.app-tricycle.com/items/articles?fields=title,thumbnail,accroche,content,date_created,date_updated,tags.tags_id.name,sources.sources_id.*`, {
         method: 'GET'
      })
      .then(res => res.json())
      .then(res => {
        const data = res.data[0];
        console.log(data);
        this.title = data.title;
        this.thumbnail = data.thumbnail;
        this.accroche = data.accroche;
        this.content = data.content;
        this.date = data.date_created;
        this.tags = data.tags;
        this.sources = data.sources;
      })
    },
}
</script>

<style>

</style>