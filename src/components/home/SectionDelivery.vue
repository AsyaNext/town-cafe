<template>
  <section class="delivery">
    <div class="delivery__wrapper container">
      <div class="delivery__content">
        <div class="delivery__description">
          <span class="text-medium">Cafe GOROD</span> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam massa commodo pharetra id ultricies vitae. Aliquam elementum tristique consectetur eu nunc, mattis velit.Aliquam element velit. Aliquam elementum tristique consectetur eu nunc, mattis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Diam massa commodo phar. Aliquam ele  mattis velit.
          Aliquam elementum tristique consectetur eu nuAliquam elementum tristique consectetur eu nunc, mattis velit.Aliquam element velit.Aliquam elementum tristique consectetur eu nunc.
        </div>
        <div class="delivery__list">
          <div
            class="delivery__item"
            v-for="(item, index) in deliveryItems"
            :key="index"
          >
            <span class="delivery__item-title">{{ item.title }}</span>
            <span class="delivery__item-description">{{ item.description }}</span>
          </div>
        </div>
      </div>
      <div class="delivery__cards">
        <div class="delivery__card">
          <div class="delivery__card-title text-right">Loren ipsum aliquam elementum</div>
          <img class="delivery__card-image" src="../../assets/images/delivery-image1.svg" alt="delivery icon" />
        </div>
        <div class="delivery__card">
          <div class="delivery__card-title">Loren ipsum aliquam elementum</div>
          <img class="delivery__card-image" src="../../assets/images/delivery-image2.svg" alt="delivery icon" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionDelivery',
  data: () => ({
    deliveryItems: [
      {
        title: 'Loren ipsum',
        description: 'Diam massa commodo phar. Aliquam ele  mattis velit.Aliquam elementum tristique  nunc, ipsum dolor sit amet.'
      },
      {
        title: 'Loren ipsum',
        description: 'Diam massa commodo phar. Aliquam ele  mattis velit.Aliquam elementum.'
      },
      {
        title: 'Loren ipsum',
        description: 'Diam massa commodo phar. Aliquam ele  mattis velit.'
      }
    ]
  })
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/vars";
.delivery {
  position: relative;
  top: -55px;
  background-color: $brown-1;
  padding: 100px 0 65px;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 90px;
  }
  &__description {
    max-width: 737px;
    width: 100%;
    font-size: 18px;
    line-height: 160.02%;
    margin-bottom: 100px;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    max-width: 950px;
    width: 100%;
    background-color: $orange-1;
    padding: 18px 20px 25px;
    box-sizing: border-box;
  }
  &__item {
    display: flex;
    flex-direction: column;
    max-width: 250px;
    width: 100%;
    &-title {
      font-weight: 500;
      font-size: 18px;
      line-height: 160.02%;
      margin-bottom: 10px;
    }
    &-description {
      font-size: 14px;
      line-height: 130.02%;
      color: $brown-3;
    }
  }

  &__cards {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 97px;
  }
  &__card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 170px;
    box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.3);
    &-title {
      max-width: 270px;
      width: 100%;
      font-size: 20px;
      line-height: 124.02%;
      padding: 12px;
    }
    .text-right {
      align-self: flex-end;
    }
    &-image {
      position: relative;
      bottom: 20px;
      right: 15px;
    }
  }
}
</style>
