<template>
  <div class="Hero" :style="styles">
    <div class="content">
      <div class="media">
        <g-image
          src="~/assets/image/italy.jpg"
          alt="Nate Lentz"
          class="avatar"
        />
        <!-- <Winter /> -->
      </div>
      <h1>{{ title }}</h1>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script>
import Winter from "~/components/Winter.vue";

export default {
  components: {
    Winter,
  },
  name: "HomeHero",
  props: {
    title: String,
    desc: String,
    short: Boolean,
    bgColor: String,
    textColor: String,
    bgImage: String,
  },
  computed: {
    styles() {
      return `
        background-color: ${this.bgColor}; color: ${this.textColor};
        height: ${this.short ? "250px" : "350px"}
      `;
    },
  },
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
.media {
  position: absolute;
  right: 10px;

  @media screen and (max-width: 749px) {
    // top: 30px;
    // right: calc(50% - 50px);
    // margin: 0 auto;
    margin: 0 auto 25px auto;
    right: 0;
    position: relative;
  }
}
.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;

  @media screen and (max-width: 749px) {
    width: 100px;
    height: 100px;
  }
}

h1 {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 4rem;

  @media screen and (max-width: 749px) {
    line-height: 2rem;
  }
}
p {
  margin: 0;
}
</style>
