<script>
import { ref } from 'vue';

export default {
  props: ['postId'],
  setup({ postId }, { emit }) {
    const comment = ref('');

    // 發送 send-comment 事件
    const sendComment = () => {
      emit('sendComment', { postId, content: comment.value });
    };

    return {
      comment,
      sendComment,
    };
  },
};
</script>

<template>
  <div class="input-group">
    <input
      v-model="comment"
      type="text"
      class="form-control | rounded-0 border-2 border-dark border-end-0 | py-2 px-4"
      placeholder="留言..."
      aria-label="留言"
      aria-describedby="button-addon2"
    />
    <button
      @click="sendComment"
      class="btn btn-primary btn-hover-warning | rounded-0 border-2 border-dark | px-12"
      type="button"
      id="button-addon2"
    >
      留言
    </button>
  </div>
</template>
