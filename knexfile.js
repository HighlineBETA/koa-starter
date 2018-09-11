'use strict'

require('dotenv').config({ silent: true })

const defaults = {
  client: 'postgresql',
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './db/migrations',
  },
  seeds: {
    directory: './db/seeds',
  },
}

module.exports = {
  development: {
    ...defaults,
    connection: process.env.DB_CONNECTION_STRING,
  },
  test: {
    ...defaults,
    connection: process.env.TEST_DB_CONNECTION_STRING,
  },
  staging: {
    ...defaults,
    connection: process.env.DB_CONNECTION_STRING,
  },
}
