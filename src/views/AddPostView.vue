<template>
    <div class="main">
      <div class="defaultBox">
        <h2>Add Post</h2>
        <form @submit.prevent="addPost">
          <div class="form-group">
            <label for="body">Body</label>
            <textarea id="body" v-model="body" placeholder="Enter post content"></textarea>
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        body: '',
      };
    },
    methods: {
      addPost() {
        // Logic to add post to the database
        console.log("Post added:", this.body);
      }
    }
  };
  </script>
  