<template>
  <section class="whycyprus" id="whycyprus">
    <div class="whycyprus__container container">
      <div class="whycyprus__content whycyprus-content">
        <h2 class="whycyprus__title title">{{ $t('home.whyCyprus.title') }}</h2>
        <div class="whycyprus-content__row">
          <div class="whycyprus-content__block">
            <div class="whycyprus-content__block-img">
              <img src="@/assets/img/sun.png" alt="">
            </div>
            <div class="whycyprus-content__block-text">
              <p>{{ $t('home.whyCyprus.text[0]') }}</p>
            </div>
          </div>
          <div class="whycyprus-content__block">
            <div class="whycyprus-content__block-img">
              <img src="@/assets/img/passport.png" alt="">
            </div>
            <div class="whycyprus-content__block-text">
              <p>{{ $t('home.whyCyprus.text[1]') }}</p>
            </div>
          </div>
          <div class="whycyprus-content__block">
            <div class="whycyprus-content__block-img">
              <img src="@/assets/img/icons8-gang-48.png" alt="">
            </div>
            <div class="whycyprus-content__block-text">
              <p>{{ $t('home.whyCyprus.text[2]') }}</p>
            </div>
          </div>
        </div>
        <div class="whycyprus-content__row">
          <div class="whycyprus-content__block">
            <div class="whycyprus-content__block-img">
              <img src="@/assets/img/school-building.png" alt="">
            </div>
            <div class="whycyprus-content__block-text">
                <p>{{ $t('home.whyCyprus.text[3]') }}</p>
            </div>
          </div>
          <div class="whycyprus-content__block">
            <div class="whycyprus-content__block-img">
              <img src="@/assets/img/piggy_bank_PNG52.png" alt="">
            </div>
            <div class="whycyprus-content__block-text">
              <p>{{ $t('home.whyCyprus.text[4]') }}</p>
            </div>
          </div>
          <div class="whycyprus-content__block">
            <div class="whycyprus-content__block-img">
              <img src="@/assets/img/icons8-houses-96.png" alt="">
            </div>
            <div class="whycyprus-content__block-text">
              <p>{{ $t('home.whyCyprus.text[5]') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>