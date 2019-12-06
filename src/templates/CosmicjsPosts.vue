<template>
  <Layout>
    {{$page.post.title}}
    <Hero title="" desc="" />
    <div class="content" v-html="$page.post.metadata.content"></div>
  </Layout>
</template>

<page-query>
query postQuery($path: String!) {
  post: cosmicjsPosts(path: $path) {
    id
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
</page-query>

<script>
import Hero from '~/components/Hero.vue';
export default {
  components: {
    Hero
  },
  metaInfo() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
