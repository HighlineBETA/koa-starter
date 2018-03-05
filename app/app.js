'use strict'

require('dotenv').config({ silent: true })

const Koa = require('koa')
const Router = require('koa-router')
const helmet = require('koa-helmet')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const app = new Koa()
const router = new Router()

const graphqlRouter = require('./gql')

router.get('/', async ctx => {
  ctx.body = { message: 'Hello world!' }
})

app.keys = ['ineed', 'better', 'keys']
app
  .use(graphqlRouter.routes())
  .use(graphqlRouter.allowedMethods())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(helmet())
  .use(bodyparser())
  .use(logger())

module.exports = app
