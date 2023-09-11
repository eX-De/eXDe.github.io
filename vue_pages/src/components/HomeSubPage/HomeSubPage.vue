<script setup>
import https from "tdesign-icons-vue-next/lib/components/https.js";
import {IconFont} from "tdesign-icons-vue-next";
const zhihuUrl = 'http://at.alicdn.com/t/c/font_4245404_p8iiben5cw.js'
const coreModules = [
  'Linear Algebra',
  'Advanced Mathematics (Calculus)',
  'Intro to Program Construction',
  'Probability & Statistics',
  'Academic Writing',
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Operating Systems',
  'Discrete Mathematics',
  'Computer Networks',
  'Databases & Information Systems',
  'Distributed Systems',
  'Mobile Computing',
  'Object-Oriented Design',
  'Software Methodology',
  'Web Development',
  'Computer Graphics',
  'Information Retrieval',
  'System Design & Verification',
  'Software Systems Architecture',
  'Agile Processes',
  'Design Patterns',
  'Machine Learning',
  'AR & VR',
  'Performance of Computer Systems'
]
let handleJump = (val) => {
  window.location.href = val
}
</script>

<template>
<div class="sub-root">
  <t-card class="card" :shadow="true" :bordered="false" style="text-align: left">
    <div class="hello" v-html="$t('homesubpage.intro.hello')"></div>
    <div class="intro-main" v-html="$t('homesubpage.intro.main1')"></div>
    <t-collapse style="margin-bottom: 12px">
      <t-collapse-panel :header="$t('homesubpage.intro.coreCourseLearnt')">
        <t-list stripe style="max-height: 400px">
          <t-list-item v-for="(item, index) in coreModules" :key="`stripe${index}`">{{item}}</t-list-item>
        </t-list>
      </t-collapse-panel>
    </t-collapse>
    <div class="intro-main" v-html="$t('homesubpage.intro.main2')"></div>
    <div class="intro-main" v-html="$t('homesubpage.intro.main3')"></div>
  </t-card>
  <t-card class="card" :hover-shadow="true" :bordered="false" style="text-align: left">
    <div class="title-bar">
      <div class="label" v-html="$t('homesubpage.selectProj.label')"></div>
      <div class="title" v-html="$t('homesubpage.selectProj.title')"></div>
    </div>
    <div class="intro-main" v-html="$t('homesubpage.selectProj.intro1')"></div>
    <div class="intro-main" v-html="$t('homesubpage.selectProj.intro2')"></div>
    <img class="intro-img" src="../../assets/HomePage/AI%20Daily%20cover_midres.jpg"/>
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
  <t-card class="card" :hover-shadow="true" :bordered="false" style="text-align: left">
    <div class="title-bar">
      <div class="label" v-html="$t('homesubpage.selectPaper.label')"></div>
      <div class="title" v-html="$t('homesubpage.selectPaper.title')"></div>
    </div>
    <div class="intro-main" v-html="$t('homesubpage.selectPaper.intro1')"></div>
  </t-card>
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
.hello{
  font-size: 20px;
  margin: 12px 0 24px 0;
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
  max-width: 936px;
  min-width: 600px;
}
</style>