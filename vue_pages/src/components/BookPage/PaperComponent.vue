<script setup>
const props = defineProps(['paper_id', 'title', 'abstract', 'description', 'link1', 'link2', 'enable_link2'])
let handleJump = (val) => {
  window.location.href = val
}
</script>

<template>
  <t-card class="paper" :id="paper_id">
    <div class="card-content">
      <div class="paper-title">{{title}}</div>
      <div class="paper-abs">{{abstract}}</div>
      <div class="paper-description">{{description}}</div>
    </div>
    <template #footer>
      <t-row :align="'middle'" justify="end" style="gap: 24px">
        <t-col flex="auto" style="display: inline-flex; justify-content: end; column-gap: 12px">
          <t-button variant="text" shape="square" @click="handleJump(link1)" size="large">
            <t-icon name="link"></t-icon>
          </t-button>
          <t-button variant="text" shape="square" @click="handleJump(link2)" size="large" v-if="enable_link2">
            <t-icon name="download"></t-icon>
          </t-button>
        </t-col>
      </t-row>
    </template>
  </t-card>
</template>

<style scoped>
.paper{
  width: 100%;
  min-width: 600px;
  margin-bottom: 24px;
  break-inside: avoid;
}
.card-content{
  width: 100%;
  column-gap: 24px;
}
.paper-title{
  font-size: 20px;
  font-weight: bold;
  margin-top: 12px;
  margin-bottom: 12px;
}
.paper-abs{
  text-align: start;
  color: var(--td-text-color-secondary);
  margin-bottom: 12px;
}
.paper-description{
  font-size: 18px;
  text-align: start;
}
</style>