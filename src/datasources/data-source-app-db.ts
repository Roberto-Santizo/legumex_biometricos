import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "../entity/User";
import { Token } from "../entity/Token";
import dotenv from "dotenv";

dotenv.config();

const options: DataSourceOptions = {
    type: "postgres",
    url: process.env.DB_URL,
    entities: [Token, User],
    synchronize: true,
    ssl: { rejectUnauthorized: false }
};

const AppDatasource = new DataSource(options);


export default AppDatasource;
