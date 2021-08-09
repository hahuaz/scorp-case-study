<template>
  <v-main class="t-relative t-min-h-screen sm:t-h-144">
    <div class="t-max-w-screen-xl t-mx-auto">
      <pre
        class="t-text-gray-100 t-text-4xl sm:t-text-7xl t-font-semibold t-p-4"
      >
World's
 Most 
  Genuine
   Social
    Network
      </pre>
    </div>
  </v-main>
</template>

<script>
export default {
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
}
</script>
<style lang="scss" scoped>
.v-main {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url('/images/landing-hero.jpg');
}
</style>
