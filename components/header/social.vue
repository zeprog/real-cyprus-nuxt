<template>
  <ul class="header__menu-social">
    <li v-for="social of socials" :key="social.to"><nuxt-link :to="social.to"><i :class="social.class" aria-hidden="true"></i></nuxt-link></li>
  </ul>
</template>

<script>
export default {
  data: () => ({
    socials: [
      {to: 'https://vk.com/real.cyprus', class: 'fab fa-vk'},
      {to: 'https://telegram.im/', class: 'fab fa-telegram'},
      {to: 'https://wa.me/77475955000', class: 'fab fa-whatsapp'},
      {to: 'https://instagram.com/real_cyprus_?r=nametag', class: 'fab fa-instagram'},
      {to: 'https://www.facebook.com/profile.php?id=100063698421831', class: 'fab fa-facebook-f'},
      {to: 'https://join.skype.com/invite/JdTPvZr0WzDd', class: 'fab fa-skype'},
    ]
  })
}
</script>

<style scoped>

</style>