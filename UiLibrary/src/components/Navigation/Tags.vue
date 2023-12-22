<!-- TagsInput.vue -->

<template>
  <div>
    <input
      v-model="newTag"
      @keyup.enter="addTag"
      placeholder="Enter tag and press Enter"
      label="Tag"
    />
    <div class="tags-container">
      <div
        v-for="(tag, index) in tags"
        :key="index"
        class="tag"
      >
        {{ tag }}
        <span class="close" @click.stop="removeTag(index)">x</span>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from '../Inputs/InputText.vue'; // Adjust the path based on your project structure

export default {
  components: {
    InputText,
  },
  data() {
    return {
      tags: [],
      newTag: '',
    };
  },
  methods: {
    addTag() {
      if (this.newTag.trim() !== '') {
        this.tags.push(this.newTag.trim());
        this.newTag = ''; // Clear the input after adding a tag
      }
    },
    removeTag(index) {
      this.tags.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.tags-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.tag {
  background-color: #eee;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}

.tag .close {
  cursor: pointer;
  margin-left: 5px;
  font-weight: bold;
  font-size: 14px;
  color: red;
}

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
.error-input{
  transition: 0.3s;
  outline-color: rgb(255, 47, 47);
  border-color: rgb(255, 47, 47);
}
</style>
