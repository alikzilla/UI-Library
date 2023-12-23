import Accordion from '../components/Containers/Accordion.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: Accordion,
  tags: ['autodocs'],
  title: 'Containers/Accordion'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { Accordion },
    setup() {
      return { args };
    },
    template: '<Accordion  />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};