<template class="w-[100vw]">
  <Header title="UI Library"></Header>
  <div class="flex w-full">
    <div class="p-10 bg-gray-200 w-[70%] flex flex-col gap-[30px]">
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
      <Card title="lol" content="content" size="400"></Card>
      <Accordion :accordionItems="accordionItems">
        <template v-slot:content="{ item }">
          <p>{{ item.title }} - {{ item.description }}</p>
        </template>
      </Accordion>
      <ProgressBar :progress="33" :size="10"></ProgressBar>
      <Tooltip>Hover Me</Tooltip>

      <button @click="openMessageBox" class="w-[150px] h-[60px] bg-white hover:bg-gray-300">Open MessageBox</button>  
      <MessageBox v-if="isMessageBoxVisible" title="Alert">
        <p>This is a sample message.</p>
      </MessageBox>

      <button @click="openModal" class="w-[150px] h-[60px] bg-white hover:bg-gray-300">Open Modal</button>

      <ModalWindow ref="modal" title="Custom Modal Title">
        <!-- Your custom content goes here -->
        <p>This is the content of the modal.</p>
        <button @click="closeModal">Close Modal</button>
      </ModalWindow>
      <div class="flex gap-[20px] items-center">
        <Icon iconName="fa-check" :size="50"/>
        <Icon iconName="fa-times" />
        <Icon iconName="fa-info-circle" />
      </div>
      <ImageCarousel :images="carouselImages" />  
      <Table :columns="tableColumns" :rows="tableRows" ></Table>  
      <List :items="listItems"></List>
    </div>
    <Sidebar class="w-[30%]" :menuItems="sidebarMenuItems"></Sidebar>
  </div>
  <Footer></Footer>
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
  import Card from './components/Containers/Card.vue';
  import Accordion from './components/Containers/Accordion.vue';
  import ProgressBar from './components/Content/ProgressBar.vue';
  import Tooltip from './components/Content/Tooltip.vue';
  import MessageBox from './components/Content/MessageBox.vue';
  import ModalWindow from './components/Content/ModalWindow.vue';
  import Icon from './components/Content/Icon.vue';
  import ImageCarousel from './components/Content/ImageCarousel.vue';
  import Table from './components/Content/Table.vue';
  import List from './components/Content/List.vue';
  import Header from './components/Content/Header.vue';
  import Footer from './components/Content/Footer.vue';
  import Sidebar from './components/Content/Sidebar.vue';

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
      InputSlider,
      Card,
      Accordion,
      ProgressBar,
      Tooltip,
      MessageBox,
      ModalWindow,
      Icon,
      ImageCarousel,
      Table,
      List,
      Header,
      Footer,
      Sidebar
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
        sliderValue: 0,
        accordionItems: [
        { name: "section1", title: "Section 1" },
        { name: "section2", title: "Section 2" },
        { name: "section3", title: "Section 3" }
        ],
        isMessageBoxVisible: false,
        carouselImages: [
            {
              id: '1',
              big: './images/p1.jpeg',
              thumb: './images/thumbs/p1.jpeg'
            },
            {
              id: '2',
              big: './images/p2.jpeg',
              thumb: './images/thumbs/p2.jpeg'
            },
            {
              id: '3',
              big: './images/p3.jpeg',
              thumb: './images/thumbs/p3.jpeg'
            },
            {
              id: '4',
              big: './images/p4.jpeg',
              thumb: './images/thumbs/p4.jpeg'
            }
          ],
        activeImage: 1,
        tableColumns: ['Name', 'Age', 'Country'],
        tableRows: [
          ['John Doe', 25, 'USA'],
          ['Jane Smith', 30, 'Canada'],
          ['Bob Johnson', 22, 'UK'],
        ],
        listItems: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
        sidebarMenuItems: [
          'Home',
          'About',
          'Services',
          'Contact',
          // Add more menu items as needed
        ],
      };
    },
    methods: {
      handleGroupButtonClick(button) {
        console.log(`${button.label} clicked`);
      },
      openMessageBox() {
        this.isMessageBoxVisible = !this.isMessageBoxVisible;
      },
      openModal() {
      this.$refs.modal.openModal();
      },
      closeModal() {
        this.$refs.modal.closeModal();
      },
    }
  }
</script>

<style scoped>

</style>
