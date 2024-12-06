<script setup>
import selectedProj from "../SelectedComponents/SelectedProjCard.vue";
import ProjCard from "./ProjCard.vue"

const projs = [
  {
    proj_id: 'AIDaily',
    img_url: 'HomePage/AI_Daily_cover_midres.jpg',
    link: 'https://www.zhihu.com/people/ai-daily',
    enable_link: true
  }
]
</script>

<template>
<div class="sub-root">
  <selectedProj></selectedProj>
  <proj-card
    v-for="(proj, index) in projs"
    :proj_id="proj.proj_id"
    :img_url="proj.img_url"
    :title="$t('projpage.projects[' + index + '].title')"
    :intro1="$t('projpage.projects[' + index + '].intro1')"
    :intro2="$t('projpage.projects[' + index + '].intro2')"
    :link="proj.link"
    :enable_link="proj.enable_link"
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