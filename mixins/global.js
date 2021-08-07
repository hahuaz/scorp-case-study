export default {
  methods: {
    required(value) {
      return (
        !!value ||
        this.$i18n.messages[this.$i18n.locale].register.rules.required
      )
    },
    isEmail(value) {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return (
        pattern.test(value) ||
        this.$i18n.messages[this.$i18n.locale].register.rules.isEmail
      )
    },
    onlyString(value) {
      const pattern = /\d/
      return (
        !pattern.test(value) ||
        this.$i18n.messages[this.$i18n.locale].register.rules.onlyString
      )
    },
    shouldContainNumber(value) {
      const pattern = /\d/
      return (
        pattern.test(value) ||
        this.$i18n.messages[this.$i18n.locale].register.rules
          .shouldContainNumber
      )
    },
  },
}
