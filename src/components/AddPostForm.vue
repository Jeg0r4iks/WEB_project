<template>
  <div>
    <button @click="addEmptyPost">Add new post</button>
  </div>
</template>

<script>
export default {
  name: "AddPostForm",
  methods: {
    addEmptyPost() {
      const emptyPost = {
        title: "",
        content: "",
        date: new Date().toLocaleString(),
      };

      this.$emit("add-post", emptyPost);
    },
  },
};
</script>
