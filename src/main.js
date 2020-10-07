// Import main css
import "~/assets/style/index.css";

// Import default layout so we don't need to import it to every page
import DefaultLayout from "~/layouts/Default.vue";

import VueRellax from "vue-rellax";

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300&display=swap",
  });

  Vue.use(VueRellax);

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
