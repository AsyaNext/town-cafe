<template>
  <section id="about" class="banner container">
    <div class="banner__info">
      <h1 class="banner__info-title">Лучшие столовые Костромской области!</h1>
      <div class="banner__info-content info-content">
        <div class="info-content__description">Cтараемся для вас!  Свежая выперчка каждый день! Акции на новые блюда каждый день.</div>
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
      <carousel ref="myCarousel" :autoplay="3000" :items-to-show="1" @slide-end="setActiveSlide" :wrap-around="true">
        <slide v-for="slide in 3" :key="slide">
          <div
            class="banner__slide"
            :style="{ backgroundImage: `url(${require(`../../assets/images/banner-image${slide}.png`)})` }"
          ></div>
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
      { title: 'Довольных клиентов', value: '100%' },
      { title: 'Столовых в сети', value: '10+' },
      { title: 'Посещаемость', value: '1500+' }
    ]
  }),
  methods: {
    paginate (slide) {
      this.slide = slide
      this.$refs.myCarousel.slideTo(slide)
    },
    setActiveSlide (data) {
      this.slide = data.currentSlideIndex
      this.$refs.myCarousel.slideTo(data.currentSlideIndex)
    }
  }
}
</script>

<style scoped lang="scss">
.banner {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin: 73px auto 0 !important;
  &__info {
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
    justify-content: center;
    padding-left: 60px;
    &-title {
      max-width: 650px;
      width: 100%;
      font-size: 3rem;
      line-height: 4.125rem;
      margin-bottom: 15px;
    }

    .info-content {
      &__description {
        max-width: 650px;
        width: 100%;
        font-size: 24px;
        line-height: 33px;
        margin-bottom: 80px;
      }
      &__list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-between;
        gap: 15px;
      }
      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        &-icon {
          margin-bottom: 38px;
        }
        &-title {
          font-size: 1.5rem;
          line-height: 33px;
          margin-bottom: 20px;
          text-align: center;
        }
        &-value {
          font-size: 4.5rem;
          line-height: 98px;
          @media (max-width: 1440px) {
            font-size: 3.5rem;
            line-height: 60px;
          }
        }
      }
    }
  }
  &__slider {
    position: relative;
    width: 50%;
    &-pagination {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 20px;
      display: flex;
      justify-content: center;
      gap: 16px;
      button {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #ECECEC;
        border: none;
        cursor: pointer;
      }
      .button--active {
        background-color: #FFCB7D;
      }
    }
    .carousel__slide {
      width: 100% !important;
    }
  }
  &__slide {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: calc(100vh - 73px);
  }
}
</style>
