<template>
  <form class="create" @submit.prevent="newPost">
    <div class="div-title">
      <input type="text" id="title" v-model="title">
      <label for="title">Title</label>
    </div>
    <div class="div-title">
      <textarea type="text" id="content" v-model="content"></textarea>
      <label for="content">Title</label>
    </div>
    <div class="div-title">
      <input type="text" id="url" v-model="url">
      <label for="url">url</label>
    </div>
    <button type="submit" @submit.prevent="newPost">Отправить</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      title: '',
      content: '',
      url: ''
    }
  },
  methods: {
    newPost() {
      let formData = {
        title: this.title,
        content: this.content,
        url: this.url
      }
      axios.post('http://localhost:3000/RealCyprus/postkzs/', formData).then(console.log('ok')).catch(e => console.error(e))
    }
  },
}
</script>
  
  <style scoped>
  .create {
    padding-top: 200px;
    display: flex;
  }
  </style>