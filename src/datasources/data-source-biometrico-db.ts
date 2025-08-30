import "reflect-metadata";
import { DataSource } from "typeorm";
import { Employee } from "../entity/Employee";
import { Transaction } from "../entity/Transaction";
import dotenv from "dotenv";

dotenv.config();

const BiometricoDatasource = new DataSource({
    type: "mssql",
    host: `${process.env.BIOMETRICO_HOST}`,
    port: +process.env.BIOMETRICO_PORT,
    username: process.env.BIOMETRICO_USER,
    password: "TIC.2021$$",
    database: process.env.BIOMETRICO_DB,
    entities: [Employee, Transaction],
    synchronize: false,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
});

export default BiometricoDatasource;
