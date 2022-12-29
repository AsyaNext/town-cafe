<template>
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__header">
        <img class="header__logo" src="../assets/icons/logo.svg" alt="logo" />
        <button @click="$emit('close')">
          <span></span>
        </button>
      </div>
      <div class="modal__map">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae3d5dd35fb7e7424901c9f60527ec4beb008821763feebba1c5a084dbd3ba6a3&amp;source=constructor" frameborder="0"></iframe>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalMap'
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
