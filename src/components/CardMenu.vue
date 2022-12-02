<template>
  <div class="card-menu">
    <div class="card-menu__image">
      <img src="../assets/images/example-dish.png" alt="dish" />
      <div class="card-menu__image-gradient"></div>
      <div class="card-menu__image-caption caption">
        <span class="caption__weight">{{ dish.weight }}г.</span>
        <span class="caption__price">{{ dish.price }}р.</span>
      </div>
    </div>
    <div class="card-menu__title">{{ dish.title }}</div>
    <div class="card-menu__description">{{ dish.description }}</div>
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
    &-gradient, &-caption {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 4px;
      width: 100%;
    }
    &-gradient {
      height: 107px;
      background: linear-gradient(179.4deg, rgba(0, 0, 0, 0) 13.35%, rgba(0, 0, 0, 0.6) 76.96%);
    }
    .caption {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      &__weight, &__price {
        color: #FFFFFF;
      }
      &__weight {
        margin: 0 0 4px 8px;
        font-size: 20px;
        line-height: 160.02%;
      }
      &__price {
        margin: 0 8px 6px 0;
        font-size: 36px;
        line-height: 160.02%;
      }
    }
  }
  &__title {
    font-size: 30px;
    line-height: 160.02%;
  }
  &__description {
    font-size: 20px;
    line-height: 160.02%;
  }
}
</style>
