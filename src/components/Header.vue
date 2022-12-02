<template>
  <header class="header container">
    <img class="header__logo" src="../assets/icons/logo.svg" alt="logo" />
    <ul class="header__nav">
      <li>Доставка</li>
      <li>О нас</li>
      <li>Отзывы</li>
      <li>О компании</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
.header {
  height: 73px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__nav {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    width: 60%;

    li {
      font-size: 24px;
      cursor: pointer;
    }
  }
}
</style>
