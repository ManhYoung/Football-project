const pg = require('pg')
const { Pool } = pg

const pool = new Pool()

exports.query = (text, params, callback) => {
    return pool.query(text, params, callback)
}