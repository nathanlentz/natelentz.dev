<template>
  <div class="tag">
    <g-link :to="tag.path">
      {{ tag.title }}
    </g-link>
  </div>
</template>

<script>
  export default {
    name: "PostTag",
    props: ['tag']
  }
</script>

<style lang="scss" scoped>

</style>