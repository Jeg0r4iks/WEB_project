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
    gap: 15px;
    margin-bottom: 20px;
    padding: 10px;
    color: black;
  }
  
  .router-link-active {
    text-decoration: underline;
  }
</style>


  