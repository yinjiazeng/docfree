<style lang="less">
body {
  .button {
    color: red;
  }
}
</style>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button class="button" v-on:click="count++">You clicked me {{ count }} times.</button>
</template>
