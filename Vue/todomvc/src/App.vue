<template>
  <div>
    <counter />
  </div>
</template>

<script>
// 两个兄弟组件，共享count数据，
// 所以 count 不应该属于Counter组件私有，不应该在子组件的data(){},应该在props，父组件拥有，传给子组件
import Counter from "./components/Counter";
export default {
  data() {
    return {
      count: 0
    };
  },
  components: {
    'counter': Counter
  },
  methods: {
    
  }
};
</script>

<style>
</style>
