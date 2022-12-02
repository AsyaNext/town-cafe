<template>
  <section class="banner container">
    <div class="banner__info">
      <h1 class="banner__info-title">Lorem ipsum lorem Lorem Ipsum</h1>
      <div class="banner__info-content info-content">
        <div class="info-content__description">Lorem ipsumLorem ipsum  Lorem ipsum Lorem ipsum</div>
        <div class="info-content__list">
          <div
            class="info-content__item"
            v-for="(item, index) in characteristics"
            :key="index"
          >
            <img class="info-content__item-icon" src="../../assets/icons/characteristic.svg" alt="characteristic-icon" />
            <span class="info-content__item-title">{{ item.title }}</span>
            <span class="info-content__item-value">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="banner__slider">
      <carousel ref="myCarousel" :items-to-show="1">
        <slide v-for="slide in 3" :key="slide">
          <img src="../../assets/images/banner-image.png">
        </slide>
      </carousel>
      <div class="banner__slider-pagination">
        <button
          v-for="i in 3"
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
import { Carousel, Slide } from 'vue3-carousel'
export default {
  name: 'SectionBanner',
  components: {
    Carousel,
    Slide
  },
  data: () => ({
    slide: 0,
    characteristics: [
      { title: 'Lorem ipsum', value: '11%' },
      { title: 'Lorem ipsum', value: '334+' },
      { title: 'Lorem ipsum', value: '25 000' }
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
.banner {
  display: flex;
  justify-content: space-between;
  &__info {
    margin: 75px 0 120px;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-title {
      font-size: 72px;
      line-height: 70px;
      margin-bottom: 140px;
    }

    .info-content {
      &__description {
        max-width: 430px;
        width: 100%;
        font-size: 24px;
        line-height: 33px;
        margin-bottom: 80px;
      }
      &__list {
        display: flex;
        justify-content: space-between;
      }
      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        &-icon {
          margin-bottom: 38px;
        }
        &-title {
          font-size: 24px;
          line-height: 33px;
          margin-bottom: 20px;
        }
        &-value {
          font-size: 72px;
          line-height: 98px;
        }
      }
    }
  }
  &__slider {
    position: relative;
    right: -60px;
    max-width: 700px;
    width: 100%;
    &-pagination {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 70px;
      display: flex;
      justify-content: center;
      gap: 16px;
      button {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: black;
        border: 2px solid #D9D9D9;
        cursor: pointer;
      }
      .button--active {
        background-color: #D9D9D9;
      }
    }
  }
}
</style>
