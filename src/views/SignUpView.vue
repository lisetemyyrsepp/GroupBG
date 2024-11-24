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
          @input="validatePassword"
        />
      </div>
      <div v-if="showError" class="password-checker">
          <p>Password is not valid. Please consider the following requirements:</p>
          <ul>
            <li v-for="(error, index) in passwordErrors" :key="index">{{ error }}</li>
          </ul>
      </div>
      <button type="submit" class="signup-button">Sign Up</button>
    </form>
  </div>
 </div>
</template>

<script>
export default {
  name: 'SignUpView',
  data() {
    return {
      email: '',
      password: '',
      passwordErrors: [],
      showError: false,
    };
  },
  methods: {
    validatePassword() {
      const errors = [];
      if (this.password.length < 8 || this.password.length >= 15) {
        errors.push('Password length should be at least 8 and less than 15 characters.');
      }
      if (!/[A-Z]/.test(this.password)) {
        errors.push('Password must include at least one uppercase alphabet character.');
      }
      if ((this.password.match(/[a-z]/g) || []).length < 2) {
        errors.push('Password must include at least two lowercase alphabet characters.');
      }
      if (!/[0-9]/.test(this.password)) {
        errors.push('Password must include at least one numeric value.');
      }
      if (!/^[A-Z]/.test(this.password)) {
        errors.push('Password must start with an uppercase alphabet.');
      }
      if (!this.password.includes('_')) {
        errors.push('Password must include the character "_".');
      }
      this.passwordErrors = errors;
      this.showError = errors.length > 0;
    },
    handleSignup() {
      this.validatePassword();
      if (this.passwordErrors.length > 0) {
        this.showError = true;
      } else {
        this.showError = false;
        alert("Signup successful!");
      }
    },
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

.password-checker {
  display: block;
  margin-top: 10px;
  text-align: left;
  font-size: 0.9em;
  color: #ff4d4d;
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