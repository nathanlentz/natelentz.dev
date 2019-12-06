<template>
  <Layout>
    <Hero title="Hi, I'm Nate." desc="I'm a developer from Grand Rapids, MI" />
    <div class="title-label">Recent Posts</div>
    <div v-for="item in $page.posts.edges" :key="item.slug">
      <PostCard 
        :title="item.node.title"
        :description="item.node.metadata.description"
        :slug="item.node.slug"
        :publishDate="item.node.metadata.publish_date"
      />
    </div>
  </Layout>
</template>

<page-query>
  query IndexQuery {
    posts: allCosmicjsPosts {
      edges {
        node {
          id
          slug
          title
          metadata {
            hero {
              imgix_url
            }
            headline
            content
            description
            publish_date
          }
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
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
