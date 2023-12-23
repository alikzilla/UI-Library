import InputRadio from '../components/Inputs/InputRadio.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: InputRadio,
  tags: ['autodocs'],
  title: 'Inputs/InputRadio'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { InputRadio },
    setup() {
      return { args };
    },
    template: '<InputRadio v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};