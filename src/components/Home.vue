<template>
  <div>
    <h1>Home</h1>
    <button @click="candidatesAll" type="submit" class="btn btn-primary">all candidates</button>
  </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            candidate: {}
        };
    },
    methods: {
        async candidatesAll() {
            try {
                const response = await axios.get('http://localhost:8000/candidates')
                console.log(response.data)
            } catch (error) {
                if (error.response && error.response.data.detail) {
                    this.message = error.response.data.detail
                } else {
                    this.message = 'error in registration'
                }
            }
        }
    }
}
</script>