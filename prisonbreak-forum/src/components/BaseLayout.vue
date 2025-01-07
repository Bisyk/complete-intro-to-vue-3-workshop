<template>

  <body>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </body>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  margin: 20px 0;
}
footer {
  border: 1px solid red;
  text-align: center;
  margin: 24px 0;
  padding: 24px;
}
</style>