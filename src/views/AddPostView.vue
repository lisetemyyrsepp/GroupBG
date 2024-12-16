<template>
    <div class="main">
      <div class="defaultBox">
        <h2>Add Post</h2>
        <form @submit.prevent="addPost">
          <div class="form-group">
            <label for="body">Body       </label>
            <input id="body" v-model="body" placeholder="body"/>
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
        if (this.body.trim() === '') {
          alert('Body cannot be empty!');
          return;
        }
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

<style scoped>
.defaultBox {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  display: block;
  flex-direction: row;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
}
button {
    width: 20%;
}
</style>
