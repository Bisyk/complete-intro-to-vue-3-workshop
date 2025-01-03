<template>
  <div>
    <h1>Users</h1>
    <p>Total users {{ totalUsers }}</p>
    <UserCard v-for="user in users" :user="user" @delete-user="deleteUser" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import UserCard from './UserCard.vue';

const users = ref([])
const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
  return res
}

const totalUsers = computed(() => {
  return users.value.length
})

const deleteUser = (id) => {
  users.value = users.value.filter(u => u.id != id)
}

users.value = await fetchUsers()
console.log(users.value)

</script>

<style></style>
