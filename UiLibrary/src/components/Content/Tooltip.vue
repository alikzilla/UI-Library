<template>
  <div class="tooltip-container" @mouseover="showTooltip" @mouseout="hideTooltip">
    <slot></slot>
    <div v-if="isTooltipVisible" class="tooltip">
      {{ tooltipText }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTooltipVisible: false,
      tooltipText: "This is a tooltip",
    };
  },
  methods: {
    showTooltip() {
      this.isTooltipVisible = true;
    },
    hideTooltip() {
      this.isTooltipVisible = false;
    },
  },
};
</script>

<style scoped>
.tooltip-container {
  position: relative;
  display: inline-block;
  cursor: help;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  height: 65px;
  width: 372px;

}

.tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}

.tooltip-container:hover .tooltip {
  opacity: 1;
  visibility: visible;
}
</style>
