<script>
export default {
  name: "show-developer-count",
  props:{
    developerCount:{
      type: Number,
      required: true
    }
  }
}
</script>

<template>
  <div>
    <p>Developers register {{ developerCount}}</p>
    <p>Note: unknown developers are not considered</p>
  </div>
</template>

<style scoped>

</style>