import "reflect-metadata"
import { DataSource } from "typeorm"
import { Training } from "./entity/Training"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Solicy_123",
    database: "test",
    synchronize: false,
    migrationsRun: true,
    logging: false,
    entities: [Training],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
})
