<template>
  <g-link
    class="bg-gray-800 px-6 py-6 transition duration-75 ease-linear hover:shadow-lg transform hover:scale-105 rounded-lg"
    :to="post.path"
  >
    <PostMeta class="mb-3 mt-5" :post="post" />

    <h2 class="text-lg font-semibold text-gray-100" v-html="post.title" />

    <!-- <PostTags class="mt-4" :post="post" /> -->
  </g-link>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";

export default {
  components: {
    PostMeta,
    PostTags,
  },
  props: ["post"],
};
</script>
