<template>
  <div class="p-10 bg-gray-200 w-[98.9vw] h-[1000vh] flex flex-col gap-[30px]">
    <InputText placeholder="Input Text"></InputText>
    <InputEmail placeholder="Input Email"></InputEmail>
    <InputNumber placeholder="Input Number"></InputNumber>
    <InputPassword placeholder="Input Password"></InputPassword>
    <InputFile placeholder="Input File"></InputFile>
    <FormSelect :options="fruitOptions" v-model="selectedFruit" placeholder="Select"></FormSelect>
    <FormTextarea placeholder="TextArea"></FormTextarea>
    <InputCheckbox label="Checkbox"></InputCheckbox>
    <InputRadio
      :options="radioOptions"
      v-model="selectedRadio"
      label="Select a radio option:"
    />
    <InputSwitch v-model="isSwitchOn" label="Toggle Switch:" />
    <InputButton></InputButton>
    <InputDropdownButton></InputDropdownButton>
    <div class="flex flex-col items-center w-[400px] p-5 bg-blue-100">
      <FormInput></FormInput>
    </div>
    <GroupButton  :buttons="groupButtons" @button-click="handleGroupButtonClick"></GroupButton>
    <InputSlider :min="0" :max="100" :step="1" v-model="sliderValue"></InputSlider>
  </div>
</template>

<script>
  import InputText from './components/Inputs/InputText.vue';
  import InputEmail from './components/Inputs/InputEmail.vue';
  import InputPassword from './components/Inputs/InputPassword.vue';
  import InputNumber from './components/Inputs/InputNumber.vue';
  import InputFile from './components/Inputs/InputFile.vue';
  import FormSelect from './components/Inputs/FormSelect.vue';
  import FormTextarea from './components/Inputs/FormTextarea.vue';
  import InputCheckbox from './components/Inputs/InputCheckbox.vue';
  import InputRadio from './components/Inputs/InputRadio.vue';
  import InputSwitch from './components/Inputs/InputSwitch.vue';
  import InputButton from './components/Inputs/InputButton.vue';
  import InputDropdownButton from './components/Inputs/InputDropdownButton.vue';
  import FormInput from './components/Inputs/FormInput.vue';
  import GroupButton from './components/Inputs/GroupButton.vue';
  import InputSlider from './components/Inputs/InputSlider.vue';

  export default{
    components: {
      InputText,
      InputEmail,
      InputNumber,
      InputPassword,
      InputFile,
      FormSelect,
      FormTextarea,
      InputCheckbox,
      InputRadio,
      InputSwitch,
      InputButton,
      InputDropdownButton,
      FormInput,
      GroupButton,
      InputSlider
    },
    data() {
      return {
        fruitOptions: [
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana' },
          { value: 'orange', label: 'Orange' },
        ],
        radioOptions: [
          { id: 'option1', label: 'Option 1', value: 'option1' },
          { id: 'option2', label: 'Option 2', value: 'option2' },
          { id: 'option3', label: 'Option 3', value: 'option3' },
        ],
        selectedRadio: 'option1',
        selectedFruit: '',
        groupButtons: [
          { label: 'Button 1', clicked: false },
          { label: 'Button 2', clicked: false },
          { label: 'Button 3', clicked: false }
        ],
        sliderValue: 0
      };
    },
    methods: {
      handleGroupButtonClick(button) {
        console.log(`${button.label} clicked`);
      },
    }
  }
</script>

<style scoped>

</style>
