<template>
  <div class="relative">
    <div class="input-container">
      <label style="margin-left: 5px; font-size: 20px;" for="inputText">{{ label }}</label>
      <div>
        <textarea
        name="File"
        id="fileArea"
        v-model="selectedFileName"
        :placeholder="placeholder"
        readonly
        ></textarea>
        <button @click="selectFile">
          <img
            src="../../assets/clip.png"
            alt="Upload"
          />
        </button>
        <input
          type="file"
          id="fileInput"
          ref="fileInput"
          @change="handleFileChange"
          style="display: none; position: relative;"
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
  props:{
    type: {
      type: String,
      default: 'File'
    },
    placeholder: {
      type: String,
      deefault: ''
    },
    label: {
      type: String,
      default: 'Input'
    }
  },
  data() {
    return {
      fileSelected: false,
      errorVisible: false,
      errorMessage: 'Invalid file type.',
      selectedFileName: '', // Added data property to store the selected file name
    };
  },
  methods: {
    selectFile() {
      // Programmatically trigger a click on the hidden file input
      this.$refs.fileInput.click();
    },
    handleFileChange() {
      const fileInput = this.$refs.fileInput;
      const selectedFile = fileInput.files[0];

      // Validate the selected file
      this.errorVisible = !this.validateFile(selectedFile);

      // Update the fileSelected flag based on whether a file is selected
      this.fileSelected = !this.errorVisible;

      // Update the selectedFileName with the name of the selected file
      this.selectedFileName = selectedFile ? selectedFile.name : '';

      // Emit an event or perform other actions with the selected file
      if (!this.errorVisible) {
        this.$emit('file-selected', selectedFile);
      }
    },
    validateFile(file) {
      // Implement your file validation logic here
      // For example, you can check file type, size, etc.
      // Return true if the file is valid, false otherwise.
      return file && file.type.includes('image/');
    },
  },
};
</script>

<style scoped>
.input-container {
  position: relative;
  display: flex;
  flex-direction: column;
}

textarea {
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

button {
  position: relative;
  cursor: pointer;
  right: 45px;
  top: -25px;
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
  top: 20px;
  opacity: 0;
  transition: top 0.3s ease-out, opacity 0.3s ease-out;
  z-index: 1;
}

.error-visible {
  top: 90px;
  opacity: 1;
}
</style>
