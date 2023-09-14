<script setup>
import { MessagePlugin } from 'tdesign-vue-next';
let handleQR = () => {
  const link = document.createElement('a');


  try {
    link.href = '/HomePage/QRcode.png';
    link.download = 'eXDe_homepage.png'; // 如果不提供文件名，将使用 'image.jpg' 作为默认值
    link.click(); // 触发下载
    link.remove(); // 清理创建的元素
    MessagePlugin.info('Download QR Code successfully')
  }catch (err){
    MessagePlugin.error('Failed to download QR Code')
  }
}
let handleLink = () => {
  try{
    navigator.clipboard.writeText('eXDe.github.io')
    MessagePlugin.info('Link copied')
  } catch (err) {
    MessagePlugin.error('Failed to copy link')
  }
}
</script>

<template>
  <div class="share-root">
    <t-button style="height: 40px" theme="default" variant="text" @click="handleQR">download QR Code</t-button>
    <t-button style="height: 40px" theme="default" variant="text" @click="handleLink">Copy Link</t-button>
  </div>
</template>

<style scoped>
.share-root{
  display: flex;
  flex-direction: column;
}
</style>