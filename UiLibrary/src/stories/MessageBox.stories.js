import MessageBox from '../components/Content/MessageBox.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: MessageBox,
  tags: ['autodocs'],
  title: 'Content/MessageBox'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { MessageBox },
    setup() {
      return { args };
    },
    template: '<MessageBox  />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};