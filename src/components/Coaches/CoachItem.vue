<template>
  <div class="div">
    <h4> Full Name : {{ fullName }}</h4>
    <p> Rate : {{ rate }}</p>
    <div v-for="area in areas" :key="area" class="inline">
        {{ area }}

    </div>
    <div class="actions">
    <router-link :to="contact">Contact</router-link><br>
    <router-link :to="viewDetails">View Details</router-link></div>
  </div>


</template>


<script>


export default{
    props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
    computed: {
        fullName() {
            return this.firstName + ' '+this.lastName;
        },
        contact(){
            return '/contact/'+this.id
        },
        viewDetails(){
            return '/coaches/'+ this.id
        }
    },
    
}



</script>
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}
.div{
  margin: 0.5rem;
  border: 1px solid gray;
  border-radius: 5px;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
.inline{
 
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: brown;
  border: 1px solid #3a0061;
  color: white;
  
  border-radius: 30px;
 
  margin-right: 0.5rem;
  display: inline-block;
}

</style>