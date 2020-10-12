<template>
  <div id="app" class="mb-12 md:mb-20">
    <div class="relative z-20 grid grid-cols-1 lg:grid-cols-4">
      <div></div>
      <div class="lg:col-span-2">
        <slot name="header">
          <header class="m-auto md:max-w-lg md:py-20">
            <div class="mb-8">
              <AboutMe />
            </div>
          </header>
        </slot>
        <main class="">
          <slot />
        </main>
      </div>
    </div>

    <div
      class="text-gray-800 fixed top-0 left-0 mt-32 ml-32 hidden lg:block w-full z-10"
      v-rellax="{ speed: 4 }"
    >
      <div class="transform origin-top-left rotate-90 translate-x-64">
        <p class="text-huge font-display">Make it simple!</p>
        <p class="text-2xl font-display">the simpler, the better</p>
      </div>
    </div>
  </div>
</template>

<script>
import AboutMe from "~/components/AboutMe";
import { Noise } from "~/utils/Noise";
export default {
  props: {
    showLogo: { default: true },
  },
  components: {
    AboutMe,
  },
  mounted() {
    new Noise();
  },
};
</script>
