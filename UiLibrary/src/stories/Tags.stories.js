import Tags from '../components/Navigation/Tags.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: Tags,
  tags: ['autodocs'],
  title: 'Navigation/Tags'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { Tags },
    setup() {
      return { args };
    },
    template: '<Tags  />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};