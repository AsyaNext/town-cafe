<template>
  <div class="card-menu">
    <div class="card-menu__image">
      <img :src="dish.imagePath || require('../assets/images/default-dish.png')" alt="dish" />
    </div>
    <div class="card-menu__caption">{{ dish.type }}</div>
    <div class="card-menu__title">
      <span class="card-menu__title-text">{{ dish.name }}</span>
      <span
        ref="tooltip"
        class="card-menu__title-tooltip"
        :style="styleTooltip"
      >
        {{ dish.name }}
      </span>
    </div>
    <div class="card-menu__weight">{{ dish.weight }} г</div>
    <div class="card-menu__price">{{ dish.cost }} ₽</div>
  </div>
</template>

<script>
export default {
  name: 'CardMenu',
  props: {
    dish: {
      type: Object,
      required: true
    }
  },
  computed: {
    styleTooltip () {
      return { bottom: `-${this.$refs.tooltip?.clientHeight}`, right: `-${this.$refs.tooltip?.clientWidth}` }
    }
  }
}
</script>

<style scoped lang="scss">
.card-menu {
  padding: 10px;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
  &__image {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    width: 315px;
    height: 315px;
    img {
      object-fit: cover
    }
  }
  &__caption, &__weight {
    font-size: 1.125rem;
    line-height: 25px;
    color: #616161;
  }
  &__title, &__price {
    font-size: 1.5rem;
    line-height: 33px;
  }
  &__title {
    position: relative;
    &:hover {
      .card-menu__title-tooltip {
        opacity: 1;
      }
    }
    &-text {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &-tooltip {
      position: absolute;
      top: 80%;
      left: 50%;
      opacity: 0;
      z-index: 1;
      width: fit-content;
      max-width: 300px;
      min-width: 200px;
      background-color: #ffffff;
      border: 1px solid #000000;
      padding: 10px;
      font-size: 1rem;
      line-height: 22px;
      transition: .2s all ease-in-out;
    }
  }
}
</style>
