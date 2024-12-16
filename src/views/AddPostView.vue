<template>
    <div class="main">
      <div class="defaultBox">
        <h2>Add Post</h2>
        <form @submit.prevent="addPost">
          <div class="form-group">
            <label for="body">Body</label>
            <textarea id="body" v-model="body" placeholder="Enter post content"></textarea>
          </div>
          <button type="submit" @click="addPost">Add</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
  });

  export default {
    data() {
      return {
        body: '',
      };
    },
    methods: {
      async addPost() {
        try {
          const res = await axiosInstance.post('/api/posts', {
            body: this.body
          });
          if (res.status === 200) {
            this.$router.push({name: 'home'});
            console.log("Post added:", this.body);
          } else {
            console.log(res.status)
          }
        } catch (error) {
          console.error(error);
          alert('The post could not be created');
        }
      }
    }
  };
  </script>
  