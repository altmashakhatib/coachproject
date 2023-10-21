<template>
 
  <router-view></router-view>
</template>

<script>


export default{
  created(){
    this.$store.dispatch('login/tryLogin')
  }
 
}



</script>


<style scoped>
/* Style for the header */
header {
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
}

/* Style for the router-view (assuming it's a container for your content) */
router-view {
  padding: 20px;
}

/* Optional: Apply styles to specific elements within router-view */
router-view h1 {
  font-size: 2em;
}

router-view p {
  font-size: 1.2em;
}
</style>
