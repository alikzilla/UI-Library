import NavbarLink from '../components/Navigation/NavbarLink.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: NavbarLink,
  tags: ['autodocs'],
  title: 'Navigation/NavbarLink'
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { NavbarLink },
    setup() {
      return { args };
    },
    template: '<NavbarLink  />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};