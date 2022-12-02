<template>
  <section class="info">
    <div class="info__wrapper container">
      <div class="info__content">
        <div class="info__description">
          Diam massa commodo pharetra id ultricies vitae. Aliquam elementum tristique  nunc.Aliquam elementum tristique  nunc.
        </div>
        <div class="info__caption">Lorem ipsumLorem ipsum  Lorem ipsum Lorem ipsum</div>
      </div>
      <img class="info__image" src="../../assets/images/info-image.png" alt="info-image" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionInfo'
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/vars";
.info {
  background-color: $brown-1;
  padding: 55px 0;
  &__wrapper {
    display: flex;
  }
  &__content {
    max-width: 714px;
    width: 100%;
    margin-right: 66px;
  }
  &__description {
    font-weight: 500;
    font-size: 36px;
    line-height: 130.52%;
    margin: 60px 0 34px;
  }
  &__caption {
    max-width: 440px;
    width: 100%;
    font-size: 24px;
    line-height: 33px;
  }
}
</style>
