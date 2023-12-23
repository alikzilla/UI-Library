import Table from '../components/Content/Table.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: Table,
  tags: ['autodocs'],
  title: 'Content/Table'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { Table },
    setup() {
      return { args };
    },
    template: '<Table  />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};