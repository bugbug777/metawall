<script>
export default {
  props: ['msg'],
  setup(props) {
    const content = props.msg;

    return {
      content,
    };
  },
};
</script>

<template>
  <div class="card card-shadow-2 | rounded-8 border-2 border-dark | mb-4">
    <div class="card-header border-2 border-dark rounded-top-8 | bg-white | p-4">
      <div class="trafic-light">
        <div class="trafic-light-yellow"></div>
      </div>
    </div>
    <div class="card-body | p-8">
      <p class="card-text text-center text-secondary">
        {{ content ? content : '目前尚無動態，新增一則貼文吧！' }}
      </p>
    </div>
  </div>
</template>
