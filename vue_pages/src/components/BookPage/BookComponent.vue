<script setup>
const props = defineProps(['book_id', 'img_url', 'title', 'description', 'link1', 'link1_des', 'link2', 'link2_des', 'enable_link2'])
let handleJump = (val) => {
  window.location.href = val
}
</script>

<template>
  <t-card class="book" :id="book_id">
    <div class="card-content">
      <img class="book-img" :src="img_url"/>
      <div class="book-info">
        <div class="book-title">{{title}}</div>
        <div class="book-description">{{description}}</div>
      </div>
    </div>
    <template #footer>
      <t-row :align="'middle'" justify="end" style="gap: 24px">
        <t-col flex="auto" style="display: inline-flex; justify-content: end; column-gap: 12px">
          <t-button variant="text" @click="handleJump(link1)" size="large">
            <t-icon name="link"></t-icon>{{link1_des}}
          </t-button>
          <t-button variant="text" @click="handleJump(link2)" size="large" v-if="enable_link2">
            <t-icon name="link"></t-icon>{{link2_des}}
          </t-button>
        </t-col>
      </t-row>
    </template>
  </t-card>
</template>

<style scoped>
.book{
  width: 100%;
  min-width: 600px;
  margin-bottom: 24px;
  break-inside: avoid;
}
.card-content{
  width: 100%;
  display: flex;
  column-gap: 24px;
}
.book-img{
  width: 160px;
  height: 200px;
  object-fit: contain;
}
.book-info{
  width: calc(100% - 184px);
  height: 200px;
}
.book-title{
  font-size: 20px;
  font-weight: bold;
  margin-top: 12px;
  margin-bottom: 12px;
}
.book-description{
  font-size: 18px;
  text-align: start;
}
</style>