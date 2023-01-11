<template>
  <section id="cafe" class="cafe container">
    <div class="cafe__content">
      <div class="cafe__icon">
        <img src="../../assets/icons/icon-cafe.svg" alt="cafe-icon" />
      </div>
      <div class="cafe__title">
        Столовые высочайшего качества
      </div>
      <div class="cafe__description">
        <span>{{ showText }}</span>
      </div>
      <div class="cafe__more" @click="mode === 'hide' ? mode = 'show' : mode = 'hide'">
        <span>{{ mode === 'hide' ? 'Подробнее' : 'Скрыть' }}</span>
        <img src="../../assets/icons/arrow-yellow.svg" alt="arrow-yellow" :style="{ transform : mode === 'show' ? 'rotate(180deg)' : 'rotate(0deg)' }" />
      </div>
    </div>
    <img class="cafe__image" src="../../assets/images/cafe-image.png" alt="cafe-image" />
  </section>
</template>

<script>
export default {
  name: 'SectionCafe',
  data: () => ({
    text: 'При заказе от 1 500 Р в подарок вы получите бонусное блюдо из новой коллекции!' +
      'Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции.' +
      'Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции.' +
      'Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции.' +
      'Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции.' +
      'Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции.' +
      'Условие акции. Условие акции. Условие акции. Условие акции. Условие акции. Условие акции.' +
      'Условие акции. Условие акции.',
    mode: 'hide'
  }),
  computed: {
    showText () {
      let partText = this.text.split(' ').slice(0, this.mode === 'hide' ? 50 : 500).join(' ')
      if (partText.length > 50 && this.mode === 'hide') {
        partText += '...'
      }
      return partText
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/vars";
.cafe {
  padding: 95px 0 100px;
  display: flex;
  justify-content: center;
  &__content {
    width: 50%;
    margin-bottom: 50px;
  }
  &__icon {
    max-width: 600px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
  }
  &__title {
    max-width: 662px;
    width: 100%;
    font-size: 3rem;
    line-height: 117.02%;
    margin-bottom: 15px;
    text-align: center;
  }
  &__description {
    max-width: 600px;
    width: 100%;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 116.02%;
    margin-bottom: 20px;
  }
  &__more {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    span {
      font-size: 1.125rem;
      line-height: 94.52%;
      color: $orange-4;
    }
    img {
      margin-bottom: -4px;
    }
  }
  &__image {
  }
}
</style>
