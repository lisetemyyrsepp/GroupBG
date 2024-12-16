<template>
    <footer class="footer">
        <p>&copy; {{ currentYear }} PostIt. All rights reserved.</p>
    </footer>
</template>
  
<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
}
</script>
  
<style scoped>
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    background: var(--primary-color);
    background: linear-gradient(90deg, var(--primary-color) 50%, var(--secondary-color) 100%);
    border-radius: 10px 10px 0 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    }

  .footer::before {
    content: "";
    position: absolute;
    inset: -0.2em;
    background: linear-gradient(90deg, var(--primary-shadow) 50%, var(--secondary-shadow) 100%);
    filter: blur(1em);
    transform: translate3d(0px, 0px, -10px);
    }
</style>