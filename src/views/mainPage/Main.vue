<template>
  <div id="app" class="namePage">
    <pageHeader
      pageNum = '1'></pageHeader>
  </div>
</template>

<script>
  import pageHeader from '../../components/pageHeader'

  export default {
    name: "mainPage",
    components: {
      pageHeader
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style scoped>
.namePage {
  font-family: 'cjkFonts';
}
</style>
