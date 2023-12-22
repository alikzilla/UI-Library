<template>
  <nav class="breadcrumb">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <span v-if="index !== items.length - 1">
          <router-link :to="item.to">{{ item.label }}</router-link>
        </span>
        <span v-else>{{ item.label }}</span>
      </li>
    </ul>
  </nav>
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
.breadcrumb {
  margin: 10px 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

li {
  display: inline-flex;
  align-items: center;
  margin-right: 5px;
}

span {
  margin-right: 5px;
}

a {
  text-decoration: none;
  color: #007bff;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}
</style>
