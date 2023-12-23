import Drawer from '../components/Navigation/Drawer.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: Drawer,
  tags: ['autodocs'],
  title: 'Navigation/Drawer'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { Drawer },
    setup() {
      return { args };
    },
    template: '<Drawer  />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};