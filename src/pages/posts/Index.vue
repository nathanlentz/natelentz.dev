<template>
  <Layout>
    <Hero :title="heroTitle" :desc="heroDescription" />
    <div v-for="{ node } in $page.allBlogPost.edges" :key="node.path">
    <PostCard 
      :title="node.title"
      :description="node.spoiler"
      :slug="node.path"
      :publishDate="node.date"
    />
    </div>
  </Layout>
</template>

<script>
  import Hero from '../../components/Hero';
  import PostCard from '../../components/PostCard'

  export default {
    components: {
      Hero,
      PostCard
    },
    data() {
      return {
        heroTitle: "All Blogs",
        heroDescription: "Sometimes I have things to share."
      }
    }
  }
</script>

<page-query>
  query BlogIndex ($page: Int) {
    allBlogPost(page: $page) {
      edges {
        node {
          title
          date (format: "MM DD YYYY")
          spoiler
          path
        }
      }
    }
  }
</page-query>

<style lang="scss" scoped>

</style>