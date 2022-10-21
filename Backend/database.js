import pg from "pg"

function connectDatabase() {
    const pool = new pg.Pool({

        user: 'postgres',
        password: '12345',
        database: 'ecomm',
        host: 'localhost',
        port: '5432'
    })
    return pool
}
console.log("Database connection is Successful!")
export { connectDatabase }