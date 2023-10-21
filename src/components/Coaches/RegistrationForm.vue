<template>
  <section>
    <div v-if="isLoading">
      <base-spinner></base-spinner>

    </div>

    <base-card>
      <form @submit.prevent="submitData">
        <div class="form-control" :class="{invalid:!firstname.isValid}">
          <label for="firstname">FirstName</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            v-model.trim="firstname.val"
            @blur="clearValidity('firstname')"
          />
          <p v-if="!validForm">Fill Proper Information</p>
        </div>
        <div class="form-control" :class="{invalid:!validForm}">
          <label for="lastname">LasttName</label>
          <input type="text" name="lastname" id="lastname" v-model.trim="lastname.val" @blur="clearValidity('lastname')" />
          <p v-if="!validForm">Fill Proper Information</p>
        </div>
        <div class="form-control">
          <label for="rate">Rate</label>
          <input type="number" name="rate" id="rate" v-model.trim="rate.val" />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows="5"
            v-model.trim="description.val"
          ></textarea>
        </div>
        <div class="form-control" :class="{invalid:! areas.isValid}">
          <label for="areas">Area Speciality</label>
          <input
            type="checkbox"
            name="frontend"
            id="frontend"
            value="frontend"
            v-model="areas.val"
          />
          <label for="frontend">Frontend</label>
          <input type="checkbox" name="backend" id="backend" value="backend" v-model="areas.val" />
          <label for="backend">Backend</label>
          <input type="checkbox" name="career" id="career" value="carrer" v-model="areas.val" />
          <label for="career">Career</label>
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  emits: ["add-details"],
  data() {
    return {
      isLoading:false
,      firstname: {
        val:'',
        isValid:true
      },
      lastname: {
        val:'',
        isValid:true
      },
      rate: {
        val:null,
        isValid:true
      },
      description: {
        val:'',
        isValid:true
      },
      areas: {
        val:[],
        isValid:true
      },
      validForm:true
    };
  },
  methods: {
    clearValidity(input){
      this[input].isValid=true

    },
    submitData() {
      
      const formData = {
        first:this.firstname,
        last:this.lastname,
        desc:this.description,
        rate:this.rate,
       areas:this.areas

      };
      if(this.firstname.val === ''){
        this.firstname.isValid=false
        this.validForm =false
      }
      if(this.lastname.val === ''){
        this.lastname.isValid=false
        this.validForm =false
      }
      if(this.areas.val.length === 0){
        this.areas.isValid =false,
        this.validForm=false
      }
     

      
      else{this.$emit("add-details", formData)
      this.isLoading=true
      this.$router.replace('/coaches')
      
      ;}
      
      
    },
  },
};
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
