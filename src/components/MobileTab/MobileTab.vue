<template>
  <div class="container-mobiletab">
      <div
        class="itemx"
        v-for="(item, index) in tab"
        :key="index"
        @click="btntab(item.id)"
      >
        {{ item.name }}
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMainStore } from "@/store/index";
import { storeToRefs } from "pinia";
export default defineComponent({
  name: "MobileTab",
  setup(props, context) {
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

    const btntab = (id: number) => {
      //   alert(id);
    };

    return {
      tab,
      btntab,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.container-mobiletab {
  width: 100%;
  height: 48px;
  background: #ffffff;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  .itemx {
    margin-left: 8px;
    min-width: 75px;
    color: #f86767;
    border-bottom: 1px solid #f86767;
  }
}
</style>
