require('dotenv/config')

module.exports = {
    "type":process.env.DB_TYPE,
    "host":process.env.DB_HOST,
    "port":process.env.DB_PORT,
    "username":process.env.DB_USERNAME,
    "password":process.env.DB_PASSWORD,
    "database":process.env.DB_DATABASE,
    "synchronize":false,
    "entities":["src/database/entities/**/*.ts"],
    "migrations":["src/database/migrations/**/*.ts"],
    "subscriber":["src/database/subscriber/**/*.ts"],
    "cli":{
        "entitiesDir":"src/database/entities",
        "migrationsDir":"src/database/migrations",
        "subscribersDir":"src/database/subscriber"
        }
}
