<template>
  <div class="text-xs flex space-x-4">
    <span>{{ post.date }}.</span>
    <template v-if="post.timeToRead">
      <span>{{ post.timeToRead }} min read.</span>
    </template>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>
