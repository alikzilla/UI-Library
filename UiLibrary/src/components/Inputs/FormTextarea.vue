<template>
  <div class="autogrow-textarea">
    <textarea
      ref="textarea"
      v-model="textareaContent"
      @input="adjustTextareaHeight"
      :placeholder="placeholder"
      ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'textarea'
    },
    placeholder: {
      type: String, 
      default: 'Textarea'
    }
  },
  data() {
    return {
      textareaContent: '',
    };
  },
  methods: {
    adjustTextareaHeight() {
      const textarea = this.$refs.textarea;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    },
  },
};
</script>

<style scoped>
.autogrow-textarea {
  width: 327px;
}

textarea {
  padding: 10px;
  font-size: 25px;
  border: none;
  border: 2px;
  border-radius: 5px;
  width: 327px;
  box-sizing: border-box;
  overflow-y: hidden;
  resize: horizontal; /* Prevent manual resizing by the user */
  outline-color: rgb(150, 192, 255);
}
</style>
