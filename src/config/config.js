import dotenv from 'dotenv'
dotenv.config()

const DEFAULT_SERVER_PORT = 5555

const config = {
    server_port: parseInt(process.env.SERVER_PORT || '', 10) || DEFAULT_SERVER_PORT,
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    }
}

export default config