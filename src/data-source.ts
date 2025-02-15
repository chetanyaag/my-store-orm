import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "password",
  database: process.env.DB_NAME || "nestjs_db",
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
  synchronize: false, // Use migrations instead of auto-syncing
  logging: true,
});


// export const AppDataSource = new DataSource({
//     type: 'postgres',
//     host: process.env.DB_HOST || 'localhost',
//     port: Number(process.env.DB_PORT) || 5432,
//     username: process.env.DB_USER || 'postgres',
//     password: process.env.DB_PASS || 'password',
//     database: process.env.DB_NAME || 'mydb',
//     entities: ["src/entities/*.ts"],
//     migrations: ['src/migrations/*.ts'],
//     synchronize: false, // Migrations will handle schema changes
//       logging: true,
//   });