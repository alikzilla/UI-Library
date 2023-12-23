import GroupButton from '../components/Inputs/GroupButton.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: GroupButton,
  tags: ['autodocs'],
  title: 'Inputs/GroupButton'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { GroupButton },
    setup() {
      return { args };
    },
    template: '<GroupButton v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};