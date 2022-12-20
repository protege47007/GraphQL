import "reflect-metadata"
import { DataSource } from "typeorm"
import { Task } from "./entities/Task"
import key from "./keys"

export default new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: key.username,
    password: key.password,
    database: "todo-api",
    synchronize: true, // helps us with automatic migration
    logging: true, // disable when pushing to production
    entities: [ Task ],
})