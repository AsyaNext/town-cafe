<template>
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__header">
        <img class="header__logo" src="../assets/icons/logo.svg" alt="logo" />
        <button @click="$emit('close')">
          <span></span>
        </button>
      </div>
      <div id="yandex-map" class="modal__map"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalMap',
  props: {
    coords: {
      type: Array,
      required: true
    }
  },
  created () {
    const scriptYandexMap = document.createElement('script')
    scriptYandexMap.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?lang=ru_RU')
    document.head.appendChild(scriptYandexMap)
    scriptYandexMap.addEventListener('load', this.initializeYandexMap)
  },
  methods: {
    initializeYandexMap () {
      // eslint-disable-next-line no-undef
      ymaps.ready(() => {
        // eslint-disable-next-line no-undef
        this.map = new ymaps.Map('yandex-map', {
          center: this.coords,
          zoom: 17,
          controls: ['fullscreenControl'],
          searchControlProvider: 'yandex#search'
        })
        this.map.behaviors.disable('scrollZoom')
        this.setMarkers()
        // this.coordinates.then(() => this.setMarkers());
      })
    },
    setMarkers () {
      // eslint-disable-next-line no-undef
      const placemark = new ymaps.Placemark(this.coords)
      this.map.geoObjects.add(placemark)
    }
  }
}
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  &__wrapper {
    height: 80%;
    width: 80%;
    background-color: #FFFFFF;
  }
  &__header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background-color: #ffffff;
    box-sizing: border-box;
    button {
      border: none;
      outline: none;
      width: 32px;
      height: 32px;
      background: #FF5D29;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      span {
        width: 15px;
        height: 5px;
        background-color: #FFFFFF;
      }
    }
  }
  &__map {
    width: 100%;
    height: 100%;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
