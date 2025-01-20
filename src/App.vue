<template>
  <div id="app">
    <h1 @click="goHome">Mireqx</h1>
<<<<<<< HEAD
    <nav>
      <router-link to="/history">History</router-link>
      <router-link to="/runway">Runway</router-link>
      <router-link to="/style">Style</router-link>
      <router-link to="/about">About</router-link>
    </nav>
=======

    <nav>
      <router-link to="/history">History</router-link>
      <router-link to="/about">About</router-link>
    </nav>

>>>>>>> bc58c74 (added new views to navbar)
    <router-view></router-view>
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
<<<<<<< HEAD
  margin: 0; 
  font-family: Helvetica;
=======
>>>>>>> bc58c74 (added new views to navbar)
}

h1 {
  color: black;
  font-size: 65px;
<<<<<<< HEAD
=======
  font-family: Helvetica;
>>>>>>> bc58c74 (added new views to navbar)
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
<<<<<<< HEAD
  font-weight: normal;
=======
  font-family: Helvetica;
>>>>>>> bc58c74 (added new views to navbar)
}

a:hover {
  text-decoration: underline;
}
<<<<<<< HEAD

.router-link-active {
  text-decoration: underline;
}
=======
>>>>>>> bc58c74 (added new views to navbar)
</style>
