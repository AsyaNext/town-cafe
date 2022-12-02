<template>
  <section class="news container">
    <div class="news__headline">
      <img src="../../assets/icons/icon-news.svg" alt="news-icon" />
      <div class="news__headline-title">News</div>
    </div>
    <div class="news__slider">
      <carousel ref="myCarousel" :items-to-show="3" :wrap-around="true">
        <slide v-for="i in 9" :key="i">
          <CardNews :news="news[i - 1].content" :slide="(i + 1) % 3 === 0 ? 3 : (i + 1) % 3" />
        </slide>
      </carousel>
      <div class="news__slider-pagination">
        <button
          v-for="i in 9"
          :key="i"
          :class="{ 'button--active': slide === i - 1 }"
          @click="paginate(i - 1)"
        >
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import CardNews from '../CardNews'
import { Carousel, Slide } from 'vue3-carousel'
export default {
  name: 'SectionNews',
  components: {
    CardNews,
    Carousel,
    Slide
  },
  data: () => ({
    slide: 0,
    news: [
      { content: '<span class="text-bold">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Diam massa commodo pharetra id ultricies vitae. Aliquam elementum tristique consectetur eu nunc, mattis velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam massa commodo pharetra id ultricies vitae. Aliquam elementum tristique consectetur eu nunc, mattis velit.' },
      { content: '<span class="text-bold">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Diam massa commodo pharetra id ultricies vitae.Aliquam elementum tristique consectetur eu nunc, mattis velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Diam massa commodo pharetra id ultricies vitae.' },
      { content: '<span class="text-bold">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Diam massa commodo pharetra id ultricies vitae. Aliquam elementum tristique consectetur eu nunc, mattis velit. Lorem ipsum dolor sit amet,consectetur adipiscing elit.' },
      { content: '<span class="text-bold">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Diam massa commodo pharetra id ultricies vitae. Aliquam elementum tristique consectetur eu nunc, mattis velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam massa commodo pharetra id ultricies vitae. Aliquam elementum tristique consectetur eu nunc, mattis velit.' },
      { content: '<span class="text-bold">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Diam massa commodo pharetra id ultricies vitae.Aliquam elementum tristique consectetur eu nunc, mattis velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Diam massa commodo pharetra id ultricies vitae.' },
      { content: '<span class="text-bold">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Diam massa commodo pharetra id ultricies vitae. Aliquam elementum tristique consectetur eu nunc, mattis velit. Lorem ipsum dolor sit amet,consectetur adipiscing elit.' },
      { content: '<span class="text-bold">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Diam massa commodo pharetra id ultricies vitae. Aliquam elementum tristique consectetur eu nunc, mattis velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam massa commodo pharetra id ultricies vitae. Aliquam elementum tristique consectetur eu nunc, mattis velit.' },
      { content: '<span class="text-bold">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Diam massa commodo pharetra id ultricies vitae.Aliquam elementum tristique consectetur eu nunc, mattis velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Diam massa commodo pharetra id ultricies vitae.' },
      { content: '<span class="text-bold">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Diam massa commodo pharetra id ultricies vitae. Aliquam elementum tristique consectetur eu nunc, mattis velit. Lorem ipsum dolor sit amet,consectetur adipiscing elit.' }
    ]
  }),
  methods: {
    paginate (slide) {
      this.slide = slide
      this.$refs.myCarousel.slideTo(slide)
    }
  }
}
</script>

<style scoped lang="scss">
.carousel__slide {
  padding: 0 40px;
}
.news {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  &__headline {
    text-align: center;
    margin-bottom: 30px;
    &-title {
      font-size: 36px;
      line-height: 160.02%;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
  }
  &__slider {
    max-width: 1300px;
    width: 100%;
    &-pagination {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      gap: 20px;
      button {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #F3F3F3;
        cursor: pointer;
        border: none;
      }
      .button--active {
        background-color: #CCCCCC;
      }
    }
  }
}
</style>
