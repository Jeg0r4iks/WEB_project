<template>
  <div id="app">
    <h1 @click="goHome">Mireqx</h1>
    <Navbar />
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';
//import Footer from './components/footer.vue';

export default {
  name: 'App',
  components: {
    Navbar
  },
  methods: {
    goHome() {
      this.$router.push("/home"); 
    }
  }
};
</script>

<style>
body {
  background-color: blanchedalmond;
  margin: 0; 
  font-family: Helvetica;
  margin: 0; 
  font-family: Helvetica;
}

h1 {
  color: black;
  font-size: 65px;
  font-family: Helvetica;
  text-align: center;
}

a {
  font-size: 20px;
  text-decoration: none;
  color: black;
  font-weight: normal;
  font-family: Helvetica;
  font-weight: normal;
}

a:hover {
  text-decoration: underline;
}

</style>
