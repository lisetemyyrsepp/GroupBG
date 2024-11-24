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
        <img v-if="post.image" class="post-image" :src="post.image" alt="Post image" />
      <div class="post-caption">{{ post.caption }}</div>
      <div class="post-footer">
        <button @click="likePost" class="like-button">👍 {{ post.likes }}</button>
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
    background-color: var(--primary-color);
    color: white;
  }

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }

  .post-profile-pic {
    width: 64px;
    height: 64px;
    border-radius: 15%;
  }

  .post-date {
    font-size: 0.9em;
  }

  .post-image {
    width: 100%;
    height: auto;
    margin-top: 10px;
    border-radius: 10px;
  }

  .post-caption, .post-message {
    font-size: 1em;
    margin-top: 10px;
    text-align: left;
  }

  .post-footer {
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
  }

  .like-button {
    width: 50px;
    height: auto;
    cursor: pointer;
    background-color: var(--secondary-color);
  }
  </style>