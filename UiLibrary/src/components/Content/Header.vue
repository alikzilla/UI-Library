<template>
  <header class="page-header">
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add your custom styling for the page header component */
.page-header {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}
</style>
