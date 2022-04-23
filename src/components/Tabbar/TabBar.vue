<template>
  <div class="container-tabbar" v-if="isshow">
    <div class="flexbox">
      <div
        v-for="(item, index) in navlinklist"
        :class="[isactive === item.id ? 'selectedlink' : 'noseletdelink']"
        :key="item.id"
        @click="jump(item)"
      >
        <img v-if="isactive === item.id" :src="item.imgpathnoselected" />
        <img v-else :src="item.imgpathselected" />
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMainStore } from "@/store/index";
import { storeToRefs } from "pinia";
export default defineComponent({
  name: "TabBar",
  setup(props, context) {
    const router = useRouter();
    const route = useRoute();
    let isshow = ref<boolean>(true);
    watch(
      () => route.name,
      (newPath, oldPath) => {
        // console.log("newPath", newPath);
        if (["首页", "客服问题", "我的"].includes(newPath as string)) {
          isshow.value = true
        }else{
          isshow.value = false
        }
      },
      {
        deep: true,
      }
    );

    type navlink = {
      id: number;
      name: string;
      link: string;
      imgpathselected: string;
      imgpathnoselected: String;
    };

    let navlinklist: Array<navlink> = [
      {
        id: 0,
        name: "首页",
        link: "/",
        imgpathselected: require("@/assets/img/tabbar/index.png"),
        imgpathnoselected: require("@/assets/img/tabbar/index_selected.png"),
      },
      {
        id: 1,
        name: "客服问题",
        link: "/customer",
        imgpathselected: require("@/assets/img/tabbar/customer.png"),
        imgpathnoselected: require("@/assets/img/tabbar/customer_selected.png"),
      },
      {
        id: 2,
        name: "我的",
        link: "/my",
        imgpathselected: require("@/assets/img/tabbar/my.png"),
        imgpathnoselected: require("@/assets/img/tabbar/my_selected.png"),
      },
    ];

    const isactive = ref<number>(0);
    const jump = (item: navlink, index: number) => {
      router.push(item.link);
      isactive.value = item.id;
    };

    return {
      navlinklist,
      isactive,
      isshow,
      jump,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 88px;
  z-index: 999;
  background-color: #ffffff;
  border: 1px solid #cccccc;
}
.flexbox {
  height: 100%;
  widows: 100%;
  display: flex;
  align-content: center;
  align-items: center;
}

.flexbox > div {
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
}

.flexbox > div > img {
  width: 30px;
  height: 30px;
  margin-top: 10px;
}
.flexbox > div > div {
  margin-top: 20px;
}

.selectedlink {
  color: #f86767;
}

.noseletdelink {
  color: #cccccc;
}
</style>
