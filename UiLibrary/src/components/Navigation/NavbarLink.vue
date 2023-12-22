<!-- NavbarLink.vue -->

<template>
  <a class="navbar-link" :href="to">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'NavbarLink',
  props: {
    to: {
      type: String,
      default: '#',
    },
  },
};
</script>

<style scoped>
.navbar-link {
  margin-right: 20px;
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.navbar-link:hover {
  text-decoration: underline;
}
</style>