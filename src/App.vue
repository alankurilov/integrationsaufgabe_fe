<script setup lang="ts">

</script>

<template>
<!--x
<div class="container mt-4">
  <router-link to="/home">Войти</router-link> |
  <router-view />
  <div class="row justify-content-center">
    <div class="col-2">

    </div>
    <div class="col-8">

      <div class="input-group mb-3">
        <span class="input-group-text">First and last name</span>
        <input v-model="firstName" type="text" aria-label="First name" class="form-control" placeholder="First name">
        <input v-model="lastName" type="text" aria-label="Last name" class="form-control" placeholder="Last name">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input v-model="email" type="text" class="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon1">
      </div>
      <div class="form-group mb-3">
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button @click="register" type="submit" class="btn btn-primary">Register</button>
      <button @click="log_in" type="submit" class="btn btn-primary">Log in</button>
    </div>
  <div class="col-2">
 
  </div>

  </div>
</div>
-->
<Registration />
<router-view /> <!-- Тут будут меняться страницы -->
</template>

<script>
import Registration from './components/Registration.vue'
/* 
import axios from 'axios'

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      message: ''
    }
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('http://localhost:8000/', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        })
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
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        })  
        this.message = response.data.message
      } catch (error) {
        if (error.response && error.response.data.detail) {
          this.message = error.response.data.detail
        } else {
          this.message = 'error in login'
        }
      }
    }
  }
}*/
</script>