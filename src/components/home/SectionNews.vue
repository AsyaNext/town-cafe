<template>
  <section id="news" class="news container">
    <div class="news__headline">
      <img src="../../assets/icons/icon-news.svg" alt="news-icon" />
      <div class="news__headline-title">Новости</div>
    </div>
    <div class="news__slider">
      <carousel ref="myCarousel" :settings="settings" :breakpoints="breakpoints" @slide-end="setActiveSlide">
        <slide v-for="i in news.length" :key="i">
          <CardNews :news="news[i - 1].content" :slide="i % 3 === 0 ? 3 : i % 3" />
        </slide>
      </carousel>
      <div class="news__slider-pagination">
        <button
          v-for="i in news.length - 2"
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
  props: {
    displayWidth: {
      type: Number
    }
  },
  data: () => ({
    slide: 0,
    news: [
      {
        content: `Слайд 1: Утро должно начинаться с хорошего!
          Тогда и день задаётся! Спешите в новое кафе "Город" с утра, и удача сегодня вам обязательно улыбнётся!

          ТЦ "На Сенной", пр-т Мира, 33`
      },
      {
        content: 'Слайд 2: Все любят сельдь под шубой! Это незабываемый вкус на все времена. Приходите в новое кафе “Город” в ТЦ “На Сенной” и наслаждайтесь свежей и вкусной едой, это здорово!\n' +
          '\n' +
          'И напоминаем о приятной акции, которая действует ежедневно: скидка 30% на блюда меню с 18:00 до 20:00 ч.\n'
      },
      {
        content: 'Слайд 3: Время для счастья - сейчас. Место для счастья - здесь!Новое, красивое кафе с вкусной едой в самом сердце города - в ТЦ "На Сенной" - отличное место для завтрака, обеда и ужина.В кафе действуют скидки по карте "Адмирал"*, а после 18 ч - скидка 30% на блюда меню. Очень удобно взять готовую еду домой, и быть свободным для общения с близкими и отдыха.\n' +
          '\n' +
          '*Скидка по карте "Адмирал" действует до 30.11.22 г.\n'
      },
      {
        content: 'Слайд 4: Утро должно начинаться с хорошего! \n' +
          'Тогда и день задаётся! Спешите в новое кафе "Город" с утра, и удача сегодня вам \n' +
          'обязательно улыбнётся!\n' +
          '\n' +
          'ТЦ "На Сенной", пр-т Мира, 33\n'
      },
      {
        content: 'Слайд 5: Все любят сельдь под шубой! Это незабываемый вкус на все времена. Приходите в новое кафе “Город” в ТЦ “На Сенной” и наслаждайтесь свежей и вкусной едой, это здорово!\n' +
          '\n' +
          'И напоминаем о приятной акции, которая действует ежедневно: скидка 30% на блюда меню с 18:00 до 20:00 ч.\n'
      }
    ],
    settings: {
      itemsToShow: 1,
      snapAlign: 'start'
    },
    breakpoints: {
      769: {
        itemsToShow: 2,
        snapAlign: 'start'
      },
      1367: {
        itemsToShow: 3,
        snapAlign: 'start'
      },
      1920: {
        itemsToShow: 3,
        snapAlign: 'start'
      }
    }
  }),
  computed: {
    slideShow () {
      if (this.displayWidth > 1366) {
        return 3
      } else if (this.displayWidth <= 1366 && this.displayWidth > 768) {
        return 2
      } else {
        return 1
      }
    }
  },
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
    max-width: 1392px;
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
        background-color: #ECECEC;
        cursor: pointer;
        border: none;
      }
      .button--active {
        background-color: #FFCB7D;
      }
    }
  }
}
</style>
