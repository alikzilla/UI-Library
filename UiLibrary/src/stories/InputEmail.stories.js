import InputEmail from '../components/Inputs/InputEmail.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: InputEmail,
  tags: ['autodocs'],
  title: 'Inputs/InputEmail'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const InputtedEmail = {
  render: (args) => ({
    components: { InputEmail },
    setup() {
      return { args };
    },
    template: '<InputEmail v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};