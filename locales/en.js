/* TODO should refactor as object nesting like header.about; header.contact */
export default {
  welcome: 'Welcome',
  home: 'Home',
  about: 'About Us',
  contact: 'Contact',
  'Our Apps': 'Our Apps',
  hiring: "We're hiring!",
  'Sign In': 'Sign In',
  language: 'Language:',
  register: {
    registration: 'Registration',
    tos: {
      text: '{preText}{linkText}{tailText}',
      preText: "I've read ",
      tailText: ' .',
      linkText: 'Terms and Conditions ',
    },
    register: 'Register',
    alreadyAccount: 'Already have an account?',
    login: 'Login.',
    rules: {
      isEmail: 'Invalid e-mail.',
      required: 'Required.',
      onlyString: "Don't use number.",
      shouldContainNumber: 'Should contain number.',
    },
  },
  login: {
    log: 'Log',
    in: 'In',
    login: 'Login',
    'Forget Password?': 'Forget Password?',
    dontAccount: "Don't have an account?",
    register: 'Register',
    rules: {
      isEmail: 'Invalid e-mail.',
      required: 'Required.',
    },
    emailLabel: 'E-mail',
    passwordLabel: 'Password',
  },
}
