<template>
  <div id="app">
    <h1 @click="goHome">Mireqx</h1>
    <nav>
      <router-link to="/history">History</router-link>
      <router-link to="/runway">Runway</router-link>
      <router-link to="/style">Style</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
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

nav {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  padding: 10px;
  color: black;
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

.router-link-active {
  text-decoration: underline;
}
</style>
