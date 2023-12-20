<!-- Accordion.vue -->
<template>
  <div class="accordion">
    <div v-for="item in accordionItems" :key="item.name" class="accordion-item">
      <div class="accordion-header" @click="toggleAccordion(item)">
        {{ item.title }}
        <span v-if="item.expanded" class="accordion-icon">-</span>
        <span v-else class="accordion-icon">+</span>
      </div>
      <div v-if="item.expanded" class="accordion-content">
        <slot name="content" :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    accordionItems: Array
  },
  methods: {
    toggleAccordion(item) {
      item.expanded = !item.expanded;
    }
  }
};
</script>

<style scoped>
.accordion {
  width: 100%;
}

.accordion-item {
  border: 1px solid #ccc;
  margin: 10px;
  border-radius: 5px;
}

.accordion-header {
  padding: 10px;
  background-color: #f9f9f9;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
}

.accordion-content {
  padding: 10px;
}
</style>