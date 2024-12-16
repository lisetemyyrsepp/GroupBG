<template>
    <div class="main">
      <div class="defaultBox">
        <h2>Add Post</h2>
        <form @submit.prevent="addPost">
          <div class="form-group">
            <label for="body">Body       </label>
            <input id="body" v-model="body" placeholder="body"/>
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
        if (this.body.trim() === '') {
            alert('Body cannot be empty!');
            return;
        }
        console.log("Post added:", this.body);
        this.$router.push({ name: 'MainView' });
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
  