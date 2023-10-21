<template>
    <header>
        <nav>
            <h2>Find A Coach</h2>
            <router-link to="/coaches">All Coaches</router-link>
            <router-link to="/request">Requests</router-link>
            <base-button @click="logout">Logout</base-button>
        </nav>
    </header>
</template>
<script>
export default{
  methods:{
    logout(){
      this.$store.dispatch('login/logout')
      this.$router.replace('/login')
    }
  }

}

</script>

<style scoped>
/* Header styles */
header {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
}

/* Navigation styles */
nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav h2 {
  font-size: 24px;
  margin-right: 20px;
}

nav a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  margin-right: 15px;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #ff6600; /* Change to your desired hover color */
}

</style>


