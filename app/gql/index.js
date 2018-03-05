'use strict'

const Router = require('koa-router')
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa')
const { makeExecutableSchema } = require('graphql-tools')

const router = new Router()

const schema = makeExecutableSchema({
  pretty: true,
  debug: process.env.NODE_ENV !== 'production',
  typeDefs: `
    type Query {
      viewer: Viewer
    }

    type Viewer {
      id: String
    }
  `,
  resolvers: () => {
    Query: {
      viewer: () => ({
        id: '0',
      })
    }
  },
})

router
  .post('/graphql', graphqlKoa({ schema }))
  .get('/graphql', graphqlKoa({ schema }))
  .get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))

module.exports = router
