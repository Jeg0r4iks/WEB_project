<template>
    <div class="container">
      <h2>{{ isLogin ? 'Sign In' : 'Create an account' }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input v-model="password" type="password" id="password" required />
        </div>
        <div v-if="!isLogin" class="input-group">
          <label for="confirmPassword">Confirm Password</label>
          <input v-model="confirmPassword" type="password" id="confirmPassword" required />
        </div>
        <button type="submit">{{ isLogin ? 'Enter' : 'Registration' }}</button>
      </form>
      <p @click="toggleMode" class="toggle-text">
        {{ isLogin ? 'Create an account' : 'Sign In' }}
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isLogin = ref(true);
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  
  const toggleMode = () => {
    isLogin.value = !isLogin.value;
  };
  
  const handleSubmit = () => {
    if (!isLogin.value && password.value !== confirmPassword.value) {
      alert('Password is incorrect');
      return;
    }
    alert(`${isLogin.value ? 'Enter' : 'Registration'} выполнена!`);
  };
  </script>

<style scoped>
.container {
  max-width: 350px;
  margin: auto;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  margin-top: 25px;
  box-shadow: rgb(244, 153, 153) 1px 1px 10px;
  background-color: whitesmoke;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}
label {
  display: block;
  font-family: 'Perfectly Vintages';
  font-size: 20px;
  margin-bottom: 10px;
}
input {
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  width: 80%;
  padding: 10px;
  border: none;
  background-color: black;
  color: white;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  font-family: 'Perfectly Vintages';
  font-size: 20px;
}
button:hover {
    background-color: rgb(244, 153, 153);
}

h2 {
    font-family: 'Perfectly Vintages';
    font-size: 40px;
    font-weight: normal;
}

.toggle-text {
  color: black;
  cursor: pointer;
  font-family: 'Perfectly Vintages';
  margin-top: 25px;
  font-size: 20px;
}
.toggle-text:hover {
  text-decoration: underline;
}
</style>