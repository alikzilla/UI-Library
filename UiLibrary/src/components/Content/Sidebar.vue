<template>
  <aside class="page-sidebar">
    <ul class="flex flex-col items-center gap-[10px]">
      <li class="text-[30px] hover:underline" v-for="(menuItem, index) in menuItems" :key="index">{{ menuItem }}</li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add your custom styling for the page sidebar menu component */
.page-sidebar {
  background-color: #f2f2f2;
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 8px;
}
</style>
