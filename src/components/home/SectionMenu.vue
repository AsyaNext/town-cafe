<template>
  <section class="menu container">
    <div class="menu__headline">
      <img src="../../assets/icons/icon-menu.svg" alt="menu-icon" />
      <div class="menu__headline-title">Меню</div>
    </div>
    <div class="menu__list">
      <CardMenu class="menu__item" v-for="i in 16" :key="i" :dish="dish" />
    </div>
    <button class="menu__btn">Показать ещё</button>
  </section>
</template>

<script>
import CardMenu from '../CardMenu'
export default {
  name: 'SectionMenu',
  components: { CardMenu },
  data: () => ({
    dish: {
      title: 'Loren ipsum dolor',
      description: 'Loren ipsum dolor sit.',
      weight: 200,
      price: 255
    }
  })
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/vars";
.menu {
  margin: 50px auto 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__headline {
    text-align: center;
    img {
      margin-bottom: 18px;
    }
    &-title {
      font-size: 36px;
      line-height: 160.02%;
      text-transform: uppercase;
      color: $brown-9;
      margin-bottom: 20px;
    }
  }
  &__list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    column-gap: 42px;
    row-gap: 30px;
    margin-bottom: 60px;
  }
  &__item {
    max-width: 307px;
    width: 100%;
  }
  &__btn {
    outline: none;
    border: none;
    width: 160px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    font-size: 18px;
    line-height: 160.02%;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
