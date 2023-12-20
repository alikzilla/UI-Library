<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add your custom styling for the list component */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 8px;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
}
</style>
