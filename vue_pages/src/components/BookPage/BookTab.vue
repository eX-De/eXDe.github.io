<script setup>
let handleJump = (val) => {
  window.location.href = val
}
</script>

<template>
<div class="tab-root">
  <t-card class="book" id="deep-learning-from-scratch">
    <div class="card-content">
      <div class="book-img"></div>
      <div class="book-info">
        <div class="book-title"></div>
        <div class="book-description"></div>
      </div>
    </div>
    <template #footer>
      <t-row :align="'middle'" justify="end" style="gap: 24px">
        <t-col flex="auto" style="display: inline-flex; justify-content: end">
          <t-button variant="text" shape="square" @click="handleJump('')" size="large">
            <t-icon name="link"></t-icon>
          </t-button>
        </t-col>
      </t-row>
    </template>
  </t-card>
</div>
</template>

<style scoped>

</style>