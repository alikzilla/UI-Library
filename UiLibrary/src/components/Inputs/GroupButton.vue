<!-- ButtonGroup.vue -->

<template>
  <div class="button-group">
    <button
      v-for="(button, index) in buttons"
      :key="index"
      @click="handleButtonClick(button)"
      :style="{ backgroundColor: buttonColor(index) }"
    >
      {{ button.label }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    buttons: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleButtonClick(button) {
      button.clicked = !button.clicked;
      this.$emit('button-click', button);
    },
    buttonColor(index) {
      return this.buttons[index].clicked ? 'gray' : 'white';
    },
  },
};
</script>

<style scoped>
/* Add your custom styling for the ButtonGroup component */
.button-group {
  display: flex;
}

button {
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: 0.1s;
}

button:hover {
  background-color: rgb(196, 196, 196);
}
</style>
