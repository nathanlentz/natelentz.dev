<template>
  <Layout>
    <Hero :title="$page.blogPost.title" :desc="$page.blogPost.spoiler" :short="true" />
      <!-- <Author /> -->
    <div class="date">Published: {{$page.blogPost.date}}</div>
    <div class="tags">
      <div v-for="tag in $page.blogPost.tags" :key="tag.id">
        <PostTag :tag="tag" />
      </div>
    </div>
    <article class="blog-content" v-html="$page.blogPost.content"></article>
    <a v-bind:href="`${editUrl}/${$page.blogPost.fileInfo.name}.md`">
      Edit on Github
    </a>
  </Layout>
</template>

<script>
import Hero from "~/components/Hero.vue";
import PostTag from '~/components/PostTag.vue';
import Author from '~/components/Author.vue';

const GITHUB_USERNAME = "nathanlentz";
const GITHUB_REPO_NAME = "natelentz.dev";

export default {
  components: {
    Hero,
    PostTag,
    Author
  },
  data() {
    return {
      editUrl: `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/blob/master/blog`
    }
  },
  metaInfo() {
    return {
      title: this.$page.blogPost.title,
      meta: [
        {
          name: 'description',
          content: this.$page.blogPost.spoiler
        }
      ]
    }
  },
}
</script>

<page-query>
  query BlogPost ($path: String!){
    blogPost (path: $path) {
      title
      date (format: "MMMM DD YYYY")
      spoiler
      content
      path
      fileInfo {
        name
      }
      tags {
        id
        title
        path
      }
    }
  }
</page-query>

<style scoped lang="scss">
.date {
  font-style: italic;
}

.tags {
  display: flex;
  color: pink;

  .tag {
    padding-right: 10px;
  }
}
</style>
