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
  entities: ["src/entities/*.ts", "dist/entities/*.js"],
  migrations: ["src/migrations/*.ts", "dist/migrations/*.js"],
  synchronize: false, // Use migrations instead of auto-syncing
  logging: true,
});

