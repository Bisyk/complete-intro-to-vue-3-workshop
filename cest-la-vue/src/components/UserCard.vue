<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  user: {
    required: true
  }
})

const emits = defineEmits(['delete-user']) 
</script>

<template>
  <div>
    <p>{{ user.id }}.{{ user.name }} "{{ user.username }}" - {{ user.email }} <button
        @click='$emit("delete-user", user.id)'>Delete</button></p>
    <p>- {{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }}</p>
    <br>
  </div>
</template>

<style>
.user-card {
  border: 2px solid #222;
  padding: 10px;
}
</style>
