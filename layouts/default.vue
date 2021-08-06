<template>
  <div>
    <v-app>
      <!--TODO change layout with user-agent instead of using css classes that depends devicewith -->
      <div>
        <div class="mobile-header md:t-hidden">
          <view-m-header></view-m-header>
        </div>
        <div
          class="
            desktop-header
            t-bg-gray-100 t-relative t-z-10 t-shadow-md t-hidden
            md:t-block
          "
        >
          <div class="t-max-w-screen-xl t-mx-auto">
            <div class="t-container t-mx-auto">
              <view-d-header></view-d-header>
            </div>
          </div>
        </div>
      </div>
      <v-main> <Nuxt></Nuxt></v-main>
      <footer>
        <view-footer></view-footer>
      </footer>
    </v-app>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
