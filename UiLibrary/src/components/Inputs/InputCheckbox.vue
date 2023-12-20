<template>
  <div class="form-checkbox">
    <input
      :id="id"
      type="checkbox"
      v-model="isChecked"
      @change="handleChange"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isChecked: this.value,
    };
  },
  methods: {
    handleChange() {
      this.$emit('input', this.isChecked);
    },
  },
};
</script>

<style scoped>
.form-checkbox {
  display: flex;
  gap: 10px;
  align-items: center;
}
.form-checkbox label{
  font-size: 25px;
}
.form-checkbox input{
  height: 25px;
  width: 25px;
}

/* Add your custom styling for the checkbox */
/* You can use this space to style the label and checkbox */
</style>
