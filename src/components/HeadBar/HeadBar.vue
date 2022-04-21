<template>
  <div class="container-headbar">
    {{ titlename }}
  </div>
</template>

头部的显示有2个思路
1.router + watch
2.vuex + router + watch
<script  lang="ts">
import { defineComponent, ref, reactive, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "HeadBar",
  setup(props, context) {
    const router = useRouter();
    const route = useRoute();
    let titlename = ref<string>("首页");

    watch(
      () => route.name,
      (newPath, oldPath) => {
        console.log("newPath", newPath);
        titlename.value = newPath as string;
      },
      {
        deep: true,
      }
    );

    return {
      titlename,
    };
  },
});
</script>

<style scoped>
.container-headbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: #ffffff;
  border-bottom: 1px solid #cccccc;
}
</style>