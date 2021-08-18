<template>
  <div class="header__wrapper">
    <div class="header__container container">
      <div class="header__content header-content">
        <div class="header-content__img"> 
          <img src="@/assets/img/header.jpg" alt="">
        </div>
        <div class="header-content__info">
          <h1 class="header-content__title title">{{ $t('home.header.wrapper.title') }}</h1>
          <h2>{{ $t('home.header.wrapper.subtitle') }}</h2>
          <p>{{ $t('home.header.wrapper.text') }}</p>
          <nuxt-link :to="localePath('/#useful')" class="header-content__button">{{ $t('home.header.wrapper.button') }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  width: 83%;
}
</style>