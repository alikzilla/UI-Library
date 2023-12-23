import Header from '../components/Content/Header.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: Header,
  tags: ['autodocs'],
  title: 'Content/Header'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { Header },
    setup() {
      return { args };
    },
    template: '<Header  />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};