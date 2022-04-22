<template>
  <div class="container">
    <div class="head">
      <div class="avator"></div>
    </div>
    <div class="from">
      <div class="itemfrom">
        <div>我的订单</div>
      </div>
      <div class="itemfrom">
        <div>手机号码</div>
        <div>15057234535</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMainStore } from "@/store/index";
import { storeToRefs } from "pinia";
export default defineComponent({
  name: "MyName",
  setup() {
    return {};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.container {
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  width: 100vw;
  // height: 100%;
  height: 100vh;
  .head {
    width: 100%;
    height: 141px;
    border-radius: 0 0 20px 20px;
    background-color: #f86767;
    position: relative;
    top: 0;
    left: 0;
    .avator {
      width: 50px;
      height: 50px;
      position: absolute;
      border-radius: 50%;
      left: 20px;
      top: 20px;
      background-color: #ffffff;
    }
  }
  .from {
    position: absolute;
    top: 84px;
    left: 50%;
    transform: translateX(-50%);
    width: 355px;
    min-height: 96px;
    background: #ffffff;
    border-radius: 4px;
    .itemfrom {
      width: 100%;
      height: 47px;
      display: flex;
      box-sizing: border-box;
      padding: 0 20px;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
