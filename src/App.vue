<template>
  <HeaderComponent />
  <router-view />
  <FooterComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}

</script>

<style>
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

:root {
  --text-color: #ffffff;
  --primary-color: #499899;
  --primary-shadow: #204444;
  --secondary-color: #589949;
  --secondary-shadow: #274420;
  --background-color: #282828;
  --box-color: #465050;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: var(--text-color);
  text-decoration: none;
}
</style>
