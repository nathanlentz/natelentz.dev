<template>
  <Layout>
    <Hero :title="`About Me`" :short="true"/>
  </Layout>
</template>

<script>
  import Hero from '~/components/Hero.vue';

  export default {
    name: "About",
    components: {
      Hero
    }
  }
</script>

<style lang="scss" scoped>

</style>