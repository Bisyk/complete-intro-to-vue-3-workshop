<script setup>
import { defineProps } from 'vue';
import { useState } from '../composables/useState';
import { counter } from '../composables/useCounter';
import { useRouter } from 'vue-router';

const { state, setState } = useState()
const router = useRouter()

const props = defineProps({
  user: {
    required: true
  }
})


const emits = defineEmits(['delete-user']) 
</script>

<template>
  <p>{{ state }} <button @click="setState(2)">change state</button></p>
  <p>{{ counter }} <button @click="counter++">+</button></p>
  <div class="user-card" @click="() => router.push(`users/${user.id}`)">
    <p>{{ user.id }}.{{ user.name }} "{{ user.username }}" - {{ user.email }} <button
        @click='$emit("delete-user", user.id)'>Delete</button></p>
    <p>- {{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }}</p>
    <br>
  </div>
</template>

<style scoped>
div {
  border: 2px solid #222;
  padding: 20px;
  margin: 10px;

}
</style>
