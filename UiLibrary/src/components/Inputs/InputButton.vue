<!-- Button.vue -->

<template>
  <div>
    <button @click="handleButtonClick">
      Click me
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    handleButtonClick() {
      this.clicked = !this.clicked;
      setTimeout(() => {
        this.clicked = false; // Reset the clicked state
      }, 100);
    },
  },
};
</script>

<style scoped>
/* Add your custom styling for the Button component */
button {
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 327px;
  height: 65px;
  background-color: white;
  transition: 0.1s;
}

button:hover {
  background-color: rgb(196, 196, 196);
}
</style>
