<template>
  <section id="menu" class="menu container">
    <div class="menu__headline">
      <img src="../../assets/icons/icon-menu.svg" alt="menu-icon" />
      <div class="menu__headline-title">Меню</div>
    </div>
    <div class="menu__list">
      <CardMenu class="menu__item" v-for="(dish, index) in menu.items" :key="index" :dish="dish" />
    </div>
    <v-pagination
      v-model="currentPage"
      :pages="menu.totalCount / itemsOnPage"
      :range-size="1"
      active-color="#FFFFFF"
      :hideFirstButton="true"
      :hideLastButton="true"
      @update:modelValue="paginate"
    />
  </section>
</template>

<script>
import CardMenu from '../CardMenu'
import VPagination from '@hennge/vue3-pagination'
import '@hennge/vue3-pagination/dist/vue3-pagination.css'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SectionMenu',
  components: { CardMenu, VPagination },
  data: () => ({
    // dish: {
    //   title: 'Loren ipsum dolor',
    //   description: 'Loren ipsum dolor sit.',
    //   weight: 200,
    //   price: 255
    // },
    currentPage: 1,
    itemsOnPage: 20
  }),
  computed: {
    ...mapGetters(['menu'])
  },
  methods: {
    ...mapActions(['getMenu']),
    paginate () {
      // Добавить обновление меню
      window.location.href = '#menu'
      this.getMenu([this.currentPage - 1, this.itemsOnPage])
    }
  },
  created () {
    this.getMenu([])
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/vars";
.menu {
  margin: 60px auto 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__headline {
    text-align: center;
    img {
      margin-bottom: 18px;
    }
    &-title {
      font-size: 36px;
      line-height: 160.02%;
      text-transform: uppercase;
      color: $brown-9;
      margin-bottom: 20px;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-around;
    flex-wrap: wrap;
    column-gap: 42px;
    row-gap: 30px;
    margin-bottom: 60px;
  }
  &__item {
    max-width: 315px;
    width: 100%;
  }
  &__btn {
    outline: none;
    border: none;
    width: 160px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    font-size: 18px;
    line-height: 160.02%;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    }
  }
}
.Pagination {
  .Page {
    width: 42px !important;
    height: 42px !important;
    font-size: 20px !important;
    &:hover {
      border: none;
      background-color: rgba(0, 0, 0, 0.05) !important;
    }
  }
  .Page-active {
    border-color: #FF5D29 !important;
    color: #FF5D29;
    &:hover {
      background-color: #FFE2D9 !important;
    }
  }
}
</style>
