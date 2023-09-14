<script setup>
import https from "tdesign-icons-vue-next/lib/components/https.js";
import {IconFont} from "tdesign-icons-vue-next";
import LLMProblem from "../Papers/LLMProblem.vue";
import AIDaily from "../Projects/AIDaily.vue";
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
const handlePic = (url) => {
  return new URL(url, import.meta.url).href
}
const tool_sets = [
  {
    title: 'Artificial Intelligence',
    tools: [
      {
        name: 'Python',
        img_url: 'HomePage/tools/python.svg'
      },
      {
        name: 'PyTorch',
        img_url: 'HomePage/tools/pytorch.svg'
      },
      {
        name: 'Hugging Face Libs',
        img_url: 'HomePage/tools/huggingface.svg'
      },
    ]
  },
  {
    title: 'Web Development',
    tools: [
      {
        name: 'Vue 3',
        img_url: 'HomePage/tools/vue.svg',
      },
      {
        name: 'JavaScript',
        img_url: 'HomePage/tools/javascript.svg',
      },
      {
        name: 'CSS',
        img_url: 'HomePage/tools/css.svg',
      },
      {
        name: 'Figma',
        img_url: 'HomePage/tools/figma.svg',
      },
    ]
  },
  {
    title: 'Android Development',
    tools: [
      {
        name: 'Java',
        img_url: 'HomePage/tools/java.svg',
      }
    ]
  },
  {
    title: 'Others',
    tools: [
      {
        name: 'PowerPoint',
        img_url: 'HomePage/tools/powerpoint.svg',
      }
    ]
  }
]
let handleJump = (val) => {
  window.location.href = val
}
</script>

<template>
<div class="sub-root">
  <t-card class="card" :shadow="true" :bordered="false" style="text-align: left; background: linear-gradient(-45deg, var(--sunset-color) 1%, var(--td-bg-color-container) 13%)">
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
  <t-card class="card" :shadow="true" :bordered="false" style="text-align: left; background: linear-gradient(-45deg, var(--sunset-color) 1%, var(--td-bg-color-container) 13%)">
    <div class="title-bar" v-html="$t('homesubpage.tools.title')"></div>
    <div class="tool-set" v-for="set in tool_sets">
      <div class="tool-set-title">{{set.title}}</div>
      <div class="tool-set-content">
        <div class="tool" v-for="tool in set.tools">
          <img :src="tool.img_url" class="tool-img"/>
          <div class="tool-name">{{tool.name}}</div>
        </div>
      </div>

    </div>
  </t-card>
  <AIDaily></AIDaily>
  <LLMProblem></LLMProblem>
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
  min-width: 600px;
  margin-bottom: 24px;
  break-inside: avoid;
}
.tool-set{
  width: 100%;
  box-sizing: border-box;
  margin: 12px;
}
.tool-set-title{
  font-size: 18px;
  text-decoration: underline;
  margin: 16px 0;
}
.tool-set-content{
  column-count: 2;
}
.tool{
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  column-gap: 24px;
  box-shadow: var(--td-shadow-1);
  border-radius: 4px;
  box-sizing: border-box;
  padding-left: 12px;
  break-inside: avoid;
  margin-bottom: 24px;
}
.tool-img{
  width: 50px;
  height: 50px;
  object-fit: contain;
  object-position: center;
  margin-right: 24px;
}
.tool-name{
  font-size: 18px;
}
</style>