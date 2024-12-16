<template>
    <div class="main">
      <div class="defaultBox">
        <label for="apost" class="form-label">A Post</label>
        <form @submit.prevent="updatePost">
          <div class="form-group">
            <label for="body" class="form-label">Body</label>
            <textarea id="body" class="form-input" placeholder="Body" required spellcheck="true" v-model="post.body"></textarea>
          </div>
        </form>
        <div class="button-group">
            <button type="submit" @click="updatePost">Update</button>
            <button @click="deletePost">Delete</button>
        </div>
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
    name: 'ApostView',
    data() {
      return {
        post: {
          body: '',
          date: new Date(),
        },
      };
    },
    created() {
    this.fetchPost();
    },
    methods: {
        async fetchPost() {
            try {
                const response = await axiosInstance.get(`/api/posts/${this.$route.query.id}`, {
                  id: this.$route.query.id,
                });
                this.post.body = response.data.body;
                console.log(response.data.body);
            } catch (error) {
                console.error('Failed to fetch post:', error);
            }
        },
        async updatePost() {
            try {
                await axiosInstance.put(`/api/posts/${this.$route.query.id}`, {
                  id: this.$route.query.id,
                  body: this.post.body,
                  date: this.post.date
                });
                this.$router.push({ name: 'home' });
            } catch (error) {
                console.error('Failed to update post:', error);
            }
        },
        async deletePost() {
            try {
                await axiosInstance.delete(`/api/posts/${this.$route.query.id}`, {
                  id: this.$route.query.id,
              });
                this.$router.push({ name: 'home'});
            } catch (error) {
                console.error('Failed to delete post:', error);
            }
        },
    },
};
</script>
  
<style>
  
  body {
    display: flex;
    justify-content: center;
    padding-top: 6em;
    font-family: Arial, serif;
    color: var(--text-color);
    line-height:1.6;
    margin: 0;
    background-color: var(--background-color);
  }
  
  .defaultBox {
    padding: 60px;
    border-radius: 10px;
    text-align: center;
    background-color: var(--box-color);
    margin-bottom: 20px;
    position: relative;
    max-width: 400px;
  }
  
  textarea::placeholder {
    color: lightgray;
  }
  
  .form-group {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .form-label {
    margin-right: 10px;
    flex: 0 0 80px;
    color: #42B983;
  }
  
  .form-input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    min-width: 200px;
    height: 60px;
  }
  
  .button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    }

  button {
    width: 40%;
    padding: 8px;
    background-color: #499899;
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
</style>