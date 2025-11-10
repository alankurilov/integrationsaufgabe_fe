<template>
  <div>
    <ul>
      <li v-for="candidate in candidates" :key="candidate.id">
        {{ candidate.email }} - {{ candidate.firstName }}
        <button  type="submit" class="btn btn-primary me-2">vote</button>
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            candidates: []
        };
    },
    async created() {
        try {
            const response = await axios.get('http://localhost:8000/')
            this.candidates = response.data 
            console.log(candidates)
        } catch (error) {
            if (error.response && error.response.data.detail) {
                this.message = error.response.data.detail
            } else {
                this.message = 'error in registration'
            }
        }
    },
    methods: {
        async vote() {
        try {
            const response = await axios.get('http://localhost:8000/votes')
            this.candidates = response.data 
            console.log(candidates)
        } catch (error) {
            if (error.response && error.response.data.detail) {
                this.message = error.response.data.detail
            } else {
                this.message = 'error in registration'
            }
        }
    },
    }
}
</script>
