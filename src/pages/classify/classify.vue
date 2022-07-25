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
      <mobile-tab  name="hhhh" :data="tab" />
    </div>

    <!-- 列表 -->
    <div class="listdata">
      <div
        class="listitem"
        v-for="(item, index) in 100"
        :key="index"
        @click="navcontent(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { useMainStore } from "@/store/index";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import MobileTab from "@/components/MobileTab/MobileTab.vue";
export default defineComponent({
  name: "IndexName",
  components: {
    MobileTab,
  },
  setup() {

    type tablist = {
      id: number | string;
      name: string;
    };
    const tab: Array<tablist> = [
      { id: "1", name: "个人证件" },
      { id: "2", name: "发票/收据" },
      { id: "3", name: "企业证件" },
      { id: "4", name: "公告声明" },
      { id: "5", name: "政府送达" },
      { id: "6", name: "法院公告" },
      { id: "7", name: "债券债务" },
      { id: "8", name: "解除劳动关系公告" },
      { id: "9", name: "环评公示" },
      { id: "10", name: "拍卖公告" },
      { id: "11", name: "真情告白" },
      { id: "12", name: "登报道歉" },
      { id: "13", name: "表扬信" },
      { id: "14", name: "宣传稿" },
    ];


    const router = useRouter();
    const route = useRoute();
    const navcontent = (id: number) => {
      router.push("/paperContent");
    };

    return {
      tab,
      navcontent
    };
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