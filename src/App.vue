<template>
  <div id="app">
    <h1 @click="goHome">Mireqx</h1>
<<<<<<< HEAD
<<<<<<< HEAD
    <nav>
      <router-link to="/history">History</router-link>
      <router-link to="/runway">Runway</router-link>
      <router-link to="/style">Style</router-link>
      <router-link to="/about">About</router-link>
    </nav>
=======

=======
>>>>>>> 6e19c3e (added new views to the navbar)
    <nav>
      <router-link to="/history">History</router-link>
      <router-link to="/runway">Runway</router-link>
      <router-link to="/style">Style</router-link>
      <router-link to="/about">About</router-link>
    </nav>
<<<<<<< HEAD

>>>>>>> bc58c74 (added new views to navbar)
=======
>>>>>>> 6e19c3e (added new views to the navbar)
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
<<<<<<< HEAD
  margin: 0; 
  font-family: Helvetica;
=======
>>>>>>> bc58c74 (added new views to navbar)
=======
  margin: 0; 
  font-family: Helvetica;
>>>>>>> 6e19c3e (added new views to the navbar)
}

h1 {
  color: black;
  font-size: 65px;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  font-family: Helvetica;
>>>>>>> bc58c74 (added new views to navbar)
=======
>>>>>>> 6e19c3e (added new views to the navbar)
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
<<<<<<< HEAD
  font-weight: normal;
=======
  font-family: Helvetica;
>>>>>>> bc58c74 (added new views to navbar)
=======
  font-weight: normal;
>>>>>>> 6e19c3e (added new views to the navbar)
}

a:hover {
  text-decoration: underline;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6e19c3e (added new views to the navbar)

.router-link-active {
  text-decoration: underline;
}
<<<<<<< HEAD
=======
>>>>>>> bc58c74 (added new views to navbar)
=======
>>>>>>> 6e19c3e (added new views to the navbar)
</style>
