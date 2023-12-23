import Breadcamp from '../components/Navigation/Breadcamp.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: Breadcamp,
  tags: ['autodocs'],
  title: 'Navigation/Breadcamp'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { Breadcamp },
    setup() {
      return { args };
    },
    template: '<Breadcamp  />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};