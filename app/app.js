const Koa = require('koa')
const Router = require('koa-router')
const helmet = require('koa-helmet')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const app = new Koa()
const router = new Router()

router.get('/', async ctx => {
  ctx.body = { message: 'Hello world!' }
})

app.keys = ['ineed', 'better', 'keys']
app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(helmet())
  .use(bodyparser())
  .use(logger())
  .use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    ctx.set('X-Response-Time', `${ms}ms`)
  })
  .use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}`)
  })

module.exports = app
