<template>
  <div class="form-radiobox">
    <label v-for="option in options" :key="option.value">
      <input
        :id="option.id"
        type="radio"
        :value="option.value"
        v-model="selectedValue"
        @change="handleChange"
      />
      {{ option.label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      required: true,
    },
  },
  data() {
    return {
      selectedValue: this.value,
    };
  },
  methods: {
    handleChange() {
      this.$emit('input', this.selectedValue);
    },
  },
};
</script>

<style scoped>
.form-radiobox {
  display: flex;
  gap: 10px;
  flex-direction: column;
}

.form-radiobox label{
  font-size: 25px;
}

.form-radiobox input{
  width: 25px;
  height: 25px;
}


/* Add your custom styling for the radiobox */
/* You can use this space to style the label and radio button */
</style>
