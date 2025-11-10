<script setup lang="ts">
import { RouterView } from 'vue-router';
import Registration from './components/Registration.vue'
</script>

<template>
  <div class="d-flex container">
    <div class="col-12">
    <Registration v-if="$route.path == '/'"/>
    <RouterView/>
    </div>
  </div>
</template>