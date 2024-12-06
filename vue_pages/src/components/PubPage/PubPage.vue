<script setup>

import SelectedPaper from "../SelectedComponents/SelectedPaper.vue";
import PaperCard from "./PaperCard.vue"
const papers = [
  {
    enable_link: true,
    link: 'https://arxiv.org/abs/2310.04039'
  }
]
</script>

<template>
<div class="sub-root">
  <selected-paper></selected-paper>
  <paper-card
    v-for="(paper, index) in papers"
    :title="$t('pubpage.papers[' + index + '].title')"
    :intro1="$t('pubpage.papers[' + index + '].intro1')"
    :link="paper.link"
    :enable_link="paper.enable_link"
    />
</div>
</template>

<style scoped>
.title-bar{
  display: flex;
  column-gap: 24px;
  align-items: center;
  font-size: 20px;
  margin: 12px 0 24px 0;
}
.label{
  background-color: var(--td-brand-color);
  line-height: 36px;
  padding: 0 12px;
  border-radius: 20px;
  color: var(--td-text-color-anti);
  font-size: 18px;
  text-wrap: nowrap;
}
.intro-main{
  font-size: 16px;
  margin-bottom: 12px;
}
.intro-img{
  width: 100%;
  border-radius: 12px;
}
</style>