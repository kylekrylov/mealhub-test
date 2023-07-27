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
    const commentId = params.commentId.replace('comment-', '');
    const response = await $axios.get(`/comments/${commentId}`);

    return { comment: response.data };
  },
};
</script>
