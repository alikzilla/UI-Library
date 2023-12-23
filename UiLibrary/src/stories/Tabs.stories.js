import Tabs from '../components/Navigation/Tabs.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Navigation/Tabs'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { Tabs },
    setup() {
      return { args };
    },
    template: '<Tabs  />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};