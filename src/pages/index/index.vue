<template>
  <div class="container">
    <div class="head">
      <div class="head-left">
        <img src="~assets/img/index/loc.png" />
        <span>杭州</span>
      </div>

      <div class="head-right">
        <img src="~assets/img/index/search.png" />
        <input type="text" placeholder="请搜索您要的证件类型或报纸" />
      </div>
    </div>

    <img src="~assets/img/index/banner.png" class="banner" />

    <div class="listbox">
      <div
        class="item"
        v-for="(item, index) in Iconlist"
        @click="navclassify(item.icon)"
        :key="index"
      >
        {{ item.titlename }}
      </div>
      <div class="item" style="visibility: hidden"></div>
      <div class="item" style="visibility: hidden"></div>
    </div>

    <span class="bottomtext">找不到格式，请直接联系客服定稿</span>
  </div>
</template>

<script  lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMainStore } from "@/store/index";
import { storeToRefs } from "pinia";
import axios from "axios";

export default defineComponent({
  name: "IndexName",
  setup() {
    const selectProvincedel = ref<string>("浙江省");
    const locationCitydel = ref<string>("杭州市");

    //  axios
    //   .post('https://dev.9tax.com/newspaper/index/getParentClassify')
    //   .then(response => (console.log('response',response)))
    //   .catch(function (error) { // 请求失败处理
    //     console.log(error);
    // });

    type iconlist = {
      icon: string;
      titlename: string;
    };
    const Iconlist: Array<iconlist> = [
      { icon: "1", titlename: "个人证件" },
      { icon: "2", titlename: "发票/收据" },
      { icon: "3", titlename: "企业证件" },
      { icon: "4", titlename: "公告声明" },
      { icon: "5", titlename: "政府送达" },
      { icon: "6", titlename: "法院公告" },
      { icon: "7", titlename: "债券债务" },
      { icon: "8", titlename: "解除劳动关系公告" },
      { icon: "9", titlename: "环评公示" },
      { icon: "10", titlename: "拍卖公告" },
      { icon: "11", titlename: "真情告白" },
      { icon: "12", titlename: "登报道歉" },
      { icon: "13", titlename: "表扬信" },
      { icon: "14", titlename: "宣传稿" },
    ];

    const jinxindenbao = () => {
      alert("jinxindenbao");
    };

    const router = useRouter();
    const navclassify = (icon: number) => {
      router.push({ path: "/classify", query: { id: icon } });
    };
    return {
      selectProvincedel,
      locationCitydel,
      Iconlist,
      jinxindenbao,
      navclassify,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  .head {
    width: 375px;
    height: 50px;
    background: #f86767;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    align-items: center;

    .head-left {
      display: flex;
      align-items: center;
      img {
        width: 15px;
        height: 19px;
      }
      span {
        color: #ffffff;
      }
    }
    .head-right {
      width: 287px;
      height: 29px;
      background: #ffffff;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 0 8px;
      display: flex;
      align-items: center;
      margin-left: 13px;
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
  }
  .banner {
    width: 100%;
    height: 210px;
  }

  .listbox {
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    .item {
      width: 83px;
      height: 95px;
      text-align: center;
      line-height: 95px;
      background: #ffffff;
      box-shadow: 0px 2px 4px 0px rgba(87, 87, 87, 0.15);
      border-radius: 8px;
      margin-top: 8px;
    }
  }

  .bottomtext {
    margin-top: 40px;
    width: 205px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #787878;
    line-height: 20px;
  }
}
</style>
