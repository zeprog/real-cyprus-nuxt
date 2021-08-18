<template>
  <nav class="header__menu" :class="{active: isClicked}">
    <ul>
      <li>
        <nuxt-link :to="localePath('/#main')">{{ $t('home.header.nav[0]') }}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/#whycyprus')">{{ $t('home.header.nav[1]') }}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/#useful')">{{ $t('home.header.nav[2]') }}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/#about')">{{ $t('home.header.nav[3]') }}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/#blog')">{{ $t('home.header.nav[4]') }}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/#contacts')">{{ $t('home.header.nav[5]') }}</nuxt-link>
      </li>
      <ul>
        <LangSwitcher /> 
        <Social />
      </ul>
    </ul>
  </nav>
</template>

<script>
import LangSwitcher from '@/components/header/lang-switcher'
import Social from '@/components/header/social'
export default {
  components: {
    LangSwitcher,
    Social 
  },
  props: ['isClicked']
}
</script>