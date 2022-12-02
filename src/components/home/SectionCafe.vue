<template>
  <section class="cafe container">
    <div class="cafe__content">
      <div class="cafe__icon">
        <img src="../../assets/icons/icon-cafe.svg" alt="cafe-icon" />
      </div>
      <div class="cafe__title">
        Lorem ipsum dolor sit amet ? consectetur adipiscing elit.Lorem ipsum
        dolor sit amet consectetur adipiscing elit.
      </div>
      <div class="cafe__description">
        Lorem ipsum dolor sit amet consectetur adipiscing elit.
        Lorem ipsum dolor sit amet consectetur adipiscing elit.
        Lorem ipsum dolor sit amet consectetur adipiscing elit.Lorem ipsum dolor sit amet  elit.
        Lorem ipsum dolor sit amet consectetur 10 000.
      </div>
      <div class="cafe__more">
        <span>Подробнее</span>
        <img src="../../assets/icons/arrow-yellow.svg" alt="arrow-yellow" />
      </div>
    </div>
    <img class="cafe__image" src="../../assets/images/cafe-image.png" alt="cafe-image" />
  </section>
</template>

<script>
export default {
  name: 'SectionCafe'
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/vars";
.cafe {
  padding: 95px 0 100px;
  display: flex;
  &__content {
    width: 50%;
    margin-right: 50px;
  }
  &__icon {
    max-width: 600px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
  }
  &__title {
    max-width: 540px;
    width: 100%;
    font-size: 40px;
    line-height: 117.02%;
    margin-bottom: 34px;
  }
  &__description {
    max-width: 600px;
    width: 100%;
    font-weight: 200;
    font-size: 24px;
    line-height: 116.02%;
    margin-bottom: 60px;
  }
  &__more {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    span {
      font-size: 24px;
      line-height: 94.52%;
      color: $orange-4;
    }
    img {
      margin-bottom: -4px;
    }
  }
  &__image {
    margin-top: 40px;
  }
}
</style>
