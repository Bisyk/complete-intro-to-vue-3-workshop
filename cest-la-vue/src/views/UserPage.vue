<script setup>
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
</script>

<template>
  {{ route.params.userId }}
  <RouterLink :to="`/users/${route.params.userId}/feed`">Feed
  </RouterLink>
  <RouterLink :to="`/users/${route.params.userId}/likes`">Likes</RouterLink>
  <RouterView />
</template>