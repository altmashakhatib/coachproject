<template>
   <section><TheHeader></TheHeader></section>
  <RegistrationForm @add-details="saveData"></RegistrationForm>
  
   
</template>

<script>
import RegistrationForm from './RegistrationForm.vue';

export default{
   components:{
      RegistrationForm
   },
   methods:{
      saveData(data){
         this.$store.dispatch('coaches/registerCoach',data)
         this.$router.replace('/coaches')
      }
   }
}

</script>