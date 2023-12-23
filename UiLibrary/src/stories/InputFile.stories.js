import InputFile from '../components/Inputs/InputFile.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: InputFile,
  tags: ['autodocs'],
  title: 'Inputs/InputFile'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { InputFile },
    setup() {
      return { args };
    },
    template: '<InputFile v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};