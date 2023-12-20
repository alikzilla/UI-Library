<template>
  <footer class="page-footer">
    <p>&copy; {{ currentYear }} Your Company</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
/* Add your custom styling for the page footer component */
.page-footer {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}
</style>
