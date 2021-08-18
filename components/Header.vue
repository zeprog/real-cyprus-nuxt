<template>
  <div class="header__header-block">
    <div class="header__container container">
      <div class="header__header">
        <h3 class="header__logo"><nuxt-link :to="localePath('/')">{{ $t('home.header.siteTitle') }}</nuxt-link></h3>
        <div class="header__burger" @click="toggleMenu" :class="{active: isClicked}">
          <span></span>
        </div>
        <Nav :isClicked='isClicked'/>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/header/nav'
export default {
  components: {
    Nav
  },
  props: ['isClicked'],
  methods: {
    toggleMenu() {
      this.$emit('toggleMenu')
    }
  }
}
</script>

<style>
.header__logo {
  font-family: 'Calibri', sans-serif;
  font-size: 26px;
}
</style>
