<template>
<nav>
<div class="left">
  <i class="fas fa-search"></i>
</div>   
<div class="center">      
  <router-link to="/history">History</router-link>
  <router-link to="/runway">Runway</router-link>
  <router-link to="/style">Style</router-link>
  <router-link to="/about">About</router-link>
</div>
<div class="right">
  <i class="fa fa-moon"></i>
  <i class="fas fa-user"></i>
</div>
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
  justify-content: space-between; 
  align-items: center;
  padding: 10px;
  background-color: whitesmoke;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.center {
  display: flex;
  gap: 45px;
}

.left, .right {
  display: flex;
  align-items: center;
  margin: 15px;
  gap: 40px;
}

a {
  font-size: 20px;
  text-decoration: none;
  color: black;
  font-weight: normal;
}

a:hover {
  color: rgb(255, 0, 0);
}

.left :hover, .right :hover {
 color: rgb(255, 0, 0);
}

</style>