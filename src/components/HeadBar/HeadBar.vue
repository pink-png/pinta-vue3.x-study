<template>
  <div class="container-headbar">
    <div class="fanhui" v-if="isfanhui" @click="btnfanhui">返回</div>
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
    let isfanhui = ref<boolean>(false);

    const btnfanhui = () =>{
      router.back()
      // router.go(-1)
    }
    watch(
      () => route.name,
      (newPath, oldPath) => {
        console.log("newPath", newPath);
        titlename.value = newPath as string;
         if (["首页", "客服问题", "我的"].includes(newPath as string)) {
          isfanhui.value = false
        }else{
          isfanhui.value = true
        }
      },
      {
        deep: true,
      }
    );

    return {
      titlename,
      isfanhui,
      btnfanhui
    };
  },
});
</script>

<style scoped lang='scss'>
.container-headbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: #F86767;
  border-bottom: 1px solid #cccccc;
  font-weight: 800;
  font-size: 20px;
  color: #ffffff;

  .fanhui{
    position: absolute;
    top: 0;
    left: 30px;  
  }
}
</style>