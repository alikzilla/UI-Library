<!-- DropdownButton.vue -->

<template>
  <div class="dropdown">
    <button class="dropbtn">Dropdown</button>
    <div class="dropdown-content">
      <a @click="handleDropdownItemClick(1)">Item 1</a>
      <a @click="handleDropdownItemClick(2)">Item 2</a>
      <a @click="handleDropdownItemClick(3)">Item 3</a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      buttonColor: 'white',
      clicked: false
    }
  },
  methods: {
    handleDropdownItemClick(item) {
      alert(`Dropdown Item ${item} clicked!`);
    },
  },
};
</script>

<style scoped>
/* Add your custom styling for the DropdownButton component */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 327px;
  height: 65px;
  background-color: white;
  transition: 0.1s;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.dropdown-content a {
  padding: 12px 16px;
  display: block;
  cursor: pointer;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: rgb(196, 196, 196);
  color: white;
}
</style>
