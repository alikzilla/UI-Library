import List from '../components/Content/List.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: List,
  tags: ['autodocs'],
  title: 'Content/List'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { List },
    setup() {
      return { args };
    },
    template: '<List />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};