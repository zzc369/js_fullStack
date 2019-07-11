<template>
  <div class="search">
    <div class="search-box-wrapper">
      <v-search-box ref="searchBox" @query='onQueryChange'></v-search-box>
    </div>
  </div>
</template>

<script>
import search from '@/components/searchBox'
export default {
  components: {
    'v-search-box' : search
  }
}
</script>

<style>

</style>
