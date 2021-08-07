<template>
  <div
    class="
      t-bg-white t-px-4
      xl:t-px-12
      t-max-w-screen-xl t-text-center t-relative
    "
  >
    <button
      class="
        close__button
        t-absolute t-top-2 t-right-4 t-text-2xl t-text-black
        lg:t-hidden
      "
      @click="toggleLogRegVisibility"
    >
      X
    </button>
    <div class="t-text-fifth t-font-extrabold t-text-4xl sm:t-text-6xl t-py-8">
      {{ $t('register.registration') }}
    </div>
    <v-form ref="form">
      <div
        class="
          t-text-center t-gap-4
          mx-auto
          sm:t-w-96
          xl:t-w-144 xl:t-grid xl:t-grid-cols-2
        "
      >
        <v-text-field
          v-model="firstname"
          background-color="#eff6ff"
          color="#1266e3"
          filled
          label="First Name"
          prepend-inner-icon="mdi-account-outline"
          :rules="[required, onlyString]"
        ></v-text-field>
        <v-text-field
          v-model="lastname"
          background-color="#eff6ff"
          color="#1266e3"
          filled
          label="Last Name"
          prepend-inner-icon="mdi-account-outline"
          :rules="[required, onlyString]"
        ></v-text-field>
        <v-text-field
          v-model="email"
          background-color="#eff6ff"
          color="#1266e3"
          filled
          label="Email"
          prepend-inner-icon="mdi-email-outline"
          :rules="[required, isEmail]"
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          background-color="#eff6ff"
          color="#1266e3"
          filled
          counter="25"
          hint="Password's length can only be 25."
          label="Password"
          prepend-inner-icon="mdi-lock-outline"
          :rules="[required, shouldContainNumber]"
        ></v-text-field>
      </div>
    </v-form>

    <div class="t-flex t-justify-center t-items-center t-mb-4">
      <v-checkbox
        v-model="terms"
        dense
        color="#e63946"
        hide-details
      ></v-checkbox>
      <!-- TODO look up for better interpolation solution  -->
      <i18n
        path="register.tos.text"
        tag="span"
        class="mt-2 t-text-sm sm:t-text-base"
      >
        <template #preText>
          <span>{{ $t('register.tos.preText') }}</span>
        </template>
        <template #linkText>
          <a href="#javascript" class="t-text-fourth">{{
            $t('register.tos.linkText')
          }}</a>
        </template>
        <template #tailText>
          <span>{{ $t('register.tos.tailText') }}</span>
        </template>
      </i18n>
    </div>
    <div class="t-text-center">
      <a
        href="#javascript"
        class="
          t-text-center t-inline-block t-py-4 t-px-12
          xl:t-px-48
          t-rounded-full t-bg-fourth t-text-white t-text-lg
        "
        @click="registerClicked"
        >{{ $t('register.register') }}</a
      >
    </div>
    <div
      class="t-grid t-grid-flow-row t-justify-items-center t-py-6 t-space-y-4"
    >
      <div>
        {{ $t('register.alreadyAccount') }}

        <span
          class="t-cursor-pointer t-text-primary"
          @click="toggleLogRegType"
          >{{ $t('register.login') }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import global from '~/mixins/global.js'

export default {
  mixins: [global],
  data() {
    return {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      terms: false,

      i18nRegisterRules: this.$i18n.messages[this.$i18n.locale].register.rules,
    }
  },

  methods: {
    registerClicked() {
      /* if one input is invalid don't submit */
      if (this.$refs.form.validate() === false) return
      console.log('continue')
    },

    ...mapMutations('ui', [
      'toggleLogRegType', // also supports payload `this.nameOfMutation(amount)`
      'toggleLogRegVisibility',
    ]),
  },
}
</script>

<style lang="scss" scoped></style>
