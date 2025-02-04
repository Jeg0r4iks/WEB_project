<template>
  <div id="app">
    <h1 @click="goHome">Mireqx</h1>
    <Navbar />
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
  methods: {
    goHome() {
      this.$router.push('..\views\HomeView.vue');
    },
  },
}
</script>

<style scoped>
h1 {
  color: black;
  font-size: 55px;
  text-align: center;
}

h1:hover {
  color: rgb(255, 0, 0);
}
</style>
