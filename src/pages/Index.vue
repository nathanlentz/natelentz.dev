<template>
  <Layout>
    <Hero title="Hi, I'm Nate." desc="I'm a developer from Grand Rapids, MI" />
    <div v-for="item in $page.posts.edges" :key="item.slug">
      <h3>
        <g-link :to="`posts/${item.node.slug}`">{{ item.node.title }}</g-link>
      </h3>
      <!-- <small>{{ item.node.createdAt }}</small> -->
      <p>{{ item.node.metadata.description }}</p>
      {{ item.node.metadata.content }}
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
        }
      }
    } 
  }
</page-query>

<script>
import Hero from "~/components/Hero.vue";

export default {
  components: {
    Hero
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
