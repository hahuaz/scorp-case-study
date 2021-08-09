<template>
  <v-app>
    <header>
      <div class="desktop-header t-bg-gray-100 t-relative t-z-10 t-shadow-md">
        <div class="t-max-w-screen-xl t-mx-auto">
          <div class="t-container t-mx-auto">
            <view-d-header></view-d-header>
          </div>
        </div>
      </div>
    </header>
    <v-main> <Nuxt></Nuxt></v-main>
    <footer>
      <view-footer></view-footer>
    </footer>
  </v-app>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
