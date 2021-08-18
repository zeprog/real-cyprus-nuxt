<template>
  <div class="blog__block">
    <div v-for="(locale, i) of thisShowLocales" :key="i">
      <div v-if="locale.code === 'ru'" >
        <nuxt-link :to="`/${postRu.url}`">
          <div class="blog-card__block">
            <!-- <img class="blog-card-img" :src="`/uploads/posts/${postRu.coverImageName.filename}`" alt=""  > -->
          </div>
          <h4 class="blog-card__title">{{ postRu.title }}</h4>
        </nuxt-link>
      </div>
      <div v-else-if="locale.code === 'en'">
        <nuxt-link :to="`/en/${postEn.url}`">
          <div class="blog-card__block">
            <!-- <img class="blog-card-img" :src="`/uploads/posts/${postEn.coverImageName.filename}`" alt=""  > -->
          </div>
          <h4 class="blog-card__title">{{ postEn.title }}</h4>
        </nuxt-link>
      </div>
      
      <div v-else-if="locale.code === 'kz'">
        <nuxt-link :to="`/kz/${postKz.url}`">
          <div class="blog-card__block">
            <!-- <img class="blog-card-img" :src="`/uploads/posts/${postKz.coverImageName.filename}`" alt=""  > -->
          </div>
          <h4 class="blog-card__title">{{ postKz.title }}</h4>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    postRu: {
      type: Object,
      required: false,
      default: () => {}
    },
    postEn: {
      type: Object,
      required: false,
      default: () => {}
    },
    postKz: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  computed: {
    thisShowLocales() {
      return this.$i18n.locales.filter(locale => locale.code == this.$i18n.locale)
    }
  }
}
</script>