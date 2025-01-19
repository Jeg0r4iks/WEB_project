<template>
  <div id="app">
    <h1>Mireqx</h1>

    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/history">History</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
h1 {
  color: black;
  font-size: 45px;
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
  font-family: Helvetica;
}

a:hover {
  text-decoration: underline;
}
</style>
