<template>
  <div class="post-card-wrapper">
    <div class="post-card">
      <div class="date">{{ publishDate }}</div>
      <div class="info">
        <g-link :to="`${slug}`" class="title"> {{ title }}</g-link>
        <div class="description">{{ description }}</div>
        <div class="tags" v-for="(tag, index) in tags" :key="index">
          <div class="tag">tag</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    title: String,
    description: String,
    slug: String,
    publishDate: String,
    tags: [String],
  },
  data() {
    return {};
  },
  computed: {
    postIsNew() {
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.post-card-wrapper {
  margin: 0 auto;
  padding: 10px 0;
}

.post-card {
  display: flex;
  align-items: center;
  margin: 15px 0px 0px -35px;
  padding: 25px 0px;
  transition: ease-in-out 200ms;
  text-decoration: none;

  .title {
    font-size: 24px;

    @media (max-width: 400px) {
      font-size: 16px;
    }
  }

  .new-tag {
    font-size: 14x;
    font-family: "poppins";
    font-weight: 700;
    padding: 5px;
    width: 50px;
    text-align: center;
  }

  .title,
  .date {
    font-family: "poppins";
    font-weight: bold;
  }

  .date {
    transform: rotate(-90deg);
    height: 20px;
    white-space: nowrap;
  }

  .tags {
    display: flex;
  }

  .tag {
    font-family: "poppins";
    font-weight: 700;
    background-color: #d8d8d8;
    color: #fff;
    margin: 5px;
    padding: 2px;
    text-align: center;
  }
}
</style>
