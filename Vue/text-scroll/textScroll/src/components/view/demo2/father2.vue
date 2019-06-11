<template>
  <div class="container">
    {{msg}}
    <child @wn='getwn' ></child>
  </div>
</template>

<script>
import child from './child2'
export default {
  name: 'demoFather2',
  data () {
    return {
        msg: null,
    }
  },
  components: {
    child
  },
  methods: {
    getwn(data) {
      this.msg = data;
    }
  },
}
</script>
