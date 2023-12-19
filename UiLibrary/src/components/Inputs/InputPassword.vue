<template>
  <div>
    <div class="input-container">
      <input
        :type="showPassword ? 'text' : 'password'"
        name="inputPassword"
        id="inputPassword"
        v-model="inputValue"
        @input="handleInput"
        :class="{ 'error-input': errorInput }"
        placeholder="Enter Password"
      />
      <button @click="togglePasswordVisibility">
        <img
          v-if="showPassword"
          src="../../assets/openEye.png"
          alt="Hide Password"
        />
        <img
          v-else
          src="../../assets/closeEye.png"
          alt="Show Password"
        />
      </button>
      <div class="error" :class="{ 'error-visible': errorVisible }">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      errorMessage: 'Password must be at least 8 characters.',
      errorVisible: false,
      errorInput: false,
      showPassword: false
    };
  },
  methods: {
    validatePassword(password) {
      // Password validation logic (e.g., minimum length)
      return password.length >= 8;
    },
    validateInput() {
      return this.validatePassword(this.inputValue.trim());
    },
    handleInput() {
      this.errorVisible = this.errorInput = !this.validateInput();
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
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

button {
  font-size: 16px;
  position: relative;
  top: 5px;
  right: 50px;
  z-index: 2;
  padding: 5px;
  transition: 0.3s;
}

button:hover{
  background-color: rgb(218, 218, 218);
  border-radius: 50%;
}

img {
  width: 30px;
  height: 30px;
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
