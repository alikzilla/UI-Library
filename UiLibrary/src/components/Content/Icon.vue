<!-- Icon.vue -->

<template>
  <i :class="['fas', iconName]" :style=" { fontSize: `${size}px`, color: color } "></i>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.min.css';

export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 20, // Default size is large (you can customize based on your needs)
    },
    color: {
      type: String,
      default: "black", // Default color is black (you can customize based on your needs)
    },
  },
  methods: {
    handleClick() {
      // Emit a custom event or perform other actions when the icon is clicked
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
/* Add your custom styling for the Icon component */
i {
  cursor: pointer;
}

/* You can add more color classes as needed */
</style>
