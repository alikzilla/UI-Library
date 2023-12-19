<template>
  <div>
    <div class="input-container">
      <input
        :type="type"
        name="inputNumber"
        id="inputNumber"
        v-model="inputValue"
        @input="handleInput"
        :class="{ 'error-input': errorInput }"
        placeholder="Input Number"
      />
      <div class="error" :class="{ 'error-visible': errorVisible }">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      inputValue: '',
      errorMessage: 'Enter a valid number.',
      errorVisible: false,
      errorInput: false
    };
  },
  methods: {
    validateNumber(number) {
      // Regular expression for number validation
      const numberRegex = /^\d+$/;
      return numberRegex.test(number);
    },
    validateInput() {
      return this.validateNumber(this.inputValue.trim());
    },
    handleInput() {
      this.errorVisible = this.errorInput = !this.validateInput();
    }
  }
};
</script>

<style scoped>
.input-container {
  position: relative;
}

input {
  padding: 10px 20px;
  font-size: 25px;
  border-radius: 5px;
  outline-color: rgb(150, 192, 255);
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
  border-width: 2px;
}

.error {
  color: rgb(255, 47, 47);
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  top: -10px;
  opacity: 0;
  transition: top 0.3s ease-out, opacity 0.3s ease-out;
  z-index: 1;
}

.error-visible {
  top: 60px;
  opacity: 1;
}

.error-input {
  transition: 0.3s;
  outline-color: rgb(255, 47, 47);
  border-color: rgb(255, 47, 47);
}
</style>
