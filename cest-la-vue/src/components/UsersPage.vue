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
export default {
  data() {
    return {
      users: [],
    }
  },
  methods: {
    async fetchUsers() {
      const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
      this.users = users
    }
  },
  created() {
    this.fetchUsers()
  }
};
</script>

<style></style>
