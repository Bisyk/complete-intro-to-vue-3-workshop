<script setup>
import { useCounterStore } from '../stores/itemTypeStore';

const store = useCounterStore()
</script>

<template>
  <h1>Dashboard</h1>
  {{ store.count }}
  {{ store.doubleCount }}
  <button @click="store.increment">+</button>
</template>