<template>
  <div class="Hero" :style="styles">
    <div class="content">
      <h1>{{ title }}</h1>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    title: String,
    desc: String,
    short: Boolean,
    bgColor: String,
    textColor: String,
    bgImage: String
  },
  computed: {
    styles() {
      return `
        background-color: ${this.bgColor}; color: ${this.textColor}; 
        height: ${this.short ? '250px' : '400px'}
      `;
    },
  }
};
</script>

<style scoped lang="scss">
.Hero {
  padding: 0 10px;
  position: relative;
  @media screen and (max-width: 749px) {
    padding: 0;
  }
}
.Hero .content {
  height: 100%;   
  padding: 0;
  position: relative;
  z-index: 5;
  margin: 0 auto;
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 749px) {
    .content {
      text-align: center;
    }
  }
}
h1 {
  margin-top: 0;
  margin-bottom: 10px;
}
p {
  margin: 0;
}
</style>
