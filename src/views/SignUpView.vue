<template>
  <div class="content">
    <div class="defaultBox">
    <form @submit.prevent="handleSignup">
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
      <button type="submit" class="signup-button">Sign Up</button>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
};
</script>

<style>
:root {
    --text-color: #ffffff;
    --primary-color: #499899;
    --primary-shadow: #204444;
    --secondary-color: #589949;
    --secondary-shadow: #274420;
    --background-color: #282828;
    --box-color: #465050;
}

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

.content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
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

.signup-button {
  width: 40%;
  padding: 8px;
  background-color: #499899;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}

.signup-button:hover {
  background-color: #45a049;
}
</style>