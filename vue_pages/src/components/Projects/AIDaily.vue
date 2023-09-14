<script setup>
let handleJump = (val) => {
  window.location.href = val
}
</script>

<template>
  <t-card class="card" :hover-shadow="true" :bordered="false" style="text-align: left">
    <div class="title-bar">
      <div class="label" v-html="$t('homesubpage.selectProj.label')"></div>
      <div class="title" v-html="$t('homesubpage.selectProj.title')"></div>
    </div>
    <div class="intro-main" v-html="$t('homesubpage.selectProj.intro1')"></div>
    <div class="intro-main" v-html="$t('homesubpage.selectProj.intro2')"></div>
    <img class="intro-img" src="../../assets/HomePage/AI_Daily_cover_midres.jpg"/>
    <template #footer>
      <t-row :align="'middle'" justify="end" style="gap: 24px">
        <t-col flex="auto" style="display: inline-flex; justify-content: end">
          <t-button variant="text" shape="square" @click="handleJump('https://www.zhihu.com/people/ai-daily')" size="large">
            <t-icon name="link"></t-icon>
          </t-button>
        </t-col>
      </t-row>
    </template>
  </t-card>
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
.card{
  width: 100%;
  min-width: 600px;
  margin-bottom: 24px;
  break-inside: avoid;
}
</style>