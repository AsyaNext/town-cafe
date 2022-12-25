<template>
  <header class="header container">
    <img class="header__logo" src="../assets/icons/logo.svg" alt="logo" />
    <ul class="header__nav">
      <li>О нас</li>
      <li>Доставка и оплата</li>
      <li>Меню</li>
      <li>Новости</li>
      <li>О заведениях</li>
      <li>Наши контакты</li>
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
    gap: 40px;

    li {
      font-weight: 300;
      font-size: 1.5rem;
      line-height: 2rem;
      cursor: pointer;
      color: #616161;
      @media (max-width: 1024px) {
        font-size: 1.125rem;
      }
    }
  }
}
</style>
