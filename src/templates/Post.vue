<template>
  <Layout>
    <div slot="header"></div>

    <div class="mb-8 mt-8 lg:mt-12">
      <div class="relative flex items-center">
        <a
          @click="hasHistory() ? $router.go(-1) : $router.push('/')"
          class="absolute top-1/2 left-0 -ml-8 transform -translate-x-full
          -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 8 8 12 12 16"></polyline>
            <line x1="16" y1="12" x2="8" y2="12"></line>
          </svg>
        </a>
        <h1 class="font-display text-4xl text-white">
          {{ $page.post.title }}
        </h1>
      </div>

      <PostMeta :post="$page.post" />
    </div>

    <div class="prose lg:prose-md m-auto">
      <div class="" v-html="$page.post.content" />

      <div class="">
        <PostTags :post="$page.post" />
      </div>
    </div>

    <div class="post-comments mt-12">
      <!-- Add comment widgets here -->
      <Disqus shortname="ajahandideh" />
    </div>

    <!-- <Author class="post-author" /> -->
  </Layout>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
import Author from "~/components/Author.vue";
import { Disqus } from "vue-disqus";

export default {
  components: {
    Author,
    PostMeta,
    PostTags,
    Disqus,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.description,
        },
      ],
    };
  },
  methods: {
    hasHistory() {
      return window.history.length > 2;
    },
  },
};
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>
