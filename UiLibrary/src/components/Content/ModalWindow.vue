<!-- ModalWindow.vue -->

<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal-content">
      <div class="modal-header">
        <h2>{{ title }}</h2>
        <button @click="closeModal">&times;</button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Modal",
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    openModal() {
      this.isVisible = true;
    },
    closeModal() {
      this.isVisible = false;
    },
  },
};
</script>

<style scoped>
/* Add your custom styling for the ModalWindow component */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.modal-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  z-index: 2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 80%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.modal-header h2 {
  margin: 0;
}

.modal-header button {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}
</style>
