<template>
  <div>
    <div v-for="(locale, i) of thisShowLocales" :key="i">
      <div class="post" v-if="locale.code === 'en'">
        <h1>{{postEn.title}}</h1>
        <div class="post__text" v-for="(text, i) of postEn.content" :key="i">
          <p>{{text}}</p>
        </div>
      </div>
      <div class="post" v-else-if="locale.code === 'ru'">
        <h1>{{postRu.title}}</h1>
        <div class="post__text" v-for="(text, i) of postRu.content" :key="i">
          <p>{{text}}</p>
        </div>
      </div>
      <div class="post" v-else-if="locale.code === 'kz'">
        <h1>{{postKz.title}}</h1>
        <div class="post__text" v-for="(text, i) of postKz.content" :key="i">
          <p>{{text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({params}) {
    const postEn = await axios.get('http://localhost:3000/RealCyprus/posts/' + params.id)
    const postRu = await axios.get('http://localhost:3000/RealCyprus/postrus/' + params.id)
    const postKz = await axios.get('http://localhost:3000/RealCyprus/postkzs/' + params.id)
    return {postEn: postEn.data, postRu: postRu.data, postKz: postKz.data}
  },
  computed: {
    thisShowLocales() {
      return this.$i18n.locales.filter(locale => locale.code == this.$i18n.locale)
    }
  }
  /*methods: {
    deletePost({data}) {
      let formData = {
        title: data.title,
        content: data.content
      }
      axios.delete('http://localhost:3000/RealCyprus/postsEN/' + data.id)
    }
  }*/
}
</script>