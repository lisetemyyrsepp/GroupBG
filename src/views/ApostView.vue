<template>
    <div class="main">
      <div class="defaultBox">
        <label for="apost" class="form-label">A Post</label>
        <form @submit.prevent="updatePost">
          <div class="form-group">
            <label for="title" class="form-label">Title</label>
            <textarea id="title" class="form-input" placeholder="Title" required spellcheck="true"></textarea>
          </div>
          <div class="form-group">
            <label for="body" class="form-label">Body</label>
            <textarea id="body" class="form-input" placeholder="Body" required spellcheck="true"></textarea>
          </div>
        </form>
        <div class="button-group">
            <button @click="submit">Update</button>
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
            title: '',
            body: '',
        },
      };
    },
    created() {
    this.fetchPost();
    },
    methods: {
        async fetchPost() {
            try {
                const response = await axiosInstance.get(`/api/posts/${this.$route.params.id}`);
                this.post = response.data;
            } catch (error) {
                console.error('Failed to fetch post:', error);
            }
        },
        async updatePost() {
            try {
                await axiosInstance.put(`/api/posts/${this.post.id}`, {
                title: this.post.title,
                body: this.post.body,
                });
                this.fetchPost(); // Refresh the post data after update
            } catch (error) {
                console.error('Failed to update post:', error);
            }
        },
        async deletePost() {
            try {
                await axiosInstance.delete(`/api/posts/${this.post.id}`);
                this.$router.push('/'); // Redirect to home after deletion
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