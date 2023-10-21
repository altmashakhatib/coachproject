<template>
  <section><TheHeader></TheHeader></section>
   <section >
    <header>
            <h2>Recived Request !</h2>
        </header>
       
    <ul v-if="hasRequests" >  <div v-if="isLoading">
    
    <base-spinner></base-spinner>

   </div>
  
   <requestItem  class="valid" :class="{invalid:isLoading}" v-for="req in requests" :key="req.id" :email="req.email" :message="req.message"></requestItem>
      </ul>

    <p v-else>No Requests!</p>
   </section>



    
</template>

<script>

import requestItem from './requestItem.vue';
export default{
  data(){
    return{
      isLoading:false
    }
  },
    components:{
        requestItem
    },
    computed:{
        requests(){
            return this.$store.getters['requests/requests']
        },
        hasRequests(){
            return this.$store.getters['requests/hasRequests']
        }
    },
    created(){
      this.fetchRequest()
      
    },
    methods:{
      async fetchRequest(){this.isLoading=true
       await this.$store.dispatch('requests/fetchRequest')
      this.isLoading=false
    }

}}


</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}
.invalid{
 content-visibility: hidden;
}

h3 {
  text-align: center;
}

</style>