<template>
  <div class="text-sm flex space-x-3">
    <g-link class="" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
      <span>#</span> {{ tag.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>
