<template>
  <div class="t-px-4 t-flex t-justify-between t-items-center">
    <ul class="nav t-flex t-gap-x-6 t-items-center">
      <li class="logo__container t-h-12 t-w-16">
        <nuxt-link to="/">
          <img
            class="t-w-full t-h-full t-object-contain"
            src="/logo.png"
            alt=""
          />
        </nuxt-link>
      </li>

      <li class="nav__item">
        <div class="nav__link">
          <div class="t-relative t-font-medium">
            {{ $t('Our Apps') }}
            <span class="menu-indicator">
              <span class="menu-indicator-chevron"></span>
            </span>
          </div>
        </div>
        <ul class="menu menu--main">
          <li><a href="#">Lorem</a></li>
          <li><a href="">Sit Ametes Cezete</a></li>
          <li><a href="">Valis Kaste Akse</a></li>
          <li class="nav__item">
            <a href="">
              <div class="t-relative t-inline-block">
                Kalebrians
                <span class="submenu-indicator">
                  <span class="submenu-indicator-chevron"></span>
                </span>
              </div>
            </a>
            <ul class="menu menu--sub">
              <li><a href="">Lorem Sevile</a></li>
              <li><a href="">Poraktan</a></li>
              <li><a href="">Ashil Lakese</a></li>
            </ul>
          </li>
          <li class="nav__item">
            <a href="">
              <div class="t-relative t-inline-block">
                New worapere
                <span class="submenu-indicator">
                  <span class="submenu-indicator-chevron"></span>
                </span>
              </div>
            </a>
            <ul class="menu menu--sub">
              <li><a href="">Lorem Lore</a></li>
              <li><a href="">Kalbe</a></li>
              <li><a href="">Ashil Lakese</a></li>
            </ul>
          </li>
          <li class="nav__item">
            <a href="">
              <div class="t-relative t-inline-block">
                Sit Antenkentest
                <span class="submenu-indicator">
                  <span class="submenu-indicator-chevron"></span>
                </span>
              </div>
            </a>
            <ul class="menu menu--sub">
              <li><a href="">Lorem Lore</a></li>
              <li><a href="">Kalbe</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav__item">
        <nuxt-link
          to="/about"
          class="nav__link"
          :class="{ active: $route.path === '/about' }"
        >
          <div class="t-relative t-font-medium">{{ $t('about') }}</div>
        </nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link
          to="/contact"
          class="nav__link"
          :class="{ active: $route.path === '/contact' }"
        >
          <div class="t-relative t-font-medium">{{ $t('contact') }}</div>
        </nuxt-link>
      </li>
    </ul>
    <div>
      <span
        class="t-text-green-500 t-mr-4 t-cursor-pointer"
        @click="toggleLogRegVisibility"
      >
        <v-icon color="#10b981">mdi-chart-bubble</v-icon>
        <span class="t-font-semibold">{{ $t('hiring') }}</span>
      </span>
      <span
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
      </span>
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
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      login: false,
      register: false,
      activePage: null,
    }
  },
  computed: {
    logRegType() {
      return this.$store.state.ui.logRegType
    },
  },
  methods: {
    ...mapMutations('ui', [
      'toggleLogRegType', // also supports payload `this.nameOfMutation(amount)`
      'toggleLogRegVisibility',
    ]),
  },
  mounted() {
    this.activePage = this.$route.path
  },
}
</script>

<style lang="scss" scoped>
.nav__item {
  position: relative;
  &:hover {
    & > .nav__link {
      @apply t-bg-primary t-text-white t-cursor-pointer;
    }

    & > .menu {
      visibility: visible;
      opacity: 1;
    }
  }
}
.nav__link {
  @apply t-inline-block t-py-6 t-px-4 t-text-fifth t-border-b-2 t-border-transparent;
}

.nav__link.active {
  @apply t-border-primary;
}

.menu {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: all 500ms;
  width: 240px;
  padding: 1rem;
  padding-bottom: 0;
  box-shadow: 0 0 50px 0 rgb(32 32 32 / 25%);
  @apply t-bg-gray-100 t-divide-y-2;

  &--main {
    &::before {
      background-color: inherit;
      content: '';
      height: 20px;
      left: 25px;
      position: absolute;
      top: -10px;
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      width: 20px;
    }
  }

  &--sub {
    left: 100%;
    top: 0;
  }

  > li {
    padding: 14px;
  }

  a {
    width: 100%;
    display: inline-block; /* need for transform applying */
    &:hover {
      transform: translateX(10px);
      color: red;
      .submenu-indicator-chevron {
        border-color: red;
      }
    }
  }
}
</style>
