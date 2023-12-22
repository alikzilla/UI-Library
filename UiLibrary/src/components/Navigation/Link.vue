<!-- NavigationLink.vue -->

<template>
  <li class="navigation-link">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'NavigationLink',
};
</script>

<style scoped>
.navigation-link {
  margin-right: 20px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  cursor: pointer;
}

.navigation-link:hover {
  color: #007bff;
}
</style>