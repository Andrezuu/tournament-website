import mysql from 'mysql2'
import { config } from './index.js'

const db_config = config
const database = mysql.createPool({
    host: db_config.mysql.host,
    user: db_config.mysql.user,
    password: db_config.mysql.password,
    database: db_config.mysql.database
}).promise()

export default database