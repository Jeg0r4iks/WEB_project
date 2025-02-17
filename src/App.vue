<template>
  <div id="app">
    <h1 :class="{ 'dark-h1': isDarkMode }" @click="goHome">Mireqx</h1>
    <Navbar @dark-mode-changed="handleDarkModeChanged" />
    <AddPostForm @add-post="addPost" />
  </div>
  <AppFooter />
</template>

<script>
import Navbar from './components/navbar.vue';
import AppFooter from './components/footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    AppFooter,
  },
  data() {
    return {
      isDarkMode: localStorage.getItem('isDarkMode') === 'true',
    };
  },
  methods: {
    goHome() {
      this.$router.push('..\views\HomeView.vue');
    },
    handleDarkModeChanged(newMode) {
      this.isDarkMode = newMode;
    }
  },
}
</script>

<style scoped>
h1 {
  color: black;
  font-size: 55px;
  text-align: center;
}

h1.dark-h1 {
  color: whitesmoke;
}

h1:hover {
  color: rgb(255, 0, 0);
}
</style>
///