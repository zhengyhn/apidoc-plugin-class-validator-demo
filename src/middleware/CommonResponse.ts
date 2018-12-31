export function CommonResponse () {
  return async (ctx, next) => {
    try {
      await next()
      ctx.status = 200
      ctx.body = {
        code: 0,
        data: ctx.body
      }
    } catch (error) {
      ctx.status = 200
      ctx.body = {
        code: 1,
        msg: error.message
      }
    }
  }
}