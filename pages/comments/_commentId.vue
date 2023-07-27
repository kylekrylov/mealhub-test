<template>
  <div>
    <h1>{{ comment.name }}</h1>
    <p>{{ comment.email }}</p>
    <p>{{ comment.body }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const response = await $axios.get(`/comments/${params.commentId}`);
    return { comment: response.data };
  },
};
</script>
