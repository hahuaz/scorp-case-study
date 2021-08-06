<template>
  <div>
    <div class="footer t-bg-gray-100 t-py-6 t-text-fifth">
      <div class="t-max-w-screen-xl t-mx-auto">
        <div
          class="
            t-container t-mx-auto t-px-4
            sm:t-px-8
            lg:t-flex lg:t-justify-center
          "
        >
          <div
            class="
              t-flex t-gap-x-6 t-justify-center t-items-center
              sm:t-gap-x-12
              lg:t-flex-col
            "
          >
            <div class="t-space-y-2 sm:t-grid sm:t-justify-center">
              <div
                class="
                  logo__container
                  t-h-12 t-w-16 t-mx-auto t-hidden
                  sm:t-inline-block
                "
              >
                <nuxt-link to="/">
                  <img
                    class="t-w-full t-h-full t-object-contain"
                    src="/logo.png"
                    alt=""
                  />
                </nuxt-link>
              </div>
              <ul
                class="footer__socials t-flex t-flex-col t-gap-2 sm:t-flex-row"
              >
                <li>
                  <a href="#javascript">
                    <v-icon>mdi-facebook</v-icon>
                  </a>
                </li>
                <li>
                  <a href="#javascript">
                    <v-icon>mdi-twitter</v-icon>
                  </a>
                </li>
                <li>
                  <a href="#javascript">
                    <v-icon>mdi-instagram</v-icon>
                  </a>
                </li>
                <li>
                  <a href="#javascript">
                    <v-icon>mdi-linkedin</v-icon>
                  </a>
                </li>
              </ul>
            </div>
            <pre class="t-text-sm t-border-l t-pl-1 t-border-primary sm:t-mt-4">
Popoya Street, Ulvise
Aloha - TURKEY
+90 246-345-0695
<a href="mailto:contact@scorp.com">contact@scorp.com</a></pre>
          </div>
          <div
            class="
              t-flex t-flex-wrap t-gap-6 t-py-6 t-justify-around
              sm:t-p-8
              lg:t-gap-x-16 lg:t-pl-16
            "
          >
            <div>
              <ul class="t-space-y-1 sm:t-space-y-2">
                <h1 class="t-pb-1">Navigations</h1>
                <li><a href="#"> About Us </a></li>
                <li><a href="#"> FAQs </a></li>
                <li><a href="#"> Contact </a></li>
                <li><a href="#"> Blog </a></li>
              </ul>
            </div>
            <div>
              <ul class="t-space-y-1 sm:t-space-y-2">
                <h1 class="t-pb-1">The Highlights</h1>
                <li><a href="#"> Our Success </a></li>
                <li><a href="#"> Team </a></li>
                <li><a href="#"> Angels </a></li>
                <li><a href="#"> Leaders </a></li>
              </ul>
            </div>
            <div>
              <ul class="t-space-y-1 sm:t-space-y-2">
                <h1 class="t-pb-1">Agent & Company</h1>
                <li><a href="#"> Company Details </a></li>
                <li><a href="#"> Assets </a></li>
                <li><a href="#"> Our History </a></li>
                <li><a href="#"> Our Partners </a></li>
              </ul>
            </div>
            <div>
              <ul class="t-space-y-2 sm:t-space-y-2">
                <h1 class="t-pb-1">Download Apps</h1>
                <li>
                  <a href="#">
                    <div
                      class="
                        our-app
                        t-border
                        t-border-gray-600
                        t-rounded-md
                        t-grid
                        t-gap-x-1
                        t-items-center
                      "
                    >
                      <v-icon class="t-text-fourth">mdi-apple</v-icon>

                      <div>
                        <p class="t-text-sm">App Store</p>
                        <p class="t-text-gray-400 t-text-xs">Get It Now</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div
                      class="
                        our-app
                        t-border
                        t-border-gray-600
                        t-rounded-md
                        t-grid
                        t-gap-x-1
                        t-items-center
                      "
                    >
                      <v-icon class="t-text-fourth">mdi-google-play</v-icon>

                      <div>
                        <p class="t-text-sm">Google Play</p>
                        <p class="t-text-gray-400 t-text-xs">Get It Now</p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom t-bg-gray-200 t-py-3 t-text-fifth t-text-sm">
      <div class="t-max-w-screen-xl t-mx-auto">
        <div class="t-container t-mx-auto">
          <div
            class="
              t-flex t-flex-col t-justify-around t-px-4 t-text-center
              sm:t-flex-row
            "
          >
            <div>
              <p>
                © 2021 Scorp.com - All rights reserved by
                <i class="t-font-mono">Hahuaz</i>.
              </p>
            </div>
            <div class="t-mt-2 sm:t-mt-0">
              <a href="#">Terms of use </a>
              <a href="#" class="t-ml-4">Privaciy Policy </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  h1 {
    @apply t-text-fifth;
    font-weight: 500;
  }
  a {
    &:hover {
      @apply t-text-fourth;
    }
  }
  &__bottom {
    a:hover {
      @apply t-text-fourth;
    }
  }
  .container {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr 1.5fr;
  }
}

.footer__socials {
  .v-icon {
    transition: all 300ms linear;
    @apply t-text-primary;
    &:hover {
      @apply t-text-fourth;
      transform: scale(1.1);
    }
  }
}
.our-app {
  max-width: min-content;
  grid-template-columns: 34px 90px;
}
</style>
