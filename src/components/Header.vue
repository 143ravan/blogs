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
    box-shadow: 0 2px 20px 0 hsl(0deg 0% 72% / 15%);

  }
  .logo {
    width: 140px;
    height: 35px;
  }
</style>