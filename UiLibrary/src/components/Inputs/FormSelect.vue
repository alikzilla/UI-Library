<!-- Select.vue -->

<template>
  <div class="custom-select">
    <select :multiple="multiply" v-model="selectedValue" @change="handleSelectChange">
      <template v-if="!selectedValue">
        <option disabled value="" selected>{{ placeholder }}</option>
      </template>      
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: [String, Number],
      default: '',
    },
    multiply: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "Select"
    }
  },
  data() {
    return {
      selectedValue: this.value,
    };
  },
  methods: {
    handleSelectChange() {
      this.$emit('input', this.selectedValue);
      this.$emit('change', this.selectedValue);
    },
  },
};
</script>

<style scoped>
/* Add your custom styling for the select component */
.custom-select {
  display: inline-block;
  position: relative;
}

/* Style the select element as needed */
.custom-select select {
  padding: 10px 20px;
  font-size: 25px;
  border-radius: 5px;
  outline-color: rgb(150, 192, 255);
  margin-bottom: 10px;
  position: relative;
  border-width: 2px;
  resize: none;
  width: 327px;
  height: 61.5px;
}
</style>
