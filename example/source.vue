<template lang="pug">
div(ok)
  h1(:class="$style.red") hello world
</template>

<script>
export default {
  data () {
    return {
      msg: 'fesfff'
    }
  }
}
</script>

<style module>
.red {
  color: red;
}
</style>

<foo>
export default comp => {
  console.log(comp)
}
</foo>
