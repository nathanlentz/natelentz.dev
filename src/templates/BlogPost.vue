<template>
  <Layout>
    <Hero :title="$page.blogPost.title" :desc="$page.blogPost.spoiler" />
    <div class="content" v-html="$page.blogPost.content" />
  </Layout>
</template>

<script>
import Hero from "~/components/Hero.vue";

export default {
  components: {
    Hero
  },
  metaInfo: {
    title: "butts"
  },
}
</script>

<page-query>
  query BlogPost ($path: String!){
    blogPost (path: $path) {
      title
      date (format: "MM DD YYYY")
      spoiler
      content
    }
  }
</page-query>

<style scoped lang="scss">

</style>
