<template>
  <div>
    <button @click="toggleDrawer">Toggle Drawer</button>

    <div v-if="isDrawerOpen" class="drawer" @click.self="closeDrawer">
      <div class="drawer-content" @click.stop>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDrawerOpen: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    closeDrawer() {
      this.isDrawerOpen = false;
    },
  },
};
</script>

<style scoped>
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
}

.drawer-content {
  padding: 20px;
}

button {
  margin: 10px;
  padding: 10px;
  cursor: pointer;
}
</style>
