<template>
  <div class="hello">
    {{ count }}

    <p>
      {{ foo }}
    </p>

    <p>
      {{ arr }}
    </p>

    <p>
      {{ count10 }}
    </p>
    <p>
      {{ count10 }}
    </p>
    <p>
      {{ count10 }}
    </p>

    <ul>
      <li v-for="item in person" :key="item.id">
        {{ item.name }}
      </li>
    </ul>

    <p>
      <button @click="handlechangecount">修改数据count</button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMainStore } from "../store/index";
import { storeToRefs } from "pinia";
export default defineComponent({
  name: "HelloWorld",
  setup() {
    const mainStore = useMainStore();
    console.log(mainStore);

    // 这种操作数据不是响应式的
    // Pinia 其实就是把 state数据都做了 reactive处理了
    // const { count } = mainStore;

    // 解决办法就是使用storeToRefs
    // 把结构出来的数据做 ref 响应式代理
    const { count, person, foo, arr, count10 } = storeToRefs(mainStore);

    const handlechangecount = () => {
      // 方式一 ： 最简单的数据修改方式
      // mainStore.count++;

      // 方式二 ：如果需要修改多个数据，建议使用 $patch 批量更新(多次修改数据用这个，有性能上的优化)
      // mainStore.$patch({
      //   count: mainStore.count + 1,
      //   foo: "hello",
      //   arr: [...mainStore.arr, 4],
      //   person: [...mainStore.person, { id: 3, name: "pch" }],
      // });

      // 方式三：$patch 一个函数 (多次修改数据用这个，有性能上的优化)
      // mainStore.$patch(state => {
      //   state.count++
      //   state.foo = 'gsq',
      //   state.arr.push(state.arr.length + 1)
      // })

      // 方式四： 逻辑比较多的时候封装到actions
      mainStore.changeState(10);
    };

    return {
      count,
      foo,
      person,
      arr,
      count10,
      handlechangecount,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
