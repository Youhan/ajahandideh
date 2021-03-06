// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: "Alireza Jahandideh",
  siteDescription:
    "Personal website of Alireza Jahandideh! Web designer and developer.",

  icon: "./src/favicon.png",
  templates: {
    Post: "/:title",
    Tag: "/tag/:id",
  },

  plugins: [
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/posts/*.md",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: "Alireza Jahandideh Blog",
          feed_url: "https://ajahandideh.com/rss.xml",
          site_url: "https://ajahandideh.com",
        },
        feedItemOptions: (node) => ({
          title: node.title,
          description: node.description,
          url: "https://ajahandideh.com/post/" + node.slug,
          author: "Alireza Jahandideh",
        }),
        output: {
          dir: "./static",
          name: "rss.xml",
        },
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-180283888-1",
      },
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"],
    },
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
};
