<script setup>
import WebComponent from "./WebComponent.vue";

const webpages = [
  {
    link: 'https://yaofu.notion.site/Towards-Complex-Reasoning-the-Polaris-of-Large-Language-Models-c2b4a51355b44764975f88e6a42d4e75'
  }
]
</script>

<template>
  <div class="tab-root">
    <web-component
        v-for="(web, index) in webpages"
        :web_id="'web' + index"
        :title="$t('bookpage.webs[' + index + '].title')"
        :description="$t('bookpage.webs[' + index + '].description')"
        :link="web.link"
    ></web-component>
  </div>
</template>

<style scoped>
</style>