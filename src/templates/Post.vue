<template>
  <Layout>
    <div slot="header"></div>

    <div class="mb-8 mt-8 lg:mt-12 lg:mb-12">
      <div class="">
        <a
          href="#"
          @click="hasHistory() ? $router.go(-1) : $router.push('/')"
          class="block mb-8 hover:text-white"
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
        <h1 class="font-display text-2xl lg:text-4xl text-white">
          {{ $page.post.title }}
        </h1>
      </div>

      <PostMeta :post="$page.post" />
    </div>

    <div class="prose lg:prose-lg lg:mt-8 m-auto">
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
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";

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
  mounted() {
    Prism.highlightAll();
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
  }
}
</page-query>

<style lang="css" scoped>
.prose {
    max-width: 73ch;
}
.prose code[class*="language-"], .prose pre[class*="language-"]{
  font-size: .9rem;
}
</style>

<style lang="css">

.prose code[class*="language-"], .prose pre[class*="language-"]{
  font-size: 0.8em;
}
</style>
