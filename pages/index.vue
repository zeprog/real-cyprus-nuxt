<template>
  <div>
    <Wrapper />
    <Useful/>
    <About />
    <Reviews />
    <WhyCyprus />
    <section class="blog" id="blog">
      <div class="blog__container container">
        <div v-for="(locale, i) of thisShowLocales" 
          :key="i"
        >
          <div v-if="locale.code === 'en'" >
            <div class="blog__blocks">
              <Blog 
                v-for="postEn in postsEn" 
                :key="postEn._id" 
                :postEn="postEn"
              /> 
            </div>
          </div>
          <div v-else-if="locale.code === 'ru'" >
            <div class="blog__blocks">
              <Blog 
                v-for="postRu in postsRu" 
                :key="postRu._id" 
                :postRu="postRu"
              /> 
            </div>
          </div>
          <div v-else-if="locale.code === 'kz'"> 
            <div class="blog__blocks">
              <Blog 
                v-for="postKz in postsKz" 
                :key="postKz._id" 
                :postKz="postKz"
              /> 
            </div>
          </div>
        </div>
      </div>
    </section>
    <Contacts />
  </div>
</template>

<script>
import Wrapper from '@/components/Wrapper'
import WhyCyprus from '@/components/Why-cyprus'
import Useful from '@/components/Useful'
import About from '@/components/About'
import Reviews from '@/components/Reviews'
import Blog from '@/components/Blog'
import Contacts from '@/components/Contacts'
import axios from 'axios'
export default {
  components: {
    Wrapper,
    WhyCyprus,
    Useful,
    About,
    Blog,
    Reviews,
    Contacts
  },
  data: () => ({
    activeButton: '',
  }),
  async asyncData() {
    const postsEn = await axios.get('http://localhost:3000/RealCyprus/posts/')
    const postsRu = await axios.get('http://localhost:3000/RealCyprus/postrus/')
    const postsKz = await axios.get('http://localhost:3000/RealCyprus/postkzs/')
    return {postsEn: postsEn.data, postsRu: postsRu.data, postsKz: postsKz.data}
  },
  computed: {
    thisShowLocales() {
      return this.$i18n.locales.filter(locale => locale.code == this.$i18n.locale)
    }
  }
}
</script>

<style>

</style>
