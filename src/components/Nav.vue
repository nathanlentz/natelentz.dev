<template>
    <nav id="nav" role="navigation">
        <div class="logo">
            <!-- <router-link>LOGO</router-link> -->
        </div>
        <div class="nav-item" v-for="item in navItems" :key="item.id">
            <router-link activeClass="active" :to="item.route">{{ item.title }}</router-link>
        </div>
        <!-- <ToggleTheme /> -->
    </nav>
</template>

<script>
import ToggleTheme from '~/components/ToggleTheme.vue';

export default {
  components: {
    ToggleTheme
  },
  name: 'Nav',
  props: ["navItems"]
};
</script>

<style scoped lang="scss">
#nav {
  height: 65px;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #fff;
  border-bottom: 1px solid #e8e8e9;

  .nav-item {
    font-size: 24px;
    font-weight: bold;
    font-family: poppins;
    padding: 15px 15px;
  }
}
</style>