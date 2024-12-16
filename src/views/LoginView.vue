<template>
  <div class="main">
    <div class="defaultBox">
      <form @submit.prevent="handleLogIn">
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Email"
              required
              class="form-input"
          />
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Password"
              required
              class="form-input"
          />
        </div>
        <div v-if="showError" class="password-checker">
          <p>Incorrect username or password.</p>
        </div>
        <button type="submit" class="login-button">Log In</button>
      </form>
      <div>or</div>
      <button><router-link to="/signup">Sign Up</router-link></button>
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
  name: 'SignUpView',
  data() {
    return {
      email: '',
      password: '',
      showError: false
    };
  },
  methods: {
    async handleLogIn() {
      try {
        const res = await axiosInstance.get('/auth/login', {
          params: {
            email: this.email,
            password: this.password,
          },
        });
        if (res.status === 201) {
          this.$router.push({ name: 'home' });
        } else {
          this.showError = true;
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while logging in');
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
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  background-color: var(--box-color);
  margin-bottom: 20px;
  position: relative;
  max-width: 400px;
}

input::placeholder {
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

.password-checker ul {
  list-style: disc;
  padding-left: 20px;
  margin: 0;
}

.password-checker li {
  margin-bottom: 5px;
}
</style>