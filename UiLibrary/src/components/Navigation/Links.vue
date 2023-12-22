<!-- NavigationLinks.vue -->

<template>
  <nav>
    <ul class="navigation-links">
      <slot></slot>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavigationLinks',
};
</script>

<style scoped>
.navigation-links {
  list-style: none;
  padding: 0;
  display: flex;
}
</style>
