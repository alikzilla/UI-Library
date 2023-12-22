<!-- Tabs.vue -->

<template>
  <div>
    <div class="tab-header">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activateTab(index)"
        :class="{ 'active': index === activeTabIndex }"
        class="tab"
      >
        {{ tab.label }}
      </div>
    </div>
    <div class="tab-content">
      <slot :activeTabIndex="activeTabIndex"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTabIndex: 0,
    };
  },
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    activateTab(index) {
      this.activeTabIndex = index;
    },
  },
};
</script>

<style scoped>
.tab-header {
  display: flex;
}

.tab {
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px 5px 0 0;
  margin-right: 5px;
}

.tab.active {
  background-color: #007bff;
  color: white;
}

.tab-content {
  border: 1px solid #ccc;
  border-radius: 0 0 5px 5px;
  padding: 10px;
  margin-top: -1px;
}
</style>
