<template>
  <nav class="pagination">
    <ul>
      <li :class="{ disabled: currentPage === 1 }">
        <button @click="prevPage" :disabled="currentPage === 1">&lt;</button>
      </li>
      <li v-for="page in pages" :key="page" :class="{ active: page === currentPage }">
        <button @click="gotoPage(page)">{{ page }}</button>
      </li>
      <li :class="{ disabled: currentPage === totalPages }">
        <button @click="nextPage" :disabled="currentPage === totalPages">&gt;</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pages() {
      const start = Math.max(1, this.currentPage - 2);
      const end = Math.min(this.totalPages, start + 4);

      const pageArray = [];
      for (let i = start; i <= end; i++) {
        pageArray.push(i);
      }

      return pageArray;
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit('page-change', this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('page-change', this.currentPage + 1);
      }
    },
    gotoPage(page) {
      this.$emit('page-change', page);
    },
  },
};
</script>

<style scoped>
.pagination {
  margin: 20px 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

li {
  display: inline-flex;
  margin-right: 5px;
}

button {
  background-color: rgb(183, 183, 183);
  color: #fff;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

li.active button {
  background-color: #004080; /* Change this color to the desired background color for the active page */
}
</style>