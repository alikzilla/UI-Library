import ImageCarousel from '../components/Content/ImageCarousel.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: ImageCarousel,
  tags: ['autodocs'],
  title: 'Content/ImageCarousel'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { ImageCarousel },
    setup() {
      return { args };
    },
    template: '<ImageCarousel  />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};