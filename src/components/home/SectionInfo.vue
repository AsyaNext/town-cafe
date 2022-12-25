<template>
  <section class="info">
    <div class="info__wrapper container">
      <img class="info__image" src="../../assets/images/info-image.png" alt="info-image" />
      <div class="info__content">
        <div class="info__description">
          Акции и скидки каждый день!
        </div>
        <div class="info__caption">При заказе от 1 500 Р в подарок вы получите бонусное блюдо из новой коллекции!
          Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionInfo'
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/vars";
.info {
  background-color: $brown-1;
  padding: 55px 0;
  &__wrapper {
    display: flex;
    gap: 60px;
    justify-content: space-between;
  }
  &__content {
    text-align: right;
  }
  &__description {
    font-weight: 500;
    font-size: 3rem;
    line-height: 66px;
    text-align: center;
    height: 100px;
  }
  &__caption {
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 33px;
  }
}
</style>
