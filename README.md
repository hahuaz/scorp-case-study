# Case study for frontend position at Scorp

You can find the deployed site [on netlify!](https://hahuaz-scorp.netlify.app/)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Worth to mention

- Interpolation feature is applied. Browser language detaction is active. Input field errors also localized. If you change the language after opening and closing the modal, modal rules error still not localized.this is because vuetify keeps alive the modal. Should destroy the modal when closed.
- Used mixins for dry princable on input rules. though, first thing that came to my mind was injection but mixins suited better.
- Vuex state persisted for user object and contact messages.
- Custom desktop navbar(without UI)
- If team prefers html elements to be clear from utility classes i can @apply tailwind classes to spesicif class.
- One problem i faced on this project using vuetify with tailwind. There are some class conflicts between these two. Vuetify overrides tailwind which doesn't suit my workflow cause i am used to tailwind. Seeing an ul element's left-padding added by Vuetify bummed me out and forced me to override sass variable. However, tailwind's preflight feature wants you to be specific and create unique design everytime which i prefer.Fallowing approaches could be used for tailwind to take precedence:
  - Compile tailwind's css after Vuetify
  - Add important property to tailwind config
  - I added prefix to tailwind which results boilerplate class names.
- This study took me 12 hour approximately from scratch. It was my first time that i localized a project which consumed half of my time.

## todos

- you can check the todos with "todo tree" vs code extension.

## bugs
