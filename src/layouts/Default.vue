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
        { id: 2, title: "Blog", route: "/posts" }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>
