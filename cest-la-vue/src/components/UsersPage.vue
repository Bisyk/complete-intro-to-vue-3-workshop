<template>
  <div>
    <h1>Users</h1>
    <div v-for="user in users">
      <p>{{ user.id }}.{{ user.name }} "{{ user.username }}" - {{ user.email }}</p>
      <p>- {{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }}</p>
      <br>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  async setup() {
    const users = ref([])
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
      return res
    }

    users.value = await fetchUsers()
    console.log(users.value)

    return {
      users
    }
  },


};
</script>

<style></style>
