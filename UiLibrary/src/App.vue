<template>
  <div class="p-5 bg-gray-200 w-[100vw] h-[100vh] flex flex-col gap-[30px]">
    <InputText></InputText>
    <InputEmail></InputEmail>
    <InputNumber></InputNumber>
    <InputPassword></InputPassword>
    <InputFile></InputFile>
  </div>
</template>

<script>
  import InputText from './components/Inputs/InputText.vue';
  import InputEmail from './components/Inputs/InputEmail.vue';
  import InputPassword from './components/Inputs/InputPassword.vue';
  import InputNumber from './components/Inputs/InputNumber.vue';
  import InputFile from './components/Inputs/InputFile.vue';

  export default{
    components: {
      InputText,
      InputEmail,
      InputNumber,
      InputPassword,
      InputFile
    }
  }
</script>

<style scoped>

</style>
