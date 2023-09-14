<script setup>
import {useRouter} from "vue-router";

let currentTab = "0";
const router = useRouter();
let handleMenu = (to, id) => {
  router.push(to)
  currentTab = id
}
</script>

<template>
  <div class="book-root">
    <t-head-menu v-model:value="currentTab">
      <t-menu-item value="0" @click="handleMenu('/bookshelf/books', '0')"> {{$t('bookpage.tab.books')}} </t-menu-item>
      <t-menu-item value="1" @click="handleMenu('/bookshelf/papers', '1')"> {{$t('bookpage.tab.papers')}} </t-menu-item>
      <t-menu-item value="2" @click="handleMenu('/bookshelf/webpages', '2')"> {{$t('bookpage.tab.webpages')}} </t-menu-item>
    </t-head-menu>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.book-root{
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
}
.tab{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  column-gap: 24px;
}
.t-head-menu{
  background-color: var(--td-bg-color-container) !important;
  border-radius: 4px !important;
}
.t-head-menu .t-menu__item{
  font-size: 18px !important;
  height: 40px !important;
}
</style>