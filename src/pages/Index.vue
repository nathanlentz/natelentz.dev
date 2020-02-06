<template>
  <Layout>
    <Hero class="home-hero" :title="heroTitle" :desc="heroDescription" />
    <div class="title-label" v-if="$page.allBlogPost.edges.length > 0">Recent Posts</div>
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

<page-query>
  query Home ($page: Int) {
    allBlogPost(perPage: 3, page: $page) {
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

<script>
import Hero from "~/components/Hero.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Hero,
    PostCard
  },
  metaInfo: {
    title: "Home"
  },
  data() {
    return {
      heroTitle: "Hi, I'm Nate.",
      heroDescription: "I'm a developer from Grand Rapids, MI."
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
