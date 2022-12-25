<template>
  <section class="delivery">
    <div class="delivery__wrapper container">
      <div class="delivery__content">
        <div class="delivery__description">
          <span class="text-medium">Кафе ГОРОD</span> - Описание. Доставка и оплата. Очень длинный текст.
          Описание. Доставка и оплата. Очень длинный текст. Описание. Доставка и оплата.
          Очень длинный текст. Описание. Доставка и оплата. Очень длинный текст. Описание. Доставка и оплата. Очень длинный текст. Описание. Доставка и оплата. Очень длинный текст. Описание. Доставка и оплата.
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
          <div class="delivery__card-title text-right">Высокое качество блюд</div>
          <img class="delivery__card-image" src="../../assets/images/delivery-image1.svg" alt="delivery icon" />
        </div>
        <div class="delivery__card">
          <div class="delivery__card-title">Своевременная доставка в любую точку Костромы</div>
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
        title: 'Нас выбирают',
        description: 'Каждое наше блюдо готовится из отборных продуктов высокого качества.'
      },
      {
        title: 'Нас выбирают',
        description: 'Каждое наше блюдо готовится из отборных продуктов высокого качества.'
      },
      {
        title: 'Нас выбирают',
        description: 'Очень длинный текст. Очень длинный текст. Очень длинный текст. Очень длинный текст. Очень длинный текст. Очень длинный текст.Очень длинный.'
      }
    ]
  })
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/vars";
.delivery {
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
    font-size: 1.125rem;
    line-height: 160%;
    margin-bottom: 100px;
  }
  &__list {
    display: flex;
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
      font-size: 1.125rem;
      line-height: 160%;
      margin-bottom: 10px;
    }
    &-description {
      font-size: 0.875rem;
      line-height: 130%;
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
      max-width: 350px;
      width: 100%;
      font-size: 1.125rem;
      line-height: 124%;
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
