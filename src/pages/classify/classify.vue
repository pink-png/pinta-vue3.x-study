<template>
  <div class="container">
    <div class="headinput">
      <div class="head-right">
        <img src="~assets/img/index/search.png" />
        <input type="text" placeholder="输入您登报的证件名称" />
      </div>
      <div class="searchbtn">搜索</div>
    </div>

    <div class="tyabbb">
      <mobile-tab />
    </div>

    <!-- 列表 -->
    <div class="listdata">
      <div class="listitem" v-for="(item, index) in 100" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { useMainStore } from "@/store/index";
import { storeToRefs } from "pinia";
import MobileTab from "@/components/MobileTab/MobileTab.vue";
export default defineComponent({
  name: "IndexName",
  components: {
    MobileTab,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  .headinput {
    position: fixed;
    top: 40px;
    left: 0;
    width: 100%;
    height: 48px;
    background: #ffffff;
    box-sizing: border-box;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .head-right {
      width: 287px;
      height: 29px;
      background: #ffffff;
      border: 2px solid #cccccc;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 0 8px;
      display: flex;
      align-items: center;
      img {
        width: 13px;
        height: 13px;
      }
      input {
        margin-left: 6px;
        flex: 1;
        border: 0;
      }
    }
    .searchbtn {
      margin-left: 13px;
      width: 48px;
      height: 28px;
      text-align: center;
      line-height: 28px;
      background: #f86767;
      border-radius: 14px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
    }
  }
  .tyabbb {
    width: 100%;
    position: fixed;
    top: 80px;
    left: 0;
  }
  .listdata {
    margin-top: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .listitem {
      flex: 48%;
      width: 168px;
      height: 46px;
      background: #ffffff;
      border-radius: 4px;
      text-align: center;
      line-height: 46px;
      border: 1px solid #efefef;
    }
  }
}
</style>