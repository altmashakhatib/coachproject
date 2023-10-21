<template>
  
    <form @submit.prevent="submitData">
        <div class="form-control">
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" v-model.trim="email">
        </div>
        <div class="form-control">
            <label for="message">Message:</label>
            <textarea name="message" id="message" rows="5" v-model.trim="message"></textarea>
        </div>
        <div class="actions">
            <button>Send Message</button>

        </div>
        <div class="errors" v-if="isValid">
            Fill Proper Information
        </div>

    </form>
</template>
<script>
export default{
    data(){
        return{
            email:'',
            message:'',
            isValid:false
        }
    },
    methods:{
        submitData(){
            if(this.email===''||this.message===''){
                this.isValid=true
            }else{
            this.$store.dispatch('requests/requestCoach',{
                email:this.email,
               message:this.message,
               
               
            })
          this.$router.replace('/coaches')}
            
        }
    }
}



</script>
<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}


</style>