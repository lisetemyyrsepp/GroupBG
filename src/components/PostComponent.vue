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
        <button class="like-button">👍 {{ post.likes }}</button>
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
  };
  </script>
  
  <style scoped>
  .post {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 20px;
    background-color: #fff;
  }
  </style>