import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "../entity/User";
import { Token } from "../entity/Token";
import { SeederOptions } from 'typeorm-extension'


const options: DataSourceOptions & SeederOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'postgres',
    entities: [Token, User],
    synchronize: true,
};

const AppDatasource = new DataSource(options);


export default AppDatasource;