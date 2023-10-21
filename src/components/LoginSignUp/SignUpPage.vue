<template>
    <section>
        
        <base-card>
        <h1>SignUp</h1>
        <form @submit.prevent="submitForm">
            <div>
                <input type="email" name="email" id="email" placeholder="Enter Email" v-model="email">
            </div>
            <div>
                <input type="password" name="password" id="password" placeholder="Enter Password" v-model="password">
            </div>
            <p v-if="formvalid">Fill All Information Properly !</p>
            <div>
                <base-button>Sign Up</base-button>
            </div>
        </form>
        <div>
          <p>if already account? 
          <router-link class="link" to="/login">Click here!</router-link></p>

        </div>
    
    </base-card>
    </section>
</template>
<script>
export default{
    data(){
        return{
            email:'',
            password:'',
            formvalid:false
        }
    },
    methods:{
       async  submitForm(){
            if(this.email===''||this.password===''){
                this.formvalid=true
            }else
            {const formData={
                email:this.email,
                password:this.password
            }
          await  this.$store.dispatch('login/signUp',formData)
          this.$router.replace('/login')

            }
        }
    }
}

</script>
<style scoped>
/* Add your CSS styling here */

/* Style for the card container */

section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0; /* Background color for the section */
}
.link{
  border: none;
  background: none;
  border-radius: 0;
  color: blue;
  text-decoration: underline;
}
h1{
    text-align:center;
    
}
/* Style for the base card */
/* base-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
} */

/* Style for form input and label */
form div {
  margin-bottom: 10px;
}

form input {
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Style for error message */
form p {
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
}

/* Style for the login button */
form base-button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

form base-button:hover {
  background-color: #2980b9;
}

</style>
