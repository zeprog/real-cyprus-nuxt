<template>
  <section class="useful" id="useful">
    <div class="useful__container container">
      <div class="useful__content">
          <h2 class="useful__title title">{{ $t('home.useful.title') }}</h2>
          <div class="useful__columns">
              <div class="useful__column">
                  <Button 
                    value="ourWork"
                    :title="$t('home.useful.buttons[6]')"
                    :activeButton='activeButton'
                    @onUpdateLabel="updateLabel"
                  />
                  <Button 
                    value="variables"
                    :title="$t('home.useful.buttons[1]')"
                    :activeButton='activeButton'
                    @onUpdateLabel="updateLabel"
                  />
                  <Button 
                    value="lookObjects"
                    :title="$t('home.useful.buttons[2]')"
                    :activeButton='activeButton'
                    @onUpdateLabel="updateLabel"
                  />
                  <Button 
                    value="visit"
                    :title="$t('home.useful.buttons[3]')"
                    :activeButton='activeButton'
                    @onUpdateLabel="updateLabel"
                  />
                  <Button 
                    value="culture"
                    :title="$t('home.useful.buttons[4]')"
                    :activeButton='activeButton'
                    @onUpdateLabel="updateLabel"
                  />
                  <Button 
                    value="help"
                    :title="$t('home.useful.buttons[5]')"
                    :activeButton='activeButton'
                    @onUpdateLabel="updateLabel"
                  />
                  <Button 
                    value="whycypr"
                    :title="$t('home.useful.buttons[0]')"
                    :activeButton='activeButton'
                    @onUpdateLabel="updateLabel"
                  />
              </div>
              <div class="useful__column">
                  <div class="useful__button-content button-content__whycyprus" v-if="activeButton == 'whycypr'">
                      <p><span>{{ $t('home.useful.text[0]') }}</span>{{ $t('home.useful.text[1]') }}</p>
                  </div>
                  <div class="useful__button-content button-content__variables" v-else-if="activeButton == 'lookObjects'">
                    <p>{{ $t('home.useful.text[2].text[0]') }}<br></p>
                    <!--<li><a href="https://dom.com.cy/" target="_blank">{{ $t('home.useful.text[2].li[0]') }}</a></li>
                    <li><a href="https://gb-cyprus.ru" target="_blank">{{ $t('home.useful.text[2].li[1]') }}</a></li>-->
                      <p>{{ $t('home.useful.text[2].text[1]') }}<br>
                        {{ $t('home.useful.text[2].text[2]') }}<br></p>
                      <li><strong>{{ $t('home.useful.text[2].li[2]') }}</strong>{{ $t('home.useful.text[2].li[3]') }}</li>
                      <li><strong>{{ $t('home.useful.text[2].li[4]') }}</strong>{{ $t('home.useful.text[2].li[5]') }}</li>
                      <li><strong>{{ $t('home.useful.text[2].li[6]') }}</strong>{{ $t('home.useful.text[2].li[7]') }}</li>
                      <li><strong>{{ $t('home.useful.text[2].li[8]') }}</strong>{{ $t('home.useful.text[2].li[9]') }}</li>
                      <li><strong>{{ $t('home.useful.text[2].li[10]') }}</strong>{{ $t('home.useful.text[2].li[11]') }}</li>
                        <p>{{ $t('home.useful.text[2].text[3]') }}<br>
                      {{ $t('home.useful.text[2].text[4]') }}</p>
                        <p>{{ $t('home.useful.text[2].text[5]') }}<br>
                      </p>  
                  </div>
                  <div class="useful__button-content button-content__look-objects" v-else-if="activeButton == 'variables'">
                      <p>{{ $t('home.useful.text[3].text[0]') }}<br><br>
                      {{ $t('home.useful.text[3].text[1]') }}<br>
                      {{ $t('home.useful.text[3].text[2]') }}<br></p>
                          <li>{{ $t('home.useful.text[3].li[0]') }}</li>
                          <li>{{ $t('home.useful.text[3].li[1]') }}</li>
                          <li>{{ $t('home.useful.text[3].li[2]') }}</li>
                          <li>{{ $t('home.useful.text[3].li[3]') }}</li><br>
                      <p>{{ $t('home.useful.text[3].text[3]') }}<br><br>
                      {{ $t('home.useful.text[3].text[4]') }}<br>
                    </p>
                  </div>
                  <div class="useful__button-content button-content__visit" v-else-if="activeButton == 'visit'">
                      <p>{{ $t('home.useful.text[4].text[0]') }}<br><br>
                      <p>{{ $t('home.useful.text[4].text[1]') }}</p>
                        {{ $t('home.useful.text[4].text[2]') }}<br>
                        {{ $t('home.useful.text[4].text[3]') }}<br><br>
                      <p>{{ $t('home.useful.text[4].text[4]') }}</p>
                          <li>{{ $t('home.useful.text[4].li[0]') }}</li>
                          <li>{{ $t('home.useful.text[4].li[1]') }}</li>
                          <li>{{ $t('home.useful.text[4].li[2]') }}</li>
                      <p>{{ $t('home.useful.text[4].text[5]') }}</p><br>
                          <p>{{ $t('home.useful.text[4].text[6]') }}<br>
                          {{ $t('home.useful.text[4].text[7]') }}<br></p>
                  </div>
                  <div class="useful__button-content button-content__culture" v-else-if="activeButton == 'culture'">
                      <p><span>{{ $t('home.useful.text[5][0]') }}</span></p>
                      <p>{{ $t('home.useful.text[5][1]') }}
                      </p>
                  </div>
                  <div class="useful__button-content button-content__help" v-else-if="activeButton == 'help'">
                      <p>{{ $t('home.useful.text[6][0]') }} <br>
                      {{ $t('home.useful.text[6][1]') }}</p>
                  </div>
                  <div class="useful__button-content button-content__our-work" v-else-if="activeButton == 'ourWork'">
                      <p>{{ $t('home.useful.text[7][0]') }}<br>
                          {{ $t('home.useful.text[7][1]') }}<br>
                          {{ $t('home.useful.text[7][2]') }}<br>
                          {{ $t('home.useful.text[7][3]') }}<br>
                          {{ $t('home.useful.text[7][4]') }}<br>
                          {{ $t('home.useful.text[7][5]') }}<br>
                          {{ $t('home.useful.text[7][6]') }}<br>
                          {{ $t('home.useful.text[7][7]') }}<br>
                          {{ $t('home.useful.text[7][8]') }}<br>
                          {{ $t('home.useful.text[7][9]') }}<br>
                          {{ $t('home.useful.text[7][10]') }}
                          </p>
                      <img v-if="$t('home.useful.buttons[6]') == 'Схема работы'" src="@/assets/img/table.png" alt="">
                      <img v-else-if="$t('home.useful.buttons[6]') == 'Scheme of work'" src="@/assets/img/tableEN.png" alt="">
                      <img v-else-if="$t('home.useful.buttons[6]') == 'Жұмыс схемасы'" src="@/assets/img/tableKZ.png" alt="">
                  </div>
              </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/buttons'
export default {
  components: {
    Button
  },
  data: () => ({
    activeButton: 'ourWork',
    locale: null
  }),
  methods: { 
    updateLabel(value) {
      this.activeButton = value
    }
  },
}
</script>