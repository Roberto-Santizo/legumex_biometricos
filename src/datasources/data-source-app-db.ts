import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "../entity/User";
import { Token } from "../entity/Token";
import dotenv from "dotenv";

dotenv.config();

const options: DataSourceOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABSE,
    entities: [Token, User],
    synchronize: true,
};

const AppDatasource = new DataSource(options);


export default AppDatasource;