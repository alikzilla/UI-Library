import Icon from '../components/Content/Icon.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: Icon,
  tags: ['autodocs'],
  title: 'Content/Icon'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { Icon },
    setup() {
      return { args };
    },
    template: '<Icon  />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};