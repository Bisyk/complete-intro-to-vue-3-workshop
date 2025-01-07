<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const handleLogIn = () => {
  router.push('/dashboard')
}
</script>

<template>
  <main>
    <h1>Login</h1>
    <label for="email">Email</label>
    <input type="email" />
    <button @click="handleLogIn">Continue with email</button>
  </main>
</template>

<style></style>
