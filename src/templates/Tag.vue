<template>
  <Hero :title="$page.tag.title" />
</template>

<script>
  import Hero from "~/components/Hero.vue";
  import PostCard from '~/components/PostCard';

  export default {
    components: {
      Hero,
      PostCard
    }
  }
</script>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on BlogPost {
            title
            path
            date (format: "D. MMMM YYYY")
            spoiler
            content
          }
        }
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>

</style>