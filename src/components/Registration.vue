
<template>

<div class="container mt-4">
  <router-link to="/home" v-if="next">Home</router-link> 
  <router-link to="/admin" v-if="admin">Admin</router-link> 
  <router-view />
  <div class="row justify-content-center">
    <div class="col-2">

    </div>
    <div class="col-8">

      <div class="input-group mb-3">
        <span class="input-group-text">first and last name</span>
        <input v-model="firstname" type="text" aria-label="first name" class="form-control" placeholder="first name">
        <input v-model="lastname" type="text" aria-label="last name" class="form-control" placeholder="last name">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input v-model="email" type="text" class="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon1">
      </div>
      <div class="form-group mb-3">
        <input v-model="password" type="password" class="form-control" id="exampleinputpassword1" placeholder="password">
      </div>
      <button @click="register" type="submit" class="btn btn-primary">register</button>
      <button @click="log_in" type="submit" class="btn btn-primary">log in</button>
    </div>
  <div class="col-2">
 
  </div>

  </div>
</div>

</template>

<script>
import axios from 'axios'
import { ref, watch } from 'vue';

export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      message: '',
      next: false,
      admin: false
    }
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('http://localhost:8000/', {
          firstName: this.firstname,
          lastName: this.lastname,
          email: this.email,
          password: this.password
        })
        console.log(response.status)
        console.log(this.next);  
        if(response.status === 200){
          this.next = true
          this.admin = false
        } 
        console.log(next);  
        this.message = response.data.message
      } catch (error) {
        if (error.response && error.response.data.detail) {
          this.message = error.response.data.detail
          
        } else {
          this.message = 'error in registration'
        }
      }
    },
    async log_in() {
      try {
        const response = await axios.post('http://localhost:8000/login', {
          firstName: this.firstname,
          lastName: this.lastname,
          email: this.email,
          password: this.password
        })  
        console.log(response)
        if(response.data === "admin"){
          this.admin = true
          this.next = false
        } else if(response.status === 200){
          this.next = true
          this.admin = false
        }
        this.message = response.data.message
      } catch (error) {
        if (error.response && error.response.data.detail) {
          this.message = error.response.data.detail
        } else {
          this.message = 'error in login'
        }
        this.next = false
        this.admin = false
      }
    }
  }
}
</script>template>
