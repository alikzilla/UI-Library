<!-- ListGroup.vue -->

<template>
  <div class="list-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ListGroup',
};
</script>

<style scoped>
.list-group {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
