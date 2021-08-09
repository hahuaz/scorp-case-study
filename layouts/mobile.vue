<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <div class="t-divide-y-2 t-divide-black">
        <div class="t-flex t-justify-center t-items-center t-gap-4 t-py-2">
          <!-- TODO add scorp's svg -->
          <div class="logo__container h-8 t-w-16 t-py-2">
            <nuxt-link to="/">
              <img
                class="t-w-full t-h-full t-object-contain"
                src="/logo.png"
                alt=""
              />
            </nuxt-link>
          </div>
        </div>
        <ul class="nav t-flex t-flex-col t-p-0 t-pt-4 t-divide-y-2">
          <li class="nav__item">
            <v-expansion-panels flat focusable accordion>
              <v-expansion-panel>
                <v-expansion-panel-header expand-icon="mdi-chevron-down">
                  <v-icon class=""> mdi-apps </v-icon>
                  <span class="t-pl-1 t-text-base t-font-medium">{{
                    $t('Our Apps')
                  }}</span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <ul
                    class="
                      t-space-y-2
                      t-divide-y-2
                      t-px-4
                      t-max-w-min
                      t-whitespace-nowrap
                    "
                  >
                    <li class="nav__item">
                      <div class="nav__link t-flex t-gap-x-1 t-py-1">
                        <v-icon> mdi-google </v-icon>
                        <a href="/">
                          <div class="t-font-medium">Google</div>
                        </a>
                      </div>
                    </li>
                    <li class="nav__item">
                      <div class="nav__link t-flex t-gap-x-1 t-py-1">
                        <v-icon> mdi-apple </v-icon>
                        <a href="/">
                          <div class="t-font-medium">Apple</div>
                        </a>
                      </div>
                    </li>
                    <li class="nav__item">
                      <div class="nav__link t-flex t-gap-x-1 t-py-1">
                        <v-icon> mdi-facebook </v-icon>
                        <a href="/">
                          <div class="t-font-medium">Facebbok</div>
                        </a>
                      </div>
                    </li>
                  </ul>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </li>
          <li class="nav__item">
            <div
              class="nav__link t-flex t-gap-1 t-py-2 t-pl-4"
              :class="{ active: $route.path === '/about' }"
            >
              <v-icon> mdi-information-variant </v-icon>
              <nuxt-link to="/about">
                <span class="t-text-base t-font-medium">{{ $t('about') }}</span>
              </nuxt-link>
            </div>
          </li>
          <li class="nav__item">
            <div
              class="nav__link t-flex t-gap-1 t-py-2 t-pl-4"
              :class="{ active: $route.path === '/contact' }"
            >
              <v-icon> mdi-account-box-multiple-outline </v-icon>
              <nuxt-link to="/contact">
                <span class="t-text-base t-font-medium">{{
                  $t('contact')
                }}</span>
              </nuxt-link>
            </div>
          </li>
        </ul>
      </div>
      <!-- TODO why expansion content's height is 100% by default? it should be 100vh. -->
      <template #append>
        <div
          class="
            t-flex t-flex-col t-items-center t-justify-center t-gap-y-2 t-mb-4
          "
        >
          <span
            class="t-text-green-500"
            @click="
              toggleLogRegVisibility()
              drawer = false
            "
          >
            <v-icon color="#10b981">mdi-chart-bubble</v-icon>
            <span class="t-font-semibold">{{ $t('hiring') }}</span>
          </span>
          <div v-if="userName" class="t-inline-block">
            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  {{ userName }}
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="logoutUser">
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <div
            v-else
            class="
              t-bg-fifth
              t-text-white
              t-p-3
              t-rounded-md
              t-inline-block
              t-cursor-pointer
            "
            @click="toggleLogRegVisibility"
          >
            <v-icon color="white">mdi-account</v-icon>

            <span class="t-ml-2 t-font-semibold">{{ $t('Sign In') }}</span>
          </div>
          <v-dialog
            :value="logRegType === 'login'"
            @click:outside="toggleLogRegVisibility"
          >
            <login></login>
          </v-dialog>
          <v-dialog
            :value="logRegType === 'register'"
            @click:outside="toggleLogRegVisibility"
          >
            <register></register>
          </v-dialog>
          <language-input />
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar color="transparent" absolute flat dark app>
      <v-app-bar-nav-icon @click="drawer = true">
        <template #default> </template>
      </v-app-bar-nav-icon>

      <v-toolbar-title class="t-flex t-space-x-2 t-text-gray-100">
        <v-icon> mdi-{{ pathObject.icon }} </v-icon>
        <i18n :path="pathObject.pageName" tag="h1"> </i18n>
      </v-toolbar-title>
    </v-app-bar>
    <Nuxt></Nuxt>
    <footer>
      <view-footer></view-footer>
    </footer>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    drawer: false,
    group: null,

    routeNames: [
      {
        path: '/',
        pageName: 'home',
        icon: 'home',
      },
      {
        path: '/about',
        pageName: 'about',
        icon: 'information-variant',
      },
      {
        path: '/contact',
        pageName: 'contact',
        icon: 'account-box-multiple-outline',
      },
    ],
  }),

  computed: {
    pathObject() {
      return this.routeNames.find((e) => e.path === this.$route.path)
    },
    logRegType() {
      return this.$store.state.ui.logRegType
    },
    userName() {
      return this.$store.state.user.user?.firstname
    },
  },
  methods: {
    ...mapMutations('ui', [
      'toggleLogRegType', // also supports payload `this.nameOfMutation(amount)`
      'toggleLogRegVisibility',
    ]),
    async logoutUser() {
      try {
        await this.$store.dispatch('user/logoutUser')
        this.$router.push('/')
      } catch (error) {
        throw new Error(error.message)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .v-toolbar__content {
  flex-direction: row-reverse !important;
  justify-content: space-between !important;
  padding: unset !important;
  @apply t-text-gray-100;
  .v-icon {
    @apply t-text-gray-100;
  }
}
::v-deep .v-expansion-panel-header {
  @apply t-pl-4;
  > * {
    flex: unset !important;
  }
}
::v-deep .v-expansion-panel-header__icon {
  margin-left: 5px !important;
}

::v-deep .v-expansion-panel-content__wrap {
  padding: 0.5rem 0 0.5rem 1rem;
}

.nav__link.active {
  background-color: rgb(223, 223, 223);
}
::v-deep .v-navigation-drawer {
  height: 100vh !important;
}
</style>
