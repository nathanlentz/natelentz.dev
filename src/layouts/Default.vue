<template>
  <div id="app">
    <Nav :navItems="nav" />
    <div class="main content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      nav: [
        { id: 1, title: "Home", route: "/" },
        { id: 2, title: "Blog", route: "/blog" }
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  h1 {
    font-weight: bold;
    font-size: 54px;
    font-family: "poppins";
  }
  p {
    font-family: "poppins";
    font-weight: bold;
  }
  a {
    &:visited {
      color: #4a4a4a;
    }
  }
}
</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
