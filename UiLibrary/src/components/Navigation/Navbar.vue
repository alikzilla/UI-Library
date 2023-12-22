<!-- Navbar.vue -->

<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <slot name="brand">My App</slot>
    </div>
    <div class="navbar-links">
      <slot></slot>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar {
  background-color: #007bff;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
}

.navbar-links {
  display: flex;
  align-items: center;
}
</style>
