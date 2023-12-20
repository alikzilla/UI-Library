<!-- UserForm.vue -->

<template>
  <div>
    <div class="input-container">
      <InputText
        v-model="username"
        label="Username"
        :rules="usernameRules"
        ref="usernameInput"
      />
      <InputText
        v-model="firstName"
        label="First Name"
        :rules="nameRules"
        ref="firstNameInput"
      />
      <InputText
        v-model="lastName"
        label="Last Name"
        :rules="nameRules"
        ref="lastNameInput"
      />
      <InputButton @click="submitForm" style="margin-top: 20px;">Submit</InputButton>
    </div>
  </div>
</template>

<script>
import InputText from './InputText.vue';
import InputButton from './InputButton.vue';

export default {
  components: {
    InputText,
    InputButton,
  },
  data() {
    return {
      username: '',
      firstName: '',
      lastName: '',
      usernameRules: [
        value => !!value || 'Username is required.',
        value => (value && value.length >= 5) || 'Username must be at least 5 characters.',
      ],
      nameRules: [
        value => !!value || 'This field is required.',
      ],
    };
  },
  methods: {
    submitForm() {
      // Validate the form before submitting
      if (this.validateForm()) {
        const formData = {
          Username: this.username,
          'First Name': this.firstName,
          'Last Name': this.lastName,
        };

        // Display the form data in an alert
        alert(JSON.stringify(formData, null, 2));
      }
    },
    validateForm() {
      // Validate each input field
      return (
        this.$refs.usernameInput.validate() &&
        this.$refs.firstNameInput.validate() &&
        this.$refs.lastNameInput.validate()
      );
    },
  },
};
</script>

<style scoped>
/* Add your custom styling for the UserForm component */
.input-container {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
</style>
