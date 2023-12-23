<template class="w-[100vw] h-[200vh]">
  <div class="w-[330px] h-full">
    <Sidebar class="flex flex-col h-full" :menuItems="sidebarMenuItems"></Sidebar>
  </div>
</template>

<script>
  import Sidebar from '../../UiLibrary/src/components/Content/Sidebar.vue';

  export default{
    components: {
      Sidebar
    },
    data() {
      return {
        sidebarMenuItems: [
          'Home',
          'About',
          'Services',
          'Contact',
          // Add more menu items as needed
        ],
      }
    }
  }
</script>

<style scoped>

</style>
