const pgp = require('pg-promise')()

const db = pgp('postgres://postgres:godsmack@localhost:5432/postgres')

module.exports = db