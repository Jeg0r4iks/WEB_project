<template>
  <nav :class="{ dark: isDarkMode }">
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
      <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'" @click="toggleDarkMode"></i>
      <i class="fas fa-user"></i>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isDarkMode: localStorage.getItem('isDarkMode') === 'true',
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('isDarkMode', this.isDarkMode);
      document.body.classList.toggle('dark-mode', this.isDarkMode);
      this.$emit('dark-mode-changed', this.isDarkMode);
    },
  },
  mounted() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  },
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
  transition: background-color 0.3s ease, color 0.3s ease;
}

nav.dark {
  background-color: #222;
  border-color: #444;
}

.center {
  display: flex;
  gap: 45px;
}

a {
  font-size: 20px;
  text-decoration: none;
  color: black;
  font-weight: normal;
  transition: color 0.3s ease;
}

a:hover {
  color: rgb(255, 0, 0);
}

nav.dark a {
  color: whitesmoke;
}

nav.dark a:hover {
  color: rgb(255, 0, 0);
}

.left, .right {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 25px;
}

.right i {
  cursor: pointer;
  font-size: 24px;
  transition: color 0.3s ease;
}

nav i {
  color: black;
}

nav.dark i {
  color: whitesmoke;
}

nav i:hover, nav.dark i:hover {
  color: rgb(255, 0, 0);
}

body.dark-mode {
  background-color: #181818;
  color: white;
}

nav.dark i {
  color: whitesmoke;
}

@media (max-width: 768px) {
  .center {
    gap: 20px;
  }
}
</style>
