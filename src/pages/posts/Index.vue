<template>
  <Layout>
    <Hero :title="heroTitle" :desc="heroDescription" :short="true" />
    <p v-if="$page.allBlogPost.edges.length < 1">There is nothing here. 🎐 Come back later and I might have written something by then :)</p>
    <div v-for="{ node } in $page.allBlogPost.edges" :key="node.path">
      <PostCard 
        v-if="node.published"
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
        heroDescription: "Tips, tricks, and my opinions."
      }
    },
    metaInfo() {
      return {
        title: "Writing"
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
          published
        }
      }
    }
  }
</page-query>

<style lang="scss" scoped>

</style>