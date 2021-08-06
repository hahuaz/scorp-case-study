<template>
  <div>
    <div class="lang-dropdown">
      <!-- BUG when locale changed second time it produces one-time error but functionality is not affected   -->
      <label for="lang">{{ $t('language') }}</label>
      <select
        id="lang"
        class="t-p-2 t-ml-1 t-rounded-md t-bg-third t-text-fifth"
        :value="$i18n.localeProperties.code"
        @change.stop="onLocaleChange($event)"
      >
        <option
          v-for="lang in $i18n.locales"
          :key="lang.code"
          :value="lang.code"
        >
          {{ lang.iso }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  methods: {
    async onLocaleChange(e) {
      await this.$i18n.setLocale(e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped></style>
