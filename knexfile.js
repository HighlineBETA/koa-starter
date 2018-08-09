'use strict'

require('dotenv').config({ silent: true })

const USER = process.env.POSTGRES_USER || 'postgres'
const HOST = process.env.POSTGRES_HOST || '127.0.0.1'
const DB = process.env.POSTGRES_DB
const PORT = process.env.POSTGRES_PORT || '5432'
const ssl = !!process.env.SSL

module.exports = {
  client: 'postgresql',
  connection: `postgresql://${USER}@${HOST}:${PORT}/${DB}${ssl && '?ssl=true'}`,
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
