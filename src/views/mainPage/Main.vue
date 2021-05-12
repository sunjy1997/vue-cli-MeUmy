<template>
  <div id="app" class="namePage">
    <pageHeader></pageHeader>
  </div>
</template>

<script>
  import pageHeader from '../../components/pageHeader'

  export default {
    name: "mainPage",
    components: {
      pageHeader
    }
  }
</script>

<style scoped>
.namePage {
  font-family: 'cjkFonts';
}
</style>
