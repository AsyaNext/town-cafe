<template>
  <footer class="footer">
    <div class="footer__wrapper container">
      <div class="footer__content">
        <ul class="nav">
          <li>Доставка</li>
          <li>О нас</li>
          <li>Отзывы</li>
          <li>О компании</li>
        </ul>
        <div class="phones">
          <span class="phones__title">Звони</span>
          <span class="phones__item">+7 953 660 0012</span>
          <span class="phones__cooperation">сотрудничество</span>
          <span class="phones__item">+7 953 660 0012</span>
        </div>
        <div class="social-networks">
          <span class="social-networks__title">Наши соц.сети</span>
          <div class="social-networks__list">
            <img src="../assets/icons/icon-vk.svg" alt="vk">
            <img src="../assets/icons/icon-insta.svg" alt="instagram">
            <img src="../assets/icons/icon-telegram.svg" alt="telegram">
          </div>
          <div class="social-networks__payment">
            <img src="../assets/icons/icon-mastercard.svg" alt="mastercard">
            <img src="../assets/icons/icon-paypal.svg" alt="paypal">
            <img src="../assets/icons/icon-apple-pay.svg" alt="apple-pay">
            <img src="../assets/icons/icon-visa.svg" alt="visa">
          </div>
        </div>
        <div class="address">
          <div class="address__name">
            <span>Адрес:</span>
            <div class="address__name-item">
              <span>{{ address }}</span>
              <img src="../assets/icons/icon-copy.svg" alt="icon-copy" @click="copyText" />
            </div>
          </div>
          <div class="address__map">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae3d5dd35fb7e7424901c9f60527ec4beb008821763feebba1c5a084dbd3ba6a3&amp;source=constructor" width="420" height="200" frameborder="0"></iframe>
          </div>
        </div>
      </div>
      <div class="footer__prod">made by SDP</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    address: 'Рабочий проспект ТЦ Семерка 2 этаж'
  }),
  methods: {
    copyText () {
      navigator.clipboard.writeText(this.address)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/vars";
.footer {
  padding-top: 56px;
  background-color: $brown-10;
  * {
    font-family: 'Jost', sans-serif;
    color: $white;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 26px;
    .nav {
      display: flex;
      flex-direction: column;
      gap: 20px;
      list-style-type: none;
      padding: 0;
      margin: 0;
      cursor: pointer;
      li {
        font-size: 24px;
        line-height: 35px;
        cursor: pointer;
      }
    }
    .phones {
      display: flex;
      flex-direction: column;
      &__title {
        font-size: 48px;
        line-height: 69px;
      }
      &__item {
        font-size: 24px;
        line-height: 35px;
        margin-bottom: 8px;
      }
      &__cooperation {
        font-size: 18px;
        line-height: 26px;
        color: $grey-3;
      }
    }
    .social-networks {
      &__title {
        font-size: 48px;
        line-height: 69px;
        margin-bottom: 6px;
      }
      &__list, &__payment {
        display: flex;
        align-items: center;
      }
      &__list {
        margin-bottom: 40px;
        gap: 25px;
        img {
          cursor: pointer;
        }
      }
      &__payment {
        gap: 16px;
      }
    }
    .address {
      &__name {
        font-size: 24px;
        line-height: 35px;
        margin-bottom: 8px;
        &-item {
          display: flex;
          gap: 5px;
          img {
            cursor: pointer;
            margin-top: -24px;
          }
        }
      }
      &__map {
        width: 420px;
        height: 200px;
        border-radius: 5px;
        overflow: hidden;
      }
    }
  }
  &__prod {
    padding: 10px 0;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
  }
}
</style>
