<template>
  <div class="container">
    <div class="head"></div>

    <div class="content">
      <div class="itemx" v-for="(item, index) in wenanlist" :key="index">
        <div class="titlex">{{ item.title }}</div>
        <div class="contentitem">{{ item.cotennt }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMainStore } from "@/store/index";
import { storeToRefs } from "pinia";
export default defineComponent({
  name: "CustOmer",
  setup() {
    type listitem = {
      title: string;
      cotennt: string;
    };
    // 必须加类型，不然循环渲染的时候只会把最后一项渲染上去
    const wenanlist: Array<listitem> = [
      {
        title: "刊登的内容不能用",
        cotennt: "如因我们提供是格式不对，请联系我们免费重新刊登",
      },
      {
        title: "怎么取报纸？见报时间",
        cotennt:
          "免费快递报纸，见报当天快递。正常情况下是隔天见报，如遇重大新闻，或节假日，登报会延后，但是也会在第一时间见报并快递",
      },
      {
        title: "关于开发票",
        cotennt:
          "开票格式如下，下单的手机号：*****，开票信息：*****，发送至邮箱10010@qq.com，开具电子回复给您。",
      },
      {
        title: "证件找到了不想登报了，是否可以退款",
        cotennt:
          "当天下单的用户，在订单显示提交刊登前，可无条件申请退款（客户后台可查看进度），无需承担撤稿费。登报费用三个工作日原路退回。",
      },
      {
        title: "刊登的报纸能否用",
        cotennt:
          "为您推荐都是当地的市级、省级和国家级可以刊登的报纸，所有报纸都是正规发行，有刊号，办事单位全部认可，100%可用，除办事单位有指定报纸外，不能用包退。",
      },
      {
        title: "报社入驻",
        cotennt: "欢迎各大报社入驻我们小程序，谈合作请联系电话10086",
      },
    ];

    return {
      wenanlist,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.container {
  display: flex;
  flex-direction: column;
  .head {
    height: 109px;
    width: 100%;
    background-color: #f86767;
  }
  .content {
    width: 345px;
    margin: -80px auto 0;
    min-height: 573px;
    background: #ffffff;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 8px;
    .itemx {
      min-height: 85px;
      width: 100%;
      box-sizing: border-box;
      padding: 8px 0;
      border-bottom: 1px solid #e7e7e7;
      .titlex {
        width: 100%;
        height: 22px;
        font-size: 16px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: #f86767;
        &::before {
          content: ".";
          width: 1px;
          height: 14px;
          background: #f86767;
          border-radius: 1px;
          margin-right: 4px;
        }
      }
      .contentitem {
        margin-top: 8px;
        width: 100%;
        min-height: 20px;
        font-size: 14px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: #787878;
      }
    }
  }
}
</style>
