import FormInput from '../components/Inputs/FormInput.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: FormInput,
  tags: ['autodocs'],
  title: 'Inputs/FormInput'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { FormInput },
    setup() {
      return { args };
    },
    template: '<FormInput v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};