<template>
  <Layout>
    <HomeHero
      class="home-hero"
      :title="heroTitle"
      :desc="heroDescription"
      :short="true"
    />
    <PicksOfTheWeek />
    <div class="title-label" v-if="$page.allBlogPost.edges.length > 0">
      Recent Posts
    </div>
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

<page-query>
  query Home ($page: Int) {
    allBlogPost(perPage: 3, page: $page) {
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

<script>
import HomeHero from "~/components/HomeHero.vue";
import PostCard from "~/components/PostCard.vue";
import PicksOfTheWeek from "~/components/PicksOfTheWeek.vue";

export default {
  components: {
    HomeHero,
    PostCard,
    PicksOfTheWeek,
  },
  metaInfo: {
    title: "A blog by Nate Lentz",
    meta: [
      {
        key: "description",
        name: "description",
        content: "A personal blog by Nate Lentz.",
      },
    ],
  },
  data() {
    return {
      heroTitle: "Hi, I'm Nate.",
      heroDescription: "I'm a developer from Grand Rapids, MI.",
    };
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
