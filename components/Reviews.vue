<template>
  <section class="reviews">
    <div class="reviews__container container">
      <h2 class="reviews__title title">{{ $t('home.reviews.title') }}</h2>
      <div class="reviews__reviews-blocks">
        <VueSlickCarousel
          v-bind="settings"
          ref="carousel"
          class="carousel justify-between"
        >
          <div class="reviews__reviews-block">
            <div class="reviews-block__image">
              <img src="@/assets/img/author.png" alt="">
            </div>
            <div class="reviews-block__text-block">
              <p class="reviews-block__name">{{ $t('home.reviews.name[0]') }}</p>
              <p class="reviews-block__text">{{ $t('home.reviews.text[0]') }}</p>
            </div>
          </div>
          <div class="reviews__reviews-block">
            <div class="reviews-block__image">
              <img src="@/assets/img/2.png" alt="">
            </div>
            <div class="reviews-block__text-block">
              <p class="reviews-block__name">{{ $t('home.reviews.name[1]') }}</p>
              <p class="reviews-block__text">{{ $t('home.reviews.text[1]') }}</p>
            </div>
          </div>
          <div class="reviews__reviews-block">
            <div class="reviews-block__image">
              <img src="@/assets/img/9.png" alt="">
            </div>
            <div class="reviews-block__text-block">
              <p class="reviews-block__name">{{ $t('home.reviews.name[2]') }}</p>
              <p class="reviews-block__text">{{ $t('home.reviews.text[2]') }}</p>
            </div>
          </div>
          <div class="reviews__reviews-block">
            <div class="reviews-block__image">
              <img src="@/assets/img/4.png" alt="">
            </div>
            <div class="reviews-block__text-block">
              <p class="reviews-block__name">{{ $t('home.reviews.name[3]') }}</p>
              <p class="reviews-block__text">{{ $t('home.reviews.text[3]') }}</p>
            </div>
          </div>
          <div class="reviews__reviews-block">
            <div class="reviews-block__image">
              <img src="@/assets/img/5.png" alt="">
            </div>
            <div class="reviews-block__text-block">
              <p class="reviews-block__name">{{ $t('home.reviews.name[4]') }}</p>
              <p class="reviews-block__text">{{ $t('home.reviews.text[4]') }}</p>
            </div>
          </div>
          <div class="reviews__reviews-block">
            <div class="reviews-block__image">
              <img src="@/assets/img/6.png" alt="">
            </div>
            <div class="reviews-block__text-block">
              <p class="reviews-block__name">{{ $t('home.reviews.name[5]') }}</p>
              <p class="reviews-block__text">{{ $t('home.reviews.text[5]') }}</p>
            </div>
          </div>
          <div class="reviews__reviews-block">
            <div class="reviews-block__image">
              <img src="@/assets/img/10.jpg" alt="">
            </div>
            <div class="reviews-block__text-block">
              <p class="reviews-block__name">{{ $t('home.reviews.name[6]') }}</p>
              <p class="reviews-block__text">{{ $t('home.reviews.text[6]') }}</p>
            </div>
          </div>
          <div class="reviews__reviews-block">
            <div class="reviews-block__image">
              <img src="@/assets/img/7.png" alt="">
            </div>
            <div class="reviews-block__text-block">
              <p class="reviews-block__name">{{ $t('home.reviews.name[7]') }}</p>
              <p class="reviews-block__text">{{ $t('home.reviews.text[7]') }}</p>
            </div>
          </div>
          <div class="reviews__reviews-block">
            <div class="reviews-block__image">
              <img src="@/assets/img/3.png" alt="">
            </div>
            <div class="reviews-block__text-block">
              <p class="reviews-block__name">{{ $t('home.reviews.name[8]') }}</p>
              <p class="reviews-block__text">{{ $t('home.reviews.text[8]') }}</p>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  components: {
    VueSlickCarousel
  },
  data: () => ({
    settings: {
      infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        responsive: [
        {
          breakpoint: 767,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
        }
      ]
    }
  })
}
</script>