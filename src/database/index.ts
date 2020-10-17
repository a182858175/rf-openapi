import { createConnections } from 'typeorm';

createConnections([
  {
    name: "BILLING",
    type: "mssql",
    host: process.env.MSSQL_HOST,
    port: 1433,
    username: process.env.MSSQL_USERNAME,
    password: process.env.MSSQL_PASSWORD,
    database: process.env.MSSQL_BILLING,
    entities: [
      "src/models/BILLING/**/*.ts"
    ],
    migrations: [
      "src/database/migrations/**/*.ts"
    ],
    cli: {
      "migrationsDir": "src/database/migrations/billing"
    }
  },
  {
    name: "RF_User",
    type: "mssql",
    host: process.env.MSSQL_HOST,
    port: 1433,
    username: process.env.MSSQL_USERNAME,
    password: process.env.MSSQL_PASSWORD,
    database: process.env.MSSQL_USER,
    entities: [
      "src/models/RF_User/**/*.ts"
    ],
    migrations: [
      "src/database/migrations/user/**/*.ts"
    ],
    cli: {
      "migrationsDir": "src/database/migrations/user"
    }
  },
  {
    name: "RF_World",
    type: "mssql",
    host: process.env.MSSQL_HOST,
    port: 1433,
    username: process.env.MSSQL_USERNAME,
    password: process.env.MSSQL_PASSWORD,
    database: process.env.MSSQL_WORLD,
    entities: [
      "src/models/RF_World/**/*.ts"
    ],
    migrations: [
      "src/database/migrations/world/**/*.ts"
    ],
    cli: {
      "migrationsDir": "src/database/migrations/world"
    }
  }
]).then(() => {
  console.log("Connected to MSSQL Server")
}).catch((err) => {
  console.log("Failed to connect to MSSQL Server")
})