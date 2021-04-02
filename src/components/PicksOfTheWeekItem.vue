<template>
  <div class="potw-item">
    <div class="image" />
    <div class="item-content">
      <a :href="item" class="title">{{ title }}</a>
      <div class="description">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PicksOfTheWeekItem",
  props: {
    title: String,
    type: String,
    text: String,
    link: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.potw-item {
  padding: 1px 0px;
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
  margin: 15px 0px;
}

a {
  font-size: 20px;
}

.image {
  width: 100%;
  background: #000;
  margin-right: 23px;
}
</style>
