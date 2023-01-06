<template>
  <footer id="contacts" class="footer">
    <div class="footer__wrapper container">
      <div class="footer__content">
        <div class="social-networks">
          <img src="../assets/icons/logo-footer.svg" alt="">
          <div class="social-networks__title">Соц.сети</div>
          <div class="social-networks__list">
            <a :href="socialNetworks.vk" target="_blank"><img src="../assets/icons/icon-vk.svg" alt="vk"></a>
            <a :href="socialNetworks.insta" target="_blank"><img src="../assets/icons/icon-insta.svg" alt="instagram"></a>
            <a href="" style="display: none" target="_blank"><img src="../assets/icons/icon-telegram.svg" alt="telegram"></a>
          </div>
          <div class="social-networks__payment">
            <img src="../assets/icons/icon-mastercard.svg" alt="mastercard">
            <img src="../assets/icons/icon-visa.svg" alt="visa">
            <img src="../assets/icons/icon-mir.svg" alt="mir">
          </div>
        </div>
        <div class="nav">
          <div class="nav__title">Навигация</div>
          <ul class="nav__list">
            <li v-for="(item, index) in navigation" :key="index">
              <a :href="item.link">{{ item.title }}</a>
            </li>
          </ul>
        </div>
        <div class="phones">
          <span class="phones__title">Звони</span>
          <span class="phones__item">
            <a :href="`tel:${phones.main.split(' ').join('')}`">{{ phones.main }}</a>
          </span>
          <span class="phones__cooperation">сотрудничество</span>
          <span class="phones__item">
            <a :href="`tel:${phones.cooperation.split(' ').join('')}`">{{ phones.cooperation }}</a>
          </span>
        </div>
        <div class="address">
          <div class="address__title">Адрес</div>
          <div class="address__list">
            <div class="address__item">
              <span class="address__item-name">Рабочий проспект ТЦ Семерка 2 этаж</span>
              <span class="address__item-link" @click="isOpenModal = true">
                <span>На карте</span>
                <img src="../assets/icons/icon-map.svg" alt="">
              </span>
            </div>
            <div class="address__item">
              <span class="address__item-name">Рабочий проспект ТЦ Семерка 2 этаж</span>
              <span class="address__item-link" @click="isOpenModal = true">
                <span>На карте</span>
                <img src="../assets/icons/icon-map.svg" alt="">
              </span>
            </div>
            <div class="address__item">
              <span class="address__item-name">Рабочий проспект ТЦ Семерка 2 этаж</span>
              <span class="address__item-link" @click="isOpenModal = true">
                <span>На карте</span>
                <img src="../assets/icons/icon-map.svg" alt="">
              </span>
            </div>
          </div>
          <ModalMap v-if="isOpenModal" @close="isOpenModal = false" />
<!--          <div class="address__map">-->
<!--            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae3d5dd35fb7e7424901c9f60527ec4beb008821763feebba1c5a084dbd3ba6a3&amp;source=constructor" width="420" height="200" frameborder="0"></iframe>-->
<!--          </div>-->
        </div>
      </div>
      <div class="footer__prod">
        <span>made by</span>
        <img src="../assets/icons/sdp.svg" alt="">
      </div>
    </div>
  </footer>
</template>

<script>
import ModalMap from './ModalMap'
export default {
  name: 'Footer',
  components: { ModalMap },
  data: () => ({
    address: 'Рабочий проспект ТЦ Семерка 2 этаж',
    isOpenModal: false,
    navigation: [
      { title: 'О нас', link: '#about' },
      { title: 'Самовывоз и оплата', link: '#delivery' },
      { title: 'Меню', link: '#menu' },
      { title: 'Новости', link: '#news' },
      { title: 'О заведениях', link: '#cafe' }
    ],
    phones: {
      main: '+7 953 660 0012',
      cooperation: '+7 953 660 0012'
    },
    socialNetworks: {
      vk: 'https://vk.com/kafe.gorod',
      insta: 'https://instagram.com/gorod.cafe?igshid=YWJhMjlhZTc='
    }
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
    color: $white;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 26px;
    .nav {
      &__title {
        font-size: 3rem;
        line-height: 70px;
        margin-bottom: 10px;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        list-style-type: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
        li a {
          font-size: 1.5rem;
          line-height: 33px;
          cursor: pointer;
          color: #B7B7B7;
          font-weight: 300;
          text-decoration: none;
          &:hover {
            color: #ffffff;
          }
        }
      }
    }
    .phones {
      display: flex;
      flex-direction: column;
      &__title {
        font-size: 3rem;
        line-height: 70px;
        margin-bottom: 10px;
      }
      &__item {
        margin-bottom: 15px;
        a {
          font-weight: 300;
          font-size: 1.5rem;
          line-height: 33px;
          cursor: pointer;
          text-decoration: none;
        }
      }
      &__cooperation {
        font-weight: 300;
        font-size: 1.5rem;
        line-height: 33px;
        color: $grey-3;
        margin-bottom: 15px;
      }
    }
    .social-networks {
      img {
        margin-bottom: 10px;
      }
      &__title {
        font-size: 3rem;
        line-height: 70px;
        margin-bottom: 16px;
        text-align: center;
      }
      &__list, &__payment {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &__list {
        margin-bottom: 20px;
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
      &__title {
        font-size: 3rem;
        line-height: 70px;
        margin-bottom: 10px;
      }
      &__list {
      }
      &__item {
        display: flex;
        flex-direction: column;
        &-name {
          font-size: 1.5rem;
          line-height: 33px;
          font-weight: 300;
        }
        &-link {
          display: flex;
          gap: 14px;
          span {
            font-size: 1.5rem;
            line-height: 33px;
            font-weight: 300;
            color: #FF5D29;
            cursor: pointer;
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
    display: flex;
    gap: 10px;
    justify-content: center;
    span {
      font-weight: 300;
      font-size: 2.25rem;
      line-height: 49px;
      text-transform: uppercase;
    }
  }
}
</style>
