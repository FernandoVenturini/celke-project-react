import "reflect-metadata";
import { DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Lavinia12*",
    database: "celke",
    synchronize: false,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})