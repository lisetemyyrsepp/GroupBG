<template>
  <div class="main">
    <div class="sidebar-left"></div>
    <div class="content">
      <div v-if="isLoading">Loading posts...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <PostComponent
            v-for="post in allPosts"
            :key="post.date"
            :post="post"
            @like-post="incrementLike"
            @reset.likes="resetLikes"
        />
      </div>
    </div>
    <div class="sidebar-right"></div>
  </div>
</template>

<script>
import PostComponent from '@/components/PostComponent.vue';
import {mapGetters, mapMutations, mapActions } from 'vuex';

// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'MainView',
  components: {
    PostComponent,
  },
  computed: {
    ...mapGetters('posts', ['allPosts', 'isLoading', 'error']), // Map state from the posts module
  },
  methods: {
    ...mapActions('posts', ['fetchPosts']), // Map actions from the posts module
    ...mapMutations("posts", ["incrementLike", "resetLikes"]),
  },

  resetLikesForAll() {
      this.resetLikes(); // Resets likes for all posts
    },

  created() {
    this.fetchPosts(); // Fetch posts when the component is created
  },
}
</script>

<style>
.main {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.sidebar-left {
    position: fixed;
    top: 0;
    left: 0;
    width: 10%;
    height: 100vh;
    background-color: var(--box-color);
    z-index: 1;
}

.sidebar-right {
    position: fixed;
    top: 0;
    right: 0;
    width: 10%;
    height: 100vh;
    background-color: var(--box-color);
    z-index: 1;
}

.content {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

.profile-picture {
    margin-right: 0.5em;
    display: flex;
    justify-content: left;
}

.profile-picture img {
    border-radius: 15%
}

/*section {
    padding: 10px 15px;
    margin: 10px;
    display: block;
}*/

.nav {
    display: flex;
    justify-content: left;
    font-size:larger;
    margin-left: 0.5em;
}

.nav a {
    padding: 10px 15px;
    text-align: center;
    display: block;
    font-size: .99em;
}

.nav a:hover {
    background-color: var(--secondary-color);
    color: darkgray;
    border-radius: 20px;
}

.separator {
    font-size: 1em;
    padding: 10px 15px;
}

@media (min-width: 800px) {
    .header,
    .nav {
        display: flex;
    }
    .header {
        flex-direction: row;
        align-items: center;
    }
}

@media (max-width: 800px) {
    .header {
        flex-direction: row;
    }
}

.login-header {
    font-weight: 700;
    margin-bottom: 10px;
}

.possible-button {
    color: rgb(107, 203, 235);
    margin-bottom: 0;
}

p {
    margin: 0;
    padding: 0;
}

.button button {
    background-color: rgb(12, 76, 160);
    border: none;
    padding: 5px 10px;
    cursor: pointer;
     
}

input::placeholder {
    color: lightgray;
}

#email {
    width: 90px;
    height: 20px;
    border: none;
    padding: 5px 10px;
    margin-bottom: -5px;
}

#password {
    width: 90px;
    height: 20px;
    border: none;
    padding: 5px 10px;
    margin-bottom: -5px;
}

.addPostForm {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.inputOptionsContainer {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: auto;
    margin-bottom: 2em;
}

.inputOptionsContainer > label {
    justify-self: right;
    grid-column: 1;
    margin: 0.5em;
}

label ~ textarea {
    height: 10em;
    justify-self: left;
    grid-column: 2;
    margin: 0.5em;
    resize: vertical;
    width: 80%;
}

label + .fileInputWrapper {
    justify-self: left;
    grid-column: 2;
    margin: 0.5em;
}

.fileInputWrapper {
    background-color: #7f7f7f;
    padding: 6px 12px;
    cursor: pointer;
}

.fileInputWrapper input{
    display: None;
}

.center {
    justify-content: center;
}

.dropdown-content {
    display: none;
    position: absolute;
    top: 75px; 
    right: 0px;
    background-color: #DCDCDC;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    padding: 10px;
    z-index: 1;
    width: 150px;
    border-radius: 10px;
}

/* Show class for toggling visibility */
.dropdown-content.show {
    display: block;
}

.reset-all-button {
  background-color: red;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>

label {
    display: block;
    margin-bottom: 5px;
    color: beige;
}

.error {
    color: red;
    font-size: 0.9em;
    margin-top: 10px;
}

.error p{
    font-weight: bold;
}

.input-row {
    display: flex;
    align-items: center;
    justify-content: center;
}

#reset-likes-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

#reset-likes-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

#reset-likes-button:hover {
    background-color: #0056b3;
}