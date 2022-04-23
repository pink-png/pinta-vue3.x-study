<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    type title = {
      titleleft: string;
      titleright: string;
    };
    const titlelist: Array<title> = [
      { titleleft: "登报类型", titleright: "个人证件" },
      { titleleft: "登报业务", titleright: "身份证(简单版)" },
      { titleleft: "登报内容", titleright: "重置" },
    ];

    const textarea = ref<string>("");

    const chongzhi = (index: number) => {
      if (index == 2) anioxchongzhi();
    };

    const anioxchongzhi = () => {
      alert("重置模板");
    };

    return {
      titlelist,
      textarea,
      chongzhi,
    };
  },
});
</script>
<template>
  <div class="container">
    <div class="content">
      <div class="headtitle" v-for="(item, index) in titlelist" :key="index">
        <div>{{ item.titleleft }}</div>
        <div @click="chongzhi(index)">{{ item.titleright }}</div>
      </div>

      <div class="pos">
        <textarea v-model="textarea" class="textarea"></textarea>
      </div>

      <div class="cnuo">
        <p>承诺：</p>
        <p>1. 因我们提供的格式登报无效，免费重登。</p>
        <p>2. 登报后开具正规电子发票，也可对公支付。</p>
      </div>
    </div>

    <div class="btnxaiyibu">下一步</div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  height: 100%;
  .content {
    width: 355px;
    min-height: 532px;
    background: #ffffff;
    border-radius: 4px;
    margin: 10px auto;
    .headtitle {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #f6f2f2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 10px;
      &:first-child {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
      }
      &:last-child {
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
      }
      &:nth-child(3) > div:nth-child(1)::after {
        content: "（修改以下模版为您的信息）备份";
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #f86767;
      }
      &:nth-child(3) > div:nth-child(2) {
        color: #f86767;
      }
    }

    .pos {
      text-align: center;
      .textarea {
        border: 0;
        margin: 0 auto;
        width: 335px;
        height: 281px;
        background: #f2f2f2;
        box-sizing: border-box;
        padding: 17px 15px;

        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
      }
    }

    .cnuo {
      width: 100%;
      min-height: 102px;
      // background-color: red;
      box-sizing: border-box;
      padding: 15px 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      & > p:first-child {
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
      }
      & > p:nth-child(2) {
        margin-top: 8px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
      }
      & > p:nth-child(3) {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        margin-top: 2px;
      }
    }
  }

  .btnxaiyibu {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 44px;
    background: #f86767;
    line-height: 44px;
    text-align: center;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
  }
}
</style>