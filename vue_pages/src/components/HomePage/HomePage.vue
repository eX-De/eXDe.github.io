<script setup>
import {useLangStore, useThemeStore} from '../../store.js'
import { useI18n } from 'vue-i18n'
import {useRouter} from "vue-router";
import { SunnyIcon, MoonIcon } from 'tdesign-icons-vue-next';
import {h, ref} from "vue";
import ShareModal from "./ShareModal.vue";
import {MessagePlugin} from "tdesign-vue-next";
const { locale } = useI18n()
  const langStore = useLangStore()
  let handleLang = () => {
    if (langStore.lang === 'zh'){
      console.log(locale.value)
      langStore.lang = 'en'
      console.log(locale.value)
      locale.value = 'en'
    }else {
      console.log(locale.value)
      langStore.lang = 'zh'
      console.log(locale.value)
      locale.value = 'zh'
    }
  }
  let handleGit = () =>{
    window.location.href = 'https://github.com/eX-De'
  }
  let renderShare = () => {
    return h(ShareModal)
  }
  let handleSchool = () => {
    if (langStore.lang === 'en') {
      window.location.href = 'https://english.bjut.edu.cn/'
    }else {
      window.location.href = 'https://www.bjut.edu.cn/'
    }
  }
  let handleEmail = () => {
    try{
      navigator.clipboard.writeText('wenbei.xie@ucdconnect.ie')
      MessagePlugin.info('Email copied')
    } catch (err) {
      MessagePlugin.error('Failed to copy email')
    }
  }
  let currentSubpage = "0"
  const router = useRouter()
  let handleHome = () => {
    router.push('/')
    currentSubpage = "0"
  }
  let handlePub = () => {
    router.push('/publications')
    currentSubpage = "1"
  }
  let handleProj = () => {
    router.push('/projects')
    currentSubpage = "2"
  }
  let handleBook = () => {
    router.push('/bookshelf')
    currentSubpage = "3"
  }
  const themeStore = useThemeStore()
  let isLightTheme = ref(themeStore.isLightTheme)
  if(themeStore.isLightTheme){
    document.documentElement.removeAttribute('theme-mode');
  }else {
    document.documentElement.setAttribute('theme-mode', 'dark');
  }
  let renderActiveContent = () =>{
  return h(SunnyIcon);
  }
  let renderInactiveContent = () =>{
    return h(MoonIcon);
  }
  let handleTheme = (v) => {
    if(v){
      themeStore.isLightTheme = false
      document.documentElement.removeAttribute('theme-mode');
      document.documentElement.removeAttribute('custom-theme');
    }else {
      themeStore.isLightTheme = true
      document.documentElement.setAttribute('theme-mode', 'dark');
      document.documentElement.setAttribute('custom-theme', 'dark');
    }
  }
</script>

<template>
  <div class="root">
    <div class="anchor">
      <div class="anchor_main">
        <img class="avatar" alt="avatar" src="../../assets/general/eXDe_avatar.png"/>
        <div class="name">{{ $t("homepage.anchor.name")}}</div>
        <div class="nick_name">{{ $t("homepage.anchor.nick_name")}}</div>
        <div class="base-info" @click="handleSchool" style="margin-bottom: 10px">
          <t-icon name="location" style="width: 20px; height: 20px; margin-right: 10px"/>
          {{ $t("homepage.anchor.school")}}
        </div>
        <t-popup :content="$t('homepage.anchor.clickCopy')"
                 trigger="hover" placement="bottom">
        <div class="base-info" @click="handleEmail" style="margin-bottom: 40px">
          <t-icon name="mail" style="width: 20px; height: 20px; margin-right: 10px"/>
          <p style="margin-right: 10px">wenbei.xie@ucdconnect.ie</p>
          <t-icon name="file-copy" style="width: 18px; height: 18px; color: var(--td-text-color-secondary)"/>
        </div>
        </t-popup>
        <t-menu v-model="currentSubpage">
          <t-menu-item value="0" @click="handleHome">
            <template #icon>
              <t-icon name="home"/>
            </template>
            {{ $t("homepage.anchor.menu.home")}}
          </t-menu-item>
          <t-menu-item value="1" @click="handlePub">
            <template #icon>
              <t-icon name="file-1"/>
            </template>
            {{ $t("homepage.anchor.menu.pub")}}
          </t-menu-item>
          <t-menu-item value="2" @click="handleProj">
            <template #icon>
              <t-icon name="folder-open"/>
            </template>
            {{ $t("homepage.anchor.menu.proj")}}
          </t-menu-item>
          <t-menu-item value="3" @click="handleBook">
            <template #icon>
              <t-icon name="book"/>
            </template>
            {{ $t("homepage.anchor.menu.book")}}
          </t-menu-item>
        </t-menu>
      </div>
    </div>
    <div class="right">
      <nav class="nav">
        <t-popup :content="renderShare" placement="bottom-right">
        <t-button variant="text" shape="circle" size="large" class="nav-action" style="height: 45px; width: 45px; font-size: 18px; margin-right: 24px">
          <template #icon>
            <t-icon name="share-1"/>
          </template>
        </t-button>
        </t-popup>
        <t-button variant="text" size="large" class="nav-action" @click="handleGit " style="height: 45px; font-size: 18px; margin-right: 10px">
          <template #icon>
            <t-icon name="logo-github"/>
          </template>
          Github
        </t-button>
        <t-button variant="text" size="large" class="nav-action" @click="handleLang" style="height: 45px; font-size: 18px; margin-right: 10px">
          <template #icon>
            <t-icon name="internet"/>
          </template>
          {{ $t("homepage.nav.language")}}
        </t-button>
        <t-switch v-model="isLightTheme" @change="handleTheme" size="large" :label="[renderActiveContent, renderInactiveContent]" style="margin-right: 10px"></t-switch>
      </nav>
      <div class="display">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<style scoped>
.root{
  width: 100vw;
  min-width: 1084px;
  height: 100vh;
  position: relative;
}
.right{
  float: right;
  min-width: 700px;
}
.nav{
  position: relative;
  left: 0;
  height: 60px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  flex-shrink: 0;
  min-width: 700px;
}
.nav-action .t-icon{
  width: 30px;
  height: 30px;
}

.t-menu .t-icon{
  width: 30px !important;
  height: 30px !important;
}
.t-menu__item{
  font-size: 16px !important;
  height: 40px !important;
  margin-bottom: 10px !important;
}
.anchor{
  width: 512px;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  height: 100%;
  background-color: var(--anchor-bg-color);
  float: left;
}

.anchor_main{
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar{
  width: 200px;
  height: 200px;
  border-radius: 100%;
}
.name{
  font-size: 36px;
  font-family: Damion;
}
.nick_name{
  font-size: 20px;
  font-style: italic;
  margin-bottom: 20px;
}
.base-info{
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: underline;
}
.display{
  width: calc(100vw - 512px);
  min-width: 700px;
  height: calc(100vh - 60px);
  overflow: auto;
}
@media screen and (max-width: 1536px) {
  .anchor{
    width: 384px;
  }
  .display{
    width: calc(100vw - 384px);
  }
}

</style>