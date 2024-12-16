<template>
  <div class="main">
    <div class="sidebar-left"></div>
    <div class="defaultBox">
      <div class="content">
        <label class="form-label">Email: <span class="info">postit@gmail.com</span></label>
        <label class="form-label">Phone: <span class="info">56543467</span></label>
      </div>
  </div>
    <div class="sidebar-right"></div>
  </div>
</template>

<script>
export default {
  name: 'ContactsView',
}
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
    padding: 60px;
    border-radius: 10px;
    text-align: center;
    background-color: var(--box-color);
    margin-bottom: 20px;
    position: relative;
    max-width: 400px;
  }

  .form-label {
  display: flex;
  justify-content: center;
}

.info {
  margin-left: 5px;
  font-weight: bold;
  }
</style>