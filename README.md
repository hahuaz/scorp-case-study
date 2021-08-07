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

- Interpolation feature is applied. Browser language detaction is active. Input field errors also localized.
- Used mixins for dry princable on input rules. though, first thing that came to my mind was injection but mixins suited better.
- Vuex state persisted for user object and contact messages.
- Custom desktop navbar(without UI)
- If team prefers html elements to be clear from utility classes i can @apply Tailwind classes to spesicif class.
- One problem i faced on this project using vuetify with Tailwind. There are some class conflicts between these two. Vuetify overrides Tailwind which doesn't suit my workflow cause i am used to Tailwind. Seeing an element's left-padding added by Vuetify bummed me out and forced me to override sass variable. However, Tailwind's preflight feature wants you to be specific and create unique design everytime which i prefer.Fallowing approaches could be used for Tailwind to take precedence but i added prefix to Tailwind which results boilerplate class names:
  - Compile Tailwind's css after Vuetify
  - Add important property to Tailwind config
- This study took me 12 hour approximately from scratch. It was my first time that i localized a project which consumed half of the time.

## todos

- you can check the todos with "todo tree" vs code extension.

## bugs

- If you change the language after opening and closing the modal, input rules error on the modal still not localized. This is due Vuetify keeps alive the modal. To debug modal should be destroyed when closed.
