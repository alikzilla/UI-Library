<!-- ProgressBar.vue -->

<template>
  <div class="progress-bar">
    <div class="progress" :style="{ width: `${progress}%`, backgroundColor: type, height: `${size}px` }"></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true,
      validator: (value) => value >= 0 && value <= 100,
    },
    type:{
      type: String,
      default: 'rgb(150, 192, 255)'
    },
    size:{
      type: Number,
      default: 20
    }
  },
};
</script>

<style scoped>
/* Add your custom styling for the ProgressBar component */
.progress-bar {
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 5px;
  overflow: hidden;
}

.progress {
  height: 100%;
  transition: width 0.3s ease;
  animation: progressAnimation 2s linear infinite; /* Adjust animation duration as needed */
}

/* @keyframes progressAnimation {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(-100%);
  }
} */
</style>
