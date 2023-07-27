<script>
export default {
  data() {
    return {
      comments: [],
      page: 1,
      perPage: 10,
      totalPages: 0,
    };
  },

  async mounted() {
    await this.fetchComments();
  },

  methods: {

    async fetchComments() {
      const response = await this.$axios.get('/comments', {
        params: {
          _page: this.page,
          _limit: this.perPage,
        },
      });

      this.comments = response.data;
      this.totalPages = Math.ceil(response.headers['x-total-count'] / this.perPage);
    },

    async previousPage() {
      if (this.page > 1) {
        this.page--;
        await this.fetchComments();
      }
    },

    async nextPage() {
      if (this.page < this.totalPages) {
        this.page++;
        await this.fetchComments();
      }
    },

    goToComment(commentId) {
      this.$router.push(`/comments/comment-${commentId}`);
    },


    async goToPage(page) {
      this.page = page;
      await this.fetchComments();
    },

    generatePageArray() {
      const pages = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
      return pages;
    },

    pagination(countPage) {
      const currentPage = this.page === countPage
      const lastPage = countPage >= this.totalPages
      const firstPage = countPage === 1
      const nearPage = this.page <= countPage + 1 && this.page >= countPage - 1
      return currentPage || lastPage || firstPage || nearPage
    },

    showFirstEllipsis(countPage) {
      return countPage === (this.totalPages - 2)
    },
  },
};
</script>

<template>
  <div>
    <div class="container">
      <div class="header">ID</div>
      <div class="header">Name</div>
      <div class="header">Email</div>
      <div class="header">Link</div>
    </div>
    <div
      v-for="comment in comments"
      :key="comment.id"
      class="row"
    >
      <div class="cell">{{ comment.id }}</div>
      <div class="cell">{{ comment.name }}</div>
      <div class="cell">{{ comment.email }}</div>
      <div class="cell">
        <button class="button" @click="goToComment(comment.id)">
          detail
        </button>
      </div>
    </div>

    <div class="pagination">
      <button
        class="button"
        @click="previousPage"
        :disabled="page === 1"
      >
        <
      </button>
      <template v-for="(pageNumber, index) in generatePageArray()">
        <button
          v-if="pagination(index + 1)"
          :key="pageNumber"
          class="button"
          @click="goToPage(pageNumber)"
          :class="{ active: pageNumber === page }"
        >
          {{ pageNumber }}
        </button>
        <span v-else-if="index + 1 === 2" class="ellipsis">...</span>
        <span v-else-if="showFirstEllipsis(index + 1)" class="ellipsis">...</span>
      </template>
      <button
        class="button"
        @click="nextPage"
        :disabled="page === totalPages"
      >
        >
      </button>
    </div>
  </div>
</template>

<style>

.container {
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr;
  padding: 12px;
}

.header {
  padding: 0 6px;
  text-align: center;
  font-weight: bold;
}

.cell:first-child,
.header:first-child {
  width: 32px;
  text-align: center;
}

.cell:last-child,
.header:last-child {
  text-align: end;
}

.row {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr 1fr 1fr;
  padding: 12px;
  border: 1px solid #ccc;
}

.cell {
  padding: 0 6px;
}

.row:nth-child(even) {
  background-color: #f2f2f2;
}

.row td {
  padding: 5px;
}

.button {
  display: inline-block;
  padding: 6px 12px;
  background-color: #4CAF50;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  text-align: center;
  text-decoration: none;
}

.button:hover {
  background-color: #45a049;
}

.button.active {
  background-color: #77a045;
}

.pagination {
  display: flex;
  margin-top: 12px;
  gap: 8px;
}
</style>
