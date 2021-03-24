<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    created() {
      // 初始化
      let user = localStorage.getItem('user')
      if (user) {
        this.$store.dispatch('setUser', JSON.parse(user))
      }
    }
  }
</script>

<style>
* {
  margin: 0;
}
</style>
