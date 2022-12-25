<template>
  <div class="card-menu">
    <div class="card-menu__image">
      <img src="../assets/images/example-dish.png" alt="dish" />
    </div>
    <div class="card-menu__caption">основное блюдо</div>
    <div class="card-menu__title">{{ dish.title }}</div>
    <div class="card-menu__weight">{{ dish.weight }} г</div>
    <div class="card-menu__price">{{ dish.price }} ₽</div>
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
  }
}
</script>

<style scoped lang="scss">
.card-menu {
  &__image {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
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
}
</style>
