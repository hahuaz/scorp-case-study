<template>
  <div class="contact t-py-14 t-px-2">
    <div class="t-flex t-justify-center">
      <v-form ref="form">
        <p
          class="
            t-text-xl
            t-font-semibold
            t-font-serif
            t-text-center
            t-py-6
            t-underline
          "
        >
          Contact Form
        </p>
        <div
          class="
            t-grid t-justify-center
            lg:t-w-144
            sm:t-grid-cols-2 sm:t-gap-x-4
          "
        >
          <v-text-field
            v-model="name"
            color="black"
            outlined
            label="Name"
            prepend-inner-icon="mdi-account-outline"
            :rules="[required, onlyString]"
          ></v-text-field>
          <v-text-field
            v-model="email"
            color="black"
            outlined
            label="E-mail"
            prepend-inner-icon="mdi-email-outline"
            :rules="[required, isEmail]"
          ></v-text-field>
          <v-text-field
            v-model="phone"
            type="tel"
            color="black"
            outlined
            label="Phone"
            prepend-inner-icon="mdi-phone-outline"
            :rules="[required]"
          ></v-text-field
          ><v-overflow-btn
            outlined
            item-text="name"
            item-value="id"
            :items="countryList"
            label="Select country"
            editable
            :rules="[required]"
            @input="country = $event"
          ></v-overflow-btn>
          <v-textarea
            v-model="textarea"
            class="sm:t-col-span-2"
            outlined
            label="Your Message"
            :rules="[required]"
          ></v-textarea>
          <div class="t-text-center sm:t-col-span-2 t-mt-4">
            <v-btn
              large
              :loading="loading"
              class="
                t-px-24 t-inline-block
                sm:t-px-48
                t-rounded-full t-bg-fourth t-text-white t-text-lg
              "
              @click="onSendClick"
              >Send</v-btn
            >
            <v-snackbar
              v-model="showSnackbar"
              outlined
              top
              :color="snackbarColor"
              content-class="t-text-lg t-font-medium t-font-mono "
            >
              {{ snackbarText }}
            </v-snackbar>
          </div>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import global from '~/mixins/global.js'
export default {
  mixins: [global],
  data() {
    return {
      textarea: null,
      name: null,
      email: null,
      phone: null,
      country: null,
      countryList: [
        { id: 'TR', name: 'Turkey' },
        { id: 'US', name: 'United States of America' },
        { id: 'GB', name: 'United Kingdom' },
        { id: 'DE', name: 'Germany' },
        { id: 'SE', name: 'Sweden' },
        { id: 'KE', name: 'Kenya' },
        { id: 'BR', name: 'Brazil' },
        { id: 'ZW', name: 'Zimbabwe' },
      ],
      loading: false,
    }
  },
  methods: {
    async onSendClick() {
      /* if one input is invalid don't submit */
      if (this.$refs.form.validate() === false) return
      this.loading = true
      try {
        await this.$store.dispatch('user/createMessage', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          country: this.country,
        })
        this.snackbarColor = 'green'
        this.snackbarText = 'Your message pushed the local storage!'
        this.showSnackbar = true

        setTimeout(() => {
          this.$router.push('/')
        }, 2000)
      } catch (error) {
        this.snackbarColor = 'red'
        this.snackbarText = error.message
        this.showSnackbar = true
      }
      this.loading = false
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .v-form {
  @apply t-my-6 t-py-8 t-px-2 t-rounded-md sm:t-px-24 sm:t-pt-0;
  backdrop-filter: blur(5px);
  background-color: rgba($color: white, $alpha: 0.4);
}

::v-deep .v-select__slot .v-input__append-inner {
  margin-top: 0 !important;
}

::v-deep .v-input__control > .v-input__slot:hover {
  background: transparent !important;
}

.contact {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      to right,
      rgba(black, 0.3),
      rgba(black, 0.3)
    ),
    url('/images/contact-hero.png');
}
</style>
