
import { defineStore } from "pinia";
export const useMainStore = defineStore('main', {
    state: () => {
        return {
            count: 1,
            foo: 'lvw',
            arr: [1, 2, 3],
            person: [{ id: 1, name: 'lvwang' }, { id: 2, name: 'xiaowang' }]
        }
    },
    getters: {
        count10(state){
            console.log('count10调用了')
            return state.count + 10
        }
    },
    actions: {
        // 注意: 不能使用箭头函数  因为箭头函数绑定外部this
        changeState(num:number) {
            this.count+=num
            this.foo = 'gsq'
            this.arr.push(this.arr.length + 1)

            // 这里修改数据多的时候也可以用$patch
            // this.$patch({})
            // this.$patch(state => {})
        }
    }
})