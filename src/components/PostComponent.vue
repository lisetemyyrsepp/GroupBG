<template>
    <div class="post">
      <div class="post-header">
        <div class="profile-picture">
          <img :src="post.authorImage" alt="Author's profile picture" class="post-profile-pic" />
        </div>
        <div>
          <span class="post-date">{{ post.date }}</span>
        </div>
      </div>
      <div v-if="post.image" class="post-image">
        <img :src="post.image" alt="Post image" />
      </div>
      <div class="post-caption">{{ post.caption }}</div>
      <div class="post-footer">
        <button @click="likePost" class="like-button">👍 {{ post.likes }}</button>
        <button @click="resetLikes" class="reset-button">Reset likes</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PostComponent',
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
    methods: {
    likePost() {
      this.$emit("like-post", this.post.date);
    },
    resetLikes() {
      this.$emit("reset-likes", this.post.date);
    },
  },
  };
  </script>
  
  <style scoped>
  .post {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 20px;
    background-color: var(--box-color);
  }

  .reset-button {
    background-color: blue;
    color: white;
  }

  .defaultBox {
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    background-color: var(--box-color);
    margin-bottom: 20px;
    position: relative;
  }
  </style>