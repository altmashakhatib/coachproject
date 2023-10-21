
<template>
    <section><TheHeader></TheHeader></section>
   <section>
    <base-card>
    <h2>Full Name:{{ fullName }}</h2>
    <p>Rate:{{ rate }}/hr</p>
    


</base-card>
   </section>
   <section>

    <base-card>
    <router-link :to="contact">Contact</router-link>
    <router-view></router-view>


</base-card>

   </section>
   <section>
    <base-card>
    <p>Description :{{ description }}</p>
</base-card>
   </section>
   
</template>
<script>

export default{
    props:['id'],
   data(){
    return{
        selectCoach:null
    }
   },
   computed:{
    fullName(){
        return this.selectCoach.firstName+''+this.selectCoach.lastName
    },
    rate(){
        return this.selectCoach.hourlyRate
    },
    contact(){
        return '/contact/'+this.id
    },
    description(){
        return this.selectCoach.description
    }

   },
   created(){
    this.selectCoach=this.$store.getters['coaches/coaches'].find((coach)=>coach.id===this.id)
   }


}
</script>
