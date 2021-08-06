<template>
  <div>
    <div class="t-bg-white t-relative t-px-4 xl:t-px-16">
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
      <div
        class="t-text-fifth t-text-center t-font-extrabold t-text-6xl t-py-12"
      >
        {{ $t('login.log') }}
        <span class="t-text-fourth">{{ $t('login.in') }}</span>
      </div>
      <div class="try t-px-4 t-mx-auto t-space-y-4 t-w-80 sm:t-w-96">
        <v-form ref="form">
          <v-text-field
            v-model="email"
            background-color="#eff6ff"
            color="#1266e3"
            filled
            :label="i18nLogin.emailLabel"
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
            :label="i18nLogin.passwordLabel"
            prepend-inner-icon="mdi-lock-outline"
            :rules="[required]"
          ></v-text-field>
        </v-form>
        <a
          href="#javascript"
          class="
            t-text-center
            t-inline-block
            t-w-full
            t-py-4
            t-rounded-full
            t-bg-fourth
            t-text-white
            t-text-lg
          "
          @click="loginClicked"
          >{{ $t('login.login') }}</a
        >
        <div
          class="
            t-grid t-grid-flow-row t-justify-items-center t-py-6 t-space-y-4
          "
        >
          <span class="t-inline-block t-cursor-pointer t-text-primary">{{
            $t('login.Forget Password?')
          }}</span>
          <div>
            {{ $t('login.dontAccount') }}
            <span
              class="t-cursor-pointer t-text-primary"
              @click="toggleLogRegType"
              >{{ $t('login.register') }}</span
            >
            .
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      invalid: true,
      email: null,
      password: null,
      i18nLogin: this.$i18n.messages[this.$i18n.locale].login,
    }
  },
  methods: {
    isEmail(value) {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(value) || this.i18nLogin.rules.isEmail
    },
    required(value) {
      return !!value || this.i18nLogin.rules.required
    },
    loginClicked() {
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
