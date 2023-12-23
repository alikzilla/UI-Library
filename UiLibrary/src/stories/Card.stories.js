import Card from '../components/Containers/Card.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: Card,
  tags: ['autodocs'],
  title: 'Containers/Card'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card  />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};