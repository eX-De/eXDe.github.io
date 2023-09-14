<script>
import { defineComponent } from 'vue'
import { NConfigProvider } from 'naive-ui'
import { zhCN, dateZhCN } from 'naive-ui'
export default defineComponent({
  components: {
    NConfigProvider
  },
  setup() {
    return {
      zhCN,
      dateZhCN
    }
  }
})
</script>

<template>
    <router-view></router-view>

</template>

<style>
:root{
  --bg-img: url("assets/general/background.jpg");
  --anchor-bg-color: rgba(255, 255, 255, 0.6);
  --sunset-color: rgba(200, 120, 190);
}
[custom-theme="dark"] {
  --bg-img: url("assets/general/background-dark.jpg");
  --anchor-bg-color: rgba(0, 0, 0, 0.6);
  --sunset-color: rgb(108, 54, 102);
}
#app{
  padding: 0;
  margin: 0;
  width: -moz-fit-content;
  width: fit-content;
  max-width: unset !important;
}
@font-face {
  font-family: 'damion';
  src: url("assets/general/Damion-Regular.ttf") format("truetype");
}
body{
  font-family: "Segoe UI";
  background-image: var(--bg-img);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--td-text-color-primary);
  width: -moz-fit-content;
  width: fit-content;
}
.t-menu{
  background: rgba(255, 255, 255, 0) !important;
}
.t-default-menu{
  background: rgba(255, 255, 255, 0) !important;
}
.sub-root{
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
  column-count: 2;
  column-gap: 24px;
  height: 100%;
  overflow: auto;
}
.tab-root{
  margin-top: 24px;
  width: 100%;
  column-count: 2;
  column-gap: 24px;
  height: calc( 100vh - 164px );
  overflow: auto;
}
@media screen and (max-width: 1800px){
  .tab-root{
    column-count: unset;
  }
  .sub-root{
    column-count: unset;
  }
}
</style>
