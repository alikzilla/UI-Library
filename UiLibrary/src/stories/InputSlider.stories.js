import InputSlider from '../components/Inputs/InputSlider.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: InputSlider,
  tags: ['autodocs'],
  title: 'Inputs/InputSlider'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { InputSlider },
    setup() {
      return { args };
    },
    template: '<InputSlider v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};