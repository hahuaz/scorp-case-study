export default function (context) {
  const userAgent = context.req
    ? context.req.headers['user-agent']
    : navigator.userAgent

  context.isMobile = /mobile/i.test(userAgent)
}
