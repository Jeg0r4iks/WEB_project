<template>
<nav>       
  <router-link to="/history">History</router-link>
  <router-link to="/runway">Runway</router-link>
  <router-link to="/style">Style</router-link>
  <router-link to="/about">About</router-link>
</nav>
    <router-view></router-view>
</template>
  
<script>
export default {
name: 'Navbar',
};
</script>
  
<style>
  nav {
    display: flex;
    justify-content: center;
    gap: 100px;
    margin-bottom: 20px;
    padding: 10px;
    color: black;
    background-color: whitesmoke;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .router-link-active {
    text-decoration: underline;
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
