<template>
    <div class="post">
      <div class="post-header">
        <div>
          <span class="post-date">{{ post.date.slice(0, 10) }}</span>
        </div>
      </div>
      <div class="title">{{ post.title }}</div>
      <div class="body">{{ post.body }}</div>
      <div class="post-footer">
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

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.post-date {
  font-size: 0.9em;
}

.body {
  font-size: 1em;
  margin-top: 10px;
  text-align: left;
}

.post-footer {
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
}
</style>