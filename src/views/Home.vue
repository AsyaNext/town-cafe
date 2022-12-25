<template>
  <div class="home">
    <SectionBanner />
    <SectionDelivery />
    <SectionMenu />
    <SectionNews :display-width="displayWidth" />
    <SectionInfo />
    <SectionCafe />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import SectionBanner from '../components/home/SectionBanner'
import SectionDelivery from '../components/home/SectionDelivery'
import SectionMenu from '../components/home/SectionMenu'
import SectionNews from '../components/home/SectionNews'
import SectionInfo from '../components/home/SectionInfo'
import SectionCafe from '../components/home/SectionCafe'
export default {
  name: 'Home',
  components: {
    SectionCafe,
    SectionInfo,
    SectionNews,
    SectionMenu,
    SectionDelivery,
    SectionBanner
  },
  computed: {
    displayWidth () {
      return document.body.clientWidth
    }
  }
}
</script>
