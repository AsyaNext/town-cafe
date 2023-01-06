<template>
  <header class="header">
    <div class="header__wrapper container">
      <img class="header__logo" src="../assets/icons/logo.svg" alt="logo" />
      <ul class="header__nav">
        <li><a href="#about">О нас</a></li>
        <li><a href="#delivery">Самовывоз и оплата</a></li>
        <li><a href="#menu">Меню</a></li>
        <li><a href="#news">Новости</a></li>
        <li><a href="#cafe">О заведениях</a></li>
        <li><a href="#contacts">Наши контакты</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 73px;
  background-color: #FFFFFF;
  z-index: 2;
  box-sizing: border-box;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__nav {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    gap: 40px;

    li a {
      font-weight: 300;
      font-size: 1.5rem;
      line-height: 2rem;
      cursor: pointer;
      color: #616161;
      text-decoration: none;
      @media (max-width: 1024px) {
        font-size: 1.125rem;
      }

      &:hover {
        color: #06092A;
      }
    }
  }
}
</style>
