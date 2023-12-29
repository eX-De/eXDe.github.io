<script setup>
import BookComponent from "./BookComponent.vue";

let handleJump = (val) => {
  window.location.href = val
}

const books = [
  {
    book_id: 'deep-learning-from-scratch',
    img_url: 'BookPage/Deep_Learning_From_Scratch.png',
    link1: 'https://www.amazon.co.jp/-/en/%E6%96%8E%E8%97%A4-%E5%BA%B7%E6%AF%85/dp/4873117585/',
    enable_link2: true,
    link2: 'https://item.jd.com/13288842.html'
  },
  {
    book_id: 'brief-history-ai',
    img_url: 'BookPage/brief_history_AI.png',
    link1: 'https://item.jd.com/12786423.html',
    enable_link2: false,
    link2: ''
  },
  {
    book_id: 'the-foundations-of-science',
    img_url: 'BookPage/foundations_of_science.png',
    link1: 'https://www.amazon.com/Foundations-Science-Hypothesis-Value-Method-ebook/dp/B00AQMLHYA/',
    enable_link2: true,
    link2: 'https://item.jd.com/10029269419170.html'
  },
  {
    book_id: 'elementary-mathematics-from-higher-standpoint',
    img_url: 'BookPage/elementary_mathematics_from_higher_standpoint.png',
    link1: 'https://www.amazon.com/Elementary-Mathematics-Higher-Standpoint-Arithmetic-ebook/dp/B01JAK4LTQ/',
    enable_link2: true,
    link2: 'https://item.jd.com/12762005.html'
  },
  {
    book_id: 'mathematical-statistics',
    img_url: 'BookPage/mathematical_statistics.png',
    link1: 'https://www.amazon.com/Mathematical-Statistics-Selected-Volumes-Statistical-ebook/dp/B07YYN1P22/',
    enable_link2: false,
    link2: ''
  },
  {
    book_id: 'elementary-linear-algebra',
    img_url: 'BookPage/elementary_linear_algebra.png',
    link1: 'https://www.amazon.com/Elementary-Linear-Algebra-Applications-Version-ebook/dp/B07ZN7JCKL/',
    enable_link2: false,
    link2: ''
  },
]
</script>

<template>
<div class="tab-root">
<book-component
    v-for="(book, index) in books"
    :book_id="book.book_id"
    :img_url="book.img_url"
    :title="$t('bookpage.books[' + index + '].title')"
    :description="$t('bookpage.books[' + index + '].description')"
    :link1="book.link1"
    :link1_des="$t('bookpage.books[' + index + '].link1_des')"
    :enable_link2="book.enable_link2"
    :link2="book.link2"
    :link2_des="$t('bookpage.books[' + index + '].link2_des')"
></book-component>
</div>
</template>

<style scoped>
</style>