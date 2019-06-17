import Vuex from 'vuex'
import Vue from 'vue'

// 中央
const state = {
  count: 0
}
// 相当于组件里的computed
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even': 'odd'
}
// 改变  唯一修改状态
const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--;
  }
}

// 动作  不能修改state
const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
  // actions 中不能修改state，但是可以读
  incrementIfOdd ({commit, state}) {
    if((state.count + 1 )%2 === 0) {
      commit('increment')
    } 
  },
  incrementAsync({commit}) { 
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        commit('increment')
      },2000)
    })
  }
}
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})