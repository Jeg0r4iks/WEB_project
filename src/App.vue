<template>
  <div id="app">
    <h1 @click="goHome">Mireqx</h1>
    <Navbar />
    <AddPostForm @add-post="addPost" />

    <div v-if="posts.length > 0">
      <ul>
        <li v-for="(post, index) in posts" :key="index" class="post">
          <div class="post-content">
            <h3>{{ post.title || "no name" }}</h3>
            <p>{{ post.content || "no info" }}</p>
            <small>Date: {{ post.date }}</small>
          </div>
          <button @click="deletePost(index)" class="delete-btn">Delete</button>
        </li>
      </ul>
    </div>
    <p v-else>Add post</p>
  </div>
  <AppFooter />
</template>

<script>
import Navbar from './components/navbar.vue';
import AppFooter from './components/footer.vue';
import AddPostForm from './components/AddPostForm.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    AppFooter,
    AddPostForm
  },
  data() {
    return{
      posts: [],
    };
  },
  methods: {
    goHome() {
      this.$router.push('..\views\HomeView.vue');
    },
    addPost(post) {
      this.posts.push(post);
    },
  },
}
</script>

<style>
body {
  background-color: blanchedalmond;
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
