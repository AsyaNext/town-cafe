<template>
  <div class="card-news">
    <div class="card-news__content" v-html="news"></div>
    <img class="card_news__image" :class="{ 'card-news__image--second' : slide === 2 }" :src="require(`../assets/images/news-image${slide}.svg`)" alt="news-image" />
  </div>
</template>

<script>
export default {
  name: 'CardNews',
  props: {
    news: {
      type: String,
      default: ''
    },
    slide: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped lang="scss">
.card-news {
  margin: 10px 0;
  width: 356px;
  height: 524px;
  padding: 25px;
  box-shadow: 0 0 10px 0 #A7A7A7;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__content {
    font-size: 18px;
    line-height: 160.02%;
    text-align: left;
  }
  &__image {
    align-self: flex-end;
    &--second {
      width: 70%;
      align-self: flex-end;
    }
  }
}
</style>
