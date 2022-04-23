<template>
  <div id="app">
    <head-bar />
    <router-view class="routerview"></router-view>
    <!-- <router-view v-slot="{ Component }" class="routerview">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view> -->
    <tab-bar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabBar from "@/components/Tabbar/TabBar.vue";
import HeadBar from "@/components/HeadBar/HeadBar.vue";
export default defineComponent({
  name: "App",
  components: {
    TabBar,
    HeadBar,
  },
});
</script>

<style>
@import "assets/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
body::-webkit-scrollbar {
  display: none;
}

.routerview {
  margin-top: 40px;
  margin-bottom: 90px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 进入的起点、离开的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
.hello-enter-active,
.hello-leave-active {
  transition: 0.7s linear;
}
/* 进入的终点、离开的起点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}

/* 进入的起点、离开的终点 */
.hellox-enter,
.hellox-leave-to {
  transform: rotate(0);
}
.hellox-enter-active,
.hellox-leave-active {
  transition: 1s linear;
}
/* 进入的终点、离开的起点 */
.hellox-enter-to,
.hellox-leave {
  transform: rotate(360deg);
}
</style>
