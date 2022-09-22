<template>
  <div id="page">
    <Nav />
    <router-view></router-view>
  </div>

</template>

<script setup>
  import Nav from '@/components/Nav/index.vue'
</script>

<style scoped lang='scss'>
  #page {
    display: flex;

    Nav {
      flex: 2;
    }

    router-view {
      flex: 8;
    }
  }
</style>