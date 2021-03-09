<template>
    <nav id="nav" role="navigation">
        <router-link :to="'/'" class="home-link">
          <g-image class="logo" src="~/assets/image/NL_LOGO_2020.png" width="200" alt="Nate Lentz logo" />        
        </router-link>
        <div class="nav-items">
          <div class="nav-item" v-for="item in navItems" :key="item.id">
              <router-link activeClass="active" :to="item.route">{{ item.title }}</router-link>
          </div>
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
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #e8e8e9;

  a.home-link:after {
    content: normal;
  }

  .nav-items {
    font-size: 24px;
    font-weight: bold;
    font-family: poppins;
    display: flex;

    .nav-item {
      padding: 15px 15px;
    }
  }

  .logo {
    display: flex;
    justify-content: flex-start;
    height: 50px;
    width: 50px;
    padding-left: 15px;
  }
}
</style>