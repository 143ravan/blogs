<template>
  <header>
    <div class="header">
      <img
        src="@/assets/truecaller.svg"
        alt="logo"
        class="logo"
        @click="redirectHome"
      >
    </div>
  </header>
</template>
<script>
  export default {
    name: 'Header',
    methods: {
      redirectHome () {
        this.$router.push({name: 'Blog'})
      }
    }
  }
</script>

<style scoped>
  .header {
    padding: 10px 50px;
    box-shadow: 0 0 16px -4px rgba(0, 0, 0, 0.12);

  }
  .logo {
    width: 140px;
    height: 35px;
  }
</style>