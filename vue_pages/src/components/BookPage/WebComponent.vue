<script setup>
const props = defineProps(['web_id', 'title', 'description', 'link'])
let handleJump = (val) => {
  window.location.href = val
}
</script>

<template>
  <t-card class="web" :id="web_id">
    <div class="card-content">
      <div class="web-title">{{title}}</div>
      <div class="web-description">{{description}}</div>
    </div>
    <template #footer>
      <t-row :align="'middle'" justify="end" style="gap: 24px">
        <t-col flex="auto" style="display: inline-flex; justify-content: end; column-gap: 12px">
          <t-button variant="text" shape="square" @click="handleJump(link)" size="large">
            <t-icon name="link"></t-icon>
          </t-button>
        </t-col>
      </t-row>
    </template>
  </t-card>
</template>

<style scoped>
.web{
  width: 100%;
  min-width: 600px;
  margin-bottom: 24px;
  break-inside: avoid;
}
.card-content{
  width: 100%;
  column-gap: 24px;
}
.web-title{
  font-size: 20px;
  font-weight: bold;
  margin-top: 12px;
  margin-bottom: 12px;
}
.web-description{
  font-size: 18px;
  text-align: start;
}
</style>