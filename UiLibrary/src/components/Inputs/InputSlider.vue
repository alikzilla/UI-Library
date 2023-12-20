<!-- Slider.vue -->

<template>
  <div class="slider">
    <input
      type="range"
      :min="min"
      :max="max"
      :step="step"
      v-model="sliderValue"
      @input="updateSliderValue"
    />
    <div class="slider-value">{{ sliderValue }}</div>
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      sliderValue: this.min,
    };
  },
  methods: {
    updateSliderValue() {
      this.$emit('input', this.sliderValue);
    },
  },
};
</script>

<style scoped>
/* Add your custom styling for the Slider component */
.slider {
  display: flex;
  align-items: center;
}

input {
  width: 200px;
  margin-right: 10px;
}

.slider-value {
  font-size: 18px;
}
</style>
