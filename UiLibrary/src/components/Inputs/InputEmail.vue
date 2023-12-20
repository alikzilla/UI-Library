<template>
  <div>
    <div class="input-container">
      <label style="margin-left: 5px; font-size: 20px;" for="inputText">{{ label }}</label>
      <div>
        <input
        :type="type"
        name="inputEmail"
        id="inputEmail"
        v-model="inputValue"
        @input="handleInput"
        :class="{ 'error-input': errorInput }"
        :placeholder="placeholder"
        />
        <div class="error" :class="{ 'error-visible': errorVisible }">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'Email'
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'Input'
    }
  },
  data() {
    return {
      inputValue: '',
      errorMessage: 'Enter a valid email address.',
      errorVisible: false,
      errorInput: false
    };
  },
  methods: {
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    validateInput() {
      return this.validateEmail(this.inputValue.trim());
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
  display: flex;
  flex-direction: column;
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
  top: 20px;
  opacity: 0;
  transition: top 0.3s ease-out, opacity 0.3s ease-out;
  z-index: 1;
}

.error-visible {
  top: 90px;
  opacity: 1;
}

.error-input {
  transition: 0.3s;
  outline-color: rgb(255, 47, 47);
  border-color: rgb(255, 47, 47);
}
</style>