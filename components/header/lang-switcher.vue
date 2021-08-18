<template>
  <ul>
    <li  >
      <ul  
        v-for="(locale, i) of thisShowLocales" :key="i"
        @click="isOpen = !isOpen"
      >
        <ul v-if="locale.code !== 'en' && locale.code !== 'kz'" class="lang">
          <li class="locale">{{locale.name}}</li>
          <ul :class="{'show-lang': isOpen}">
            <li v-for="(locale, i) of showLocales" :key="i">
              <nuxt-link :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
            </li>
          </ul>
        </ul>
        <ul v-else-if="locale.code !== 'ru' && locale.code !== 'kz'" class="lang">
          <li class="locale">{{locale.name}}</li>
          <ul :class="{'show-lang': isOpen}">
            <li v-for="(locale, i) of showLocales" :key="i">
              <nuxt-link :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
            </li>
          </ul>
        </ul>
        <ul v-else-if="locale.code !== 'ru' && locale.code !== 'en'" class="lang">
          <li class="locale">{{locale.name}}</li>
          <ul :class="{'show-lang': isOpen}">
            <li v-for="(locale, i) of showLocales" :key="i">
              <nuxt-link :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
            </li>
          </ul>
        </ul>
      </ul>
    </li>
  </ul>
  
</template>

<script>
export default {
  name: 'LangSwitcher',
  data: () => ({
    isOpen: false
  }),
  computed: {
    showLocales() {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
    },
    thisShowLocales() {
      return this.$i18n.locales.filter(locale => locale.code == this.$i18n.locale)
    }
  }
}
</script>

<style scoped>
.show-lang li {
  margin-bottom: -6px;
  margin-right: 0;
}
</style>