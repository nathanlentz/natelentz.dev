<template>
  <footer>
    <!-- <a href="https://cosmicjs.com/add-bucket?import_bucket=5dae570d87cc2f20885e6e55"><img src="https://cdn.cosmicjs.com/51fe54d0-4f6e-11e9-9f32-8d001da69630-powered-by-cosmicjs.svg" /></a> -->
    <div class="social">
      <a href="https://github.com/nathanlentz">
        <g-image src="~/assets/image/github.svg" alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/nathanalentz/">
        <g-image src="~/assets/image/linkedin.svg" alt="linkedin" />
      </a>
      <a href="https://twitter.com/nathanlentz">
        <g-image src="~/assets/image/twitter.svg" alt="twitter" />
      </a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss">
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #F7F7F7;
  opacity: .95;
}
.social {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media screen and (max-width: 720px) {
    justify-content: center;
  }
  a {
    width: 32px;
    margin: 15px 25px;
    transition: all ease-in-out 200ms;
    &:hover {
        opacity: .65;
    }
  }
}
</style>