<template>
  <div>
    Clicked: {{$store.state.count}} times,count is
    <button @click="increment">+</button>
  </div>
</template>

<script>
// 让 store 里的改变状态的方法 mapActions
import { mapActions } from 'vuex'
export default {
  // 自身的状态
  props: ['count'],
  methods: mapActions([
    'increment'
  ])
}
</script>

<style>

</style>
