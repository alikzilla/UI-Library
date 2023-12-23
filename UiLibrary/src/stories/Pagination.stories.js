import Pagination from '../components/Navigation/Pagination.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Navigation/Pagination'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { Pagination },
    setup() {
      return { args };
    },
    template: '<Pagination  />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};