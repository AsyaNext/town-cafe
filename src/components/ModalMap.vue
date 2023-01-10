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
      <div class="modal__addresses">
        <div
          class="modal__addresses-item"
          v-for="(item, index) in addresses"
          :key="index"
          @click="rerenderMap(item)"
        >
          <img class="modal__addresses-icon" src="../assets/icons/point-map.svg" alt="point-map"/>
          <div class="modal__addresses-title">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ModalMap',
  props: {
    coords: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    localCoords: []
  }),
  computed: {
    ...mapGetters(['addresses'])
  },
  created () {
    this.localCoords = this.coords
    const scriptYandexMap = document.createElement('script')
    scriptYandexMap.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?lang=ru_RU')
    document.head.appendChild(scriptYandexMap)
    scriptYandexMap.addEventListener('load', this.initializeYandexMap)
  },
  methods: {
    rerenderMap (address) {
      const myMap = document.getElementById('yandex-map')
      myMap.innerHTML = ''
      this.localCoords = [address.lat, address.long]
      this.initializeYandexMap()
    },
    initializeYandexMap () {
      // eslint-disable-next-line no-undef
      ymaps.ready(() => {
        // eslint-disable-next-line no-undef
        this.map = new ymaps.Map('yandex-map', {
          center: this.localCoords,
          zoom: 17,
          controls: ['zoomControl'],
          searchControlProvider: 'yandex#search'
        })
        this.map.behaviors.disable('scrollZoom')
        this.setMarkers()
        // this.coordinates.then(() => this.setMarkers());
      })
    },
    setMarkers (coords) {
      // eslint-disable-next-line no-undef
      const placemark = new ymaps.Placemark(this.localCoords, {}, {
        preset: 'islands#circleDotIcon',
        iconColor: '#ff0000'
      })
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
    position: relative;
    top: -30px;
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
  }
  &__addresses {
    position: absolute;
    width: 345px;
    height: 90%;
    right: 30px;
    top: 70px;
    background: rgba(255, 255, 255, 0.75);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    &-item {
      width: 100%;
      box-sizing: border-box;
      padding: 15px;
      display: flex;
      align-items: center;
      gap: 15px;
      cursor: pointer;
      &:hover {
        background-color: #FFE2D9;
      }
    }
    &-title {
      font-size: 1rem;
      line-height: 22px;
    }
  }
}
</style>
