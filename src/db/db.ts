import "reflect-metadata";
import { DataSource } from "typeorm"
import { BlogPost } from "./entities/blog";
import config from "@config/config.json" with { type: "json" };

export const db = new DataSource({
    type: "mariadb",
    host: config.database.host,
    port: config.database.port,
    username: config.database.user,
    password: config.database.passwd,
    database: config.database.db,
    synchronize: true,
    logging: true,
    entities: [BlogPost],
    subscribers: [],
    migrations: [],
});