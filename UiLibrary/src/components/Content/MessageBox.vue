<template>
  <div v-if="isVisible" class="message-box">
    <div class="message-header">
      {{ title }}
      <span class="close-btn" @click="closeMessageBox">&times;</span>
    </div>
    <div class="message-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Message",
    },
  },
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    closeMessageBox() {
      this.isVisible = false;
    },
  },
};
</script>

<style scoped>
.message-box {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
}

.message-header {
  background-color: #f1f1f1;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

.message-body {
  padding: 20px;
}
</style>
