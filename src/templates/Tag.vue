<template>
  <Layout>
    <div slot="header"></div>

    <h1 class="font-display text-3xl text-white"># {{ $page.tag.title }}</h1>

    <div class="flex mt-10">
      <PostCard
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            description
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
// import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    // Author,
    PostCard,
  },
};
</script>

<style lang="scss"></style>
